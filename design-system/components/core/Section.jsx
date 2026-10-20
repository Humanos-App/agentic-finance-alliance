import React from 'react';
import { Eyebrow } from './Eyebrow.jsx';

export function Section({ eyebrow, title, lede, divider = true, tone = 'cream', children, style, ...rest }) {
  const dark = tone === 'green';
  return (
    <section
      style={{
        padding: 'clamp(72px,12vh,128px) 0',
        background: dark ? 'var(--afa-green)' : 'transparent',
        color: dark ? 'var(--afa-cream)' : 'var(--afa-green)',
        borderTop: divider && !dark ? '1px solid var(--afa-line)' : 'none',
        ...style,
      }}
      {...rest}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 clamp(20px,4vw,48px)' }}>
        {eyebrow ? <Eyebrow tone={dark ? 'soft' : 'accent'}>{eyebrow}</Eyebrow> : null}
        {title ? (
          <h2 style={{ margin: '16px 0 0', fontSize: 'clamp(34px,4.6vw,56px)', fontWeight: 600, letterSpacing: '-.035em', lineHeight: 1.02 }}>{title}</h2>
        ) : null}
        {lede ? (
          <p style={{ margin: '16px 0 0', fontSize: '18px', maxWidth: '44ch', color: dark ? 'var(--afa-on-green-soft)' : 'var(--afa-muted)' }}>{lede}</p>
        ) : null}
        {children}
      </div>
    </section>
  );
}
