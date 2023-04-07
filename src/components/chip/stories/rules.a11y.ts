const rules = [
  {
    pattern: '<b>Should</b> have an accessible name.',
    comment: `Can be named by children (children should be purely presentational and 
        do not include interactive elements).`,
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern: '<b>Should</b> be focusable and tabable.',
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern: '<b>Should</b> have visible checked / unchecked / disabled style.',
    status: 'DONE',
    tests: 'N/A',
  },
  {
    pattern: '<b>Should</b> have visible focus and hover style.',
    status: 'DONE',
    tests: 'N/A',
  },
  {
    pattern:
      '<b>Should</b> have a label with 4.5:1 contrast ratio against the background.',
    comment: '<code>black</code> against white: 21:1.',
    status: 'DONE',
    tests: 'N/A',
  },
  {
    pattern:
      '<b>Should</b> have a selected indicator with 3:1 contrast ratio against the background.',
    comment: '<code>black</code> against white: 21:1',
    status: 'DONE',
    tests: 'N/A',
  },
  {
    pattern: '<b>Should</b> respect Windows High Contrast mode.',
    status: 'DONE',
    tests: 'N/A',
  },
  {
    pattern: '<b>Should</b> respect prefers reduce motion settings.',
    status: 'DONE',
    tests: 'N/A',
  },
  {
    pattern:
      '<b>Should</b> be checked by pressing <code>Space</code> and mouse click.',
    comment:
      "If the <code>Radio</code> with focus is unchecked, it's state will be changed to checked.",
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern: '<b>Should</b> be focused and checked by pressing arrows.',
    status: 'DONE',
    tests: 'N/A',
  },
  {
    pattern: '<b>Can</b> have an accessible description.',
    comment:
      'Can be described by setting a value for <code>description</code> prop.',
    status: 'DONE',
    tests: 'DONE',
  },
];

export const singleSelectRules = [
  {
    pattern: '<b>Should</b> have a role <code>radio</code>.',
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern:
      '<b>Should</b> be nested in a <code>radiogroup</code> or be grouped by using <code>name</code> attribute.',
    comment: '<code>ChipGroup</code> component can be used.',
    status: 'DONE',
    tests: 'N/A',
  },
];

export const multiSelectRules = [
  {
    pattern: '<b>Should</b> have a role <code>checkbox</code>.',
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern:
      '<b>Can</b> be nested in a <code>group</code> or be grouped by using <code>name</code> attribute.',
    comment: '<code>ChipGroup</code> component can be used.',
    status: 'DONE',
    tests: 'N/A',
  },
];

export const groupRules = [
  {
    pattern: '<b>Can</b> have an accessible name.',
    comment: `Can be named by: <ul>
      <li>a label specified by <code>aria-label</code> prop</li>
      <li>a value (<code>IDREF</code>) set for the <code>aria-labelledby</code> 
      prop that refers to an element.</li></ul>`,
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern: '<b>Can</b> have an accessible description.',
    comment:
      'Can be described by setting a value for <code>aria-describedby</code> prop.',
    status: 'DONE',
    tests: 'DONE',
  },
];

export const singleSelectGroupRules = [
  {
    pattern: '<b>Should</b> have a role <code>radiogroup</code>.',
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern: '<b>Should</b> have only one checked chip at a time.',
    status: 'DONE',
    tests: 'DONE',
  },
];

export const multiSelectGroupRules = [
  {
    pattern: '<b>Should</b> have a role <code>group</code>.',
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern: '<b>Can</b> have multiple checked chips at a time.',
    status: 'DONE',
    tests: 'DONE',
  },
];
export default rules;
