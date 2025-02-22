// src/components/PieChart.js

import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import '../styles/PieChart.css'; // Импортируем стили

Chart.register(...registerables);

const PieChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');

    const data = {
      labels: ['Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5', 'Data 6'],
      datasets: [
        {
          label: 'My Dataset',
          data: [15, 25, 35, 45, 55, 65],
          backgroundColor: [
            '#87CEEB', // Sky Blue
            '#F0F8FF', // Light Cyan
            '#ADD8E6', // Light Blue
            '#B0E0E6', // Powder Blue
            '#E0FFFF', // Very Light Cyan
            '#AFEEEE', // Pale Turquoise
          ],
        },
      ],
    };

    const config = {
      type: 'pie',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'My Pie Chart',
          },
        },
      },
    };

    chartInstance.current = new Chart(ctx, config);

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="chart-container">
      <canvas ref={chartRef} />
    </div>
  );
};

export default PieChart;