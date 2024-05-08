import React, { useEffect, useRef } from "react";
import { Chart, ChartDataset } from "chart.js/auto";

type ChartData = {
  labels: string[];
  datasets: ChartDataset<'line'>[];
};

const ChartTrends = (): React.ReactElement => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart<"line", ChartData, string> | null>(null);

  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const data: ChartData = {
    labels: labels,
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40, 30],
        fill: true, 
        borderColor: "rgba(208, 230, 245, 1)", 
        tension: 0.1,
      },
    ],
  };

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
        
        const gradient = ctx.createLinearGradient(0, 0, 300, 0);
        gradient.addColorStop(0, "rgba(208, 230, 245, 1)");
        gradient.addColorStop(1, "rgba(208, 230, 245, 0)");

        chartInstance.current = new Chart(ctx, {
          type: "line",
          data: {
            labels: labels,
            datasets: [
              {
                backgroundColor: gradient,
                fill: true,
                data: data.datasets[0].data,
                borderColor: "rgba(33, 150, 243, 1)",
              },
            ],
          },
          options: {
            scales: {
              x: {
                grid: {
                  display: false, 
                },
              },
              y: {
                beginAtZero: true,
                position: "right",
                grid: {
                  color: "rgba(33, 150, 243, 0.3)", 
                },
              },
            },
            plugins: {
              legend: {
                display: false,
              },
            },
          },
        });
      }
    }
  }, [data, labels]);

  return <canvas id="chart" ref={chartRef} className="w-full h-full" />;
};

export default ChartTrends;
