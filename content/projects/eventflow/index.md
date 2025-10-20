---
title: "EventFlow - AI-Powered Event Planning Platform"
description: "Building a full-stack event platform. Learning by doing, one feature at a time."
date: 2025-10-20
draft: false
featured: true
tags: ["project", "eventflow", "full-stack", "ai-tools", "fastapi", "work-in-progress"]
---

# EventFlow - AI-Powered Event Planning Platform

**Status:** 🔨 In Development (95% complete, currently testing)
**Timeline:** 1 week of intensive building
**Tech Stack:** FastAPI, SQLite, Gradio, AI Integration, Telegram Bots
**Nature:** Real production project, not a tutorial exercise

---

## ⚠️ Full Transparency

**This is not a finished product showcase.**

This is documentation of a **real build process**—messy, complex, and ongoing. I'm building in public because:
- The learning is more valuable than a perfect demo
- The challenges are as interesting as the solutions
- Honest progress beats polished lies

**What's working:** Most features are functional and being tested
**What's left:** Final polish, deployment, comprehensive testing
**What I learned:** More than I expected. Way more.

---

<details>
<summary><h2 class="inline-heading">The Origin Story</h2></summary>

## How This Started

A friend asked me to help organize her wedding.

I looked at existing event planning tools. They were either:
- Too expensive
- Too complicated
- Too generic
- Not smart enough

**The moment:** "I could build something better."

After the [murder mystery game](/projects/artifactum/murder-mystery-1926/), I had the confidence. After learning FastAPI and AI integration, I had the tools.

**The decision:** Build a real event planning platform. For my friend's wedding. And for anyone else who needs it.

### The Research Phase: One Full Day Before Any Code

**The Problem I Discovered:**

Professional event planners spend **20-30 hours per event** just on guest list management. This is insane. Manual work, spreadsheets, endless emails, tracking RSVPs, dietary restrictions, plus-ones, check-ins.

**Market Analysis - What Already Exists:**

**The Expensive Ones** ($100-300/month):
- Full-featured but over-complicated
- Designed for enterprise, not flexible
- More time managing the tool than planning events

**The Simple Ones:**
- Easy but lack depth
- No AI, no automation
- Just digitized spreadsheets

**The Generic Ones:**
- Try to do everything (project management + events)
- Not specialized for event planners' workflows

**The Gap:** A tool that's **complex under the hood but simple to use** + **AI-powered to eliminate manual work**.

**The MVP Strategy - 3 Priority Levels:**

**🔴 LEVEL 1: CORE (Must Have First)**
- Event management (CRUD operations)
- Guest list with RSVP system (solve the 20-30h problem!)
- Basic dashboard

**Why Start Here:** If I solve guest list management brilliantly, planners will save 20-30 hours per event. That's the hook.

**🟡 LEVEL 2: DIFFERENTIATORS**
- Vendor management (LinkedIn-style profiles)
- Budget tracking (estimated vs real, alerts)
- Task/timeline management (deadlines, assignments)

**🟢 LEVEL 3: WOW FACTOR**
- AI-powered vendor recommendations
- Automated timeline generation
- Smart suggestions based on event type
- Chatbot for guest FAQs

**The Tech Stack Decision:**

**Path A: Next.js + Supabase**
- Pros: Popular, great tutorials, fast prototyping
- Cons: Learning React + Next.js + TypeScript from scratch
- Estimated MVP: 4-6 weeks

**Path B: FastAPI + SQLite + Gradio**
- Pros: I already know Python, FastAPI is fast, Gradio prototypes UI instantly
- Cons: Not trendy, will need to replace Gradio later
- Estimated MVP: 1-2 weeks

**My Decision:** FastAPI. Play to my strengths. Ship in 1 week, not 6 weeks. Replace Gradio with React later if needed.

**The Full Stack Chosen:**
- Backend: FastAPI + SQLAlchemy + SQLite (→ PostgreSQL for production)
- Frontend: Gradio (rapid prototyping, replace later)
- AI: Groq API (GPT-OSS-120B) + Smolagents framework
- Telegram: Python-telegram-bot for Caroline AI
- Database: SQLite with Alembic migrations (easy PostgreSQL migration)

**Research Resources Created:**
- `idea-seed.md` - Full market analysis, MVP planning, stack comparison
- `mvp-refs.md` - Technical deep dive: Smolagents patterns, FastAPI production, PostgreSQL migration, Docker deployment, authentication

