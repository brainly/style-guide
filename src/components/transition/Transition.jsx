// @flow strict

import * as React from 'react';
import cx from 'classnames';
import {createClassNamesRegistry} from './classNamesRegistry';
import {createCSSTransitionAnimator} from './CSSTransitionAnimator';
import {createEffect} from './predefinedEffects';
import type {PropertyObjectAnimatorType} from './propertyObjectAnimator';
import {getDebugOptions} from './debug';

Transition.createEffect = createEffect;

const isFillModeBackwards = mode => mode === 'backwards' || mode === 'both';
const isFillModeForwards = mode => mode === 'forwards' || mode === 'both';

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

// https://github.com/jsdom/jsdom/issues/1781
const supportsTransitions = () =>
  Boolean(window && window.TransitionEvent !== undefined);

const prefersReducedMotion = () =>
  window && window.matchMedia !== undefined
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      window.matchMedia('(prefers-reduced-motion)').matches
    : false;

export type PredefinedEasingType = 'regular' | 'entry' | 'exit' | 'linear';

export type PredefinedDurationType =
  | 'instant'
  | 'quick1'
  | 'quick2'
  | 'moderate1'
  | 'moderate2'
  | 'gentle1'
  | 'gentle2';

export type PredefinedTranslateType =
  | 'xxs'
  | 'xs'
  | 's'
  | 'm'
  | 'l'
  | 'xl'
  | '-xxs'
  | '-xs'
  | '-s'
  | '-m'
  | '-l'
  | '-xl';

type TimingPropsType = $ReadOnly<{
  /**
   * The numerical value is expressed in milliseconds [ms].
   */
  duration?: PredefinedDurationType | number,
  easing?: PredefinedEasingType,
}>;

export type PropertyObjectType = $ReadOnly<{
  /**
   * Common timing properties that can be
   * overridden for each property separately.
   */
  ...TimingPropsType,
  className?: string,
  transform?: $ReadOnly<{
    ...TimingPropsType,
    /**
     * The numerical value is expressed in pixels [px].
     */
    translateX?: PredefinedTranslateType | number | string,
    /**
     * The numerical value is expressed in pixels [px].
     */
    translateY?: PredefinedTranslateType | number | string,
    /**
     * Common scale for both the X and Y axis.
     */
    scale?: number,
    /**
     * Overrides the common scale for the X axis.
     */
    scaleX?: number,
    /**
     * Overrides the common scale for the Y axis.
     */
    scaleY?: number,
    origin?:
      | 'center'
      | 'left top'
      | 'left bottom'
      | 'right top'
      | 'right bottom',
  }>,
  width?:
    | 'auto'
    | number
    | $ReadOnly<{
        ...TimingPropsType,
        value: 'auto' | number,
      }>,
  height?:
    | 'auto'
    | number
    | $ReadOnly<{
        ...TimingPropsType,
        value: 'auto' | number,
      }>,
  opacity?:
    | number
    | $ReadOnly<{
        ...TimingPropsType,
        value: number,
      }>,
}>;

export type TransitionEffectType = $ReadOnly<{
  initial?: PropertyObjectType,
  animate?: PropertyObjectType,
  exit?: PropertyObjectType,
}>;

type TransitionEffectFnType = (
  prefersReducedMotion: boolean
) => TransitionEffectType | null;

type TransitionTriggerPropsType = $ReadOnly<{
  active: boolean,
  effect: TransitionEffectType | null,
}>;

export type TransitionPropsType = $ReadOnly<{
  active: boolean,
  effect: TransitionEffectType | TransitionEffectFnType | null,
  delay?: number,
  /**
   * Defines how styles are applied to the container element before
   * and after executing the transition effect, extending the animation.
   *
   * - `none` (default) no styles are applied when the effect is not animating,
   * - `forwards` retains styles from the recent phase of the current effect,
   * - `backwards` applies styles from the upcoming phase of the current effect
   *    as soon as possible, mounting component earlier and before the delay,
   * - `both` follows the rules for both forwards and backwards.
   */
  fillMode?: 'none' | 'forwards' | 'backwards' | 'both',
  /**
   * Makes a component "inline" without a line-break after
   * the container element, so the element can sit next to
   * other elements. That is useful for text transitions.
   */
  inline?: boolean,
  className?: string,
  children: React.Node,
  onTransitionStart?: (effect: TransitionEffectType) => void,
  onTransitionEnd?: (effect: TransitionEffectType) => void,
}>;

