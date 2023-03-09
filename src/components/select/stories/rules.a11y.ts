const rules = [
  {
    pattern: '<b>Should</b> have role <code>combobox</code>.',
    status: '',
    tests: '',
  },
  {
    pattern: '<b>Should</b> have an accessible label.',
    comment: `Can be named by a label specified by <code>aria-label</code> prop or a value 
      (<code>IDREF</code>) set for the <code>aria-labelledby</code> prop that refers to an element.`,
    status: '',
    tests: '',
  },
  {
    pattern: '<b>Should</b> be focusable and tabable.',
    status: '',
    tests: '',
  },
  {
    pattern: '<b>Should not</b> be accessible when disabled.',
    status: '',
    tests: '',
  },
  {
    pattern: '<b>Should</b> have 4.5:1 contrast ratio against the background.',
    comment:
      '<code>gray-50</code> against white: 4.3:1, <code>black</code> against white: 21:1.',
    status: 'TO DO',
    tests: 'N/A',
  },
  {
    pattern:
      '<b>Should</b> have visible selected / unselected / disabled style.',
    status: '',
    tests: 'N/A',
  },
  {
    pattern: '<b>Should</b> have visible focus and hover style.',
    status: '',
    tests: '',
  },
  {
    pattern: '<b>Should</b> respect Windows High Contrast mode.',
    status: '',
    tests: '',
  },
  {
    pattern: '<b>Should</b> respect prefers reduce motion settings.',
    status: '',
    tests: '',
  },
  {
    pattern:
      '<b>Should</b> have descriptive information about required and invalid state.',
    comment:
      'Invalid state is indicated by color change. Both states can be described using <code>aria-description</code>.',
    status: '',
    tests: '',
  },
  {
    pattern: '<b>Should</b> provide information about active descendant.',
    comment: `The <code>aria-activedescendant</code> attribute identifies the selected <code>SelectOption</code> by referencing the id value of the option.`,
    status: '',
    tests: '',
  },
  {
    pattern: '<b>Should</b> provide information if is expanded.',
    comment: `The <code>aria-expanded</code> .`,
    status: '',
    tests: '',
  },
  {
    pattern: '<b>Should</b> provide information about the linked popup.',
    comment: `The <code>aria-haspopup="listbox"</code> and <code>aria-controls</code> attributed should reference element with role <code>listbox</code>.`,
    status: '',
    tests: '',
  },
  {
    pattern:
      '<b>Should</b> open listbox by pressing <code>Space</code>/<code>Enter</code> and mouse click.',
    status: '',
    tests: '',
  },
  {
    pattern:
      '<b>Should</b> have <code>aria-multiselectable=true</code> when more than one option can be selected',
    status: '',
    tests: '',
  },
  {
    pattern: '<b>Can</b> have an accessible description.',
    comment:
      'Can be described by setting a value for <code>aria-description</code> attribute.',
    status: '',
    tests: '',
  },
];

export const selectOptionRules = [
  {
    pattern: '<b>Should</b> have role <code>option</code>.',
    status: '',
    tests: '',
  },
  {
    pattern:
      '<b>Should</b> be contained in, or owned by, an element with role <code>listbox</code>.',
    status: '',
    tests: '',
  },
  {
    pattern: '<b>Should</b> indicate selection.',
    comment:
      '<code>aria-selected</code> should be <code>true</code> when option is selected. Selected option has a visual indicator.',
    status: '',
    tests: '',
  },
  {
    pattern: '<b>Should not</b> contain interactive elements.',
    comment:
      'Checkbox for multiselectable variant is removed from the accessibility tree.',
    status: '',
    tests: '',
  },
  {
    pattern:
      '<b>Should</b> be selected by pressing <code>Space</code>/<code>Enter</code> and mouse click.',
    status: '',
    tests: '',
  },
  {
    pattern:
      '<b>Should</b> be focusable on <code>Arrow Down</code>/<code>Arrow Up</code> press.',
    comment:
      '<code>Arrow Down</code> focuses the next option, <code>Arrow Up</code> focuses the previous one.',
    status: '',
    tests: '',
  },
];

export default rules;
