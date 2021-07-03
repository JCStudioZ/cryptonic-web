import Card from 'components/Card';
import * as React from 'react';

type CarouselCardItemProps = {
  title: string;
  content: string | React.ReactElement;
  contentContainerClass?: string;
  leftElement?: React.ReactElement;
  rightElement?: React.ReactElement;
};

const CarouselCardItem: React.FC<CarouselCardItemProps> = ({
  title,
  content,
  contentContainerClass,
  leftElement,
  rightElement,
}) => {
  return (
    <Card isCompact className="carousel-item mr-4 w-1/2 md:w-1/4 last:mr-0 xl:flex-1">
      <div className="flex">
        {leftElement}
        <div className={contentContainerClass}>
          <p className="text-base-content-secondary">{title}</p>
          {typeof content === 'string' ? <p className="font-bold text-xl mt-1">{content}</p> : content}
        </div>
        {rightElement}
      </div>
    </Card>
  );
};

export default CarouselCardItem;
