import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from './Dropdown';

class DropdownContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: this.props.isOpened || false,
      label: this.getDefaultLabel(),
      currentItem: this.props.currentItem
    };
  }

  getDefaultLabel() {
    const {label, currentItem = {}} = this.props;

    return label || currentItem.text || '';
  }

  onItemClick(id) {
    const currentItem = this.props.items.find(item => item.id === id);

    if (this.state.currentItem && this.state.currentItem.id === currentItem.id) {
      return;
    }

    this.setState({currentItem, label: currentItem.text});
    this.props.onChange(id);
  }

  toggle() {
    this.setState({isOpened: !this.state.isOpened});
  }

  render() {
    return <Dropdown
      opened={this.state.isOpened}
      fullWidth={this.props.fullWidth}
      label={this.state.label}
      items={this.props.items}
      fixed={this.props.fixed}
      onItemClick={this.onItemClick.bind(this)}
      onClick={this.toggle.bind(this)}/>;
  }
}

const itemShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
});

DropdownContainer.propTypes = {
  fixed: PropTypes.bool,
  onChange: PropTypes.func,
  isOpened: PropTypes.bool,
  fullWidth: PropTypes.bool,
  label: PropTypes.string,
  currentItem: itemShape,
  items: PropTypes.arrayOf(itemShape)
};

export default DropdownContainer;
