import {createEffect} from './predefinedEffects';

describe('createEffect()', () => {
  it('returns a predefined effect', () => {
    const effect = createEffect({
      type: 'scaleFade',
    });
    expect(effect).toEqual({
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
    });
  });
  it('returns a deeply customized, predefined effect', () => {
    const effect = createEffect({
      type: 'scaleFade',
      animate: {
        duration: 'quick2',
      },
      exit: {
        transform: {
          scale: 1,
        },
      },
    });
    expect(effect).toEqual({
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
        duration: 'quick2',
        easing: 'entry',
      },
      exit: {
        opacity: 0,
        transform: {
          scale: 1,
        },
        duration: 'moderate1',
        easing: 'exit',
      },
    });
  });
});
