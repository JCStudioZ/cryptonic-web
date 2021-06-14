import * as React from 'react';
import cn from 'classnames';

type CardProps = {
  headerImageUrl?: string;
  title?: React.ReactElement;
  footer?: React.ReactElement;
  isBordered?: boolean;
  isCompact?: boolean;
  cardSideLayout?: boolean;
  glass?: boolean;
  className?: string;
  titleClassName?: string;
  bodyClassName?: string;
  footerClassName?: string;
  isHeaderImageFull?: boolean;
};

const Card: React.FC<CardProps> = ({
  headerImageUrl,
  title,
  footer,
  isBordered,
  cardSideLayout,
  glass,
  isCompact,
  isHeaderImageFull,
  className,
  titleClassName,
  bodyClassName,
  footerClassName,
  children,
}) => {
  const cardClass = cn({
    card: true,
    'bg-base-100': true,
    glass: glass,
    bordered: isBordered,
    compact: isCompact,
    'card-side': cardSideLayout,
    'image-full': isHeaderImageFull,
  });

  return (
    <div className={cn(cardClass, className)}>
      {headerImageUrl && (
        <figure>
          <img src={headerImageUrl} />
        </figure>
      )}
      <div className={cn('card-body', bodyClassName)}>
        {title && <h2 className={cn('card-title', titleClassName)}>{title}</h2>}
        {children}
        {footer && <div className={cn('justify-end card-actions', footerClassName)}>{footer}</div>}
      </div>
    </div>
  );
};

export default Card;
