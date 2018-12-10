import colors from './colors';
import hex from './hex';

test('should export colors as a hex values', () => {
  expect(hex.black).toBe(`#${colors.primary[0].hex}`);
  expect(hex.lavenderPrimaryDark).toBe(`#${colors.secondary[0].hex}`);
});
