import * as React from 'react';

import type {SelectMenuPropsType, OptionType} from './SelectMenu';
import {__DEV__, invariant, generateId} from '../utils';
import useFloatingSelectMenu from './useFloatingSelectMenu';
import useSelectMenuAnimations from './useSelectMenuAnimations';
import {useSelectMenuDescendants} from './useSelectMenuDescendantsContext';

type UseSelectMenuPropsType = Pick<
  SelectMenuPropsType,
  | 'valid'
  | 'invalid'
  | 'expanded'
  | 'defaultExpanded'
  | 'disabled'
  | 'multiSelect'
  | 'onToggle'
  | 'onOptionChange'
>;

const useSelectMenu = (props: UseSelectMenuPropsType) => {
  const {
    valid,
    invalid,
    expanded,
    defaultExpanded,
    disabled,
    multiSelect,
    onToggle,
    onOptionChange,
  } = props;
  const {current: id} = React.useRef<string>(`select-${generateId()}`);

  if (__DEV__) {
    invariant(
      !(valid && invalid),
      `Select cannot be valid and invalid at the same time.`
    );
  }

  const [isExpanded, setIsExpanded] = React.useState(
    expanded || defaultExpanded || false
  );
  const isExpandedControlled = expanded !== undefined;
  const prevExpanded = React.useRef<Boolean>();

  const wrapperId = `${id}-wrapper`;
  const popupClassName = 'sg-select-menu__popup';
  const popupContentClassName = 'sg-select-menu__options-wrapper';
  const selectElementClassName = 'sg-select-menu__element';
  const floatingContainerClassName =
    'sg-select-menu__options-floating-container';

  const {animateEntry, animateExit} = useSelectMenuAnimations({
    selectId: wrapperId,
    floatingContainerClassName,
    popupClassName,
    popupContentClassName,
    selectElementClassName,
  });

  if (valid === true && invalid === true) {
    throw {
      name: 'WrongValidation',
      message: 'Select can be either valid or invalid!',
    };
  }

  const handleOptionSelect = (option: OptionType) => {
    onOptionChange(option);
    if (!multiSelect) onOpenChange(false);
  };

  const onOpenChange = (isOpen: boolean) => {
    if (disabled) return;

    const handleOpenChange = isOpen => {
      if (isExpandedControlled && onToggle) onToggle(isOpen);
      else setIsExpanded(isOpen);
    };

    // If the component will close
    // we first have to animate its exit before destroying it
    if (!isOpen && animateExit) {
      animateExit({
        callback: () => {
          handleOpenChange(isOpen);
        },
      });
    } else {
      handleOpenChange(isOpen);
    }
  };

  const {
    interactions,
    floatingProps,
    refs,
    listRef,
    context,
    isMounted,
    status,
    activeIndex,
  } = useFloatingSelectMenu({
    isExpanded,
    onOpenChange,
  });

  const {current: descendants} = React.useRef(
    useSelectMenuDescendants({listRef})
  );

  // Handle expanded change when controlled
  React.useEffect(() => {
    if (isExpandedControlled) setIsExpanded(expanded);
  }, [isExpandedControlled, expanded]);

  React.useEffect(() => {
    // Ensure animation fires only
    // when expanded change was detected
    if (
      prevExpanded.current === undefined ||
      isExpanded !== prevExpanded.current
    ) {
      prevExpanded.current = isExpanded;

      if (isExpanded) {
        animateEntry();
      }
    }
  }, [isExpanded, animateEntry]);

  return {
    descendants,
    id,
    ids: {
      wrapperId,
    },
    classNames: {
      floatingContainerClassName,
      popupClassName,
      popupContentClassName,
      selectElementClassName,
    },
    isExpanded,
    floating: {
      interactions,
      floatingProps,
      refs,
      listRef,
      context,
      isMounted,
      status,
      activeIndex,
    },
    onOpenChange,
    handleOptionSelect,
  };
};

export default useSelectMenu;
