import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from './Dropdown';

class DropdownContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: this.props.isOpened || false,
      label: this.props.label || this.props.currentItem.text,
      currentItem: this.props.currentItem
    };
  }

  onItemClick(id) {
    const currentItem = this.props.items.find(item => item.id === id);

    if (!this.state.currentItem || currentItem.id != this.state.currentItem.id) {
      this.setState({currentItem, label: currentItem.text});
      this.props.onChange(id);
    }
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
      onItemClick={this.onItemClick.bind(this)}
      onClick={this.toggle.bind(this)}/>;
  }
}

DropdownContainer.propTypes = {
  onChange: PropTypes.func,
  isOpened: PropTypes.bool,
  fullWidth: PropTypes.bool,
  label: PropTypes.string,
  currentItem: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }),
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }))
};

export default DropdownContainer;
