import * as React from 'react';
import cx from 'classnames';

interface SparksProps {
  children?: React.ReactNode;
}

const Sparks = ({children}: SparksProps) => {
  return <div className="sg-sparks">{children}</div>;
};

Sparks.displayName = 'Sparks';
export default Sparks;
