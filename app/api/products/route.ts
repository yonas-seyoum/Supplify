import {
  collection,
  getDocs,
  setDoc,
  deleteDoc,
  doc,
  query,
  where,
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
      collection(db, "products"),
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

export async function POST(request: Request) {
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
    const { name, description, price, quantity, threshold, barcode, category } =
      await request.json();

    const productRef = doc(collection(db, "products"));
    const newProduct = {
      userId: uid,
      id: productRef.id,
      name,
      description,
      price,
      quantity,
      threshold,
      barcode,
      category,
      createdAt: Date.now(),
    };

    await setDoc(productRef, newProduct);

    const productsCol = query(
      collection(db, "products"),
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

export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json();
    if (!id) {
      return NextResponse.json(
        { success: false, message: "Missing product id" },
        { status: 400 }
      );
    }

    await deleteDoc(doc(db, "products", id));

    return NextResponse.json({ success: true, id });
  } catch (error: any) {
    console.error("Error deleting product:", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
