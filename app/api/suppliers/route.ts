import {
  collection,
  getDocs,
  setDoc,
  deleteDoc,
  doc,
  where,
  query,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { NextRequest, NextResponse } from "next/server";
import { adminAuth } from "@/lib/firebaseAdmin";

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  if (!authHeader) {
    return NextResponse.json(
      { success: false, message: "No token" },
      { status: 401 }
    );
  }

  const token = authHeader.split(" ")[1];
  const decoded = await adminAuth.verifyIdToken(token);
  const uid = decoded.uid;

  try {
    const productsCol = query(
      collection(db, "suppliers"),
      where("userId", "==", uid)
    );
    const productSnapshot = await getDocs(productsCol);
    const productList = productSnapshot.docs.map((doc) => doc.data());
    return NextResponse.json(productList);
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 400 }
    );
  }
}

export async function POST(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  if (!authHeader) {
    return NextResponse.json(
      { success: false, message: "No token" },
      { status: 401 }
    );
  }

  const token = authHeader.split(" ")[1];
  const decoded = await adminAuth.verifyIdToken(token);
  const uid = decoded.uid;
  try {
    const { name, contact, email, phone, address, category, status } =
      await request.json();

    const supplierRef = doc(collection(db, "suppliers"));
    
    const newProduct = {
      userId: uid,
      id: supplierRef.id,
      name,
      contact,
      email,
      phone,
      address,
      category,
      status,
      createdAt: Date.now(),
    };

    await setDoc(supplierRef, newProduct);

    return NextResponse.json({ success: true, id: supplierRef.id });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 400 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json();
    if (!id) {
      return NextResponse.json(
        { success: false, message: "Missing supplier id" },
        { status: 400 }
      );
    }

    await deleteDoc(doc(db, "suppliers", id));

    return NextResponse.json({ success: true, id });
  } catch (error: any) {
    console.error("Error deleting supplier:", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}