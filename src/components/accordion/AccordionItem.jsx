//@flow strict

import React, {
  useContext,
  useLayoutEffect,
  useEffect,
  useRef,
  useState,
} from 'react';
import type {Node} from 'react';
import cx from 'classnames';
import Box from '../box/Box';
import Flex from '../flex/Flex';
import Icon from '../icons/Icon';
import Link from '../text/Link';
import Text from '../text/Text';
import {AccordionContext} from './Accordion';

type PaddingType = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl';

type PropType = $ReadOnly<{
  title: Node,
  titleSize?: 'small' | 'large',
  children?: Node,
  className?: string,
  defaultOpened?: boolean,
  padding?: PaddingType,
  tabIndex?: number,
}>;

function generateId() {
  return Math.random()
    .toString(36)
    .substring(7);
}

const AccordionItem = ({
  title,
  titleSize = 'large',
  children,
  className = '',
  defaultOpened = false,
  padding = 'm',
  tabIndex = 0,
}: PropType) => {
  const hasRendered = useRef(false);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const {current: id} = useRef<string>(`AccordionItem_${generateId()}`);
  const contentId = `Section_${id}`;

  const {noGapBetweenElements, opened, focusedElementId, dispatch} = useContext(
    AccordionContext
  );
  const [isHovered, setIsHovered] = useState(false);

  const isHidden = !opened[id];
  const isFocused = focusedElementId === id;
  const isHighlighted = isHovered || isFocused;
  const isBorderHighlighted = isHighlighted && !noGapBetweenElements;

  const toggleOpened = () => {
    dispatch({
      type: 'accordion/TOGGLE_OPEN',
    });
  };

  function handleFocus() {
    dispatch({
      type: 'accordion/SET_FOCUSED',
      payload: {id},
    });
  }

  function handleBlur() {
    dispatch({
      type: 'accordion/SET_FOCUSED',
      payload: {id: null},
    });
  }

  useEffect(() => {
    if (defaultOpened) {
      dispatch({
        type: 'accordion/SET_OPENED',
        payload: {id, value: true},
      });
    }

    hasRendered.current = true;
    //eslint-disable-next-line
  }, []);

  useLayoutEffect(() => {
    const content = contentRef.current;

    function collapse() {
      if (!contentRef.current) {
        return;
      }
      const sectionHeight = contentRef.current.scrollHeight;

      requestAnimationFrame(function() {
        if (!contentRef.current) {
          return;
        }
        contentRef.current.style.height = `${sectionHeight}px`;

        requestAnimationFrame(function() {
          if (!contentRef.current) {
            return;
          }
          contentRef.current.style.height = `0px`;

          contentRef.current.addEventListener('transitionend', onTransitionEnd);
        });
      });
    }

    function expand() {
      if (!contentRef.current) {
        return;
      }

      contentRef.current.hidden = false;
      const sectionHeight = contentRef.current.scrollHeight;

      contentRef.current.style.height = `${sectionHeight}px`;
      contentRef.current.addEventListener('transitionend', onTransitionEnd);
    }

    function onTransitionEnd() {
      if (!contentRef.current) {
        return;
      }

      if (contentRef.current.style.height === '0px') {
        contentRef.current.hidden = true; // accessibility requirement
      } else {
        contentRef.current.style.height = 'auto';
        contentRef.current.hidden = false; // accessibility requirement
      }

      contentRef.current.removeEventListener('transitionend', onTransitionEnd);
    }

    if (hasRendered.current === false) return;

    isHidden ? collapse() : expand();

    return () => {
      if (!content) {
        return;
      }
      content.removeEventListener('transitionend', onTransitionEnd);
    };
  }, [isHidden]);

  return (
    <Box
      color="light"
      border
      borderColor={isBorderHighlighted ? 'dark' : 'gray-secondary-lightest'}
      className={cx(
        'sg-accordion-item',
        {
          'sg-accordion-item--no-gap': noGapBetweenElements,
        },
        className
      )}
      padding={null}
      onMouseEnter={() => {
        isHidden && setIsHovered(true);
      }}
      onMouseLeave={() => {
        isHidden && setIsHovered(false);
      }}
    >
      <Box
        padding={padding}
        className="sg-accordion-item__pointer"
        onClick={toggleOpened}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        aria-expanded={!isHidden}
        aria-controls={contentId}
        id={id}
        role="button"
        tabIndex={tabIndex}
      >
        <Flex
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Link
            size={titleSize}
            color="black"
            weight="bold"
            underlined={isHighlighted}
          >
            {title}
          </Link>
          <Flex
            justifyContent="center"
            alignItems="center"
            className={cx('sg-accordion-item__icon', {
              'sg-accordion-item__icon--hover': isHighlighted,
            })}
          >
            <Icon
              type="arrow_down"
              color="dark"
              className={cx('sg-accordion-item__arrow', {
                'sg-accordion-item__arrow--visible': !isHidden,
              })}
            />
          </Flex>
        </Flex>
      </Box>

      <div
        ref={contentRef}
        className="sg-accordion-item__content"
        id={contentId}
        role="region"
        aria-labelledby={id}
      >
        <Box padding={padding} className="sg-accordion-item__content-box">
          <Text>{children}</Text>
        </Box>
      </div>
    </Box>
  );
};

export default AccordionItem;
