import * as React from 'react';

import {generateId} from '../utils';
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
    > & {popupClassName: string; floatingContainerClassName: string};

const useSelect = (props: UseSelectPropsType) => {
  const {
    valid,
    invalid,
    expanded,
    defaultExpanded,
    multiSelect,
    popupClassName,
    floatingContainerClassName,
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

  const animateExit = ({callback}) => {
    const popup = document.querySelector(
      `.${popupClassName}`
    ) as HTMLDivElement;

    popup.style.height = `0px`;

    // Capture the end with transitionend and call expanded change
    popup?.addEventListener('transitionend', () => {
      callback();
    });
  };

  React.useEffect(() => {
    const animateEntry = () => {
      // Wait for the next frame
      // so we allow the floating container to apply all flip styles
      requestAnimationFrame(() => {
        const floatingContainer = document.querySelector(
          `.${floatingContainerClassName}`
        ) as HTMLDivElement;
        const popupContainer = document.querySelector(
          `.${popupClassName}`
        ) as HTMLDivElement;

        // Register desired position
        lastRef.current = floatingContainer.getBoundingClientRect();

        // Reset the popup to the pre-appear position
        popupContainer.classList.add('animate-on-transforms');

        // Wait for the next frame so we
        // know all the style changes have
        // taken hold.
        requestAnimationFrame(() => {
          popupContainer.style.height = `${lastRef.current?.height}px`;

          // Ensure manipulating popup height doesn't affect the floating container
          floatingContainer.style.height = `${lastRef.current?.height}px`;
          floatingContainer.style.width = `${lastRef.current?.width}px`;
        });
      });
    };

    if (isExpanded) {
      animateEntry();
    }
  }, [isExpanded, popupClassName, floatingContainerClassName]);

  const onOpenChange = (isOpen: boolean) => {
    const handleOpenChange = isOpen => {
      if (isExpandedControlled && onToggle) onToggle(isOpen);
      else setIsExpanded(isOpen);
    };

    // If the component will close
    // we first have to animate its exit before destroying it
    if (!isOpen) {
      animateExit({
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
