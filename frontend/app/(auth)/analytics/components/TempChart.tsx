'use client';
import { useEffect, useRef } from 'react';
import {
  Chart,
  BubbleController,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

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
  const timeObject = {

  }
  useEffect(() => {
    if (!chartRef.current) return;

    const chart = new Chart(chartRef.current, {
      type: 'bubble',
      data: {
        datasets: [{
          label: 'Temperature Level',
          data: [
            { x: 0, y: 50, r: 7 },
            { x: 24, y: 10, r: 7 },
          ],
          backgroundColor: 'rgb(9, 121, 105)'
        }],
      },
      options: {
          responsive: true,
    scales: {
      y: {
        title: {
          display: true,
          align: 'center',
          text: 'Temperature Level →',
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
