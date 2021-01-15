// @flow strict

import classNames from 'classnames';
import React, {PureComponent} from 'react';
import generateRandomString from '../../js/generateRandomString';
import Icon from '../icons/Icon';

export type CheckboxPropsType = {
  checked?: boolean,
  id?: string,
  className?: string,
  children: React$Node,
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
    const {checked, className, children, ...additionalProps} = this.props;
    const {id} = this.state;

    const checkboxClass = classNames('sg-checkbox', className);

    return (
      <label className={checkboxClass} htmlFor={id}>
        <input
          {...additionalProps}
          className="sg-checkbox__element"
          type="checkbox"
          id={id}
          checked={checked}
        />
        <div className="sg-checkbox__ghost">
          <Icon type="check" color="adaptive" size={16} />
        </div>
        <small
          className="sg-checkbox__label"
          aria-hidden="true"
          data-checked={checked}
        >
          {children}
        </small>
      </label>
    );
  }
}

export default Checkbox;
