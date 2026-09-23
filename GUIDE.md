# Projects site on GitHub Pages: step-by-step guide

This folder is a small website (built with [Astro](https://astro.build)) that lists your projects.
It is published for free with GitHub Pages at `https://<your-username>.github.io/`.
Your own domain (`maxgreiner.ch`) is **not** part of this setup; a short section at the end
shows how to add it later.

---

## 0. Quick answers

**Is the repository public?**
Yes. On the free GitHub plan, GitHub Pages only works from a **public** repository.
Two consequences:

- Everyone can read the source code *and the full commit history*. Never commit passwords, tokens,
  private notes, or anything you would not show a recruiter.
- The published website is public in any case (even paid plans publish Pages sites publicly by default).

**What is the "my-pages place"?**
GitHub calls it a *user site*: a repository named exactly **`<your-username>.github.io`**.
It is published at `https://<your-username>.github.io/`, at the root, which is what this scaffold expects.
Each account can have one user site.

**Why does the repository name matter?**
If you named the repo anything else (e.g. `portfolio`), the site would live at
`https://<your-username>.github.io/portfolio/`. That needs an extra `base` setting and prefixed links,
which this scaffold does not include. Keep the exact name and nothing needs adjusting.

---

## 1. How it works (mental model)

```
you edit files  ->  git push  ->  GitHub Action builds the site  ->  GitHub Pages serves it
(Markdown +         (main          (npm run build creates the        https://<user>.github.io/
 images)             branch)        static HTML in dist/)
```

- You write each project as **one Markdown file** with a small header (title, summary, date, links).
- Astro turns those files into ordinary HTML pages, and resizes your pictures.
- Every push to `main` triggers a rebuild and redeploy (about 1 to 2 minutes). There is no server to look after.

---

## 2. One-time setup in WSL

Do this inside your WSL distro (Ubuntu assumed). Keep the project in the Linux filesystem
(e.g. `~/code/...`), **not** under `/mnt/c/...`, which is slow and unreliable for file watching.

```bash
sudo apt update && sudo apt install -y git unzip curl
```

**Node.js 22 or newer** (Astro 7 needs at least 22.12). The simplest way is `nvm`:
follow the install one-liner on <https://github.com/nvm-sh/nvm>, reopen the terminal, then:

```bash
nvm install 22
node -v      # should print v22.12 or higher
```

**Tell git who you are.** Use GitHub's private "noreply" address so your real email does not end up
in public commits (find it under GitHub -> Settings -> Emails):

```bash
git config --global user.name  "Your Name"
git config --global user.email "ID+USERNAME@users.noreply.github.com"
git config --global init.defaultBranch main
```

**GitHub CLI (`gh`)** makes login and repo creation easy. Install it from <https://cli.github.com>
(instructions for Ubuntu are on that page), then:

```bash
gh auth login     # choose GitHub.com, HTTPS, "Login with a web browser"
```

(If you prefer no CLI: create the repo in the browser and authenticate git with an SSH key or token.)

---

## 3. Unpack and personalise

The zip is in your Windows Downloads folder. From WSL that is `/mnt/c/Users/<WindowsUsername>/Downloads/`.

```bash
mkdir -p ~/code && cd ~/code
unzip /mnt/c/Users/<WindowsUsername>/Downloads/projects-site.zip
mv projects-site <your-username>.github.io      # optional, only cosmetic
cd <your-username>.github.io
```

Find everything you need to change:

```bash
grep -rn "YOUR_" --exclude-dir=node_modules --exclude-dir=dist --exclude-dir=.astro --exclude=package-lock.json .
```

Replace each `YOUR_GITHUB_USERNAME` / `YOUR_LINKEDIN_HANDLE`:

| File | What to set |
|---|---|
| `astro.config.mjs` | `site: 'https://YOUR_GITHUB_USERNAME.github.io'` (lowercase username) |
| `src/site.config.ts` | your name, one-line tagline, GitHub and LinkedIn URLs |
| `src/content/projects/example-project/index.md` | the example's `repo:` link (or delete the example, see section 7) |

---

## 4. Run it on your machine

```bash
npm install        # downloads dependencies into node_modules/ (first time only)
npm run dev        # starts a live preview
```

Open <http://localhost:4321>. (If you use VS Code with the WSL extension, opened via `code .` from the
project folder, it forwards the port and the link works from Windows.) The page reloads when you save a file.
Stop it with `Ctrl+C`.

Before you push, check that the production build works:

```bash
npm run build
```

It should end with `Complete!` and no errors. This is exactly what the GitHub Action runs.

---

## 5. Create the GitHub repository and enable Pages

Order matters slightly: enable Pages **before** the first push, otherwise the first deployment fails
(harmless, but confusing).

**a) Create an empty public repo named `<your-username>.github.io`**

