import { NextRequest, NextResponse } from "next/server";
import {db} from "@/lib/firebase";
import { doc, setDoc } from "firebase/firestore";

export async function POST(request: NextRequest) {
  try {
    const { uid, name, email, token } = await request.json();

    const user = await setDoc(doc(db, "users", uid), {
      name,
      email,
    });

    const res = NextResponse.json({
      success: true,
      user,
    });
    res.cookies.set("token", token, { httpOnly: true, path: "/" });
    return res;
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 400 }
    );
  }
}