**The Timeline:**
- Day 1: Research + planning with Claude
- Days 2-7: Building (shipped 95% of features)

**Read the full research process:**
- 📚 [The Research Phase - Market Analysis & Planning](/posts/eventflow-research-phase/)
- 🛠️ [Why FastAPI Over Next.js - Tech Stack Decision](/posts/eventflow-tech-stack-decision/)

### Why EventFlow?

Event planning is:
- **Complex enough** to be interesting
- **Simple enough** to understand
- **Real-world** useful (I actually need this)
- **AI-friendly** (lots of opportunities for smart features)

Perfect learning project.

</details>

---

<details>
<summary><h2 class="inline-heading">The Dream Team</h2></summary>

## Building This Wasn't Solo Work

### Nobody: The Architecture Guru 💙

**Nobody was crucial to this project.** I had:
- The idea
- The energy
- The determination to build it properly

**But I didn't have:**
- Deep knowledge of FastAPI architecture
- Understanding of which tools to use (open source vs paid)
- Database design expertise
- Telegram bot implementation patterns
- Production deployment best practices

**Nobody provided:**
- Initial architecture guidance
- Tool recommendations and comparisons
- Database schema design help
- Best practices I would have missed
- Real-world production insights

**Critical point:** Nobody helped me avoid building something that "works" but is a mess underneath.

### AI Tools: The Building Assistants

**Claude Code** was the development workhorse:
- Wrote most of the actual code
- Debugged issues rapidly
- Implemented features from specifications
- Iterated quickly on feedback

**Claude** helped with:
- Planning and architecture discussions
- Understanding complex concepts
- Problem-solving when stuck
- Documentation and explanations

### My Role: The Director

**I brought:**
- The vision of what to build
- Product decisions and feature choices
- Relentless iteration and testing
- The "this needs to work properly" mindset
- User experience thinking
- Willingness to rebuild when needed

**The collaboration:**
```
Nobody's expertise → My vision → AI tools execution → Real product
```

</details>

---

<details>
<summary><h2 class="inline-heading">Tech Stack & Architecture</h2></summary>

## What's Under the Hood

### Backend: FastAPI + SQLAlchemy
- **FastAPI** for REST API (chosen for speed and auto-docs)
- **SQLAlchemy** ORM for database operations
- **SQLite** database (easily upgradeable to PostgreSQL)
- **Pydantic** schemas for validation
- Modular API structure (events, tasks, vendors, guests)

### Frontend: Multiple Interfaces
- **Gradio** for planner dashboard (rapid prototyping)
- **Bootstrap 5** for responsive design
- **Chart.js** for analytics visualization
- **Jinja2** templates for server-side rendering

### AI Integration
- **Groq API** (GPT-OSS-120B) for LLM extraction
- **Smolagents** framework for AI assistants
- Natural language event creation
- Smart suggestions and automation

### Telegram Bot
- **Caroline** - AI assistant accessible via Telegram
- 47+ tools for complete event management
- Memory system for context retention
- Auto-refresh system for tool updates

### Architecture Decisions

**Why FastAPI?**
- Fast development and execution
- Automatic API documentation
- Modern Python async support
- Great ecosystem

**Why SQLite (for now)?**
- Simple to start
- Perfect for development
- Easy migration path to PostgreSQL
- No additional services needed

**Why Gradio?**
- Rapid UI prototyping
- Built-in chat interface
- Good enough for MVP
- Easy to replace later

**The Modular Approach:**
```
backend/
├── api/
│   ├── events.py      # Event management
│   ├── tasks.py       # Task system
│   ├── vendors.py     # Vendor marketplace
│   └── guests.py      # Guest management
├── models.py          # Database models
├── schemas.py         # Pydantic schemas
└── main.py            # FastAPI app
```

Clean separation. Each feature is independent. Easy to maintain.

</details>

---

<details>
<summary><h2 class="inline-heading">Features Built So Far</h2></summary>

## What's Actually Working

### ✅ Core Event Management
- Create, read, update, delete events
- Event types: weddings, conferences, parties, corporate, birthdays
- Date tracking and venue management
- Event validation and status tracking

### ✅ Task System
- Task creation and management
- Categories: logistics, catering, venue, guests, vendors, decor
- Priorities: critical, high, medium, low
- Progress tracking with real-time statistics
- Template-based task generation (wedding, corporate, birthday)
- 150+ tasks created and tested

### ✅ Vendor Marketplace
- LinkedIn-style vendor profiles
- Search by type, location, rating, price
- 10+ vendor types supported
- Booking management
- Quote tracking
- **AI-powered budget estimation** based on marketplace data

