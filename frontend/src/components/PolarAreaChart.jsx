import React from 'react';
import ReactApexChart from 'react-apexcharts';

const PolarAreaChart = ({ title, color }) => {
  const series = [50, 55, 60, 50, 55, 65, 70, 75, 60];

  const options = {
    chart: {
      type: 'polarArea',
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
        '2022-01-01',
        '2022-02-01',
        '2022-03-01',
        '2022-04-01',
        '2022-05-01',
        '2022-06-01',
        '2022-07-01',
        '2022-08-01',
        '2022-09-01',
      ],
    },
    yaxis: {
      opposite: true,
      show: false,
    },
    legend: {
      horizontalAlign: 'left',
    },
    colors: [color], // Set the color to red
  };

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="polarArea" height={200} />
    </div>
  );
};

export default PolarAreaChart;
