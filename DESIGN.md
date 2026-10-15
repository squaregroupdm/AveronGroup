---
name: Averon Global
description: The technical prospectus of an international packaging supply house. One grid, thin rules, contained photographs.
colors:
  midnight: "#050A30"
  ink: "#021A38"
  ivory: "#FBEAD5"
  white: "#FFFFFF"
  slate: "#5B6578"
  atlantic: "#164C67"
  rule: "rgba(5, 10, 48, 0.14)"
  rule-strong: "rgba(5, 10, 48, 0.32)"
  rule-dark: "rgba(251, 234, 213, 0.18)"
  rule-dark-strong: "rgba(251, 234, 213, 0.42)"
  soft-ivory: "rgba(251, 234, 213, 0.72)"
  hover-tint: "#F4F5F8"
typography:
  display:
    fontFamily: "STIX Two Text, Times New Roman, Georgia, serif"
    fontSize: "clamp(40px, 4.1vw, 58px)"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "STIX Two Text, Times New Roman, Georgia, serif"
    fontSize: "clamp(31px, 3.1vw, 44px)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  title:
    fontFamily: "STIX Two Text, Times New Roman, Georgia, serif"
    fontSize: "clamp(24px, 2.1vw, 29px)"
    fontWeight: 400
    lineHeight: 1.2
  subtitle:
    fontFamily: "STIX Two Text, Times New Roman, Georgia, serif"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: 1.3
  lead:
    fontFamily: "STIX Two Text, Times New Roman, Georgia, serif"
    fontSize: "18.5px"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "STIX Two Text, Times New Roman, Georgia, serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.55
  small:
    fontFamily: "STIX Two Text, Times New Roman, Georgia, serif"
    fontSize: "14.5px"
    fontWeight: 400
    lineHeight: 1.5
  ui:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "13.5px"
    fontWeight: 500
    letterSpacing: "0.01em"
  label:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "11.5px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.12em"
  numeral:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "12px"
    fontWeight: 500
    letterSpacing: "0.08em"
  caption:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "12.5px"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  sm: "4px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "24px"
  lg: "48px"
  gutter: "clamp(48px, 5vw, 72px)"
  section: "clamp(72px, 7.2vw, 104px)"
components:
  button-fill:
    backgroundColor: "{colors.midnight}"
    textColor: "{colors.ivory}"
    typography: "{typography.ui}"
    rounded: "{rounded.sm}"
    padding: "0 20px"
    height: "44px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.midnight}"
    typography: "{typography.ui}"
    rounded: "{rounded.sm}"
    padding: "0 20px"
    height: "44px"
  button-ghost-hover:
    textColor: "{colors.atlantic}"
  button-fill-dark:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.midnight}"
    typography: "{typography.ui}"
    rounded: "{rounded.sm}"
    padding: "0 20px"
    height: "44px"
  button-ghost-dark:
    backgroundColor: "transparent"
    textColor: "{colors.ivory}"
    typography: "{typography.ui}"
    rounded: "{rounded.sm}"
    padding: "0 20px"
    height: "44px"
  nav:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.midnight}"
    typography: "{typography.ui}"
    height: "68px"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.midnight}"
    rounded: "{rounded.sm}"
    padding: "11px 12px"
  choice-chip:
    backgroundColor: "{colors.white}"
    textColor: "{colors.midnight}"
    rounded: "{rounded.sm}"
    padding: "12px 14px"
  choice-chip-selected:
    backgroundColor: "{colors.midnight}"
    textColor: "{colors.ivory}"
    rounded: "{rounded.sm}"
    padding: "12px 14px"
  photograph:
    backgroundColor: "{colors.ink}"
    rounded: "{rounded.sm}"
  summary-cell:
    backgroundColor: "{colors.white}"
    textColor: "{colors.midnight}"
    padding: "22px 20px"
  summary-cell-hover:
    backgroundColor: "{colors.hover-tint}"
---

# Design System: Averon Global

## Overview

**Creative North Star: "The Technical Prospectus"**

