"use client";

import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";

ChartJS.register(ArcElement, Tooltip);

// const data = {
//   labels: ["Qatar", "Emirates", "Delta", "United"],
//   datasets: [
//     {
//       label: "Flight Share",
//       data: [25, 25, 25, 25],
//       backgroundColor: ["#D2A43C", "#2D554E", "#1E9EB3", "#46C2B0"],
//       borderWidth: 0,
//       cutout: "70%",
//       // height: 30,
//     },
//   ],
// };

// const options = {
//   responsive: true,
//   plugins: {
//     tooltip: {
//       enabled: false,
//     },
//   },
//   // height: 30,
// };

const data = {
  labels: ["Qatar", "Emirates", "Delta", "United"],
  datasets: [
    {
      label: "Flight Share",
      data: [25, 25, 25, 25],
      backgroundColor: ["#D2A43C", "#2D554E", "#1E9EB3", "#46C2B0"],
      borderWidth: 0,
      cutout: "75%", 
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    tooltip: {
      enabled: false,
    },
  },
  layout: {
    padding: 10, 
  },
};

const FlightShareChart = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-5 w-full h-[350px] ">
      <h2 className="text-md font-semibold text-[#2D554E] mb-4">Flights Share</h2>
      {/* <div className="relative w-full flex justify-center items-center">
        <Doughnut data={data} options={options} />
        <div className="absolute text-sm text-gray-600 font-medium">Flight Share</div>
      </div> */}
      <div className="relative w-[290px] h-[290px] mx-auto flex justify-center items-center">
  <Doughnut data={data} options={options} />
  <div className="absolute text-sm text-gray-600 font-medium">Flight Share</div>
</div>
    </div>
  );
};

export default FlightShareChart;