import * as React from 'react';

/**
 * The geometric A mark. Never stretch, rotate or apply effects. Minimum 24px.
 */
export interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  lockup?: 'green-on-toasted' | 'transparent' | 'cream-transparent';
  /** Rendered square size in px. Minimum 24. */
  size?: number;
  /** Path prefix to the copied assets folder. */
  assetBase?: string;
}
export declare function Logo(props: LogoProps): JSX.Element;
