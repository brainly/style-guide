const rules = [
  {
    pattern: '<b>Should</b> have one of the roles: listbox, dialog.',
    description:
      'Can by set by <code>role</code< props, defaults to <code>dialog</code>',
    status: 'DONE',
    tests: 'TO DO',
  },
  {
    pattern: '<b>Should</b> be accessible for accessibility tree.',
    description: 'Children should be focusable and tabable',
    status: 'DONE',
    tests: 'TO DO',
  },
  {
    pattern: '<b>Should</b> be displayed on trigger hover and focus.',
    status: 'DONE',
    tests: 'TO DO',
  },
  {
    pattern: '<b>Should</b> be dismissable by pressing <code>Esc</code>.',
    status: 'DONE',
    tests: 'TO DO',
  },
  {
    pattern: '<b>Should</b> be persistent.',
    status: 'DONE',
    tests: 'TO DO',
  },
  {
    pattern: '<b>Should</b> be linked to the trigger.',
    comment:
      'Popovercontent is linked to the trigger by <code>??</code> or <code>??</code>.',
    status: 'TO DO',
    tests: 'TO DO',
  },
  {
    pattern: '<b>Should</b> respect Windows High Contrast mode.',
    status: 'TO DO',
    tests: 'N/A',
  },
  {
    pattern:
      '<b>Should</b> have a content with 4.5:1 contrast ratio against the background.',
    comment: 'Content colors should relate to the Popover background color.',
    status: 'DONE',
    tests: 'N/A',
  },
  {
    pattern: '<b>Should</b> respect prefers reduce motion settings.',
    status: 'DONE',
    tests: 'N/A',
  },
  {
    pattern: '<b>Should</b> be usable both on desktop and mobile.',
    status: 'TO DO',
    tests: 'TO DO',
  },
  {
    pattern: '<b>Should</b> provide information if is expanded.',
    comment: `The <code>aria-expanded</code> should have <code>true</code> value when it is expanded.`,
    status: 'TO DO',
    tests: 'TO DO',
  },
  {
    pattern:
      '<b>Should</b>, after closing, return focus to the element that invoked the Popover.',
    status: 'TO DO',
    tests: 'N/A',
  },
  {
    pattern: '<b>Can</b> have an accessible description.',
    comment: `Can be described by a value (<code>IDREF</code>) set for the <code>aria-describedby</code> 
      prop that refers to a visible dialog description.`,
    status: 'TO DO',
    tests: 'TO DO',
  },
];

export const listboxRules = [
  {
    pattern: '<b>Should</b> be linked to the trigger.',
    comment: `The <code>aria-haspopup="listbox"</code> and <code>aria-controls</code> attributed should reference element with role <code>listbox</code>.`,
    status: 'TO DO',
    tests: 'TO DO',
  },
  {
    pattern:
      '<b>Should</b> be opened by pressing <code>Space</code>/<code>Enter</code> and mouse click.',
    status: 'DONE',
    tests: 'TO DO',
  },
  {
    pattern: '<b>Should</b> have children with roles: `option` or `group`.',
    description: 'Should be implemented by the developer.',
    status: 'N/A',
    tests: 'N/A',
  },
  {
    pattern: '<b>Should</b> have arrow navigation.',
    description: 'Should be implemented by the developer.',
    status: 'N/A',
    tests: 'N/A',
  },
];

export const dialogRules = [
  {
    pattern: '<b>Should</b> have an accessible name.',
    comment: `Can be named by a label specified by <code>aria-label</code> prop 
    or a value (<code>IDREF</code>) set for the <code>aria-labelledby</code> 
    prop that refers to a visible dialog title.`,
    status: 'TO DO',
    tests: 'TO DO',
  },
  {
    pattern: '<b>Should</b> get focus when it opens.',
    status: 'TO DO',
    tests: 'TO DO',
  },
  {
    pattern: '<b>Should</b> have focus trap.',
    description: 'Should be implemented by the developer.',
    status: 'N/A',
    tests: 'N/A',
  },
];

export default rules;
