import { ChartOptions } from 'chart.js';

export const getCryptoLogoImageURL = (name: string) => {
  return `https://cryptologos.cc/logos/${name}.svg`;
};

export const getLineChartOption = (): ChartOptions => {
  return {
    plugins: {
      legend: {
        display: false,
      },
    },
    backgroundColor: 'red',
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  };
};

export const formatCurrency = (
  value: number,
  maximumFractionDigits?: number,
  minimumFractionDigits?: number,
  currencySymbol?: string,
): string => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencySymbol || 'USD',
    maximumFractionDigits: maximumFractionDigits || 0,
    minimumFractionDigits,
  });
  return formatter.format(value);
};
