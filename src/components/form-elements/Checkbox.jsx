// @flow strict

import classNames from 'classnames';
import React, {PureComponent} from 'react';
import generateRandomString from '../../js/generateRandomString';
import Icon from '../icons/Icon';

export type CheckboxPropsType = {
  checked?: boolean,
  id?: string,
  className?: string,
  ...
};

export type CheckboxStateType = {id: string, ...};

class Checkbox extends PureComponent<CheckboxPropsType, CheckboxStateType> {
  constructor(props: CheckboxPropsType) {
    super(props);

    this.state = {
      id:
        props.id === undefined || props.id === ''
          ? generateRandomString()
          : props.id,
    };
  }

  render() {
    const {checked, className, ...additionalProps} = this.props;
    const {id} = this.state;

    const checkboxClass = classNames('sg-checkbox', className);

    return (
      <div className={checkboxClass}>
        <input
          {...additionalProps}
          className="sg-checkbox__element"
          type="checkbox"
          id={id}
          checked={checked}
        />
        <label className="sg-checkbox__ghost" htmlFor={id}>
          <Icon type="check" color="adaptive" size={16} />
        </label>
      </div>
    );
  }
}

export default Checkbox;
