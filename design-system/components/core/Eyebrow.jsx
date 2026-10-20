import React from 'react';

export function Eyebrow({ children, tone = 'accent', style, ...rest }) {
  return (
    <div
      style={{
        fontFamily: 'var(--font-sans)', fontSize: '12px', fontWeight: 600, letterSpacing: '.16em', textTransform: 'uppercase',
        color: tone === 'soft' ? 'var(--afa-on-green-soft)' : tone === 'muted' ? 'var(--afa-muted)' : 'var(--afa-green-bright)',
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
