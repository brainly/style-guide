import * as React from 'react';

import {generateId} from '../utils';
import type {SelectPropsType, SelectOptionType} from './Select';

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
  const lastRef = React.useRef<DOMRect>();

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

  const animateEntry = () => {
    const floatingContainer = document.querySelector(
      '.sg-select-new__options-floating-container'
    ) as HTMLDivElement;

    // Desired position
    lastRef.current = floatingContainer.getBoundingClientRect();

    // Reset the popup to pre-appear position
    floatingContainer.style.height = `0px`;

    // Wait for the next frame so we
    // know all the style changes have
    // taken hold.
    requestAnimationFrame(function () {
      // Switch on animations.
      floatingContainer.classList.add('animate-on-transforms');
      // Now apply the height change
      floatingContainer.style.height = `${lastRef.current?.height}px`;
    });
  };

  const animateExit = ({callback}) => {
    const floatingContainer = document.querySelector(
      '.sg-select-new__options-floating-container'
    ) as HTMLDivElement;

    floatingContainer.style.height = `0px`;

    // Capture the end with transitionend and call expanded change
    floatingContainer?.addEventListener('transitionend', () => {
      callback();
    });
  };

  React.useEffect(() => {
    if (isExpanded) {
      animateEntry();
    }
  }, [isExpanded]);

  const onOpenChange = (isOpen: boolean) => {
    const handleOpenChange = isOpen => {
      if (isExpandedControlled && onToggle) onToggle(isOpen);
      else setIsExpanded(isOpen);
    };

    // If the component will close
    // we first have to animate its exit before destroying it
    if (!isOpen) {
      animateExit({callback: () => handleOpenChange(isOpen)});
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