Averon Global reads like the prospectus of an international supply house, not the portfolio of a creative agency. One 12-column grid carries everything. Content is organised as numbered rows, ruled lists and tables that a procurement manager can scan several items at a time. Photographs of presses, board, finishing and inspection sit inside grid columns at fixed aspect ratios and are never allowed to bleed to the viewport edge or carry text. Type is a book serif (STIX Two Text) at restrained sizes for everything the visitor reads, with a small tracked grotesque (Archivo) for labels, numbering, navigation and buttons.

Depth is drawn, not lit. Surfaces are flat; structure comes from 1px rules at low alpha and from the alternation of three grounds (ivory, white, midnight) down the page. There are no shadows, no gradient fills, no glow, no parallax and nothing that loops. Motion exists only as a response to the visitor: a 220ms crossfade when a tab changes, a 4px arrow travel on hover, a 600ms rise on scroll reveal, a route line that draws once.

The system confirms the rejections the owner set: not a cinematic portfolio (no full-bleed hero, pinned stages or giant display type) and not a SaaS template (no rounded cards with icons, no gold, no glowing blue graphics).

**Key Characteristics:**
- One 12-column grid, 1280px maximum, with 24px gutters and fluid 48 to 72px margins
- Three grounds in rotation (ivory, white, midnight) with ink navy reserved for the footer and photograph wells
- 1px hairline rules carry all structure; no shadows, no gradient fills
- Serif for reading, tracked sans for apparatus (labels, numerals, navigation, buttons)
- Photographs contained in grid columns at 4:3, 3:2, 16:10, 3:4 or 1:1, 4px radius, no overlaid text
- Rows, lists and tables over cards; only two rounded elements exist (buttons and photographs)
- Motion is brief, triggered and never continuous

## Colors

A navy and ivory palette with a single cool accent, held together by translucent hairlines that take their alpha from the two text colours.

### Primary
- **Midnight** (`midnight`): the body text colour on light grounds, the fill of primary buttons and selected choices, and the ground of the midnight sections (process, network, close) where it carries ivory text. Also the 6px square bullets in the positioning strip and the done state of the brief stepper progress bars.
- **Ink** (`ink`): a slightly bluer, deeper navy used only as the footer ground and as the well behind every photograph (visible for a moment before the image loads and behind the network map). It is never a text colour.

### Secondary
- **Atlantic** (`atlantic`): a muted teal navy. It appears in exactly two places: the hover colour of ghost buttons on light grounds (text and border together) and the 2px focus-visible outline. It is an accent of state, not of decoration.

### Neutral
- **Ivory** (`ivory`): the warm ground of the navigation, hero and the alternating ivory sections; the text colour on midnight and ink grounds; the fill of primary buttons on dark grounds. Selection highlight is midnight on ivory (inverted on dark grounds).
- **White** (`white`): the body ground and the alternate light section ground, also the field background in the brief form.
- **Slate** (`slate`): secondary text on light grounds. Lead paragraphs in the hero, row descriptions, captions, labels, table meta cells, unselected tab items. Never used on dark grounds.
- **Soft Ivory** (`soft-ivory`): ivory at 72% alpha. The dark-ground counterpart to slate for secondary text, labels and numerals on midnight and ink.
- **Rule** (`rule`) and **Rule Strong** (`rule-strong`): midnight at 14% and 32% alpha. Rule is the default 1px divider between rows, list items, table cells and the sticky navigation once scrolled. Rule Strong marks heads: table header underlines, the quality checklist column heads, the about facts rule, and the borders of form fields, chips and the menu button.
- **Rule Dark** (`rule-dark`) and **Rule Dark Strong** (`rule-dark-strong`): ivory at 18% and 42% alpha. The same two roles on midnight and ink grounds; Rule Dark Strong is the resting border of dark ghost buttons.
- **Hover Tint** (`hover-tint`): a cool near-white that fills a landed value cell on hover, focus or open. The only hover fill in the system.

### Named Rules
**The Three Grounds Rule.** Sections alternate between ivory, white and midnight; ink is reserved for the footer and photograph wells. No fourth ground, no tints, no gradient fills.

