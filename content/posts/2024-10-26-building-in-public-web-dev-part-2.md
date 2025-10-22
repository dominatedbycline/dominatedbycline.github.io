---
title: "Building in Public: Learning Web Dev With AI - Part 2"
date: 2024-10-26
draft: false
tags: ["web-development", "hugo", "github-pages", "git", "deployment", "learning", "building-in-public"]
description: "Week 2: Git panic, deployment chaos, and finally getting this site online. Spoiler: I broke it multiple times."
---

# Building in Public: Learning Web Dev With AI

## Part 2: "Git, GitHub, and Deployment Panic"

[Read Part 1 →](/posts/2024-10-19-building-in-public-web-dev-part-1/) if you missed the setup chaos.

**Where we left off:** Site running locally. Hugo makes sense (kinda). Ready to deploy.

**This week's mission:** Get this thing on the internet.

**Narrator:** *She was not ready.*

---

## Week 2: The Deployment Phase

### Day 4: "What Even Is GitHub Pages?"

**What I thought GitHub Pages was:** A button that says "Publish Site"

**What it actually is:** A hosting service that serves static files from a Git repository

**The gap between those?** Git. All of Git.

---

### Understanding Git (Or Trying To)

**Me:** "I need to deploy to GitHub Pages"
**Every tutorial:** "Just push your code to the gh-pages branch"
**Me:** "...what's a branch?"

**Cline to the rescue:**

**Me:** "Explain Git like I'm 5"

**Cline:** "Git tracks changes to your files. Think of it as 'undo history' for your entire project. You take snapshots (commits) of your work. GitHub is where you store those snapshots online."

**Me:** "Ok. And branches?"

**Cline:** "Different versions of your project. Like parallel universes. Main branch = the real version. Other branches = experimental versions."

**Me:** "Why do I need this for deployment?"

**Cline:** "GitHub Pages reads from a specific branch to know what to publish. You tell it which branch has your website."

**Finally. A clear explanation.**

---

### Day 5: First Git Commands

**Commands I learned:**

```bash
git init                    # Start tracking this folder
git add .                   # Add all files to staging
git commit -m "message"     # Take a snapshot
git remote add origin URL   # Connect to GitHub
git push origin main        # Send to GitHub
```

