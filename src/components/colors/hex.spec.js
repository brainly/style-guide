import colors from './colors';
import hex from './hex';

test('should export colors as a hex values', () => {
  expect(hex.black).toBe(`#${colors.fullColorPalette[0].hex}`);
  expect(hex['text-white']).toBe(`#${colors.text[0].hex}`);
});
