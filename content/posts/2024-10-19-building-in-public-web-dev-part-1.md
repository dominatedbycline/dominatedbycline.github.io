---
title: "Building in Public: Learning Web Dev With AI - Part 1"
date: 2024-10-19
draft: false
tags: ["web-development", "hugo", "ai-tools", "learning", "building-in-public", "cline"]
description: "I'm learning web development from scratch using AI assistance. Here's the honest, messy, confusing journey of building this site - Week 1: WTF is Hugo?"
---

# Building in Public: Learning Web Dev With AI

## Part 1: "Wait, What's a Static Site Generator?"

I'm building this website from scratch. And I'm documenting the entire messy process as I learn.

**The reality:** I don't really know what I'm doing. I'm learning web development with AI tools helping me along the way. This is the real-time documentation of that journey.

---

## Why I'm Doing This

**I tried Squarespace first.** It was... fine. But limiting. Everything felt like fighting the platform to do what I actually wanted.

**Then I heard about Hugo.** Static site generators. GitHub Pages. Free hosting. Complete control.

Cool. But also: **I had no idea what any of that meant.**

---

## Week 1: The Confusion Phase

### Day 1: "Installing Hugo"

```bash
sudo apt install hugo
```

**Easy, right?** Except I didn't understand what I'd just installed or what it actually does.

**What I thought Hugo was:** A website builder like Squarespace but in the terminal

**What Hugo actually is:** A tool that converts Markdown files into HTML websites

**The gap between those two things?** Enormous.

---

### Day 2: "Following the Quick Start Guide"

I found the Archie theme. Minimal, clean, exactly what I wanted aesthetically.

**Installation steps from the docs:**
1. Create a new site
2. Add the theme
3. Add some content
4. Start the server

