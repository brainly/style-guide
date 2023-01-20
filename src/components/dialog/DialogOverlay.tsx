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
] as const;

export type DialogOverlayPropsType = {
  children: React.ReactNode;
  // eslint-disable-next-line react/no-unused-prop-types
  slot: SlotType;
};

const DialogOverlay = ({children}: DialogOverlayPropsType) => <>{children}</>;

export default DialogOverlay;
