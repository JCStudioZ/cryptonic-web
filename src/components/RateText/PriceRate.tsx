import * as React from 'react';
import cn from 'classnames';
import { ArrowUp, ArrowDown } from 'react-feather';
import { BaseRateProps } from '.';

const PriceRate: React.FC<BaseRateProps> = ({ value, arrow, arrowClassName, className, size, isBold }) => {
  const previousValueRef = React.useRef<number>(0);
  React.useEffect(() => {
    previousValueRef.current = value;
  }, [value]);

  const isValueUp = value > previousValueRef.current;
  const isValueDown = value < previousValueRef.current;
  const textSize = size ? `text-${size}` : 'text-base';
  const containerClass = cn(
    {
      textSize,
      flex: true,
      'font-bold': isBold,
      'items-center': true,
      'text-success': isValueUp,
      'text-error': isValueDown,
    },
    className,
  );

  const renderArrowIcon = () => {
    if (!arrow) {
      return null;
    }
    return isValueUp ? <ArrowUp className={arrowClassName} /> : <ArrowDown className={arrowClassName} />;
  };

  return (
    <div className={containerClass}>
      {renderArrowIcon()}
      <span>{value}</span>
    </div>
  );
};

export default PriceRate;
