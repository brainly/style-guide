import * as React from 'react';

type UseSelectAnimationsPropsType = {
  popupClassName: string;
  floatingContainerClassName: string;
};

const useSelectAnimations = (props: UseSelectAnimationsPropsType) => {
  const {popupClassName, floatingContainerClassName} = props;
  const lastRef = React.useRef<DOMRect>();

  const animateExit = ({callback}) => {
    const popup = document.querySelector(
      `.${popupClassName}`
    ) as HTMLDivElement;

    popup.style.height = `0px`;

    callback();
  };

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
      popupContainer.style.height = `1px`;

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

  return {
    animateEntry,
    animateExit,
  };
};

export default useSelectAnimations;
