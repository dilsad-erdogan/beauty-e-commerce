import React from 'react'
import { FaMoneyBillWave, FaTablets  } from "react-icons/fa";
import { SiCoinmarketcap } from "react-icons/si";
import { GiReceiveMoney } from "react-icons/gi";

const Widgets = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        <div className="flex flex-col justify-center items-center w-72 h-48 p-4 rounded-xl bg-gray-700 shadow-lg transition hover:scale-105 hover:shadow-xl">
          <FaMoneyBillWave className="text-6xl font-bold text-blue-500" />
          <span className="text-xl font-semibold text-white">22,690,852</span>
          <span className="text-sm font-bold text-gray-400 mt-2">Earn of the Month</span>
        </div>

        <div className="flex flex-col justify-center items-center w-72 h-48 p-4 rounded-xl bg-gray-700 shadow-lg transition hover:scale-105 hover:shadow-xl">
          <SiCoinmarketcap className="text-6xl font-bold text-red-500" />
          <span className="text-xl font-semibold text-white">$5,84,250</span>
          <span className="text-sm font-bold text-gray-400 mt-2">Earn Growth 33%</span>
        </div>

        <div className="flex flex-col justify-center items-center w-72 h-48 p-4 rounded-xl bg-gray-700 shadow-lg transition hover:scale-105 hover:shadow-xl">
          <FaTablets className="text-6xl font-bold text-yellow-500" />
          <span className="text-xl font-semibold text-white">69.5%</span>
          <span className="text-sm font-bold text-gray-400 mt-2">Conversion Rate</span>
        </div>

        <div className="flex flex-col justify-center items-center w-72 h-48 p-4 rounded-xl bg-gray-700 shadow-lg transition hover:scale-105 hover:shadow-xl">
          <GiReceiveMoney className="text-6xl font-bold text-orange-500" />
          <span className="text-xl font-semibold text-white">38.05%</span>
          <span className="text-sm font-bold text-gray-400 mt-2">Gross Profit Margin</span>
        </div>
    </div>
  )
}

export default Widgets