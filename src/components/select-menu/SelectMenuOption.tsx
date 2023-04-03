import * as React from 'react';
import classnames from 'classnames';
import {useMergeRefs} from '@floating-ui/react';

import type {IconTypeType as SubjectIconTypeType} from '../subject-icons/SubjectIcon';
import type {IconTypeType} from '../icons/Icon';

import SubjectIcon from '../subject-icons/SubjectIcon';
import Icon from '../icons/Icon';
import Checkbox from '../form-elements/checkbox/Checkbox';
import Text from '../text/Text';
import useSelectMenuContext from './useSelectMenuContext';

export type SelectOptionElementPropsType = {
  children: React.ReactNode;
  value: string;
  icon?: {
    name: IconTypeType | SubjectIconTypeType;
    isSubjectIcon?: boolean;
  };
  isSelected?: boolean;
};

const SelectMenuOption = React.forwardRef<
  HTMLDivElement,
  SelectOptionElementPropsType
>(({children, value, icon, isSelected}: SelectOptionElementPropsType, ref) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [index, setIndex] = React.useState<number>(null);

  const context = useSelectMenuContext();

  const itemRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const thisItemIndex = context.optionsList.size + 1;

    setIndex(thisItemIndex);
    context.optionsList.set(thisItemIndex, itemRef);
    context.listRef.current[thisItemIndex] = itemRef.current;

    return () => {
      context.optionsList.delete(thisItemIndex);
      context.listRef.current[thisItemIndex] = null;
    };
  }, [context.optionsList, context.listRef]);

  console.log('context.optionsList', context.optionsList);

  const classNames = classnames('sg-select-menu__option', {
    'sg-select-menu__option--selected': isSelected,
    'sg-select-menu__option--with-icon': context.withIcons,
    'sg-select-menu__option--multi-select': context.multiSelect,
  });

  const displayedIcon = React.useMemo(() => {
    const {name, isSubjectIcon = false} = icon || {};

    if (!context.withIcons || (context.withIcons && !name)) return null;
    if (isSubjectIcon) {
      const subjectIconName = name as SubjectIconTypeType;

      return (
        <SubjectIcon
          size="small"
          monoColor={isSelected || isHovered ? null : 'icon-gray-50'}
          type={subjectIconName}
        />
      );
    } else {
      const regularIconName = name as IconTypeType;

      return (
        <Icon
          size={24}
          color={isSelected || isHovered ? 'icon-black' : 'icon-gray-50'}
          type={regularIconName}
        />
      );
    }
  }, [isSelected, isHovered, context, icon]);

  const optionState = React.useMemo(() => {
    let optionState;

    if (context.multiSelect) {
      optionState = <Checkbox id={value} checked={isSelected} />;
    } else if (isSelected) {
      optionState = <Icon type="check" size={24} color="icon-black" />;
    }

    return <div className="sg-select-menu__option-state">{optionState}</div>;
  }, [isSelected, context, value]);

  const interactions = context.interactions.getItemProps({
    // Handle pointer select.
    onClick() {
      context.handleOptionSelect({value, icon, label: children});
    },
    // Handle keyboard select.
    onKeyDown(event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        context.handleOptionSelect({value, icon, label: children});
      }

      // Only if not using typeahead.
      if (event.key === ' ') {
        event.preventDefault();
        context.handleOptionSelect({value, icon, label: children});
      }
    },
  });

  return (
    <div
      key={value}
      ref={itemRef}
      className={classNames}
      role="option"
      aria-selected={isSelected}
      tabIndex={index === context.activeIndex ? 0 : -1}
      {...interactions}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="sg-select-menu__option-label">
        {displayedIcon}
        <Text size="small" weight="bold" breakWords>
          {children}
        </Text>
      </div>
      {optionState}
    </div>
  );
});

export default SelectMenuOption;
