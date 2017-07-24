import React from 'react';
import PropTypes from 'prop-types';
import Input, {VALIDATION, COLOR, SIZE} from 'form-elements/Input';
import Icon, {TYPE, COLOR as ICON_COLOR} from 'icons/Icon';

const Search = ({adaptiveIco, ...additionalProps}) => {
  const iconColor = adaptiveIco ? ICON_COLOR.ADAPTIVE : ICON_COLOR.GRAY_SECONDARY;

  return <div className="sg-search">
    <Input {...additionalProps} type="search" withIcon={true} className='sg-search__input'/>
    <div className="sg-search__icon">
      <Icon type={TYPE.SEARCH} color={iconColor} size={18}/>
    </div>
  </div>;
};

Search.propTypes = Object.assign({adaptiveIco: PropTypes.bool}, Input.propTypes);

export default Search;
export {SIZE, COLOR, VALIDATION};