### ✅ Guest Management
- Guest lists with categories (VIP, family, friends, colleagues)
- RSVP system with unique tokens
- Plus-ones management
- Dietary restrictions tracking
- Check-in functionality
- Real-time statistics (response rates, attendance)
- CSV bulk import

### ✅ Analytics Dashboard
- Tasks by status (pie chart)
- Tasks by priority (doughnut chart)
- Guest RSVPs visualization
- Events timeline (6-month view)
- Vendor bookings overview
- Pink theme (of course!)

### ✅ Smart Notifications
- Urgent tasks (due < 3 days)
- Pending meeting proposals
- Low event progress alerts
- Stuck vendor bookings
- Auto-refresh every 2 minutes

### ✅ Meetings & LLM Extraction
- Meeting notes with AI extraction
- Automatic action items detection
- Decisions and concerns extraction
- Assignee and deadline identification
- Groq API integration

### ✅ Caroline AI (Telegram Bot)
- 47 tools for event management
- Natural language interface
- Memory system for context
- Auto-refresh for tool updates
- Accessible from phone anywhere

### 🔄 In Testing
- End-to-end workflows
- Mobile responsiveness
- Edge cases and error handling
- Performance optimization

### ❌ Not Built Yet
- User authentication system
- Payment processing
- Email notifications
- Multi-tenant support
- Production deployment
- Comprehensive documentation

**Honestly:** ~95% of planned features work. The last 5% is polish and production readiness.

</details>

---

<details>
<summary><h2 class="inline-heading">The Delicious Process</h2></summary>

## Why This Was (Is) Delicious

### The Learning

**FastAPI:** Started knowing nothing. Now comfortable building production APIs.

**Database Design:** Learned about relationships, foreign keys, migrations, normalization.

**AI Integration:** From "how do I call an API?" to building a 47-tool AI agent system.

**Full-Stack Thinking:** Understanding how backend, frontend, database, and AI fit together.

### The Challenges (The Fun Part)

**Database Migrations:**
- Learned the hard way about schema changes
- Wrote 4+ migration scripts
- Now understand why tools like Alembic exist

**AI Tool Refresh:**
- Built auto-refresh system so I could add tools without restarting
- Learned about Python's `importlib.reload()`
- Made development SO much faster

**Telegram Bot Architecture:**
- First time building a bot
- Learned about webhooks vs polling
- Implemented memory system for context

**Testing Everything:**
- Created comprehensive testing checklist
- Learning to think about edge cases
- Understanding user flows

### The Surprises

**Good Surprises:**
- FastAPI is amazing (seriously, the docs auto-generation!)
- Gradio makes UI prototyping trivial
- AI agents are more capable than expected
- The modular architecture made changes easy

**Challenging Surprises:**
- Database relationships are tricky
- State management in Telegram bots is complex
- Testing takes longer than building
- Production deployment is its own project

### The "Aha!" Moments

1. **Understanding REST API design:** It clicked when I structured the vendor marketplace
2. **Database normalization:** Finally got why foreign keys matter
3. **AI tool composition:** Realized agents are just well-structured function calls
4. **Testing importance:** Found bugs I would have NEVER caught without systematic testing

</details>

---

<details>
<summary><h2 class="inline-heading">Current Status & What's Next</h2></summary>

## Where We Are Now

**Testing Phase:** Day 1 of comprehensive testing
**Status:** Features mostly work, finding edge cases
**Mood:** Excited and slightly terrified 😅

### What's Being Tested

Using systematic approach (see `/tests/TESTING-CHECKLIST.md` in repo):
- ✅ Backend API endpoints
- 🔄 Frontend interfaces
- 🔄 AI features and agents
- 🔄 Analytics and notifications
- 🔄 End-to-end workflows
- ❌ Performance under load
- ❌ Mobile experience
- ❌ Production deployment

### Immediate Next Steps

1. **Complete Testing** - Systematic check of all features
2. **Bug Fixes** - Address issues found during testing
3. **Documentation** - Write proper user docs
4. **Polish UI** - Improve user experience
5. **Deploy** - Get it live somewhere

### The Long-Term Vision

**Near Future:**
- Production-ready deployment
- User authentication
- Multi-tenant support
- Email notifications
- Payment integration

**Dream Features:**
- AI-powered vendor recommendations
- Smart timeline optimization
- Budget prediction models
- Automated guest communication
- Calendar integrations

