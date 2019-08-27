// @flow strict

import React from 'react';
import classnames from 'classnames';
import * as InputModule from '../form-elements/Input';
import Icon, {TYPE, ICON_COLOR} from '../icons/Icon';

const {default: Input, COLOR, SIZE} = InputModule;

type PropsType = {
  adaptiveIco?: boolean,
  inputClassName?: string,
  ...
} & InputModule.InputPropsType; // TODO: make back to spread (...InputModule.InputPropsType) after flow bump

const Search = ({
  adaptiveIco,
  className,
  inputClassName,
  ...additionalProps
}: PropsType) => {
  const iconColor =
    adaptiveIco === true ? ICON_COLOR.ADAPTIVE : ICON_COLOR.GRAY_SECONDARY;
  const baseClassName = 'sg-search';

  return (
    <div className={classnames(baseClassName, className)}>
      <Input
        {...additionalProps}
        type="search"
        withIcon
        className={classnames(`${baseClassName}__input`, inputClassName)}
      />
      <div className={`${baseClassName}__icon`}>
        <Icon type={TYPE.STD_SEARCH} color={iconColor} size={18} />
      </div>
    </div>
  );
};

export default Search;
export {SIZE, COLOR};
