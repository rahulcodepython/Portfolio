import { headers } from 'next/headers';

export async function getBaseUrl() {
    const headersList = await headers();
    const protocol = headersList.get('x-forwarded-proto') || 'http';
    const host = headersList.get('host') || 'localhost:3000';

    return `${protocol}://${host}`;
}
