import * as React from 'react';

/** 16px-radius panel, no shadow. surface = cream deep (partner benefits), inverse = deep green, outline = hairline. */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: 'surface' | 'inverse' | 'outline';
  padding?: string;
  children?: React.ReactNode;
}
export declare function Card(props: CardProps): JSX.Element;
