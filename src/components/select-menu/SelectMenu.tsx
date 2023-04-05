import * as React from 'react';

import type {IconTypeType as SubjectIconTypeType} from '../subject-icons/SubjectIcon';
import type {IconTypeType} from '../icons/Icon';
import useSelectMenu from './useSelectMenu';
import Option from './SelectMenuOption';
import {SelectMenuContext} from './useSelectMenuContext';
import {SelectMenuDescendantsContext} from './useSelectMenuDescendantsContext';
import SelectMenuComponent from './SelectMenuComponent';

export type SelectMenuOptionType = {
  value: string;
  label: string;
  icon?: {
    name: IconTypeType | SubjectIconTypeType;
    isSubjectIcon?: boolean;
  };
};

export type OptionType = {
  value: string;
  label: React.ReactNode | string;
  icon?: React.ReactNode;
};

export type SelectMenuSizeType = 's' | 'm' | 'l';

export const SIZE = {
  S: 's',
  M: 'm',
  L: 'l',
} as const;

const DEFAULT_SIZE = SIZE.M;

const ICON_SIZE_MAP = {
  [SIZE.L]: 32,
  [SIZE.M]: 24,
  [SIZE.S]: 16,
} as const;

export type SelectMenuColorType = 'default' | 'white';

export const COLOR = {
  DEFAULT: 'default',
  WHITE: 'white',
} as const;

export type SelectMenuPropsType = {
  /**
   * SelectMenu inner elements
   * @example <SelectMenu.Root><SelectMenu.Option value="option1">Option 1</SelectMenu.Option></SelectMenu.Root>
   */
  children?: React.ReactNode;

  /**
   * Optional string. Additional class names.
   */
  className?: string;

  /**
   * Optional string. Select placeholder text.
   * @example <Select placeholder="Select an option" options={[{value: 'option1', label: 'Option1'},{value: 'option2', label: 'Select selector'}]} />
   * @default 'Select...'
   */
  placeholder?: string;

  /**
   * Optional boolean. Set to true if select is valid.
   * @example <Select valid options={[{value: 'option1', label: 'Option1'},{value: 'option2', label: 'Select selector'}]} />
   * @default false
   * */
  valid?: boolean;

  /**
   * Optional boolean. Set to true if select is invalid.
   * @example <Select invalid options={[{value: 'option1', label: 'Option1'},{value: 'option2', label: 'Select selector'}]} />
   * @default false
   */
  invalid?: boolean;

  /**
   * Optional array. Select options.
   * @example <Select options={[{value: 'option1', label: 'Option1'},{value: 'option2', label: 'Select selector'}]} />
   * @default []
   */
  options?: ReadonlyArray<SelectMenuOptionType>;

  /**
   * Optional array. Select selected options.
   * @example <Select options={[{value: 'option1', label: 'Option1'},{value: 'option2', label: 'Select selector'}]} selectedOptions={[{value: 'option1', label: 'Option1'}]} />
   * @default []
   */
  selectedOptions?: ReadonlyArray<SelectMenuOptionType>;

  /**
   * Optional boolean. Set to true, if user can select multiple options.
   * @example <Select multiSelect options={[{value: 'option1', label: 'Option1'},{value: 'option2', label: 'Select selector'}]} />
   */
  multiSelect?: boolean;

  /**
   * Optional boolean. Set when you want to manually controll select popup menu appearance. If not set, the component will manage it itself.
   * @example <Select expanded={false} options={[{value: 'option1', label: 'Option1'},{value: 'option2', label: 'Select selector'}]} selectedOptions={[{value: 'option1', label: 'Option1'}]} />
   * @default undefined
   */
  expanded?: boolean;

  /**
   * Optional boolean. Set when you want to display select popup menu on first render, but you want the component manage it's expanded state itself.
   * @example <Select defaultExpanded options={[{value: 'option1', label: 'Option1'},{value: 'option2', label: 'Select selector'}]} selectedOptions={[{value: 'option1', label: 'Option1'}]} />
   * @default undefined
   */
  defaultExpanded?: boolean;

  /**
   * Optional boolean. Set to `true` when you want to display option icon (if it has any).
   * @example <Select withIcons options={[{value: 'option1', label: 'Option1', iconName: 'physics'},{value: 'option2', label: 'Select selector', iconName: 'chemistry'}]} selectedOptions={[{value: 'option1', label: 'Option1'}]} />
   * @default false
   */
  withIcons?: boolean;

  /**
   * Optional boolean. Set to `true` if you want to disable select.
   * @example <Select disabled />
   */
  disabled?: boolean;

  /**
   * Set to change the Select size. There are three sizes options: `s`, `m` and `l`.
   * @example <Select size="s" options={[{value: 'option1', text: 'Option1'},{value: 'option2', text: 'Select selector'}]} />
   * @default "m"
   */
  size?: SelectMenuSizeType;

  /**
   * There are two color variants, `default` and `white`. The default does not have to be specified.
   * @example <Select color="white" options={[{value: 'option1', label: 'Option1'},{value: 'option2', label: 'Select selector'}]} />
   */
  color?: SelectMenuColorType | null | undefined;

  /**
   * Optional callback. Called by clicking on the any part of the Select component.
   * @example <Select
   *           onClick={(e) => console.log(e.target)}
   *           options={[{value: 'option1', label: 'Option1'},{value: 'option2', label: 'Select selector'}]}
   *          />
   */
  onClick?: (arg0: React.MouseEvent<HTMLDivElement>) => unknown;

  /**
   * Callback. Called by selecting an option.
   * @example <Select
   *           onOptionChange={({value, label, iconName}) => {
   *              // update component selected options array
   *           }}
   *           options={[{value: 'option1', label: 'Option1'},{value: 'option2', label: 'Select selector'}]}
   *          />
   */
  onOptionChange: (option: OptionType) => unknown;

  /**
   * Callback. Called only when expanded state is controlled, called when component informs the expanded state should change.
   * @example <Select
   *           onToggle={(isOpen) => {
   *              // set component expanded state to isOpen state
   *           }}
   *           options={[{value: 'option1', label: 'Option1'},{value: 'option2', label: 'Select selector'}]}
   *          />
   */
  onToggle?: (boolean) => unknown;
} & Omit<
  React.AllHTMLAttributes<HTMLElement>,
  | 'children'
  | 'className'
  | 'placeholder'
  | 'valid'
  | 'invalid'
  | 'options'
  | 'selectedOptions'
  | 'multiSelect'
  | 'expanded'
  | 'defaultExpanded'
  | 'withIcons'
  | 'disabled'
  | 'size'
  | 'color'
  | 'onClick'
  | 'onOptionChange'
  | 'onToggle'
