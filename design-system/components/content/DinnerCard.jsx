import React from 'react';

export function DinnerCard({ tag, city, meta, image, imagePosition = '50% 50%', next = false, action, style, ...rest }) {
  return (
    <article style={{ borderRadius: 'var(--radius-card)', overflow: 'hidden', display: 'flex', flexDirection: 'column', background: next ? 'var(--afa-green)' : 'var(--afa-cream-deep)', color: next ? 'var(--afa-cream)' : 'var(--afa-green)', ...style }} {...rest}>
      {image ? <img src={image} alt={city} style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', objectPosition: imagePosition, display: 'block' }} /> : null}
      <div style={{ padding: '26px 28px 30px' }}>
        <span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '.16em', textTransform: 'uppercase', color: next ? 'var(--afa-on-green-soft)' : 'var(--afa-green-bright)' }}>{tag}</span>
        <h3 style={{ margin: '10px 0 0', fontSize: '40px', fontWeight: 600, letterSpacing: '-.04em', lineHeight: 1 }}>{city}</h3>
        <p style={{ margin: '10px 0 0', fontSize: '16px', color: next ? 'var(--afa-on-green-soft)' : 'var(--afa-muted)' }}>{meta}</p>
        {action ? <div style={{ marginTop: '22px' }}>{action}</div> : null}
      </div>
    </article>
  );
}
