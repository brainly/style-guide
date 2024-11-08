import * as React from 'react';
import useReducedMotion from '../utils/useReducedMotion';

type UseSelectMenuAnimationsPropsType = {
  selectId: string;
  popupClassName: string;
  popupContentClassName: string;
  floatingContainerClassName: string;
  selectElementClassName: string;
};

const MIN_POPUP_WIDTH = 120;
const ANIMATE_CLASSNAME = 'sg-animate-on-transforms';
const EXIT_STATE_CLASSNAME = 'exit-state';
const SCROLL_HIDE_CLASSNAME = 'hide-scroll';
const OPEN_CLASSNAME = 'open';
const MINIMAL_POPUP_TO_INPUT_RATIO = 0.7;

const useSelectMenuAnimations = (props: UseSelectMenuAnimationsPropsType) => {
  const {
    selectId,
    popupClassName,
    popupContentClassName,
    floatingContainerClassName,
    selectElementClassName,
  } = props;
  const initialElementRef = React.useRef<DOMRect>();
  const selectRef = React.useRef<DOMRect>();
  const hasReduceMotion = useReducedMotion();

  // @ts-ignore TS7031
  const animateExit = ({callback}) => {
    try {
      const select = document.getElementById(selectId);
      // @ts-ignore TS18047
      const popupContainer = select.getElementsByClassName(
        popupClassName
      )[0] as HTMLDivElement;
      // @ts-ignore TS18047
      const floatingContainer = select.getElementsByClassName(
        floatingContainerClassName
      )[0] as HTMLDivElement;
      // @ts-ignore TS18047
      const popupContent = select.getElementsByClassName(
        popupContentClassName
      )[0] as HTMLDivElement;

      popupContainer.style.opacity = `0`;
      popupContainer.style.height = `0px`;
      if (selectRef.current)
        popupContainer.style.width = `${selectRef.current.width}px`;
      popupContent.classList.add(SCROLL_HIDE_CLASSNAME);

      popupContainer.classList.add(EXIT_STATE_CLASSNAME);
      floatingContainer.classList.add(EXIT_STATE_CLASSNAME);
      requestAnimationFrame(() => {
        if (callback) callback();
      });
    } catch {}
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

      // Register desired position
      initialElementRef.current = floatingContainer.getBoundingClientRect();
      selectRef.current = selectElement.getBoundingClientRect();
      const initialContainerSize = initialElementRef.current;
      const selectElementSize = selectRef.current;

      popupContent.style.width = `${initialContainerSize.width}px`;
      popupContent.style.height = `${initialContainerSize.height}px`;
      popupContent.classList.add(SCROLL_HIDE_CLASSNAME);

      // Popup width at the start of animation
      // should be the same as element select width
      popupContainer.style.width = `${selectElementSize.width}px`;

      popupContainer.style.height = `0px`;

      // Reset the popup and container to the pre-appear position
      floatingContainer.classList.add(EXIT_STATE_CLASSNAME);
      popupContainer.classList.add(EXIT_STATE_CLASSNAME);

      // Wait for the next frame so we
      // know all the style changes have
      // taken hold.
      requestAnimationFrame(() => {
        floatingContainer.classList.remove(EXIT_STATE_CLASSNAME);
        popupContainer.classList.remove(EXIT_STATE_CLASSNAME);
        floatingContainer.classList.add(OPEN_CLASSNAME);
        popupContainer.classList.add(ANIMATE_CLASSNAME);
        floatingContainer.classList.add(ANIMATE_CLASSNAME);

        popupContainer.style.height = `${initialContainerSize.height}px`;
        const popupWidth: number = Math.max(
          initialContainerSize.width,
          selectElementSize.width * MINIMAL_POPUP_TO_INPUT_RATIO,
          MIN_POPUP_WIDTH
        );

        popupContainer.style.width = `${popupWidth}px`;
        popupContent.style.width = `${popupWidth}px`;

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

        // @ts-ignore TS7006
        const cleanupAfterTransition = popupContent => {
          popupContent.classList.remove(SCROLL_HIDE_CLASSNAME);
        };

        // @ts-ignore TS7006
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

        popupContainer.addEventListener('transitionend', handleTransitionEnd);

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

export default useSelectMenuAnimations;
