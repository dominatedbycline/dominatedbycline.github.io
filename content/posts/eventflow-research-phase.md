---
title: "EventFlow: The Research Phase - Before Writing Any Code"
description: "How I spent a full day researching the event planning market, analyzing tools, and planning the MVP before writing a single line of code."
date: 2025-10-20
draft: false
tags: ["eventflow", "project", "research", "planning", "building-in-public"]
---

# EventFlow: The Research Phase

**The Context:** My friend asked me to help organize her wedding. I looked at existing event planning tools and thought: "I could build something better."

**The Temptation:** Jump straight into coding. Start building immediately.

**What I Actually Did:** Spent a full day doing deep research and planning with Claude before writing any code.

This is that story.

---

## Why Research First?

After building the [murder mystery game](/projects/artifactum/), I learned something important: **starting with a clear plan saves weeks of rebuilding**.

I had the energy. I had the determination. I had the tools (Claude Code, FastAPI knowledge).

But I didn't want to build something that "works but is a mess underneath."

So I forced myself to slow down and **research properly**.

---

## The Research Questions

I sat down with Claude and asked myself:

### 1. What Problem Am I Solving?

**The Market Pain Point I Discovered:**
- Guest list management alone takes **20-30 hours per event** for professional planners
- Existing tools are either too expensive, too complicated, too generic, or not smart enough
- Event planners spend more time managing tools than planning events

**The Real Problem:** Current tools don't reduce the cognitive load. They just digitize the chaos.

### 2. What Already Exists?

I analyzed existing event planning tools:

**The Expensive Ones:**
- Full-featured but cost $100-300/month
- Over-complicated for most needs
- Designed for enterprise events, not flexible enough

**The Simple Ones:**
- Easy to use but lack depth
- No AI features
- Just digitized spreadsheets

**The Generic Ones:**
- Try to do everything (project management + event planning)
- Not specialized enough for event planners' workflows

**My Insight:** There's a gap for a tool that's **complex under the hood but simple to use** + **AI-powered to reduce manual work**.

### 3. What Should I Build First?

I broke down the MVP into 3 priority levels:

**🔴 LEVEL 1: CORE (Must Have)**
- Event management (CRUD operations)
- Guest list with RSVP system
- Basic dashboard

**Why Start Here:** If I solve guest list management brilliantly, planners will love it. That's 20-30 hours saved per event.

**🟡 LEVEL 2: DIFFERENTIATORS**
- Vendor management
- Budget tracking
- Task/timeline management

**🟢 LEVEL 3: WOW FACTOR**
- AI-powered features
- Automated suggestions
- Smart recommendations

**The Strategy:** Build Level 1 perfectly. Ship it. Get feedback. Then iterate.

### 4. What Tech Stack Makes Sense?

I researched two paths:

**Option A: Next.js + Supabase**
- Pros: Popular, great tutorials, fast prototyping
- Cons: I'd be learning React + Next.js from scratch

**Option B: FastAPI + SQLite → PostgreSQL**
- Pros: I already know Python, FastAPI is fast, easy to deploy
- Cons: Need to build frontend separately

**My Decision:** FastAPI. Play to my strengths. Ship faster.

**The Full Stack I Chose:**
- Backend: FastAPI + SQLAlchemy + SQLite (migrate to PostgreSQL later)
- Frontend: Gradio (rapid prototyping, can replace later)
- AI: Groq API + Smolagents framework
- Telegram: Python-telegram-bot for Caroline AI assistant

### 5. How Do I Build This Properly?

**The Architecture Questions I Asked Nobody:**
- What's the best way to structure a FastAPI project?
- SQLite or PostgreSQL from the start? (Answer: SQLite for MVP, migrate later)
- How to implement AI agents without making a mess?
- Open source vs paid tools - what makes sense?

**What Nobody Taught Me:**
- Modular API structure (separate files for events, tasks, vendors, guests)
- Database design patterns (relationships, foreign keys, normalization)
- Migration strategies (Alembic for database changes)
- Production deployment best practices

