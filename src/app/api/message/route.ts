import { connectDB } from '@/lib/mongodb';
import { Message } from '@/models/message';
import { Stats } from '@/models/stats';

export async function POST(request: Request) {
    try {
        const formData = await request.formData();

        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');

        if (!name || !email || !subject || !message) {
            return new Response(JSON.stringify({ error: 'All fields are required' }), { status: 400 });
        }

        await connectDB()

        const newMessage = new Message({
            name,
            email,
            subject,
            message,
            unread: true,
        });

        await newMessage.save();

        const stats = await Stats.findOne();

        if (stats) {
            stats.message += 1;
            stats.unreadMessages += 1;
            await stats.save();
        } else {
            const newStats = new Stats({
                projects: 0,
                blogs: 0,
                message: 1,
                unreadMessages: 1,
            });
            await newStats.save();
        }

        return new Response(JSON.stringify({ message: 'Message sent successfully' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    }
}

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('_id');

        if (!id) {
            return new Response(JSON.stringify({ error: 'Message ID is required' }), { status: 400 });
        }

        await connectDB();

        const message = await Message.findById(id);

        if (!message) {
            return new Response(JSON.stringify({ error: 'Message not found' }), { status: 404 });
        }

        if (message.unread) {
            message.unread = false;
            await message.save();

            const stats = await Stats.findOne();
            if (stats && stats.unreadMessages > 0) {
                stats.unreadMessages -= 1;
                await stats.save();
            }
        }
        return new Response(JSON.stringify({ message }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    }
}