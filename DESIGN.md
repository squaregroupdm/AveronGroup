---
name: UK Plug Sourcing Limited
description: The supply journey is the interface. Photographs are the ground; midnight and ivory are the quiet grounds between them.
colors:
  midnight: "#0F2233"  # UK Plug navy, 24 October 2026
  ink: "#0A1824"
  ivory: "#F6F1E8"
  white: "#FFFFFF"
  slate: "#5B6578"
  atlantic: "#A85A14"
  ivory-soft: "rgba(251, 234, 213, 0.74)"
  hair: "rgba(5, 10, 48, 0.14)"
  hair-strong: "rgba(5, 10, 48, 0.34)"
  hair-dark: "rgba(251, 234, 213, 0.18)"
  hair-dark-strong: "rgba(251, 234, 213, 0.4)"
  glass-dark: "rgba(5, 10, 48, 0.42)"
  glass-border: "rgba(255, 255, 255, 0.16)"
typography:
  display:
    fontFamily: "Manrope, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.75rem, 2rem + 2.9vw, 4.25rem)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Manrope, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2rem, 1.5rem + 1.6vw, 3rem)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  editorial:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(1.6rem, 1.2rem + 1.6vw, 2.6rem)"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "0.005em"
  headline-compact:
    fontFamily: "Manrope, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.6rem, 1.15rem + 1.4vw, 2.3rem)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Manrope, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.35rem, 1.1rem + 0.8vw, 2rem)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  lead:
    fontFamily: "Manrope, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.05rem, 1rem + 0.3vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Manrope, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1rem, 0.95rem + 0.15vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.6
  ui:
    fontFamily: "Manrope, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.92rem"
    fontWeight: 500
    lineHeight: 1.2
  small:
    fontFamily: "Manrope, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.55
  compact:
    fontFamily: "Manrope, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.82rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Manrope, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.16em"
  chapter-number:
    fontFamily: "Manrope, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.16em"
    fontVariation: "tabular-nums"
rounded:
  pill: "999px"
  surface: "12px"
  input: "10px"
  none: "0"
spacing:
  xs: "8px"
  sm: "12px"
  md: "24px"
  lg: "40px"
  gutter: "clamp(20px, 4vw, 64px)"
  section: "clamp(64px, 7vw, 96px)"
  rail: "56px"
components:
  button-primary:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.midnight}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "0 8px 0 22px"
    height: "48px"
  button-primary-navy:
    backgroundColor: "{colors.midnight}"
    textColor: "{colors.ivory}"
    rounded: "{rounded.pill}"
    padding: "0 8px 0 22px"
    height: "48px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "inherit"
    rounded: "{rounded.pill}"
    padding: "0 22px"
    height: "48px"
  button-small:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.midnight}"
    rounded: "{rounded.pill}"
    padding: "0 6px 0 16px"
    height: "40px"
  glass-instrument:
    backgroundColor: "{colors.glass-dark}"
    textColor: "{colors.ivory}"
    rounded: "{rounded.surface}"
    padding: "18px 20px"
  glass-tag:
    backgroundColor: "{colors.glass-dark}"
    textColor: "{colors.ivory}"
    rounded: "{rounded.surface}"
    padding: "8px 12px"
  nav-pill:
    backgroundColor: "{colors.glass-dark}"
    textColor: "{colors.ivory}"
    rounded: "{rounded.pill}"
    padding: "0 10px 0 18px"
    height: "56px"
  input-dark:
    backgroundColor: "rgba(251, 234, 213, 0.04)"
    textColor: "{colors.ivory}"
    rounded: "{rounded.input}"
    padding: "0 14px"
    height: "48px"
  input-light:
    backgroundColor: "{colors.white}"
    textColor: "{colors.midnight}"
    rounded: "{rounded.surface}"
    padding: "12px 14px"
  choice-chip:
    backgroundColor: "transparent"
    textColor: "{colors.midnight}"
    rounded: "{rounded.surface}"
    padding: "10px 14px"
    height: "48px"
  choice-chip-selected:
    backgroundColor: "{colors.midnight}"
    textColor: "{colors.ivory}"
    rounded: "{rounded.surface}"
    padding: "10px 14px"
    height: "48px"
  photograph:
    backgroundColor: "{colors.ink}"
    rounded: "{rounded.surface}"
  spec-pill:
    backgroundColor: "transparent"
    textColor: "{colors.midnight}"
    rounded: "{rounded.pill}"
    padding: "7px 10px"
