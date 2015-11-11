import { availableTypes as types } from './index';

describe('mint-button-primary', () => {
  it('should have defaultTypes available', () => {
    expect(types).toBeDefined();
  });

  it('should have dark type available', () => {
    expect(types.dark).toBeDefined();
  });

  it('should have alt type available', () => {
    expect(types.alt).toBeDefined();
  });
});
