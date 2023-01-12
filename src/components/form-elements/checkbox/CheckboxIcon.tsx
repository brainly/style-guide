import * as React from 'react';

type CheckIconPropsType = {};
const CheckIcon = React.forwardRef<CheckIconPropsType, Element>((_, ref) => (
  <svg
    ref={ref}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.475 8.01008L6.48494 11.0201L12.5249 4.98"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
));

type IndeterminateIconPropsType = {};
const IndeterminateIcon = React.forwardRef<IndeterminateIconPropsType, Element>(
  (props, ref) => (
    <svg
      ref={ref}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="indeterminate-path indeterminate-path--left"
        d="M4 8H8"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="indeterminate-path indeterminate-path--right"
        d="M8 8H12"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
);

export {CheckIcon, IndeterminateIcon};
