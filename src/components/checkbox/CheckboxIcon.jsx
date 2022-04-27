// @flow strict

import * as React from 'react';

const CheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.0629 5.27161L7.19615 9.1384L5.59334 7.5353C5.35756 7.29951 5.01389 7.20742 4.6918 7.29373C4.36971 7.38003 4.11813 7.63162 4.03182 7.95371C3.94552 8.2758 4.03761 8.61946 4.27339 8.85525L6.53594 11.1178C6.90145 11.4813 7.49064 11.4813 7.85536 11.1186L12.3817 6.59245C12.745 6.22689 12.745 5.63804 12.3826 5.27337C12.0166 4.90917 11.4276 4.90917 11.0629 5.27161Z" />
  </svg>
);

const IndeterminateIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3 8C3 7.44772 3.44772 7 4 7H12C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9H4C3.44772 9 3 8.55228 3 8Z" />
  </svg>
);

export type CheckboxIconPropsType = {
  checked?: boolean,
  indeterminate?: boolean,
  ...
};

const CheckboxIcon = ({
  checked,
  indeterminate = false,
  ...props
}: CheckboxIconPropsType) => {
  const getIcon = (indeterminate, checked) => {
    if (indeterminate) return <IndeterminateIcon />;
    if (checked) return <CheckIcon />;

    return null;
  };

  const checkboxIcon = React.useMemo(
    () => getIcon(indeterminate, checked),
    [indeterminate, checked]
  );

  return (
    <span
      className="sg-checkbox-new__icon"
      // This element is purely decorative so
      // we hide it for screen readers
      aria-hidden="true"
      {...props}
    >
      {checkboxIcon}
    </span>
  );
};

export default CheckboxIcon;