**What I didn't understand:**
- Staging area (why do I add AND commit?)
- Remote vs local (where is my code actually?)
- Origin (what's that?)
- Why "main" vs "master"

**What I did:** Followed the steps. It worked. Didn't fully get it yet.

**Cline's advice:** "It's ok to not understand everything. Use it, and understanding comes with practice."

---

### Day 6: GitHub Pages Setup

**Step 1:** Create a repository on GitHub
**Result:** ✅ Done

**Step 2:** Push my Hugo site to the repo
**Result:** ✅ Files uploaded

**Step 3:** Enable GitHub Pages in settings
**Result:** ✅ Switched on

**Step 4:** Visit the URL
**Result:** ❌ Blank page

---

### The "Why Is My Site Blank?" Mystery

**Expected:** My beautiful Hugo site
**Reality:** White screen. Nothing.

**First attempt:** Googled "GitHub Pages blank"
**Found:** 47 different possible causes

**Asked Cline:** "Why isn't it showing anything?"

**Cline:** "GitHub Pages is serving your repo root. But Hugo sites need to be built first. You're pushing the source code, not the built site."

**Me:** "...what?"

**Cline explains:**
- Hugo source = Markdown files, templates, config (what you write)
- Hugo build = HTML, CSS, JS (what browsers need)
- GitHub Pages serves HTML, not Markdown
- I need to build first, then push the `public/` folder

**Ohhhh.**

---

### The Build Process

**Command I learned:**

```bash
hugo --cleanDestinationDir
```

**What it does:** Builds the site into the `public/` folder

**The problem:** Should I push the whole repo? Just `public/`? How do I tell GitHub Pages where to look?

**Solution options:**
1. Push everything, GitHub Actions builds it
2. Push only `public/` folder to a special branch
3. Use a deploy script

**What I chose:** GitHub Actions (seemed cleanest)

**Why:** Automate the build, push source code, GitHub handles the rest

---

### Day 7: GitHub Actions Configuration

**Created:** `.github/workflows/deploy.yml`

**What it does:**
- Watches for changes to the repo
- Runs Hugo build automatically
- Deploys the `public/` folder to GitHub Pages

**Me:** "Do I write this myself?"
**Cline:** "Hugo has an official template. Use that."

**Copied the template. Committed. Pushed.**

**Result:** ✅ Build triggered
**Result:** ✅ Build succeeded
**Result:** ❌ Site still blank

---

### Debugging Round 2: The Base URL Problem

**Checked the deployment logs:** Build successful
**Checked GitHub Pages settings:** Enabled, correct branch
**Checked the URL:** Still blank

**Inspected the HTML source:** Oh. Everything's broken.

**The problem:** All my links were wrong.

**Example broken link:**
```html
<link href="/css/main.css">
```

**What it should be:**
```html
<link href="/dominatedbycline/css/main.css">
```

**The issue:** Base URL in `hugo.toml`

**Before:**
```toml
baseURL = "http://localhost:1313/"
```

**After:**
```toml
baseURL = "https://yourusername.github.io/dominatedbycline/"
```

**Fixed it. Pushed. Waited.**

**Result:** ✅ **SITE IS LIVE**

---

## What I Learned This Week

### 1. Git Basics (Finally Clicking)

**Core concepts:**
- **Repository (repo):** Project folder that Git tracks
- **Commit:** Snapshot of your project at a point in time
- **Remote:** Online version (GitHub)
- **Push:** Send commits from local to remote
- **Pull:** Get updates from remote to local

**Commands I use constantly:**
```bash
git status              # What changed?
git add .               # Stage everything
git commit -m "msg"     # Save snapshot
git push                # Upload to GitHub
```

**What I still don't fully get:**
- Branching (I just use main)
- Merging (haven't needed it yet)
- Rebasing (sounds scary)
- Git submodules (still confused, but working)

**Cline's wisdom:** "You don't need to learn all of Git at once. Learn what you need, when you need it."

### 2. Deployment Is Not Intuitive

**What I expected:** Click "deploy" and it works

**What actually happens:**
1. Write code locally
2. Build the site (convert source to HTML)
3. Commit changes
4. Push to GitHub
5. GitHub Actions runs the build
6. Deployment happens automatically
7. Check if it worked (usually: no)
8. Debug why it broke
9. Fix config
10. Repeat steps 3-9 until success

**Lessons learned:**
- Check the build logs (they tell you what broke)
- Base URL matters (a lot)
- Cache is evil (hard refresh always)
- Deployment ≠ instant (give it 2-3 minutes)

### 3. GitHub Actions Is Magic

**What it is:** Automation scripts that run on GitHub's servers

**What I use it for:** Auto-build and deploy Hugo site

**How it works:**
1. I push changes to GitHub
2. GitHub Actions detects the push
3. Runs the Hugo build command
4. Publishes the output to GitHub Pages
5. Site updates automatically

**Why it's amazing:** I just write content and push. The rest happens automatically.

**How I set it up:** Copied Hugo's official template. Didn't write it myself.

### 4. Documentation Lies (Kinda)

**What Hugo docs say:** "Deploy to GitHub Pages is straightforward"

**What they mean:** "If you understand Git, GitHub Actions, YAML syntax, and web hosting fundamentals, this is straightforward"

**The gap:** All those assumptions

**How AI helped:**
- Explained what documentation assumed I knew
- Translated jargon into plain language
- Debugged errors the docs didn't cover
- Walked me through step-by-step

**Example:**

**Docs:** "Configure the baseURL in your site configuration"
**Me:** "Where? What format? Why?"
**Cline:** "In `hugo.toml`, line 1. Set it to your GitHub Pages URL. Hugo uses this to build absolute paths for CSS and links."

**See the difference?**

---

## What I Built This Week

**Accomplishments:**
- ✅ Learned Git basics
- ✅ Created GitHub repository
- ✅ Set up GitHub Actions
- ✅ Fixed base URL config
- ✅ **SITE IS LIVE ON THE INTERNET** 🎉
- ✅ Deployed successfully
- ✅ Custom domain (optional, I didn't do this yet)

**Things I broke:**
- ❌ Blank page deployment (fixed: base URL)
- ❌ CSS not loading (fixed: paths)
- ❌ Pushed to wrong branch (fixed: deleted and re-pushed)
- ❌ Build failed (fixed: theme submodule issue)

**Hours spent debugging:** Too many
**Hours saved by AI:** Also too many

---

## The Real Deployment Workflow

**What I actually do now:**

1. **Write content locally**
   ```bash
   hugo new posts/new-post.md
   # Write the post
   hugo server  # Preview locally
   ```

2. **Commit when happy**
   ```bash
   git add .
   git commit -m "Add new post about X"
   ```

3. **Push to GitHub**
   ```bash
   git push
   ```

4. **Wait 2-3 minutes**
   - GitHub Actions builds automatically
   - Deployment happens
   - Site updates

5. **Check the live site**
   - Hard refresh (Ctrl+Shift+R)
   - Verify it looks right
   - If broken: check Actions logs, fix, repeat

**Total time:** 30 seconds of commands, 2 minutes of waiting

---

## Honest Struggles This Week

### "Why won't Git push?"

**Error messages I saw:**
- `! [rejected] main -> main (fetch first)`
- `fatal: not a git repository`
- `Permission denied (publickey)`

**Solutions:**
1. **Rejected:** Someone (me) changed the remote. Pull first: `git pull`
2. **Not a git repo:** Wrong directory. `cd` to the right folder
3. **Permission denied:** GitHub SSH keys not set up. Used HTTPS instead

**How I debug Git errors now:**
1. Copy the error message
2. Paste to Cline: "What does this mean?"
3. Follow the fix
4. Learn the concept for next time

### "Why is the site taking forever to update?"

**Reasons I discovered:**
1. **GitHub Pages caching** - Can take 2-5 minutes
2. **Browser caching** - Hard refresh (Ctrl+Shift+R)
3. **DNS propagation** - If using custom domain, can take 24 hours
4. **Build still running** - Check Actions tab to see progress

**My workflow now:**
- Push
- Go to Actions tab
- Watch the build run
- When green checkmark appears: hard refresh the site

### "What if I break the live site?"

**The fear:** Push something broken, site goes down

**The reality:** Git lets you undo

**Commands I learned for safety:**
```bash
git log                    # See commit history
git revert HEAD           # Undo last commit
git checkout old-file.md  # Restore a specific file
```

**Pro tip from Cline:** "Git is your safety net. You can always go back."

---

## AI Collaboration This Week

**How Cline helped:**

### When Git confused me:
**Me:** "What's the difference between pull and fetch?"
**Cline:** *explains with diagrams I could understand*

### When deployment failed:
**Me:** "Build succeeded but site is blank"
**Cline:** "Check base URL. Show me your hugo.toml"
*Fixed immediately*

### When I broke things:
**Me:** "I committed the wrong files"
**Cline:** "No problem. Run `git reset HEAD~1` to undo the commit. Files stay changed, just uncommit them."

**The pattern:**
- I hit a wall
- Ask Cline for explanation
- Get clear answer + solution
- Try it myself
- Learn the concept

**Not:**
- Copy/paste blindly
- Hope it works
- Move on without understanding

---

## What's Next (Week 3 Goals)

**Technical:**
- [ ] Add custom features (RSS, comments, analytics)
- [ ] Understand layouts better
- [ ] Learn basic CSS customization
- [ ] Maybe try a custom domain?

**Content:**
- [ ] Write more posts
- [ ] Create proper About page
- [ ] Start projects section
- [ ] Document AI collaboration workflow

**Learning:**
- [ ] Git branching (maybe)
- [ ] CSS fundamentals
- [ ] JavaScript basics (scary)

---

## For Other Beginners

**If you're deploying your first site:**

### Git is intimidating but manageable
- Learn 5 commands: `init`, `add`, `commit`, `push`, `status`
- Everything else can wait
- Google errors as you hit them
- Git GUIs exist if terminal is too scary (I prefer terminal now, but started with GitHub Desktop)

### Deployment will fail
- First time: expect it to break
- Second time: probably still breaks
- Third time: might work
- Fourth time: definitely works (usually)

**This is normal. Everyone's first deployment is chaos.**

### Use AI thoughtfully
- Ask "why did this fail?" not just "fix this"
- Request explanations in plain language
- Try the solution yourself
- Ask follow-up questions
- Learn the underlying concept

### The best learning is debugging
- Tutorials: 10% learning
- Breaking things and fixing them: 90% learning

**Seriously. Break stuff. Then fix it. Repeat.**

---

## The Honest Truth

**I still don't fully understand:**
- Git branching and merging
- How GitHub Actions YAML syntax works
- DNS and custom domains
- Half of what the build logs say

**But I can:**
- Deploy a website to the internet
- Debug common deployment issues
- Use Git for basic version control
- Automate builds with GitHub Actions
- Fix broken deploys

**And that's enough to be functional.**

---

## Coming in Part 3

**Next week's adventures:**
- Adding features to the site
- RSS feeds, analytics, comments
- Learning CSS customization
- "Why is everything pink now?"

The site is live. Now let's make it actually good.

---

**Part of the [Building This Site](/projects/building-this-site/) project**

[← Read Part 1](/posts/2024-10-19-building-in-public-web-dev-part-1/) | [Read Part 3 →](#) _(coming soon)_

---

**Want the complete Hugo deployment guide?** Check out [Part 3: Building with Hugo & Static Sites](/guides/building-with-hugo/) for detailed step-by-step instructions.

**New to AI development?** Start with the [Getting Started Guide](/guides/getting-started/).

---

**Tools I'm using:**
- **Hugo:** Static site generator
- **Git:** Version control
- **GitHub:** Code hosting
- **GitHub Actions:** Automated deployment
- **VS Code:** Code editor
- **Cline:** AI coding assistant that explains Git like I'm human

**Current status:** Week 2 complete. Site is LIVE. Deployment automated. Still don't fully understand Git submodules.

**Most Googled this week:** "github pages blank" "git push rejected" "what is base url"

**Achievement unlocked:** 🚀 **First deployment successful**

Follow the journey. This is web development with AI, documented honestly.
