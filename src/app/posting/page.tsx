"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function PostingPage() {
  const [password, setPassword] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  if (!unlocked) {
    return (
      <main className="min-h-screen bg-[#FEF3C7] flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl p-10 shadow-xl border-2 border-[#F59E0B]/30 w-full max-w-sm flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-[#1F2937] text-center">Admin belépés</h1>
          <input
            type="password"
            placeholder="Jelszó"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && password && setUnlocked(true)}
            className="border-2 border-[#F59E0B]/50 rounded-xl px-4 py-3 focus:outline-none focus:border-[#EC4899] text-[#1F2937]"
          />
          <button
            onClick={() => password && setUnlocked(true)}
            className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] text-white font-bold py-3 rounded-xl hover:opacity-90 transition-opacity"
          >
            Belépés
          </button>
        </div>
      </main>
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content, password }),
      });

      if (res.status === 401) {
        setStatus("error");
        setErrorMsg("Helytelen jelszó.");
        setUnlocked(false);
        return;
      }

      if (!res.ok) {
        setStatus("error");
        setErrorMsg("Hiba történt. Próbáld újra.");
        return;
      }

      setStatus("success");
      setTitle("");
      setContent("");
    } catch {
      setStatus("error");
      setErrorMsg("Hálózati hiba. Próbáld újra.");
    }
  }

  return (
    <main className="min-h-screen bg-[#FEF3C7]">
      <Navbar />
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#1F2937] mb-10 text-center">Új bejegyzés</h1>

        {status === "success" && (
          <div className="bg-white border-2 border-green-400 rounded-2xl px-6 py-4 mb-8 text-green-700 font-semibold text-center">
            ✓ Bejegyzés sikeresen közzétéve!
          </div>
        )}

        {status === "error" && (
          <div className="bg-white border-2 border-red-400 rounded-2xl px-6 py-4 mb-8 text-red-600 font-semibold text-center">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border-2 border-[#F59E0B]/20 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-bold text-[#1F2937]">Cím</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="Bejegyzés címe..."
              className="border-2 border-[#F59E0B]/50 rounded-xl px-4 py-3 focus:outline-none focus:border-[#EC4899] text-[#1F2937] text-lg"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-bold text-[#1F2937]">Tartalom</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              placeholder="Írd ide a bejegyzés szövegét..."
              className="border-2 border-[#F59E0B]/50 rounded-xl px-4 py-3 focus:outline-none focus:border-[#8B5CF6] text-[#1F2937] text-base leading-relaxed min-h-[400px] resize-y"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] text-white font-bold py-4 rounded-2xl hover:opacity-90 transition-opacity disabled:opacity-60 text-lg"
          >
            {status === "loading" ? "Közzétéve..." : "Közzétesz"}
          </button>
        </form>
      </section>
      <Footer />
    </main>
  );
}
