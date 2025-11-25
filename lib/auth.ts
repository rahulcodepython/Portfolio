import { cookies } from "next/headers"

const SESSION_COOKIE = process.env.SESSION_COOKIE!
const ADMIN_USERNAME = process.env.ADMIN_USERNAME!
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD!

export async function login(username: string, password: string): Promise<boolean> {
  // Simple credential check
  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    const cookieStore = await cookies()
    // Create a simple session token (in production, use proper JWT)
    const sessionToken = Buffer.from(`${username}:${Date.now()}`).toString("base64")
    cookieStore.set(SESSION_COOKIE, sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })
    return true
  }
  return false
}

export async function logout(): Promise<void> {
  const cookieStore = await cookies()
  cookieStore.delete(SESSION_COOKIE)
}

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies()
  const session = cookieStore.get(SESSION_COOKIE)
  return !!session
}

export async function requireAuth(): Promise<void> {
  const authenticated = await isAuthenticated()
  if (!authenticated) {
    throw new Error("Unauthorized")
  }
}

export async function getSession(): Promise<string | undefined> {
  const cookieStore = await cookies()
  return cookieStore.get(SESSION_COOKIE)?.value
}