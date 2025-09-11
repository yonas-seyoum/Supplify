import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { token } = await request.json();

    const response = NextResponse.json({ succes: true });
    response.cookies.set("token", token, { httpOnly: true, path: "/" });

    return response;
  } catch (err: any) {
    return NextResponse.json(
      { succes: false, message: err.message },
      { status: 400 }
    );
  }
}
