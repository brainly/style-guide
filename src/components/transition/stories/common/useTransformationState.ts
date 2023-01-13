import * as React from 'react';

type ElementSnapshotType = Readonly<{
  left: number;
  top: number;
  width: number;
  height: number;
}>;
type TransformationStateType = Readonly<{
  previousSnapshot: ElementSnapshotType | null;
  currentSnapshot: ElementSnapshotType | null;
  diffLeft: number;
  diffTop: number;
  diffWidth: number;
  diffHeight: number;
  diffScaleX: number;
  diffScaleY: number;
}>;
export function useTransformationState({
  elementRef,
  containerRef,
  updateKey,
}: {
  elementRef: {
    current: HTMLElement | null;
  };
  containerRef?: {
    current: HTMLElement | null;
  };

  /**
   * Triggers recreation of the element snapshot.
   */
  updateKey: number | string | boolean;
}): TransformationStateType {
  const [state, setState] = React.useState<TransformationStateType>({
    previousSnapshot: null,
    currentSnapshot: null,
    diffLeft: 0,
    diffTop: 0,
    diffWidth: 0,
    diffHeight: 0,
    diffScaleX: 0,
    diffScaleY: 0,
  });
  const updateState = React.useCallback(() => {
    const element = elementRef.current;
    const container = containerRef ? containerRef.current : document.body;

    if (element !== null && container !== null) {
      setState(previous => {
        return createTransformationState({
          element,
          container,
          previous,
        });
      });
    }
  }, [containerRef, elementRef]);

  /**
   * The useLayoutEffect hook is required to catch transformation
   * changes before they will be painted. This could be a problem
   * during the first render when mounting both the container and
   * its deep descendant, causing the containerRef to be null.
   */
  const didTheFirstRender = React.useRef(false);

  React.useEffect(() => {
    if (didTheFirstRender.current === false) {
      didTheFirstRender.current = true;
      updateState();
    }
  }, [updateState]);
  React.useLayoutEffect(() => {
    if (didTheFirstRender.current === true) {
      updateState();
    }
  }, [updateState, updateKey]);
  return state;
}

function createTransformationState({
  element,
  container,
  previous,
}: {
  element: HTMLElement;
  container: HTMLElement;
  previous: TransformationStateType;
}): TransformationStateType {
  const previousSnapshot = previous.currentSnapshot;
  const currentSnapshot = createElementSnapshot({
    element,
    container,
  });

  if (previousSnapshot === null) {
    return {...previous, previousSnapshot, currentSnapshot};
  }

  const diffWidth = currentSnapshot.width - previousSnapshot.width;
  const diffHeight = currentSnapshot.height - previousSnapshot.height;

  return {
    previousSnapshot,
    currentSnapshot,
    diffLeft: currentSnapshot.left - previousSnapshot.left,
    diffTop: currentSnapshot.top - previousSnapshot.top,
    diffWidth,
    diffHeight,
    diffScaleX: diffWidth / currentSnapshot.width,
    diffScaleY: diffHeight / currentSnapshot.height,
  };
}

function createElementSnapshot({
  element,
  container,
}: {
  element: HTMLElement;
  container: HTMLElement;
}): ElementSnapshotType {
  const elementRect = element.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();

  return {
    left: elementRect.left - containerRect.left,
    top: elementRect.top - containerRect.top,
    width: elementRect.width,
    height: elementRect.height,
  };
}
