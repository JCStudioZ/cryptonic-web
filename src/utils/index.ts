export const getCryptoLogoImageURL = (name: string) => {
  return `https://cryptologos.cc/logos/${name}.svg`;
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