**The Alpha Hairline Rule.** Every divider is 1px and takes its colour from the ground's text colour at 14% or 32% alpha (18% or 42% on dark). Rules are never a solid grey.

**The Accent of State Rule.** Atlantic appears only as a response (ghost button hover, focus outline). It is never used as a fill, heading colour or decoration.

## Typography

**Display Font:** STIX Two Text (with Times New Roman, Georgia, serif), self-hosted woff2, weights 400 and 500 plus 400 italic
**Body Font:** STIX Two Text (same family at 17px)
**Label/UI Font:** Archivo (with Helvetica Neue, Arial, sans-serif), self-hosted woff2, weights 400 and 500

**Character:** A scholarly book serif carries every word the visitor reads, from the 58px H1 down to 15px table cells, all at regular weight. A small grotesque handles the apparatus around the text: uppercase tracked labels, tabular numerals, navigation and buttons. Nothing is bold; hierarchy comes from size, colour and position.

### Hierarchy
- **Display** (400, clamp 40 to 58px, 1.04, tracking -0.015em): the hero H1 only. Balanced wrapping, two lines.
- **Headline** (400, clamp 31 to 44px, 1.1, tracking -0.01em): section H2s, capped at 18ch (16ch in the intro). The quality section runs a smaller 28 to 36px variant. The brief page H1 uses this size.
- **Title** (400, clamp 24 to 29px, 1.2): H3s inside panels (capability and material specs at 23 to 24px, process stage view at 24px). Row and list titles sit between 19 and 22px in the same face.
- **Subtitle** (400, 20px, 1.3): H4 and industry titles.
- **Lead** (400, 18.5px, 1.5): hero support paragraph, capped at 34em.
- **Body** (400, 17px, 1.55): paragraphs capped at 38em (36em in about). Secondary descriptions step down to 16px, 15.5px and 15px, always in slate on light grounds.
- **Small** (400, 14.5px, 1.5): helper text in the brief form, summary cell copy at 14px.
- **UI** (Archivo 500, 13.5px, tracking 0.01em): navigation links, buttons, arrow links, details summaries.
- **Label** (Archivo 500, 11.5px, tracking 0.12em, uppercase, 1.4): column and field heads: table headers, checklist column heads, network list heads, about facts, footer column heads. Slate on light, soft ivory on dark.
- **Numeral** (Archivo 500, 12px, tracking 0.08em, tabular): the 01 to 06 index numbers on rows, capabilities, stages and industries.
- **Caption** (Archivo 400, 12.5px, 1.5): photograph captions, hero places line (tracked 0.06em), legends, legal line, hints.

### Named Rules
**The Regular Weight Rule.** No text is bold. Serif text is weight 400; Archivo apparatus is weight 500. Emphasis is carried by size, slate versus midnight, and position in the grid.

**The Apparatus Rule.** Archivo appears only at 14px and below (buttons and navigation at 13.5px, labels at 11.5px, numerals at 12px). Anything the visitor reads as a sentence is set in STIX Two Text.

**The Measure Rule.** Paragraphs are capped between 34em and 46em. Headlines are capped at 18ch. No line of body copy runs the full grid.

## Layout

A single 12-column grid (`repeat(12, minmax(0, 1fr))`) with 24px column and row gaps inside a 1280px container. Horizontal margins are fluid, clamp 48 to 72px at desktop, 32px at tablet (1023px and below), 20px at phone (640px and below). Section padding is clamp 72 to 104px, dropping to 72px at tablet and 64px at phone. Section heads place the H2 in columns 1 to 6 and the supporting paragraph in columns 8 to 12, aligned to the baseline end, with a 48px gap below.

Recurring splits: 4 + 7 (intro, capabilities, process, about), 5 + 7 (hero, quality), 7 + 4 (network), 9 + 3 (feature image), 3 + 5 + 4 (materials). Industries run three across at span 4 with a span 8 note. The landed value summary is a seven-cell bordered row of six equal cells plus one 1.4fr midnight cell.

