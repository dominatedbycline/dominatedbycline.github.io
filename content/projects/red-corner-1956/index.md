---
title: "The Red Corner: Moscow 1956"
description: "12-player murder mystery dinner party set in 1956 Soviet underground, built with unconventional AI tools"
date: 2026-01-11
draft: false
featured: true
tags: ["game-design", "ai-generation", "murder-mystery", "python", "typst", "groq", "dspy"]
---

# The Red Corner: Moscow 1956

**A 12-player murder mystery dinner party. 100% AI-generated. Zero manual content creation.**

[🎭 Try the Live Invitation](https://elaborate-kulfi-68ffe8.netlify.app/) • [📊 Interactive Dashboard](https://elaborate-kulfi-68ffe8.netlify.app/dashboard.html)

---

## What Is This?

Imagine you're in 1956 Moscow. Stalin's been dead for three years, but his shadow still looms. You're part of the **Vory V Zakone**—the thieves-in-law—an underground criminal brotherhood with its own code, its own tattoos, its own laws.

Tonight, you gather at **The Red Corner**, an illegal jazz club hidden beneath a communal apartment. Cheap vodka. Cigar smoke. A saxophonist wailing Miles Davis covers. And then...

Alice Volkov—queen of the black market—collapses with a silver needle in her neck. The smell of bitter almonds fills the air. One of you is a murderer.

**The Red Corner** is a complete murder mystery experience: 12 character dossiers, 14 clues, 36 personal objectives, a 3-paragraph twist ending, and an interactive voting system. All created in 3 days with AI assistance.

---

## The Challenge

I wanted to build a murder mystery game. But traditional game design is **slow**:

- Writing 12 unique characters? **Days.**
- Creating interconnected backstories? **Weeks.**
- Balancing clues so they're not too easy or too hard? **Weeks more.**
- Designing 44 physical props with descriptions? **Forget it.**

So I asked: **Can AI do this? All of it? In 3 days?**

Turns out: **Yes.**

---

## The Unusual Tech Stack

This isn't your typical "I asked ChatGPT to write a story" project. I used a bunch of tools most people haven't heard of—and that's kind of the point.

### 1. Groq (Not OpenAI)

**What it is:** Ultra-fast LLM inference using custom hardware (LPUs, not GPUs).

**Why I chose it:** Sub-second generation. OpenAI takes 5-10 seconds per request. Groq? **0.3 seconds.** When you're generating 12 characters, 132 relationships, 36 objectives, and 14 clues, speed compounds. What would take 2 hours with OpenAI took **20 minutes** with Groq.

**Model:** `llama-3.3-70b-versatile` (open-source, fast, cheap)

**Real talk:** Groq is insanely underrated. If you're iterating on AI-generated content, speed > everything.

---

### 2. DSPy (Not Prompt Engineering)

**What it is:** A framework for programming with LLMs using structured signatures, not raw prompts.

**Why I chose it:** Traditional prompt engineering is fragile. Change one word, get unpredictable outputs. DSPy lets you write **LLM programs** with typed inputs/outputs, optimization, and validation.

**Example:** Instead of:
```
"Write a character backstory for a Russian mobster in 1956..."
```

I wrote:
```python
class CharacterGenerator(dspy.Signature):
    theme = dspy.InputField()
    name = dspy.InputField()
    role = dspy.InputField()
    backstory = dspy.OutputField(desc="Dramatic 2-paragraph backstory")
    secrets = dspy.OutputField(desc="List of 3 secrets (high/med/low)")
```

**Result:** Consistent, structured outputs. Every time. No parsing. No surprises.

**Real talk:** If you're building anything serious with LLMs, learn DSPy. Prompts are dead.

---

### 3. Typst (Not LaTeX)

**What it is:** A modern typesetting system. Think LaTeX, but actually usable.

**Why I chose it:** LaTeX takes **5+ minutes** to compile a complex document. Typst? **2 seconds.** When you're generating 12 PDFs with custom fonts, layouts, and formatting, compile time matters.

**What I generated:**
- 12 character dossiers (30-33 KB each, professional quality)
- 1 clue master reference for the GM
- All with custom typography, aged paper aesthetic, Soviet-era styling

**Real talk:** LaTeX is a nightmare. Typst is what LaTeX should have been. If you're generating PDFs programmatically, switch now.

---

### 4. Vis.js (Interactive Relationship Graphs)

**What it is:** A JavaScript library for network visualization.

**Why I used it:** 12 characters, 132 relationships, custom ontology. You can't track that in a spreadsheet. You need a **3D interactive graph**.

**What I built:** [An interactive dashboard](https://elaborate-kulfi-68ffe8.netlify.app/dashboard.html) where you can:
- Click any character to see their connections
- Filter by relationship type (BOSS, LOVER, ENEMY, INFORMANT, etc.)
- Explore the web of secrets in real-time
- Visualize the Vory V Zakone hierarchy

**Real talk:** This dashboard is more useful than the PDF dossiers. Players reference it constantly during the game.

---

### 5. Custom Ontology (Vory V Zakone Relationships)

**What it is:** Domain-specific relationship types, not generic labels.

**Why I created it:** Generic relationships (friend/enemy) are boring. I needed **Vory-specific** relationships:
- `BOSS` → Someone you answer to
- `LOVER` → Romantic entanglement
- `ENFORCER` → Someone who does your dirty work
- `INFORMANT` → Someone feeding you intel
- `BLACKMAIL_VICTIM` → Someone you control
- `DEBTOR` → Someone who owes you
- `BETRAYER` → Someone who violated the code

**Result:** 132 relationships that feel **authentic** to the 1956 Moscow criminal underworld.

**Real talk:** Generic AI outputs are generic. Custom ontologies make AI outputs feel **handcrafted**.

---

### 6. localStorage Voting (No Backend Needed)

**What it is:** Client-side browser storage for the voting system.

**Why I used it:** I didn't want to run a server. I didn't want a database. I wanted players to vote on their phones, and the GM to collect results without any infrastructure.

**How it works:**
- Voting is locked by default (players see "voting not available")
- GM unlocks it via browser console: `localStorage.setItem('votingUnlocked', 'true')`
- Players vote, data stored locally
- GM collects votes from each phone (logged to console)
- Zero backend. Zero databases. Zero server costs.

**Real talk:** Sometimes the simplest solution is the best solution.

---

### 7. Python QRCode (Themed QR Codes)

**What it is:** A Python library for generating QR codes.

**Why I used it:** I needed QR codes for easy player access. But I wanted them **themed**—not just black-and-white squares. So I generated:
- Dark ink color (`#1a0f08`) on aged paper background (`#e8dcc4`)
- 300 DPI for high-quality printing
- Two versions: simple + labeled with game title

**Result:** QR codes that match the game's aesthetic. Small detail, big impact.

**Real talk:** Don't settle for default QR codes. Make them beautiful.

---

### 8. Netlify Drag-and-Drop (10-Second Deployment)

**What it is:** Netlify's "Drop" feature—drag a folder, get a live URL.

**Why I used it:** I wanted public deployment without messing with git, CI/CD, or config files.

**Deployment process:**
1. Open [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag `netlify_deploy/` folder
3. Wait 10 seconds
4. Get live URL: `https://elaborate-kulfi-68ffe8.netlify.app/`

**Real talk:** This is how deployment should work. Simple. Fast. Done.

---

## What I Built

### 12 Character Dossiers
- 30+ pages each
- Backstory, secrets, objectives, relationships
- Professional PDF typesetting with Typst
- Aged paper aesthetic, Soviet-era fonts

### 14 Physical Clues
- 7 real clues (point to the murderer)
- 7 red herrings (mislead players)
- Exact locations specified
- Discovery methods documented

### 36 Personal Objectives
- 3 per character
- Conflicting goals (creates drama!)
- Physical props for each objective
- Success conditions defined

### 44 Physical Props
- Full descriptions, sizes, materials
- DIY guides for creation
- Examples: silver needle, cipher paper, forged passport, ledger, gold locket

### Interactive Voting System
- Mobile-optimized web interface
- localStorage-based (no backend)
- GM unlock mechanism
- Paper backup system (if tech fails)

### 480-Line GM Running Script
- Phase-by-phase playbook
- Timing guide (7pm-1am, ~5 hours)
- Clue revelation strategy
- Troubleshooting scenarios
- Pacing tips

### Comprehensive Documentation
- Game rules, atmosphere guide, props guide
- Venue layout with ASCII floor plans
- QR code generation scripts
- Deployment guides (Netlify, GitHub Pages, Vercel, local server)

---

## Technical Lessons

### 1. Speed Enables Iteration

Groq's sub-second inference meant I could **iterate rapidly**. Don't like a character? Regenerate in 0.3 seconds. Clue too obvious? Adjust and regenerate. Speed isn't just convenience—it's **creative freedom**.

### 2. Structure > Prompts

DSPy's structured signatures forced me to think about **types**, not just text. This made outputs predictable, debuggable, and composable. I'll never go back to prompt engineering.

### 3. Domain Ontologies Matter

The Vory V Zakone ontology made relationships feel **real**. Generic "friend/enemy" labels would've been forgettable. Custom relationship types (`ENFORCER`, `INFORMANT`, `BETRAYER`) made the underworld come alive.

### 4. Compile Time Kills Creativity

Waiting 5 minutes for a LaTeX PDF to compile kills iteration. Typst's 2-second compile time meant I could **experiment**. Try a font. Regenerate. Try a layout. Regenerate. Creative work needs tight feedback loops.

### 5. Visualization > Documentation

The interactive relationship graph is more useful than 100 pages of text. Seeing the web of connections helps players (and the GM) understand the story instantly.

### 6. Simple Tech Wins

localStorage voting. No database. No server. No auth. No complexity. Just works. Sometimes the simplest solution is the right solution.

---

## What Makes This Different?

**Most AI-generated games are obvious.** They feel generic, soulless, mass-produced.

This one doesn't.

**Why?**

1. **Custom ontology** - Not generic relationships, Vory-specific roles
2. **Structured generation** - DSPy signatures, not loose prompts
3. **Speed-enabled iteration** - Groq's 0.3s inference meant I could refine until it felt right
4. **Domain research** - I fed the system real 1950s Moscow details (kommunalka, Vory code, Bitch Wars)
5. **Human curation** - AI generated content, but I validated, refined, and structured it

**Result:** A game that feels handcrafted, even though it was AI-generated.

---

## Try It Yourself

**Live Invitation:** [https://elaborate-kulfi-68ffe8.netlify.app/](https://elaborate-kulfi-68ffe8.netlify.app/)

**Interactive Dashboard:** [See the relationship web](https://elaborate-kulfi-68ffe8.netlify.app/dashboard.html)

**Status:** Production-ready, event TBD

**Want to run this at your event?** All materials are ready:
- 12 printable character dossiers
- GM running script
- Clue placement guide
- Voting system (digital + paper backup)
- Complete setup documentation

---

## What's Next?

This was game #1. I'm building more:

- **Orfanato** - A Portuguese orphanage mystery (in development)
- More games exploring different settings, themes, and mechanics

Each game is a chance to push what AI can do with the right tools.

---

## Tech Stack Summary

| Layer | Tool | Why |
|-------|------|-----|
| **LLM** | Groq (llama-3.3-70b) | 0.3s inference (vs 5-10s OpenAI) |
| **Framework** | DSPy | Structured programs, not prompts |
| **Typesetting** | Typst | 2s compile (vs 5min LaTeX) |
| **Visualization** | Vis.js | Interactive 3D relationship graphs |
| **Voting** | localStorage | No backend needed |
| **QR Codes** | Python qrcode | Themed, 300 DPI |
| **Deployment** | Netlify Drop | 10-second drag-and-drop |
| **Ontology** | Custom (Vory V Zakone) | Domain-specific relationships |

---

## Final Thoughts

I built this in **3 days**. Not because AI did everything—it didn't. But because **the right tools enabled rapid iteration**.

- Groq's speed meant I could regenerate until it felt right.
- DSPy's structure meant I could trust the outputs.
- Typst's compile time meant I could iterate on layout.
- The custom ontology meant relationships felt authentic.

**AI isn't magic. But with the right tools, it's close.**

---

**Tags:** `game-design` `ai-generation` `murder-mystery` `python` `typst` `groq` `dspy` `vis.js` `typesetting`

**Date:** January 11, 2026

**Status:** Production-ready, awaiting event date
