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
  const [phase, setPhase] = React.useState<
    'initial' | 'entry' | 'paused' | 'exit' | 'finish'
  >('initial');
  const configRef = React.useRef(config);

  // we only need the most updated value. Equivalent of using useEffectEvent

  React.useEffect(() => {
    configRef.current = config;
  }, [config]);

  const register = React.useCallback((options?: RegisterOptions) => {
    return {
      ref: (el: HTMLDivElement | null) => {
        if (el) {
          // eslint-disable-next-line no-console
          console.log('register');
          options ??= {index: refs.current.size};
          parameters.current.set(el, options);
          refs.current.add(el);
        }
      },
    };
  }, []);

  React.useEffect(() => {
    const elements = refs.current;

    return () => {
      // TODO(coderitual): do proper cleanup and check for memory leaks
      elements.clear();
    };
  }, []);

  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(`Play animation %c${phase}`, 'background: #000; color: #fff');

    refs.current.forEach(ref => {
      const {index, overrides = {}} = parameters.current.get(ref);
      let entry = entryAnimations.current.get(ref) ?? [];
      let exit = exitAnimations.current.get(ref) ?? [];

      switch (phase) {
        case 'entry': {
          entry?.forEach(animation => animation.cancel());
          exit?.forEach(animation => animation.cancel());
          entry = [];
          exit = [];

          configRef.current.entry?.forEach((keyframesConfig, i) => {
            let {id, keyframes, options = {}} = keyframesConfig;

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

            a.anim.id = `entry ${i}`;

            console.count('created');

            anim.onremove = () => console.count('removed');

            entry.push(anim);
          });

          entryAnimations.current.set(ref, entry);
          break;
        }

        case 'exit': {
          configRef.current.exit?.forEach((keyframesConfig, i) => {
            let {id, keyframes, options = {}} = keyframesConfig;

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

            console.count('created');

            anim.onremove = () => console.count('removed');
            anim.onfinish = () => anim.cancel();

            exit.push(anim);
          });

          exitAnimations.current.set(ref, exit);
          break;
        }

        default:
          break;
      }
    });
  }, [phase]);

  return {register, phase, setPhase};
}
