import * as React from 'react';

import type {SelectPropsType, SelectOptionType} from './Select';

type UseSelectPropsType =
  | Pick<
      SelectPropsType,
      | 'valid'
      | 'invalid'
      | 'expanded'
      | 'defaultExpanded'
      | 'multiSelect'
      | 'onToggle'
      | 'onOptionChange'
    > & {
      id: string;
      onEntry: () => unknown;
      onExit: ({callback}: {callback?: () => unknown}) => unknown;
    };

const useSelect = (props: UseSelectPropsType) => {
  const {
    id,
    valid,
    invalid,
    expanded,
    defaultExpanded,
    multiSelect,
    onEntry,
    onExit,
    onToggle,
    onOptionChange,
  } = props;

  const [isExpanded, setIsExpanded] = React.useState(
    expanded || defaultExpanded || false
  );
  const isExpandedControlled = expanded !== undefined;
  const prevExpanded = React.useRef<Boolean>();

  // Handle expanded change when controlled
  React.useEffect(() => {
    if (isExpandedControlled) setIsExpanded(expanded);
  }, [isExpandedControlled, expanded]);

  React.useEffect(() => {
    // Ensure animation fires only
    // when expanded change was detected
    if (!prevExpanded.current || isExpanded !== prevExpanded.current) {
      prevExpanded.current = isExpanded;

      if (isExpanded) {
        onEntry();
      }
    }
  }, [isExpanded, onEntry]);

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
    const handleOpenChange = isOpen => {
      if (isExpandedControlled && onToggle) onToggle(isOpen);
      else setIsExpanded(isOpen);
    };

    // If the component will close
    // we first have to animate its exit before destroying it
    if (!isOpen && onExit) {
      onExit({
        callback: () => {
          handleOpenChange(isOpen);
        },
      });
    } else {
      handleOpenChange(isOpen);
    }
  };

  return {
    id,
    isExpanded,
    handleOptionSelect,
    onOpenChange,
  };
};

export default useSelect;
