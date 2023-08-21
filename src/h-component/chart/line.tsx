import React, { FC } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


export const LineChart:FC<{da:number[][]}> = ({ da }) => {
  const options = {
    type: 'line',
    tension: .4,
    borderWidth: 1,
    responsive: true,
    elements: {
      point: {
        radius: 0,
      }
    },
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          usePointStyle: true,
          font: {
            size: 8
          }
        }
      },
      title: {
        display: false,
        text: 'your income income from the last year',
      },
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          font: {
            size: 8,
          }
        }
      },
      y: {
        grid: {
          display: false
        },
        ticks: {
          font: {
            size: 8,
          }
        }

      }
    }
  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: da[0],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: da[1],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: da[2],
        borderColor: 'rgb(15, 100, 200)',
        backgroundColor: 'rgba(15, 100, 200, 0.5)',
      },
    ],
  };
  return (
    <Line options={options} data={data} />
  );
}
