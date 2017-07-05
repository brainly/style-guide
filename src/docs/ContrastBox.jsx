import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const contrastBlockCssClass = 'docs-block__contrast-box';
const ContrastBox = ({toBottom, smallPadding, light, fullWidth, children}) => {
  const cssClass = classnames(contrastBlockCssClass, {
    'docs-block__contrast-box--to-bottom': toBottom,
    'docs-block__contrast-box--small-padding': smallPadding,
    'docs-block__contrast-box--light': light,
    'docs-block__contrast-box--full-width': fullWidth
  });

  return <section className={cssClass}>
    {children}
  </section>;
};

ContrastBox.propTypes = {
  children: PropTypes.node.isRequired,
  toBottom: PropTypes.bool,
  smallPadding: PropTypes.bool,
  light: PropTypes.bool,
  fullWidth: PropTypes.bool
};

export default ContrastBox;
export {contrastBlockCssClass};
