// @flow strict

import * as React from 'react';
import classNames from 'classnames';
import Text from '../text/Text';
import generateRandomString from '../../js/generateRandomString';
import {useRadioContext} from './useRadioContext';

type RadioColorType = 'light' | 'dark';

export type RadioPropsType = {
  checked?: boolean,
  children?: React.Node,
  className?: ?string,
  color?: ?RadioColorType,
  description?: React.Node | string,
  disabled?: boolean,
  id?: string,
  invalid?: boolean,
  name?: string,
  onChange: (SyntheticInputEvent<HTMLInputElement>) => void,
  required?: boolean,
  value?: string,
  'aria-labelledby'?: string,
  ...
};

const Radio = ({
  checked,
  color = 'dark',
  children,
  className,
  description,
  disabled,
  id,
  invalid = false,
  name,
  onChange,
  required = false,
  value,
  'aria-labelledby': ariaLabelledBy,
  'aria-describedby': ariaDescribedBy,
  ...props
}: RadioPropsType) => {
  const {current: radioId} = React.useRef(
    id === undefined || id === '' ? generateRandomString() : id
  );

  const radioGroupContext = useRadioContext();
  const isWithinRadioGroup =
    radioGroupContext && Object.keys(radioGroupContext).length;

  const isDisabled =
    disabled !== undefined ? disabled : radioGroupContext.disabled;
  const isControlled = checked !== undefined || isWithinRadioGroup;
  let isChecked = undefined;

  if (isControlled) {
    // Radio can either be directly set as checked, or be controlled by a RadioGroup
    isChecked =
      checked !== undefined
        ? checked
        : radioGroupContext.selectedValue &&
          radioGroupContext.selectedValue === value;
  }
  const hasLabel = children !== undefined && children !== null;
  const labelId = ariaLabelledBy || `${radioId}-label`;

  const descriptionId = React.useMemo(() => {
    if (ariaDescribedBy) return ariaDescribedBy;
    if (description) return `${radioId}-description`;
    return null;
  }, [radioId, ariaDescribedBy, description]);

  const radioClass = classNames('sg-radio-new', className, {
    [`sg-radio-new--${String(color)}`]: color,
    'sg-radio-new--disabled': isDisabled,
    'sg-radio-new--with-label': !!hasLabel,
    'sg-radio-new--with-description': !!descriptionId,
  });

  const onInputChange = e => {
    if (isWithinRadioGroup) {
      radioGroupContext.setLastFocusedValue(value);
      radioGroupContext.setSelectedValue(value);
    }
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className={radioClass}>
      <div className="sg-radio-new__element">
        <input
          className="sg-radio-new__input"
          type="radio"
          id={radioId}
          checked={isChecked}
          disabled={isDisabled}
          name={name || radioGroupContext.name}
          onChange={onInputChange}
          required={required}
          value={value}
          aria-labelledby={labelId}
          aria-describedby={descriptionId}
          aria-invalid={invalid ? true : undefined}
          {...props}
        />
        <span
          className="sg-radio-new__circle"
          // This element is purely decorative so
          // we hide it for screen readers
          aria-hidden="true"
        />
      </div>
      {hasLabel && (
        <Text
          id={labelId}
          htmlFor={radioId}
          type="label"
          size="medium"
          weight="bold"
          className="sg-radio-new__label"
        >
          {children}
        </Text>
      )}
      {description && (
        <Text
          id={descriptionId}
          className="sg-radio-new__description"
          size="small"
          type="span"
          color="text-black"
          breakWords
        >
          {description}
        </Text>
      )}
    </div>
  );
};

export default Radio;
