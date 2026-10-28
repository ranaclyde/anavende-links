---
name: Ana Vende
description: A bordó pegboard fair stand where every channel hangs as a printed card on a steel hook.
colors:
  bordo: "#822733"
  bordo-deep: "#4a1219"
  ink: "#5e1a24"
  paper: "#f8f6f2"
  sun: "#f2c230"
  rose: "#f3dade"
  steel: "#c3c8cc"
typography:
  display:
    fontFamily: "Archivo Variable, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 8.6vw, 2.5rem)"
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 125"
  headline:
    fontFamily: "Archivo Variable, system-ui, sans-serif"
    fontSize: "clamp(1.6rem, 7.4vw, 2rem)"
    fontWeight: 900
    lineHeight: 1.05
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 118"
  title:
    fontFamily: "Archivo Variable, system-ui, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 850
    lineHeight: 1.05
    fontVariation: "'wdth' 112"
  body:
    fontFamily: "Archivo Variable, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 500
    lineHeight: 1.3
  caption:
    fontFamily: "Archivo Variable, system-ui, sans-serif"
    fontSize: "0.82rem"
    fontWeight: 500
    lineHeight: 1.3
  label:
    fontFamily: "Archivo Variable, system-ui, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 750
    fontVariation: "'wdth' 110"
  action:
    fontFamily: "Archivo Variable, system-ui, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 800
    fontVariation: "'wdth' 108"
rounded:
  tile: "4px"
  sign: "6px"
  tie: "0 0 8px 8px"
  action: "8px"
  card: "10px"
spacing:
  hole-pitch: "28px"
  hook-span: "112px"
  gutter: "18px"
  gap: "14px"
  row: "50px"
components:
  sign:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.bordo}"
    typography: "{typography.display}"
    rounded: "{rounded.sign}"
    padding: "30px 18px 18px 16px"
  card-featured:
    backgroundColor: "{colors.sun}"
    textColor: "{colors.bordo-deep}"
    typography: "{typography.headline}"
    rounded: "{rounded.card}"
    padding: "34px 18px 18px"
  card-blister:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.bordo}"
    typography: "{typography.title}"
    rounded: "{rounded.card}"
    padding: "32px 14px 18px"
  card-tie:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.bordo}"
    typography: "{typography.title}"
    rounded: "{rounded.tie}"
    padding: "32px 14px 15px"
  card-action:
    backgroundColor: "{colors.bordo}"
    textColor: "{colors.paper}"
    typography: "{typography.action}"
    rounded: "{rounded.action}"
    padding: "0 16px"
    height: "52px"
  icon-tile:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.bordo}"
    rounded: "{rounded.tile}"
    size: "42px"
  price-label:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.bordo}"
    typography: "{typography.label}"
    padding: "9px 11px 5px 16px"
---

# Design System: Ana Vende

## Overview

**Creative North Star: "Tablero de feria"**

The page is Ana's fair stand, rebuilt as a screen. The whole surface is a bordó pegboard punched with deep-bordó holes on a strict 28px pitch, and everything on it is a physical object: a printed sign hung from two hooks, a wire strung with price tags naming the categories, and the channels as printed card stock hung from steel J-hooks. Nothing floats; every piece hangs from a hole, tilts slightly at rest, and casts a real hanging shadow onto the board.

The palette is a bordó drench with one sticker-yellow piece. Cards are off-white stock printed in bordó ink; the featured channel (the online store, or the WhatsApp catalog while the store is offline) is the single yellow card, the widest piece, hung from two hooks. Type is a single variable family, Archivo, pushed across its width axis: expanded and black for the stand's sign and the featured card, near-normal for captions.

Motion is physical and damped. Cards drop onto their hooks with a pendulum settle, swing from the hook when touched or hovered, sway slightly with scroll, and the two-hook featured card hops instead of swinging. With reduced motion everything is static and the wire becomes scrollable.

**Key Characteristics:**
- Bordó pegboard drench with a 28px hole grid; hooks snap to real holes.
- Printed paper cards in bordó ink; one yellow card for the primary destination.
- Three die-cut silhouettes: euro-slot sign, euro-slot blister, cut-corner tie tag.
- Two-layer drop shadow on every hung piece; no flat floating panels.
- Single variable family (Archivo) with width as the hierarchy lever.
- Pendulum motion anchored at the hook, fully disabled under reduced motion.

