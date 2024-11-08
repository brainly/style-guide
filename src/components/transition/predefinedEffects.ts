import type {TransitionEffectType} from './Transition';

export type PredefinedEffectType =
  | 'fade'
  | 'scaleFade'
  | 'slideUpFade'
  | 'slideDownFade'
  | 'slideLeftFade'
  | 'slideRightFade';

export const predefinedEffects: Record<
  PredefinedEffectType,
  () => TransitionEffectType
> = {
  fade: () => ({
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      duration: 'quick2',
      easing: 'linear',
    },
    exit: {
      opacity: 0,
      duration: 'quick2',
      easing: 'linear',
    },
  }),
  scaleFade: () => ({
    initial: {
      opacity: 0,
      transform: {
        scale: 0.85,
      },
    },
    animate: {
      opacity: 1,
      transform: {
        scale: 1,
      },
      duration: 'moderate2',
      easing: 'entry',
    },
    exit: {
      opacity: 0,
      transform: {
        scale: 0.85,
      },
      duration: 'moderate1',
      easing: 'exit',
    },
  }),
  slideUpFade: () => ({
    initial: {
      opacity: 0,
      transform: {
        translateY: 'm',
      },
    },
    animate: {
      opacity: 1,
      transform: {
        translateY: 0,
      },
      duration: 'moderate1',
      easing: 'entry',
    },
    exit: {
      opacity: 0,
      transform: {
        translateY: 'm',
      },
      duration: 'moderate1',
      easing: 'exit',
    },
  }),
  slideDownFade: () => ({
    initial: {
      opacity: 0,
      transform: {
        translateY: '-m',
      },
    },
    animate: {
      opacity: 1,
      transform: {
        translateY: 0,
      },
      duration: 'moderate1',
      easing: 'entry',
    },
    exit: {
      opacity: 0,
      transform: {
        translateY: '-m',
      },
      duration: 'moderate1',
      easing: 'exit',
    },
  }),
  slideLeftFade: () => ({
    initial: {
      opacity: 0,
      transform: {
        translateX: 'm',
      },
    },
    animate: {
      opacity: 1,
      transform: {
        translateX: 0,
      },
      duration: 'moderate2',
      easing: 'entry',
    },
    exit: {
      opacity: 0,
      transform: {
        translateX: 'm',
      },
      duration: 'moderate1',
      easing: 'exit',
    },
  }),
  slideRightFade: () => ({
    initial: {
      opacity: 0,
      transform: {
        translateX: '-m',
      },
    },
    animate: {
      opacity: 1,
      transform: {
        translateX: 0,
      },
      duration: 'moderate2',
      easing: 'entry',
    },
    exit: {
      opacity: 0,
      transform: {
        translateX: '-m',
      },
      duration: 'moderate1',
      easing: 'exit',
    },
  }),
};

export function createEffect({
  type,
  ...customEffectProps
}: Readonly<
  TransitionEffectType & {
    type?: PredefinedEffectType;
  }
>): TransitionEffectType {
  if (type && predefinedEffects[type] !== undefined) {
    return mergeDeepEffects(predefinedEffects[type](), customEffectProps);
  }

  return customEffectProps;
}

/**
 * It expects effect objects not containing arrays,
 * which will probably never happen in the future.
 */
function mergeDeepEffects<T extends {}>(target: T, source: T): T {
  Object.keys(source).forEach(key => {
    // @ts-ignore TS7053
    if (typeof target[key] === 'object') {
      // @ts-ignore TS7053
      target[key] = mergeDeepEffects(target[key], source[key]);
    } else {
      // @ts-ignore TS7053
      target[key] = source[key];
    }
  });
  return target;
}
