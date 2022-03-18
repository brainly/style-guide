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
        scale: '1',
        translateX: '0px',
        translateY: '24px',
        value: 'translate3d(0px, 24px, 0px) scale3d(1, 1, 1)',
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
        scale: '1',
        translateX: '0px',
        translateY: '24px',
        value: 'translate3d(0px, 24px, 0px) scale3d(1, 1, 1)',
      },
      opacity: {
        easing: 'linear',
        duration: '200ms',
        value: '0.5',
      },
    });
  });
});