>;

const Root = React.forwardRef<HTMLDivElement, SelectMenuPropsType>(
  (props: SelectMenuPropsType, ref) => {
    const {
      children,
      className,
      valid,
      invalid,
      disabled,
      color,
      selectedOptions = [],
      placeholder = 'Select...',
      expanded = undefined,
      defaultExpanded = undefined,
      withIcons = false,
      multiSelect = false,
      size = DEFAULT_SIZE,
      onClick,
      onToggle,
      onOptionChange,
      ...additionalProps
    } = props;

    const {descendants, ...context} = useSelectMenu({
      valid,
      invalid,
      expanded,
      defaultExpanded,
      disabled,
      multiSelect,
      onToggle,
      onOptionChange,
    });

    const ctx = React.useMemo(
      () => ({
        ...context,
        selectedOptions,
        placeholder,
        onClick,
        withIcons,
        size,
      }),
      [context, selectedOptions, placeholder, onClick, withIcons, size]
    );

    return (
      <SelectMenuDescendantsContext.Provider value={descendants}>
        <SelectMenuContext.Provider value={ctx}>
          <SelectMenuComponent
            ref={ref}
            className={className}
            {...additionalProps}
          >
            {children}
          </SelectMenuComponent>
        </SelectMenuContext.Provider>
      </SelectMenuDescendantsContext.Provider>
    );
  }
);

Root.displayName = 'SelectMenu';

export default {Root, Option};
