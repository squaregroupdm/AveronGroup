---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: ["solutions.html","how-we-work.html","about.html","brief.html","privacy.html","terms.html","assets/site.css","assets/site.js"]
---

# Surface: index.html (Averon Global homepage, the connected journey) with solutions.html, how-we-work.html, about.html, brief.html, privacy.html, terms.html

Mode: Persuade. Visitor: a procurement, packaging or brand manager (UK/EU brand, or an international buyer of a Bangladeshi exporter) deciding whether to start a project with Averon. Job: understand the proposition in seconds, follow a requirement through the supply journey, trust the people and the process, start a project. Proof on hand: the company profile, 32 generated production-reference photographs (labelled; a real Bangladesh shoot is planned), the process, materials and QA facts. No clients, metrics, certifications, partner names or ownership claims. Constraints: the owner's storytelling brief of 15 October 2026 (eight chapters that transform into one another, immersive/compact/tactile/immersive/technical/compact/immersive/quiet rhythm, sticky sequences within 1.5 to 2.5 viewports, 85 to 90vh hero, glass only as instrumentation over photographs, Manrope plus Cormorant Garamond as accent, motion that reveals meaning, full function with animation off, no "not a factory owner" language, no placeholder contact lines). No em dashes. Plain HTML/CSS/JS with GSAP ScrollTrigger, Cloudflare Pages.

## Direction contract

THESIS: The supply journey is the interface. A requirement enters at the top and travels down the page through eight chapters, carried by one continuous route line that becomes the Averon orbit at the end. It refuses the packaging-site stack (hero, capabilities, industries, quality, about) and the agency showreel (pinned screens, decorative parallax).

OWN-WORLD: Photographs are the ground; midnight navy and ivory are the two quiet grounds between them. One ivory route line, 1.5px, runs the length of the journey and is drawn by scroll. Glass instruments (navy at 48% with 12px blur, 1px white at 18% hairline, 12px radius) sit over photographs to carry labels, specifications and status; nothing else is glass. Manrope 400/500/600 for everything functional; Cormorant Garamond italic 400 for the one editorial line each chapter opens with. Chapter numbers 01 to 08 in small tracked caps. Buttons are 48px pills with the arrow in its own 32px circle. Film grain at 3% on a fixed layer.

STORY: The visitor sees the proposition over a press line, then follows their own requirement: Brief, Source, Material, Make, Verify, Pack, Move, Deliver. Each chapter shows a real stage of work and one reason to trust it. The route resolves into the Averon mark and the visitor is asked what they are working on.

FIRST VIEWPORT: 88vh hero photograph (press line) with a floating glass nav pill at the top; lower left, the chapter rail begins (01 of 08, "Opening"); headline "From requirement to destination." at 56 to 72px Manrope 500 in ivory over the photograph's darkest third, one sentence beneath, two pill buttons (Start a Project with nested arrow, Follow the journey); from under the primary button the route line starts and runs off the bottom of the viewport into chapter 01.

FORM: brief-pinned direction (the owner's storytelling brief paints the whole picture); concept-seed not run under new-work section 3. seed: none (unavailable).

Signature interaction: the route line that connects chapters, drawn by scroll with GSAP ScrollTrigger scrub, with the chapter rail counting 01 to 08 and the Make chapter pinned for two viewports while three production stages replace one another. Motion grammar: cubic-bezier(0.22, 1, 0.36, 1); 220ms states, 520ms reveals (12px rise, 6px blur to 0), 900ms crossfades; nothing loops; prefers-reduced-motion removes scrub, pin and blur and shows every state at once.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
