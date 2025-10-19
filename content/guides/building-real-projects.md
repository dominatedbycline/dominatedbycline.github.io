---
title: "Part 2: Building Real Projects"
date: 2024-10-19
draft: false
weight: 2
tags: ["guide", "tutorial", "claude-code", "projects", "workflow", "real-world"]
description: "How to actually build real projects with AI. Honest truths about what works, what doesn't, and how to maintain flow. Includes a walkthrough of building a 100+ page murder mystery game."
---

# From Zero to AI-Powered Developer
## Part 2: Building Real Projects (The Reality Check)

**Read Part 1 first** if you haven't set up your environment yet.

In Part 1, we covered:
- Setting up Claude Code
- Understanding the tools
- Your first project
- Common problems and fixes

**Now in Part 2:**
- When to use which tool
- Real project walkthrough
- What AI can and can't do
- The ADHD perspective
- Resources and next steps

Let's get real about building with AI.

---

## Part 1: Understanding the Tools Ecosystem

### When to Use What

**Claude Web (claude.ai)**

✅ Use for:
- Planning a project before you code
- Learning concepts
- "How do I approach this problem?"
- Brainstorming architecture
- Understanding errors

❌ Don't use for:
- Actually writing code files
- Managing real projects
- File operations

**Example:**
Before building my murder mystery game, I used Claude web to:
- Plan the overall structure
- Understand Typst (the typesetting tool)
- Design the automation workflow

**Then I switched to Claude Code to actually build it.**

**Claude Code (CLI)**

✅ Use for:
- Building real projects
- Creating/editing files
- Running commands
- Setting up infrastructure
- Automated workflows

❌ Don't use for:
- Quick questions (web is faster)
- Just learning (no need for file access)

**Example:**
I used Claude Code to:
- Create 100+ character sheets from templates
- Build Python automation scripts
- Set up Git hooks
- Create Makefile for project commands

**The Pattern:**
1. **Plan in Claude web**
2. **Build in Claude Code**
3. **Iterate based on results**

### What's an MCP Server?

**MCP** = Model Context Protocol

**In simple terms:**
A way for Claude to talk to your apps/services.

**Example:**

I built an event planning app with a database.

I created an MCP server that lets Claude:
- Create events
- Add tasks
- Search vendors
- All by just asking in natural language

**Without MCP:**
```
Me: "Add a task to event 4"
Claude: "You need to make an API call to..."
Me: [copies curl command, runs it manually]
```

**With MCP:**
```
Me: @eventflow create task for event 4: "Book photographer"
Claude: [does it directly]
Done! Task created.
```

**Do you need this right away?**

**No.** It's advanced.

Learn the basics first.

Come back to MCP when you have a project that would benefit.

---

## Part 2: Real Project Walkthrough

### Mystery Crime Party: Christmas Murder Dinner 1926

**The goal:**
Create a complete murder mystery game for 11 players, with character sheets, clues, props lists, and game master materials.

**The challenge:**
100+ pages of content, needed automation, version control, and build system.

