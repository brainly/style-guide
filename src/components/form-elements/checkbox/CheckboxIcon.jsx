// @flow strict

import * as React from 'react';

const CheckIcon = () => (
  <svg
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
);

const IndeterminateIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* eslint-disable max-len */}
    <path d="M3 8C3 7.44772 3.44772 7 4 7H12C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9H4C3.44772 9 3 8.55228 3 8Z" />
    {/* eslint-enable max-len */}
  </svg>
);

export {CheckIcon, IndeterminateIcon};
