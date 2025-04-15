"use client";

import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Green Bar",
      data: [2.5, 3.2, 4, 2.1, 7, 2.3],
      backgroundColor: "#2D554E", // dark green
      borderRadius: 4,
      barThickness: 16,
    },
    {
      label: "Yellow Bar",
      data: [1.8, 4.1, 2.5, 2.2, 0, 3.5],
      backgroundColor: "#D2A43C", // yellow
      borderRadius: 4,
      barThickness: 16,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { display: false },
    tooltip: { enabled: false },
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: { font: { size: 12, weight: "500" }, color: "#2D554E" },
    },
    y: {
      min: 0,
      max: 8,
      ticks: {
        stepSize: 1,
        font: { size: 12 },
        color: "#2D554E",
      },
      grid: {
        color: "#E2E8F0",
        drawBorder: false,
      },
    },
  },
};

const StatisticsChart = () => {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm w-full max-w-[350px] min-w-[280px]">
      <h2 className="text-md font-semibold text-[#2D554E] mb-4">Statistics</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default StatisticsChart;