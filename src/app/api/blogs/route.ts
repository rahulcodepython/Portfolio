import { connectDB } from "@/lib/mongodb";
import { Blog } from "@/models/blog";

export async function GET(req: Request) {
    await connectDB();

    const blogs = await Blog.find();

    return new Response(JSON.stringify(blogs), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}