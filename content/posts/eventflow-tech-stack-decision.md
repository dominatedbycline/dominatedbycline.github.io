---
title: "Why I Chose FastAPI Over Next.js for EventFlow"
description: "The tech stack decision that shaped everything. FastAPI + SQLite + Gradio vs Next.js + Supabase - and why playing to your strengths matters."
date: 2025-10-20
draft: false
tags: ["eventflow", "project", "fastapi", "tech-stack", "building-in-public", "python"]
---

# Why I Chose FastAPI Over Next.js for EventFlow

**The Dilemma:** Everyone says "build SaaS with Next.js + Supabase." It's the recommended stack. The popular choice. The "right" way.

**My Choice:** FastAPI + SQLite + Gradio.

**The Result:** Shipped 95% of EventFlow in 1 week.

This is why I went against the grain.

---

## The Two Paths

When I started researching EventFlow's tech stack, I had two clear options:

### Path A: The Popular Stack

**Next.js + Supabase + Vercel**

**Pros:**
- Huge community and tutorials everywhere
- Supabase handles auth, database, real-time features
- Vercel deployment is one-click
- Modern, sexy, impressive on a portfolio

**Cons:**
- I'd need to learn React + Next.js from scratch
- JavaScript/TypeScript learning curve on top of everything else
- More moving parts to understand
- Slower iteration while learning frontend frameworks

**Estimated Time to MVP:** 4-6 weeks (including learning curve)

### Path B: Play to My Strengths

**FastAPI + SQLite + Gradio**

**Pros:**
- I already know Python (learned it building murder mystery game)
- FastAPI is fast to learn and has amazing auto-documentation
- SQLite means no database server setup (migrate to PostgreSQL later)
- Gradio lets me prototype UI in minutes, not days
- Can integrate AI (Smolagents) easily - all Python

**Cons:**
- Not the "trendy" choice
- Gradio UI is functional but not as polished as React
- Need to handle frontend separately eventually

**Estimated Time to MVP:** 1-2 weeks

---

## The Decision Framework

I asked myself three questions:

### 1. What's the Goal?

**Not:** Build the most impressive tech stack
**But:** Ship a working product that solves a real problem

**Insight:** The friend who needs help planning her wedding doesn't care if it's Next.js or FastAPI. She cares if it works.

### 2. What's My Constraint?

**Time.** I had maybe 1-2 weeks of intensive building before needing to ship something usable.

**Energy.** Learning React + Next.js + TypeScript while also learning event planning domain logic = cognitive overload.

**Momentum.** I was excited about this project. Spending weeks on tutorials would kill that momentum.

### 3. Where Can I Move Fastest?

**Python.** I already understand it. I can focus on the product logic, not syntax.

**FastAPI.** Clean, modern, fast to write. Automatic API docs. Python async support.

**Gradio.** Prototype UI in 20 lines of code. Chat interface built-in. Perfect for MVP.

**Decision:** FastAPI. Ship fast. Replace parts later if needed.

---

## The Stack I Built

### Backend: FastAPI + SQLAlchemy

```python
# Clean, readable API routes
@app.post("/events/", response_model=Event)
async def create_event(event: EventCreate, db: Session = Depends(get_db)):
    db_event = Event(**event.dict())
    db.add(db_event)
    db.commit()
    db.refresh(db_event)
    return db_event
```

**Why I Love It:**
- Automatic OpenAPI documentation at `/docs`
- Type hints everywhere (Pydantic schemas)
- Fast execution (async support)
- Easy to test

**What It Gave Me:**
- Professional REST API in 2 days
- Clear separation: models, schemas, API routes
- Foundation for 47+ AI agent tools

### Database: SQLite → PostgreSQL

**Starting Choice:** SQLite

**Why:**
- Zero setup (just a file)
- Perfect for MVP development
- Easy to iterate on schema during early builds

**Migration Plan:**
- Use Alembic for schema management from day 1
- Switch to PostgreSQL for production
- Same code works with both (SQLAlchemy abstraction)

**What I Learned:**
- Don't over-engineer early
- SQLite taught me database design without DevOps overhead
- Migration path is clear when needed

### Frontend: Gradio

```python
# This creates a full chat interface in 5 lines:
chatbot = gr.ChatInterface(
    fn=chat_function,
    type="messages",
    title="EventFlow AI Assistant"
)
```

**Why Gradio:**
- Prototype UI in minutes
- Built-in chat interface (perfect for AI assistant)
- MCP server integration (`mcp_server=True`)
- Good enough for MVP testing

**The Trade-off:**
- Not as polished as React
- Limited customization
- Eventually need proper frontend

**But:** Got me to 95% complete in 1 week. Worth it.

### AI Integration: Smolagents + Groq

**The Stack:**
- Smolagents (HuggingFace agent framework)
- Groq API (GPT-OSS-120B model)
- LiteLLM (unified interface)

**Why This Worked:**
- All Python - no context switching
- Smolagents has clear patterns for tool building
- Groq is fast and has generous free tier
- Easy to debug (no JavaScript promises, just Python)

**What I Built:**
- 47+ AI tools for event management
- Caroline (Telegram bot with memory)
- Meeting notes with LLM extraction
- Smart event creation from natural language

### The Full Stack

```
Backend:
├── FastAPI (REST API)
├── SQLAlchemy (ORM)
├── SQLite (dev) → PostgreSQL (prod)
└── Pydantic (schemas & validation)

Frontend:
├── Gradio (rapid UI prototyping)
└── Bootstrap 5 + Chart.js (custom pages)

AI Layer:
├── Smolagents (agent framework)
├── Groq API (LLM)
└── LiteLLM (multi-model support)

Integrations:
└── Python-telegram-bot (Caroline AI)
```

