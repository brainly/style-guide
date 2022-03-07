// @flow strict

import * as React from 'react';
import type {TransitionEffectAnimatorType} from './effectAnimator';
import {createCSSTransitionAnimator} from './cssTransitionAnimator';

// https://github.com/jsdom/jsdom/issues/1781
const supportsTransitions = () =>
  Boolean(window && window.TransitionEvent !== undefined);

export type TransitionPredefinedEasingType =
  | 'regular'
  | 'entry'
  | 'exit'
  | 'linear';

export type TransitionPredefinedDurationType =
  | 'instant'
  | 'quick1'
  | 'quick2'
  | 'moderate1'
  | 'moderate2'
  | 'gentle1'
  | 'gentle2';

export type TransitionPredefinedTranslateType =
  | 'xxs'
  | 'xs'
  | 's'
  | 'm'
  | 'l'
  | 'xl';

export type TransitionEasingType = TransitionPredefinedEasingType;

export type TransitionDurationType = TransitionPredefinedDurationType | number;

export type TransitionTranslateType =
  | TransitionPredefinedTranslateType
  | number
  | string;

export type TransitionPropertyObjectType = $ReadOnly<{
  /**
   * Already existing custom classes.
   */
  className?: string,
  easing?: TransitionEasingType,
  /**
   * The `number` type represents the value in milliseconds [ms].
   */
  duration?: TransitionDurationType,
  /**
   * The `number` type represents the value in pixels [px].
   */
  translateX?: TransitionTranslateType,
  /**
   * The `number` type represents the value in pixels [px].
   */
  translateY?: TransitionTranslateType,
  opacity?: number,
  scale?: number,
}>;

/**
 * As an array to composite different transitions into one motion.
 */
export type TransitionEffectPhaseType =
  | TransitionPropertyObjectType
  | Array<TransitionPropertyObjectType>;

export type TransitionEffectType = $ReadOnly<{
  initial?: TransitionEffectPhaseType,
  animate?: TransitionEffectPhaseType,
  exit?: TransitionEffectPhaseType,
}>;

export type TransitionMotionPropsType = $ReadOnly<{
  active: boolean,
  effect: TransitionEffectType | null,
}>;

export type TransitionPropsType = $ReadOnly<{
  ...TransitionMotionPropsType,
  // delay?: number, // unimplemented
  children: React.Node,
  onTransitionStart?: (effect: TransitionEffectType) => void,
  onTransitionEnd?: (effect: TransitionEffectType) => void,
}>;

function BaseTransition({
  active,
  effect,
  // delay = 0,
  children,
  onTransitionStart,
  onTransitionEnd,
}: TransitionPropsType) {
  const containerRef = React.useRef(null);
  const animator = React.useMemo<TransitionEffectAnimatorType>(
    () => createCSSTransitionAnimator(),
    []
  );

  /**
   * Changing callbacks should not trigger motion.
   */
  const onTransitionStartRef = React.useRef();
  const onTransitionEndRef = React.useRef();

  onTransitionStartRef.current = onTransitionStart;
  onTransitionEndRef.current = onTransitionEnd;

  /**
   * The transition relies on motion props that have been
   * applied to the actual DOM, and subsequent renders of
   * the virtual DOM should not have a visual result.
   */
  const previouslyAppliedProps = React.useRef<TransitionMotionPropsType>({
    active: false,
    effect: null,
  });

  React.useEffect(() => {
    const currentProps = {active, effect};
    const element = containerRef.current;

    if (!element) {
      return;
    }

    if (onTransitionStartRef.current && effect) {
      onTransitionStartRef.current(effect);
    }

    if (!supportsTransitions()) {
      if (onTransitionEndRef.current && effect) {
        onTransitionEndRef.current(effect);
      }
    } else {
      applyTransitionEffect({
        element,
        prevProps: previouslyAppliedProps.current,
        currentProps,
        animator,
      });
    }

    previouslyAppliedProps.current = currentProps;
  }, [animator, active, effect]);

  const handleTransitionEnd = React.useCallback(
    (event: TransitionEvent) => {
      // should ignore transitions of its own descendants
      if (event.target !== event.currentTarget) {
        return;
      }

      if (
        event.target instanceof HTMLElement &&
        animator.finished(event.target)
      ) {
        if (onTransitionEnd && effect) {
          onTransitionEnd(effect);
        }
      }
    },
    [animator, onTransitionEnd, effect]
  );

  return (
    <div
      ref={containerRef}
      onTransitionEnd={supportsTransitions() ? handleTransitionEnd : undefined}
    >
      {children}
    </div>
  );
}

export default function Transition({
  active,
  onTransitionEnd,
  ...otherProps
}: TransitionPropsType) {
  const [mounted, setMounted] = React.useState<boolean>(active);

  if (active && !mounted) {
    setMounted(true);
  }

  const handleTransitionEnd = React.useCallback(
    (effect: TransitionEffectType) => {
      setMounted(false);

      // proxy the actual event
      if (onTransitionEnd) {
        onTransitionEnd(effect);
      }
    },
    [onTransitionEnd]
  );

  return mounted ? (
    <BaseTransition
      {...otherProps}
      onTransitionEnd={handleTransitionEnd}
      active={active}
    />
  ) : null;
}

function applyTransitionEffect({
  element,
  prevProps,
  currentProps,
  animator,
}: {
  element: HTMLElement,
  prevProps: TransitionMotionPropsType,
  currentProps: TransitionMotionPropsType,
  animator: TransitionEffectAnimatorType,
}) {
  const {effect} = currentProps;

  if (effect === null) {
    return animator.cleanup(element);
  }

  if (prevProps.active === false && currentProps.active === true) {
    return animator.animate(element, effect.initial, effect.animate);
  }

  if (prevProps.active === true && currentProps.active === false) {
    return animator.animate(element, effect.animate, effect.exit);
  }

  if (prevProps.effect === null && currentProps.effect !== null) {
    return animator.animate(element, effect.initial, effect.animate);
  }

  if (prevProps.effect !== currentProps.effect) {
    return animator.animate(element, undefined, effect.animate);
  }

  return animator.cleanup(element);
}
