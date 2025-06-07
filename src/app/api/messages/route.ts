import { connectDB } from "@/lib/mongodb";
import { Message } from "@/models/message";

export async function GET(req: Request) {
    await connectDB();

    const messages = await Message.find();

    return new Response(JSON.stringify(messages), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}