# Blog Fix Design — 2026-04-02

## Problem

The astrologer client's blog system has two broken behaviours:

1. **Posting fails** — `savePosts()` throws an unhandled exception (Vercel Blob blocks all operations when the Advanced Operations free-tier limit is exceeded). The client sees "Hiba történt. Próbáld újra."
2. **Posts never appear** — `getPosts()` calls `list()` on every single page load of `/aktualis-irasok`. `list()` is a Blob Advanced Operation. Free tier: 1000/month. Once exhausted, `list()` fails and the page falls back to hardcoded posts permanently.
3. **Data corruption risk** — when `list()` fails inside the POST handler's `getPosts()` call, it returns hardcoded posts, and `savePosts([newPost, ...hardcodedPosts])` silently overwrites any previously user-uploaded posts.

## Root Cause

`src/lib/posts.ts` → `getPosts()` uses `list({ prefix: 'posts.json' })` to find the blob URL. `list` is a Vercel Blob Advanced Operation. The `/aktualis-irasok` page is fully dynamic (`ƒ` in build output), so every page visit triggers one `list()` call. A moderately visited site exhausts the 1000/month free quota in days.

## Solution: Option A — Direct URL + ISR

### 1. `src/lib/posts.ts` — eliminate `list()`

Since `posts.json` is stored with `addRandomSuffix: false`, its URL is deterministic:

```
https://<storeId>.public.blob.vercel-storage.com/posts.json
```

The store ID is extracted from `BLOB_READ_WRITE_TOKEN` by splitting on `_` and taking index 3:

```
vercel_blob_rw_HHCOEbKGu5wpWeqG_... → storeId = HHCOEbKGu5wpWeqG
```

`getPosts()` fetches the URL directly with `cache: 'no-store'`. On 404 or any fetch failure, falls back to hardcoded posts (handles first-run scenario). Zero Advanced Operations ever called.

`savePosts()` is unchanged — `put()` is a Basic Operation.

### 2. `src/app/aktualis-irasok/page.tsx` — add ISR

```ts
export const revalidate = 86400;
```

The page is cached for 24 hours. During the cache window, no blob calls happen. After 24h the page regenerates with one fresh fetch. This means even if direct-URL fetching were somehow counted, it only happens once per day maximum.

### 3. `src/app/api/posts/route.ts` — revalidatePath + error handling

After a successful `savePosts()`:
- Call `revalidatePath('/aktualis-irasok')` to invalidate the ISR cache immediately, so the new post appears on the page right away.
- Wrap `savePosts()` in try-catch to return a proper error response instead of crashing with an unhandled 500.

## Files Changed

| File | Change |
|------|--------|
| `src/lib/posts.ts` | Replace `list()` with direct URL construction from token |
| `src/app/aktualis-irasok/page.tsx` | Add `export const revalidate = 86400` |
| `src/app/api/posts/route.ts` | Add `revalidatePath` + try-catch around `savePosts()` |

## What Is NOT Changed

- No design changes to any page
- No changes to `savePosts()` internals
- No new dependencies
- No changes to the posting form UI
- No changes to password logic

## Success Criteria

1. Client can submit a new post and see it appear on `/aktualis-irasok` immediately
2. The Vercel Blob Advanced Operations counter stays near zero (0 per page load, 0 per post submission)
3. The blog page serves cached HTML within the 24h window
