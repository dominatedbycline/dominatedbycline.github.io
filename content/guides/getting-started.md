---
title: "Part 1: Getting Started"
date: 2024-10-18
draft: false
weight: 1
series: "AI-Assisted Development for Beginners"
seriesOrder: 1
tags: ["guide", "tutorial", "claude-code", "setup", "beginner", "installation"]
description: "The brutally honest guide to setting up Claude Code and your dev environment. This is what I wish someone had told me - complete with all the frustrating parts and how to fix them."
---

# From Zero to AI-Powered Developer
## Part 1: Getting Started (The Setup Nobody Explains)

## The Truth Up Front

I'm not a developer.

But I've built:
- A 100+ page murder mystery game with automated typesetting
- Event planning platforms with backends and databases
- Automated build pipelines
- Git-powered workflows
- **All with AI help**

And it was **confusing as hell** at the start.

This is the guide I wish existed. The one that doesn't skip the "obvious" parts. The one that tells you where you'll get stuck and how to get unstuck.

**This is Part 1:** Getting your environment set up and working.

**[Part 2](/guides/building-real-projects/):** Building real projects and the honest truths about AI development.

**[Part 3](/guides/building-with-hugo/):** Building websites with Hugo and deploying to GitHub Pages.

---

## Part 1: The Confusion (Before You Even Start)

### Wait, Which Tool Do I Need?

There are SO MANY tools with "Claude" in the name:

**Claude (web)** - https://claude.ai
- The website
- Chat interface
- Good for: planning, brainstorming, learning concepts
- You talk, it responds
- No direct file access

**Claude Code (CLI)**
- Command-line tool
- Runs in your terminal
- Good for: building actual projects, editing files, running commands
- Can read/write files in your project
- This is what we're setting up

**Cline (VS Code extension)**
- Lives inside VS Code
- Can write code directly in your editor
- Good for: continuous coding sessions
- Different from Claude Code

### "Okay but which one do I ACTUALLY need?"

Honest answer: **It depends on what you're doing.**

- **Just learning/planning?** → Claude web is fine
- **Building a real project?** → Claude Code
- **Want tight VS Code integration?** → Cline

I use **Claude Code** for most projects. That's what this guide covers.

### The Part That Overwhelms Everyone

Every tutorial says:
> "Just install VS Code, set up your API key, and you're done!"

**But they don't tell you:**
- What VS Code actually IS
- Where to get an API key
- What happens when it doesn't work
- What a terminal is
- Why you need Git
- What a virtual environment does
- **How to fix it when permission is denied**

**This guide tells you ALL of that.**

---

## Part 2: The Prerequisites (The "Obvious" Stuff Nobody Explains)

### What's a Terminal?

A **terminal** (also called command line, shell, or console) is a text-based way to talk to your computer.

Instead of clicking buttons, you type commands.

**On Windows:**
- Search for "PowerShell" or "Command Prompt"
- Or install WSL (Windows Subsystem for Linux) - recommended

**On Mac:**
- Search for "Terminal" in Spotlight (Cmd+Space)

**On Linux:**
- You probably already know, but: Ctrl+Alt+T

**Open it.** You'll see something like:
```
user@computer:~$
```

This is where the magic happens. And the frustration. Mostly frustration at first.

### What's VS Code?

**Visual Studio Code** = a free text editor for code.

Think of it like Microsoft Word, but for programming.

**Not the same as Visual Studio** (different product, very confusing naming).

**Download:** https://code.visualstudio.com/

Install it. Open it. It looks intimidating. That's normal.

### What's Git?

**Git** = version control system.

It tracks changes to your files. Like "Track Changes" in Word, but WAY more powerful.

**Why you need it:**
- Undo mistakes
- See what changed
- Collaborate with others (including AI)
- Time travel through your code
- **NOT OPTIONAL** for real projects

**Download:**
- Windows: https://git-scm.com/download/win
- Mac: `brew install git` (or download from git-scm.com)
- Linux: `sudo apt install git` (Ubuntu/Debian)

### What's a Virtual Environment?

