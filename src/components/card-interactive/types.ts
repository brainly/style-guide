export type StyleType = React.CSSProperties & {
  '--card-background-color'?: React.CSSProperties['backgroundColor'];
  '--card-border-color'?: React.CSSProperties['borderColor'];
  '--card-border-color-hover'?: React.CSSProperties['borderColor'];
  '--card-border-color-invalid'?: React.CSSProperties['borderColor'];
  '--card-border-color-invalid-hover'?: React.CSSProperties['borderColor'];
  '--card-border-color-checked'?: React.CSSProperties['borderColor'];
  '--card-border-color-checked-hover'?: React.CSSProperties['borderColor'];
  '--card-indicator-color'?: React.CSSProperties['color'];

  '--card-focus-color'?: React.CSSProperties['color'];
  '--card-focus-inner-color'?: React.CSSProperties['color'];
  '--card-focus-outer-color'?: React.CSSProperties['color'];
  '--card-focus-color-invalid'?: React.CSSProperties['color'];
  '--card-focus-outer-color-invalid'?: React.CSSProperties['color'];

  '--card-press-scale-factor'?: number;
};
