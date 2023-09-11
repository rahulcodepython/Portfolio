import Projects from "@/server/models/projects";
import Connect from "@/server/database/connect";
import { NextResponse } from "next/server";
export async function GET(request) {
    try {
        await Connect();
        const projects = await Projects.find()
        return NextResponse.json(projects)
    } catch (error) {
        return NextResponse.json(error)
    }
}