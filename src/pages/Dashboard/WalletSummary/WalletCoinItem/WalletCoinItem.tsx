import * as React from 'react';
import { ArrowDown, ArrowUp } from 'react-feather';

type WalletCoinItemProps = {
  imageUrl: string;
  title: string;
  subTitle: string;
  percentage: number;
};

const WalletCoinItem: React.FC<WalletCoinItemProps> = ({ imageUrl, percentage, subTitle, title }) => {
  return (
    <div className="flex justify-between">
      <div className="flex items-start">
        <img src={imageUrl} width="16px" className="mt-1 mr-2" />
        <div>
          <p className="text-base-content text-base font-bold">{title}</p>
          <p className="text-base text-base-content text-opacity-60">{subTitle}</p>
        </div>
      </div>
      <div>
        <p className="text-sm font-bold">
          {percentage > 0 ? (
            <span className="text-success">
              <ArrowUp className="inline-block align-text-bottom" size="18" /> {percentage}%
            </span>
          ) : (
            <span className="text-error">
              <ArrowDown className="inline-block align-text-bottom" size="18" /> {Math.abs(percentage)}%
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default WalletCoinItem;