---

# Design System: UK Plug Sourcing Limited

## Overview

**Creative North Star: "The Route Line"**

UK Plug Sourcing Limited's site is one connected supply journey. A requirement enters at the top of the homepage and travels down through eight chapters (Brief, Source, Material, Make, Verify, Pack, Move, Deliver), carried by a single 1.5px ivory route line that scroll draws down the left margin and that resolves into the Averon orbit at the end. Photographs of real production work are the ground. Two quiet grounds, midnight navy and ivory, sit between the photographs; ink is reserved for the footer and for the base beneath every photograph. Nothing decorates; every surface that is not a photograph is either copy or an instrument that reads the photograph.

The world is editorial and technical at once. Manrope at three weights (400, 500, 600) does all functional work: headlines, body, labels, buttons, tables. Cormorant Garamond italic 400 appears once per chapter as the editorial line that opens it, and once in the footer tagline. Glass (navy at 48 percent, 10px blur, 1px white hairline at 18 percent, 12px radius) exists only as instrumentation laid over photographs: the nav pill, the chapter rail, material specifications, capability tags, production steps. On a flat ground, glass is never used; hairlines and tonal shifts carry structure instead.

Motion reveals meaning and never loops. Reveals rise 14px through a 6px blur in 520ms, state changes resolve in 220ms, photograph crossfades take 900ms, and the Make chapter pins for two viewports while three production stages replace one another. With prefers-reduced-motion, pins, scrub and blur are removed and every state shows at once. The inner pages (Solutions, How We Work, About, Start a Project, Legal) carry the same tokens on the light ground with ivory and white alternating by band.

**Key Characteristics:**
- Photographs are the ground; midnight and ivory are the two grounds between them; ink is footer and photo base.
- One ivory route line (1.5px) connects chapters and is drawn by scroll; a chapter rail counts 00 to 08.
- Glass is instrumentation over photographs only; flat grounds use 1px hairlines.
- Manrope for everything functional; Cormorant Garamond italic for one editorial line per chapter.
- 48px pill buttons with the arrow in its own 32px circle; one ask on every screen.
- 12px radius on surfaces and photographs, 999px on pills, 0 on bleeds.
- Fixed film grain at 3.5 percent opacity; no shadows anywhere.

## Colors

