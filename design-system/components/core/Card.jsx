import React from 'react';

export function Card({ tone = 'surface', padding = '24px 26px', children, style, ...rest }) {
  const tones = {
    surface: { background: 'var(--afa-cream-deep)', color: 'var(--afa-green)' },
    inverse: { background: 'var(--afa-green)', color: 'var(--afa-cream)' },
    outline: { background: 'transparent', border: '1px solid var(--afa-line)', color: 'var(--afa-green)' },
  };
  return (
    <div style={{ borderRadius: 'var(--radius-card)', overflow: 'hidden', padding, ...tones[tone], ...style }} {...rest}>
      {children}
    </div>
  );
}
