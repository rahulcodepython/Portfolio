import Freelance from "@/server/models/freelance";
import Connect from "@/server/database/connect";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { name, email, pricing, subject, message } = await request.json()
        await Connect();
        await Freelance.create({ name, email, pricing, subject, message })
        return NextResponse.json({ "msg": "Your record is accepted." })
    } catch (error) {
        return NextResponse.json(error)
    }
}