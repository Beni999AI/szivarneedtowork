import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const { email } = await request.json();

    if (!email) {
        return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    try {
        const API_KEY = process.env.MAILCHIMP_API_KEY;
        const API_SERVER = process.env.MAILCHIMP_API_SERVER;
        const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

        const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

        const data = {
            email_address: email,
            status: 'subscribed',
        };

        const options = {
            method: 'POST',
            headers: {
                Authorization: `apikey ${API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        };

        const response = await fetch(url, options);

        if (response.status >= 400) {
            const errorData = await response.json();

            // Check if member already exists
            if (errorData.title === "Member Exists") {
                return NextResponse.json({ error: 'Ez az email cím már fel van iratkozva!' }, { status: 400 });
            }

            return NextResponse.json({ error: errorData.detail || 'Hiba történt a feliratkozás során.' }, { status: 400 });
        }

        return NextResponse.json({ message: 'Sikeres feliratkozás!' }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Belső szerverhiba történt.' }, { status: 500 });
    }
}