Internal rhythm uses 8, 10, 12, 14, 16, 20, 22, 24, 28, 32, 40, 48 and 64px steps. Rows pad 22px vertically; list items 9 to 16px; table cells 12px. The hero is a split at minimum clamp 520px to 74vh, never a full viewport.

At tablet the grid collapses to single columns; selectable lists (capabilities, stages, materials) become horizontally scrolling tab strips with a 2px underline on the selected item and a 48px fade mask at the right edge. At phone the navigation links collapse behind a bordered Menu button into a stacked ivory panel, buttons go full width, and the summary becomes two columns.

## Elevation & Depth

This system uses no shadows. Depth is conveyed by three devices: the alternation of ivory, white and midnight grounds; 1px alpha hairlines that bound every row, list, table and panel; and the ink photograph well that sits one step darker than any ground. Interactive emphasis is colour, not lift: a landed value cell fills with hover tint, a ghost button border turns atlantic, a tab item turns from slate to midnight. Nothing translates on hover except the 4px arrow travel and the 1.025 image zoom.

### Named Rules
**The No Shadow Rule.** No box-shadow, text-shadow, drop-shadow filter or gradient fill anywhere. If an element needs separation, give it a 1px rule or move it to the next ground.

**The Drawn Depth Rule.** The only overlapping surface is the sticky navigation, which gains a 1px rule after 8px of scroll rather than a shadow.

## Shapes

Two elements are rounded, both at 4px: buttons (including the menu button, form fields and choice chips) and photograph containers (including the network map and the bordered summary and result panels). Everything else is square: rules, bullets, progress bars, table cells, tab underlines. The positioning strip bullets are 6px solid midnight squares. Borders are 1px throughout; the only 2px strokes are the focus outline and the selected tab underline at tablet. Photographs are clipped to fixed aspect ratios (4:3, 3:2, 16:10, 3:4, 1:1) with object-fit cover inside the ink well.

### Named Rules
**The Two Radii Rule.** Only buttons and photographs carry the 4px radius. Rows, lists, tables and sections stay square. Cards do not exist.

## Components

### Buttons
A bordered 44px pill-free bar in Archivo, with an optional 14px inline arrow that travels 4px right on hover.
- **Shape:** softly squared (4px radius), 1px border, 44px tall, 0 20px padding, inline-flex with 10px gap.
- **Fill (light ground):** midnight background and border, ivory text. Hover drops opacity to 0.9.
- **Ghost (light ground):** transparent, midnight text and border. Hover shifts text and border to atlantic.
- **Fill (dark ground):** ivory background and border, midnight text.
- **Ghost (dark ground):** transparent, ivory text, rule-dark-strong border. Hover brightens border to ivory and text to white.
- **Focus:** 2px atlantic outline offset 3px (ivory on dark grounds).
- **Transitions:** background, colour and border at 220ms on the standard ease.
- **Arrow link:** a borderless variant in UI type with 8px gap and the same arrow travel.

### Navigation
- **Style:** sticky 68px ivory bar, 24px mark plus 22px wordmark at left, five UI links at 28px gap, ghost Start a Project button pushed right.
- **States:** links are midnight with a 1px underline that grows from the left on hover and stays on the current item. The bar gains a 1px rule bottom border once scrolled 8px.
- **Mobile:** below 640px the links hide behind a 36px bordered Menu button; open state stacks the links in an ivory panel under the bar, each ruled, with the fill CTA at the end.

### Rows and Lists
The system's card replacement. A row is a 48px / 1fr / 24px grid (numeral, text, arrow) with 22px vertical padding and a rule beneath; the list opens with a rule on top. Titles are 19 to 22px serif in midnight, descriptions 16px slate. Hovering a linked row moves its arrow 4px.

### Selectable Lists (capabilities, stages, materials)
Buttons in a ruled list, 40px / 1fr grid with the numeral in the first column, 19 to 22px serif. Unselected items are slate (soft ivory on dark), selected and hovered items midnight (ivory on dark). Selecting crossfades the paired photograph and copy at 220ms. On the dark process variant a 1px ivory line on the right edge slides to the selected stage at 420ms. At tablet these become horizontal tab strips.

