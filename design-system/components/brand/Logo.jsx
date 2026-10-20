import React from 'react';

const SRC = {
  'green-on-toasted': 'logo-green-on-toasted.png',
  'transparent': 'logo-green-transparent.png',
  'cream-transparent': 'logo-toasted-transparent.png',
};

export function Logo({ lockup = 'green-on-toasted', size = 40, assetBase = '/assets', style, ...rest }) {
  return (
    <img
      src={`${assetBase}/${SRC[lockup] || SRC['green-on-toasted']}`}
      alt="Agentic Finance Alliance"
      width={size}
      height={size}
      style={{ display: 'block', width: size, height: size, borderRadius: lockup === 'transparent' || lockup === 'cream-transparent' ? 0 : '6px', ...style }}
      {...rest}
    />
  );
}
