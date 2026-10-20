import * as React from 'react';

/**
 * Pill CTA from the AFA website.
 * fill = deep green on cream · cream = cream on deep green or photos · line = cream outline on dark · ghost = green outline on cream.
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'fill' | 'cream' | 'line' | 'ghost';
  size?: 'md' | 'lg';
  disabled?: boolean;
  href?: string;
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