```bash
git init -b main
git add .
git commit -m "Initial projects site"
gh repo create <your-username>.github.io --public --source=. --remote=origin
```

(Browser alternative: github.com -> New repository, the exact name above, **Public**, and do **not** tick
"Add a README". Then `git remote add origin https://github.com/<your-username>/<your-username>.github.io.git`.)

**b) Turn on Pages with GitHub Actions**

On github.com open the repo -> **Settings** -> **Pages** -> under *Build and deployment*,
set **Source** to **GitHub Actions**. There is nothing else to choose or save.

**c) Push**

```bash
git push -u origin main
```

**d) Watch it deploy**

Repo -> **Actions** tab -> the run "Deploy to GitHub Pages". Two green ticks (`build`, `deploy`) mean it is live.
Your site is at `https://<your-username>.github.io/`.

If the run failed because Pages was not enabled yet: do step b, then open the failed run and click
**Re-run all jobs**.

---

## 6. What each file is for

```
.
├── astro.config.mjs        Astro settings: the site URL, and a redirect /projects -> /
├── package.json            Dependencies and the commands (dev, build, preview)
├── package-lock.json       Exact dependency versions. Commit it; the Action needs it
├── tsconfig.json           TypeScript settings (used for type checking only)
├── .nvmrc                  Node version hint for nvm ("nvm use")
├── .gitignore              Files git must ignore (node_modules, dist, .astro)
├── .github/workflows/
│   └── deploy.yml          The robot: on every push to main, build and deploy to Pages
├── public/                 Copied to the site as-is (URL = path inside public/)
│   ├── favicon.svg           Browser tab icon
│   ├── robots.txt            Tells search engines they may index the site
│   └── projects/<slug>/      GIFs, videos and poster images for each project
└── src/
    ├── site.config.ts      Your name, tagline, GitHub and LinkedIn links
    ├── content.config.ts   The "form" every project must fill in (fields and types)
    ├── content/projects/   YOUR CONTENT: one folder per project
    │   └── example-project/
    │       ├── index.md      The project: header fields + text
    │       └── cover.png     The main picture (auto-resized and converted to WebP)
    ├── pages/
    │   ├── index.astro         Home page: heading + grid of project cards
    │   ├── projects/[...slug].astro   Template for every project page
    │   └── 404.astro           "Page not found" page
    ├── components/ProjectCard.astro   One card in the grid
    ├── layouts/Base.astro     Header, footer and <head> shared by all pages
    ├── styles/global.css      All styling (light and dark mode, phone-friendly)
    └── utils.ts               Two tiny helpers (date format, media URLs)
```

Things you will touch often: `src/content/projects/*` and `public/projects/*`.
Occasionally: `site.config.ts`, `global.css`. Rarely: everything else.

### The header of a project (`index.md`, between the `---` lines)

| Field | Required | Meaning |
|---|---|---|
| `title` | yes | Project name |
| `summary` | yes | One sentence (max 200 characters); shown on the card and in search results |
| `date` | yes | `YYYY-MM-DD`; newest first in the list |
| `cover` | yes | Main picture, path relative to `index.md`, e.g. `./cover.png` |
| `coverAlt` | yes | One-sentence description of the picture (for screen readers) |
| `draft` | no | `true` hides the project from the site while you write it |
| `featured` | no | `true` pins it to the top of the list |
| `kind` | no | Short honest label, e.g. `Research`, `Learning project`, `Purpose-driven, AI-assisted` |
| `role` | no | `Solo`, or what you personally did in a team |
| `tags` | no | e.g. `[Python, ROS, Estimation]` |
| `gif` | no | `src` (path inside `public/`) and `alt` text |
| `video` | no | `src`, optional `poster`, optional `caption` (paths inside `public/`) |
| `repo` | no | Link to the code. Leave it out for private projects |
| `links` | no | Extra buttons: a list of `label` + `url` (report PDF, demo, ...) |

The text below the second `---` is normal Markdown (headings, lists, links, code).

---

## 7. Add a new project

Example: a project called "Sonar SLAM".

```bash
cd ~/code/<your-username>.github.io
cp -r src/content/projects/example-project src/content/projects/sonar-slam
mkdir -p public/projects/sonar-slam
```

1. **The folder name is the URL**: this page will be `https://<user>.github.io/projects/sonar-slam/`.
   Use lowercase words with dashes.
2. Edit `src/content/projects/sonar-slam/index.md`: change the header fields and rewrite the text.
   Add `draft: true` while you are still writing.
