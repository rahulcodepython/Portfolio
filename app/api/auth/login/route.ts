import { login } from "@/lib/auth"
import { errorResponse, successResponse } from "@/lib/response"
import { loginSchema } from "@/lib/validations"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { username, password } = loginSchema.parse(body)

    const success = await login(username, password)

    if (success) {
      return NextResponse.json(successResponse({}, "Login successful"))
    } else {
      return NextResponse.json(errorResponse("Invalid credentials"), { status: 401 })
    }
  } catch (error) {
    return NextResponse.json(errorResponse("Invalid request"), { status: 400 })
  }
}
