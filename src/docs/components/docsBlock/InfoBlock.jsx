// @flow

import React from 'react';
import type {Node} from 'react';

type PropsType = {
  additionalInfo?: Node,
  info?: Node
};

const InfoBlock = ({info, additionalInfo}: PropsType) => {
  if (!info && !additionalInfo) {
    return null;
  }

  let header;

  if (info) {
    header = <h3 className="docs-block__header">{info}</h3>;
  }
  return (
    <aside className="docs-block__info">
      {header}
      {additionalInfo}
    </aside>
  );
};

export default InfoBlock;
