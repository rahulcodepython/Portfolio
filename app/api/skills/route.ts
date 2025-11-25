import { createSkill, getAllSkills } from "@/lib/database/queries/skills.queries"
import { errorResponse, successResponse } from "@/lib/response"
import { skillSchema } from "@/lib/validations"
import { NextResponse } from "next/server"

export async function GET() {
    try {
        const skills = getAllSkills()
        return NextResponse.json(successResponse(skills, "Skills fetched successfully"))
    } catch (error) {
        return NextResponse.json(errorResponse("Failed to fetch skills"), { status: 500 })
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const data = skillSchema.parse(body)

        const skill = createSkill(data)
        return NextResponse.json(successResponse(skill, "Skill created successfully"), { status: 201 })
    } catch (error) {
        if (error instanceof Error && error.message === "Unauthorized") {
            return NextResponse.json(errorResponse("Unauthorized"), { status: 401 })
        }
        return NextResponse.json(errorResponse("Invalid request"), { status: 500 })
    }
}
