---
title: "Part 3: Building with Hugo & Static Sites"
date: 2024-10-22
draft: false
weight: 3
series: "AI-Assisted Development for Beginners"
seriesOrder: 3
tags: ["guide", "tutorial", "hugo", "static-sites", "web-development", "deployment", "github-pages"]
description: "The complete guide to building websites with Hugo. From 'what is a static site?' to deployed portfolio - with all the confusing parts explained."
---

# From Zero to AI-Powered Developer
## Part 3: Building Websites with Hugo (The Static Site Generator Guide)

## What This Guide Covers

You've set up your environment ([Part 1](/guides/getting-started/)) and understand the workflow ([Part 2](/guides/building-real-projects/)). Now let's build something people can actually see: **a website.**

**This guide teaches:**
- What static site generators are (and why they're awesome)
- Hugo from scratch (no assumptions)
- Building a blog/portfolio site
- Deploying to GitHub Pages
- Common problems and fixes
- How AI helps (and where it doesn't)

**Perfect for:**
- Building a portfolio site
- Creating a blog
- Documenting projects
- Learning web fundamentals
- Getting something online fast

**You'll have by the end:**
- A real website live on the internet
- Understanding of how static sites work
- A deployment workflow that's automated
- Portfolio to show your work

---

## Part 1: Understanding Static Sites

### What's a Static Site Generator?

**Static site generator** (SSG) = a tool that converts simple text files into a complete website

**How it works:**
1. You write content in Markdown (simple text format)
2. SSG converts Markdown → HTML
3. You get a folder full of HTML/CSS files
4. Deploy that folder to any web host
5. Website is live

**Examples of SSGs:**
- **Hugo** (what we're using - super fast, Go-based)
- Jekyll (Ruby-based, popular with GitHub Pages)
- 11ty (JavaScript-based)
- Gatsby (React-based, complex)

### Why Use a Static Site Instead of WordPress/Squarespace?

**Pros:**
- ✅ **Free hosting** (GitHub Pages, Netlify, Cloudflare Pages)
- ✅ **Fast** (just HTML files, no database queries)
- ✅ **Secure** (nothing to hack, no backend)
- ✅ **Version controlled** (all in Git)
- ✅ **Full control** (customize everything)
- ✅ **Write in Markdown** (clean, portable, AI-friendly)
- ✅ **No vendor lock-in** (move anytime)

**Cons:**
- ❌ No visual editor (you edit text files)
- ❌ Steeper learning curve initially
- ❌ No dynamic features without JavaScript/APIs
- ❌ Have to rebuild when you change content

**Best for:**
- Blogs, portfolios, documentation, project showcases, personal sites

**Not great for:**
- E-commerce, user authentication, real-time content, collaborative editing (unless you add services)

### Why Hugo Specifically?

**Hugo advantages:**
- ⚡ **Blazing fast** (builds 1000s of pages in seconds)
- 📦 **Single binary** (one file, no dependencies)
- 🎨 **Great themes** (free, customizable)
- 📖 **Good docs** (once you understand basics)
- 🔄 **Live reload** (see changes instantly)
- 🆓 **Free and open source**

**The catch:** Hugo has a learning curve. This guide makes it manageable.

---

## Part 2: Hugo Basics (From Scratch)

### Installation

**Linux/WSL:**
```bash
sudo apt install hugo
hugo version  # Check it worked
```

**macOS:**
```bash
brew install hugo
hugo version
```

**Windows:**
Download from https://gohugo.io/installation/

**Check it worked:**
```bash
hugo version
# Should show: hugo v0.XX.X ...
```

### Creating Your First Site

**1. Create a new site:**
```bash
hugo new site my-website
cd my-website
```

**2. See what Hugo created:**
```bash
ls
```

**You'll see:**
```
archetypes/   # Content templates
content/      # Your posts and pages go here
data/         # Data files
layouts/      # Custom HTML templates
static/       # Images, CSS, files
themes/       # Themes folder
hugo.toml     # Configuration file
```

**What each folder does:**
- `content/` - Write your blog posts, pages here (Markdown)
- `static/` - Images, PDFs, any files you want accessible
- `themes/` - Downloaded themes
- `layouts/` - Custom templates (override themes)
- `hugo.toml` - Site settings, menu, parameters

### Adding a Theme

**Hugo needs a theme to know how to style your site.**

**Option 1: Download a theme (Archie example)**
```bash
git init
git submodule add https://github.com/athul/archie themes/archie
```

**Edit `hugo.toml` to use it:**
```toml
baseURL = 'http://localhost:1313/'
languageCode = 'en-us'
title = 'My Awesome Site'
theme = 'archie'
```

**Popular beginner themes:**
- **Archie** - Minimal, clean (what I use)
- **PaperMod** - Modern blog theme
- **Terminal** - Retro hacker aesthetic
- **Anatole** - Portfolio-focused

**Find themes:** https://themes.gohugo.io/

### Creating Content

**Create your first post:**
```bash
hugo new posts/my-first-post.md
```

**Hugo creates:** `content/posts/my-first-post.md`

**Open it and edit:**
```markdown
---
title: "My First Post"
date: 2024-10-22
draft: false
tags: ["hello", "first-post"]
---

# Hello World!

This is my first Hugo post. It's written in **Markdown**.

## I can add:
- Lists
- **Bold** and *italic* text
- [Links](https://example.com)
- Code blocks
- Images

Pretty cool!
```

**Important:** Change `draft: false` or it won't show up!

### Running the Local Server

**Start Hugo's development server:**
```bash
hugo server
```

**Output:**
```
Web Server is available at http://localhost:1313/
Press Ctrl+C to stop
```

**Open your browser:** http://localhost:1313/

**You should see your site!**

**Live reload:** Edit your post, save. The browser updates automatically. Magic.

---

## Part 3: Building Your Portfolio Site

### Site Structure for a Portfolio

**Typical structure:**
```
content/
├── _index.md          # Homepage content
├── about.md           # About page
├── posts/             # Blog posts
│   ├── post-1.md
│   └── post-2.md
├── projects/          # Project showcases
│   ├── project-1.md
│   └── project-2.md
└── now.md             # What you're doing now
```

### Creating Pages

**Homepage content** (`content/_index.md`):
```markdown
---
title: "Home"
---

# Hi, I'm [Your Name]

I build things and document the process.

Check out my [projects](/projects) or read my [blog](/posts).
```

**About page** (`content/about.md`):
```markdown
---
title: "About"
---

# About Me

I'm learning web development with AI assistance.

This site showcases my projects and documents the learning process.
```

**Project page** (`content/projects/eventflow/index.md`):
```markdown
---
title: "EventFlow"
date: 2024-10-15
tags: ["project", "fastapi", "ai"]
---

# EventFlow: AI-Powered Event Planning

![Screenshot](screenshot.png)

## What It Does
EventFlow helps chaotic planners organize events without losing their minds.

## Tech Stack
- FastAPI backend
- SQLite database
- AI extraction with Pydantic

[View on GitHub](https://github.com/...)
```

### Adding Navigation

**Edit `hugo.toml` to add menu:**
```toml
[[menu.main]]
  name = "Home"
  url = "/"
  weight = 1

[[menu.main]]
  name = "About"
  url = "/about"
  weight = 2

[[menu.main]]
  name = "Projects"
  url = "/projects"
  weight = 3

[[menu.main]]
  name = "Blog"
  url = "/posts"
  weight = 4
```

**Weight controls order** (lower = appears first)

### Adding Images

**1. Put images in `static/images/`:**
```
static/
└── images/
    ├── avatar.png
    └── project-screenshot.png
```

**2. Reference in Markdown:**
```markdown
![My Avatar](/images/avatar.png)
```

**Hugo serves files from `static/` at the root URL**

---

## Part 4: Deploying to GitHub Pages

### Prerequisites

- GitHub account (free)
- Git installed ([Part 1](/guides/getting-started/))
- Your Hugo site ready

### Step 1: Create GitHub Repository

**1. Go to GitHub.com**

**2. Click "New Repository"**

**3. Name it:** `your-username.github.io`
   - Example: `marialuisa.github.io`
   - This special name gives you `https://your-username.github.io`

**4. Make it public**

**5. Don't initialize with README** (we'll push existing code)

**6. Click "Create Repository"**

### Step 2: Connect Your Local Site to GitHub

**In your Hugo project folder:**

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/your-username.github.io.git
git push -u origin main
```

**Your code is now on GitHub!**

### Step 3: Set Up GitHub Actions for Deployment

**Create the workflow file:**

```bash
mkdir -p .github/workflows
```

**Create `.github/workflows/deploy.yml`:**

```yaml
name: Deploy Hugo site to GitHub Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

defaults:
  run:
    shell: bash

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          submodules: recursive
          fetch-depth: 0

      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v2
        with:
          hugo-version: 'latest'
          extended: true

      - name: Build
        run: hugo --minify

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: ./public

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

**Commit and push this:**
```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Pages deployment workflow"
git push
```

### Step 4: Enable GitHub Pages

**1. Go to your repo on GitHub**

**2. Settings → Pages (left sidebar)**

**3. Source:** GitHub Actions

**4. Save**

**Done!** Your site will build and deploy automatically.

### Step 5: Fix the Base URL

**Edit `hugo.toml`:**

**Before:**
```toml
baseURL = 'http://localhost:1313/'
```

**After:**
```toml
baseURL = 'https://your-username.github.io/'
```

**Commit and push:**
```bash
git add hugo.toml
git commit -m "Fix base URL for GitHub Pages"
git push
```

**Wait 2-3 minutes** → Visit `https://your-username.github.io`

**Your site is LIVE! 🎉**

---

## Part 5: Common Problems & Solutions

### "My site is blank!"

**Possible causes:**

**1. Base URL is wrong**
```toml
# In hugo.toml, make sure this matches your GitHub Pages URL
baseURL = 'https://your-username.github.io/'
```

**2. Draft posts aren't showing**
```markdown
# In your post front matter:
draft: false  # Make sure this is false!
```

**3. Theme not loaded**
```bash
# Make sure theme is added as submodule:
git submodule add https://github.com/theme/repo themes/theme-name

# In hugo.toml:
theme = 'theme-name'  # Exact folder name in themes/
```

**4. Deployment still running**
- Go to Actions tab on GitHub
- Wait for green checkmark
- Can take 2-5 minutes

### "CSS/Images aren't loading!"

**Problem:** Absolute vs relative paths

**Solution:** Use paths starting with `/`
```markdown
# Good:
![Image](/images/photo.png)

# Bad:
![Image](images/photo.png)
```

**Or check baseURL in `hugo.toml`**

### "Changes aren't showing up!"

**Possible causes:**

**1. Browser cache**
- Hard refresh: `Ctrl + Shift + R` (Windows/Linux) or `Cmd + Shift + R` (Mac)

**2. Deployment hasn't finished**
- Check GitHub Actions tab
- Wait for build to complete

**3. Changes not pushed**
```bash
git status  # Check what's uncommitted
git add .
git commit -m "Update content"
git push
```

### "Git submodule issues"

**If theme isn't loading after clone:**
```bash
git submodule update --init --recursive
```

**If you see "not a git repository":**
```bash
cd themes/your-theme
git status  # Should show it's a repo
```

### "Build failed in GitHub Actions"

**1. Check the error logs:**
- Go to Actions tab
- Click the failed workflow
- Read the error message

**2. Common errors:**
- Theme not found → submodule not loaded
- Invalid YAML syntax in front matter
- Missing `baseURL` in config
- Hugo version too old

**Ask AI:** Copy error message to Claude/Cline, ask "What does this mean?"

---

## Part 6: Workflow & Tips

### Daily Workflow

**1. Create content:**
```bash
hugo new posts/new-post.md
# Edit the file
```

**2. Preview locally:**
```bash
hugo server
# Visit http://localhost:1313
```

**3. When happy, deploy:**
```bash
git add .
git commit -m "Add post about X"
git push
```

**4. Wait 2-3 minutes, site updates automatically**

**Total time:** 30 seconds of commands

### How AI Helps

**Claude/Cline is great for:**
- Explaining Hugo concepts
- Debugging build errors
- Writing front matter templates
- Creating shortcodes
- Custom CSS tweaks
- Git issues

**Example conversation:**

**Me:** "How do I add a custom section to my homepage?"

**AI:** "Create `layouts/index.html` to override the theme's homepage. Here's a template:
```html
{{ define "main" }}
  <h1>Custom Homepage</h1>
  <!-- Your content here -->
{{ end }}
```
Hugo uses this instead of the theme's version."

**Me:** "Can you explain how layouts work?"

**AI:** *explains template hierarchy in plain language*

### Customization Tips

**Don't edit themes directly!**

**Instead, override in your `layouts/` folder:**

**Example:** Custom homepage
- Theme has: `themes/archie/layouts/index.html`
- Create: `layouts/index.html`
- Yours takes precedence

**Example:** Custom CSS
- Create: `static/css/custom.css`
- Add to `hugo.toml`:
```toml
[params]
  customCSS = ["css/custom.css"]
```

### Content Organization

**Good structure:**
```
content/
├── posts/           # Blog posts (chronological)
├── projects/        # Portfolio pieces (featured)
├── guides/          # Evergreen tutorials
├── about.md         # About page
├── now.md           # Current status
└── uses.md          # Tools you use
```

**Why this works:**
- Clear separation of content types
- Easy to find things
- Scales well
- Hugo auto-generates list pages

---

## Part 7: Next Steps & Advanced Features

### Features to Add

**Once basics are working:**

**1. RSS Feed** (usually built-in)
```
https://your-site.com/index.xml
```

**2. Comments** - Add Giscus (GitHub Discussions-based)
- Free, privacy-friendly
- No ads, no tracking

**3. Analytics** - Add GoatCounter
- Privacy-friendly
- Free
- No cookies needed

**4. Search** - Add client-side search
- No backend needed
- Fast, works offline

**5. Tags & Categories**
```markdown
---
tags: ["hugo", "web-dev"]
categories: ["tutorials"]
---
```

**6. Reading time, word count** (built into Hugo)

**7. Social sharing buttons**

**8. Custom domain** (optional, costs $12/year)

### Learning Resources

**Official Hugo Docs:** https://gohugo.io/documentation/
- Comprehensive but assumes knowledge
- Use AI to translate to plain language

**Hugo Themes:** https://themes.gohugo.io/
- Explore for inspiration
- Read theme docs carefully

**Hugo Discourse:** https://discourse.gohugo.io/
- Community forum
- Search before asking

**This site's source code:** https://github.com/dominatedbycline/dominatedbycline.github.io
- See how I built this
- Copy what works

### When to Ask AI vs Search Yourself

**Ask AI when:**
- Concept is confusing (explain like I'm 5)
- Error message is cryptic
- Docs assume too much knowledge
- You need a custom solution

**Search/Read docs when:**
- Looking for specific features
- Browsing theme options
- Learning new Hugo functions
- Exploring what's possible

**Best approach:** Combine both. Search to find the feature, ask AI to explain it.

---

## Checklist: Deploy Your First Hugo Site

**Week 1: Setup**
- [ ] Install Hugo
- [ ] Create new site
- [ ] Add a theme
- [ ] Create first post
- [ ] Test local server (hugo server)

**Week 2: Content**
- [ ] Write About page
- [ ] Create 2-3 blog posts
- [ ] Add at least 1 project
- [ ] Add navigation menu
- [ ] Add images

**Week 3: Deployment**
- [ ] Create GitHub repository
- [ ] Push code to GitHub
- [ ] Set up GitHub Actions
- [ ] Fix base URL
- [ ] Deploy successfully
- [ ] Site is live!

**Week 4: Polish**
- [ ] Add custom CSS
- [ ] Set up analytics
- [ ] Add comments (optional)
- [ ] Create RSS feed
- [ ] Share your site

---

## The Reality Check

**What I wish someone had told me:**

**1. The first deployment will fail**
- It's normal
- Check the logs
- Fix one error at a time
- Eventually it works

**2. Themes are opinionated**
- Some are well-documented, some aren't
- Customizing requires understanding Hugo
- Start simple, customize later

**3. Hugo's learning curve is real**
- But it flattens quickly
- After 2 weeks, it clicks
- After 1 month, you're comfortable

**4. AI makes it WAY easier**
- Explanations in plain language
- Instant debugging help
- Custom solutions without deep Hugo knowledge

**5. Your first site will be messy**
- That's ok!
- You can refactor later
- Shipping > perfection

---

## Success Criteria

**You've succeeded when:**
- ✅ Site is live on the internet
- ✅ You can create and publish posts
- ✅ Changes deploy automatically
- ✅ You understand how it works (at least basically)
- ✅ You can debug common issues

**You don't need to:**
- ❌ Understand every Hugo feature
- ❌ Write custom themes
- ❌ Master Go templating
- ❌ Know all the configuration options

**Progress > perfection**

Start messy. Ship it. Improve iteratively.

---

## Related Content

**Building in Public series:**
- [Part 1: Setup & First Week](/posts/2024-10-19-building-in-public-web-dev-part-1/)
- [Part 2: Deployment Chaos](/posts/2024-10-26-building-in-public-web-dev-part-2/)

**Other guides:**
- [Part 1: Getting Started](/guides/getting-started/) - Environment setup
- [Part 2: Building Real Projects](/guides/building-real-projects/) - Workflow & reality check

**Project showcase:**
- [Building This Site](/projects/building-this-site/) - How I built dominatedbycline

---

**Search keywords for this guide:** hugo, static site generator, github pages, deployment, website, blog, portfolio, markdown, git, theme, localhost, baseURL, front matter, hugo server, hugo new, shortcodes, layouts, static folder, content folder, build errors, blank page, css not loading, submodule, workflow, automation, GitHub Actions, YAML, commit, push

**Most common search:** "hugo site is blank" "why isn't my post showing up" "github pages not updating" "baseURL configuration"

---

**Built a Hugo site using this guide? [Let me know!](#) I'd love to see what you made.**

This is web development made accessible. You don't need to be a "real developer" to ship your work online. 🚀
