"use client";

import { useEffect, useRef, useState } from "react";
import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import axiosInstance from "@/lib/axiosInstance";

Chart.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title
);

export default function HumidChart() {
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

  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!chartRef.current || !data || !data.hourlyAverage) return;

    
    const humidityLevels = data.hourlyAverage.map(
      (entry: { humidity: number }) => entry.humidity
    );

    const labels = data.hourlyAverage.map(
      (entry: { timestamp: string | Date }) => {
        const date = new Date(entry.timestamp);
        return date.getHours();
      }
    );

    const chart = new Chart(chartRef.current, {
      type: "bar",
      data: {
        labels: labels.length
          ? labels
          : [...Array(humidityLevels.length).keys()],
        datasets: [
          {
            label: "Humidity Level",
            backgroundColor: "rgba(92, 177, 46, 0.61)",
            borderColor: "rgb(9, 121, 105)",
            data: humidityLevels,
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
              text: "Humidity Level (m³) →",
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
          },
        },
      },
    });

    return () => chart.destroy();
  }, [data]);

  return <canvas ref={chartRef} className="w-full max-w-[70%]" />;
}
