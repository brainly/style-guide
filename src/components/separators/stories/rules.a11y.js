const rules = [
  {
    pattern: '<b>Should</b> have role <code>separator</code>.',
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern: '<b>Should</b> have proper orientation.',
    comment:
      '<code>aria-orientation</code> defaults to <code>horizontal</code>.',
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern: '<b>Should</b> have 3:1 contrast ratio against the background.',
    comment:
      'Selected <code>color</code> should relate to the background color.',
    status: 'DONE',
    tests: 'N/A',
  },
];

export default rules;
