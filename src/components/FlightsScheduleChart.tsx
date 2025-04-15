/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler
);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Passengers",
      data: [3, 2, 3.5, 2.5, 5.8, 4.2],
      fill: true,
      backgroundColor: "rgba(45, 85, 78, 0.1)",
      borderColor: "#2D554E",
      tension: 0.4,
      pointBackgroundColor: "#2D554E",
      pointBorderColor: "#2D554E",
      pointRadius: [4, 4, 6, 4, 4, 4],
      pointHoverRadius: 6,
    },
    {
      label: "Schedule",
      data: [3, 3.8, 2.5, 3.2, 6, 4.5],
      fill: true,
      backgroundColor: "rgba(210, 164, 60, 0.1)",
      borderColor: "#D2A43C",
      tension: 0.4,
      pointBackgroundColor: "#D2A43C",
      pointBorderColor: "#D2A43C",
      pointRadius: [4, 4, 4, 4, 6, 4],
      pointHoverRadius: 6,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { display: false },
    tooltip: {
      backgroundColor: "#2D554E",
      padding: 10,
      titleFont: { weight: "bold" as const, size: 14 },
      bodyFont: { size: 13 },
      callbacks: {
        label: (context: { raw: number }) =>
          context.raw * 1000 + " Passengers", // Showing "3500 Passengers"
      },
    },
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: {
        color: "#2D554E",
        font: { size: 13 },
      },
    },
    y: {
      min: 0,
      max: 6.5,
      ticks: {
        stepSize: 1,
        color: "#2D554E",
        font: { size: 13 },
      },
      grid: {
        color: "#E2E8F0",
        drawBorder: false,
      },
    },
  },
};

const FlightsScheduleChart = () => {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm w-full max-w-[600px] min-w-[320px]">
      <h2 className="text-md font-semibold text-[#2D554E] mb-4">
        Flights Schedule
      </h2>
      {/* @ts-ignore */}
      <Line data={data} options={options} />
    </div>
  );
};

export default FlightsScheduleChart;