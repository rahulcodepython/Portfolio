import { logout } from "@/lib/auth"
import { errorResponse, successResponse } from "@/lib/response"
import { NextResponse } from "next/server"

export async function POST() {
  try {
    await logout()
    return NextResponse.json(successResponse({}, "Logout successful"))
  } catch (error) {
    return NextResponse.json(errorResponse("Logout failed"), { status: 500 })
  }
}
