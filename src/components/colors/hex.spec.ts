// @ts-ignore TS7016
import colors from './colors';
import hex from './hex';

test('should export colors as a hex values', () => {
  expect(hex.black).toBe(`#${colors.fullColorPalette[0].hex}`);
  expect(hex['text-black']).toBe(`#${colors.text[0].hex}`);
});