3. Replace `cover.png` with your own picture (16:9 works best, at least 1600 px wide; PNG or JPG).
4. Optional media: put the files in `public/projects/sonar-slam/` and point to them in the header
   **without a leading slash**:
   ```yaml
   gif:
     src: projects/sonar-slam/demo.gif
     alt: What the animation shows.
   video:
     src: projects/sonar-slam/demo.mp4
     poster: projects/sonar-slam/demo-poster.jpg
     caption: What the video shows.
   ```
   Delete the `gif:`, `video:`, `repo:` and `links:` blocks you do not need.
5. Preview with `npm run dev`, then publish:
   ```bash
   git add .
   git commit -m "Add Sonar SLAM project"
   git push
   ```

### Preparing media (uses `ffmpeg`: `sudo apt install ffmpeg`)

```bash
# Video: small, plays in every browser (H.264 mp4, no sound, 1280 px wide)
ffmpeg -i input.mov -vf "scale=1280:-2" -c:v libx264 -crf 26 -pix_fmt yuv420p -movflags +faststart -an demo.mp4

# Poster image (frame at 2 s) shown before the video plays
ffmpeg -i demo.mp4 -ss 00:00:02 -frames:v 1 demo-poster.jpg

# GIF from a video: 15 fps, 640 px wide
ffmpeg -i demo.mp4 -vf "fps=15,scale=640:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" -loop 0 demo.gif
```

Rules of thumb: keep each video under about 10 MB and each GIF under about 2 MB (use a short clip, a
smaller size or a lower fps). A single file over 100 MB cannot be pushed to GitHub at all, and a published
site may not exceed 1 GB. For long videos, link to YouTube through the `links:` field instead.

### A project that is not public

Leave out the `repo:` line and say so in the text, e.g. *"Source code is private; available on request."*
Use screenshots with dummy data and an architecture diagram instead of the real thing.

### Remove the example

Delete `src/content/projects/example-project/` and `public/projects/example-project/` once you have a
real project. (The home page shows "No projects yet" if the list is empty.)

---

## 8. Troubleshooting

| Symptom | Likely cause and fix |
|---|---|
| `https://<user>.github.io/` shows a GitHub 404 | Pages source is not "GitHub Actions" (section 5b), the workflow has not finished, or the repo name is not exactly `<user>.github.io` |
| Actions run is red at `build` | Run `npm run build` locally, the error message appears there. Also make sure `package-lock.json` is committed |
| Error mentioning a project field, e.g. `coverAlt` | The header of an `index.md` is missing a required field or has a wrong type (see the table in section 6) |
| Page is unstyled or links go to the wrong place | The repo is not named `<user>.github.io`, so the site is served from a sub-path (see section 0) |
| Red run at `deploy`: "Pages not found / not enabled" | Do step 5b, then **Re-run all jobs** |
| `npm run dev` says Node is too old | `nvm install 22 && nvm use 22` |
| Video will not play | Re-encode with the command above (H.264, `yuv420p`, `+faststart`) |
| Change pushed but not visible | Wait 1 to 2 minutes for the Action, then hard-refresh (`Ctrl+Shift+R`) |

---

## 9. Later: use your own domain (`maxgreiner.ch`)

Nothing in the code needs to change except one line, so you can postpone this safely. Outline:

1. **Verify the domain with GitHub** (protects against domain takeover): GitHub profile picture ->
   Settings -> Pages -> **Add a domain** -> `maxgreiner.ch`. GitHub shows a TXT record named
   `_github-pages-challenge-<username>` with a value; add it at Hostpoint, wait, then click **Verify**.
   Keep the TXT record.
2. **Add the domain to the repo**: repo -> Settings -> Pages -> **Custom domain** -> `maxgreiner.ch` -> Save.
   (Because you deploy with an Action, no `CNAME` file is needed.)
3. **DNS at Hostpoint**: Control Panel -> **Domains** -> **DNS-Zone bearbeiten** -> **Neuer Record hinzufügen**.
   Leave *Name* empty for the main domain. Records are only saved after you click **Jetzt ausführen**.
   - Four `A` records for the main domain: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Optionally four `AAAA` records: `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
   - `CNAME` for name `www` pointing to `<your-username>.github.io`
   - **Delete existing `A`/`AAAA`/`CNAME` records** for the main domain and `www` first (Hostpoint's web-hosting defaults),
     because a name cannot have a `CNAME` next to other records. **Do not touch `MX` records** if you use Hostpoint email, and
     do not use "reset to Hostpoint standard".
   - Hostpoint's default TTL is 300 s, so changes usually show within minutes.
4. Change `site:` in `astro.config.mjs` to `'https://maxgreiner.ch'`, push, then tick **Enforce HTTPS** in
   Settings -> Pages once GitHub has issued the certificate (can take up to about an hour).

The DNS values are GitHub's current published ones; check
<https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site>
before copying them, in case they have changed.
