"use client";
import { useEffect, useRef, useState } from "react";
import {
  Chart,
  BubbleController,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import axiosInstance from "@/lib/axiosInstance";

Chart.register(
  BubbleController,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

export default function TempChart() {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/data/get");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!chartRef.current || !data || !data.hourlyAverage) return;

    // Map data to bubble chart points: x = hour, y = temperature, r = fixed radius
    const bubbleData = data.hourlyAverage.map(
      (entry: { timestamp: string | Date; temperature: number }) => {
        const hour = new Date(entry.timestamp).getHours();
        return {
          x: hour,
          y: entry.temperature,
          r: 7, // fixed radius, adjust if you want dynamic sizes
        };
      }
    );

    const chart = new Chart(chartRef.current, {
      type: "bubble",
      data: {
        datasets: [
          {
            label: "Temperature Level",
            data: bubbleData,
            backgroundColor: "rgb(9, 121, 105)",
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            title: {
              display: true,
              align: "center",
              text: "Temperature Level (°C) →",
              color: "#212121",
              font: {
                family: "Arial",
                size: 14,
              },
            },
          },
          x: {
            title: {
              display: true,
              align: "center",
              text: "Time (hours) →",
              color: "#212121",
              font: {
                family: "Arial",
                size: 14,
              },
            },
            min: 0,
            max: 24,
          },
        },
      },
    });

    return () => chart.destroy();
  }, [data]);

  return <canvas ref={chartRef} className="w-full max-w-[70%]" />;
}
