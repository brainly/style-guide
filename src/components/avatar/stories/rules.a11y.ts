const rules = [
  {
    pattern:
      '<b>Should</b> be removed from accessibility tree if it does not have an accessible name set.',
    comment: '<code>alt</code> prop defaults to <code>""</code>.',
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern: '<b>Should</b> be unique per user.',
    status: 'TO DO',
    tests: 'TO DO',
  },
  {
    pattern: '<b>Should</b> have role <code>img</code>.',
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern: '<b>Can</b> have an accessible name.',
    comment: 'Can be named by setting a value for <code>alt</code> prop.',
    status: 'DONE',
    tests: 'DONE',
  },
];

export const linkRules = [
  {
    pattern: '<b>Should</b> have an accessible name.',
    comment:
      'Link should be named by setting a value for <code>ariaLinkLabel</code> prop.',
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern: '<b>Should</b> be focusable and tabable.',
    status: 'DONE',
    tests: 'DONE',
  },
];
export default rules;