---

## What This Stack Enabled

### Week 1 Build Speed

**Day 1-2:** Backend structure + Event CRUD
**Day 3:** Task management system
**Day 4:** Vendor marketplace
**Day 5:** Guest list + RSVP
**Day 6-7:** AI features + Telegram bot

**Total:** ~95% feature complete in 1 week

**Would This Be Possible with Next.js?** Honestly? No. I'd still be in tutorials.

### Iteration Speed

**Need a new feature?** Add a Python function.

**Need a new AI tool?** Write a class with a `forward()` method.

**Need a new API endpoint?** 10 lines of FastAPI code.

**Example: Adding "Meeting Notes with LLM Extraction"**
- Backend: 1 API endpoint + 1 database model
- AI: 1 Smolagents tool
- Time: 4 hours from idea to working feature

### Learning Depth

**Because I used Python everywhere:**
- Learned FastAPI deeply (not just copy-paste)
- Understood database design (SQLAlchemy relationships, migrations)
- Grasped AI agent patterns (tool composition, context management)
- Mastered API architecture (modular, testable, scalable)

**If I used Next.js:**
- Surface-level understanding of many frameworks
- Copy-paste from tutorials
- Less deep learning

---

## The Honest Trade-offs

### What I Gained

✅ **Speed:** 1 week to 95% complete
✅ **Learning:** Deep Python/FastAPI knowledge
✅ **Confidence:** Can build and ship real products
✅ **Flexibility:** Easy to add features, change architecture
✅ **AI Integration:** Seamless Python ecosystem

### What I Gave Up

❌ **Polish:** Gradio isn't as pretty as modern React
❌ **Trendiness:** Not using the "sexy" stack
❌ **Frontend Skills:** Didn't learn React/Next.js
❌ **Real-time Features:** Would be easier with Supabase

### What I'll Change Later

**Frontend:** Replace Gradio with proper React/Next.js
**Database:** Migrate to PostgreSQL for production
**Auth:** Add proper JWT authentication
**Deployment:** Docker + nginx for production

**But:** These are polish, not blockers. The core product works.

---

## Lessons About Tech Stack Decisions

### 1. Popular ≠ Right for You

Next.js is amazing. For someone who knows React.

FastAPI is amazing. For someone who knows Python.

**The trap:** Choosing the "right" stack instead of the "right for you" stack.

### 2. Shipping > Perfect Architecture

I could have spent 3 weeks learning Next.js "properly."

Instead, I shipped a working product in 1 week.

**The reality:** Done is better than perfect.

### 3. Play to Your Strengths

I know Python. Using it meant I could focus on:
- Event planning domain logic
- AI agent architecture
- Database design
- Product features

Not on:
- JavaScript quirks
- React hooks
- TypeScript types
- Framework-specific patterns

**Result:** Deeper learning in fewer areas.

### 4. Migration Is Possible

**The fear:** "If I choose wrong, I'm stuck forever."

**The truth:**
- Gradio → React: Frontend only, backend stays the same
- SQLite → PostgreSQL: Database only, code barely changes
- Architecture is modular: Replace parts independently

**The confidence:** I can change anything later.

---

## What Nobody Taught Me

**Architectural Wisdom:**

Nobody guided me on:
- Modular FastAPI structure (separate files for each domain)
- Database migration strategy (Alembic from day 1)
- Tool design patterns (how to make Smolagents tools reliable)
- Production deployment paths (Docker, PostgreSQL, nginx)

**Why This Mattered:**

Without Nobody, I would have:
- Put all API routes in one giant file
- No migration strategy (breaking changes = data loss)
- Poor AI tool design (unreliable, hard to debug)
- No clear path to production

**The Collaboration:**
- My strength: Python knowledge
- Nobody's strength: Architecture experience
- Claude Code's strength: Implementation speed
- Result: Professional product in 1 week

---

## Would I Choose Differently Now?

**No.**

FastAPI was the right choice because:
- It matched my skills
- It enabled fast iteration
- It taught me deeply
- It shipped real value

**But I'd Add:**

If starting over, I'd also:
- Use Alembic from day 1 (for cleaner migrations)
- Write tests earlier (found bugs late)
- Plan frontend replacement upfront (Gradio → React roadmap)
- Set up Docker sooner (production deployment clarity)

---

## The Real Decision Criteria

When choosing a tech stack, ask:

**1. What do I already know?**
Use it. Leverage existing knowledge.

**2. What's the shortest path to shipping?**
Choose the stack that gets you there fastest.

**3. Can I change parts later?**
Modular architecture > perfect initial choice.

**4. What helps me learn deeply?**
One language deeply > five languages shallowly.

**5. Does it solve the actual problem?**
Users care about features, not frameworks.

---

## The Tech Stack Document

All my research is documented in:
- `idea-seed.md` - Initial stack comparison
- `mvp-refs.md` - FastAPI production patterns
- Working codebase - Proof it works

**Want to see the code?** Available on request.

---

## What's Next

Now that the stack is proven, I'm writing about:
- **Database Design Lessons** (SQLite → PostgreSQL migration)
- **Building Caroline AI** (Telegram bot architecture)
- **Testing a Real Product** (current phase)
- **Production Deployment** (Docker, nginx, the works)

**The Journey Continues:** [#eventflow](/tags/eventflow/) for updates.

---

## The Bottom Line

**Popular opinion:** Use Next.js for modern web apps.

**My reality:** FastAPI shipped a working product in 1 week.

**The lesson:** Play to your strengths. Ship first. Polish later.

**The proof:** EventFlow is 95% complete and already useful.

---

*Part of the [EventFlow project](/projects/eventflow/) series*
*Read more: [The Research Phase](/posts/eventflow-research-phase/)*