## Colors

A monochrome bordó world, printed in its own ink on off-white stock, with a single sticker yellow and the cool grey of steel hardware.

### Primary
- **Stand Bordó** (bordo): the pegboard itself (page background, theme-color, browser chrome), the ink of every title, the stroke of the icon tiles, and the fill of the featured card's action bar. It is the brand color and the ground the whole world sits on.
- **Punched-Hole Bordó** (bordo-deep): the holes in the board, the scrollbar thumb, and the text and tile stroke on the yellow card, where regular bordó would sit too light against yellow.

### Secondary
- **Sticker Yellow** (sun): the featured card's fill, the focus ring, and text selection. It marks the one thing to tap and the element under keyboard focus.

### Neutral
- **Card Stock** (paper): the face of the sign, every channel card, the icon tiles, and the price labels; also the text on the bordó action bar.
- **Printed Ink** (ink): body text and captions on paper; a darker, quieter bordó than the titles.
- **Blush Print** (rose): the footer line set directly on the board, where paper white would compete with the cards.
- **Hook Steel** (steel): hooks, the price-tag wire, and the tag strings.

### Named Rules
**The One Sticker Rule.** Sticker Yellow fills exactly one card on the board: the primary destination. Its other uses are interaction states only (focus ring, selection), never decoration or a second card.

**The Printed-In-Bordó Rule.** Paper pieces are printed in the bordó family only (bordo for titles and strokes, ink for running text). No new hues enter the board; the only non-bordó colors are yellow, paper, and steel.

## Typography

**Display Font:** Archivo Variable, with width axis (fallback system-ui, sans-serif)
**Body Font:** Archivo Variable (same family)

**Character:** One grotesque stretched like fair signage. Width and weight do the ranking: the wider and heavier a line, the more it is a sign and the less it is a caption.

### Hierarchy
- **Display** (900, clamp(1.75rem, 8.6vw, 2.5rem), 0.95, width 125%, uppercase): the stand's name on the sign. Only here.
- **Headline** (900, clamp(1.6rem, 7.4vw, 2rem), 1.05, width 118%): the title of the yellow featured card.
- **Title** (850, 1.15rem, 1.05, width 112%): titles of the secondary hang cards.
- **Body** (500, 0.95rem, 1.3): the typed "Vos elegís…" line on the sign, with the rotating word picked out at 800 in bordó.
- **Caption** (500, 0.82rem, 1.3): the line under each card title; wraps anywhere so handles never overflow. The featured card's caption steps up to 1rem / 650.
- **Label** (750, 0.78rem, width 110%): price-tag category names on the wire.
- **Action** (800, 1.05rem, width 108%): the featured card's action bar text.
- **Footer** (500, 0.75rem, 0.02em tracking): the copyright line on the board.

### Named Rules
**The Width-Is-Rank Rule.** Hierarchy steps through the width axis (125 / 118 / 112 / 110 / 108 / 100) together with weight. Don't add a second typeface to create contrast.

## Layout

A single centered column (max 460px, 18px side gutters, top padding at least 44px and safe-area aware) sits on a full-bleed pegboard. The board's holes repeat every 28px with centers at 14 + 28k, and a script nudges each hung piece so its hook lands on the nearest hole center; two-hook pieces span 8 holes (112px) between hooks either side of center.

Vertical order: the sign hangs at the top; the price-tag wire runs edge to edge across the whole viewport (it breaks out of the column) 22px below; the channel cards follow 58px lower in a two-column grid with 50px row gap and 14px column gap. The featured card spans both columns. The secondary cards hang at deliberately uneven heights and widths (one dropped 28px, others at 88% and 94% width) and rest at small tilts between -2.2° and 1.6°, so the cluster reads as hand-hung rather than gridded.

The column width is the mobile composition carried unchanged to desktop; on wide screens the board extends but the pieces do not. This is an acknowledged open ceiling, not a rule.

## Elevation & Depth

Depth is physical: pieces hang in front of the board and cast a shadow onto it. Every hung piece carries a two-layer warm drop shadow applied as a filter, so the shadow follows die-cut silhouettes and clip paths. Holes and hang-slots are depressions, drawn with inset shadows. There is no tonal layering and no hover lift; the response to touch is a swing, not elevation.

