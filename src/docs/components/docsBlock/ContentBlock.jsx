// @flow strict

import React from 'react';
import type {Node} from 'react';
import classnames from 'classnames';

type PropsType = {
  children?: Node,
  centered?: boolean,
  spacedBetween?: boolean,
  justified?: boolean,
  toBottom?: boolean,
  ...
};

const ContentBlock = ({
  children,
  toBottom,
  centered,
  spacedBetween,
  justified,
}: PropsType) => {
  const contentClass = classnames('docs-block__content', {
    'docs-block__content--to-bottom': toBottom,
    'docs-block__content--centered': centered,
    'docs-block__content--space-between': spacedBetween,
    'docs-block__content--justified': justified,
  });

  return <div className={contentClass}>{children}</div>;
};

export default ContentBlock;
