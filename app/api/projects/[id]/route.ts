import {
	deleteProject,
	updateProject
} from "@/lib/database/queries/projects.queries";
import { errorResponse, successResponse } from "@/lib/response";
import { projectSchema } from "@/lib/validations";
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function PUT(
	request: Request,
	{ params }: { params: Promise<{ id: string }> },
) {
	try {
		const { id } = await params;
		const body = await request.json();
		const data = projectSchema.parse(body);

		const project = await updateProject(Number.parseInt(id), data);

		if (!project) {
			return NextResponse.json(errorResponse("Project not found"), {
				status: 404,
			});
		}

		revalidateTag('home-data', 'max')

		return NextResponse.json(
			successResponse(project, "Project updated successfully"),
		);
	} catch (error) {
		if (error instanceof Error && error.message === "Unauthorized") {
			return NextResponse.json(errorResponse("Unauthorized"), { status: 401 });
		}
		return NextResponse.json(errorResponse("Invalid request"), { status: 500 });
	}
}

export async function DELETE(
	request: Request,
	{ params }: { params: Promise<{ id: string }> },
) {
	try {
		const { id } = await params;
		await deleteProject(Number.parseInt(id));

		revalidateTag('home-data', 'max')

		return NextResponse.json(
			successResponse(null, "Project deleted successfully"),
		);
	} catch (error) {
		if (error instanceof Error && error.message === "Unauthorized") {
			return NextResponse.json(errorResponse("Unauthorized"), { status: 401 });
		}
		return NextResponse.json(errorResponse("Failed to delete project"), {
			status: 500,
		});
	}
}
