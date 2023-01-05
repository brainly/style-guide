import * as React from 'react';
import * as IconModule from '../../icons/Icon';
import {__DEV__, invariant} from '../../utils';
const {default: Icon, ICON_COLOR} = IconModule;
export type StarPropsType = {
  size?: IconModule.IconSizeType;
  name?: string;
  onChange?: () => unknown;
  active?: boolean;
  'aria-label'?: string;
  value?: number;
} & Omit<
  React.AllHTMLAttributes<HTMLElement>,
  'size' | 'name' | 'onChange' | 'active' | 'undefined' | 'value'
>;

const Star = ({
  size,
  name,
  onChange,
  active,
  'aria-label': label,
  value,
  ...props
}: StarPropsType) => {
  if (__DEV__) {
    invariant(
      !((!active && name) || (!active && label) || (!active && value)),
      'name/label/value is not working in non-active Star'
    );
  }

  return (
    <span {...props} className="sg-rate-box__star">
      {active && (
        <input
          type="radio"
          className="sg-rate-box__radio"
          name={name}
          onChange={onChange}
          value={value}
          aria-label={label}
        />
      )}
      <Icon
        type="star"
        size={size}
        color={ICON_COLOR.ADAPTIVE}
        className="sg-rate-box__star-icon"
        aria-hidden
      />
    </span>
  );
};

export default Star;