A pinned six-colour brand palette (owner's brief) rendered as two grounds plus translucent hairlines and glass derived from the same two hues.

### Primary
- **Midnight** (#0F2233): the dark ground. Body background on the homepage, the Move chapter, the conversion band, the material spec panel on tablet, the selected choice chip on the brief form, and the dark pill button on light ground. Every scrim and glass tint is Midnight at reduced alpha.
- **Ivory** (#F6F1E8): the light ground and the text colour on Midnight. Body ground on inner pages, the pagehead and alternating bands, the primary pill button, the route line, the progress bar, chapter markers, focus rings on dark ground, and the nested arrow circle. Ivory Soft (Ivory at 74 percent) is the secondary text on dark ground: leads, captions, chapter titles, nav links at rest.

### Secondary
- **Ink** (#0A1824): the footer ground, the base colour beneath every photograph while it loads, and the fill of the route map SVG. Never a text colour.

### Tertiary
- **Amber** (#D9822B on dark ground, #A85A14 as Amber Ink on light ground): the single accent, from the UK Plug profile. The route line, the progress bar, chapter numbers, the map route and focus rings on light grounds. Never a fill behind text.

### Neutral
- **White** (#FFFFFF): alternating light band ground on inner pages (`.on-light`), the field background on the brief form, and the hue of the glass hairline (White at 18 percent).
- **Slate** (#5B6578): secondary text on light grounds: kicker labels, captions, muted copy, gate descriptions, table headers, unselected material tabs. The build darkened the owner's #667085 to reach AA on Ivory; the build value is normative.
- **Hair** (Midnight at 14 percent) and **Hair Strong** (Midnight at 34 percent): dividers and borders on light grounds. Hair for list rows and card outlines, Hair Strong for the leading rule of a list, ghost pill borders and form field borders.
- **Hair Dark** (Ivory at 18 percent) and **Hair Dark Strong** (Ivory at 40 percent): the same two roles on Midnight and Ink.
- **Glass Dark** (Midnight at 48 percent) with **Glass Border** (White at 18 percent): the instrument surface. See Elevation.

### Named Rules
**The Two Grounds Rule.** A section is Midnight or Ivory (White alternates with Ivory on inner pages only). Ink appears only as the footer and beneath photographs. No gradients except the photograph scrims, which are Midnight at 0 to 86 percent.

**The Derived Hairline Rule.** Every border and divider is one of the two ground colours at reduced alpha (14/34 percent of Midnight on light, 18/40 percent of Ivory on dark). No grey borders, no third hue.

**The Quiet Atlantic Rule.** Atlantic appears only as the focus indicator on light ground. It is not a fill, a link colour or an accent.

## Typography

**Display Font:** Manrope (with Helvetica Neue, Arial, sans-serif), self-hosted woff2 at 400, 500 and 600
**Body Font:** Manrope (same stack)
**Editorial Font:** Cormorant Garamond (with Georgia, serif), self-hosted woff2 at 400 normal, 500 normal and 400 italic; only the 400 italic is used in the build

**Character:** A tight, slightly negative-tracked grotesque carries every functional word, so the single italic Garamond line in each chapter reads as a quiet human voice over a technical document. Numbers are tabular and tracked wide.

### Hierarchy
- **Display** (500, clamp(2.75rem, 2rem + 3.2vw, 4.5rem), 1.02, -0.025em): the homepage h1 over the opening photograph only. Drops to 2.5rem under 640px. Balanced wrapping.
- **Headline** (500, clamp(2rem, 1.5rem + 1.8vw, 3.25rem), 1.08, -0.02em): chapter and section h2, capped at 20ch; also the inner-page h1 in the pagehead.
- **Editorial** (Cormorant Garamond italic 400, clamp(1.6rem, 1.2rem + 1.6vw, 2.6rem), 1.3, 0.005em): the one line that opens each chapter, placed before the h2 or inside the glass intro over a pinned photograph; 12px below. Also the footer tagline at 1.35rem.
- **Title** (500, clamp(1.35rem, 1.1rem + 0.8vw, 2rem), 1.2, -0.01em): h3 in rows, stages and spec panels; h4 is 600 at 1.1rem.
- **Lead** (400, clamp(1.05rem, 1rem + 0.3vw, 1.25rem), 1.55): the sentence beneath a Display or Headline, capped at 34 to 36em.
- **Body** (400, clamp(1rem, 0.95rem + 0.15vw, 1.125rem), 1.6): all paragraph copy, capped at 38em.
- **Small** (400, 0.875rem, 1.55): descriptions in gates, info lists, table cells and help text.
- **Label** (500, 0.72rem, 0.16em to 0.2em tracking, uppercase): chapter titles in the chapter label and rail, footer column heads, column heads in spec tables, form field labels (0.12em), credit lines on photographs (0.12em).
- **Chapter Number** (600, 0.75rem, 0.16em, tabular-nums): the 00 to 08 numerals in chapter labels and the rail. Material tab numerals use the same tabular treatment at 500.

### Named Rules
**The One Italic Rule.** Cormorant Garamond appears as a single italic line per chapter or section opening, plus the footer tagline. It never sets a headline, a button, a label or body copy.

**The Three Weights Rule.** Manrope ships at 400, 500 and 600 only. Headlines and buttons are 500; emphasis within copy and tabular numerals are 600; nothing is bold 700.

**The Measure Rule.** Paragraphs cap at 38em, leads at 34 to 36em, headlines at 20ch, long legal prose at 70ch.

## Layout

Content sits in a 1280px maximum column (`--content-max`) with a fluid gutter of clamp(20px, 4vw, 64px). Section rhythm is clamp(64px, 7vw, 96px) above and below each band. Inside a band, layout is a 12-column grid with 24px column and row gaps; chapters split roughly 5/7 (Brief, Verify), 4/8 (Pack), 7/4 with a one-column gutter (Move) and 6/5 (Convert). Inner pages use two-column splits at 5fr/7fr with 48px gaps, three-column index grids, and full-width rows divided by Hair rules at 40px vertical padding.

On the homepage a 56px journey rail (`--rail`) is reserved in the left margin at 1024px and above: the fixed chapter rail (bottom left, a glass instrument), the 1.5px route line at the content edge plus 5px, and 12px chapter markers with a 1.5px ivory ring at each chapter's top. Content inside the journey indents by the rail width (`.wrap.off`). Below 1024px the rail, route and markers hide and a 2px ivory progress bar at the top of the viewport takes over. The opening photograph is 88dvh (92dvh on phones) with copy anchored to the bottom and 140px top padding to clear the nav; the Deliver chapter is 92dvh; pinned stages (Source, Make) are 100dvh. The Source chapter pins for 0.6 viewports, Make for two.

Breakpoints: 1024px (rail and desktop nav links appear; below it the burger and overlay menu take over and every chapter grid collapses to one column) and 640px (phone: hero drops to 2.5rem, pills go full width in the opening, labels on photographs hide, footer columns stack). Inner page heads carry 160px top padding (150px on the brief page) to sit beneath the fixed nav pill.

## Elevation & Depth

There are no shadows. Depth is conveyed by three means: photographs with a Midnight scrim (bottom-weighted 0 to 62 or 78 percent on the opening and Make, left-weighted 72 to 10 percent on Source, left-weighted 86 to 20 percent on Deliver), glass instruments sitting on those photographs, and 1px derived hairlines on flat grounds. A fixed film grain layer (SVG fractal noise at 3.5 percent opacity, overlay blend, 160px tile) sits above everything except the nav and never scrolls with content.

### Glass Vocabulary
- **Glass instrument** (`background: rgba(15,34,51,0.48); border: 1px solid rgba(255,255,255,0.18); backdrop-filter: blur(10px); border-radius: 12px`): the nav pill, the chapter rail, the material spec panel, the Source panel and capability tags, Make intro and steps, brief field labels, route map labels. When the nav has scrolled past 40px or sits on a light page, its tint deepens to Midnight at 92 percent.
- **Rail on light ground** (`background: rgba(246,241,232,0.7); border-color: rgba(15,34,51,0.12)`): the one glass variant that flips to ivory, so the rail stays legible when the chapter beneath it is on the ivory ground.
- **Overlay menu** (`background: rgba(15,34,51,0.82); backdrop-filter: blur(24px)`): the full-screen phone menu, the only 24px blur.

### Named Rules
**The Instrument Rule.** Glass sits over a photograph or over the page as a fixed instrument (nav, rail, overlay). It never frames copy on a flat Midnight or Ivory ground; there, use a Hair border on a 12px radius instead (the conversion mini form, the brief result panel, the summary table). When the material spec panel moves off the photograph on tablet it becomes solid Midnight and drops its blur.

**The No Shadow Rule.** No box-shadow, text-shadow or drop-shadow filter anywhere. Hover lifts are expressed by the arrow circle moving, not by elevation.

## Shapes

Three radii and a bleed. Pills, the nav bar, spec chips and the arrow circle are fully round (999px or 50 percent). Every photograph, glass instrument, bordered card, choice chip and light form field is 12px. Dark form fields in the conversion mini form are 10px. Photographs that bleed to the viewport edge (opening, Source, Make, Move loading, Deliver) have no radius. Borders are always 1px (1.5px for the route line, route elbow, chapter marker ring and burger strokes). Rules under list rows, table rows and figure captions are single hairlines; the chapter label carries a 28px by 1px bar between the numeral and the title. Photographs declare aspect ratios (4/3, 3/2, 16/10, 16/9, 3/4, 1/1, 21/9, 4/5) and cover-fit; the Pack sequence grows 4/5 to 1/1 to 4/3 across three frames.

## Components

### Buttons
Decisive and compact: a flat pill with the arrow carried in its own circle, so the hover lives in the arrow and not in the surface.
- **Shape:** fully round pill (999px), 48px tall, 22px left padding and 8px right padding so the 32px arrow circle sits inset; 12px gap; Manrope 500 at 0.92rem, 0.01em tracking, no wrapping.
- **Primary:** Ivory fill, Midnight text, 1px Ivory border; arrow circle Midnight at 8 percent; the 14px diagonal arrow is an inline SVG stroke at 1.5px. Used for Start a Project everywhere (nav, opening, overlay, conversion, inner page CTAs, brief stepper).
- **Navy:** Midnight fill, Ivory text, arrow circle Ivory at 12 percent; the primary form on light grounds.
- **Ghost:** transparent, inherits text colour, 1px border in Hair Dark Strong (Hair Strong on light grounds), 22px padding both sides, no arrow circle. Used for the second action (Follow the journey, Back).
- **Small:** 40px tall, 16px/6px padding, 28px arrow circle, 0.85rem; used inside the nav pill and dense rows.
- **Hover / Active / Focus:** on hover the arrow circle translates 2px right and 1px up and scales 1.05 over 520ms on the spring ease; ghost borders go to currentColor; active scales the pill to 0.98 over 220ms; focus is a 2px outline in Ivory (Atlantic on light) offset 3px. Full width with space-between in the opening on phones.
- **Text link:** Manrope 500 at 0.92rem with a 14px arrow; a 1px underline draws left to right in 220ms on hover and the arrow slides 4px.

### Glass Instruments
- **Instrument panel:** Glass Dark with Glass Border on a 12px radius, 18 to 26px padding; carries an editorial line plus Small copy, or a Title plus Label range plus a hairline-divided list (material spec: 360px wide, bottom right of the photograph, 20px inset).
- **Tag:** the same glass at 8px/12px padding, Manrope 500 at 0.78rem with a 6px ivory dot; positioned absolutely over photographs as field labels (Brief), capability labels (Source, 12px/14px with a bold line and a Small soft line), and route map labels. Hidden on phones where the photograph is too small.
- **Production step:** glass at 14px/16px, resting at 55 percent opacity and rising to full when active; a 1px Glass Border line underneath fills with Ivory as scroll progresses.

### Cards / Containers
- **Corner Style:** 12px.
- **Background:** none; the ground shows through.
- **Shadow Strategy:** none (see Elevation).
- **Border:** 1px Hair on light, Hair Dark on Midnight (conversion mini form, brief result, summary table); the summary table's final column flips to Midnight ground with Ivory text.
- **Internal Padding:** 20 to 24px.
- **Row lists:** gates, info lists, stage rows and index rows have no card at all; a Hair Strong rule leads the list and Hair rules divide rows at 18 to 40px vertical padding.

### Inputs / Fields
- **Light (brief form):** White fill, 1px Hair Strong border, 12px radius, 12px/14px padding, 1rem Manrope, Slate placeholder; focus swaps the border to Midnight with no outline. Textareas 120px minimum, vertical resize.
- **Dark (conversion mini form):** Ivory at 4 percent fill, 1px Hair Dark Strong border, 10px radius, 48px tall, 14px padding, 0.95rem; placeholder Ivory at 55 percent; selects carry an inline 14px ivory chevron; focus swaps the border to Ivory.
- **Labels:** Label style at 0.12em tracking in Slate (Ivory Soft on dark), 6px above the field.
- **Choice chips (brief form):** 48px minimum, 12px radius, 1px Hair Strong border, 10px/14px padding, native radio or checkbox at 16px with Midnight accent; hover border goes Midnight; checked fills Midnight with Ivory text and Ivory accent.
- **Progress:** seven 2px bars with 6px gaps; done bars fill Midnight, the rest Hair.

### Navigation
- **Floating glass pill:** fixed 18px from the top (12px on phones), centred, 1280px maximum, 56px tall (52px on phones), 18px/10px padding, 999px radius, Glass Dark with Glass Border and 10px blur; deepens to Midnight at 92 percent after 40px of scroll or on any light page over 520ms.
- **Contents:** 22px mark plus 20px wordmark in ivory PNG; links in Manrope 500 at 0.86rem, Ivory Soft at rest, Ivory on hover and when current, with a 1px ivory underline drawing left to right in 220ms; the Start a Project small pill at the right.
- **Mobile:** below 1024px the links and pill hide and a 44px round burger (two 18px by 1.5px ivory strokes that rotate into a cross) opens a full-screen overlay at Midnight 82 percent with 24px blur; links at clamp(1.8rem, 6vw, 2.6rem), Manrope 500, rising 24px with 50ms stagger; Escape closes; body scroll locks.

### The Route Line and Chapter Rail (signature)
A 1.5px line fixed at the content edge plus 5px runs from beneath the opening's primary button to the end of the journey. Its track is Ivory at 10 percent; the ink layer is Amber, scaled on the Y axis by scroll progress with a 0.4 second scrub. A horizontal elbow (rail width plus 60px) draws from the button into the margin 600ms after load. Each chapter carries a 12px marker with a 1.5px ivory ring that fills ivory once reached. The rail, a small glass instrument fixed bottom left, shows the chapter number in Chapter Number style (00 / 08, the denominator in Ivory Soft at 400) over the chapter title in Label style; it flips to the ivory variant when the chapter beneath is on the light ground. At the Deliver chapter an ellipse (1.5px ivory stroke) draws around the UK Plug mark in 1.6 seconds, resolving the line into the orbit. Below 1024px the rail and route are replaced by a 2px ivory progress bar at the top of the viewport.

### Chapter Label (signature)
Inline: numeral in Chapter Number style, a 28px by 1px bar at 40 percent opacity, the title in Label style (Ivory Soft on dark, Slate on light); 20px below (28px in the opening). Numbers run 00 (Opening) to 08 (Deliver). Owner-sanctioned; it is the one place a small tracked label leads a heading.

### Photographs
Every image sits in a `.ph` frame: Ink base, 12px radius (0 when bleeding), declared aspect ratio, cover fit. Over the frame: an optional scrim (Midnight 8 to 62 percent, top to bottom), an optional credit line (Label at 0.12em, Ivory at 70 percent, bottom right) reading "Production reference" while the generated set stands in, and a second image layer for 900ms crossfades. Hover zoom scales the image 1.025 over 1100ms.

### Motion
Easing `--ease-editorial` cubic-bezier(0.22, 1, 0.36, 1) for opacity, colour and draw; `--ease-spring` cubic-bezier(0.32, 0.72, 0, 1) for transforms. Durations: 220ms states, 520ms reveals (14px rise, 6px blur to 0, once, with a 5 second fallback that shows everything), 900ms crossfades (960ms swap hold), 1100ms photograph zoom, 1.6s orbit draw. Staggers of 120 to 260ms for sequenced tags, gates and pack frames. GSAP ScrollTrigger pins Source (0.6 viewports) and Make (two viewports, scrub 0.3) and scrubs the route line (0.4) and the route map (0.5). Nothing loops. Under prefers-reduced-motion every transition collapses to 0.01ms, reveals show immediately, the Make pin is replaced by a static three-up grid, tags and gates show their final state, and the route and orbit are fully drawn.

## Do's and Don'ts

### Do:
- **Do** place every section on Midnight or Ivory (White alternating with Ivory on inner pages) and reserve Ink for the footer and the base beneath photographs.
- **Do** build borders and dividers from the ground colours at alpha: Hair 14 percent and Hair Strong 34 percent on light, Hair Dark 18 percent and Hair Dark Strong 40 percent on dark.
- **Do** use glass (Midnight 48 percent, 10px blur, White 18 percent hairline, 12px radius) only as an instrument over a photograph or as a fixed instrument (nav, rail, overlay).
- **Do** give every call to action the 48px pill with the 32px arrow circle; the second action is the ghost pill without an arrow.
- **Do** open each chapter or section with one Cormorant Garamond italic line, then a Manrope 500 headline capped at 20ch, then body capped at 38em.
- **Do** keep motion to 220ms states, 520ms reveals with a 6px blur, 900ms crossfades, and make every state visible at once under prefers-reduced-motion.
- **Do** label stand-in photographs with the "Production reference" credit line until the Bangladesh shoot replaces them.
- **Do** keep pointer targets at 44px or more (pills 48px, small pills 40px inside the 56px nav, burger 44px, choice chips 48px).

### Don't:
- **Don't** use shadows, glows, gradients other than the Midnight photograph scrims, or gold.
- **Don't** put glass on a flat Midnight or Ivory ground; use a Hair border on a 12px radius instead.
- **Don't** set Cormorant Garamond in a headline, button, label or paragraph, and don't load weights the build does not use (only 400 italic is in play).
- **Don't** use a Manrope weight above 600 or a letter-spacing on headlines looser than -0.01em.
- **Don't** introduce a third hue: Atlantic is the focus ring on light ground and nothing else; Slate is secondary text on light ground and nothing else.
- **Don't** loop any animation, add parallax to photographs, or pin a sequence longer than two viewports.
- **Don't** add a radius other than 12px, 10px (dark fields) or 999px, and don't round a photograph that bleeds to the viewport edge.
- **Don't** use icon glyphs beyond the single 14px diagonal arrow, the 16px gate tick and the 14px select chevron; labels are words.
