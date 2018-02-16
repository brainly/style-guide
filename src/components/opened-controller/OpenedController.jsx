import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

export class OpenedController extends Component {
  state = {
    isOpened: false
  };

  onToggle = () => {
    if (this.props.onClose && this.state.isOpened) {
      this.props.onClose();
    }

    if (this.props.onOpen && !this.state.isOpened) {
      this.props.onOpen();
    }

    this.setState(prevState => ({isOpened: !prevState.isOpened}));
  };

  render() {
    return (
      <Fragment>
        {this.props.children({
          isOpened: this.state.isOpened,
          onToggle: this.onToggle
        })}
      </Fragment>
    )
  }
}

OpenedController.propTypes = {
  children: PropTypes.func,
  onOpen: PropTypes.func,
  onClose: PropTypes.func
};

export default OpenedController;
