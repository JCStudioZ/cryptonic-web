import { PercentRate } from 'components/RateText';
import * as React from 'react';

type WalletCoinItemProps = {
  imageUrl: string;
  title: string;
  subTitle: string;
  percentage: number;
};

const WalletCoinItem: React.FC<WalletCoinItemProps> = ({ imageUrl, percentage, subTitle, title }) => {
  return (
    <div className="flex justify-between mb-2">
      <div className="flex items-start">
        <img src={imageUrl} className="mt-1 mr-2 w-4 h-4" />
        <div className="truncate">
          <p className="text-base-content text-base font-bold truncate">{title}</p>
          <p className="text-base text-base-content-secondary truncate">{subTitle}</p>
        </div>
      </div>
      <div>
        <p className="text-sm font-bold text-right">
          <PercentRate value={percentage} arrow isBold />
        </p>
      </div>
    </div>
  );
};

export default WalletCoinItem;
