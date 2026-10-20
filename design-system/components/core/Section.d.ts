import * as React from 'react';

/** Website section shell: 1200px wrap, eyebrow + semibold title + muted lede, hairline on top. tone="green" for full-bleed deep green sections. */
export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  eyebrow?: React.ReactNode;
  title?: React.ReactNode;
  lede?: React.ReactNode;
  divider?: boolean;
  tone?: 'cream' | 'green';
  children?: React.ReactNode;
}
export declare function Section(props: SectionProps): JSX.Element;