**Realistic Timeline:** Months, not weeks. This is a real product.

</details>

---

<details>
<summary><h2 class="inline-heading">What I'm Learning</h2></summary>

## The Real Education

### Technical Skills

**Backend Development:**
- RESTful API design
- Database schema design
- ORM usage (SQLAlchemy)
- API authentication (upcoming)
- Error handling and validation

**Frontend Development:**
- Server-side rendering
- Responsive design
- Data visualization
- User experience thinking

**AI Integration:**
- LLM API usage
- Agent frameworks (Smolagents)
- Tool composition
- Context management
- Prompt engineering

**DevOps (Learning):**
- Environment management
- Database migrations
- Service orchestration
- Deployment strategies

### Product Thinking

- **Scope management:** What's MVP vs nice-to-have
- **User flows:** How people actually use software
- **Edge cases:** All the ways things can break
- **Testing:** Why it matters and how to do it properly

### Process Lessons

1. **Architecture matters:** Good structure makes changes easy
   - Modular FastAPI structure meant adding vendors/meetings/analytics was simple
   - Nobody's guidance on proper structure saved weeks of refactoring

2. **Testing saves time:** Finding bugs early is cheaper
   - Should have written tests from day 1 (learning this the hard way)
   - Current phase: comprehensive testing revealing edge cases I'd never find otherwise

3. **Documentation helps:** Future-you will thank present-you
   - Research seeds (`idea-seed.md`, `mvp-refs.md`) saved me when stuck
   - API auto-docs from FastAPI are lifesavers

4. **Iteration works:** Build → Test → Learn → Improve
   - Gradio → React (planned): frontend can be replaced independently
   - SQLite → PostgreSQL: database migration path clear from day 1
   - Don't over-engineer early, but plan the upgrade path

5. **Collaboration amplifies:** Nobody + AI + Me > Me alone
   - Nobody: Architecture wisdom I didn't have
   - Claude Code: Implementation speed (47 tools built fast)
   - Me: Vision, product decisions, relentless iteration

### Concrete Technical Learnings

**Database Design:**
- Foreign keys prevent orphaned data
- Migrations with Alembic = no data loss on schema changes
- Normalization vs denormalization trade-offs
- Soft deletes > hard deletes (keep audit trail)

**AI Agent Patterns:**
- CodeAgent > ToolCallingAgent (30% fewer steps, more expressive)
- Structured returns (dict/list) > string parsing
- Temperature 0.3-0.5 = reliable but not robotic
- Planning interval prevents agent from getting lost

**FastAPI Production:**
- Dependency injection for database sessions
- Pydantic schemas catch bugs at request time
- Background tasks for async operations
- Health checks for monitoring

**Deployment Strategy:**
- Docker Compose for local development
- Environment variables for all secrets (.env file, never commit)
- Nginx for SSL and reverse proxy
- PostgreSQL connection pooling for performance

</details>

---

<details>
<summary><h2 class="inline-heading">Tech Stack Details</h2></summary>

## Complete Technology Overview

### Backend Stack
```python
FastAPI==0.104.1        # Web framework
SQLAlchemy==2.0.23      # ORM
Pydantic==2.5.0         # Data validation
Uvicorn==0.24.0         # ASGI server
```

**Why FastAPI:**
- Automatic OpenAPI docs at `/docs`
- Type hints everywhere (catches bugs early)
- Fast async support
- Clean, readable code

**Modular Structure:**
```
backend/
├── api/
│   ├── events.py      # Event management endpoints
│   ├── tasks.py       # Task system endpoints
│   ├── vendors.py     # Vendor marketplace endpoints
│   └── guests.py      # Guest management endpoints
├── models.py          # SQLAlchemy database models
├── schemas.py         # Pydantic validation schemas
└── main.py            # FastAPI app initialization
```

### Frontend Stack
```python
Gradio==5.49.1          # UI framework (rapid prototyping)
Bootstrap==5.3          # CSS framework
Chart.js==4.4.0         # Data visualization
Jinja2==3.1.2           # Template engine
```

**Gradio MCP Server:**
- `mcp_server=True` enables both web UI AND MCP server
- Chat interface built-in (perfect for AI assistant)
- 20 lines of code = full chat UI

### AI & Integration
```python
groq==0.4.1             # Groq API client (GPT-OSS-120B)
litellm==1.17.0         # Multi-LLM interface
smolagents==0.1.0       # Agent framework (HuggingFace)
python-telegram-bot     # Telegram integration
```

