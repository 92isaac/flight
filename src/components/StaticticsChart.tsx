"use client";

import React from "react";
import ReactApexChart from "react-apexcharts";

const StatisticsChart = () => {
  const series = [
    {
      name: "Economy",
      data: [2, 3, 3, 2, 4, 2],
    },
    {
      name: "Business",
      data: [2, 4, 3, 3, 3, 4],
    },
  ];

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "bar",
      stacked: true,
      toolbar: { show: false },
    },
    colors: ["#30433E", "#E6B925"],
    plotOptions: {
      bar: {
        columnWidth: "40%",
        borderRadius: 3,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 0,
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      labels: {
        style: {
          colors: "#2D4A41",
          fontWeight: 500,
        },
      },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      max: 7,
      tickAmount: 7,
      labels: {
        style: {
          colors: "#6B7280",
          fontSize: "13px",
        },
      },
    },
    grid: {
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    legend: {
      show: false,
    },
    tooltip: {
      y: {
        formatter: (val: number) => `${val} Trips`,
      },
    },
  };

  return (
    <div className="bg-white rounded-xl p-4 shadow-md w-full h-[350px]">
      <h2 className="text-lg font-semibold text-[#2D4A41] mb-2">
        Statistics
      </h2>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={300}
      />
    </div>
  );
};

export default StatisticsChart;