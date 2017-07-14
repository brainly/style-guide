import React from 'react';
import TextInput, {VALIDATION, COLOR, SIZE} from '../form-elements/TextInput';
import Icon, {TYPE, COLOR as ICON_COLOR} from '../icons/Icon';

const Search = props => <div className="sg-search">
  <TextInput {...props} type="search" withIcon={true} />
  <div className="sg-search__icon">
    <Icon type={TYPE.SEARCH} color={ICON_COLOR.GRAY_SECONDARY} size={18}/>
  </div>
</div>;

Search.propTypes = Object.assign({}, TextInput.propTypes);

export default Search;
export {SIZE, COLOR, VALIDATION};
