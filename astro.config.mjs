// @ts-check
import { defineConfig } from 'astro/config';

// The site is published at https://YOUR_GITHUB_USERNAME.github.io/
// This works because the repository is named exactly "YOUR_GITHUB_USERNAME.github.io"
// (a GitHub "user site"), so the site lives at the root and no `base` is needed.
//
// TODO: replace YOUR_GITHUB_USERNAME with your GitHub username (lowercase).
export default defineConfig({
  site: 'https://maexerich.github.io',
  // /projects/ has no page of its own: the project list is the home page.
  redirects: { '/projects': '/' },
});
