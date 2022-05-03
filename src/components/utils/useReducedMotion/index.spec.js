import useReducedMotion from './index';
import {act, renderHook} from '@testing-library/react-hooks';

import MatchMedia from './__mocks__/mq';

const MOTION_MQ = {
  reduced: '(prefers-reduced-motion: reduce)',
  default: '(prefers-reduced-motion: default)',
};

let matchMedia;

describe('useReducedMotion', () => {
  beforeAll(() => {
    matchMedia = new MatchMedia();
  });

  afterEach(() => {
    matchMedia.destroy();
  });

  it('returns true if user preference is to reduce motion', () => {
    matchMedia.useMediaQuery(MOTION_MQ.reduced);

    const {result} = renderHook(() => useReducedMotion());

    expect(result.current).toBe(true);
  });

  it('returns true if user preference is not to reduce motion', () => {
    matchMedia.useMediaQuery(MOTION_MQ.default);

    const {result} = renderHook(() => useReducedMotion());

    expect(result.current).toBe(false);
  });

  fit('returns true if user preference is not to reduce motion', () => {
    matchMedia.useMediaQuery(MOTION_MQ.default);

    const {result} = renderHook(() => useReducedMotion());

    expect(result.current).toBe(false);

    act(() => matchMedia.useMediaQuery(MOTION_MQ.reduced));

    expect(result.current).toBe(true);

    act(() => matchMedia.useMediaQuery(MOTION_MQ.default));
  });
});
