// @flow

import * as React from 'react';
import classnames from 'classnames';

type PropsType = {
  children: React.Node,
  toBottom?: boolean,
  smallPadding?: boolean,
  light?: boolean,
  fullWidth?: boolean,
  narrow?: boolean,
  ...
};

const contrastBlockCssClass = 'docs-block__contrast-box';
const ContrastBox = ({
  toBottom,
  smallPadding,
  light,
  fullWidth,
  narrow,
  children,
  ...otherProps
}: PropsType) => {
  const cssClass = classnames(contrastBlockCssClass, {
    'docs-block__contrast-box--to-bottom': toBottom,
    'docs-block__contrast-box--small-padding': smallPadding,
    'docs-block__contrast-box--light': light,
    'docs-block__contrast-box--full-width': fullWidth,
    'docs-block__contrast-box--narrow': narrow,
  });

  return (
    <section {...otherProps} className={cssClass}>
      {children}
    </section>
  );
};

export default ContrastBox;
export {contrastBlockCssClass};
