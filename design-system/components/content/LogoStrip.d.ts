import * as React from 'react';

export interface StripLogo { src: string; alt: string; height?: number }

/**
 * One row of guest company logos, optically matched by per-logo height.
 */
export interface LogoStripProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: React.ReactNode;
  logos?: StripLogo[];
  assetBase?: string;
}
export declare function LogoStrip(props: LogoStripProps): JSX.Element;
