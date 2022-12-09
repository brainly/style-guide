const rules = [
  {
    pattern: '<b>Should</b> have an accessible name.',
    comment:
      'Can be named by: \n- a label specified by <code>aria-label</code> prop\n- a value (<code>IDREF</code>) set for the <code>aria-labelledby</code> prop that refers to a visible dialog title\n\n<code><DialogHeader/></code> component should be used as a visible dialog title.',
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern: '<b>Should</b> have role <code>dialog</code>.',
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern:
      '<b>Should</b> have <code>aria-modal</code> set to <code>true</code>.',
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern: '<b>Should</b> get focus when it opens.',
    comment:
      'Focus moves to an element inside the dialog. If there is no tabbable element, focus is given to the dialog itself.',
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern: '<b>Should</b> have focus trap.',
    comment:
      'If focus is on the last tabbable element inside the dialog, moves focus to the first tabbable element inside the dialog. \n If focus is on the first tabbable element inside the dialog, moves focus to the last tabbable element inside the dialog.',
    status: 'DONE',
    tests: 'N/A',
  },
  {
    pattern: '<b>Should</b> be closed be pressing <code>Esc</code> key.',
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern: '<b>Should</b> block user interaction outside dialog.',
    comment:
      'User cannot tab outside dialog (focus trap). \n Mouse click outside dialog (on overlay) closes the dialog.',
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern:
      '<b>Should</b>, after closing, return focus to the element that invoked the dialog.',
    status: 'DONE',
    tests: 'N/A',
  },
  {
    pattern: '<b>Should</b> respect <code>prefers-reduced-motion</code>.',
    comment:
      '<code>prefers-reduced-motion</code> system setting is respected. \n Motion can be reduced by setting <code>reduceMotion</code> to <code>true</code> too.',
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
    pattern: '<b>Can</b> have a button that closes the dialog.',
    comment: '<code><DialogCloseButton/></code>.',
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern: '<b>Can</b> have an accessible description.',
    comment:
      'Can be described by a value (<code>IDREF</code>) set for the <code>aria-describedby</code> prop that refers to a visible dialog description.',
    status: 'DONE',
    tests: 'DONE',
  },
];

export const closeButtonRules = [
  {
    pattern: '<b>Should</b> have an accessible name.',
    comment:
      "<code><DialogCloseButton/></code> <code>aria-label</code> defaults to <code>'Close this dialog window'</code>.",
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern: '<b>Should</b> have distinctive focus style.',
    comment: 'Browser focus style is used.',
    status: 'DONE',
    tests: 'N/A',
  },
];

export default rules;
