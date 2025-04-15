"use client";

import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";

ChartJS.register(ArcElement, Tooltip);

const data = {
  labels: ["Qatar", "Emirates", "Delta", "United"],
  datasets: [
    {
      label: "Flight Share",
      data: [25, 25, 25, 25], // Equal share, adjust as needed
      backgroundColor: ["#D2A43C", "#2D554E", "#1E9EB3", "#46C2B0"],
      borderWidth: 0,
      cutout: "70%",
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    tooltip: {
      enabled: false,
    },
  },
};

const FlightShareChart = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-5 w-full max-w-[350px] min-w-[280px]">
      <h2 className="text-md font-semibold text-[#2D554E] mb-4">Flights Share</h2>
      <div className="relative w-full flex justify-center items-center">
        <Doughnut data={data} options={options} />
        <div className="absolute text-sm text-gray-600 font-medium">Flight Share</div>
      </div>
    </div>
  );
};

export default FlightShareChart;