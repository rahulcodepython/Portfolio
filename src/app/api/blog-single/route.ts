import { connectDB } from "@/lib/mongodb";
import { Blog } from "@/models/blog";

export async function GET(req: Request) {
    await connectDB();

    const url = new URL(req.url);
    const blogId = url.searchParams.get('_id');

    if (!blogId) {
        return new Response(JSON.stringify({ error: 'Blog ID is required' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    const blog = await Blog.findById(blogId);

    if (!blog) {
        return new Response(JSON.stringify({ error: 'Blog not found' }), {
            status: 404,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    const response = await fetch(blog.content)
    if (!response.ok) {
        return new Response(JSON.stringify({ error: 'Failed to fetch blog content' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
    const content = await response.text();

    return new Response(JSON.stringify({ content }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}