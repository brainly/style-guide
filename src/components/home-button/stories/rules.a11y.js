const rules = [
  {
    pattern: '<b>Should</b> have an accessible name.',
    comment:
      'Can be named by setting a value for <code>aria-label</code> prop (defaults to <code>"{logo type} home"</code>).',
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern: '<b>Should</b> have distinctive focus style.',
    comment: 'Browser focus style is used.',
    status: 'DONE',
    tests: 'N/A',
  },
  {
    pattern: '<b>Can</b> have an accessible alt text.',
    status: 'DONE',
    tests: 'DONE',
  },
];

export default rules;
