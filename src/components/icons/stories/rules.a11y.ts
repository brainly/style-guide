const rules = [
  {
    pattern: '<b>Should</b> have an accessible name.',
    comment:
      'Can be named by setting a value for <code>title</code> prop (defaults to icon type).',
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern: '<b>Should</b> have role <code>img</code>.',
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern: '<b>Should</b> hide SVG paths from accessibility tree.',
    status: 'DONE',
    tests: 'N/A',
  },
  {
    pattern: '<b>Should</b> respect Windows High Contrast theme.',
    status: 'DONE',
    tests: 'N/A',
  },
  {
    pattern: '<b>Can</b> have an accessible description.',
    comment:
      'Can be named by setting a value for <code>description</code> prop.',
    status: 'DONE',
    tests: 'DONE',
  },
];
export default rules;
