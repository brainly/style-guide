import { availableTypes as types } from './index';

describe('mint-button-primary', () => {
  it('should have defaultTypes available', () => {
    expect(types).to.be.a('object');
  });

  it('should have dark type available', () => {
    expect(types.dark).not.to.be.undefined;
  });

  it('should have alt type available', () => {
    expect(types.alt).not.to.be.undefined;
  });
});
