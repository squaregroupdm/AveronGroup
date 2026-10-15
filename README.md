# NSS Global Packaging website

One-page static site for NSS Global Packaging (United Kingdom and Bangladesh packaging sourcing partner).

- `index.html`: the whole site (markup, styles and script in one file)
- `assets/`: board material pictures (synthetic renders; replace with real photographs when available)
- `favicon.svg`: the tab icon
- `wrangler.jsonc`: Cloudflare Workers static-asset config, so the repo deploys on Cloudflare with no build step

## Editing text

Open `index.html` and search for the words you want to change. Every sentence on the site is plain text in that file.

## Before launch

- Replace `enquiries@nssglobalpackaging.com` in `index.html` with the real mailbox
- Fill in the two office addresses in the footer
- Confirm the board grades and the factory that runs each one
