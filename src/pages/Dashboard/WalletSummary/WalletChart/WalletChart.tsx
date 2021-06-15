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
  return (
    <div className="w-[50%] md:w-[90%] xl:w-[70%]">
      <Doughnut type="doughnut" data={data} options={chartOptions} />
    </div>
  );
};

export default WalletChart;
