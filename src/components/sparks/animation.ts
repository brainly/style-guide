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
  entry: AnimationWithOptions[];
  exit: AnimationWithOptions[];
}

export interface RegisterOptions {
  index?: number;
  animation?: Record<string, Partial<AnimationWithOptions>>;
}

export function useAnimation(config: AnimationConfig) {
  const refs = React.useRef(new Set<any>());
  const parameters = React.useRef(new WeakMap());
  const animations = React.useRef(new WeakMap());
  const [phase, setPhase] = React.useState<'entry' | 'exit'>('entry');
  const configRef = React.useRef(config);

  // we only need the most updated value. Equivalent of using useEffectEvent
  configRef.current = config;

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
      const {index, animation = {}} = parameters.current.get(ref);

      switch (phase) {
        case 'entry': {
          let anims = animations.current.get(ref);

          anims?.forEach(animation => animation.cancel());
          anims = [];

          configRef.current.entry?.forEach(keyframesConfig => {
            let {id, keyframes, options = {}} = keyframesConfig;

            const override = animation[id];

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

            anims.push(anim);
          });

          animations.current.set(ref, anims);

          break;
        }

        case 'exit': {
          const anims = animations.current.get(ref);

          configRef.current.exit?.forEach(keyframesConfig => {
            let {id, keyframes, options = {}} = keyframesConfig;

            const override = animation[id];

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

            anims.push(anim);
          });

          break;
        }

        default:
          break;
      }
    });
  }, [phase]);

  return {register, phase, setPhase};
}