### Photographs
- **Container:** ink well, 4px radius, overflow hidden, fixed aspect ratio class.
- **Hover (zoom variant):** image scales to 1.025 over 700ms.
- **Caption:** 12.5px Archivo in slate below the frame, right-aligned in the hero.

### Tables and Checklists
Table heads are label type over a rule-strong underline; cells are 15.5px serif with a rule beneath, 12px vertical padding, 22% first column. Checklist items are an 18px / 1fr grid with a 12px stroked tick that draws in (dashoffset 20 to 0 over 500ms, staggered 90ms) on scroll reveal; 17px serif with a 13px Archivo detail line.

### Inputs / Fields
- **Style:** full-width, inherited serif at 16px, 11px 12px padding, 1px rule-strong border, 4px radius, white ground, midnight text, slate placeholder. Field labels are 12.5px Archivo in slate tracked 0.04em.
- **Focus:** border turns midnight; no outline, no glow.
- **Textarea:** minimum 120px, vertical resize.

### Choice Chips (brief form)
- **Style:** a two-column grid of labelled radio or checkbox options, 12px 14px padding, 1px rule-strong border, 4px radius, 15.5px serif.
- **State:** hover border midnight; checked fills midnight with ivory text. The native control takes midnight as accent colour.

### Landed Value Summary (signature)
A single bordered 4px container divided by internal rules into six white cells and one midnight result cell. Each white cell carries a numeral, a 19px title, a 14px slate description at 0.45 opacity, and a small Archivo operator in the corner. Hover, focus or tap fills the cell with hover tint and brings the description to full opacity in midnight. The result cell holds a tracked 12px uppercase head, a 27px serif figure and soft ivory copy.

### Stepper Progress (brief form)
Seven 2px bars at 6px gap; done bars are midnight, pending bars are rule.

## Do's and Don'ts

### Do:
- **Do** place every element on the 12-column grid with 24px gutters inside the 1280px container, and keep section padding between 72 and 104px.
- **Do** rotate section grounds through ivory, white and midnight, using ink only for the footer and photograph wells.
- **Do** build structure from 1px alpha hairlines (midnight at 14% or 32% on light, ivory at 18% or 42% on dark).
- **Do** present repeated items as numbered rows, ruled lists or tables, with Archivo numerals 01 to 06 where the sequence is real.
- **Do** keep photographs inside grid columns at 4:3, 3:2, 16:10, 3:4 or 1:1, 4px radius, with a caption below rather than text over the image.
- **Do** set all reading text in STIX Two Text at weight 400 and all apparatus (labels, numerals, navigation, buttons) in Archivo 500 at 14px or below.
- **Do** keep buttons at 44px tall with a 1px border and 4px radius, fill or ghost, with the 14px arrow only on the primary action.
- **Do** keep motion brief and triggered: 220ms state changes, 420ms line travel, 600ms reveal, 700ms zoom, on cubic-bezier(0.22, 1, 0.36, 1), and honour prefers-reduced-motion.

### Don't:
- **Don't** use box-shadow, drop-shadow, gradient fills, glows or blur anywhere; the only linear-gradient permitted is the scroll-edge mask on horizontal tab strips.
- **Don't** build cards with icons, rounded corners above 4px, or any radius on elements other than buttons and photographs.
- **Don't** run a full-bleed hero, a full-viewport section, a pinned scroll sequence, parallax or any looping animation.
- **Don't** set type in bold, use a display or system face, or let Archivo carry sentences.
- **Don't** use atlantic as a fill, heading colour or decoration; it exists for ghost hover and focus only.
- **Don't** introduce gold, glowing blue, or a fourth ground colour.
- **Don't** add eyebrows or kicker lines above headings. The two on the homepage (hero and quality) are owner-sanctioned exceptions to the craft floor, not a pattern for new surfaces; the label style belongs to column and field heads.
- **Don't** use em dashes in any copy.
