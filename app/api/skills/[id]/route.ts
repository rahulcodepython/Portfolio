import { deleteSkill, updateSkill } from "@/lib/database/queries/skills.queries"
import { errorResponse, successResponse } from "@/lib/response"
import { skillSchema } from "@/lib/validations"
import { revalidateTag } from "next/cache"
import { NextResponse } from "next/server"

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params
        const body = await request.json()
        const data = skillSchema.parse(body)

        const skill = await updateSkill(Number.parseInt(id), data)

        if (!skill) {
            return NextResponse.json(errorResponse("Skill not found"), { status: 404 })
        }

        revalidateTag('home-data', 'max')

        return NextResponse.json(successResponse(skill, "Skill updated successfully"))
    } catch (error) {
        if (error instanceof Error && error.message === "Unauthorized") {
            return NextResponse.json(errorResponse("Unauthorized"), { status: 401 })
        }
        return NextResponse.json(errorResponse("Invalid request"), { status: 400 })
    }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params
        await deleteSkill(Number.parseInt(id))

        revalidateTag('home-data', 'max')

        return NextResponse.json(successResponse({}, "Skill deleted successfully"))
    } catch (error) {
        if (error instanceof Error && error.message === "Unauthorized") {
            return NextResponse.json(errorResponse("Unauthorized"), { status: 401 })
        }
        return NextResponse.json(errorResponse("Failed to delete skill"), { status: 500 })
    }
}
