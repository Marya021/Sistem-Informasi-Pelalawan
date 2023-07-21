import React from 'react';
import ReactApexChart from 'react-apexcharts';

const BarChart = ({ title, color }) => {
  const series = [
    {
      name: "STOCK ABC",
      data: [
        [new Date("2022-01-01").getTime(), 10],
        [new Date("2022-02-01").getTime(), 40],
        [new Date("2022-03-01").getTime(), 30],
        [new Date("2022-04-01").getTime(), 50],
        [new Date("2022-05-01").getTime(), 40],
        [new Date("2022-06-01").getTime(), 50],
        [new Date("2022-07-01").getTime(), 60],
        [new Date("2022-08-01").getTime(), 90],
        [new Date("2022-09-01").getTime(), 100],
      ],
    },
  ];

  const options = {
    chart: {
      type: 'bar',
      height: 200,
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        columnWidth: '50%',
        endingShape: 'rounded',
      },
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
      type: 'datetime',
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
      <ReactApexChart options={options} series={series} type="bar" height={200} />
    </div>
  );
};

export default BarChart;
