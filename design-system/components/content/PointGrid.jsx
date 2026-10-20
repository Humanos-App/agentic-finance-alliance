import React from 'react';

export function PointGrid({ items = [], columns, numbered = false, style, ...rest }) {
  const cols = columns || items.length || 3;
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, minmax(0,1fr))`, borderTop: '1px solid var(--afa-line)', ...style }} {...rest}>
      {items.map((it, i) => (
        <div key={i} style={{ padding: i === 0 ? '22px 20px 0 0' : '22px 20px 0', borderLeft: i === 0 ? 'none' : '1px solid var(--afa-line)' }}>
          {numbered ? <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--afa-green-bright)' }}>{String(i + 1).padStart(2, '0')}</span> : null}
          <b style={{ display: 'block', marginTop: numbered ? '10px' : 0, fontSize: it.large ? 'clamp(26px,2.8vw,36px)' : '18px', fontWeight: 600, letterSpacing: it.large ? '-.03em' : '-.015em', color: 'var(--afa-green)' }}>{it.title}</b>
          <p style={{ margin: '8px 0 0', fontSize: '16px', lineHeight: 1.4, color: 'var(--afa-muted)' }}>{it.text}</p>
        </div>
      ))}
    </div>
  );
}
