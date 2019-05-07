// @flow strict
import React from 'react';
import type {Node} from 'react';
import classnames from 'classnames';

type PropsType = {
  children?: Node,
  centered?: boolean,
  toBottom?: boolean
};

const ContentBlock = ({children, toBottom, centered}: PropsType) => {
  const contentClass = classnames('docs-block__content', {
    'docs-block__content--to-bottom': toBottom,
    'docs-block__content--centered': centered
  });

  return <div className={contentClass}>{children}</div>;
};

export default ContentBlock;
