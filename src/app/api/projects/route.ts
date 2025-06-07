import { connectDB } from "@/lib/mongodb";
import { Project } from "@/models/project";

export async function GET(req: Request) {
    await connectDB();

    const projects = await Project.find();

    return new Response(JSON.stringify(projects), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}