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

type PropType = $ReadOnly<{
  title: Node,
  titleSize?: 'small' | 'large',
  children?: Node,
  className?: string,
  defaultOpened?: boolean,
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
}: PropType) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const {current: id} = useRef<string>(`AccordionItem_${generateId()}`);
  const [isHover, setIsHover] = useState(false);

  const {
    state: {opened, noGapBetweenElements},
    dispatch,
  } = useContext(AccordionContext);
  const isHidden = !opened[id];

  const handleClickOnBody = () => {
    if (!isHidden) {
      return;
    }
    handleOpen(true);
    setIsHover(false);
  };

  const handleClickOnTitle = () => {
    if (isHidden) {
      return;
    }
    handleOpen(false);
  };

  function handleOpen(value: boolean) {
    dispatch({
      type: 'accordion/SET_OPENED',
      payload: {id, value},
    });
  }

  useEffect(() => {
    if (defaultOpened) {
      handleOpen(true);
    }
    //eslint-disable-next-line
  }, [defaultOpened]);

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
          contentRef.current.style.height = `${0}px`;
        });
      });
    }

    function expand() {
      if (!contentRef.current) {
        return;
      }
      const sectionHeight = contentRef.current.scrollHeight;

      contentRef.current.style.height = `${sectionHeight}px`;
      contentRef.current.addEventListener('transitionend', onTransitionEnd);
    }

    function onTransitionEnd() {
      if (!contentRef.current) {
        return;
      }

      contentRef.current.style.height = 'auto';
      contentRef.current.removeEventListener('transitionend', onTransitionEnd);
    }

    if (isHidden) {
      collapse();
    } else {
      expand();
    }

    return () => {
      if (!content) {
        return;
      }
      content.removeEventListener('transitionend', onTransitionEnd);
    };
  }, [isHidden]);

  const isBorderHighlighted = isHover && !noGapBetweenElements;

  return (
    <Box
      color="light"
      border
      borderColor={isBorderHighlighted ? 'dark' : 'gray-secondary-lightest'}
      onClick={handleClickOnBody}
      className={cx(
        'sg-accordion-item',
        'sg-accordion-item__pointer',
        {
          'sg-accordion-item--no-gap': noGapBetweenElements,
          'sg-accordion-item__pointer': !isHidden,
        },
        className
      )}
      onMouseEnter={() => {
        isHidden && setIsHover(true);
      }}
      onMouseLeave={() => {
        isHidden && setIsHover(false);
      }}
      aria-expanded={!isHidden}
    >
      <Flex
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        className={cx({
          'sg-accordion-item__pointer': !isHidden,
        })}
        onClick={handleClickOnTitle}
        onMouseEnter={() => {
          !isHidden && setIsHover(true);
        }}
        onMouseLeave={() => {
          !isHidden && setIsHover(false);
        }}
      >
        <Link
          type="h1"
          size={titleSize}
          color="black"
          weight="bold"
          underlined={isHover}
        >
          {title}
        </Link>
        <Flex
          justifyContent="center"
          alignItems="center"
          className={cx('sg-accordion-item__icon', {
            'sg-accordion-item__icon--hover': isHover,
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
      <div
        className={cx('sg-accordion-item__content', {
          'sg-accordion-item__content--hidden': isHidden,
        })}
        ref={contentRef}
      >
        <Text>{children}</Text>
      </div>
    </Box>
  );
};

export default AccordionItem;
