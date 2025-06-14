"use client";
import { useEffect, useRef, useState } from "react";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";
import axiosInstance from "@/lib/axiosInstance";

Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend
);

export default function MoistureChart() {
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

    // Extract moisture levels from hourlyAverage
    const moistureLevels = data.hourlyAverage.map(
      (entry: { moisture: number }) => entry.moisture
    );

    // Optional: Use timestamps for labels (hours)
    const labels = data.hourlyAverage.map(
      (entry: { timestamp: string | Date }) => {
        const date = new Date(entry.timestamp);
        return date.getHours();
      }
    );

    const chart = new Chart(chartRef.current, {
      type: "line",
      data: {
        labels: labels.length
          ? labels
          : [...Array(moistureLevels.length).keys()],
        datasets: [
          {
            label: "Moisture Level",
            fill: false,
            borderColor: "rgb(9, 121, 105)",
            data: moistureLevels,
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
              text: "Moisture Level (m³) →",
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
