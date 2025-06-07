import { NextResponse } from 'next/server';

export async function DELETE() {
    const response = NextResponse.json({ message: 'Logged out successfully' });
    response.cookies.delete('API_KEY'); // Clear the api_key cookie
    return response;
}