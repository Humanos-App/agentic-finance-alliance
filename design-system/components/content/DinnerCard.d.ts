import * as React from 'react';

/**
 * Next / Previously dinner card. next = deep green with a CTA; previous = cream deep.
 */
export interface DinnerCardProps extends React.HTMLAttributes<HTMLElement> {
  tag: React.ReactNode;
  city: React.ReactNode;
  meta?: React.ReactNode;
  image?: string;
  imagePosition?: string;
  next?: boolean;
  action?: React.ReactNode;
}
export declare function DinnerCard(props: DinnerCardProps): JSX.Element;
