import * as React from 'react';

type UseSelectAnimationsPropsType = {
  selectId: string;
  popupClassName: string;
  floatingContainerClassName: string;
  selectElementClassName: string;
};

const MIN_POPUP_WIDTH = 120;
const SCROLL_HIDE_CLASSNAME = 'hide-scroll';

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
    floatingContainerClassName,
    selectElementClassName,
  } = props;
  const lastRef = React.useRef<DOMRect>();
  const selectRef = React.useRef<DOMRect>();

  const animateExit = ({callback}) => {
    const select = document.getElementById(selectId);
    const popup = select.getElementsByClassName(
      popupClassName
    )[0] as HTMLDivElement;
    const floatingContainer = select.getElementsByClassName(
      floatingContainerClassName
    )[0] as HTMLDivElement;

    popup.classList.add('hide-scroll');
    popup.style.height = `0px`;
    popup.style.width = `${selectRef.current.width}px`;
    popup.style.opacity = `0`;

    requestAnimationFrame(() => {
      popup.classList.add('animate-on-transforms');
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

      const floatingContainer = select.getElementsByClassName(
        floatingContainerClassName
      )[0] as HTMLDivElement;
      const popupContainer = select.getElementsByClassName(
        popupClassName
      )[0] as HTMLDivElement;
      const selectElement = select.getElementsByClassName(
        selectElementClassName
      )[0] as HTMLDivElement;

      // Register desired position
      lastRef.current = floatingContainer.getBoundingClientRect();
      selectRef.current = selectElement.getBoundingClientRect();
      const initialContainerSize = lastRef.current;
      const selectElementSize = selectRef.current;

      // Disable vertical scrolling when component is animating
      popupContainer.classList.add(SCROLL_HIDE_CLASSNAME);

      // Reset the popup height to the pre-appear position
      popupContainer.style.height = `1px`;

      // Popup width at the start of animation
      // should be the same as element select width
      popupContainer.style.width = `${selectElementSize.width}px`;

      resetFloatingContainerTopPosition(floatingContainer, lastRef);

      // Wait for the next frame so we
      // know all the style changes have
      // taken hold.
      requestAnimationFrame(() => {
        popupContainer.classList.add('animate-on-transforms');
        floatingContainer.classList.add('animate-on-transforms');

        popupContainer.style.height = `${initialContainerSize.height}px`;
        popupContainer.style.width = `${Math.max(
          initialContainerSize.width,
          selectElementSize.width * 0.7,
          MIN_POPUP_WIDTH
        )}px`;

        // Animate the floating container position back to it's initial state
        floatingContainer.style.top = `${initialContainerSize.top}px`;
        // Ensure manipulating popup height doesn't affect the floating container
        floatingContainer.style.height = `${initialContainerSize.height}px`;
        floatingContainer.style.width = `${initialContainerSize.width}px`;

        function handleTransitionEnd(e) {
          // Once height finishes transition
          // we are sure the component is fully visible
          if (e.propertyName === 'height') {
            popupContainer.classList.remove(SCROLL_HIDE_CLASSNAME);

            popupContainer.removeEventListener(
              'transitionend',
              handleTransitionEnd
            );
          }
        }

        popupContainer?.addEventListener('transitionend', handleTransitionEnd);
      });
    });
  };

  return {
    animateEntry,
    animateExit,
  };
};

export default useSelectAnimations;
