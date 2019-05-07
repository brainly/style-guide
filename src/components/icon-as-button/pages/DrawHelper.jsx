// @flow
import React from 'react';
import {contrastBlockCssClass} from 'components/ContrastBox';
import IconAsButton, {ICON_COLOR} from '../IconAsButton';
import * as IconModule from '../../icons/Icon';
import classnames from 'classnames';

type PropsType = {
  color: IconModule.IconColorType
};

const DrawHelper = (props: PropsType) => {
  const liClass = classnames('icons-list__element', {
    [contrastBlockCssClass]: props.color === ICON_COLOR.LIGHT
  });
  const liStyle = {padding: 0, fill: ''};

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

export default DrawHelper;
