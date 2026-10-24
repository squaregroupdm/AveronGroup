# UK Plug Sourcing Limited website

Static site, deployed by Cloudflare Pages from this repository's `main` branch.

## Pages

- `index.html`: the home page, one connected eight-chapter supply journey (Brief, Source, Material, Make, Verify, Pack, Move, Deliver) ending in the project form.
- `solutions.html`: the six disciplines, industries and the materials table.
- `how-we-work.html`: the six stages, the quality plan and landed value.
- `about.html`: the company, its principles and what it publishes.
- `brief.html`: Start a Project, the seven-step brief builder (drafts an email; nothing is sent from the site).
- `privacy.html`, `terms.html`: legal pages. `404.html`: not-found page.

## Folders

- `assets/site.css`: all styles. `assets/site.js`: all behaviour. `assets/vendor/`: GSAP and ScrollTrigger (scroll choreography).
- `assets/fonts/`: Manrope and Cormorant Garamond, self-hosted (SIL Open Font License, licences included).
- `assets/brand/`: logo files. `assets/photo/`: photographs (`name.jpg` and `name.webp` full size, `m/` for 960px copies). Each file carries its prompt or origin in its metadata; the prompts are in `tools/photo-prompts.json` and the shot list in `PHOTOS.md`.
- `tools/pages/` and `tools/partials/`: the sources the pages are assembled from with `python3 tools/build_pages.py` (shared navigation and footer live in the partials). To change text, edit the matching file in `tools/pages/` and run the script, or edit the root page directly and tell the next build.
- `PRODUCT.md`: the product facts the site is allowed to claim. `DESIGN.md`: the design system derived from the built site.

## Before launch

- Replace `enquiries@ukplugsourcing.com` in `tools/pages/brief.html` (and `brief.html`) with the real mailbox.
- Add the office addresses and a contact line to the footer partial when they are confirmed; the site currently shows country names only.
- Replace generated production-reference photographs with the company's own shoot as it is delivered, keeping the file names.