### Shadow Vocabulary
- **Hanging drop** (`filter: drop-shadow(0 10px 9px rgb(25 3 7 / 0.45)) drop-shadow(0 2px 2px rgb(25 3 7 / 0.3))`): the sign and every card.
- **Hook drop** (`filter: drop-shadow(1px 3px 2px rgb(25 3 7 / 0.4))`): the steel hooks.
- **Punched slot** (`box-shadow: inset 0 2px 3px rgb(25 3 7 / 0.55)`): the hang slots cut into cards.
- **Wire shadow** (`box-shadow: 0 2px 2px rgb(25 3 7 / 0.35)`): the price-tag wire.

### Named Rules
**The Everything-Hangs Rule.** A piece on the board hangs from a hook in a hole and casts the hanging drop. No piece floats flat on the board without hardware.

## Shapes

Shapes are die-cuts from retail packaging. The sign and blister cards carry a "euro slot" hang hole (a 30×8px pill with a 12px circle on top); tie tags have their top corners cut 16px at 45° and a single 13px round hole. Card corners are gently rounded (10px on full cards, 8px on the bottom of tie tags, 6px on the sign); icon tiles are near-square (4px) to echo the logo's 2×2 grid. Price labels are tag-shaped, with a 9px pointed left end and a punched hole for the string.

## Components

### Hang Cards
Printed stock on a hook, tactile and slightly crooked.
- **Featured:** Sticker Yellow, spans the full row, hangs from two hooks with two euro slots; grid of 56px icon tile plus headline and caption, then a full-width bordó action bar. Never swings; it hops on touch (650ms) and nudges itself every 7s after a 4.5s delay.
- **Blister:** paper card with a euro slot and an enlarged 64px tile (36px icon); used for the catalog.
- **Tie:** paper card with cut top corners and a round hole; the default shape for social channels.
- **Entrance:** each card drops in with a damped pendulum (1150ms, staggered 90ms per card after 260ms).
- **Touch / Hover:** the card swings from its hook (950ms damped oscillation); press scales to 0.97. Fine-pointer hover also slides the action arrow 4px right.
- **Focus:** 3px Sticker Yellow outline, 4px offset.

### Card Action Bar
- **Shape:** gently rounded (8px), 52px minimum height, full card width.
- **Style:** bordó fill, paper text, label left and a stroked arrow right.

### Icon Tiles
- **Style:** paper square with a 2.5px bordó stroke (4px radius) holding a 24px stroked line icon in bordó; 42px by default, 64px on blister, 56px on the yellow card where stroke and icon turn Punched-Hole Bordó.

### Stand Sign
The header: a paper sign hung from two hooks, logo at 76px beside the display name and the typed subtitle with a 3px blinking bordó caret. Drops 16px into place on load.

### Price-Tag Wire
A steel wire across the full viewport with paper price labels hung on strings, alternating -3° and 2.5°, scrolling continuously (38s loop). Decorative and aria-hidden; the categories are given to screen readers as one sentence. Under reduced motion it stops and becomes horizontally scrollable.

### Hooks
Steel J-hooks drawn in SVG: a dark socket ring in the hole, a steel ball, and a 3px steel wire curling out. The hook stays fixed; only the piece below it moves.

## Do's and Don'ts

### Do:
- **Do** hang every new piece from a hook whose center snaps to the 28px hole grid, with a matching slot cut into the piece.
- **Do** give every hung piece the two-layer hanging drop and a small resting tilt.
- **Do** print new cards on paper in bordó and ink, with an icon in a stroked bordó tile.
- **Do** rank type through Archivo's width axis and weight before reaching for size.
- **Do** anchor all motion at the hook (transform origin above the piece) and turn it all off under reduced motion.

### Don't:
- **Don't** stack the channels as a vertical column of identical pill buttons.
- **Don't** fill a second card with Sticker Yellow; it marks only the primary destination.
- **Don't** introduce hues outside the bordó family, paper, yellow, and steel.
- **Don't** lay a piece flat on the board without a hook, slot, and hanging shadow.
- **Don't** add a second typeface.
