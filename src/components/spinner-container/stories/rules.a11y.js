const rules = [
  {
    pattern:
      '<b>Should</b> have an accessible information about the status that is annouced.',
    comment:
      "Use <code>ariaStatusLabel</code> to set custom information, defaults to <code>{loaded: 'content loaded.', loading: 'content is loading'}</code>",
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern: '<b>Should</b> have role <code>status</code>.',
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern:
      '<b>Should</b> have <code>aria-busy="true"</code> for the loading content.',
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern: '<b>Should</b> have 3:1 contrast ratio against the background.',
    comment:
      'For white background use: <code>black</code>, <code>gray-70</code>, <code>gray-50</code>, <code>red-50</code>, <code>indigo-50</code>, against black: <code>white</code>, <code>gray-50</code>, <code>red-50</code>, <code>red-40</code>, <code>blue-40</code>, <code>yellow-40</code>.',
    status: 'DONE',
    tests: 'N/A',
  },
  {
    pattern: '<b>Should</b> respect Windows High Contrast theme.',
    status: 'DONE',
    tests: 'N/A',
  },
];

export default rules;
