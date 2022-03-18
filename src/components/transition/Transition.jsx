// @flow strict

import * as React from 'react';
import type {EffectAnimatorType} from './effectAnimator';
import {createCSSTransitionAnimator} from './cssTransitionAnimator';

// https://github.com/jsdom/jsdom/issues/1781
const supportsTransitions = () =>
  Boolean(window && window.TransitionEvent !== undefined);

export type PredefinedEasingType = 'regular' | 'entry' | 'exit' | 'linear';

export type PredefinedDurationType =
  | 'instant'
  | 'quick1'
  | 'quick2'
  | 'moderate1'
  | 'moderate2'
  | 'gentle1'
  | 'gentle2';

export type PredefinedTranslateType = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl';

/**
 * Props representing a single motion of a transition.
 */
type SingleMotionPropsType = $ReadOnly<{
  easing?: PredefinedEasingType,
  /**
   * The `number` type represents the value in milliseconds [ms].
   */
  duration?: PredefinedDurationType | number,
}>;

export type PropertyObjectType = $ReadOnly<{
  /**
   * Parent motion props will be overwritten with child props.
   */
  ...SingleMotionPropsType,
  /**
   * Already existing custom classes.
   */
  className?: string,
  transform?: $ReadOnly<{
    ...SingleMotionPropsType,
    /**
     * The `number` type represents the value in pixels [px].
     */
    translateX?: PredefinedTranslateType | number | string,
    /**
     * The `number` type represents the value in pixels [px].
     */
    translateY?: PredefinedTranslateType | number | string,
    scale?: number,
  }>,
  opacity?:
    | number
    | $ReadOnly<{
        ...SingleMotionPropsType,
        value: number,
      }>,
}>;

type EffectType = $ReadOnly<{
  initial?: PropertyObjectType,
  animate?: PropertyObjectType,
  exit?: PropertyObjectType,
}>;

type TransitionTriggerPropsType = $ReadOnly<{
  active: boolean,
  effect: EffectType | null,
}>;

export type TransitionPropsType = $ReadOnly<{
  ...TransitionTriggerPropsType,
  delay?: number,
  children: React.Node,
  onTransitionStart?: (effect: EffectType) => void,
  onTransitionEnd?: (effect: EffectType) => void,
}>;

function BaseTransition({
  active,
  effect,
  // todo: implement delay of transition phases
  // eslint-disable-next-line no-unused-vars
  delay = 0,
  children,
  onTransitionStart,
  onTransitionEnd,
}: TransitionPropsType) {
  const containerRef = React.useRef(null);
  const animator = React.useMemo<EffectAnimatorType>(
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
  const previouslyAppliedProps = React.useRef<TransitionTriggerPropsType>({
    active: false,
    effect: null,
  });

  /**
   * The useLayoutEffect because of possible flicking
   * issues while using a regular useEffect hook.
   */
  React.useLayoutEffect(() => {
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

      if (animator.finished() && onTransitionEnd && effect) {
        onTransitionEnd(effect);
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
    (effect: EffectType) => {
      if (!active) {
        setMounted(false);
      }

      // proxy the actual event
      if (onTransitionEnd) {
        onTransitionEnd(effect);
      }
    },
    [active, onTransitionEnd]
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
  prevProps: TransitionTriggerPropsType,
  currentProps: TransitionTriggerPropsType,
  animator: EffectAnimatorType,
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
