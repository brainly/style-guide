const rules = [
  {
    pattern: '<b>Should</b> have a role <code>radio</code>.',
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern: '<b>Should</b> be focusable and tabable.',
    comment:
      'Tab moves focus to the checked <code>Radio</code> button in a <code>RadioGroup <code>.',
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern: '<b>Should</b> have an accessible name.',
    comment: `Can be named by: <ul>
      <li>a label specified by <code>aria-label</code> prop</li>
      <li>a value (<code>IDREF</code>) set for the <code>aria-labelledby</code> prop that refers to an element</li>
      <li>can be named by adding children (children should be purely presentational and 
        do not include interactive elements).</li></ul>`,
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
    comment:
      '<code>dark</code> against white: 21:1, <code>light</code> against black: 20.9:1.',
    status: 'DONE',
    tests: 'N/A',
  },
  {
    pattern:
      '<b>Should</b> have a color indicator with 3:1 contrast ratio against the background.',
    comment:
      '<code>dark</code> against white: 21:1, <code>light</code> against black: 20.9:1.',
    status: 'DONE',
    tests: 'N/A',
  },
  {
    pattern: '<b>Should</b> respect Windows High Contrast mode.',
    status: 'DONE',
    tests: 'N/A',
  },
  {
    pattern:
      '<b>Should</b> have descriptive information about required and invalid state.',
    comment:
      'Invalid state is indicated by color change. Both states can be described using <code>description</code> prop.',
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern: '<b>Should</b> respect prefers reduce motion settings.',
    status: 'TO DO',
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
    pattern:
      '<b>Should</b> be nested in a <code>radiogroup</code> or be grouped by using <code>name</code> attribute.',
    comment: '<code>RadioGroup</code> component can be used.',
    status: 'DONE',
    tests: 'N/A',
  },
  {
    pattern: '<b>Can</b> have a clickable label.',
    comment:
      'Default clickable area of radio is 32x32px, children of the Radio are also clickable.',
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

export const radioGroupRules = [
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
export default rules;
