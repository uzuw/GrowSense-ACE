'use client';
import { useEffect, useRef } from 'react';
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
} from 'chart.js';

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
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = new Chart(chartRef.current, {
      type: 'line',
      data: {
        labels: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
        datasets: [{
          label: 'Moisture Level',
          fill: false,
          borderColor: 'rgb(9, 121, 105)',
          data: [700, 800, 800, 900, 900, 900, 1000, 1100, 1400, 1400, 1550,4095],
        }],
      },
      options: {
          responsive: true,
    scales: {
      y: {
        title: {
          display: true,
          align: 'center',
          text: 'Moisture Level →',
          color: '#212121',
          font: {
            family: 'Arial',
            size: 14,
         
          },
          
        },
      },
      x: {
        title: {
          display: true,
          align: 'center',
          text: 'Time →',
          color: '#212121',
          font: {
            family: 'Arial',
            size: 14,
            
          },
          
        },
      },
    },
  },
    });

    return () => chart.destroy();
  }, []);

  return <canvas ref={chartRef} className="w-full max-w-[70%]" />;
}
