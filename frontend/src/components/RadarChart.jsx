import React from 'react';
import ReactApexChart from 'react-apexcharts';

const RadarChart = ({ title, color }) => {
  const series = [
    {
      name: 'STOCK ABC',
      data: [
        10,
        40,
        30,
        50,
        40,
        50,
        60,
        90,
        100,
      ],
    },
  ];

  const options = {
    chart: {
      type: 'radar',
      height: 200,
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
    },
    title: {
      text: title,
      align: 'left',
    },
    subtitle: {
      text: 'Price Movements',
      align: 'left',
    },
    xaxis: {
      categories: [
        'Kecamatan 1',
        'Kecamatan 1',
        'Kecamatan 1',
        'Kecamatan 1',
        'Kecamatan 1',
        'Kecamatan 1',
        'Kecamatan 1',
        'Kecamatan 1',
        'Kecamatan 1',
      ],
    },
    yaxis: {
      opposite: true,
    },
    legend: {
      horizontalAlign: 'left',
    },
    colors: [color],
  };

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="radar" height={300} />
    </div>
  );
};

export default RadarChart;
