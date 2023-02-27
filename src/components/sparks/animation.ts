/* eslint-disable no-console */
import * as React from 'react';

interface KeyframeAnimationOptionsEx
  extends Omit<KeyframeAnimationOptions, 'delay' | 'duration'> {
  delay?: number | ((index: number) => number);
  duration?: number | string | ((index: number) => number | string);
}

export interface AnimationWithOptions {
  id?: string;
  keyframes: PropertyIndexedKeyframes | Keyframe[];
  options?: KeyframeAnimationOptionsEx;
}

export interface AnimationConfig {
  entry?: AnimationWithOptions[];
  exit?: AnimationWithOptions[];
}

export interface RegisterOptions {
  index?: number;
  animation?: Record<string, Partial<AnimationWithOptions>>;
}

export function useAnimation(config: AnimationConfig) {
  const refs = React.useRef(new Set<any>());
  const parameters = React.useRef(new WeakMap());
  const entryAnimations = React.useRef(new WeakMap());
  const exitAnimations = React.useRef(new WeakMap());
  const isAnimationSupported = React.useRef(true);
  const [phase, setPhase] = React.useState<
    'initial' | 'entry' | 'paused' | 'exit' | 'finished'
  >('initial');
  const configRef = React.useRef(config);

  // We only need the most updated value. Equivalent of using useEffectEvent.
  React.useEffect(() => {
    configRef.current = config;
  }, [config]);

  const register = React.useCallback(
    (options: RegisterOptions = {index: refs.current.size}) => {
      return {
        ref: (el: HTMLDivElement | null) => {
          if (el) {
            parameters.current.set(el, options);
            refs.current.add(el);
          }
        },
      };
    },
    []
  );

  React.useEffect(() => {
    const elements = refs.current;

    // Check if animation is supported on dom elements in the browser.
    isAnimationSupported.current = Object.hasOwnProperty.call(
      Element.prototype,
      'animate'
    );

    return () => {
      if (isAnimationSupported.current) {
        // Remove all outstanding animations and cleanup refs
        const allSnapshot = [...elements].flatMap(ref => ref.getAnimations());

        allSnapshot.forEach(animation => animation.cancel());
      }

      elements.clear();
    };
  }, []);

  React.useEffect(() => {
    if (!isAnimationSupported.current) {
      console.warn('Web Animation API is not supported on this browser');
      return;
    }

    switch (phase) {
      case 'entry': {
        refs.current.forEach(ref => {
          const {index, overrides = {}} = parameters.current.get(ref);
          const entry = entryAnimations.current.get(ref) ?? [];

          ref.getAnimations().forEach(animation => animation.cancel());

          configRef.current.entry?.forEach((keyframesConfig, i) => {
            const id = keyframesConfig.id;
            let {keyframes, options = {}} = keyframesConfig;

            const override = overrides[id];

            if (override) {
              keyframes = override?.keyframes || keyframes;
              options = {...options, ...override?.options};
            }

            const animationOptions = {
              ...options,
              delay:
                typeof options.delay === 'function'
                  ? options.delay(index)
                  : options.delay,
              duration:
                typeof options.duration === 'function'
                  ? options.duration(index)
                  : options.duration,
            };

            const anim = ref.animate(keyframes, animationOptions);

            anim.id = `entry ${i}`;

            entry.push(anim);
          });

          entryAnimations.current.set(ref, entry);
        });

        break;
      }

      case 'exit': {
        refs.current.forEach(ref => {
          const {index, overrides = {}} = parameters.current.get(ref);
          const exit = exitAnimations.current.get(ref) ?? [];

          configRef.current.exit?.forEach((keyframesConfig, i) => {
            const id = keyframesConfig.id;
            let {keyframes, options = {}} = keyframesConfig;

            const override = overrides[id];

            if (override) {
              keyframes = override?.keyframes || keyframes;
              options = {...options, ...override?.options};
            }

            const animationOptions = {
              ...options,
              delay:
                typeof options.delay === 'function'
                  ? options.delay(index)
                  : options.delay,
              duration:
                typeof options.duration === 'function'
                  ? options.duration(index)
                  : options.duration,
            };

            const anim = ref.animate(keyframes, animationOptions);

            anim.id = `exit ${i}`;

            exit.push(anim);
          });

          exitAnimations.current.set(ref, exit);
        });

        // Snapshot all animations  from the whole run that need to be removed.
        const allSnapshot = [...refs.current].flatMap(ref =>
          ref.getAnimations()
        );

        // Detect when all exit animations on all registered elements finish
        const exitSnapshot = [...refs.current].flatMap(ref =>
          exitAnimations.current.get(ref)
        );

        Promise.allSettled(
          exitSnapshot.map(animation => animation.finished)
        ).then(() => {
          allSnapshot.forEach(animation => animation.cancel());
          refs.current.forEach(ref => {
            entryAnimations.current.set(ref, []);
            exitAnimations.current.set(ref, []);
          });

          setPhase(phase => (phase === 'exit' ? 'finished' : phase));
        });

        break;
      }

      default:
        break;
    }
  }, [phase]);

  return {register, phase, setPhase};
}
