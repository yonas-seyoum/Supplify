import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export async function GET() {
  try {
    const salesSnapshot = await getDocs(collection(db, "sales"));
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