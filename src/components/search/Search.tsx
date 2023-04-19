import * as React from 'react';
import cx from 'classnames';
import Input, {COLOR, SIZE} from '../form-elements/Input';
import type {InputPropsType} from '../form-elements/Input';
import Icon from '../icons/Icon';
import Button from '../buttons/Button';

export type SearchPropsType = {
  inputClassName?: string;
  withRoundButton?: boolean;
} & Omit<
  React.AllHTMLAttributes<HTMLElement>,
  'inputClassName' | 'withRoundButton' | 'size'
> &
  InputPropsType;

// TODO: make back to spread (...InputModule.InputPropsType) after flow bump
const Search = ({
  /**
   * Additional class names
   */
  className,

  /**
   * Optional boolean for full width search
   * @example <Search fullWidth placeholder="Find all the answers..." />
   */
  fullWidth,

  /**
   * There are two sizes options for most of the form elements
   * @example <Search size="normal" placeholder="Find all the answers..." />
   * @see size="normal" https://styleguide.brainly.com/latest/docs/interactive.html?size="normal"#search
   * @see size="large" https://styleguide.brainly.com/latest/docs/interactive.html?size="large"#search
   */
  size,

  /**
   * Optional boolean for round button in search
   * @example <Search withRoundButton />
   */
  withRoundButton = false,

  /**
   * Optional classname for input in search
   * @example <Search inputClassName="sg-input--white" placeholder="Find all the answers..." />
   */
  inputClassName,

  /**
   * Additional classname for input in search, like color, which is pass directly to input
   * @example <Search color="white" placeholder="Find all the answers..." />
   */
  ...additionalProps
}: SearchPropsType) => {
  const baseClassName = 'sg-search';
  const searchClassName = cx(
    baseClassName,
    {
      [`sg-search--${String(size)}`]: size,
      'sg-search--full-width': fullWidth,
    },
    className
  );

  return (
    <div className={searchClassName}>
      <Input
        {...additionalProps}
        type="search"
        withIcon
        size={size}
        className={cx(`${baseClassName}__input`, inputClassName)}
        fullWidth
      />
      <Button
        variant={withRoundButton ? 'solid' : 'transparent-light'}
        className={cx([
          `${baseClassName}__icon`,
          `sg-search-button--${size}`,
          {
            [`${baseClassName}__icon--transparent`]: !withRoundButton,
          },
        ])}
        icon={
          <Icon type="search" size={size === 'l' ? 24 : 16} color="adaptive" />
        }
        iconOnly
        size={size === 'l' ? 'm' : 's'}
      />
    </div>
  );
};

export default Search;
export {SIZE, COLOR};
