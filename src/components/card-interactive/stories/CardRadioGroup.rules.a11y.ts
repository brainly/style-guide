export const rules = [
  {
    pattern: '<b>Should</b> have a role <code>radiogroup</code>.',
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern: '<b>Should</b> have only one checked radio at a time.',
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern: '<b>Should</b> have descriptive information about invalid state.',
    comment: 'State can be described using <code>errorMessage</code> prop.',
    status: 'DONE',
    tests: 'TO DO',
  },
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
    pattern: '<b>Can</b> provide information about active descendant.',
    comment: `The <code>aria-activedescendant</code> attribute identifies the checked <code>Radio</code> 
    within <code>Radiogroup</code> by referencing the id value of the radio button that is active.`,
    status: 'TO DO',
    tests: 'TO DO',
  },
  {
    pattern: '<b>Can</b> have an accessible description.',
    comment:
      'Can be described by setting a value for <code>aria-describedby</code> prop.',
    status: 'DONE',
    tests: 'TO DO',
  },
];

export const radioItemRules = [
  {
    pattern: '<b>Should</b> have a role <code>radio</code>.',
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern: '<b>Should</b> be focusable.',
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern: '<b>Should</b> have an accessible name.',
    comment: `Can be named by: <ul>
      <li>a label specified by <code>aria-label</code> prop</li>
      <li>a value (<code>IDREF</code>) set for the <code>aria-labelledby</code> prop that refers to an element</li>
      <li>can be named by adding children.</li></ul>`,
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
    comment: 'Selected <code>color</code> should relate to the label color.',
    status: 'DONE',
    tests: 'N/A',
  },
  {
    pattern:
      '<b>Should</b> have a color indicator with 3:1 contrast ratio against the background.',
    comment:
      '<code>dark</code> against white: 21:1, <code>light</code> against black: 13.48:1.',
    status: 'DONE',
    tests: 'N/A',
  },
  {
    pattern: '<b>Should</b> respect Windows High Contrast mode.',
    status: 'TO DO',
    tests: 'N/A',
  },
  {
    pattern:
      '<b>Should</b> have descriptive information about required and invalid state.',
    comment:
      'Invalid state is indicated by color change. Both states can be described using aria-describedby prop.',
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern: '<b>Should</b> respect prefers reduce motion settings.',
    status: 'TO DO',
    tests: 'N/A',
  },
  {
    pattern: '<b>Should</b> be focused and checked by pressing arrows.',
    status: 'DONE',
    tests: 'N/A',
  },
  {
    pattern: '<b>Should</b> be nested in a <code>radiogroup</code> ',
    comment: '<code>CardRadioGroup</code> component is required.',
    status: 'DONE',
    tests: 'N/A',
  },
  {
    pattern: '<b>Can</b> have a clickable label.',
    comment: 'The whole area of card is wrapped with clickable label.',
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern: '<b>Can</b> have an accessible description.',
    comment:
      'Can be described by setting a value for <code>description</code> prop.',
    status: 'DONE',
    tests: 'DONE',
  },
];
