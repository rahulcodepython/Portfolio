import { isAuthenticated } from "@/lib/auth"
import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"
import { errorResponse } from "./lib/response"

export async function proxy(request: NextRequest) {
    const authenticated = await isAuthenticated()
    const isAdminRoute = request.nextUrl.pathname.startsWith("/dashboard")
    const isApiRoute = request.nextUrl.pathname.startsWith("/api")
    const isLoginRoute = request.nextUrl.pathname === "/login"

    if (isAdminRoute && !authenticated) {
        return NextResponse.redirect(new URL("/login", request.url))
    }

    if (isApiRoute && !authenticated) {
        return NextResponse.json(errorResponse("Unauthorized"), { status: 401 })
    }

    if (isLoginRoute && authenticated) {
        return NextResponse.redirect(new URL("/dashboard", request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        "/dashboard/:path*",
        "/login",
        "/api/contacts",
        "/api/contacts/:path",
        "/api/projects",
        "/api/projects/:path",
        "/api/settings",
        "/api/skills",
        "/api/skills/:path",
        "/api/auth/logout"
    ],
}
