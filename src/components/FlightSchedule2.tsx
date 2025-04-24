"use client";

import React from "react";
import ReactApexChart from "react-apexcharts";

const FlightsScheduleChart = () => {
  const series = [
    {
      name: "Passengers",
      data: [3, 2, 4, 3, 6, 4],
    },
    {
      name: "Bookings",
      data: [3, 4, 3, 2, 5, 5],
    },
  ];

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "area",
      height: 300,
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: ["#2D4A41", "#E6B925"],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.3,
        opacityTo: 0,
        stops: [0, 100],
      },
    },
    markers: {
      size: 6,
      colors: ["#2D4A41", "#E6B925"],
      strokeColors: "#fff",
      strokeWidth: 2,
      hover: { size: 8 },
      discrete: [
        {
          seriesIndex: 0,
          dataPointIndex: 2,
          fillColor: "#2D4A41",
          strokeColor: "#fff",
          size: 8,
        },
        {
          seriesIndex: 1,
          dataPointIndex: 4,
          fillColor: "#E6B925",
          strokeColor: "#fff",
          size: 8,
        },
      ],
    },
    tooltip: {
      y: {
        formatter: (val: number) => `${val * 1000} Passengers`,
      },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      labels: {
        style: {
          fontSize: "14px",
          fontWeight: 500,
          colors: "#374151",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          fontSize: "14px",
          colors: "#4B5563",
        },
      },
    },
    grid: {
      show: false,
    },
    legend: { show: false },
  };

  return (
    <div className="bg-white rounded-xl p-4 shadow-md w-full min-w-[600px] h-[350px]">
      <h2 className="text-lg font-semibold text-[#2D4A41] mb-2">
        Flights Schedule
      </h2>
      <ReactApexChart options={options} series={series} type="area" height={300} />
    </div>
  );
};

export default FlightsScheduleChart;