export const getCryptoLogoImageURL = (name: string) => {
  return `https://cryptologos.cc/logos/${name}.svg`;
};

export const formatCurrency = (
  value: number,
  currencySymbol?: string,
  maximumFractionDigits?: number,
  minimumFractionDigits?: number,
): string => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencySymbol || 'USD',
    maximumFractionDigits,
    minimumFractionDigits,
  });
  return formatter.format(value);
};