**Smolagents Architecture Decisions:**
- **CodeAgent** (not ToolCallingAgent) - more expressive, 30% fewer steps
- Structured tool returns (dict/list, not strings)
- Temperature 0.3-0.5 for reliability
- Planning interval every 3 steps for complex tasks
- 47+ tools for complete event management

**Tool Design Pattern:**
```python
@tool
def create_event(name: str, date: str, venue: str) -> dict:
    """
    Creates a new event in the system.

    Args:
        name: Event name (max 100 chars)
        date: ISO format YYYY-MM-DD
        venue: Full venue address or name

    Returns:
        dict: Created event with id, name, date, status
    """
    # Implementation with error handling
    return {"success": True, "data": result}
```

### Database Architecture
- **SQLite** (development) - zero setup, perfect for iterating
- **Alembic** migrations from day 1 (clean schema changes)
- Migration path to **PostgreSQL** (production)
- **SQLAlchemy** ORM (same code works with both databases)

**Key Design Patterns:**
- Foreign key relationships (events → tasks → vendors)
- Proper normalization (no data duplication)
- Index on frequently queried fields
- Soft deletes (keep history)

### Development Tools
```bash
Git                     # Version control
VSCode + Claude Code    # Development environment
Pytest                  # Testing framework (not used enough yet!)
Alembic                 # Database migrations
```

### Production Deployment Plan

**Docker Compose Architecture:**
```yaml
services:
  postgres:     # PostgreSQL database
  backend:      # FastAPI (4 workers)
  frontend:     # Gradio UI
  nginx:        # Reverse proxy + SSL
```

**Stack Considered:**
- Railway.app (easiest, automatic PostgreSQL)
- Fly.io (global edge, great free tier)
- DigitalOcean App Platform (balanced)
- AWS ECS + RDS (most scalable, more complex)

**Security & Production Readiness:**
- JWT authentication (planned)
- Environment variables for all secrets
- Health check endpoints
- Structured logging (JSON format)
- Rate limiting
- CORS configuration
- PostgreSQL connection pooling
- Automated backups

</details>

---

## The Reality Check

### What Worked

✅ **Modular architecture** - Easy to add features
✅ **FastAPI** - Incredible developer experience
✅ **AI integration** - More powerful than expected
✅ **Gradio** - Perfect for rapid prototyping
✅ **Nobody's guidance** - Saved months of mistakes
✅ **Building in public** - Keeps me honest

### What Was Hard

❌ **Database design** - More complex than anticipated
❌ **State management** - Especially in Telegram bot
❌ **Testing** - Takes MUCH longer than building
❌ **Scope creep** - So many "just one more feature" moments
❌ **Polish** - Making it "production ready" is harder than making it work

### What I'd Do Differently

1. **Start with testing** - Should have written tests from day one
2. **Better database planning** - Migrations are painful
3. **Simpler UI first** - Gradio was great but limiting
4. **More user testing** - Testing my own workflow isn't enough
5. **Clearer milestones** - "95% done" has been true for a week 😅

---

## Want to Follow This Journey?

**This project is ongoing.** I'll document:
- Testing discoveries
- Deployment challenges
- Feature additions
- Learning breakthroughs

**Follow:** [#eventflow](/tags/eventflow/) for updates

**The Code:** Available on request (considering open-sourcing parts)

---

## The Truth

**Is this done?** No.

**Will it ever be "done"?** Real products are never done.

**Is it useful?** Already using it to plan events.

**Did I learn a ton?** Absolutely.

**Was it worth it?** 100%.

---

**This is what building looks like.** Messy. Real. Delicious.

And I'm not even close to finished. 🚀

---

## Read the Build Process

I'm documenting the entire EventFlow journey in detailed blog posts:

**Planning & Research:**
- 📚 [The Research Phase - Before Writing Any Code](/posts/eventflow-research-phase/)
- 🛠️ [Why I Chose FastAPI Over Next.js](/posts/eventflow-tech-stack-decision/)

**Coming Soon:**
- 🤖 Building Caroline AI (Telegram bot architecture)
- 📊 Database Design Lessons (SQLite → PostgreSQL migration)
- 🧪 Testing a Real Product (current phase)
- 🚀 Production Deployment (Docker, nginx, the works)

**Follow along:** [#eventflow](/tags/eventflow/) for all updates

---

*Last Updated: October 20, 2025*
*Status: Testing phase (day 1)*
*Next post: Testing discoveries and first user feedback*
