import React, { FC } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const DoughutChart: FC<{ da: number[] }> = ({ da }) => {
    const options = {

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

    };
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: '# of Votes',
                data: da,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)',
                    'rgba(205, 199, 32, 0.5)',
                    'rgba(40, 262, 35, 0.5)',
                    'rgba(245,6, 86, 0.5)',
                    'rgba(5, 2, 192, 0.5)',
                    'rgba(13, 252, 255, 0.5)',
                    'rgba(200, 259, 40, 0.5)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(205, 199, 32, 1)',
                    'rgba(40, 262, 35, 1)',
                    'rgba(245,6, 86, 1)',
                    'rgba(5, 2, 192, 1)',
                    'rgba(13, 252, 255, 1)',
                    'rgba(200, 259, 40, 1)',

                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <Doughnut options={options} data={data} />
    );
}
