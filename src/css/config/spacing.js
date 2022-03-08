module.exports = {
  px: '1px',
  0: '0px',
  0.5: '0.125rem',
  1: '0.25rem',
  1.5: '0.375rem',
  2: '0.5rem',
  2.5: '0.625rem',
  3: '0.75rem',
  3.5: '0.875rem',

  // generating spacing values from 4-100
  ...Array.from({length: 100 - 4}).reduce((acc, next, _index) => {
    const index = _index + 4;

    acc[index] = `${index / 4}rem`;
    return acc;
  }, []),

  xxs: '4px',
  xs: '8px',
  s: '16px',
  m: '24px',
  l: '40px',
  xl: '64px',
  xxl: '104px',
  xxxl: '168px',
  xxxxl: '272px',
};
