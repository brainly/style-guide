import * as React from 'react';
import useReducedMotion from '../utils/useReducedMotion';

type UseSelectAnimationsPropsType = {
  selectId: string;
  popupClassName: string;
  popupContentClassName: string;
  floatingContainerClassName: string;
  selectElementClassName: string;
  selectElementIconClassName: string;
};

const MIN_POPUP_WIDTH = 120;
const ANIMATE_CLASSNAME = 'animate-on-transforms';
const SCROLL_HIDE_CLASSNAME = 'hide-scroll';
const OPEN_CLASSNAME = 'open';

/**
 * Move floating container by 8px from the initial top position.
 */
const resetFloatingContainerTopPosition = (
  floatingContainerElement,
  originalElementRef
) => {
  let transformTopAmount = -8;
  const placement = floatingContainerElement.getAttribute('data-placement');

  if (placement.includes('top')) {
    transformTopAmount = 8;
  }

  floatingContainerElement.style.top = `${
    originalElementRef.current.top + transformTopAmount
  }px`;
};

const useSelectAnimations = (props: UseSelectAnimationsPropsType) => {
  const {
    selectId,
    popupClassName,
    popupContentClassName,
    floatingContainerClassName,
    selectElementClassName,
    selectElementIconClassName,
  } = props;
  const lastRef = React.useRef<DOMRect>();
  const selectRef = React.useRef<DOMRect>();
  const hasReduceMotion = useReducedMotion();

  const animateExit = ({callback}) => {
    const select = document.getElementById(selectId);
    const popupContainer = select.getElementsByClassName(
      popupClassName
    )[0] as HTMLDivElement;
    const floatingContainer = select.getElementsByClassName(
      floatingContainerClassName
    )[0] as HTMLDivElement;
    const popupContent = select.getElementsByClassName(
      popupContentClassName
    )[0] as HTMLDivElement;

    popupContainer.classList.add('exit-animation');
    popupContainer.style.height = `0px`;
    if (selectRef.current)
      popupContainer.style.width = `${selectRef.current.width}px`;
    popupContainer.style.opacity = `0`;
    popupContent.classList.add(SCROLL_HIDE_CLASSNAME);

    requestAnimationFrame(() => {
      popupContainer.classList.add('animate-on-transforms');
      floatingContainer.classList.add('animate-on-transforms');
      resetFloatingContainerTopPosition(floatingContainer, lastRef);

      if (callback) callback();
    });
  };

  const animateEntry = () => {
    // Wait for the next frame
    // so we allow the floating container to apply all flip styles
    requestAnimationFrame(() => {
      const select = document.getElementById(selectId);

      if (!select) return;

      const floatingContainer = select.getElementsByClassName(
        floatingContainerClassName
      )[0] as HTMLDivElement;
      const popupContainer = select.getElementsByClassName(
        popupClassName
      )[0] as HTMLDivElement;
      const popupContent = select.getElementsByClassName(
        popupContentClassName
      )[0] as HTMLDivElement;
      const selectElement = select.getElementsByClassName(
        selectElementClassName
      )[0] as HTMLDivElement;
      const selectElementIcon = select.getElementsByClassName(
        selectElementIconClassName
      )[0] as HTMLDivElement;

      // Register desired position
      lastRef.current = floatingContainer.getBoundingClientRect();
      selectRef.current = selectElement.getBoundingClientRect();
      const initialContainerSize = lastRef.current;
      const selectElementSize = selectRef.current;

      popupContent.style.width = `${initialContainerSize.width}px`;
      popupContent.style.height = `${initialContainerSize.height}px`;
      popupContent.classList.add(SCROLL_HIDE_CLASSNAME);

      if (!hasReduceMotion) {
        // Reset the popup height to the pre-appear position
        popupContainer.style.height = `1px`;
        popupContainer.style.opacity = `0`;

        // Popup width at the start of animation
        // should be the same as element select width
        popupContainer.style.width = `${selectElementSize.width}px`;

        resetFloatingContainerTopPosition(floatingContainer, lastRef);
      }

      // Wait for the next frame so we
      // know all the style changes have
      // taken hold.
      requestAnimationFrame(() => {
        if (!hasReduceMotion) {
          popupContainer.classList.add(ANIMATE_CLASSNAME);
          selectElementIcon.classList.add(ANIMATE_CLASSNAME);
          floatingContainer.classList.add(ANIMATE_CLASSNAME);
        }

        floatingContainer.classList.add(OPEN_CLASSNAME);

        popupContainer.style.opacity = `1`;

        popupContainer.style.height = `${initialContainerSize.height}px`;
        const popupWidth: number = Math.max(
          initialContainerSize.width,
          selectElementSize.width * 0.7,
          MIN_POPUP_WIDTH
        );

        popupContainer.style.width = `${popupWidth}px`;
        popupContent.style.width = `${popupWidth}px`;

        // Animate the floating container position back to it's initial state
        floatingContainer.style.top = `${initialContainerSize.top}px`;
        // Ensure manipulating popup height doesn't affect the floating container
        floatingContainer.style.height = `${initialContainerSize.height}px`;
        floatingContainer.style.width = `${Math.max(
          initialContainerSize.width,
          popupWidth
        )}px`;

        const selectedElement = select.querySelector('[aria-selected=true]');

        // Scroll to selected element if any
        if (selectedElement && popupContent) {
          const elementRect = selectedElement.getBoundingClientRect();
          const popupRect = popupContent.getBoundingClientRect();
          const scrollAmount =
            elementRect.top - popupRect.top - popupRect.height / 2;

          popupContent.scroll({
            top: scrollAmount,
          });
        }

        const cleanupAfterTransition = popupContent => {
          popupContent.classList.remove(SCROLL_HIDE_CLASSNAME);
        };

        const handleTransitionEnd = e => {
          // Once height finishes transition
          // we are sure the component is fully visible
          if (e.propertyName === 'height') {
            cleanupAfterTransition(popupContent);

            popupContainer.removeEventListener(
              'transitionend',
              handleTransitionEnd
            );
          }
        };

        popupContainer?.addEventListener('transitionend', handleTransitionEnd);

        if (hasReduceMotion) {
          cleanupAfterTransition(popupContent);
        }
      });
    });
  };

  return {
    animateEntry,
    animateExit,
  };
};

export default useSelectAnimations;
