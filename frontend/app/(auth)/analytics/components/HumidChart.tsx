'use client';

import { useEffect, useRef } from 'react';
import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';

// ✅ Register bar chart components
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
  const chartRef = useRef<HTMLCanvasElement>(null);

  const data = [30,32,33,35,37,28,39,40,42,38,35,37,33,32,32,32,35,36,33,32,30,28,27,25]
  useEffect(() => {
    if (!chartRef.current) return;
    const chart = new Chart(chartRef.current, {
      type: 'bar', // ✅ This now works
      data: {
        labels:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
        datasets: [
          {
            label: 'Humidity Level',
            backgroundColor: 'rgba(92, 177, 46, 0.61)',
            borderColor: 'rgb(9, 121, 105)',
            data: data,
          },
        ],
      },
      options: {
        responsive: true,
      },
    });

    return () => chart.destroy(); // ✅ Prevent memory leaks
  }, []);

  return <canvas ref={chartRef} className="w-full max-w-[70%]" />;
}
