import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Input, {COLOR, SIZE, propTypes as InputPropTypes} from '../form-elements/Input';
import Icon, {TYPE, COLOR as ICON_COLOR} from '../icons/Icon';

const Search = ({adaptiveIco, className, ...additionalProps}) => {
  const iconColor = adaptiveIco ? ICON_COLOR.ADAPTIVE : ICON_COLOR.GRAY_SECONDARY;
  const searchClass = classnames('sg-search', className);

  return (
    <div className={searchClass}>
      <Input {...additionalProps} type="search" withIcon className='sg-search__input' />
      <div className="sg-search__icon">
        <Icon type={TYPE.SEARCH} color={iconColor} size={18} />
      </div>
    </div>
  );
};

Search.propTypes = {
  adaptiveIco: PropTypes.bool,
  className: PropTypes.string,
  ...InputPropTypes
};

export default Search;
export {SIZE, COLOR};