function BaseTransition({
  active,
  effect,
  delay = 0,
  fillMode = 'none',
  inline,
  className,
  children,
  onTransitionStart,
  onTransitionEnd,
}: TransitionPropsType) {
  const containerRef = React.useRef(null);
  const currentEffect = React.useMemo(() => {
    if (typeof effect === 'function') {
      return effect(prefersReducedMotion());
    }
    return effect;
  }, [effect]);

  const classNamesRegistry = React.useMemo(createClassNamesRegistry, []);
  const animator = React.useMemo<PropertyObjectAnimatorType>(
    () => createCSSTransitionAnimator(classNamesRegistry),
    [classNamesRegistry]
  );

  const {outlines} = getDebugOptions();
  const baseClassName = cx('sg-transition', className, {
    'sg-transition--inline': inline,
    'sg-transition--outlines': outlines,
  });

  useIsomorphicLayoutEffect(() => {
    /**
     * Since the transition imperatively applies the style
     * and className to the container element, other props
     * changes that affect these element attributes should
     * also be imperative. The registry synchronizes them
     * without affecting the animation.
     */
    classNamesRegistry.register('base', baseClassName || '');
    const container = containerRef.current;

    if (container) {
      container.className = classNamesRegistry.toString();
    }
  }, [classNamesRegistry, baseClassName]);

  /**
   * Changing callbacks should not trigger transition.
   */
  const onTransitionStartRef = React.useRef();
  const onTransitionEndRef = React.useRef();

  useIsomorphicLayoutEffect(() => {
    onTransitionStartRef.current = onTransitionStart;
    onTransitionEndRef.current = onTransitionEnd;

    animator.onFinish(() => {
      const container = containerRef.current;

      if (container && !isFillModeForwards(fillMode)) {
        animator.cleanup(container);
      }

      if (onTransitionEnd && currentEffect) {
        onTransitionEnd(currentEffect);
      }
    });
  });

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
  useIsomorphicLayoutEffect(() => {
    const {speed} = getDebugOptions();
    const currentProps = {active, effect: currentEffect};
    const container = containerRef.current;

    const rules = getTransitionRules({
      previousProps: previouslyAppliedProps.current,
      currentProps,
    });

    // no rules that trigger the transition found
    if (!container || rules === undefined) {
      return;
    }

    if (currentEffect === null || rules === null) {
      animator.cleanup(container);
      return;
    }

    if (supportsTransitions() && isFillModeBackwards(fillMode)) {
      animator.animate(container, rules.from);
    }

    const performTransitionEffect = () => {
      if (onTransitionStartRef.current) {
        onTransitionStartRef.current(currentEffect);
      }

      if (!supportsTransitions()) {
        if (onTransitionEndRef.current) {
          onTransitionEndRef.current(currentEffect);
        }
      } else {
        animator.animate(container, rules.from, rules.to, speed);
      }

      /**
       * These props should be memoized just
       * after applying them to the actual DOM.
       */
      previouslyAppliedProps.current = currentProps;
    };

    /**
     * The parent Transition component can delay mounting
     * a child BaseTransition component when the active prop
     * changes and the child should not wait again.
     */
    const actualDelay =
      rules.canSkipDelay && !isFillModeBackwards(fillMode) ? 0 : delay;

    if (actualDelay > 0) {
      const timeoutId = setTimeout(
        performTransitionEffect,
        actualDelay / speed
      );

      return () => clearTimeout(timeoutId);
    }

    performTransitionEffect();
  }, [animator, active, currentEffect, delay, fillMode]);

  const handleTransitionEnd = React.useCallback(
    (event: TransitionEvent) => {
      // ignores bubbling events of its own descendants
      if (event.target === event.currentTarget) {
        animator.propertyTransitionEnd();
      }
    },
    [animator]
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
  fillMode = 'none',
  onTransitionEnd,
  ...otherProps
}: TransitionPropsType) {
  const canMountBaseComponent = delay === 0 || isFillModeBackwards(fillMode);
  const [mounted, setMounted] = React.useState<boolean>(
    canMountBaseComponent ? active : false
  );

  useIsomorphicLayoutEffect(() => {
    if (active) {
      const mountBaseComponent = () => setMounted(true);

      if (canMountBaseComponent) {
        mountBaseComponent();
      } else {
        const {speed} = getDebugOptions();
        const timeoutId = setTimeout(mountBaseComponent, delay / speed);

        return () => clearTimeout(timeoutId);
      }
    }
  }, [active, delay, canMountBaseComponent]);

  const handleTransitionEnd = React.useCallback(
    (effect: TransitionEffectType) => {
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
      active={active}
      delay={delay}
      fillMode={fillMode}
      onTransitionEnd={handleTransitionEnd}
    />
  ) : null;
}

type TransitionRulesType = $ReadOnly<{
  from: PropertyObjectType | void,
  to: PropertyObjectType | void,
  canSkipDelay: boolean,
}>;

function getTransitionRules({
  previousProps,
  currentProps,
}: {
  previousProps: TransitionTriggerPropsType,
  currentProps: TransitionTriggerPropsType,
}): TransitionRulesType | null | void {
  if (currentProps.effect === null) {
    return null;
  }

  if (previousProps.active === false && currentProps.active === true) {
    return {
      from: currentProps.effect.initial,
      to: currentProps.effect.animate,
      canSkipDelay: true,
    };
  }

  if (previousProps.active === true && currentProps.active === false) {
    return {
      from: currentProps.effect.animate,
      to: currentProps.effect.exit,
      canSkipDelay: false,
    };
  }

  if (previousProps.effect === null && currentProps.effect !== null) {
    return {
      from: currentProps.effect.initial,
      to: currentProps.effect.animate,
      canSkipDelay: false,
    };
  }

  if (previousProps.effect !== currentProps.effect) {
    return {
      from: currentProps.effect.initial,
      to: currentProps.effect.animate,
      canSkipDelay: false,
    };
  }
}
