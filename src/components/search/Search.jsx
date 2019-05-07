// @flow
import React from 'react';
import classnames from 'classnames';
import * as InputModule from '../form-elements/Input';
import Icon, {TYPE, ICON_COLOR} from '../icons/Icon';

const {default: Input, COLOR, SIZE} = InputModule;

type PropsType = {
  adaptiveIco?: boolean,
  className?: string,
  ...InputModule.PropsType
};

const Search = ({adaptiveIco, className, ...additionalProps}: PropsType) => {
  const iconColor = adaptiveIco ? ICON_COLOR.ADAPTIVE : ICON_COLOR.GRAY_SECONDARY;
  const searchClass = classnames('sg-search', className);

  return (
    <div className={searchClass}>
      <Input {...additionalProps} type="search" withIcon className="sg-search__input" />
      <div className="sg-search__icon">
        <Icon type={TYPE.SEARCH} color={iconColor} size={18} />
      </div>
    </div>
  );
};

export default Search;
export {SIZE, COLOR};
