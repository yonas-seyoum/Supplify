import { db } from "@/lib/firebase";
import { adminAuth } from "@/lib/firebaseAdmin";
import { collection, getDocs, query, where } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

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
    const q = query(collection(db, "sales"), where("userId", "==", uid));
    const salesSnapshot = await getDocs(q);
    const salesList = salesSnapshot.docs.map((doc) => doc.data());

    const salesData = {
      sales: [...salesList],
      totalRevenue: totalRevenue(salesList),
      totalOrders: totalOrders(salesList),
      totalSalesByCategory: TotalsalesByCategory(salesList),
    };

    return new Response(JSON.stringify(salesData), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

function TotalsalesByCategory(salesData: any[]) {
  const categoryTotals: { [key: string]: number } = {};
  let grandTotal = 0;
  salesData.forEach((record) => {
    if (!categoryTotals[record.category]) {
      categoryTotals[record.category] = 0;
    }
    categoryTotals[record.category] += record.sales;
    grandTotal += record.sales;
  });

  const result = Object.keys(categoryTotals).map((category) => ({
    category,
    sales: categoryTotals[category],
  }));
  return result;
}

function totalRevenue(salesData: any[]) {
  return salesData.reduce((total, record) => total + record.sales, 0);
}

function totalOrders(salesData: any[]) {
  return salesData.reduce((total, record) => total + record.orders, 0);
}