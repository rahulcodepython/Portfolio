import Connect from "@/server/database/connect";
import Contact from "@/server/models/contact";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { name, email, subject, message } = await request.json()
        await Connect();
        await Contact.create({ name, email, subject, message })
        return NextResponse.json({ "msg": "Your record is accepted." })
    } catch (error) {
        return NextResponse.json(error)
    }
}