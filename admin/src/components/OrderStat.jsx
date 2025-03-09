import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Success", value: 55, color: "#28C76F" },
  { name: "Pending", value: 33, color: "#FF9F43" },
  { name: "Failed", value: 12, color: "#EA5455" },
];

const OrderStat = () => {
  return (
    <div className="rounded-xl bg-gray-700 p-4 shadow-lg transition hover:scale-105 hover:shadow-xl">
      <h2 className="font-bold mb-4 text-lg">Order Status</h2>
      <p className="text-gray-400 text-sm">Total Earnings of the Month</p>

      <div className="flex justify-center items-center mt-4">
        <ResponsiveContainer width={180} height={180}>
          <PieChart>
            <Pie data={data} innerRadius={60} outerRadius={80} dataKey="value" stroke="none">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip contentStyle={{ background: "#1e1e1e", borderRadius: "8px", color: "#fff" }} />
          </PieChart>
        </ResponsiveContainer>
        
        <div className="absolute text-center">
          <p className="text-xl font-bold">100%</p>
          <p className="text-xs text-gray-400">Ratio</p>
        </div>
      </div>

      <div className="mt-4 space-y-2 text-sm">
        {data.map((item, index) => (
          <div key={index} className="flex justify-between">
            <span className="flex items-center">
              <span className="w-3 h-3 mr-2 rounded-full" style={{ background: item.color }}></span>
              {item.name}
            </span>
            <span className="text-gray-400">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderStat;