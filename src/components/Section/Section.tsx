import * as React from 'react';
import cn from 'classnames';

type SectionProps = {
  titleText?: string;
  titleRightElement?: React.ReactElement;
  titleClassName?: string;
  titleRightElementClassName?: string;
  contentClassName?: string;
};

const Section: React.FC<SectionProps> = ({
  titleText,
  titleClassName,
  titleRightElement,
  titleRightElementClassName,
  contentClassName,
  children,
}) => {
  return (
    <>
      <div className="flex">
        <div className="flex flex-1 justify-between items-center">
          {titleText && <p className={cn('text-xl font-bold', titleClassName)}>{titleText}</p>}
          {titleRightElement && <div className={titleRightElementClassName}>{titleRightElement}</div>}
        </div>
      </div>
      <div className={contentClassName}>{children}</div>
    </>
  );
};

export default Section;
