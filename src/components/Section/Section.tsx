import * as React from 'react';
import cn from 'classnames';

type SectionProps = {
  titleText?: string;
  titleRightElement?: React.ReactElement;
  titleClassName?: string;
  titleRightElementClassName?: string;
  contentClassName?: string;
  className?: string;
  bordered?: boolean;
  hasPadding?: boolean;
};

const Section: React.FC<SectionProps> = ({
  titleText,
  titleClassName,
  titleRightElement,
  titleRightElementClassName,
  contentClassName,
  className,
  bordered,
  hasPadding,
  children,
}) => {
  const sectionClass = cn({
    'border rounded-2xl': bordered,
    'p-4': hasPadding,
  });

  return (
    <div className={cn(sectionClass, className)}>
      <div className="flex">
        <div className="flex flex-1 justify-between items-center">
          {titleText && <p className={cn('text-xl font-bold', titleClassName)}>{titleText}</p>}
          {titleRightElement && <div className={titleRightElementClassName}>{titleRightElement}</div>}
        </div>
      </div>
      <div className={contentClassName}>{children}</div>
    </div>
  );
};

export default Section;
