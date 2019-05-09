// @flow strict
import React, {Component} from 'react';
import Dropdown from './Dropdown';

type ItemType = {
  id: string,
  text: string
};

type PropsType = {
  label: string,
  fullWidth?: boolean,
  fixed?: boolean,
  isOpened?: boolean,
  items: Array<ItemType>,
  className?: string,
  currentItem?: ItemType,
  onChange: string => mixed,
  onToggle?: SyntheticMouseEvent<HTMLDivElement>
};

type StateType = {
  currentItem: ItemType
};

class DropdownContainer extends Component<PropsType, StateType> {
  static defaultProps = {
    items: []
  };

  state = {
    currentItem: this.props.currentItem || {},
    label: ''
  };

  getLabel() {
    return this.state.currentItem.text || this.props.label || '';
  }

  onItemClick = (id: string) => {
    const currentItem = this.props.items.find(item => item.id === id);

    if (!currentItem || (this.state.currentItem && this.state.currentItem.id === currentItem.id)) {
      return;
    }

    this.setState({currentItem, label: currentItem.text});

    if (this.props.onChange) {
      this.props.onChange(id);
    }
  };

  render() {
    return (
      <Dropdown
        opened={this.props.isOpened}
        fullWidth={this.props.fullWidth}
        label={this.getLabel()}
        items={this.props.items}
        fixed={this.props.fixed}
        onItemClick={this.onItemClick}
        onClick={this.props.onToggle}
        className={this.props.className}
      />
    );
  }
}

export default DropdownContainer;
