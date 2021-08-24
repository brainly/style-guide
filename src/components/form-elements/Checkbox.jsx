// @flow strict

import * as React from 'react';
import classNames from 'classnames';
import generateRandomString from '../../js/generateRandomString';
import Icon from '../icons/Icon';
import Text from '../text/Text';

export type CheckboxPropsType = {
  checked?: boolean,
  id?: string,
  className?: string,
  children?: React.Node,
  ...
};

export type CheckboxStateType = {id: string, ...};

class Checkbox extends React.PureComponent<
  CheckboxPropsType,
  CheckboxStateType
> {
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
        <div className="sg-checkbox__ghost" aria-hidden="true">
          <Icon type="check" color="adaptive" size={16} />
        </div>
        {children !== undefined && children !== null && (
          <Text
            size="small"
            type="span"
            weight="bold"
            className="sg-checkbox__label"
          >
            {children}
          </Text>
        )}
      </label>
    );
  }
}

export default Checkbox;
