import React from 'react';

export function LogoStrip({ label = 'Guests at our tables have come from', logos = [], assetBase = '/assets/logos', style, ...rest }) {
  return (
    <div style={{ ...style }} {...rest}>
      {label ? <div style={{ textAlign: 'center', fontSize: '12px', fontWeight: 600, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--afa-green-bright)' }}>{label}</div> : null}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '28px 40px', marginTop: '26px' }}>
        {logos.map((l) => <img key={l.src} src={`${assetBase}/${l.src}`} alt={l.alt} style={{ height: l.height || 18, width: 'auto', display: 'block', flex: 'none' }} />)}
      </div>
    </div>
  );
}
