import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

const HeatmapChart = () => {
    const chartOptions = {
      chart: {
        type: 'heatmap',
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        heatmap: {
          shadeIntensity: 0.5,
          colorScale: {
            ranges: [
              {
                from: -50,
                to: 0,
                name: 'Low',
                color: '#00A100'
              },
              {
                from: 1,
                to: 50,
                name: 'High',
                color: '#FF0000'
              }
            ]
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5']
      },
      title: {
        text: "Data Kecamatan",
        align: 'left',
      },
    };
  
    const chartData = [
      {
        name: 'Series 1',
        data: [44, 55, 41, 67, 22]
      },
      {
        name: 'Series 2',
        data: [13, 23, 20, 8, 13]
      },
      {
        name: 'Series 3',
        data: [11, 17, 15, 15, 21]
      },
      {
        name: 'Series 4',
        data: [21, 7, 25, 13, 22]
      },
      {
        name: 'Series 5',
        data: [5, 17, 18, 24, 4]
      }
    ];
  
    return (
      <Chart
        options={chartOptions}
        series={chartData}
        type="heatmap"
        width="100%"
        height="300px"
      />
    );
  };
  
  export default HeatmapChart