const rules = [
  {
    pattern: '<b>Should</b> be ordered or unordered.',
    comment: `By default <code>List</code> uses <code>ul</code> tag. To use ordered list 
      (and <code>ol</code> tag), set <code>ordered</code> prop to <code>true</code>.`,
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern:
      '<b>Should</b> have only children with <code>listitem</code> role.',
    comment: '<code>ListItem</code> component can be used.',
    status: 'DONE',
    tests: 'N/A',
  },
  {
    pattern: '<b>Can</b> have an accessible name.',
    comment: `Can be named by: <ul>
      <li>a label specified by <code>aria-label</code> prop</li>
      <li>a value (<code>IDREF</code>) set for the <code>aria-labelledby</code> 
      prop that refers to a visible element.</li></ul>`,
    status: 'DONE',
    tests: 'DONE',
  },
];
export const listItemRules = [
  {
    pattern:
      '<b>Should</b> be a descendant of element with <code>list</code> role.',
    comment: '<code>List</code> can be used.',
    status: 'DONE',
    tests: 'N/A',
  },
];
export const listItemIconRules = [
  {
    pattern: '<b>Can</b> be hidden from the accessibility tree.',
    comment:
      'If this does not provide any information, it can be hidden with the <code>aria-hidden</code> attribute.',
    status: 'DONE',
    tests: 'N/A',
  },
];
export default rules;
