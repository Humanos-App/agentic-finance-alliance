# AFA — Agentic Finance Alliance · Brand & Design System

This is the single source of truth for how AFA looks and sounds. It matches the live website (`AFA Website v2.html`) exactly: same colours, same type, same wording. Use it for decks, social, covers and anything else.

## What AFA is

AFA hosts **private, curated dinners at the frontier of AI and financial services**: payments, fintech, banking and insurtech. Each guest list brings together founders, leaders, investors and creators. Every guest is matched with the people in our network who could be valuable to them, and we bring them to the dinner.

- **Previously:** Lisbon, 21 September at Capítulo Restaurant & Bar.
- **Next:** London, 3 December. Seats: https://luma.com/g5d9e8zv
- AFA is not a membership club. Do not use "member", "membership", "join" or "invite-only".

---

## WORDING

### Key lines, use as written

| Use | Line |
| --- | --- |
| Hero | Where the future of money and AI gets built. |
| Hero sub | Curated dinners for the founders, investors, leaders and creators working where AI meets payments, fintech, banking and insurance. |
| What AFA is | Private dinners for the people bringing AI into financial services. |
| Statement | AI is changing what financial services can do. / Nobody figures that out alone. (two lines) |
| Guest CTA | Get your seat at the next dinner. |
| Partner CTA | Become a partner for the next dinner. |

### What AFA is, three points

- **The experience.** Curated and hosted in exceptional venues, so every guest has a memorable evening.
- **The people.** Our in-house matchmaking system seats every guest among the brightest minds, with connections that last long after the dinner ends.
- **Worth your time.** Less noise, more signal. Straight to the answers our guests came for.

### Why Join

1. **Curated guest list.** We curate every guest list. We select people building, funding, running or speaking about the same future, so every conversation leads somewhere.
2. **Matchmaking.** We look across our network for the people who could be valuable to you, and we bring them to the dinner.
3. **At the frontier.** Each table sits where AI meets financial services: payments, fintech, banks and insurtech. The people building it, funding it and running it.

### Who sits at the table

- **Founders.** Building what AI makes possible in finance.
- **Investors.** Backing the next wave of financial infrastructure.
- **Leaders.** Running payments, banks and insurers at scale.
- **Creators.** The voices promoting these companies and telling their story.

### What you get as a partner

1. **Priority intros.** First calls and intros with the guests.
2. **Video and PR.** A dedicated video team and strategic PR.
3. **Priority access.** Priority access to market data and future events.
4. **Extra seats.** Bring more business partners and team members.

Each dinner is made possible by a small number of partners.

### Guests at our tables have come from

Mastercard · Anchorage Digital · Anthemis · Crossmint · Humanos · Vest Markets · Temerity Capital Partners. Logos in `assets/logos/`.

### Voice rules

- **Simple, confident, humble.** State the value plainly and let it speak. No hype, no "exclusive", no "beautiful", no "world-class".
- **Never exclusionary.** Do not imply anyone is not worth meeting. Say what it is, not who it is not for.
- **Hopeful, not problem-led.** Prefer "the same future" over "the same problems".
- **Short sentences.** One idea each. Cut any word that does not change the meaning.
- **"You" and "we".** The reader is "you"; AFA is "we".
- **Sentence case, with a full stop on headings and buttons.** "Get your seat at the next dinner."
- **Plain punctuation.** No em dashes in sentences. Use the middle dot `·` only to separate short facts ("3 December · Private dinner").
- **No emoji.** Ever.
- **Scope is wider than payments.** Talk about what AI unlocks for financial services, not only "how AI moves money".

---

## COLOUR

Cream and two greens. No black, no pure white.

| Token | Hex | Use |
| --- | --- | --- |
| `--afa-cream` | `#F1EDE3` | Page background. Text on deep green. |
| `--afa-cream-deep` | `#E8E3D6` | Cards, inputs, image placeholders. |
| `--afa-green` | `#14342B` | **All text**, headings, buttons, full-bleed panels (partner form, footer), hero tint. |
| `--afa-green-bright` | `#2E6B52` | Eyebrows, step numbers, links on hover, the ledger texture. Never a fill. |
| `--afa-on-green-soft` | `#A9C3B5` | Labels and secondary text on deep green. |
| `--afa-muted` | `#5E6B63` | Secondary text on cream. |
| `--afa-line` | `#E0DACE` | 1px hairline rules and tile borders. |

- Dividers on deep green: `rgba(241,237,227,.16)`.
- Hero video / photo tint: deep green at 62% (`rgba(20,52,43,.62)`), flat, no gradient.

---

## TYPE

**Inter**, weights 400 / 500 / 600. Semibold (600) for every heading and button. Monospace (`ui-monospace, Menlo`) only for step numbers (`01`) and the ledger texture.

