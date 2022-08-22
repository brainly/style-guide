// @flow strict

import * as React from 'react';

export type SlotType =
  | 'backdrop'
  | 'top'
  | 'left'
  | 'right'
  | 'bottom'
  | 'top-left'
  | 'top-middle'
  | 'top-right'
  | 'middle-left'
  | 'middle-right'
  | 'bottom-left'
  | 'bottom-middle'
  | 'bottom-right';

export const SLOTS = [
  'backdrop',
  'top',
  'left',
  'right',
  'bottom',
  'top-left',
  'top-middle',
  'top-right',
  'middle-left',
  'middle-right',
  'bottom-left',
  'bottom-middle',
  'bottom-right',
];

export type DialogOverlayPropsType = {
  children: React.Node,
  slot: SlotType,
};

const DialogOverlay = ({children}: DialogOverlayPropsType) => children;

export default DialogOverlay;