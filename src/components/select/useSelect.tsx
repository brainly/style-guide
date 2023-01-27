import * as React from 'react';

import {generateId} from '../utils';
import type {SelectPropsType} from './Select';

type UseSelectPropsType = Pick<
  SelectPropsType,
  'valid' | 'invalid' | 'expanded' | 'onToggle' | 'onOptionChange'
>;

const useSelect = (props: UseSelectPropsType) => {
  const {valid, invalid, expanded, onToggle, onOptionChange} = props;

  const {current: id} = React.useRef<string>(`select-${generateId()}`);
  const [isExpanded, setIsExpanded] = React.useState(expanded || false);
  const isControlled = expanded !== undefined;

  // Handle expanded change when controlled
  React.useEffect(() => {
    if (isControlled) setIsExpanded(expanded);
  }, [isControlled, expanded]);

  if (valid === true && invalid === true) {
    throw {
      name: 'WrongValidation',
      message: 'Select can be either valid or invalid!',
    };
  }

  const handleOptionSelect = (value: string) => {
    onOptionChange(value);
    onOpenChange(false);
  };

  const onOpenChange = isOpen => {
    if (isControlled) onToggle(isOpen);
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
