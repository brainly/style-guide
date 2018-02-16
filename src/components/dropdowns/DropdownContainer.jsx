import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import Dropdown from './Dropdown';

// this should be separate component
export class OpenedController extends Component {
  state = {
    isOpened: false
  };

  toggle = () => {
    this.setState(prevState => ({isOpened: !prevState.isOpened}));
  }

  render() {
    return (
      <Fragment>
        {this.props.children({
          isOpened: this.state.isOpened,
          toggle: this.toggle
        })}
      </Fragment>
    )
  }
}

class DropdownContainer extends Component {
  static defaultProps = {
    items: []
  };

  state = {
    currentItem: this.props.currentItem || {}
  };

  getLabel() {
    return this.state.currentItem.text || this.props.label || '';
  }

  onItemClick = id => {
    const currentItem = this.props.items.find(item => item.id === id);

    if (this.state.currentItem && this.state.currentItem.id === currentItem.id) {
      return;
    }

    this.setState({currentItem, label: currentItem.text});

    if (this.props.onChange) {
      this.props.onChange(id);
    }
  };

  render() {
    return <Dropdown
      opened={this.props.isOpened}
      fullWidth={this.props.fullWidth}
      label={this.getLabel()}
      items={this.props.items}
      fixed={this.props.fixed}
      onItemClick={this.onItemClick}
      onClick={this.props.toggle}
      className={this.props.className} />;
  }
}

const itemShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
});

DropdownContainer.propTypes = {
  fixed: PropTypes.bool,
  onChange: PropTypes.func,
  openOnStart: PropTypes.bool,
  fullWidth: PropTypes.bool,
  label: PropTypes.string,
  currentItem: itemShape,
  items: PropTypes.arrayOf(itemShape),
  className: PropTypes.string
};

export default DropdownContainer;
