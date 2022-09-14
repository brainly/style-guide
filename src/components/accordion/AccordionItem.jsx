//@flow strict

// eslint-disable-next-line import/no-duplicates
import * as React from 'react';
// eslint-disable-next-line import/no-duplicates
import {useContext, useEffect, useRef, useState} from 'react';
import {generateId} from '../utils';

import cx from 'classnames';
import Box from '../box/Box';
import Flex from '../flex/Flex';
import Icon, {ICON_COLOR} from '../icons/Icon';
import Link from '../text/Link';
import Text from '../text/Text';
import {AccordionContext} from './Accordion';
import type {ResponsivePropType} from '../utils/responsive-props';

type PaddingType = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl';

export type AccordionItemPropsType = $ReadOnly<{
  title: React.Node,
  titleSize?: ResponsivePropType<'small' | 'large'>,
  children?: React.Node,
  className?: string,
  padding?: ResponsivePropType<PaddingType>,
  tabIndex?: number,
  id?: string,
  ariaHeadingLevel?: number,
}>;

const AccordionItem = ({
  title,
  titleSize = 'large',
  children,
  className = '',
  padding = 'm',
  tabIndex = 0,
  id: customId,
  ariaHeadingLevel = 2,
}: AccordionItemPropsType) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const {current: id} = useRef<string>(
    customId ?? `AccordionItem_${generateId()}`
  );
  const contentId = `Section_${id}`;

  const {
    noGapBetweenElements,
    expanded,
    focusedElementId,
    dispatch,
    reduceMotion,
    onItemSelect,
  } = useContext(AccordionContext);
  const [isHovered, setIsHovered] = useState(false);

  const isCollapsed = !expanded.includes(id);
  const isFocused = focusedElementId === id;
  const isHighlighted = isHovered || isFocused;
  const isBorderHighlighted = isHighlighted && !noGapBetweenElements;
  const isTitleString = typeof title === 'string';

  const toggleOpen = () => {
    onItemSelect(id, isCollapsed);
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
      payload: {id: ''},
    });
  }

  useEffect(() => {
    const content = contentRef.current;

    function collapse() {
      if (!contentRef.current) {
        return;
      }

      if (reduceMotion) {
        contentRef.current.style.height = `${0}px`;
        contentRef.current.hidden = true;
        contentRef.current.style.overflow = 'hidden';
      } else {
        const sectionHeight = contentRef.current.scrollHeight;

        requestAnimationFrame(function () {
          if (!contentRef.current) {
            return;
          }
          contentRef.current.style.height = `${sectionHeight}px`;

          requestAnimationFrame(function () {
            if (!contentRef.current) {
              return;
            }
            contentRef.current.style.height = `0px`;
            contentRef.current.style.overflow = `hidden`;

            contentRef.current.addEventListener(
              'transitionend',
              onTransitionEnd
            );
          });
        });
      }
    }

    function expand() {
      if (!contentRef.current) {
        return;
      }

      contentRef.current.hidden = false;
      const sectionHeight = contentRef.current.scrollHeight;

      if (reduceMotion) {
        contentRef.current.style.height = 'auto';
        contentRef.current.style.overflow = 'visible';
      } else {
        contentRef.current.style.height = `${sectionHeight}px`;
        contentRef.current.addEventListener('transitionend', onTransitionEnd);
      }
    }

    function onTransitionEnd() {
      if (!contentRef.current) {
        return;
      }

      if (contentRef.current.style.height === '0px') {
        // we set hidden in order to prevent gaining focus inside collapsed content
        contentRef.current.hidden = true;
      } else {
        contentRef.current.style.height = 'auto';
        contentRef.current.style.overflow = 'visible';
      }

      contentRef.current.removeEventListener('transitionend', onTransitionEnd);
    }

    isCollapsed ? collapse() : expand();

    return () => {
      if (!content) {
        return;
      }
      content.removeEventListener('transitionend', onTransitionEnd);
    };
  }, [isCollapsed, reduceMotion]);

  return (
    <Box
      color="white"
      border
      borderColor={isBorderHighlighted ? 'gray-40' : 'gray-20'}
      className={cx(
        'sg-accordion-item',
        {
          'sg-accordion-item--no-gap': noGapBetweenElements,
          'sg-accordion-item--reduced-motion': reduceMotion,
        },
        className
      )}
      padding={null}
    >
      <div role="heading" aria-level={ariaHeadingLevel} id={id}>
        <Box
          padding={padding}
          className={cx('sg-accordion-item__button', {
            'sg-accordion-item__button--focused': isFocused,
          })}
          onClick={toggleOpen}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          aria-expanded={!isCollapsed}
          aria-controls={contentId}
          role="button"
          tabIndex={tabIndex}
        >
          <Flex
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            {isTitleString ? (
              <Link
                size={titleSize}
                color="text-black"
                weight="bold"
                underlined={isHighlighted}
                disabled
              >
                {title}
              </Link>
            ) : (
              <span className="sg-accordion-item__title">{title}</span>
            )}
            <Flex
              justifyContent="center"
              alignItems="center"
              className={cx('sg-accordion-item__icon', {
                'sg-accordion-item__icon--hover': isHighlighted,
              })}
            >
              <Icon
                type="chevron_down"
                color={ICON_COLOR['icon-black']}
                className={cx('sg-accordion-item__arrow', {
                  'sg-accordion-item__arrow--visible': !isCollapsed,
                })}
                aria-hidden="true"
              />
            </Flex>
          </Flex>
        </Box>
      </div>

      <div
        ref={contentRef}
        className="sg-accordion-item__content"
        id={contentId}
        role="region"
        aria-labelledby={id}
        hidden
      >
        <Box padding={padding} className="sg-accordion-item__content-box">
          <Text>{children}</Text>
        </Box>
      </div>
    </Box>
  );
};

export default AccordionItem;
