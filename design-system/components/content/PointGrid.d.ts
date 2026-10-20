import * as React from 'react';

export interface Point { title: React.ReactNode; text: React.ReactNode; large?: boolean }

/**
 * Columns of title + short text split by vertical hairlines — "What is AFA", "Who sits at the table".
 */
export interface PointGridProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: Point[];
  columns?: number;
  numbered?: boolean;
}
export declare function PointGrid(props: PointGridProps): JSX.Element;
