import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { date: "05 Dec", value: 100 },
  { date: "10 Dec", value: 120 },
  { date: "15 Dec", value: 150 },
  { date: "20 Dec", value: 110 },
  { date: "25 Dec", value: 180 },
  { date: "30 Dec", value: 130 },
];

const GoalComp = () => {
  return (
    <div className="rounded-xl bg-gray-700 p-4 shadow-lg transition hover:scale-105 hover:shadow-xl">
        <h2 className="font-bold mb-4 text-lg">Goal Completion</h2>

        <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data}>
                <XAxis dataKey="date" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip contentStyle={{ background: "#1e1e1e", borderRadius: "8px", color: "#fff" }} />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#4c9aff" strokeWidth={2} dot={{ r: 4 }} />
            </LineChart>
        </ResponsiveContainer>

        <p className="text-gray-400 text-sm mt-2">🎯 December Month - Avg Goal Completion 78%</p>
    </div>
  );
};

export default GoalComp;