**Critical Insight:** Nobody helped me avoid building something that "works" but breaks at scale.

---

## The Research Document

I created a comprehensive research doc (`mvp-refs.md` in my seeds folder) covering:

**Technical Deep Dives:**
- Smolagents vs ToolCallingAgent (chose CodeAgent for flexibility)
- Gradio + MCP integration patterns
- FastAPI production deployment strategies
- PostgreSQL migration plans
- Authentication & security (JWT, OAuth2)
- Docker & deployment options

**Best Practices I Found:**
- How to structure AI agent tools for reliability
- Error handling for LLM APIs
- Database connection pooling
- Health checks and monitoring
- Testing strategies

**The Time Investment:** One full day of research and planning.

**The Payoff:** Saved weeks of rebuilding and refactoring.

---

## What I Learned About Research

### 1. Research Prevents Rewrites

Every hour of research saved me 10+ hours of debugging and rebuilding.

Example: Knowing to use Alembic from the start meant I could change database schemas without losing data.

### 2. Architecture Decisions Matter Early

Choosing FastAPI + modular structure meant I could add features (vendors, meetings, analytics) without rewriting the core.

### 3. AI Can Guide Research

Claude was invaluable for:
- Comparing tech stack options
- Explaining complex concepts (database normalization, JWT auth)
- Suggesting best practices I wouldn't find on my own
- Pointing to the right documentation

### 4. Nobody's Expertise Fills the Gaps

I had:
- Energy and vision
- Basic FastAPI knowledge
- Willingness to learn

Nobody provided:
- Architecture wisdom
- Production deployment insights
- Tool comparisons (open source vs paid)
- Real-world patterns that tutorials don't teach

**The Collaboration:** My vision + Nobody's expertise + Claude Code's execution = EventFlow

---

## The Research Timeline

**Day 1: Market Analysis**
- Analyzed existing event planning tools
- Identified pain points (guest list = 20-30h per event)
- Defined target user (professional event planners)

**Day 1 (continued): MVP Planning**
- Broke features into 3 priority levels
- Decided on FastAPI stack
- Created detailed feature specs

**Day 1 (continued): Technical Research**
- Researched FastAPI best practices
- Planned database schema
- Studied AI agent frameworks
- Mapped deployment strategy

**Day 2-7: Building**
- Started with authentication system
- Built event CRUD
- Created task management
- Implemented vendor marketplace

**Result:** Solid foundation, minimal rewrites needed.

---

## The Honest Truth

**Did I follow the research plan perfectly?** No.

**Did things change as I built?** Yes. (Added Telegram bot, meeting notes with LLM extraction, analytics dashboard)

**Was the research still valuable?** Absolutely.

The research gave me:
- A clear direction
- Architectural guardrails
- Confidence to make decisions
- Understanding of trade-offs

**The Mindset Shift:** From "just start coding" to "plan thoroughly, execute confidently."

---

## Resources I Used

**For Market Research:**
- Existing event planning tools (tested 5+ platforms)
- Event planner forums and communities
- Pain point analysis with Claude

**For Technical Planning:**
- Official FastAPI documentation
- Smolagents GitHub and docs
- Gradio guides for MCP integration
- PostgreSQL migration guides
- Production deployment tutorials

**The Seeds:**
- `idea-seed.md` - Initial vision and planning conversation
- `mvp-refs.md` - Comprehensive technical research document
- All saved in `/seeds` folder for reference

---

## What's Next

Now that the research phase is documented, I'm writing more posts about:
- **Why I Chose FastAPI Over Next.js** (tech stack decisions)
- **Building Caroline AI** (the Telegram bot architecture)
- **Database Design Lessons** (SQLite → PostgreSQL migration)
- **Testing a Real Product** (current phase)

This is building in public. Messy, real, and delicious.

---

**Want to see the actual code and research docs?** The EventFlow project is available on request.

**Follow the journey:** [#eventflow](/tags/eventflow/) for updates as I build, test, and deploy.

---

*Part of the [EventFlow project](/projects/eventflow/) series*
