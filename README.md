# Averon Global website

Static site: `index.html` (home) and `brief.html` (the project brief). Styles in `assets/site.css`, behaviour in `assets/site.js`, brand files in `assets/brand/`, photographs in `assets/photo/`.

## Photographs

Every picture on the site is loaded from `assets/photo/<name>.jpg` (full size) and `assets/photo/m/<name>.jpg` (960px wide, for phones). The current set was generated from the prompts in `tools/photo-prompts.json`; each file carries its prompt in its metadata. To replace one, save the new photograph under the same name in both folders and the site updates by itself. The shot list is in `PHOTOS.md`.

## Editing text

Open `index.html` or `brief.html` and search for the sentence. Everything on the site is plain text in those two files.

## Before launch

- Replace `enquiries@averonglobal.com` in `brief.html` with the real mailbox
- Fill in the two office addresses and the contact line in the footer of `index.html`

## Design record

`PRODUCT.md` holds the product facts, `DESIGN.md` the design system (palette, type, grid, components, rules) derived from the built site. Fonts are self-hosted in `assets/fonts/` (SIL Open Font License, licences included).
