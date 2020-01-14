import colors from './colors';
import hex from './hex';
test('should export colors as a hex values', function () {
  expect(hex.black).toBe("#".concat(colors.primary[0].hex));
  expect(hex.lavenderPrimaryDark).toBe("#".concat(colors.secondary[0].hex));
});