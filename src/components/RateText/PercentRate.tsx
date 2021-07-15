import * as React from 'react';
import cn from 'classnames';
import { ArrowUp, ArrowDown } from 'react-feather';
import { BaseRateProps } from '.';

const PercentRate: React.FC<BaseRateProps> = ({ value, arrow, arrowClassName, className, size, isBold }) => {
  const isValueUp = value > 0;
  const isValueDown = value < 0;
  const textSize = size ? `text-${size}` : 'text-base';
  const containerClass = cn(
    {
      flex: true,
      'font-bold': isBold,
      'items-center': true,
      'text-success': isValueUp,
      'text-error': isValueDown,
    },
    textSize,
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
      <span>{value}%</span>
    </div>
  );
};

export default PercentRate;
