---
title: "Artefactum: AI-Powered Mystery Game Generator"
description: "Automated system for generating complete murder mystery games in hours, not months"
date: 2026-01-11
draft: false
featured: true
tags: ["ai", "automation", "game-design", "python", "dspy", "groq", "llm", "typst"]
---

# Artefactum: AI Mystery Game Generator

**Generate a complete 12-player murder mystery game in 3 hours. Fully automated. Production-quality.**

[📊 See Example: Red Corner Dashboard](https://elaborate-kulfi-68ffe8.netlify.app/dashboard.html) • [🎭 Example Game: The Red Corner](../red-corner-1956/)

---

## The Problem

Traditional murder mystery game design is **painfully slow**:

- **12 unique characters?** 2-3 weeks of writing
- **132 interconnected relationships?** Another week
- **14 balanced clues?** Days of testing and iteration
- **36 conflicting objectives?** Weeks of game design
- **44 physical props with descriptions?** Forget it
- **Professional PDFs?** Hire a designer or spend weeks learning LaTeX

**Total time:** 2-3 months for one game.

**My goal:** Reduce this to **3 hours**.

---

## The Solution

I built **Artefactum**—an automated pipeline that generates complete, production-ready murder mystery games using unconventional AI tools.

**Input:** A theme (e.g., "1956 Moscow Russian Mafia")

**Output (3 hours later):**
- 12 character dossiers (professional PDFs)
- 14 clues (7 real + 7 red herrings)
- 36 objectives (3 per character, with conflicts)
- 44 physical props (with descriptions)
- 132 character relationships (graph-validated)
- Complete story with 3-paragraph twist
- Interactive web dashboard
- GM running script
- Voting system
- Deployment package

**Everything. Automated. Fast.**

---

## What It Generates

### Characters (12 Total)
- Unique archetypes (The Schemer, The Righteous, The Betrayer, etc.)
- 2-paragraph dramatic backstories
- 3 secrets per character (high/medium/low tier)
- Personality traits, flaws, moral dilemmas
- Relationships with all other characters

### Relationships (132 Total)
- Custom ontology (not generic friend/enemy)
- Domain-specific types (BOSS, ENFORCER, INFORMANT, LOVER, BLACKMAIL_VICTIM, etc.)
- Bidirectional validation (A knows B → B knows A)
- Conflict detection system
- Graph visualization for GM

### Story Arc
- 4-act structure (Setup → Murder → Investigation → Revelation)
- Victim with compelling background
- Murderer with layered motive (3-paragraph twist)
- Murder method with forensic details
- Timeline of events (12+ checkpoints)
- Red herrings and subplots

### Clues (14 Total)
- 7 real clues (point to murderer)
- 7 red herrings (mislead players)
- Tiered difficulty (easy/medium/hard)
- Exact locations specified
- Discovery methods documented
- Linked to physical props

### Objectives (36 Total)
- 3 per character
- Physical props required
- Exact locations
- Success conditions
- "Caught" excuses
- Built-in conflicts (creates drama!)

### Physical Props (44 Unique Items)
- Descriptions, sizes, materials
- DIY creation guides
- Linked to objectives and clues
- Examples: cipher paper, forged documents, weapons, ledgers, photographs

### Deliverables
- 12 professional PDF dossiers (Typst-compiled, 30+ pages each)
- Interactive dashboard with relationship graphs (Vis.js)
- Clue master reference for GM
- 480-line GM running script
- Voting system (digital + paper backup)
- Complete deployment package

---

## The Innovative Architecture

This isn't a "ChatGPT wrapper." It's a **multi-stage pipeline** using tools most people haven't heard of.

### 1. DSPy Pipeline (Not Prompt Engineering)

**What it is:** Structured LLM programming with typed signatures, not fragile prompts.

**Why it matters:** Traditional prompting breaks when you scale. DSPy treats LLMs as **programmable functions** with:
- Typed inputs/outputs (Pydantic models)
- Validation at each stage
- Optimization loops
- Composable modules

**Result:** Consistent, debuggable, production-quality outputs.

**Real talk:** I'll never go back to prompt engineering. DSPy is the future.

---

### 2. Groq Inference (Sub-Second Generation)

**What it is:** Ultra-fast LLM inference using custom LPU hardware.

**Why it matters:** When generating 200+ pieces of content (characters, relationships, clues, objectives), speed compounds. OpenAI takes **2+ hours** for a full game. Groq? **20 minutes**.

**Model:** `llama-3.3-70b-versatile` (open-source, fast, cheap)

**Real talk:** Speed enables iteration. Groq makes experimentation feasible.

---

### 3. Graph-Based Validation

**What it is:** Relationship consistency checking using graph theory.

**Why it matters:** With 132 relationships, manual validation is impossible. The pipeline:
- Builds a directed graph of all relationships
- Validates bidirectional consistency (A→B implies B→A)
- Detects conflicts and contradictions
- Ensures protagonist coverage (every character has connections)

**Result:** No orphaned characters. No impossible relationships. No plot holes.

---

### 4. Custom Ontology System

**What it is:** Domain-specific relationship types, not generic labels.

**Why it matters:** Generic AI outputs feel generic. Custom ontologies make outputs feel **handcrafted**.

**Example (Vory V Zakone):** Instead of "friends" and "enemies," I have:
- `BOSS` - Someone you answer to
- `ENFORCER` - Someone who does your dirty work
- `INFORMANT` - Someone feeding you intel
- `BLACKMAIL_VICTIM` - Someone you control
- `BETRAYER` - Someone who violated the code

**Result:** Relationships that feel authentic to the setting.

---

### 5. Multi-Stage Generation

**How it works:**

```
Theme Input
    ↓
Stage 1: Generate 12 Characters
    ↓
Stage 2: Generate 132 Relationships (validated)
    ↓
Stage 3: Generate Story + Murder Mystery
    ↓
Stage 4: Generate Clues (linked to story)
    ↓
Stage 5: Generate Objectives (linked to props)
    ↓
Stage 6: Render PDFs (Typst)
    ↓
Stage 7: Generate Web Dashboard (Vis.js)
    ↓
Complete Game Package
```

Each stage validates outputs from previous stages. Errors caught early. No cascading failures.

---

### 6. Typst Rendering (2-Second PDF Generation)

**What it is:** Modern typesetting system (LaTeX alternative).

**Why it matters:** LaTeX takes 5+ minutes to compile complex documents. Typst? **2 seconds.** When generating 12 PDFs, compile time matters.

**Output quality:** Professional, print-ready, 300 DPI.

---

### 7. Pydantic Models (Structured Outputs)

**What it is:** Python library for data validation using type annotations.

**Why it matters:** LLMs output text. Pydantic converts text to **typed, validated data structures**. No parsing errors. No missing fields. No type mismatches.

**Example:**
```python
class Character(BaseModel):
    name: str
    role: str
    backstory: str
    secrets: List[Secret]
    objectives: List[Objective]
    relationships: List[Relationship]
```

**Result:** Structured data at every stage. Debuggable. Composable. Production-ready.

---

## What Makes It Special

### 1. Speed
- **Traditional:** 2-3 months
- **Artefactum:** 3 hours

### 2. Quality
- Professional PDF typesetting
- Balanced clue difficulty
- Conflict-free relationship graphs
- Production-ready documentation

### 3. Automation
- Zero manual content creation
- Fully validated outputs
- Reproducible pipeline
- Version-controlled

### 4. Customization
- Custom ontologies for any setting
- Adjustable complexity
- Theme-specific validation
- Flexible output formats

---

## Games Created So Far

### 1. The Red Corner: Moscow 1956
- **Theme:** Russian Mafia (Vory V Zakone + Bitch Wars)
- **Setting:** 1956 Moscow underground jazz club
- **Status:** 100% production-ready
- **Complexity:** High (experienced players recommended)
- [View Project Page](../red-corner-1956/)

### 2. Orfanato (In Development)
- **Theme:** Portuguese orphanage mystery
- **Setting:** TBD
- **Status:** 80% complete
- **Complexity:** TBD

---

## Interactive Demo

**See it in action:** [The Red Corner Dashboard](https://elaborate-kulfi-68ffe8.netlify.app/dashboard.html)

- Explore 132 character relationships
- Interactive 3D network graph (Vis.js)
- Filter by relationship type
- Click characters to see connections
- Real-time graph exploration

This dashboard is auto-generated for every game. Zero manual work.

---

## Why I'm Building This

**Two reasons:**

### 1. I Love Murder Mysteries (But Hate Manual Work)

I want to run murder mystery dinner parties. But existing games are:
- Expensive ($50-200)
- Generic (same plots reused)
- Limited selection (maybe 50 games exist)
- Not customizable

With Artefactum, I can:
- Generate infinite games
- Customize to any theme
- Adapt difficulty to my players
- Own the full content

### 2. This Could Be a Product

Murder mystery games are a **$100M+ market**. But the supply is:
- Limited (hard to create manually)
- Expensive (high production costs)
- Slow (months per game)

**Artefactum changes the economics:**
- Generate games in hours
- Customize to any theme
- Sell for $20-50 per game
- Or license the generator itself

**This could be a business.**

---

## What I'm NOT Sharing (Yet)

I'm building in public, but I'm **strategic about IP**:

**What I share:**
- Results (games, dashboards, PDFs)
- High-level architecture (DSPy, Groq, Typst)
- Tool choices and why

**What I DON'T share:**
- DSPy prompts and signatures
- Validation logic and algorithms
- Ontology structure
- Full source code
- Generation parameters

**Why:** This has commercial potential. I'm exploring patents, licensing, or product launch.

---

## Technical Lessons

### 1. Speed Unlocks Creativity

Groq's 0.3s inference meant I could **iterate fearlessly**. Don't like a character? Regenerate. Clue too obvious? Adjust and regenerate. Speed isn't just efficiency—it's **creative freedom**.

### 2. Structure Beats Prompts

DSPy's typed signatures made outputs **predictable**. No more "prompt alchemy." Just structured programs with validated outputs.

### 3. Domain Knowledge Matters

Generic ontologies produce generic games. Custom ontologies (like Vory V Zakone) produce games that feel **handcrafted**.

### 4. Validation Is Non-Negotiable

With 132 relationships and 44 props, manual validation is impossible. Automated graph validation catches errors early.

### 5. Tools Matter More Than Models

I used open-source Llama 3.3 (not GPT-4). Why? Because **Groq's speed** mattered more than model quality. The right infrastructure > the fanciest model.

---

## Status & Next Steps

**Current Status:**
- Production-ready pipeline
- 1 complete game (Red Corner)
- 1 in development (Orfanato)

**Next Steps:**
- Generate 5-10 more games (different themes)
- Playtest and validate timing/difficulty
- Consider product launch (sell games or license generator)
- Explore patents for automated game generation

---

## Tech Stack Summary

| Layer | Tool | Why |
|-------|------|-----|
| **LLM** | Groq (llama-3.3-70b) | 0.3s inference (vs 5-10s OpenAI) |
| **Framework** | DSPy | Structured programs, not prompts |
| **Validation** | Pydantic + Graph Theory | Type-safe, relationship-validated |
| **Typesetting** | Typst | 2s compile (vs 5min LaTeX) |
| **Visualization** | Vis.js | Interactive 3D graphs |
| **Ontology** | Custom (domain-specific) | Authentic relationships |

---

## Want to Collaborate?

I'm exploring commercial opportunities for Artefactum:
- Licensing the generator
- Selling pre-generated games
- Custom game generation service
- Partnerships with event companies

Interested? [Reach out on GitHub](https://github.com/marialu1) (check repos for contact).

---

## Final Thoughts

I built this because **I was frustrated**. Murder mystery games take months to create manually. I wanted to automate it.

Three hours later, I had a complete game. Production-quality. Professional PDFs. Interactive dashboard. Deployment package. Everything.

**AI isn't magic. But with the right tools—DSPy, Groq, Typst, custom ontologies—it's close.**

This is just the beginning.

---

**Tags:** `ai` `automation` `game-design` `python` `dspy` `groq` `llm` `typst` `product`

**Date:** January 11, 2026

**Status:** Production-ready, commercially viable, exploring launch
