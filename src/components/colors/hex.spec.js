import colors from './colors';
import hex from './hex';

test('should export colors as a hex values', () => {
  expect(hex.black).toBe(`#${colors.core[0].hex}`);
  expect(hex.lavenderPrimaryDark).toBe(`#${colors.additional[0].hex}`);
});
