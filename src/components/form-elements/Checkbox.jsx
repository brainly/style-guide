// @flow

import React, {PureComponent} from 'react';
import UUID from 'node-uuid';
import Icon, {TYPE, ICON_COLOR} from '../icons/Icon';
import classNames from 'classnames';

export type CheckboxPropsType = {
  checked?: boolean,
  id?: string,
  className?: string
};

export type CheckboxStateType = {
  id?: string
};

class Checkbox extends PureComponent<CheckboxPropsType, CheckboxStateType> {
  constructor(props: CheckboxPropsType) {
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

export default Checkbox;
