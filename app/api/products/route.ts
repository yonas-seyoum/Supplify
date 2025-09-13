import {
  collection,
  getDocs,
  setDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const productsCol = collection(db, "products");
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
  try {
    const { name, description, price, quantity, threshold, barcode, category } =
      await request.json();

    const productRef = doc(collection(db, "products"));
    
    const newProduct = {
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

    return NextResponse.json({ success: true, id: productRef.id });
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
