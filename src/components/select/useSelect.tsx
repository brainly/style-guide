import * as React from 'react';

import {generateId} from '../utils';
import type {SelectPropsType, SelectOptionType} from './Select';
import {SIZE} from './Select';

type UseSelectPropsType = Pick<
  SelectPropsType,
  | 'valid'
  | 'invalid'
  | 'expanded'
  | 'defaultExpanded'
  | 'multiSelect'
  | 'onToggle'
  | 'onOptionChange'
>;

const useSelect = (props: UseSelectPropsType) => {
  const {
    valid,
    invalid,
    expanded,
    defaultExpanded,
    multiSelect,
    onToggle,
    onOptionChange,
  } = props;

  const {current: id} = React.useRef<string>(`select-${generateId()}`);
  const [isExpanded, setIsExpanded] = React.useState(
    expanded || defaultExpanded || false
  );
  const isExpandedControlled = expanded !== undefined;

  // Handle expanded change when controlled
  React.useEffect(() => {
    if (isExpandedControlled) setIsExpanded(expanded);
  }, [isExpandedControlled, expanded]);

  if (valid === true && invalid === true) {
    throw {
      name: 'WrongValidation',
      message: 'Select can be either valid or invalid!',
    };
  }

  const handleOptionSelect = (option: SelectOptionType) => {
    onOptionChange(option);
    if (!multiSelect) onOpenChange(false);
  };

  const onOpenChange = (isOpen: boolean) => {
    if (isExpandedControlled) onToggle(isOpen);
    else setIsExpanded(isOpen);
  };

  return {
    id,
    isExpanded,
    handleOptionSelect,
    onOpenChange,
  };
};

export default useSelect;
