/* @ds-bundle: {"format":4,"namespace":"AFADesignSystem_93293e","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"DinnerCard","sourcePath":"components/content/DinnerCard.jsx"},{"name":"LogoStrip","sourcePath":"components/content/LogoStrip.jsx"},{"name":"PointGrid","sourcePath":"components/content/PointGrid.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Section","sourcePath":"components/core/Section.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"5e2c21b38692","components/content/DinnerCard.jsx":"129c35097a13","components/content/LogoStrip.jsx":"a4beb9f942d5","components/content/PointGrid.jsx":"903f7eb2ccdf","components/core/Button.jsx":"49f88d09e0f9","components/core/Card.jsx":"4aa00cfca82b","components/core/Eyebrow.jsx":"2c5665487724","components/core/Section.jsx":"5497be21ab5d","doc-page.js":"371bab66f42d","ui_kits/website/about.jsx":"90013a2d181e","ui_kits/website/apply.jsx":"925196c3cd8d","ui_kits/website/dinners.jsx":"e9a911328d43","ui_kits/website/footer.jsx":"23a4b66dac90","ui_kits/website/gallery.jsx":"d2615e951f3f","ui_kits/website/hero.jsx":"b17515ffc7ec","ui_kits/website/how.jsx":"34cc14c192b1","ui_kits/website/nav.jsx":"816601061b3a","ui_kits/website/partners.jsx":"af15f9445715","ui_kits/website/table.jsx":"69730cbd5fe8","ui_kits/website/who.jsx":"81c2db025702","website-v2/about.jsx":"90013a2d181e","website-v2/apply.jsx":"925196c3cd8d","website-v2/dinners.jsx":"8c5b03e0702e","website-v2/footer.jsx":"e3c1dba41362","website-v2/gallery.jsx":"eed11cd865ad","website-v2/hero.jsx":"1aacf0f62dc5","website-v2/how.jsx":"b21fc3014408","website-v2/nav.jsx":"f4c6a8095eda","website-v2/partners.jsx":"af15f9445715","website-v2/table.jsx":"ffe507028c72","website-v2/who.jsx":"81c2db025702"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AFADesignSystem_93293e = window.AFADesignSystem_93293e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SRC = {
  'green-on-toasted': 'logo-green-on-toasted.png',
  'transparent': 'logo-green-transparent.png',
  'cream-transparent': 'logo-toasted-transparent.png'
};
function Logo({
  lockup = 'green-on-toasted',
  size = 40,
  assetBase = '/assets',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: `${assetBase}/${SRC[lockup] || SRC['green-on-toasted']}`,
    alt: "Agentic Finance Alliance",
    width: size,
    height: size,
    style: {
      display: 'block',
      width: size,
      height: size,
      borderRadius: lockup === 'transparent' || lockup === 'cream-transparent' ? 0 : '6px',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/content/DinnerCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function DinnerCard({
  tag,
  city,
  meta,
  image,
  imagePosition = '50% 50%',
  next = false,
  action,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("article", _extends({
    style: {
      borderRadius: 'var(--radius-card)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      background: next ? 'var(--afa-green)' : 'var(--afa-cream-deep)',
      color: next ? 'var(--afa-cream)' : 'var(--afa-green)',
      ...style
    }
  }, rest), image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: city,
    style: {
      width: '100%',
      aspectRatio: '4/3',
      objectFit: 'cover',
      objectPosition: imagePosition,
      display: 'block'
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '26px 28px 30px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      fontWeight: 600,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: next ? 'var(--afa-on-green-soft)' : 'var(--afa-green-bright)'
    }
  }, tag), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '10px 0 0',
      fontSize: '40px',
      fontWeight: 600,
      letterSpacing: '-.04em',
      lineHeight: 1
    }
  }, city), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px 0 0',
      fontSize: '16px',
      color: next ? 'var(--afa-on-green-soft)' : 'var(--afa-muted)'
    }
  }, meta), action ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '22px'
    }
  }, action) : null));
}
Object.assign(__ds_scope, { DinnerCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/DinnerCard.jsx", error: String((e && e.message) || e) }); }

// components/content/LogoStrip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function LogoStrip({
  label = 'Guests at our tables have come from',
  logos = [],
  assetBase = '/assets/logos',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...style
    }
  }, rest), label ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      fontSize: '12px',
      fontWeight: 600,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: 'var(--afa-green-bright)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '28px 40px',
      marginTop: '26px'
    }
  }, logos.map(l => /*#__PURE__*/React.createElement("img", {
    key: l.src,
    src: `${assetBase}/${l.src}`,
    alt: l.alt,
    style: {
      height: l.height || 18,
      width: 'auto',
      display: 'block',
      flex: 'none'
    }
  }))));
}
Object.assign(__ds_scope, { LogoStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/LogoStrip.jsx", error: String((e && e.message) || e) }); }

// components/content/PointGrid.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PointGrid({
  items = [],
  columns,
  numbered = false,
  style,
  ...rest
}) {
  const cols = columns || items.length || 3;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${cols}, minmax(0,1fr))`,
      borderTop: '1px solid var(--afa-line)',
      ...style
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: i === 0 ? '22px 20px 0 0' : '22px 20px 0',
      borderLeft: i === 0 ? 'none' : '1px solid var(--afa-line)'
    }
  }, numbered ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '13px',
      color: 'var(--afa-green-bright)'
    }
  }, String(i + 1).padStart(2, '0')) : null, /*#__PURE__*/React.createElement("b", {
    style: {
      display: 'block',
      marginTop: numbered ? '10px' : 0,
      fontSize: it.large ? 'clamp(26px,2.8vw,36px)' : '18px',
      fontWeight: 600,
      letterSpacing: it.large ? '-.03em' : '-.015em',
      color: 'var(--afa-green)'
    }
  }, it.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      fontSize: '16px',
      lineHeight: 1.4,
      color: 'var(--afa-muted)'
    }
  }, it.text))));
}
Object.assign(__ds_scope, { PointGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PointGrid.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const variants = {
  fill: {
    background: 'var(--afa-green)',
    color: 'var(--afa-cream)',
    borderColor: 'transparent'
  },
  cream: {
    background: 'var(--afa-cream)',
    color: 'var(--afa-green)',
    borderColor: 'transparent'
  },
  line: {
    background: 'transparent',
    color: 'var(--afa-cream)',
    borderColor: 'rgba(241,237,227,.6)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--afa-green)',
    borderColor: 'var(--afa-green)'
  }
};
const sizes = {
  md: {
    fontSize: '15px',
    padding: '12px 24px'
  },
  lg: {
    fontSize: '16px',
    padding: '14px 28px'
  }
};
function Button({
  variant = 'fill',
  size = 'md',
  disabled = false,
  href,
  children,
  style,
  ...rest
}) {
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    disabled: !href && disabled ? true : undefined,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      whiteSpace: 'nowrap',
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      letterSpacing: '-.01em',
      lineHeight: 1.2,
      borderRadius: 'var(--radius-pill)',
      border: '1.5px solid transparent',
      cursor: 'pointer',
      textDecoration: 'none',
      transition: 'opacity var(--dur-base) var(--ease-standard)',
      ...sizes[size],
      ...variants[variant],
      ...(disabled ? {
        opacity: 0.4,
        pointerEvents: 'none'
      } : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  tone = 'surface',
  padding = '24px 26px',
  children,
  style,
  ...rest
}) {
  const tones = {
    surface: {
      background: 'var(--afa-cream-deep)',
      color: 'var(--afa-green)'
    },
    inverse: {
      background: 'var(--afa-green)',
      color: 'var(--afa-cream)'
    },
    outline: {
      background: 'transparent',
      border: '1px solid var(--afa-line)',
      color: 'var(--afa-green)'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: 'var(--radius-card)',
      overflow: 'hidden',
      padding,
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Eyebrow({
  children,
  tone = 'accent',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '12px',
      fontWeight: 600,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: tone === 'soft' ? 'var(--afa-on-green-soft)' : tone === 'muted' ? 'var(--afa-muted)' : 'var(--afa-green-bright)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Section.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Section({
  eyebrow,
  title,
  lede,
  divider = true,
  tone = 'cream',
  children,
  style,
  ...rest
}) {
  const dark = tone === 'green';
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      padding: 'clamp(72px,12vh,128px) 0',
      background: dark ? 'var(--afa-green)' : 'transparent',
      color: dark ? 'var(--afa-cream)' : 'var(--afa-green)',
      borderTop: divider && !dark ? '1px solid var(--afa-line)' : 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 clamp(20px,4vw,48px)'
    }
  }, eyebrow ? /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: dark ? 'soft' : 'accent'
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '16px 0 0',
      fontSize: 'clamp(34px,4.6vw,56px)',
      fontWeight: 600,
      letterSpacing: '-.035em',
      lineHeight: 1.02
    }
  }, title) : null, lede ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '16px 0 0',
      fontSize: '18px',
      maxWidth: '44ch',
      color: dark ? 'var(--afa-on-green-soft)' : 'var(--afa-muted)'
    }
  }, lede) : null, children));
}
Object.assign(__ds_scope, { Section });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Section.jsx", error: String((e && e.message) || e) }); }

// doc-page.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <doc-page> — paged-document shell for printable HTML.
 *
 * FIRST, decide how the document paginates — up front, before building:
 *
 * - FLOWING document (the default): write the whole document as one
 *   normal HTML flow inside <doc-page>; the browser's print engine
 *   splits it onto pages at export. Use for long-form documents with a
 *   single text flow: reports, memos, letters, essays.
 * - EXPLICIT pagination: a fixed set of pre-paginated pages, one
 *   <section class="page"> child per page. Use when the user asks for a
 *   specific page count, or the design implies one: a one-page resume, a
 *   two-sided flier, a poster, a certificate, a brochure — any richly
 *   laid-out document without a single text flow.
 * - If in doubt, ask the user as part of the build.
 *
 * PAGE SIZING — paper differs by country (letter vs A4), so the printed
 * sheet is not one fixed truth:
 * - FLOWING documents pin NO paper size: the print engine paginates
 *   onto the user's real paper, and the content reflows to it.
 * - EXPLICITLY PAGINATED documents print each page at a FIXED page box
 *   with overflow hidden — letter by default, size="a4" for a clearly
 *   metric user, the user's chosen paper when they export. Design each
 *   page to FILL that box, fitting letter and A4 alike without overlap.
 * - width/height pin an explicit fixed size, ONLY when the user gives
 *   one.
 * Never write your own @page rule or hard-code paper dimensions in the
 * content.
 *
 * Sizing modes (attributes):
 *   (none)                      — portrait: flowing docs use the user's
 *           paper; explicitly paginated pages use the named size box
 *           (letter unless size="a4")
 *   orientation="landscape"     — the same, landscape
 *   width / height              — explicit fixed size, ONLY when the user
 *           gives one (e.g. width="22in" height="30in" for a 22×30
 *           poster): the page IS the design's size, printed at true
 *           dimensions (or scaled onto the user's paper at print time).
 *           Any absolute CSS length: px/in/mm/cm/pt/pc.
 * The component announces the chosen mode to the host app at runtime (a
 * meta tag it injects), so the print path can inject the user's true
 * paper size.
 *
 * On screen the document renders on a desk background: a flowing
 * document as one tall scrolling sheet (Google Docs' pageless view);
 * explicitly paginated documents as one card per page.
 *
 * EXPLICIT pagination usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page>
 *     <section class="page" id="p1">…one page's design…</section>
 *     <section class="page" id="p2">…</section>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * How the page box works, concretely: each .page prints as ONE full-bleed
 * sheet at a FIXED physical size — letter by default (set size="a4" for
 * a clearly metric user), the user's chosen paper when they export —
 * with overflow hidden. Nothing scrolls and nothing reflows onto a next
 * sheet: content that misses the box is CLIPPED. Design each page to
 * FILL that page box, and to fit it — letter and A4 alike — without
 * overlap. Each page is a size container; don't size anything in
 * viewport units (they track the window, not the page), and never set
 * width or height on the .page section itself (the component sizes the
 * page box; an authored height like 100% is meaningless at print and is
 * overridden). The component owns the page box, the screen card chrome,
 * and the page breaks (never add your own break-before/after). Don't mix
 * .page sections with flowing content or header/footer slots in the same
 * document.
 *
 * FLOWING usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page margin="0.75in">
 *     <h1>Title</h1>
 *     <p>…body…</p>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * There is no manual page-splitting — the browser's print engine
 * paginates at export. Standard break-hygiene rules (`break-inside:
 * avoid` on figures, code blocks, images and table rows; `orphans/
 * widows: 3`) are applied so paragraphs and groups split cleanly. On
 * screen and at print, headings default to `text-wrap: balance` and
 * body text to `text-wrap: pretty`; the defaults have zero specificity,
 * so any text-wrap you declare wins.
 *
 * Other attributes:
 *   size    — letter | a4 | legal (default letter). Flowing documents:
 *           preview proportion only — it does NOT pin their printed
 *           paper (the print dialog's paper governs); leave it alone
 *           there. Explicitly paginated documents: it sets the page box
 *           the cards and the pinned @page share (the export dialog's
 *           choice overrides both at print) — set size="a4" for a
 *           clearly metric user. Scaled-fit: names the sheet the fit is
 *           computed against, same a4-for-metric-users advice.
 *   content-width / content-height — the design's own fixed dimensions
 *           (CSS lengths), for scaling a fixed-size design ONTO the
 *           named sheet: content lays out at exactly this size, and the
 *           component scales it to fit that sheet's printable area
 *           (centered horizontally, top-aligned; the export dialog
 *           re-fits to the user's actual paper choice where available).
 *           Both must be set; they do not change the page box. For pages
 *           WITHOUT running header/footer slots.
 *   margin  — printable inset on every page of a FLOWING document
 *           (default 0.75in); margin="0" makes pages full-bleed.
 *           Explicitly paginated pages are always full-bleed.
 *
 * Running header/footer (flowing documents only): give an element
 * `slot="header"` or `slot="footer"` and it repeats on every printed
 * page via `position: fixed`. To keep body text from sliding under it,
 * the component prints inside a single-cell table whose <thead>/<tfoot>
 * are spacers sized to the header/footer height — browsers repeat
 * thead/tfoot on every page, so each sheet's content starts below the
 * header and ends above the footer. On screen the header/footer render
 * once at the top/bottom of the sheet.
 *
 * At print the component injects `@page { margin: 0 }` (which leaves
 * Chrome no margin box to draw its date/URL/page-count header in) and
 * moves the visual margin onto the sheet's own padding. It also marks
 * the document as owning its print CSS (a
 * `meta[name="omelette-owns-print"]` it injects at runtime), so the
 * PDF export never injects page-geometry CSS of its own on top.
 *
 * Print best practices for the content you author:
 * - Multi-column text: use CSS columns (`column-count` +
 *   `column-gap`), never side-by-side flex/grid columns — only real
 *   CSS columns flow and break across pages. `column-span: all` lets
 *   a heading span the columns; `hyphens: auto` (needs `lang` on
 *   the html element) keeps narrow columns readable.
 * - Page breaks in flowing documents: `break-before: page` on an
 *   element that must start a new page (a chapter, an appendix). Add
 *   your own kept-together blocks (callouts, stat tiles, cards) to a
 *   `break-inside: avoid` rule, and keep each one shorter than a page.
 * - Extend `orphans: 3; widows: 3` to any custom text blocks you add
 *   (p and li are covered by default).
 * - Give long tables a <thead> — browsers repeat it on every printed
 *   page.
 * - No `position: fixed`/`sticky` and no viewport units in content:
 *   fixed elements stamp every printed page (running headers/footers go
 *   in the component's slots) and `100vh` mis-sizes at print.
 *
 * Author content as static HTML so the user can click-to-edit any text
 * directly. Do not set width/padding/background on the document body —
 * the component owns the sheet box.
 */
/* END USAGE */

(() => {
  const PAPER = {
    letter: ['8.5in', '11in'],
    a4: ['210mm', '297mm'],
    legal: ['8.5in', '14in']
  };
  const CSS_LENGTH = /^\d+(\.\d+)?(px|in|mm|cm|pt|pc)$/;
  // Unitless "0" is a valid CSS length and the natural way to write
  // margin="0"; normalise it to 0px so max()/calc() (which reject a bare
  // number) keep working.
  const safeLen = (v, fb) => {
    v = (v || '').trim();
    return v === '0' ? '0px' : CSS_LENGTH.test(v) ? v : fb;
  };
  // WebKit (Safari and every iOS browser shell) never repeats a table's
  // thead/tfoot on printed pages (WebKit bug 17205), so the spacer-borne
  // vertical margins of a FLOWING document reach only the first page
  // there. Engine check, not browser check: vendor is 'Apple Computer,
  // Inc.' exactly for WebKit and 'Google Inc.' for Blink.
  const WK_PRINT = /apple/i.test(navigator.vendor || '');
  // CSS length → px number (CSS absolute units are exact: 1in = 96px).
  // Returns NaN for anything safeLen would reject — callers gate on it.
  const PX_PER = {
    px: 1,
    in: 96,
    mm: 96 / 25.4,
    cm: 96 / 2.54,
    pt: 96 / 72,
    pc: 16
  };
  const toPx = v => {
    const m = /^(\d+(?:\.\d+)?)(px|in|mm|cm|pt|pc)$/.exec((v || '').trim());
    return m ? parseFloat(m[1]) * PX_PER[m[2]] : NaN;
  };
  const stylesheet = `
    :host {
      position: relative;
      display: block;
      /* When the viewport is narrower than the page, grow to wrap the
       * sheet (plus this padding) instead of staying viewport-width, so
       * the desk background and right margin reach the sheet's far edge
       * in the horizontal scroll. */
      min-width: max-content;
      min-height: 100vh;
      background: #f5f5f4;
      padding: 48px 24px;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
      --doc-page-w: 8.5in;
      --doc-page-h: 11in;
      --doc-page-margin: 0.75in;
      --doc-hdr-h: 0px;
      --doc-ftr-h: 0px;
      --doc-hdr-pad: 0px;
      --doc-ftr-pad: 0px;
    }
    .sheet {
      width: var(--doc-page-w);
      margin: 0 auto;
      background: #fff;
      box-shadow: 0 2px 10px rgba(20, 20, 19, 0.12);
      border-radius: 7px;
      box-sizing: border-box;
      padding: var(--doc-page-margin);
    }
    .frame { width: 100%; border-collapse: collapse; }
    /* Scaled-fit mode (content-width/content-height): the inner .fit box
     * lays the content out at its authored fixed size and scales it onto
     * the printable area; .fit-box reserves the scaled footprint in flow
     * (transforms don't affect layout) and centers it. Without the mode,
     * both divs are unstyled block pass-throughs. */
    /* Explicit pagination: direct .page children are the pages. The sheet
     * becomes a transparent stack and each page carries the card look on
     * screen; at print each page is exactly one full-bleed sheet. The
     * ::slotted defaults are deliberately weak (document CSS wins), so
     * authored page styling can override any of this. */
    .sheet.paginated {
      background: transparent;
      box-shadow: none;
      border-radius: 0;
      padding: 0;
    }
    .paginated ::slotted(.page) {
      position: relative;
      display: block;
      width: 100%;
      aspect-ratio: var(--doc-page-ar);
      container-type: size;
      overflow: hidden;
      box-sizing: border-box;
      background: #fff;
      border-radius: 7px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
      break-inside: avoid;
    }
    .paginated ::slotted(.page:not(:first-child)) { margin-top: 1rem; }
    @media print {
      .sheet.paginated { padding: 0; }
      /* The flowing-document vertical inset lives on the repeating
       * thead/tfoot spacers, not the sheet padding — they must go too,
       * or each full-sheet .page is pushed ~margin down and spills onto
       * a second sheet. Paginated pages are full-bleed by definition
       * (content owns its insets). */
      .sheet.paginated .hdr-space,
      .sheet.paginated .ftr-space { height: 0; }
      .paginated ::slotted(.page) {
        border-radius: 0 !important;
        box-shadow: none !important;
        margin: 0 !important;
        /* Physical page-box sizing, no viewport units: Safari resolves
         * 100vh against the window, not the page box, so a vh-sized card
         * paginates wrong there. --doc-page-w/h are the named size by
         * default and are overridden to the user's chosen paper by the
         * export path, so every card is exactly one sheet either way.
         * Width + height (same source values as @page size) rather than
         * width + aspect-ratio: the ratio is a 6-decimal rounding of the
         * same division, and a few millionths of overflow would spill a
         * blank sheet after every page. The screen-only aspect-ratio
         * (preview proportions) must not leak into print. cqh typography
         * tracks the same box.
         *
         * Every declaration is !important: per CSS Scoping, unimportant
         * shadow ::slotted rules LOSE to the document context, so a page
         * section's authored inline style would silently beat this print
         * geometry. A model-authored height:100% did exactly that — the
         * percentage resolves as auto in the all-auto print ancestry, the
         * base rule's size containment turns auto into ZERO, and
         * overflow:hidden then paints nothing: a blank PDF with perfect
         * page boxes. At print the component's geometry is the design's
         * whole contract, so it must win over any authored sizing. */
        aspect-ratio: auto !important;
        width: var(--doc-page-w) !important;
        height: var(--doc-page-h) !important;
        overflow: hidden !important;
      }
      .paginated ::slotted(.page:not(:first-child)) {
        break-before: page !important;
        margin-top: 0 !important;
      }
    }
    .fit-mode .fit-box {
      width: calc(var(--doc-fit-w) * var(--doc-fit-scale));
      height: calc(var(--doc-fit-h) * var(--doc-fit-scale));
      margin: 0 auto;
      break-inside: avoid;
    }
    .fit-mode .fit {
      width: var(--doc-fit-w);
      height: var(--doc-fit-h);
      transform: scale(var(--doc-fit-scale));
      transform-origin: top left;
    }
    .frame td, .frame th { padding: 0; text-align: left; font-weight: inherit; }
    .hdr-space { height: var(--doc-hdr-h); }
    .ftr-space { height: var(--doc-ftr-h); }
    ::slotted([slot="header"]),
    ::slotted([slot="footer"]) { display: block; box-sizing: border-box; }
    @media print {
      :host { background: none; padding: 0; min-width: 0; min-height: 0; }
      .sheet {
        width: auto; margin: 0; box-shadow: none; border-radius: 0;
        padding: 0 var(--doc-page-margin);
      }
      /* The thead/tfoot spacers repeat on every page, so they carry the
       * vertical page margin (which the sheet's own padding cannot, since
       * that padding is consumed once on the first/last page). The running
       * header/footer are fixed inside that band. */
      /* The 0.35in is breathing room between a running header/footer and
       * the body; without one the spacer is exactly the page margin, so a
       * margin="0" full-bleed document gets truly full-bleed pages. */
      .hdr-space { height: max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))); }
      .ftr-space { height: max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))); }
      /* WebKit flowing documents: @page carries the vertical margin (see
       * _syncPrintPageRule), so the spacers keep only whatever a running
       * header/footer needs BEYOND it — page 1 would otherwise double its
       * top inset. Paginated sheets already zero their spacers above. */
      .sheet.wk-print:not(.paginated) .hdr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))) - var(--doc-page-margin))); }
      .sheet.wk-print:not(.paginated) .ftr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))) - var(--doc-page-margin))); }
      ::slotted([slot="header"]) {
        position: fixed; top: 0; left: 0; right: 0; margin: 0;
        padding: calc(var(--doc-page-margin) * 0.45) var(--doc-page-margin) 0;
      }
      ::slotted([slot="footer"]) {
        position: fixed; bottom: 0; left: 0; right: 0; margin: 0;
        padding: 0 var(--doc-page-margin) calc(var(--doc-page-margin) * 0.45);
      }
    }
  `;
  class DocPage extends HTMLElement {
    static get observedAttributes() {
      return ['size', 'width', 'height', 'margin', 'orientation', 'content-width', 'content-height'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._mo = typeof MutationObserver === 'function' ? new MutationObserver(() => this._scheduleMeasure()) : null;
    }

    /** The named paper's [w, h], swapped when orientation="landscape".
     *  Only the named size swaps — explicit width/height are exact values
     *  the author already oriented. */
    _paperSize() {
      const named = PAPER[(this.getAttribute('size') || '').toLowerCase()] || PAPER.letter;
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? [named[1], named[0]] : named;
    }
    get pageWidth() {
      return safeLen(this.getAttribute('width'), this._paperSize()[0]);
    }
    get pageHeight() {
      return safeLen(this.getAttribute('height'), this._paperSize()[1]);
    }
    get pageMargin() {
      return safeLen(this.getAttribute('margin'), '0.75in');
    }

    /** Scaled-fit mode's content box [w, h] as CSS lengths, or null when
     *  the mode is off (either attribute missing/invalid/zero — a partial
     *  declaration falls back to normal flow rather than guessing). */
    _contentFit() {
      const w = safeLen(this.getAttribute('content-width'), null);
      const h = safeLen(this.getAttribute('content-height'), null);
      if (!w || !h) return null;
      const wPx = toPx(w),
        hPx = toPx(h);
      return wPx > 0 && hPx > 0 ? [w, h, wPx, hPx] : null;
    }
    connectedCallback() {
      if (!this._sheet) this._render();
      this._syncSize();
      this._syncPrintPageRule();
      this._ensureTextWrapDefaults();
      this._ensureOwnsPrintMeta();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      if (this._mo) this._mo.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      this._onResize = () => this._scheduleMeasure();
      window.addEventListener('resize', this._onResize);
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => this._scheduleMeasure());
      }
      this._scheduleMeasure();
    }
    disconnectedCallback() {
      window.removeEventListener('resize', this._onResize);
      if (this._mo) this._mo.disconnect();
      if (this._raf) {
        cancelAnimationFrame(this._raf);
        this._raf = null;
      }
      // Drop the head rules when the last doc-page leaves, so a deleted
      // document's @page geometry and text-wrap defaults can't apply to
      // whatever replaces it.
      const survivor = document.querySelector('doc-page');
      if (!survivor) {
        ['doc-page-print', 'doc-page-text-wrap', 'doc-page-owns-print', 'doc-page-fixed-size', 'doc-page-print-sizing'].forEach(id => {
          const tag = document.getElementById(id);
          if (tag) tag.remove();
        });
        // A live deck-stage deferred its own print-sizing meta to ours —
        // hand the page-global meta over so the deck isn't left unmarked.
        const deck = document.querySelector('deck-stage');
        if (deck && typeof deck._ensurePrintSizingMeta === 'function') {
          deck._ensurePrintSizingMeta();
        }
      } else {
        // A departed owner hands each page-global meta to whatever
        // doc-page remains (or it's removed).
        if (typeof survivor._syncFixedSizeMeta === 'function') {
          survivor._syncFixedSizeMeta();
        }
        if (typeof survivor._syncPrintSizingMeta === 'function') {
          survivor._syncPrintSizingMeta();
        }
      }
    }
    attributeChangedCallback() {
      if (!this._sheet) return;
      this._syncSize();
      this._syncPrintPageRule();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      this._scheduleMeasure();
    }
    _render() {
      this._root.innerHTML = `
        <style>${stylesheet}</style>
        <style id="vars"></style>
        <div class="sheet" data-screen-label="Document">
          <table class="frame" role="presentation">
            <thead><tr><th><div class="hdr-space"><slot name="header"></slot></div></th></tr></thead>
            <tbody><tr><td class="body"><div class="fit-box"><div class="fit"><slot></slot></div></div></td></tr></tbody>
            <tfoot><tr><td><div class="ftr-space"><slot name="footer"></slot></div></td></tr></tfoot>
          </table>
        </div>`;
      this._sheet = this._root.querySelector('.sheet');
      this._vars = this._root.getElementById('vars');
    }

    /** Runtime sizing lives in a shadow <style> :host rule, never on the
     *  light-DOM host element, so serialize-persist can't write it back. */
    _syncSize(hdrH, ftrH) {
      // Scaled-fit mode: content at its authored size, scaled onto the
      // printable area (page minus margins on both axes). The factor is a
      // plain number var so calc(length * number) stays valid; 4 decimals
      // keeps the shadow style stable across re-measures. Upscaling is
      // allowed — print transforms are vector, so text and CSS stay crisp
      // (raster images soften, which the catalog bullet warns about).
      const fit = this._contentFit();
      let fitVars = '';
      if (fit) {
        const marginPx = toPx(this.pageMargin) || 0;
        const availW = toPx(this.pageWidth) - 2 * marginPx;
        const availH = toPx(this.pageHeight) - 2 * marginPx;
        const scale = Math.min(availW / fit[2], availH / fit[3]);
        if (scale > 0 && Number.isFinite(scale)) {
          fitVars = '--doc-fit-w:' + fit[0] + ';' + '--doc-fit-h:' + fit[1] + ';' + '--doc-fit-scale:' + scale.toFixed(4) + ';';
        }
      }
      this._sheet.classList.toggle('fit-mode', !!fitVars);
      // Numeric w/h ratio for the paginated page cards' aspect-ratio —
      // aspect-ratio takes a number, not a length ratio, so compute it
      // here (CSS length division isn't portable). 6 decimals keeps the
      // shadow style stable across re-syncs.
      const arW = toPx(this.pageWidth);
      const arH = toPx(this.pageHeight);
      const ar = arW > 0 && arH > 0 ? (arW / arH).toFixed(6) : '0.772727';
      this._vars.textContent = ':host{' + fitVars + '--doc-page-ar:' + ar + ';' + '--doc-page-w:' + this.pageWidth + ';' + '--doc-page-h:' + this.pageHeight + ';' + '--doc-page-margin:' + this.pageMargin + ';' + '--doc-hdr-h:' + (hdrH || 0) + 'px;' + '--doc-ftr-h:' + (ftrH || 0) + 'px;' + '--doc-hdr-pad:' + (hdrH ? '0.35in' : '0px') + ';' + '--doc-ftr-pad:' + (ftrH ? '0.35in' : '0px') + '}';
    }

    /** @page is a no-op inside shadow DOM, so the rule lives in <head>.
     *  Re-appended on every sync so it stays last in source order — the
     *  @page cascade is source-order per descriptor, so this rule wins
     *  over any other @page rule in the document.
     *
     *  The @page SIZE is pinned where the page box IS part of the design:
     *  explicit-fixed-size mode (width + height authored), scaled-fit
     *  mode (the named sheet the fit targets), and explicit pagination
     *  (the named size the cards share — so card and sheet agree on
     *  every print path, and the export path's chosen paper overrides
     *  BOTH with one later rule). For FLOWING documents no paper size is
     *  emitted at all — the true size comes from the user's preference,
     *  injected by the export path or chosen in the print dialog — so a
     *  flowing document never fights the paper it lands on.
     *  margin: 0 is emitted in every mode: it leaves Chrome no margin box
     *  to draw its date/URL/page-count header in, and the visual margin
     *  lives on the sheet's own padding. */
    _syncPrintPageRule() {
      const id = 'doc-page-print';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      document.head.appendChild(tag);
      // Three print-geometry regimes:
      // - true-size: the page IS the design — pin its exact size.
      // - scaled-fit (content-width/height): the fit factor is computed
      //   against the NAMED paper's printable area, so that paper must
      //   stay pinned or the scaled content overflows a smaller sheet
      //   (the export path re-fits and re-pins at print time on top).
      // - default modes: no paper size — but landscape still needs the
      //   paper-agnostic 'size: landscape' keyword, because the size
      //   descriptor is what carries orientation; without it a landscape
      //   document prints portrait whenever nothing injects a size.
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      // Explicit pagination pins the page box to the SAME values that
      // size the cards (the named size by default, the export path's
      // chosen paper when its later rule overrides both) — card and
      // sheet agree on every print path, and a mismatched real paper
      // shrinks-to-fit in the dialog instead of clipping a Letter card
      // on A4. Declared before the paginated read below so both derive
      // from one check.
      const paginatedNow = this.querySelector(':scope > .page') !== null;
      const sizeDescriptor = this._trueSizePx() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : this._contentFit() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : paginatedNow ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : landscape ? 'size: landscape; ' : '';
      // WebKit never repeats the thead/tfoot spacers that carry a flowing
      // document's vertical page margins (see WK_PRINT above), so pages
      // after the first print edge-to-edge there. Carry the VERTICAL
      // margins on @page for WebKit instead, and the shadow print CSS
      // trims the first-page spacers by the same amount (.sheet.wk-print
      // rules). Horizontal inset stays on the sheet's own padding in
      // every engine. Blink keeps margin: 0 (a nonzero margin there
      // re-opens the box Chrome draws its header furniture in). One cost,
      // learned in testing: Safari's own date/URL headers are a USER
      // dialog setting ("Print headers and footers") that renders in the
      // margin area when room exists — margin: 0 only suppressed it by
      // leaving no room, and no CSS controls it. The export dialog's
      // Safari guide teaches turning the setting off for flowing
      // documents. Explicitly paginated and fixed-size documents keep
      // margin: 0 everywhere: their pages ARE the sheet.
      const wkFlowing = WK_PRINT && !paginatedNow && !this._trueSizePx() && !this._contentFit();
      const marginDescriptor = wkFlowing ? 'margin: ' + this.pageMargin + ' 0; ' : 'margin: 0; ';
      // Shadow-internal marker (never serialized), kept in lockstep with
      // the @page decision above: the print CSS trims the first-page
      // spacers ONLY while @page actually carries the margins — a
      // true-size or scaled-fit sheet keeps margin: 0 and must keep its
      // spacers too. Re-synced here so attribute changes and pagination
      // flips move both together.
      if (this._sheet) this._sheet.classList.toggle('wk-print', wkFlowing);
      tag.textContent = '@page { ' + sizeDescriptor + marginDescriptor + '} ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; height: auto !important; overflow: visible !important; } ' + 'h1,h2,h3,h4,h5,h6 { break-after: avoid; } ' + 'figure,pre,blockquote,img,svg,tr { break-inside: avoid; } ' + 'p,li { orphans: 3; widows: 3; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; ' + 'backdrop-filter: none !important; -webkit-backdrop-filter: none !important; } ' + '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }

    /** Typographic defaults for document text: balance headings, avoid
     *  widowed/orphaned words in body copy (browsers without text-wrap
     *  support drop the declarations). Zero-specificity via :where() so
     *  any text-wrap authored on those elements wins; document-level so the
     *  rules reach the slotted (light DOM) content — shadow styles can't.
     *  data-omelette-injected marks the tag for the host editor to strip
     *  at serialize, so it is never written back as authored source. */
    _ensureTextWrapDefaults() {
      if (document.getElementById('doc-page-text-wrap')) return;
      const tag = document.createElement('style');
      tag.id = 'doc-page-text-wrap';
      tag.setAttribute('data-omelette-injected', '');
      tag.textContent = ':where(h1,h2,h3,h4,h5,h6){text-wrap:balance}' + ':where(p,li,blockquote,figcaption){text-wrap:pretty}';
      document.head.appendChild(tag);
    }

    /** Declares that this document owns its print CSS. The instant-PDF
     *  export checks for the meta by NAME PRESENCE alone (content is
     *  ignored) and skips its automatic print-CSS injections, so the
     *  component's @page geometry is never overridden by a heuristic.
     *  data-omelette-injected keeps it out of serialized source. */
    _ensureOwnsPrintMeta() {
      if (document.getElementById('doc-page-owns-print')) return;
      const tag = document.createElement('meta');
      tag.id = 'doc-page-owns-print';
      tag.name = 'omelette-owns-print';
      tag.content = 'true';
      tag.setAttribute('data-omelette-injected', '');
      document.head.appendChild(tag);
    }

    /** This page's valid true-size page box (explicit width AND height)
     *  as [w, h] px ints, or null when the mode is off. */
    _trueSizePx() {
      if (!safeLen(this.getAttribute('width'), null) || !safeLen(this.getAttribute('height'), null)) return null;
      const w = Math.round(toPx(this.pageWidth));
      const h = Math.round(toPx(this.pageHeight));
      return w > 0 && h > 0 ? [w, h] : null;
    }

    /** True-size pages (explicit width AND height) also declare the page
     *  box as the preview size: the in-app preview reads
     *  meta[name="omelette-fixed-size"] (content "W,H" in px ints) and
     *  scales the sheet into view — without it an 18in poster previews at
     *  true size with scrollbars. Never overrides an author-set meta
     *  (only the component's own id is managed). The meta is page-global
     *  while doc-page instances are not, so every sync recomputes the
     *  page-wide owner — the first connected true-size doc-page — and a
     *  non-true-size sibling's sync can never delete the owner's meta.
     *  Removed when no true-size page remains (the owner's disconnect
     *  re-syncs via any survivor) or when an author-set meta exists. */
    _syncFixedSizeMeta() {
      const id = 'doc-page-fixed-size';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-fixed-size"]:not([data-omelette-injected])');
      // The page-wide owner, not this instance: an upgraded true-size page
      // anywhere in the document keeps the meta alive and sized.
      let box = null;
      for (const el of document.querySelectorAll('doc-page')) {
        box = typeof el._trueSizePx === 'function' ? el._trueSizePx() : null;
        if (box) break;
      }
      if (!box || authored) {
        if (own) own.remove();
        return;
      }
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-fixed-size';
      tag.content = box[0] + ',' + box[1];
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }

    /** This page's print-sizing mode: 'fixed' when an explicit width AND
     *  height are authored (the page is the design's own size), else the
     *  default paper in the authored orientation. */
    _printSizingMode() {
      if (this._trueSizePx()) return 'fixed';
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? 'default-landscape' : 'default-portrait';
    }

    /** Announces the print-sizing mode to the host app:
     *  meta[name="omelette-print-sizing"] with content 'default-portrait',
     *  'default-landscape', or 'fixed' (fixed pages also carry the
     *  omelette-fixed-size meta with the page box in px). The export path
     *  probes it to decide what true paper size to inject at print time —
     *  in the default modes the component emits no paper size of its own.
     *  Same page-global ownership rules as the fixed-size meta above:
     *  first connected doc-page owns it, an authored meta is never
     *  overridden, removed when no doc-page remains. */
    _syncPrintSizingMeta() {
      const id = 'doc-page-print-sizing';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-print-sizing"]:not([data-omelette-injected])');
      // A fixed page wins outright (mirroring the fixed-size loop above,
      // so the two metas can never contradict each other in a mixed
      // multi-page document); otherwise the first page's mode holds.
      let mode = null;
      for (const el of document.querySelectorAll('doc-page')) {
        if (typeof el._printSizingMode !== 'function') continue;
        const m = el._printSizingMode();
        if (m === 'fixed') {
          mode = m;
          break;
        }
        if (mode === null) mode = m;
      }
      if (!mode || authored) {
        if (own) own.remove();
        return;
      }
      // A deck-stage that connected first injected its own meta and
      // defers to any existing one — take it over, or the document ends
      // up with two conflicting injected metas (a doc-page page is the
      // document; the deck re-ensures its meta if every doc-page leaves).
      const deckMeta = document.getElementById('deck-stage-print-sizing');
      if (deckMeta) deckMeta.remove();
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-print-sizing';
      tag.content = mode;
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }
    _scheduleMeasure() {
      if (this._raf) return;
      this._raf = requestAnimationFrame(() => {
        this._raf = null;
        this._measure();
      });
    }

    /** Slot heights feed the print spacers (--doc-hdr-h / --doc-ftr-h), so
     *  they re-measure on content mutation, resize, and font load. The
     *  same pass detects explicit pagination (direct .page children) and
     *  toggles the sheet between the flowing-document card and the
     *  page-per-card stack — content edits can add or remove pages at any
     *  time, so this tracks the same mutations the measurement does. */
    _measure() {
      const hdr = this.querySelector(':scope > [slot="header"]');
      const ftr = this.querySelector(':scope > [slot="footer"]');
      const wasPaginated = this._sheet.classList.contains('paginated');
      this._sheet.classList.toggle('paginated', this.querySelector(':scope > .page') !== null);
      // The WebKit @page margin is flowing-only, so a pagination flip
      // must re-emit the rule (content edits can add or remove .page
      // sections at any time).
      if (this._sheet.classList.contains('paginated') !== wasPaginated) {
        this._syncPrintPageRule();
      }
      this._syncSize(hdr ? hdr.offsetHeight : 0, ftr ? ftr.offsetHeight : 0);
    }
  }
  if (!customElements.get('doc-page')) {
    customElements.define('doc-page', DocPage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "doc-page.js", error: String((e && e.message) || e) }); }

// ui_kits/website/about.jsx
try { (() => {
function About() {
  const ledger = React.useMemo(() => document.getElementById('ledger-src').innerHTML, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    id: "about",
    className: "v2-sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v2-wrap v2-about"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v2-eb"
  }, "What is AFA"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "v2-statement"
  }, "Private dinners for the people bringing AI into financial services."), /*#__PURE__*/React.createElement("div", {
    className: "v2-about-pts"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "The experience"), /*#__PURE__*/React.createElement("p", null, "Curated and hosted in exceptional venues, so every guest has a memorable evening.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "The people"), /*#__PURE__*/React.createElement("p", null, "Our in-house matchmaking system seats every guest among the brightest minds, with connections that last long after the dinner ends.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Worth your time"), /*#__PURE__*/React.createElement("p", null, "Less noise, more signal. Straight to the answers our guests came for.")))))), /*#__PURE__*/React.createElement("section", {
    className: "v2-punch"
  }, /*#__PURE__*/React.createElement("pre", {
    className: "v2-ledger",
    "aria-hidden": "true",
    dangerouslySetInnerHTML: {
      __html: ledger
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "v2-wrap",
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("span", {
    className: "v2-punch-l"
  }, "AI is changing what financial services can do."), /*#__PURE__*/React.createElement("span", {
    className: "v2-punch-l"
  }, "Nobody figures that out alone.")))));
}
Object.assign(window, {
  About
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/about.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/apply.jsx
try { (() => {
function Apply() {
  const blank = {
    name: '',
    email: '',
    company: '',
    want: ''
  };
  const [f, setF] = React.useState(blank);
  const [sent, setSent] = React.useState(false);
  const set = k => e => setF({
    ...f,
    [k]: e.target.value
  });
  const ready = f.name.trim() && f.email.includes('@') && f.company.trim();
  return /*#__PURE__*/React.createElement("section", {
    id: "apply",
    className: "v2-apply"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v2-wrap v2-apply-in"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "v2-eb v2-eb-soft"
  }, "Partner with us"), /*#__PURE__*/React.createElement("h2", null, "Become a partner for the next dinner."), /*#__PURE__*/React.createElement("p", null, "Tell us about your company and your goals.")), sent ? /*#__PURE__*/React.createElement("div", {
    className: "v2-form v2-sent"
  }, /*#__PURE__*/React.createElement("b", null, "Thanks, ", f.name.split(' ')[0], "."), /*#__PURE__*/React.createElement("p", null, "We will be in touch at ", f.email, "."), /*#__PURE__*/React.createElement("button", {
    className: "v2-btn v2-btn-line",
    onClick: () => {
      setSent(false);
      setF(blank);
    }
  }, "Send another")) : /*#__PURE__*/React.createElement("div", {
    className: "v2-form"
  }, /*#__PURE__*/React.createElement("input", {
    placeholder: "Name",
    value: f.name,
    onChange: set('name')
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Work email",
    value: f.email,
    onChange: set('email')
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Company",
    value: f.company,
    onChange: set('company')
  }), /*#__PURE__*/React.createElement("textarea", {
    placeholder: "What are your goals for the dinner?",
    value: f.want,
    onChange: set('want')
  }), /*#__PURE__*/React.createElement("button", {
    className: "v2-btn v2-btn-cream v2-btn-lg",
    disabled: !ready,
    onClick: () => setSent(true)
  }, "Become a partner for the next dinner."))));
}
Object.assign(window, {
  Apply
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/apply.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/dinners.jsx
try { (() => {
function Dinners({
  onApply
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "dinners",
    className: "v2-sec v2-sec-rule"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v2-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v2-eb"
  }, "Dinners"), /*#__PURE__*/React.createElement("div", {
    className: "v2-dinners"
  }, /*#__PURE__*/React.createElement("article", {
    className: "v2-dinner is-next"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/cover-ledger-london.png",
    alt: "AFA London, 3 December"
  }), /*#__PURE__*/React.createElement("div", {
    className: "v2-dinner-txt"
  }, /*#__PURE__*/React.createElement("span", {
    className: "v2-tag"
  }, "Next"), /*#__PURE__*/React.createElement("h3", null, "London"), /*#__PURE__*/React.createElement("p", null, "3 December \xB7 Private dinner"), /*#__PURE__*/React.createElement("a", {
    className: "v2-btn v2-btn-cream",
    href: "https://luma.com/g5d9e8zv",
    target: "_blank",
    rel: "noreferrer"
  }, "Get your seat at the next dinner."))), /*#__PURE__*/React.createElement("article", {
    className: "v2-dinner"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/lisbon/dsc06856.jpg",
    alt: "Guests at the Lisbon dinner, Cap\xEDtulo",
    style: {
      objectPosition: '50% 62%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "v2-dinner-txt"
  }, /*#__PURE__*/React.createElement("span", {
    className: "v2-tag"
  }, "Previously"), /*#__PURE__*/React.createElement("h3", null, "Lisbon"), /*#__PURE__*/React.createElement("p", null, "21 September at ", /*#__PURE__*/React.createElement("a", {
    href: "https://capitulo.pt/",
    target: "_blank",
    rel: "noreferrer"
  }, "Cap\xEDtulo Restaurant & Bar"), "."))))));
}
Object.assign(window, {
  Dinners
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/dinners.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/footer.jsx
try { (() => {
const {
  Logo
} = window.AFADesignSystem_93293e;
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "v2-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v2-wrap v2-footer-in"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    lockup: "cream-transparent",
    size: 28,
    assetBase: "../../assets"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      letterSpacing: '-.02em'
    }
  }, "Agentic Finance Alliance")), /*#__PURE__*/React.createElement("div", {
    className: "v2-footer-links"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#about"
  }, "About"), /*#__PURE__*/React.createElement("a", {
    href: "#how"
  }, "Why Join"), /*#__PURE__*/React.createElement("a", {
    href: "#dinners"
  }, "Dinners"), /*#__PURE__*/React.createElement("a", {
    href: "#partners"
  }, "Partners"), /*#__PURE__*/React.createElement("a", {
    href: "#apply"
  }, "Become a partner"))));
}
Object.assign(window, {
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/gallery.jsx
try { (() => {
const V2_GALLERY = [['dsc06456', '50% 40%'], ['dsc06648', '50% 45%'], ['dsc06621', '50% 40%'], ['dsc06719', '50% 40%'], ['dsc06722', '50% 40%'], ['dsc07025', '50% 40%'], ['dsc06689', '50% 45%'], ['dsc06546', '50% 45%']];
function Gallery() {
  return /*#__PURE__*/React.createElement("section", {
    className: "v2-sec v2-sec-rule"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v2-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v2-gallery-h"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "v2-eb"
  }, "From the table"), /*#__PURE__*/React.createElement("h2", {
    className: "v2-h2"
  }, "Lisbon, in pictures.")), /*#__PURE__*/React.createElement("p", {
    className: "v2-lede",
    style: {
      margin: 0
    }
  }, "21 September at ", /*#__PURE__*/React.createElement("a", {
    href: "https://capitulo.pt/",
    target: "_blank",
    rel: "noreferrer"
  }, "Cap\xEDtulo"), ".")), /*#__PURE__*/React.createElement("div", {
    className: "v2-gallery"
  }, V2_GALLERY.map(([f, pos]) => /*#__PURE__*/React.createElement("img", {
    key: f,
    src: '../../assets/lisbon/' + f + '.jpg',
    alt: "Guests at the AFA Lisbon dinner",
    loading: "lazy",
    style: {
      objectPosition: pos
    }
  })))));
}
Object.assign(window, {
  Gallery
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/gallery.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/hero.jsx
try { (() => {
function Hero({
  onApply
}) {
  const [hasVideo, setHasVideo] = React.useState(true);
  return /*#__PURE__*/React.createElement("header", {
    id: "top",
    className: "v2-hero"
  }, hasVideo ? /*#__PURE__*/React.createElement("video", {
    className: "v2-hero-media",
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    poster: "../../assets/lisbon/dsc06462.jpg",
    onError: () => setHasVideo(false)
  }, /*#__PURE__*/React.createElement("source", {
    src: "../../assets/aftermovie-2.mp4",
    type: "video/mp4",
    onError: () => setHasVideo(false)
  })) : /*#__PURE__*/React.createElement("img", {
    className: "v2-hero-media",
    src: "../../assets/lisbon/dsc06462.jpg",
    alt: "",
    style: {
      objectPosition: '50% 30%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "v2-hero-tint"
  }), /*#__PURE__*/React.createElement("div", {
    className: "v2-wrap v2-hero-in"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "v2-h1"
  }, "Where the future of money and AI gets built."), /*#__PURE__*/React.createElement("p", {
    className: "v2-hero-sub"
  }, "Curated dinners for the founders, investors, leaders and creators working where AI meets payments, fintech, banking and insurance."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap',
      marginTop: 34
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "v2-btn v2-btn-cream v2-btn-lg",
    href: "https://luma.com/g5d9e8zv",
    target: "_blank",
    rel: "noreferrer"
  }, "Get your seat at the next dinner."))));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/how.jsx
try { (() => {
function MatchCard() {
  const rows = [['guest_14', 'guest_03', 'payments × capital', 'intro sent'], ['guest_07', 'guest_22', 'insurtech × distribution', 'matched'], ['guest_19', 'guest_11', 'banking × agents', 'matched'], ['guest_02', 'guest_16', 'fintech × hiring', 'intro sent']];
  return /*#__PURE__*/React.createElement("div", {
    className: "v2-match"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v2-match-h"
  }, /*#__PURE__*/React.createElement("span", null, "AFA matchmaking"), /*#__PURE__*/React.createElement("span", null, "London \xB7 3 December")), rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "v2-match-r"
  }, /*#__PURE__*/React.createElement("code", null, r[0], " => ", r[1]), /*#__PURE__*/React.createElement("span", null, r[2]), /*#__PURE__*/React.createElement("b", null, r[3]))));
}
const V2_STEPS = [{
  n: '01',
  t: 'Curated guest list',
  d: 'We curate every guest list. We select people building, funding, running or speaking about the same future, so every conversation leads somewhere.',
  img: '../../assets/lisbon/dsc06819.jpg',
  pos: '50% 55%'
}, {
  n: '02',
  t: 'Matchmaking',
  d: 'We look across our network for the people who could be valuable to you, and we bring them to the dinner.',
  img: '../../assets/lisbon/dsc06756.jpg',
  pos: '50% 55%'
}, {
  n: '03',
  t: 'At the frontier',
  d: 'Each table sits where AI meets financial services: payments, fintech, banks and insurtech. The people building it, funding it and running it.',
  img: '../../assets/lisbon/dsc06608.jpg',
  pos: '50% 52%'
}];
function How() {
  return /*#__PURE__*/React.createElement("section", {
    id: "how",
    className: "v2-sec v2-sec-rule"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v2-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v2-eb"
  }, "Why Join"), /*#__PURE__*/React.createElement("h2", {
    className: "v2-h2"
  }, "More than a dinner."), /*#__PURE__*/React.createElement("div", {
    className: "v2-steps"
  }, V2_STEPS.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    className: 'v2-step' + (i % 2 ? ' is-flip' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "v2-step-media"
  }, s.card ? /*#__PURE__*/React.createElement(MatchCard, null) : /*#__PURE__*/React.createElement("img", {
    src: s.img,
    alt: "",
    style: {
      objectPosition: s.pos
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "v2-step-txt"
  }, /*#__PURE__*/React.createElement("span", {
    className: "v2-num"
  }, s.n), /*#__PURE__*/React.createElement("h3", null, s.t), /*#__PURE__*/React.createElement("p", null, s.d)))))));
}
Object.assign(window, {
  How
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/how.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/nav.jsx
try { (() => {
const {
  Button,
  Logo
} = window.AFADesignSystem_93293e;
function Nav({
  onApply
}) {
  const [solid, setSolid] = React.useState(false);
  React.useEffect(() => {
    const on = () => setSolid(window.scrollY > window.innerHeight * 0.7);
    on();
    window.addEventListener('scroll', on, {
      passive: true
    });
    return () => window.removeEventListener('scroll', on);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: 'v2-nav' + (solid ? ' is-solid' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "v2-wrap v2-nav-in"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    className: "v2-brand"
  }, /*#__PURE__*/React.createElement(Logo, {
    lockup: solid ? 'transparent' : 'cream-transparent',
    size: 30,
    assetBase: "../../assets"
  }), /*#__PURE__*/React.createElement("span", null, "Agentic Finance Alliance")), /*#__PURE__*/React.createElement("nav", {
    className: "v2-links"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#about"
  }, "About"), /*#__PURE__*/React.createElement("a", {
    href: "#how"
  }, "Why Join"), /*#__PURE__*/React.createElement("a", {
    href: "#dinners"
  }, "Dinners"), /*#__PURE__*/React.createElement("a", {
    href: "#partners"
  }, "Partners")), /*#__PURE__*/React.createElement("a", {
    className: solid ? 'v2-btn v2-btn-green' : 'v2-btn v2-btn-cream',
    href: "https://luma.com/g5d9e8zv",
    target: "_blank",
    rel: "noreferrer"
  }, "Get your seat at the next dinner.")));
}
Object.assign(window, {
  Nav
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/partners.jsx
try { (() => {
const V2_GET = [['Priority intros', 'First calls and intros with the guests.'], ['Video and PR', 'A dedicated video team and strategic PR.'], ['Priority access', 'Priority access to market data and future events.'], ['Extra seats', 'Bring more business partners and team members.']];
function Partners() {
  return /*#__PURE__*/React.createElement("section", {
    id: "partners",
    className: "v2-sec v2-sec-rule"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v2-wrap v2-partners"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "v2-eb"
  }, "Partners"), /*#__PURE__*/React.createElement("h2", {
    className: "v2-h2"
  }, "What you get as a partner."), /*#__PURE__*/React.createElement("p", {
    className: "v2-lede"
  }, "Each dinner is made possible by a small number of partners.")), /*#__PURE__*/React.createElement("div", {
    className: "v2-get"
  }, V2_GET.map(([t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: t
  }, /*#__PURE__*/React.createElement("span", {
    className: "v2-num"
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("b", null, t), /*#__PURE__*/React.createElement("p", null, d))))));
}
Object.assign(window, {
  Partners
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/partners.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/table.jsx
try { (() => {
const V2_LOGOS = [['mastercard-full.png', 'Mastercard', 32], ['anchorage.png', 'Anchorage Digital', 26], ['anthemis.png', 'Anthemis', 16], ['crossmint.png', 'Crossmint', 14], ['sponsor-wordmark.svg', 'Humanos', 19], ['vest-markets.png', 'Vest Markets', 26], ['temerity.png', 'Temerity Capital Partners', 38]];
function AtTheTable() {
  return /*#__PURE__*/React.createElement("section", {
    className: "v2-logos-band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v2-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v2-eb",
    style: {
      textAlign: 'center'
    }
  }, "Guests at our tables have come from"), /*#__PURE__*/React.createElement("div", {
    className: "v2-logos"
  }, V2_LOGOS.map(([f, a, h]) => /*#__PURE__*/React.createElement("img", {
    key: f,
    src: '../../assets/logos/' + f,
    alt: a,
    style: {
      height: h
    }
  })))));
}
Object.assign(window, {
  AtTheTable
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/table.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/who.jsx
try { (() => {
const V2_WHO = [['Founders', 'Building what AI makes possible in finance.'], ['Investors', 'Backing the next wave of financial infrastructure.'], ['Leaders', 'Running payments, banks and insurers at scale.'], ['Creators', 'The voices promoting these companies and telling their story.']];
function Who() {
  return /*#__PURE__*/React.createElement("section", {
    className: "v2-sec v2-sec-rule"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v2-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v2-eb"
  }, "Who sits at the table"), /*#__PURE__*/React.createElement("div", {
    className: "v2-who"
  }, V2_WHO.map(([t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t
  }, /*#__PURE__*/React.createElement("h3", null, t), /*#__PURE__*/React.createElement("p", null, d))))));
}
Object.assign(window, {
  Who
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/who.jsx", error: String((e && e.message) || e) }); }

// website-v2/about.jsx
try { (() => {
function About() {
  const ledger = React.useMemo(() => document.getElementById('ledger-src').innerHTML, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    id: "about",
    className: "v2-sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v2-wrap v2-about"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v2-eb"
  }, "What is AFA"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "v2-statement"
  }, "Private dinners for the people bringing AI into financial services."), /*#__PURE__*/React.createElement("div", {
    className: "v2-about-pts"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "The experience"), /*#__PURE__*/React.createElement("p", null, "Curated and hosted in exceptional venues, so every guest has a memorable evening.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "The people"), /*#__PURE__*/React.createElement("p", null, "Our in-house matchmaking system seats every guest among the brightest minds, with connections that last long after the dinner ends.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Worth your time"), /*#__PURE__*/React.createElement("p", null, "Less noise, more signal. Straight to the answers our guests came for.")))))), /*#__PURE__*/React.createElement("section", {
    className: "v2-punch"
  }, /*#__PURE__*/React.createElement("pre", {
    className: "v2-ledger",
    "aria-hidden": "true",
    dangerouslySetInnerHTML: {
      __html: ledger
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "v2-wrap",
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("span", {
    className: "v2-punch-l"
  }, "AI is changing what financial services can do."), /*#__PURE__*/React.createElement("span", {
    className: "v2-punch-l"
  }, "Nobody figures that out alone.")))));
}
Object.assign(window, {
  About
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "website-v2/about.jsx", error: String((e && e.message) || e) }); }

// website-v2/apply.jsx
try { (() => {
function Apply() {
  const blank = {
    name: '',
    email: '',
    company: '',
    want: ''
  };
  const [f, setF] = React.useState(blank);
  const [sent, setSent] = React.useState(false);
  const set = k => e => setF({
    ...f,
    [k]: e.target.value
  });
  const ready = f.name.trim() && f.email.includes('@') && f.company.trim();
  return /*#__PURE__*/React.createElement("section", {
    id: "apply",
    className: "v2-apply"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v2-wrap v2-apply-in"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "v2-eb v2-eb-soft"
  }, "Partner with us"), /*#__PURE__*/React.createElement("h2", null, "Become a partner for the next dinner."), /*#__PURE__*/React.createElement("p", null, "Tell us about your company and your goals.")), sent ? /*#__PURE__*/React.createElement("div", {
    className: "v2-form v2-sent"
  }, /*#__PURE__*/React.createElement("b", null, "Thanks, ", f.name.split(' ')[0], "."), /*#__PURE__*/React.createElement("p", null, "We will be in touch at ", f.email, "."), /*#__PURE__*/React.createElement("button", {
    className: "v2-btn v2-btn-line",
    onClick: () => {
      setSent(false);
      setF(blank);
    }
  }, "Send another")) : /*#__PURE__*/React.createElement("div", {
    className: "v2-form"
  }, /*#__PURE__*/React.createElement("input", {
    placeholder: "Name",
    value: f.name,
    onChange: set('name')
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Work email",
    value: f.email,
    onChange: set('email')
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Company",
    value: f.company,
    onChange: set('company')
  }), /*#__PURE__*/React.createElement("textarea", {
    placeholder: "What are your goals for the dinner?",
    value: f.want,
    onChange: set('want')
  }), /*#__PURE__*/React.createElement("button", {
    className: "v2-btn v2-btn-cream v2-btn-lg",
    disabled: !ready,
    onClick: () => setSent(true)
  }, "Become a partner for the next dinner."))));
}
Object.assign(window, {
  Apply
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "website-v2/apply.jsx", error: String((e && e.message) || e) }); }

// website-v2/dinners.jsx
try { (() => {
function Dinners({
  onApply
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "dinners",
    className: "v2-sec v2-sec-rule"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v2-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v2-eb"
  }, "Dinners"), /*#__PURE__*/React.createElement("div", {
    className: "v2-dinners"
  }, /*#__PURE__*/React.createElement("article", {
    className: "v2-dinner is-next"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/cover-ledger-london.png",
    alt: "AFA London, 3 December"
  }), /*#__PURE__*/React.createElement("div", {
    className: "v2-dinner-txt"
  }, /*#__PURE__*/React.createElement("span", {
    className: "v2-tag"
  }, "Next"), /*#__PURE__*/React.createElement("h3", null, "London"), /*#__PURE__*/React.createElement("p", null, "3 December \xB7 Private dinner"), /*#__PURE__*/React.createElement("a", {
    className: "v2-btn v2-btn-cream",
    href: "https://luma.com/g5d9e8zv",
    target: "_blank",
    rel: "noreferrer"
  }, "Get your seat at the next dinner."))), /*#__PURE__*/React.createElement("article", {
    className: "v2-dinner"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/lisbon/dsc06856.jpg",
    alt: "Guests at the Lisbon dinner, Cap\xEDtulo",
    style: {
      objectPosition: '50% 62%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "v2-dinner-txt"
  }, /*#__PURE__*/React.createElement("span", {
    className: "v2-tag"
  }, "Previously"), /*#__PURE__*/React.createElement("h3", null, "Lisbon"), /*#__PURE__*/React.createElement("p", null, "21 September at ", /*#__PURE__*/React.createElement("a", {
    href: "https://capitulo.pt/",
    target: "_blank",
    rel: "noreferrer"
  }, "Cap\xEDtulo Restaurant & Bar"), "."))))));
}
Object.assign(window, {
  Dinners
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "website-v2/dinners.jsx", error: String((e && e.message) || e) }); }

// website-v2/footer.jsx
try { (() => {
const {
  Logo
} = window.AFADesignSystem_93293e;
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "v2-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v2-wrap v2-footer-in"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    lockup: "cream-transparent",
    size: 28,
    assetBase: "assets"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      letterSpacing: '-.02em'
    }
  }, "Agentic Finance Alliance")), /*#__PURE__*/React.createElement("div", {
    className: "v2-footer-links"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#about"
  }, "About"), /*#__PURE__*/React.createElement("a", {
    href: "#how"
  }, "Why Join"), /*#__PURE__*/React.createElement("a", {
    href: "#dinners"
  }, "Dinners"), /*#__PURE__*/React.createElement("a", {
    href: "#partners"
  }, "Partners"), /*#__PURE__*/React.createElement("a", {
    href: "#apply"
  }, "Become a partner"))));
}
Object.assign(window, {
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "website-v2/footer.jsx", error: String((e && e.message) || e) }); }

// website-v2/gallery.jsx
try { (() => {
const V2_GALLERY = [['dsc06456', '50% 40%'], ['dsc06648', '50% 45%'], ['dsc06621', '50% 40%'], ['dsc06719', '50% 40%'], ['dsc06722', '50% 40%'], ['dsc07025', '50% 40%'], ['dsc06689', '50% 45%'], ['dsc06546', '50% 45%']];
function Gallery() {
  return /*#__PURE__*/React.createElement("section", {
    className: "v2-sec v2-sec-rule"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v2-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v2-gallery-h"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "v2-eb"
  }, "From the table"), /*#__PURE__*/React.createElement("h2", {
    className: "v2-h2"
  }, "Lisbon, in pictures.")), /*#__PURE__*/React.createElement("p", {
    className: "v2-lede",
    style: {
      margin: 0
    }
  }, "21 September at ", /*#__PURE__*/React.createElement("a", {
    href: "https://capitulo.pt/",
    target: "_blank",
    rel: "noreferrer"
  }, "Cap\xEDtulo"), ".")), /*#__PURE__*/React.createElement("div", {
    className: "v2-gallery"
  }, V2_GALLERY.map(([f, pos]) => /*#__PURE__*/React.createElement("img", {
    key: f,
    src: 'assets/lisbon/' + f + '.jpg',
    alt: "Guests at the AFA Lisbon dinner",
    loading: "lazy",
    style: {
      objectPosition: pos
    }
  })))));
}
Object.assign(window, {
  Gallery
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "website-v2/gallery.jsx", error: String((e && e.message) || e) }); }

// website-v2/hero.jsx
try { (() => {
function Hero({
  onApply
}) {
  const [hasVideo, setHasVideo] = React.useState(true);
  return /*#__PURE__*/React.createElement("header", {
    id: "top",
    className: "v2-hero"
  }, hasVideo ? /*#__PURE__*/React.createElement("video", {
    className: "v2-hero-media",
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    poster: "assets/lisbon/dsc06462.jpg",
    onError: () => setHasVideo(false)
  }, /*#__PURE__*/React.createElement("source", {
    src: "assets/aftermovie-2.mp4",
    type: "video/mp4",
    onError: () => setHasVideo(false)
  })) : /*#__PURE__*/React.createElement("img", {
    className: "v2-hero-media",
    src: "assets/lisbon/dsc06462.jpg",
    alt: "",
    style: {
      objectPosition: '50% 30%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "v2-hero-tint"
  }), /*#__PURE__*/React.createElement("div", {
    className: "v2-wrap v2-hero-in"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "v2-h1"
  }, "Where the future of money and AI gets built."), /*#__PURE__*/React.createElement("p", {
    className: "v2-hero-sub"
  }, "Curated dinners for the founders, investors, leaders and creators working where AI meets payments, fintech, banking and insurance."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap',
      marginTop: 34
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "v2-btn v2-btn-cream v2-btn-lg",
    href: "https://luma.com/g5d9e8zv",
    target: "_blank",
    rel: "noreferrer"
  }, "Get your seat at the next dinner."))));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "website-v2/hero.jsx", error: String((e && e.message) || e) }); }

// website-v2/how.jsx
try { (() => {
function MatchCard() {
  const rows = [['guest_14', 'guest_03', 'payments × capital', 'intro sent'], ['guest_07', 'guest_22', 'insurtech × distribution', 'matched'], ['guest_19', 'guest_11', 'banking × agents', 'matched'], ['guest_02', 'guest_16', 'fintech × hiring', 'intro sent']];
  return /*#__PURE__*/React.createElement("div", {
    className: "v2-match"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v2-match-h"
  }, /*#__PURE__*/React.createElement("span", null, "AFA matchmaking"), /*#__PURE__*/React.createElement("span", null, "London \xB7 3 December")), rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "v2-match-r"
  }, /*#__PURE__*/React.createElement("code", null, r[0], " => ", r[1]), /*#__PURE__*/React.createElement("span", null, r[2]), /*#__PURE__*/React.createElement("b", null, r[3]))));
}
const V2_STEPS = [{
  n: '01',
  t: 'Curated guest list',
  d: 'We curate every guest list. We select people building, funding, running or speaking about the same future, so every conversation leads somewhere.',
  img: 'assets/lisbon/dsc06819.jpg',
  pos: '50% 55%'
}, {
  n: '02',
  t: 'Matchmaking',
  d: 'We look across our network for the people who could be valuable to you, and we bring them to the dinner.',
  img: 'assets/lisbon/dsc06756.jpg',
  pos: '50% 55%'
}, {
  n: '03',
  t: 'At the frontier',
  d: 'Each table sits where AI meets financial services: payments, fintech, banks and insurtech. The people building it, funding it and running it.',
  img: 'assets/lisbon/dsc06608.jpg',
  pos: '50% 52%'
}];
function How() {
  return /*#__PURE__*/React.createElement("section", {
    id: "how",
    className: "v2-sec v2-sec-rule"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v2-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v2-eb"
  }, "Why Join"), /*#__PURE__*/React.createElement("h2", {
    className: "v2-h2"
  }, "More than a dinner."), /*#__PURE__*/React.createElement("div", {
    className: "v2-steps"
  }, V2_STEPS.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    className: 'v2-step' + (i % 2 ? ' is-flip' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "v2-step-media"
  }, s.card ? /*#__PURE__*/React.createElement(MatchCard, null) : /*#__PURE__*/React.createElement("img", {
    src: s.img,
    alt: "",
    style: {
      objectPosition: s.pos
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "v2-step-txt"
  }, /*#__PURE__*/React.createElement("span", {
    className: "v2-num"
  }, s.n), /*#__PURE__*/React.createElement("h3", null, s.t), /*#__PURE__*/React.createElement("p", null, s.d)))))));
}
Object.assign(window, {
  How
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "website-v2/how.jsx", error: String((e && e.message) || e) }); }

// website-v2/nav.jsx
try { (() => {
const {
  Button,
  Logo
} = window.AFADesignSystem_93293e;
function Nav({
  onApply
}) {
  const [solid, setSolid] = React.useState(false);
  React.useEffect(() => {
    const on = () => setSolid(window.scrollY > window.innerHeight * 0.7);
    on();
    window.addEventListener('scroll', on, {
      passive: true
    });
    return () => window.removeEventListener('scroll', on);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: 'v2-nav' + (solid ? ' is-solid' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "v2-wrap v2-nav-in"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    className: "v2-brand"
  }, /*#__PURE__*/React.createElement(Logo, {
    lockup: solid ? 'transparent' : 'cream-transparent',
    size: 30,
    assetBase: "assets"
  }), /*#__PURE__*/React.createElement("span", null, "Agentic Finance Alliance")), /*#__PURE__*/React.createElement("nav", {
    className: "v2-links"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#about"
  }, "About"), /*#__PURE__*/React.createElement("a", {
    href: "#how"
  }, "Why Join"), /*#__PURE__*/React.createElement("a", {
    href: "#dinners"
  }, "Dinners"), /*#__PURE__*/React.createElement("a", {
    href: "#partners"
  }, "Partners")), /*#__PURE__*/React.createElement("a", {
    className: solid ? 'v2-btn v2-btn-green' : 'v2-btn v2-btn-cream',
    href: "https://luma.com/g5d9e8zv",
    target: "_blank",
    rel: "noreferrer"
  }, "Get your seat at the next dinner.")));
}
Object.assign(window, {
  Nav
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "website-v2/nav.jsx", error: String((e && e.message) || e) }); }

// website-v2/partners.jsx
try { (() => {
const V2_GET = [['Priority intros', 'First calls and intros with the guests.'], ['Video and PR', 'A dedicated video team and strategic PR.'], ['Priority access', 'Priority access to market data and future events.'], ['Extra seats', 'Bring more business partners and team members.']];
function Partners() {
  return /*#__PURE__*/React.createElement("section", {
    id: "partners",
    className: "v2-sec v2-sec-rule"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v2-wrap v2-partners"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "v2-eb"
  }, "Partners"), /*#__PURE__*/React.createElement("h2", {
    className: "v2-h2"
  }, "What you get as a partner."), /*#__PURE__*/React.createElement("p", {
    className: "v2-lede"
  }, "Each dinner is made possible by a small number of partners.")), /*#__PURE__*/React.createElement("div", {
    className: "v2-get"
  }, V2_GET.map(([t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: t
  }, /*#__PURE__*/React.createElement("span", {
    className: "v2-num"
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("b", null, t), /*#__PURE__*/React.createElement("p", null, d))))));
}
Object.assign(window, {
  Partners
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "website-v2/partners.jsx", error: String((e && e.message) || e) }); }

// website-v2/table.jsx
try { (() => {
const V2_LOGOS = [['mastercard-full.png', 'Mastercard', 32], ['anchorage.png', 'Anchorage Digital', 26], ['anthemis.png', 'Anthemis', 16], ['crossmint.png', 'Crossmint', 14], ['sponsor-wordmark.svg', 'Humanos', 19], ['vest-markets.png', 'Vest Markets', 26], ['temerity.png', 'Temerity Capital Partners', 38]];
function AtTheTable() {
  return /*#__PURE__*/React.createElement("section", {
    className: "v2-logos-band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v2-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v2-eb",
    style: {
      textAlign: 'center'
    }
  }, "Guests at our tables have come from"), /*#__PURE__*/React.createElement("div", {
    className: "v2-logos"
  }, V2_LOGOS.map(([f, a, h]) => /*#__PURE__*/React.createElement("img", {
    key: f,
    src: 'assets/logos/' + f,
    alt: a,
    style: {
      height: h
    }
  })))));
}
Object.assign(window, {
  AtTheTable
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "website-v2/table.jsx", error: String((e && e.message) || e) }); }

// website-v2/who.jsx
try { (() => {
const V2_WHO = [['Founders', 'Building what AI makes possible in finance.'], ['Investors', 'Backing the next wave of financial infrastructure.'], ['Leaders', 'Running payments, banks and insurers at scale.'], ['Creators', 'The voices promoting these companies and telling their story.']];
function Who() {
  return /*#__PURE__*/React.createElement("section", {
    className: "v2-sec v2-sec-rule"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v2-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v2-eb"
  }, "Who sits at the table"), /*#__PURE__*/React.createElement("div", {
    className: "v2-who"
  }, V2_WHO.map(([t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t
  }, /*#__PURE__*/React.createElement("h3", null, t), /*#__PURE__*/React.createElement("p", null, d))))));
}
Object.assign(window, {
  Who
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "website-v2/who.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.DinnerCard = __ds_scope.DinnerCard;

__ds_ns.LogoStrip = __ds_scope.LogoStrip;

__ds_ns.PointGrid = __ds_scope.PointGrid;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Section = __ds_scope.Section;

})();
