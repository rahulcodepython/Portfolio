import { connectDB } from "@/lib/mongodb";
import { Stats } from "@/models/stats";

export async function GET(req: Request) {
    await connectDB();

    const stats = await Stats.findOne();

    if (!stats) {
        const newStats = new Stats({
            projects: 0,
            blogs: 0,
            message: 0,
            unreadMessages: 0,
        });

        const savedStat = await newStats.save();
        return new Response(JSON.stringify(savedStat), {
            status: 201,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    return new Response(JSON.stringify(stats), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}