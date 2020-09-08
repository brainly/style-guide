import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  colorPrimary: '#1d9ff5',
  colorSecondary: '#1d9ff5',

  // UI
  // appBg: 'white',
  // appContentBg: 'white',
  // appBorderColor: 'grey',
  // appBorderRadius: 8,

  // Typography
  fontBase: '"ProximaNova", "Helvetica", "Arial", sans-serif',
  // fontCode: 'monospace',

  // Text colors
  // textColor: 'black',
  // textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  // barTextColor: 'silver',
  barSelectedColor: '#1d9ff5',
  // barBg: 'pink',

  // // Form colors
  // inputBg: 'pink',
  // inputBorder: 'silver',
  // inputTextColor: 'black',
  // inputBorderRadius: 4,

  brandTitle: 'Brainly',
  brandUrl: '/',
  brandImage: 'brainly-logo.png',
});
