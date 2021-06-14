import * as React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { ChartOptions } from 'chart.js';

const chartOptions: ChartOptions = {
  plugins: {
    legend: {
      display: false,
    },
  },
};

type WalletChartProps = {
  data: any;
};

const WalletChart: React.FC<WalletChartProps> = ({ data }) => {
  return <Doughnut type="doughnut" data={data} options={chartOptions} />;
};

export default WalletChart;