**What actually happened:**
1. Created a site (didn't understand the folder structure)
2. Added theme (what's a git submodule?)
3. Added content (why isn't it showing up?)
4. Started server (it's blank???)

**Time spent Googling "why isn't my Hugo site showing content":** 2 hours

**The answer:** I forgot the `draft: false` in the front matter.

**What's front matter?** I had to Google that too.

---

### Day 3: AI Enters the Picture

**This is where Cline changed everything.**

Cline is an AI coding assistant that runs in VS Code. Instead of Googling "how does Hugo directory structure work" and reading docs I don't understand, I could ask:

**Me:** "Why isn't my post showing up? Here's my file."

**Cline:** *reads the file, sees `draft: true`, explains front matter, shows how to fix it*

**The difference:** I didn't just get an answer. I got an explanation I could understand.

---

## What I Learned This Week

### 1. Hugo Basics (Finally)

**Hugo uses a specific folder structure:**
- `content/` - Where you write stuff (Markdown files)
- `layouts/` - How stuff looks (HTML templates)
- `static/` - Images, videos, files
- `themes/` - The theme (don't edit directly)
- `hugo.toml` - Configuration file (controls everything)

**How it works:**
1. Write content in Markdown
2. Hugo converts it to HTML
3. Output goes to `public/` folder
4. Deploy the `public/` folder to hosting

**Commands I use constantly:**
- `hugo server` - Local preview
- `hugo` - Build the site
- `hugo new posts/post-name.md` - Create new post

### 2. Front Matter Is Essential

Every content file needs this at the top:

```yaml
---
title: "Post Title"
date: 2024-10-19
draft: false
tags: ["tag1", "tag2"]
---
```

**What it does:** Tells Hugo metadata about the content

**What happens if you forget it:** Your content won't show up (I learned this the hard way)

### 3. Markdown Is Actually Easy

Headers: `#`, `##`, `###`  
Links: `[text](url)`  
Images: `![alt](path)`  
Code: Triple backticks  

**Why I like it:** Clean writing, no distractions, AI-friendly

### 4. AI Accelerates Learning (When Used Right)

**What Cline helped with:**
- Explaining Hugo concepts in plain language
- Debugging why things weren't working
- Creating files with the right structure
- Understanding error messages

**What I still had to do:**
- Make all creative decisions
- Write all content
- Understand the underlying concepts
- Debug issues myself when possible

**The key:** AI explains, I learn. Not: AI does, I copy.

---

## What I Built This Week

**Actual accomplishments:**
- ✅ Hugo installed and running
- ✅ Archie theme set up
- ✅ First blog post published (the welcome post)
- ✅ About page created
- ✅ Local server working
- ✅ Basic understanding of Hugo structure

**Things I broke:**
- ❌ Navigation (fixed after 30 minutes of confusion)
- ❌ Post not showing up (the `draft: true` incident)
- ❌ Image paths (wrong directory)

---

## The AI Collaboration Workflow

**How I'm actually using AI for this:**

**1. When I'm stuck:**
- Describe the problem to Cline
- Show it the relevant files
- Get an explanation AND a fix
- Learn why it was broken

**2. When I want to add something:**
- Tell Cline what I want (e.g., "add custom CSS")
- It creates the file with proper structure
- I review, understand, maybe tweak
- I learn the pattern for next time

**3. When I'm learning concepts:**
- Ask Cline to explain like I'm 5
- It breaks down complex docs into simple terms
- I try it myself
- Ask follow-up questions when confused

**This is different from:**
- Copying code from StackOverflow (you don't learn why)
- Following tutorials blindly (you don't understand)
- Reading docs alone (assumes you know things you don't)

---

## Honest Struggles This Week

### "Why isn't this working?"

**Most common causes:**
1. Typo in file name
2. Wrong directory
3. Forgot `draft: false`
4. Incorrect front matter syntax
5. Case-sensitive path issues

**How I debug now:**
1. Check file location
2. Check front matter
3. Check for typos
4. Ask Cline if still stuck
5. Google specific error message

### "I don't understand the documentation"

**The problem with Hugo docs:** They're comprehensive but assume you know web development basics.

**Example confusing sentence from docs:**  
"Hugo uses Go's html/template and text/template libraries as the basis for the templating."

**What I needed to hear:**  
"Templates are HTML files with placeholders. Hugo fills in the placeholders with your content."

**Who explained it clearly?** Cline.

### "Where does this file go?"

**Still confusing:**
- When to put stuff in `layouts/` vs `themes/archie/layouts/`
- Static vs assets folder
- When to use `_index.md` vs `index.md`

**Getting clearer:** By breaking things and fixing them.

---

## What's Next (Week 2 Goals)

**Technical stuff:**
- [ ] Deploy to GitHub Pages
- [ ] Set up Git workflow
- [ ] Understand layouts better
- [ ] Add custom CSS

**Content stuff:**
- [ ] Write more posts
- [ ] Create projects page
- [ ] Polish about page

**Learning stuff:**
- [ ] Understand Git/GitHub Pages
- [ ] Learn basic CSS
- [ ] Figure out how themes actually work

---

## Why "Building in Public" Matters

**This blog is my portfolio.** But instead of only showing finished work, I'm showing the process.

**Why this is valuable:**
- Proves I can learn technical skills
- Shows problem-solving process
- Demonstrates AI collaboration (the skill I'm targeting for jobs)
- Helps others in the same position
- Creates accountability

**The meta layer:** This post about learning web dev is published on a site I'm learning to build. That's the point.

---

## For Other Beginners

**If you're learning web dev:**

**Use AI, but thoughtfully:**
- Ask for explanations, not just solutions
- Try to understand why, not just how
- Do things yourself after AI shows you
- Use it to accelerate learning, not replace it

**Expect confusion:**
- Week 1: Everything is confusing
- Week 2: Slightly less confusing
- Week 3: Patterns start emerging
- Week 4+: You can do things yourself

**Break things:**
- Seriously, break stuff
- Then fix it
- You learn more from debugging than from following tutorials perfectly

---

## The Honest Truth

**I still don't fully understand:**
- How Hugo templates work internally
- Git branching (I just use main)
- CSS beyond basic tweaks
- JavaScript (haven't touched it yet)

**But I can:**
- Write content in Markdown
- Publish blog posts
- Customize my site
- Troubleshoot common issues
- Learn new concepts as needed

**Progress > perfection.**

---

## Coming in Part 2

**Next week's chaos:**
- Git, GitHub, and deployment panic
- "Why isn't my site showing up on GitHub Pages?"
- Understanding git submodules (spoiler: still confused)
- First successful deployment (eventually)

Follow along. Watch someone learn web development in public, one confused commit at a time.

---

**Part of the [Building This Site](/projects/building-this-site/) project**

[Read Part 2 → Deployment & GitHub Pages](/posts/2024-10-26-building-in-public-web-dev-part-2/)

---

**Want to build your own site?** Check out the [Complete Hugo Guide](/guides/building-with-hugo/) for step-by-step instructions.

---

**Tools I'm using:**
- **Hugo:** Static site generator
- **VS Code:** Code editor
- **Cline:** AI coding assistant
- **Archie:** Hugo theme
- **Claude:** For explaining concepts
- **Google:** For everything else

**Current status:** Week 1 complete. Site running locally. Deployment: TBD.

**Most Googled this week:** "hugo why isn't my post showing up"

Follow the journey. This is web development with AI, documented honestly. 🚀
