import React, { useState } from "react";
import { X, Search, Plus, Minus } from "lucide-react";
interface ProcessOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}
export const ProcessOrderModal: React.FC<ProcessOrderModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [orderType, setOrderType] = useState<"inbound" | "outbound">(
    "outbound"
  );
  const [selectedProducts, setSelectedProducts] = useState<
    Array<{
      id: number;
      name: string;
      quantity: number;
    }>
  >([]);
  const [searchTerm, setSearchTerm] = useState("");
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      stock: 45,
    },
    {
      id: 2,
      name: "Office Chair",
      stock: 12,
    },
    {
      id: 3,
      name: "Smartphone",
      stock: 23,
    },
    
  ];
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      type: orderType,
      products: selectedProducts,
      date: new Date(),
    });
    onClose();
  };
  const addProduct = (product: { id: number; name: string }) => {
    if (!selectedProducts.find((p) => p.id === product.id)) {
      setSelectedProducts([
        ...selectedProducts,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  };
  const updateQuantity = (id: number, change: number) => {
    setSelectedProducts(
      selectedProducts.map((product) =>
        product.id === id
          ? {
              ...product,
              quantity: Math.max(1, product.quantity + change),
            }
          : product
      )
    );
  };
  const removeProduct = (id: number) => {
    setSelectedProducts(
      selectedProducts.filter((product) => product.id !== id)
    );
  };
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/50 transition-opacity" />
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
          <div className="absolute right-0 top-0 pr-4 pt-4">
            <button
              type="button"
              className="rounded-md bg-white text-gray-400 hover:text-gray-500"
              onClick={onClose}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
              <h3 className="text-lg font-semibold leading-6 text-gray-900">
                Process Order
              </h3>
              <form onSubmit={handleSubmit} className="mt-6">
                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Order Type
                    </label>
                    <div className="mt-2 grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        className={`px-3 py-2 text-sm font-medium rounded-md ${
                          orderType === "inbound"
                            ? "bg-blue-600 text-white"
                            : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                        }`}
                        onClick={() => setOrderType("inbound")}
                      >
                        Inbound
                      </button>
                      <button
                        type="button"
                        className={`px-3 py-2 text-sm font-medium rounded-md ${
                          orderType === "outbound"
                            ? "bg-blue-600 text-white"
                            : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                        }`}
                        onClick={() => setOrderType("outbound")}
                      >
                        Outbound
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Add Products
                    </label>
                    <div className="mt-2 relative">
                      <input
                        type="text"
                        className="block w-full border border-gray-300 rounded-md shadow-sm py-2 pl-10 pr-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    </div>
                    {searchTerm && (
                      <div className="mt-2 max-h-40 overflow-y-auto border border-gray-200 rounded-md">
                        {products
                          .filter((product) =>
                            product.name
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase())
                          )
                          .map((product) => (
                            <button
                              key={product.id}
                              type="button"
                              className="w-full px-4 py-2 text-left hover:bg-gray-50"
                              onClick={() => addProduct(product)}
                            >
                              {product.name}
                            </button>
                          ))}
                      </div>
                    )}
                  </div>
                  {selectedProducts.length > 0 && (
                    <div className="border rounded-md overflow-hidden">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                              Product
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                              Quantity
                            </th>
                            <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {selectedProducts.map((product) => (
                            <tr key={product.id}>
                              <td className="px-4 py-3 text-sm text-gray-900">
                                {product.name}
                              </td>
                              <td className="px-4 py-3">
                                <div className="flex items-center space-x-2">
                                  <button
                                    type="button"
                                    className="p-1 rounded-md hover:bg-gray-100"
                                    onClick={() =>
                                      updateQuantity(product.id, -1)
                                    }
                                  >
                                    <Minus className="h-4 w-4" />
                                  </button>
                                  <span className="text-sm">
                                    {product.quantity}
                                  </span>
                                  <button
                                    type="button"
                                    className="p-1 rounded-md hover:bg-gray-100"
                                    onClick={() =>
                                      updateQuantity(product.id, 1)
                                    }
                                  >
                                    <Plus className="h-4 w-4" />
                                  </button>
                                </div>
                              </td>
                              <td className="px-4 py-3 text-right">
                                <button
                                  type="button"
                                  className="text-red-600 hover:text-red-800"
                                  onClick={() => removeProduct(product.id)}
                                >
                                  Remove
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                  <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                    <button
                      type="submit"
                      className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                    >
                      Process Order
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={onClose}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
