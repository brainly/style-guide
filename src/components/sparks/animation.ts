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
    'initial' | 'entry' | 'paused' | 'exit' | 'finished'
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

    switch (phase) {
      case 'entry': {
        refs.current.forEach(ref => {
          const {index, overrides = {}} = parameters.current.get(ref);
          let entry = entryAnimations.current.get(ref) ?? [];

          ref.getAnimations().forEach(animation => animation.cancel());

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

            anim.id = `entry ${i}`;

            console.count(`created ${anim.id}`);
            console.log(`replace state ${anim.id}`, anim.replaceState);

            anim.onremove = () => console.count(`removed ${anim.id}`);

            entry.push(anim);
          });

          entryAnimations.current.set(ref, entry);
        });

        break;
      }

      case 'exit': {
        refs.current.forEach(ref => {
          const {index, overrides = {}} = parameters.current.get(ref);
          let exit = exitAnimations.current.get(ref) ?? [];

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

            console.count(`created ${anim.id}`);

            anim.onremove = () => console.count(`removed ${anim.id}`);

            exit.push(anim);
          });

          exitAnimations.current.set(ref, exit);
        });

        // detect when all exit animations on all elements finish
        const allExit = [...refs.current].flatMap(
          ref => exitAnimations.current.get(ref) ?? []
        );

        Promise.allSettled(allExit.map(animation => animation.finished)).then(
          () => {
            refs.current.forEach(ref => {
              ref.getAnimations().forEach(animation => animation.cancel());
              entryAnimations.current.set(ref, []);
              exitAnimations.current.set(ref, []);
            });
            setPhase('finished');
          }
        );

        console.log(allExit);

        break;
      }

      default:
        break;
    }
  }, [phase]);

  return {register, phase, setPhase};
}
