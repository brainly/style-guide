import * as React from 'react';
import classNames from 'classnames';
export type LayoutAsType = 'div' | 'main' | 'section' | 'article' | 'aside';
export type LayoutPropsType = {
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  noMaxWidth?: boolean;
  noMarginTop?: boolean;
  reversedOrder?: boolean;
  fullPage?: boolean;
  threeColumns?: boolean;
  as?: LayoutAsType;
} & Omit<
  React.AllHTMLAttributes<HTMLElement>,
  | 'className'
  | 'containerClassName'
  | 'children'
  | 'header'
  | 'footer'
  | 'noMaxWidth'
  | 'noMarginTop'
  | 'reversedOrder'
  | 'fullPage'
  | 'threeColumns'
  | 'as'
>;

const Layout = ({
  children,
  header,
  footer,
  reversedOrder,
  noMaxWidth,
  noMarginTop,
  fullPage,
  threeColumns,
  className,
  containerClassName,
  as: Type = 'div',
  ...props
}: LayoutPropsType) => {
  const layoutClass = classNames('sg-layout', className, {
    'sg-layout--three-columns': threeColumns,
  });
  const layoutContainerClass = classNames(
    'sg-layout__container',
    containerClassName,
    {
      'sg-layout__container--reversed-order': reversedOrder,
      'sg-layout__container--no-max-width': noMaxWidth,
      'sg-layout__container--no-margin-top': noMarginTop,
      'sg-layout__container--full-page': fullPage,
    }
  );
  let footerContent;

  if (footer !== undefined) {
    footerContent = <div className="sg-layout__footer">{footer}</div>;
  }

  return (
    <Type {...props} className={layoutClass}>
      {header}
      <div className={layoutContainerClass}>{children}</div>
      {footerContent}
    </Type>
  );
};

export default Layout;
