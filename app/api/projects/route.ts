import {
    createProject,
    getAllProjects,
} from "@/lib/database/queries/projects.queries";
import { errorResponse, successResponse } from "@/lib/response";
import { projectSchema } from "@/lib/validations";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const projects = getAllProjects();
        return NextResponse.json(
            successResponse(projects, "Projects fetched successfully"),
        );
    } catch (error) {
        return NextResponse.json(errorResponse("Internal server error"), { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const data = projectSchema.parse(body);

        const project = createProject(data);

        return NextResponse.json(
            successResponse(project, "Project created successfully"),
        );
    } catch (error) {
        if (error instanceof Error && error.message === "Unauthorized") {
            return NextResponse.json(errorResponse("Unauthorized"), { status: 401 });
        }
        return NextResponse.json(errorResponse("Invalid request"), { status: 500 });
    }
}
