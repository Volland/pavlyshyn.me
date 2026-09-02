# Static site on GitHub Pages, with no backend

The site is built with Astro and deployed to GitHub Pages at pavlyshyn.me (custom domain, CNAME in
`public/`, `base: '/'`). This is a deliberate hard constraint, not an accident of convenience: there is no
server, no database, and no runtime we control.

Everything downstream follows from it. Contact is a booking link plus `mailto:`, because a `<form>` has
nowhere to post. Book and video listings are fetched from RSS and Leanpub at *build* time and baked into
HTML, with a scheduled Action rebuilding weekly, because there is nothing to query at request time.
Analytics are absent partly because GitHub Pages exposes no logs.

Anyone proposing a feature that needs state, sessions, or a request-time fetch is proposing to leave
GitHub Pages. That is allowed, but it is a hosting decision, not a feature decision.
