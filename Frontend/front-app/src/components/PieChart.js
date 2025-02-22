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
              '#00BFFF', // Deep Sky Blue
              '#1E90FF', // Dodger Blue
              '#4682B4', // Steel Blue
              '#00CED1', // Dark Turquoise
              '#20B2AA', // Light Sea Green
              '#40E0D0', // Turquoise
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