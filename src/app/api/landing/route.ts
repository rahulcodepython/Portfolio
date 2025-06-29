import { connectDB } from "@/lib/mongodb";
import { Blog } from "@/models/blog";
import { Project } from "@/models/project";
import { Resume } from "@/models/resume";

export async function GET(req: Request) {
    await connectDB();

    const blogs = await Blog.find().limit(3);
    const projects = await Project.find({ pin: true });
    const resume = await Resume.findOne();

    return new Response(JSON.stringify({ blogs, projects, resume }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}