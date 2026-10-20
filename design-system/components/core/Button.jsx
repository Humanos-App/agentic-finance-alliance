import React from 'react';

const variants = {
  fill: { background: 'var(--afa-green)', color: 'var(--afa-cream)', borderColor: 'transparent' },
  cream: { background: 'var(--afa-cream)', color: 'var(--afa-green)', borderColor: 'transparent' },
  line: { background: 'transparent', color: 'var(--afa-cream)', borderColor: 'rgba(241,237,227,.6)' },
  ghost: { background: 'transparent', color: 'var(--afa-green)', borderColor: 'var(--afa-green)' },
};
const sizes = {
  md: { fontSize: '15px', padding: '12px 24px' },
  lg: { fontSize: '16px', padding: '14px 28px' },
};

export function Button({ variant = 'fill', size = 'md', disabled = false, href, children, style, ...rest }) {
  const Tag = href ? 'a' : 'button';
  return (
    <Tag
      href={href}
      disabled={!href && disabled ? true : undefined}
      style={{
        display: 'inline-flex', alignItems: 'center', whiteSpace: 'nowrap',
        fontFamily: 'var(--font-sans)', fontWeight: 500, letterSpacing: '-.01em', lineHeight: 1.2,
        borderRadius: 'var(--radius-pill)', border: '1.5px solid transparent', cursor: 'pointer', textDecoration: 'none',
        transition: 'opacity var(--dur-base) var(--ease-standard)',
        ...sizes[size], ...variants[variant],
        ...(disabled ? { opacity: 0.4, pointerEvents: 'none' } : null),
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
