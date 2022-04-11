// @flow strict

import * as React from 'react';
import cx from 'classnames';
import {createClassNamesRegistry} from './classNamesRegistry';
import {createCSSTransitionAnimator} from './CSSTransitionAnimator2';
import type {PropertyObjectAnimatorType} from './propertyObjectAnimator';

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

type TransitionCorePropsType = $ReadOnly<{
  active: boolean,
  effect: TransitionEffectType | null,
}>;

export type TransitionPropsType = $ReadOnly<{
  ...TransitionCorePropsType,
  delay?: number,
  /**
   * Applies an initial phase of the current effect earlier,
   * before the delay. Without this, the transition will wait
   * until the delay is finished and then apply an initial
   * phase just before proceeding with the next phases.
   */
  fillDelay?: boolean,
  className?: string,
  inlined?: boolean,
  children: React.Node,
  onTransitionStart?: (effect: TransitionEffectType) => void,
  onTransitionEnd?: (effect: TransitionEffectType) => void,
}>;

function BaseTransition({
  active,
  effect,
  delay = 0,
  fillDelay,
  className,
  inlined,
  children,
  onTransitionStart,
  onTransitionEnd,
}: TransitionPropsType) {
  const containerRef = React.useRef(null);
  const classNamesRegistry = React.useMemo(createClassNamesRegistry, []);
  const animator = React.useMemo<PropertyObjectAnimatorType>(
    () => createCSSTransitionAnimator(classNamesRegistry),
    [classNamesRegistry]
  );

  const baseClassName = cx('sg-transition', className, {
    'sg-transition--inlined': inlined,
  });

  React.useLayoutEffect(() => {
    /**
     * Since the transition imperatively applies the style
     * and className to the container element, other changes
     * of props that affect these attributes should also be
     * imperative. The registry helps to synchronize class
     * attribute changes.
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

  onTransitionStartRef.current = onTransitionStart;
  onTransitionEndRef.current = onTransitionEnd;

  /**
   * The transition can be triggered by props that have been
   * applied to the actual DOM, and subsequent renders of the
   * virtual DOM should not produce any visual result.
   */
  const previouslyAppliedProps = React.useRef<TransitionCorePropsType>({
    active: false,
    effect: null,
  });

  /**
   * The useLayoutEffect because of possible flicking
   * issues while using a regular useEffect hook.
   */
  React.useLayoutEffect(() => {
    const container = containerRef.current;
    const currentProps = {active, effect};

    const rules = getTransitionRules({
      prevProps: previouslyAppliedProps.current,
      currentProps,
    });

    if (!container || rules === undefined) {
      return;
    }

    if (effect === null || rules === null) {
      animator.cleanup(container);
      return;
    }

    if (fillDelay && rules.canFillDelay) {
      animator.animate(container, effect.initial);
    }

    /**
     * The parent component may delay mounting on active prop
     * change and the child should not wait once again.
     */
    const hasBeenAlreadyDelayed = !fillDelay && rules.canSkipDelay;
    const actualDelay = hasBeenAlreadyDelayed ? 0 : delay;

    const performTransitionEffect = () => {
      if (onTransitionStartRef.current) {
        onTransitionStartRef.current(effect);
      }

      if (!supportsTransitions()) {
        if (onTransitionEndRef.current) {
          onTransitionEndRef.current(effect);
        }
      } else {
        animator.animate(container, rules.from, rules.to);
      }

      /**
       * These props should be updated just after
       * applying them to the actual DOM.
       */
      previouslyAppliedProps.current = currentProps;
    };

    if (actualDelay > 0) {
      const timeoutId = setTimeout(performTransitionEffect, actualDelay);

      return () => clearTimeout(timeoutId);
    }

    performTransitionEffect();
  }, [animator, active, effect, delay, fillDelay]);

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

type TransitionRulesType = $ReadOnly<{
  from: PropertyObjectType | void,
  to: PropertyObjectType | void,
  canFillDelay: boolean,
  canSkipDelay: boolean,
}>;

function getTransitionRules({
  prevProps,
  currentProps,
}: {
  prevProps: TransitionCorePropsType,
  currentProps: TransitionCorePropsType,
}): TransitionRulesType | null | void {
  if (currentProps.effect === null) {
    return null;
  }

  if (prevProps.active === false && currentProps.active === true) {
    return {
      from: currentProps.effect.initial,
      to: currentProps.effect.animate,
      canFillDelay: true,
      canSkipDelay: true,
    };
  }

  if (prevProps.active === true && currentProps.active === false) {
    return {
      from: currentProps.effect.animate,
      to: currentProps.effect.exit,
      canFillDelay: false,
      canSkipDelay: false,
    };
  }

  if (prevProps.effect === null && currentProps.effect !== null) {
    return {
      from: currentProps.effect.initial,
      to: currentProps.effect.animate,
      canFillDelay: true,
      canSkipDelay: false,
    };
  }

  if (prevProps.effect !== currentProps.effect) {
    return {
      from: currentProps.effect.initial,
      to: currentProps.effect.animate,
      canFillDelay: true,
      canSkipDelay: false,
    };
  }
}

export default function Transition({
  active,
  delay = 0,
  fillDelay,
  onTransitionEnd,
  ...otherProps
}: TransitionPropsType) {
  const validFillDelay = delay > 0 ? fillDelay : false;
  const [mounted, setMounted] = React.useState<boolean>(
    delay === 0 || validFillDelay ? active : false
  );

  React.useLayoutEffect(() => {
    if (active) {
      const mountBaseComponent = () => setMounted(true);

      if (delay === 0 || validFillDelay) {
        mountBaseComponent();
      } else {
        const timeoutId = setTimeout(mountBaseComponent, delay);

        return () => clearTimeout(timeoutId);
      }
    }
  }, [active, delay, validFillDelay]);

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
      onTransitionEnd={handleTransitionEnd}
      active={active}
      delay={delay}
      fillDelay={validFillDelay}
    />
  ) : null;
}
