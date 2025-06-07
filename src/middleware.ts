import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
    const cookieKey = request.cookies.get('API_KEY')?.value
    const expectedKey = process.env.API_KEY

    const isAuthenticated = cookieKey === expectedKey

    const { pathname } = request.nextUrl

    // If trying to access dashboard but not authenticated
    if (pathname.startsWith('/dashboard') && !isAuthenticated) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    // If trying to access login page but already authenticated
    if (pathname.startsWith('/login') && isAuthenticated) {
        return NextResponse.redirect(new URL('/dashboard', request.url))
    }

    return NextResponse.next()
}
