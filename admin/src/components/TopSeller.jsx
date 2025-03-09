import React from "react";
import { useSelector } from "react-redux";

const TopSeller = () => {
  const orders = useSelector((state) => state.order.orders);
  const products = useSelector((state) => state.product.products);
  
  const recentOrders = [...orders].sort((a, b) => new Date(b.date_time) - new Date(a.date_time)).slice(0, 10);

  const getProductName = (productId) => {
    const product = products.find((p) => p._id === productId);
    return product ? product.name : "Unknown Product";
  };

  return (
    <div className="rounded-xl bg-gray-700 p-4 shadow-lg transition hover:scale-105 hover:shadow-xl">
      <h2 className="font-bold mb-4 text-lg">Top Seller</h2>

      <ul className="space-y-4">
        {recentOrders.length > 0 ? (
          recentOrders.map((order, index) => (
            <li key={index} className="bg-gray-800 p-3 rounded-lg">
              <p className="text-sm font-semibold">Order #{index + 1}</p>
              <ul className="text-sm text-gray-300 mt-2">
                {order.products.map((item, i) => (
                  <li key={i} className="flex justify-between border-b border-gray-600 py-1">
                    <span>🛒 {getProductName(item.product)}</span>
                    <span className="text-gray-400">x{item.quantity}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))
        ) : (
          <p className="text-gray-400">No recent orders found.</p>
        )}
      </ul>
    </div>
  );
};

export default TopSeller;