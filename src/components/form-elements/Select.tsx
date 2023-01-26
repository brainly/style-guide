import * as React from 'react';
import classnames from 'classnames';
import Icon, {ICON_COLOR} from '../icons/Icon';

type OptionsPropsType = {
  value: string;
  text: string;
};
type GroupedOptionsPropsType = {
  label: string;
  options: ReadonlyArray<OptionsPropsType>;
};
type SelectSizeType = 's' | 'm' | 'l';
type SelectColorType = 'default' | 'white';
export const COLOR = {
  DEAFAULT: 'default',
  WHITE: 'white',
} as const;

export const SIZE = {
  S: 's',
  M: 'm',
  L: 'l',
} as const;

const ICON_SIZE_MAP = {
  [SIZE.L]: 32,
  [SIZE.M]: 24,
  [SIZE.S]: 16,
} as const;

export type SelectPropsType = {
  /**
   * Optional specification for select value
   * @example <Select value="Option1" options={[{value: 'option1', text: 'Option1'},{value: 'option2', text: 'Select selector'}]} />
   */
  value?: string;

  /**
   * Optional boolean to specified if it's valid
   * @example <Select valid options={[{value: 'option1', text: 'Option1'},{value: 'option2', text: 'Select selector'}]} />
   */
  valid?: boolean;

  /**
   * Optional boolean to specified if it's invalid
   * @example <Select invalid options={[{value: 'option1', text: 'Option1'},{value: 'option2', text: 'Select selector'}]} />
   */
  invalid?: boolean;

  /**
   * Optional boolean to specified if it's capitalized
   * @example <Select capitalized options={[{value: 'option1', text: 'Option1'},{value: 'option2', text: 'Select selector'}]} />
   */
  capitalized?: boolean;

  /**
   * There are two color variants for form elements, default does not have to be specified
   * @example <Select color="white" options={[{value: 'option1', text: 'Option1'},{value: 'option2', text: 'Select selector'}]} />
   * @see color="default" https://styleguide.brainly.com/latest/docs/interactive.html?color="default"#select
   * @see color="white" https://styleguide.brainly.com/latest/docs/interactive.html?color="white"#select
   */
  color?: SelectColorType | null | undefined;

  /**
   * There are two sizes options for most of the form elements
   * @example <Select size="m" options={[{value: 'option1', text: 'Option1'},{value: 'option2', text: 'Select selector'}]} />
   * @see size="m" https://styleguide.brainly.com/latest/docs/interactive.html?size="m"#select
   * @see size="l" https://styleguide.brainly.com/latest/docs/interactive.html?size="l"#select
   */
  size?: SelectSizeType;

  /**
   * Optional boolean to specified if it's full width
   * @example <Select fullWidth placeholder="placeholder" />
   */
  fullWidth?: boolean;

  /**
   * Optional array of options of the select
   * @example <Select size="m" options={[{value:"option1",text:"Option1"},{label:"Label title",options:[{value:"option1",text:"Option1"},{value:"option2",text:"Select selector"}]},{value:"option2",text:"Select selector"}]} />
   */
  options?: ReadonlyArray<GroupedOptionsPropsType | OptionsPropsType>;

  /**
   * Additional class names
   */
  className?: string;
} & Omit<
  React.AllHTMLAttributes<HTMLElement>,
  | 'value'
  | 'valid'
  | 'invalid'
  | 'capitalized'
  | 'color'
  | 'size'
  | 'fullWidth'
  | 'options'
  | 'className'
>;

const getOptionElement = ({value, text}: OptionsPropsType) => (
  <option key={value} value={value}>
    {text}
  </option>
);

const Select = React.forwardRef<HTMLSelectElement, SelectPropsType>(
  (props: SelectPropsType, ref) => {
    const {
      valid,
      invalid,
      capitalized,
      fullWidth,
      value,
      size = SIZE.M,
      color,
      className,
      options = [],
      ...additionalProps
    } = props;

    if (valid === true && invalid === true) {
      throw {
        name: 'WrongValidation',
        message: 'Select can be either valid or invalid!',
      };
    }

    const selectClass = classnames(
      'sg-select',
      {
        'sg-select--selected': value,
        'sg-select--valid': valid,
        'sg-select--invalid': invalid,
        'sg-select--capitalized': capitalized,
        'sg-select--full-width': fullWidth,
        [`sg-select--${String(color)}`]: color,
        [`sg-select--${String(size)}`]: size && size !== 'm',
      },
      className
    );
    const optionsElements = options.map((item, index) => {
      if ('options' in item) {
        return (
          <optgroup key={item.label + index} label={item.label}>
            {item.options.map(getOptionElement)}
          </optgroup>
        );
      }

      if (item.text || item.value) {
        return getOptionElement(item);
      }

      return null;
    });

    return (
      <div className={selectClass}>
        <div className="sg-select__icon">
          <Icon
            type="caret_down"
            color={ICON_COLOR['icon-gray-50']}
            size={ICON_SIZE_MAP[size]}
          />
        </div>

        <select
          {...additionalProps}
          className="sg-select__element"
          value={value}
          ref={ref}
        >
          {optionsElements}
        </select>
      </div>
    );
  }
);

Select.displayName = 'Select';
export default Select;
