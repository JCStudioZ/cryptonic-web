import PercentRate from './PercentRate';
import PriceRate from './PriceRate';

export type BaseRateProps = {
  value: number;
  arrow?: boolean;
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
  isBold?: boolean;
  className?: string;
  arrowClassName?: string;
};

export { PercentRate, PriceRate };
