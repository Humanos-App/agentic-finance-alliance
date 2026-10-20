import * as React from 'react';

/** 12px / 600 / .16em uppercase section label. accent (bright green) on cream, soft (#A9C3B5) on deep green. */
export interface EyebrowProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: 'accent' | 'soft' | 'muted';
  children?: React.ReactNode;
}
export declare function Eyebrow(props: EyebrowProps): JSX.Element;
