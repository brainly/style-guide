import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import UUID from 'node-uuid';
import Icon, {TYPE, ICON_COLOR} from '../icons/Icon';
import classNames from 'classnames';

class Checkbox extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      id: props.id || UUID.v1()
    };
  }

  render() {
    const {checked, className, ...additionalProps} = this.props;
    const {id} = this.state;

    const checkboxClass = classNames('sg-checkbox', className);

    return (
      <div className={checkboxClass}>
        <input className="sg-checkbox__element" type="checkbox" id={id} checked={checked} {...additionalProps} />
        <label className="sg-checkbox__ghost" htmlFor={id}>
          <Icon type={TYPE.CHECK} color={ICON_COLOR.ADAPTIVE} size={10} />
        </label>
      </div>
    );
  }
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  id: PropTypes.string,
  className: PropTypes.string
};

export default Checkbox;
