const rules = [
  {
    pattern:
      '<b>Should</b> have <code>link</code> or <code>button</code> role set for interactive element.',
    comment:
      'When <code>onClick</code> is provided, role <code>button</code> is set, in other cases <code>link</code> is used.',
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern: '<b>Should</b> announce an uploading status.',
    comment: 'Status has <code>aria-live="polite"</code>.',
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern: '<b>Should</b> have a thumbnail hidden from accessibility tree.',
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern: '<b>Should</b> be focusable by tabbing.',
    status: 'DONE',
    tests: 'N/A',
  },
  {
    pattern: '<b>Should</b> have distinctive focus style.',
    comment: 'Browser focus style is used.',
    status: 'DONE',
    tests: 'N/A',
  },
  {
    pattern: '<b>Can</b> have a close button with an accessible name.',
    comment: "Name defaults to <code>'Close'</code>",
    status: 'DONE',
    tests: 'DONE',
  },
];
