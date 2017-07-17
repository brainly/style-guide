import React from 'react';
import PropTypes from 'prop-types';
import TextInput, {VALIDATION, COLOR, SIZE} from '../form-elements/TextInput';
import Icon, {TYPE, COLOR as ICON_COLOR} from '../icons/Icon';

const Search = props => {
  const {
    adaptiveIco,
    ...additionalProps
  } = props;
  const iconColor = adaptiveIco ? ICON_COLOR.ADAPTIVE : ICON_COLOR.GRAY_SECONDARY;

  return <div className="sg-search">
    <TextInput {...additionalProps} type="search" withIcon={true} />
    <div className="sg-search__icon">
      <Icon type={TYPE.SEARCH} color={iconColor} size={18}/>
    </div>
  </div>;
};

Search.propTypes = Object.assign({adaptiveIco: PropTypes.bool}, TextInput.propTypes);

export default Search;
export {SIZE, COLOR, VALIDATION};
