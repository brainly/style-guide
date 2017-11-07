import React from 'react';
import {contrastBlockCssClass} from 'components/ContrastBox';
import IconAsButton, {ICON_COLOR} from '../IconAsButton';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const DrawHelper = props => {
  const liClass = classnames('icons-list__element', {
    [contrastBlockCssClass]: props.color === ICON_COLOR.LIGHT
  });
  const liStyle = {padding: 0};

  if (props.color === ICON_COLOR.ADAPTIVE) {
    liStyle.fill = '#ff00ff';
  }

  return (
    <li className={liClass} style={liStyle}>
      <IconAsButton {...props} />
      <span>&nbsp; - {props.color}</span>
    </li>
  );
};

DrawHelper.propTypes = {
  color: PropTypes.oneOf(Object.values(ICON_COLOR))
};

export default DrawHelper;