(Only relevant if you're doing Python projects - skip if not)

A **virtual environment** = isolated box for your project's dependencies.

**Why it matters:**
- Project A needs library version 1
- Project B needs library version 2
- Without virtual env: CONFLICT
- With virtual env: both work fine

**You'll create one later. Just know it exists.**

---

## Part 3: Installing Claude Code (The REAL Steps)

### Step 1: Prerequisites Check

Before installing Claude Code, make sure you have:
- [ ] A terminal open
- [ ] Node.js installed (check: `node --version`)
  - Don't have it? Download from https://nodejs.org/
  - Get the LTS version (the stable one)

### Step 2: Install Claude Code

Open your terminal and run:

```bash
npm install -g @anthropic-ai/claude-code
```

**This will probably take a minute.** Don't panic.

**If you get "permission denied":**
```bash
sudo npm install -g @anthropic-ai/claude-code
```

**If you get "command not found: npm":**
- You don't have Node.js installed
- Go install Node.js first (see step 1)
- Come back and try again

### Step 3: Get Your API Key

You need an API key to talk to Claude.

**Go to:** https://console.anthropic.com/

1. Create account (or log in)
2. Go to "API Keys" section
3. Click "Create Key"
4. **COPY IT IMMEDIATELY** - you only see it once
5. Save it somewhere safe (password manager, etc)

**Important:**
- Don't share this key
- Don't commit it to Git
- It costs money to use (they give you free credits to start)
- Track your usage at https://console.anthropic.com/settings/usage

### Step 4: Configure Claude Code

Run:
```bash
claude auth login
```

It will ask for your API key.

**Paste it.** (Right-click in terminal to paste, or Ctrl+Shift+V)

Press Enter.

**If it worked:** You'll see "Successfully authenticated!"

**If it didn't work:**
- Check the API key is correct
- Make sure you copied the whole thing
- No extra spaces
- Try again

### Step 5: Test It

Create a test folder:
```bash
mkdir test-claude
cd test-claude
```

Start Claude Code:
```bash
claude
```

Ask it something simple:
```
Create a file called hello.txt with the text "It works!"
```

**If Claude creates the file:** CONGRATS! It works!

**If it doesn't:** Check the error message. Google it. We'll cover common errors below.

---

## Part 4: Your First Real Project

### Starting From Scratch

Let's build something real.

**Step 1: Create your project folder**

```bash
cd ~/Documents  # or wherever you keep projects
mkdir my-first-project
cd my-first-project
```

**Step 2: Initialize Git**

```bash
git init
```

This creates a hidden `.git` folder that tracks everything.

**Step 3: Open in VS Code**

```bash
code .
```

(The `.` means "current folder")

VS Code opens with your project.

**Step 4: Start Claude Code**

In the terminal (inside VS Code or separate):
```bash
claude
```

**Step 5: Ask Claude to help you set up**

```
Help me set up a basic project structure with:
- A README.md file explaining what this project does
- A .gitignore file for [Python/JavaScript/etc]
- A folder structure for a simple [web app/script/tool]
```

**Claude will create files.**

**Step 6: Check what it did**

Look in VS Code. You should see new files.

Open them. Read them. **Understand what Claude created.**

### The Workflow That Actually Works

**1. Be specific with your requests**

Bad:
> "Make a website"

Good:
> "Create an HTML file with a header saying 'My Portfolio', a navigation menu with Home/About/Contact links, and a footer with the current year"

**2. One thing at a time**

Don't ask for everything at once.

Build incrementally.

**3. When it fails, read the error**

Claude will show you errors.

**Don't panic.**

Read the error message.

Copy it.

Ask Claude:
> "I got this error: [paste error]. What does it mean and how do I fix it?"

**4. Iterate**

First version won't be perfect.

That's fine.

Ask for changes:
> "Can you update the navigation to be horizontal instead of vertical?"

---

## Part 5: The Problems (And How to Actually Fix Them)

### "Permission Denied"

**What it looks like:**
```
Error: EACCES: permission denied
```

**Why it happens:**
Your user account doesn't have permission to write/read that file or folder.

**How to fix:**

**Option 1: Use sudo (Linux/Mac)**
```bash
sudo [command]
```

This runs the command as administrator.

**Option 2: Fix permissions**
```bash
chmod +x [filename]  # makes file executable
chmod 644 [filename]  # makes file readable/writable by you
```

**Option 3: Work in your home directory**

Don't try to create files in system folders.

Stay in `/home/yourusername/` or `~/Documents/`

### "Command Not Found"

**What it looks like:**
```
command not found: python
```

**Why it happens:**
The program isn't installed, or isn't in your PATH.

**How to fix:**

1. **Is it installed?**
```bash
which python
which python3
```

If no output → not installed

2. **Install it:**
- Python: https://python.org/downloads
- Node: https://nodejs.org
- Git: https://git-scm.com

3. **Restart your terminal** after installing

### "API Rate Limit Exceeded"

**What it looks like:**
```
Error: Rate limit exceeded
```

**Why it happens:**
You're making too many requests too fast, or you hit your usage limit.

**How to fix:**

1. **Wait a bit** (usually a few seconds)
2. **Check your usage:** https://console.anthropic.com/settings/usage
3. **Upgrade plan** if you need more
4. **Be more efficient** with requests - ask for multiple things at once instead of many small requests

### "It's Not Working" (Generic Debugging)

**Step 1: Read the WHOLE error message**

Don't just see "Error" and panic.

The error message tells you what's wrong.

**Step 2: Google it**

Copy the error message.

Google: `[error message] [tool name]`

Example: `EACCES permission denied npm`

Someone has had this problem before.

**Step 3: Ask Claude**

Paste the error:
> "I got this error: [paste]. What does it mean?"

Claude can explain errors in plain English.

**Step 4: Check the basics**

- Are you in the right folder?
- Did you activate your virtual environment? (Python)
- Did you install dependencies? (`npm install`, `pip install -r requirements.txt`)
- Did you spell everything correctly?

---

## Part 6: Git Fundamentals

### What's a Commit?

A **commit** = a snapshot of your project at a point in time.

Like saving your game in a video game.

### Basic Git Workflow

1. **Make changes** to files

2. **Check what changed:**
```bash
git status
```

3. **Add files to commit:**
```bash
git add .  # adds everything
# or
git add filename.txt  # adds specific file
```

4. **Commit with message:**
```bash
git commit -m "Added login functionality"
```

**Your message should say WHAT you did.**

5. **See history:**
```bash
git log
```

### "I Messed Up, Now What?"

**Undo last commit (keep changes):**
```bash
git reset --soft HEAD~1
```

**Undo changes to a file:**
```bash
git checkout -- filename.txt
```

**See what changed:**
```bash
git diff
```

**Go back to earlier version:**
```bash
git log  # find the commit ID
git checkout [commit-id]
```

### The Backup Strategy

**Why I have multiple backups:**

Because I learned the hard way.

**My backup strategy:**

1. **Git commits** (frequently!)
```bash
git add .
git commit -m "work in progress"
```

2. **Separate backup folders**

Before major changes:
```bash
cp -r my-project my-project-backup-2025-01-18
```

3. **Cloud backup**

Push to GitHub/GitLab:
```bash
git remote add origin [your-repo-url]
git push -u origin main
```

**You'll notice I have backups like:**
```
event-plan/
event-plan-backup-2025-10-19/
event-plan-backup-final-19-out-13h50/
```

**Yes, multiple backups.**

**No, it's not overkill.**

When you're about to make big changes with AI, **backup first**.

---

## Part 7: Your Setup Checklist

### Day 1: Get the Basics

- [ ] Install VS Code
- [ ] Install Node.js
- [ ] Install Claude Code (`npm install -g @anthropic-ai/claude-code`)
- [ ] Get API key from https://console.anthropic.com/
- [ ] Run `claude auth login`
- [ ] Test with: "Create a hello.txt file"

### Day 2: Git Fundamentals

- [ ] Install Git
- [ ] Configure Git:
  ```bash
  git config --global user.name "Your Name"
  git config --global user.email "your@email.com"
  ```
- [ ] Create a test repo:
  ```bash
  mkdir test-repo
  cd test-repo
  git init
  ```
- [ ] Make first commit:
  ```bash
  echo "Hello Git" > README.md
  git add README.md
  git commit -m "Initial commit"
  ```

### Week 1: First Project

- [ ] Plan a simple project (to-do app, personal website, etc)
- [ ] Create project folder
- [ ] Initialize Git (`git init`)
- [ ] Ask Claude Code to set up structure
- [ ] Build the project iteratively
- [ ] Commit regularly (`git add . && git commit -m "progress"`)

---

## Quick Reference Card

**Start Claude Code:**
```bash
cd your-project
claude
```

**Git Basics:**
```bash
git status              # what changed?
git add .               # stage everything
git commit -m "message" # save snapshot
git log                 # see history
```

**Common Fixes:**
```bash
# Permission denied
chmod +x filename

# Command not found
which [command]  # is it installed?

# Wrong folder
pwd              # where am I?
cd ~/Documents   # go somewhere else
```

**Help:**
```bash
claude --help
git --help
man [command]    # manual pages (press q to exit)
```

**Emergency:**
```bash
# Made a mistake, undo it
git reset --soft HEAD~1  # undo last commit, keep changes
git checkout -- file.txt # undo changes to file

# Backup before disaster
cp -r project project-backup-$(date +%Y-%m-%d)
```

---

## What's Next?

**Continue the guide series:**

**[Part 2: Building Real Projects](/guides/building-real-projects/)** covers:
- Building real projects (walkthrough of my 100+ page murder mystery game)
- When to use Claude web vs Claude Code vs Cline
- What AI can and can't do (honest truths)
- The ADHD perspective and maintaining flow
- Resources that actually help

**[Part 3: Building with Hugo](/guides/building-with-hugo/)** covers:
- Building websites with Hugo
- Deploying to GitHub Pages
- Automated workflows
- Common problems and solutions

**Want to see the messy reality?** Check out the **[Building in Public](/tags/building-in-public/)** series where I document the actual learning process (with all the failures).

**You've got the basics now.**

The environment is set up. You know the tools. You can create projects and fix common problems.

**Next: Build something real.** 💙

---

**Last updated:** 2025-01-18

**Questions?** Leave a comment. I'll help if I can.

Because someone helped me. Now I help you. That's how this works. ✨