**How I structured it (with Claude's help):**

```
Mystery_Crime_Party/
├── 00_PROJECT_DOCS/           # Master plans, checklists
├── 01_CORE_NARRATIVE/         # Story, timeline, solution
├── 02_CHARACTERS/             # One folder per character
│   ├── HELENA/
│   ├── VICTORIA/
│   └── ... (11 characters)
├── 03_UNIVERSAL_MATERIALS/    # Clues everyone gets
├── 04_GAME_MASTER_MATERIALS/  # My secret notes
├── 06_PROPS_AND_PHYSICAL/     # What to buy/make
├── 07_FOOD_AND_LOGISTICS/     # Party planning
├── 08_REFERENCE_AND_RESEARCH/ # 1920s research
├── 09_DESIGN_ASSETS/          # Images, graphics
├── scripts/                   # Automation scripts
└── Makefile                   # Build commands
```

**Key files Claude helped create:**

**Makefile** - automation commands
```makefile
make ingest         # Create digest for LLMs
make pdf-helena     # Convert character notes to PDF
make pdf-all-chars  # Convert ALL characters to PDFs
make stats          # Show project statistics
make clean          # Remove generated files
```

**install-hooks.sh** - Git automation
```bash
#!/bin/bash
# Installs Git pre-commit hooks
# Validates content before commits
```

**README.md** - project documentation
```markdown
# Christmas Murder Dinner 1926

Complete murder mystery game for 11 players.

## Quick Start
...
```

### What I Asked Claude

**Session 1: Project Setup**
```
I need to organize a murder mystery game project.
I'll have 11 characters, universal clues, props, food planning,
and game master materials.

Create a numbered folder structure with a README explaining each folder.
```

**Session 2: Automation**
```
I need a Makefile that can:
- Convert all character notes.md files to PDFs using pandoc
- Create a digest of the repository for sharing with LLMs
- Show statistics by folder
- Clean up generated files
```

**Session 3: Git Hooks**
```
Create a pre-commit Git hook that validates:
- All markdown files are properly formatted
- No duplicate character names
- All references between files are valid
```

### What Worked

✅ **Numbered folders** kept everything organized
✅ **Makefile** made complex commands simple (`make pdf-all-chars`)
✅ **Automation scripts** saved HOURS of manual work
✅ **Git version control** let me experiment fearlessly
✅ **Clear README** meant I could return to the project after weeks and remember everything

### What Didn't Work (At First)

❌ **First folder structure was too nested** → reorganized
❌ **Git hooks broke on first try** → iterated with Claude
❌ **Pandoc PDF generation had formatting issues** → tuned parameters
❌ **Forgot to document my scripts** → added comments later

**None of this was catastrophic.**

Because Git meant I could undo mistakes.

Because Claude helped me fix issues as they came up.

**That's the workflow.**

---

## Part 3: The Honest Truths

### What AI Can't Do

**AI won't:**
- Make creative decisions for you
- Know what you want without you explaining
- Work perfectly on the first try
- Replace you learning things
- Understand context it hasn't seen
- Fix problems it doesn't know about

**You still need to:**
- Direct the work
- Provide clear requirements
- Review what it creates
- Understand the code (at least somewhat)
- Make final decisions
- Learn from what it builds

### What AI CAN Do

**AI will:**
- Write code way faster than you could
- Explain complex concepts simply
- Generate boilerplate/scaffolding instantly
- Help debug errors
- Suggest solutions you wouldn't think of
- Keep working when you're stuck
- **Amplify your abilities massively**

**Real example:**

I needed Git hooks for my project.

**Without AI:**
- Research Git hooks (2 hours)
- Learn bash scripting (4 hours)
- Write hook script (2 hours)
- Debug issues (3 hours)
- **Total: ~11 hours**

**With Claude Code:**
- "Create a pre-commit hook that validates markdown files"
- Claude creates it (2 minutes)
- Test it, ask for fixes (15 minutes)
- **Total: ~20 minutes**

**Did I learn less?**

No! I learned by reading what Claude created and asking it to explain.

**Did I save time?**

**Absolutely.**

---

## Part 4: The ADHD Perspective (Real Talk)

If you have ADHD, you know: **context switching is death.**

### The Problem

You're in flow, building something.

You hit a roadblock (need to learn Git hooks).

You have two choices:

1. **Stop and learn** (lose flow, might not come back)
2. **Skip it** (project incomplete)

Both suck.

### With AI: Option 3

**Ask Claude, keep flowing**

```
"I need a Git hook that runs before commits.
Create it and explain how it works."
```

Claude builds it.

You stay in flow.

You learn by reading the code.

**Momentum preserved.**

### Why This Matters

For ADHD brains (and honestly, everyone), this is huge.

I built a 100+ page game in 2 weeks because I could stay in hyperfocus.

Every time I hit a technical blocker, Claude unblocked me in minutes.

**That's the difference between "finished" and "abandoned in a folder."**

### The Hyperfocus Enabler

**Without Claude:**
- Stop creative work
- Learn Python deeply
- Figure out Typst automation
- Debug build scripts for hours
- **Lose creative flow**

**With Claude:**
- Stay in creative flow
- Ask for automation as needed
- Get working systems fast
- **Keep momentum going**

**This matters.** For ADHD brains, this is everything.

---

## Part 5: Resources That Actually Help

### Documentation (Read These Parts First)

**Claude Code Docs:**
https://docs.claude.com/en/docs/claude-code

→ Read: "Getting Started", "Core Concepts"
→ Skip (for now): Advanced features, MCP servers

**Git:**
https://git-scm.com/book/en/v2

→ Read: Chapters 1-3 (basics)
→ Skip: Advanced branching, server setup

**VS Code:**
https://code.visualstudio.com/docs

→ Read: "Getting Started", "User Interface"
→ Skip: Extensions, debugging (until you need them)

### When You're Stuck

**1. Read the error message**
- All of it
- Google the key part
- Someone's solved this before

**2. Check GitHub Issues**
- https://github.com/anthropics/claude-code/issues
- Search for your error
- Read solutions

**3. Ask Claude (web or Code)**
```
"I got this error: [paste error]
What does it mean and how do I fix it?"
```

**4. Community**
- Reddit: r/ClaudeAI
- Discord: Anthropic community
- Twitter: #ClaudeCode hashtag

### Next Steps (After You're Comfortable)

**Level 2:**
- [ ] MCP servers for app integration
- [ ] Custom scripts and automation
- [ ] Advanced Git (branching, merging)
- [ ] CI/CD pipelines

**Level 3:**
- [ ] Deploy to production
- [ ] Set up databases
- [ ] API integrations
- [ ] Containerization (Docker)

**Don't rush these.**

Master the basics first.

---

## Part 6: The Reality Check

### It's Not Magic

Setting this up takes effort.

Learning the tools takes time.

You'll get stuck.

You'll get frustrated.

**That's normal.**

### It's Still Work

AI doesn't replace work.

It **changes** the work.

Instead of:
- Writing boilerplate → Reviewing code Claude wrote
- Debugging for hours → Asking Claude to explain the error
- Learning everything first → Learning by doing with guidance

**You're still the one making it happen.**

AI is the amplifier.

### But It's POSSIBLE Work

Here's what I've built:

- 100+ page murder mystery game
- Automated typesetting pipeline
- Event planning platforms
- Backend APIs with databases
- Frontend UIs
- Automated build systems
- Git hooks and workflows

**I'm not a developer.**

I'm someone who had ideas and AI helped me build them.

**If I can do this, you can too.**

---

## Part 7: The Roadmap Forward

### Week 2: Level Up

- [ ] Create a .gitignore file
- [ ] Use a .env file for configuration
- [ ] Create a README.md documenting your project
- [ ] Make a backup folder before major changes
- [ ] Push to GitHub (optional but recommended)

### Month 1: Getting Comfortable

- [ ] Have helper scripts (`start.sh`, `build.sh`, etc)
- [ ] Understand git workflow (add, commit, push)
- [ ] Know when to use Claude web vs Claude Code
- [ ] Have a project structure pattern you like
- [ ] Built at least one complete project

### Month 3: Building Confidence

The first week is the hardest.

Everything's new.

Every error feels like a wall.

**Push through.**

After week 2, things click.

After a month, you'll wonder how you worked without AI.

After 3 months, you'll be building things you never thought you could.

**I've seen it happen.**

It happened to me.

**It'll happen to you.**

---

## The Thank You

**To "nobody":**

Thank you for helping when I was frustrated.

For explaining the "obvious" things that weren't obvious.

For not making me feel stupid for not knowing.

**That's what this guide tries to be for others.**

**To the tools:**

Claude Code, Git, VS Code, and the entire ecosystem.

You enabled things I couldn't do alone.

**To you, reading this:**

If you're stuck, frustrated, confused - **you're not alone.**

**Everyone starts here.**

The difference is pushing through.

**You've got this.** 💙

---

## What You've Learned

**Part 1 + Part 2 combined:**

✅ How to set up Claude Code and your dev environment
✅ What terminals, Git, and VS Code actually are
✅ How to fix common problems (Permission Denied, etc)
✅ When to use Claude web vs Claude Code
✅ How to structure real projects
✅ What AI can and can't do
✅ How to maintain flow while learning
✅ Where to go for help

**You're ready.**

Not to know everything.

Not to never get stuck.

**But to start building.**

And that's what matters.

---

## Going Further

**Want more?**

Follow [#artifactum](/tags/artifactum/) for the full series on building the murder mystery game:
- Creative workflow with AI
- Automated typesetting with Typst
- Physical production and binding
- The complete AI toolkit I use

**Questions?** Leave a comment. I'll help if I can.

Because someone helped me. Now I help you. That's how this works. ✨

---

**Last updated:** 2025-01-19

**This is a living document** - will be updated as I learn more.

---

## Final Thought

You're not trying to become a professional developer.

You're trying to **build the thing you imagined.**

AI makes that possible.

Even if you're "not technical."

Even if you have ADHD and lose focus.

Even if you've never coded before.

**The tools exist.**

**The knowledge is accessible.**

**You can do this.**

Now go build something. 💙✨
