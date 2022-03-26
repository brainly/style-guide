// @flow strict

import * as React from 'react';
import cx from 'classnames';
import type {EffectAnimatorType} from './effectAnimator';
import {createCSSTransitionAnimator} from './cssTransitionAnimator';
import {createClassNamesRegistry} from './classNamesRegistry';

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

type TimingPropsType = $ReadOnly<{
  /**
   * The `number` type represents the value in milliseconds [ms].
   */
  duration?: PredefinedDurationType | number,
  easing?: PredefinedEasingType,
}>;

export type PropertyObjectType = $ReadOnly<{
  ...TimingPropsType,
  className?: string,
  transform?: $ReadOnly<{
    /**
     * Overrides the general timing props for the transform property.
     */
    ...TimingPropsType,
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
        /**
         * Overrides the general timing props for the opacity property.
         */
        ...TimingPropsType,
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
  className?: string,
  inlined?: boolean,
  children: React.Node,
  onTransitionStart?: (effect: EffectType) => void,
  onTransitionEnd?: (effect: EffectType) => void,
}>;

function BaseTransition({
  active,
  effect,
  delay = 0,
  className,
  inlined,
  children,
  onTransitionStart,
  onTransitionEnd,
}: TransitionPropsType) {
  const containerRef = React.useRef(null);
  const classNamesRegistry = React.useMemo(createClassNamesRegistry, []);
  const animator = React.useMemo<EffectAnimatorType>(
    () => createCSSTransitionAnimator(classNamesRegistry),
    [classNamesRegistry]
  );

  const baseClassName = cx(className, {
    'sg-transition--inlined': inlined,
  });

  React.useLayoutEffect(() => {
    /**
     * Since the transition imperatively applies the style
     * and className to the container element, other props
     * changes that affect these attributes should also be
     * imperative. The registry helps to synchronize class
     * attribute changes.
     */
    classNamesRegistry.register('base', baseClassName || '');
    const element = containerRef.current;

    if (element) {
      element.className = classNamesRegistry.toString();
    }
  }, [classNamesRegistry, baseClassName]);

  /**
   * Changing callbacks should not trigger transition.
   */
  const onTransitionStartRef = React.useRef();
  const onTransitionEndRef = React.useRef();

  onTransitionStartRef.current = onTransitionStart;
  onTransitionEndRef.current = onTransitionEnd;

  /**
   * The transition can be triggered by props that have been
   * applied to the actual DOM, and subsequent renders of the
   * virtual DOM should not produce any visual result.
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
    /**
     * Parental component will delay mounting on active
     * change so the child should not wait once again.
     */
    const alreadyDelayed = !previouslyAppliedProps.current.active && active;

    return afterDelay(alreadyDelayed ? 0 : delay, () => {
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
    });
  }, [animator, active, effect, delay]);

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
  delay = 0,
  onTransitionEnd,
  ...otherProps
}: TransitionPropsType) {
  const [mounted, setMounted] = React.useState<boolean>(active);

  React.useLayoutEffect(() => {
    return afterDelay(delay, () => {
      if (active === true) {
        setMounted(true);
      }
    });
  }, [active, delay]);

  const handleTransitionEnd = React.useCallback(
    (effect: EffectType) => {
      if (active === false) {
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
      delay={delay}
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
}

function afterDelay(delay: number, callback: () => void) {
  if (delay > 0) {
    const timeoutId = setTimeout(callback, delay);

    return () => clearTimeout(timeoutId);
  }

  callback();
}
