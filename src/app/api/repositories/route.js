import Repositories from "@/server/models/repositories";
import Connect from "@/server/database/connect";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        await Connect();
        const repositories = await Repositories.find()
        return NextResponse.json(repositories)
    } catch (error) {
        return NextResponse.json(error)
    }
}