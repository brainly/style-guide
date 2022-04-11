import {parsePropertyObject} from './propertyObject';

describe('parsePropertyObject()', () => {
  it('parses easing and duration on parent level', () => {
    const parsed = parsePropertyObject({
      easing: 'regular',
      duration: 1000,
      transform: {translateY: 24},
      opacity: 0.5,
    });

    expect(parsed).toEqual({
      className: '',
      transform: {
        easing: 'cubic-bezier(0.35, 0, 0.1, 1)',
        duration: '1000ms',
        origin: 'center',
        translateX: '0px',
        translateY: '24px',
        scaleX: '1',
        scaleY: '1',
        value: 'translate3d(0px, 24px, 0px) scale3d(1, 1, 1)',
      },
      width: {
        duration: '1000ms',
        easing: 'cubic-bezier(0.35, 0, 0.1, 1)',
        value: 'auto',
      },
      height: {
        duration: '1000ms',
        easing: 'cubic-bezier(0.35, 0, 0.1, 1)',
        value: 'auto',
      },
      opacity: {
        easing: 'cubic-bezier(0.35, 0, 0.1, 1)',
        duration: '1000ms',
        value: '0.5',
      },
    });
  });

  it('parses easing and duration of each property separately', () => {
    const parsed = parsePropertyObject({
      transform: {
        translateY: 24,
        easing: 'entry',
        duration: 100,
      },
      opacity: {
        value: 0.5,
        easing: 'linear',
        duration: 200,
      },
    });

    expect(parsed).toEqual({
      className: '',
      transform: {
        easing: 'cubic-bezier(0.1, 0, 0, 1)',
        duration: '100ms',
        origin: 'center',
        translateX: '0px',
        translateY: '24px',
        scaleX: '1',
        scaleY: '1',
        value: 'translate3d(0px, 24px, 0px) scale3d(1, 1, 1)',
      },
      width: {
        duration: '0ms',
        easing: 'cubic-bezier(0.35, 0, 0.1, 1)',
        value: 'auto',
      },
      height: {
        duration: '0ms',
        easing: 'cubic-bezier(0.35, 0, 0.1, 1)',
        value: 'auto',
      },
      opacity: {
        easing: 'linear',
        duration: '200ms',
        value: '0.5',
      },
    });
  });

  it('overrides the common scale with a specific axis', () => {
    const parsed = parsePropertyObject({
      transform: {
        scale: 1.5,
        scaleX: 2,
      },
    });

    expect(parsed).toEqual({
      className: '',
      transform: {
        easing: 'cubic-bezier(0.35, 0, 0.1, 1)',
        duration: '0ms',
        origin: 'center',
        translateX: '0px',
        translateY: '0px',
        scaleX: '2',
        scaleY: '1.5',
        value: 'translate3d(0px, 0px, 0px) scale3d(2, 1.5, 1)',
      },
      width: {
        duration: '0ms',
        easing: 'cubic-bezier(0.35, 0, 0.1, 1)',
        value: 'auto',
      },
      height: {
        duration: '0ms',
        easing: 'cubic-bezier(0.35, 0, 0.1, 1)',
        value: 'auto',
      },
      opacity: {
        easing: 'cubic-bezier(0.35, 0, 0.1, 1)',
        duration: '0ms',
        value: '1',
      },
    });
  });
});
