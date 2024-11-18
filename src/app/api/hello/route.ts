import { NextResponse } from "next/server";

export async function GET() {
  const data = { message: "Hello, API!" };
  return NextResponse.json(data);
}