| Role | Size | Weight | Tracking | Leading |
| --- | --- | --- | --- | --- |
| Hero (h1) | clamp(52px, 8.4vw, 124px) | 600 | -.045em | .96 |
| Section title (h2) | clamp(34px, 4.6vw, 56px) | 600 | -.035em | 1.02 |
| Big statement | clamp(34px, 5vw, 68px) | 600 | -.04em | 1.04 |
| Card title (h3) | clamp(26px, 3vw, 36px) | 600 | -.03em | 1.1 |
| Lead / body | 18px | 400 | -.011em | 1.45 |
| Small | 15–16px | 400 | -.011em | 1.4 |
| Eyebrow | 12px, UPPERCASE | 600 | +.16em | 1 |
| Step number | 13px mono | 400 | 0 | 1 |

Headings are always deep green. Body copy is muted on cream, soft green on deep green.

**Font substitution:** Inter loads from Google Fonts. Self-host the `.woff2` files if your tool needs them.

---

## LAYOUT

- Content width **1200px**, side padding `clamp(20px, 4vw, 48px)`.
- Section padding `clamp(72px, 12vh, 128px)` top and bottom, separated by 1px `#E0DACE` hairlines.
- Generous whitespace. One idea per section.
- Grids: 2 columns for text + image, 3 columns for short points, 4 columns for benefits, people and photos. Columns are split by vertical hairlines, not boxes.
- Image + text rows alternate left and right.

## SHAPE

- Buttons and inputs: **pill** (9999px).
- Cards and photos: **16px** radius (photos in grids 14px).
- No shadows. Separate with tone (cream vs cream deep vs deep green) and hairlines.

## BUTTONS

- Primary on cream: deep green fill, cream text.
- Primary on deep green or photo: cream fill, deep green text.
- Secondary on dark: transparent, 1.5px cream border at 60%.
- 15px / 500, padding 12px 24px (large: 16px, 14px 28px).
- Hover: opacity .86. Press: scale .985. Disabled: opacity .4.

---

## IMAGERY

### Photography
Warm, candid, on-camera-flash photos from the dinners: people talking, laughing, sitting at the table. Warm tungsten light, stone and wood. People first, venue second. Portrait crops (3:4) in grids; 4:3 for image + text rows. Lisbon set in `assets/lisbon/`.

- Best "the table" shots: `dsc06819.jpg` (long table), `dsc06756.jpg` (full table), `dsc06608.jpg` (set table with banner).
- Best portraits: `dsc06456`, `dsc06648`, `dsc06719`, `dsc06722`, `dsc06621`, `dsc07025`, `dsc06689`, `dsc06546`, `dsc06856`.

### The after movie
Full-bleed, muted, looping, behind the hero title with the 62% deep green tint. (Video file not included in this package.)

### The ledger texture
The AFA "A" mark at full bleed, filled with monospace transaction text (hashes, amounts, `agent_05=>agent_11`, approved / declined) in bright green at 20% opacity, with a deep green headline on top. One per surface: covers, the statement section, a title slide. Reference: `assets/cover-ledger-london.png`.

### Logo
The geometric A mark, `assets/logo-*.png`. Use `logo-green-transparent.png` on cream and `logo-toasted-transparent.png` on deep green. Wordmark: "Agentic Finance Alliance" in Inter 600, -.02em, next to the mark. Minimum 24px. No stretching, rotation or effects.

### Icons
None. Use words. No emoji, no unicode symbols as icons.

---

## MAKING A DECK

- **16:9, cream background**, deep green text. Use deep green full-bleed slides for section breaks, the statement and the closing ask.
- **Title slide:** the ledger A behind "Where the future of money and AI gets built."
- **Photo slides:** one full-bleed Lisbon photo with the deep green 62% tint and a single line of cream text, or a 3:4 photo grid.
- **Content slides:** eyebrow (12px uppercase, bright green), a short semibold headline, then 3–4 points split by hairlines.
- **Logo slide:** "Guests at our tables have come from" with the seven logos in one row, optically matched in size.
- **Closing slide:** deep green, cream text, one CTA: "Become a partner for the next dinner." or "Get your seat at the next dinner."
- Slide type never below 24px. Keep to one idea per slide.

---

## Components

React components that match the website. Load `_ds_bundle.js` and read them from `window.AFADesignSystem_93293e`.

- **Button**: pill CTA. Variants fill, cream, line, ghost.
- **Eyebrow**: 12px uppercase section label.
- **Card**: flat 16px panel. Surface, inverse, outline.
- **Section**: 1200px section shell with eyebrow, title, lede. Cream or green.
- **PointGrid**: short points in hairline columns.
- **LogoStrip**: guest company logos in one row.
- **DinnerCard**: Next / Previously dinner card.
- **Logo**: the A mark.

## Files

| Path | What's there |
| --- | --- |
| `styles.css` | Entry point; imports every token file. |
| `tokens/` | `colors.css` `typography.css` `spacing.css` `shape.css` `motion.css` `fonts.css` |
| `components/` | The components above, each with `.d.ts` and `.prompt.md` |
| `guidelines/` | Specimen cards: colours, type, spacing, logo, key lines, ledger texture, photography |
| `ui_kits/website/` | The website, as the reference implementation |
| `assets/` | A mark logos, the London ledger cover |
| `assets/lisbon/` | Lisbon dinner photography (web-sized) |
| `assets/logos/` | Guest company logos |
| `SKILL.md` | For use with Claude Code |
