import * as React from "react";
import classNames from "classnames";
export type PopupMenuPropsType = {
  items: Array<React.ReactNode>;
  extraSpacing?: boolean;
  className?: string;
} & Omit<
  React.AllHTMLAttributes<HTMLElement>,
  "items" | "extraSpacing" | "className"
>;

// This component is deprecated
const PopupMenu = ({
  items = [],
  extraSpacing,
  className,
  ...props
}: PopupMenuPropsType) => {
  const popupMenuClass = classNames(
    "sg-popup-menu",
    {
      "sg-popup-menu--elements-spaced": extraSpacing,
    },
    className
  );
  return (
    <div {...props} className={popupMenuClass}>
      {items.map((item, i) => (
        <div key={i} className="sg-popup-menu__hole">
          {item}
        </div>
      ))}
    </div>
  );
};

export default PopupMenu;