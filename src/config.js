// @flow strict

export const LOGOS_BASE_URL =
  process.env.STORYBOOK_ENV === 'dev' ||
  process.env.STORYBOOK_ENV === 'chromatic'
    ? 'images/logos/'
    : 'https://styleguide.brainly.com/images/logos/';
