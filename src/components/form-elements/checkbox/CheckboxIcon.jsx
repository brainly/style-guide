import * as React from 'react';

const CheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* eslint-disable max-len */}
    <path d="M11.662 4.54019L6.50629 9.69591L4.36921 7.55844C4.05483 7.24405 3.59661 7.12127 3.16715 7.23634C2.7377 7.35142 2.40225 7.68686 2.28718 8.11632C2.17211 8.54577 2.29489 9.00399 2.60927 9.31838L5.62601 12.3351C6.11335 12.8198 6.89893 12.8198 7.38523 12.3362L13.4204 6.30131C13.9048 5.8139 13.9048 5.02876 13.4216 4.54253C12.9336 4.05693 12.1482 4.05693 11.662 4.54019Z" />
    {/* eslint-enable max-len */}
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
