# EB Garamond is self-hosted, not loaded from Google Fonts

The sixteen woff2 faces in `public/fonts` are served from this site's own origin, and
`src/styles/fonts.css` is generated from them. The obvious alternative — a one-line
`<link>` to fonts.googleapis.com — is deliberately not used.

Loading a font from Google's CDN discloses every visitor's IP address to Google. In
January 2022 the Landgericht München I awarded damages against a site operator for
exactly that, and this site is operated from Berlin, carries an Impressum, and states
in its own privacy policy that it discloses nothing to third parties. The CDN link
would contradict the page it sits next to.

The cost is ~770KB in the repository and a manual step when the font needs updating:
re-run the fetch in `scripts/`, regenerating `src/styles/fonts.css`. Keep the Cyrillic
and cyrillic-ext subsets — Ukrainian titles are rendered in original script throughout.
