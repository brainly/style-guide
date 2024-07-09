import useReducedMotion from './useReducedMotion';
import { renderHook} from '@testing-library/react';
import MatchMedia from './__mocks__/mq';
import { act } from 'react';

const MOTION_MQ = {
  reduced: '(prefers-reduced-motion: reduce)',
  default: '(prefers-reduced-motion: default)',
};
let matchMedia;

describe('useReducedMotion', () => {
  afterEach(() => {
    matchMedia.destroy();
  });
  it('returns true if user preference is to reduce motion', () => {
    matchMedia = new MatchMedia(MOTION_MQ.reduced);
    const {result} = renderHook(() => useReducedMotion());

    expect(result.current).toBe(true);
  });
  it('returns true if user preference is not to reduce motion', () => {
    matchMedia = new MatchMedia(MOTION_MQ.default);
    const {result} = renderHook(() => useReducedMotion());

    expect(result.current).toBe(false);
  });
  it('change result accordingly when user changes motion settings', () => {
    matchMedia = new MatchMedia(MOTION_MQ.default);
    const {result} = renderHook(() => useReducedMotion());

    expect(result.current).toBe(false);
    act(() => matchMedia.updateMediaQuery(MOTION_MQ.reduced));
    expect(result.current).toBe(true);
    act(() => matchMedia.updateMediaQuery(MOTION_MQ.default));
    expect(result.current).toBe(false);
    act(() => matchMedia.updateMediaQuery(MOTION_MQ.reduced));
    expect(result.current).toBe(true);
  });
});
