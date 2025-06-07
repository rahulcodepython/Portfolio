import { cookies } from 'next/headers';

export async function POST(req: Request) {
    const { username, password } = await req.json()

    if (!username || !password) {
        return new Response(JSON.stringify({ error: 'Username and password are required' }), {
            status: 400,
        })
    }

    if (username !== process.env.USERNAME || password !== process.env.PASSWORD) {
        return new Response(JSON.stringify({ error: 'Invalid username or password' }), {
            status: 400,
        })
    }


    const cookieStore = await cookies()
    cookieStore.set('API_KEY', process.env.API_KEY!, {
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/',
        sameSite: 'lax',
    })

    return new Response(JSON.stringify({ msg: 'Login successful' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    })
}
