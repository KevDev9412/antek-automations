# Antek Automations

Static marketing site for Antek Automations. No build step, no framework, plain HTML/CSS/JS.

## Structure

- `index.html` — homepage
- `automations.html` — the "Work" page (nav label "Work", deliberately served at `/automations`)
- `assets/` — images
- `workflows/` — n8n workflow exports for the automations shown on the Work page (not part of the deployed site, kept here for reference)

## Deploying

This repo deploys to Vercel as a static site (see `vercel.json`, `"framework": null`). Any push to `main` redeploys automatically. There is no build command and nothing to install, the HTML files are served as-is.
