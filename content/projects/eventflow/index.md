---
title: "EventFlow - AI-Powered Event Planning Platform"
description: "Building a full-stack event platform. Learning by doing, one feature at a time."
date: 2025-10-22
draft: false
featured: true
tags: ["project", "eventflow", "full-stack", "ai-tools", "fastapi", "pydantic", "type-safety", "work-in-progress"]
---

# EventFlow - AI-Powered Event Planning Platform

**Status:** 🔨 In Development (96% complete, Caroline AI type-safe upgrade done! ✨)
**Timeline:** Week 1 - Core features | Week 2 - Type safety & extraction system
**Tech Stack:** FastAPI, SQLite, Gradio, Pydantic, LiteLLM, Telegram Bots
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

**The honest truth:** I'm organizationally chaotic.

Post-its everywhere. Half-finished lists. Notes scattered across 5 apps. The kind of person who loses track of simple tasks but somehow *loves* planning elaborate dinners and events.

**The irony:** I'm actually good at planning events. The vision is there. The execution? That's where things get messy.

**Then reality hit:** A friend asked me to help organize her wedding. Not just "give some suggestions." Actually help plan it. Guest lists. Vendors. Timeline. Budget. The whole thing.

**My reaction:** "Yes! I love this!"

**Also my reaction:** "Oh shit. How do I not lose my mind?"

I looked at existing event planning tools:
- Too expensive ($100-300/month?!)
- Too complicated (I need an MBA to use this?)
- Too generic (Why is this also project management software?)
- Not smart enough (No AI? In 2025?!)

**The moment:** "Wait. I could just... build something better?"

After the [murder mystery game](/projects/artifactum/murder-mystery-1926/), I had proof I could build real things. After learning FastAPI and AI integration, I had the tools.

**The decision:** Build EventFlow. For my friend's wedding. For anyone like me who loves planning but needs help staying organized.

**The meta irony:** Building a tool to solve my own chaos. While being chaotic. This is either genius or insane. Maybe both.

![EventFlow Dashboard](/images/eventflow/dashboard.png)
*The EventFlow dashboard. Pink theme because why not. Built in 2 weeks while learning FastAPI, Pydantic, and how to not lose my mind.*

---

### The Build Strategy

**Day 1: Research with Nobody** - Spent a full day planning instead of diving straight into code. Nobody helped me avoid rookie mistakes: use FastAPI (I know Python), start with SQLite (migrate to PostgreSQL later), build modular from day 1 (avoid spaghetti code).

**Why FastAPI over Next.js?** Everyone says "use Next.js for SaaS." But I'd need to learn React + TypeScript + Next.js = 4-6 weeks to MVP. FastAPI? I already know Python. MVP in 1-2 weeks. Play to strengths, ship fast, polish later.

**Days 2-7: Building** - Core event management, guest lists, vendor marketplace, task system, Caroline AI bot with 47 tools.

**Week 2: Type Safety Upgrade** - Made Caroline AI reliable with Pydantic schemas. Now she can't corrupt the database even if she hallucinates. [Read that story →](/posts/eventflow-caroline-pydantic-upgrade/)

**The MVP hierarchy:**
- 🔴 **Core:** Events + guest lists (solve the 20-30h manual work problem)
- 🟡 **Differentiators:** Vendors, budget, tasks
- 🟢 **Wow factor:** AI extraction, smart suggestions, Telegram bot

**Full research docs:**
- 📚 [The Research Phase](/posts/eventflow-research-phase/) - Market analysis, MVP planning
- 🛠️ [Why FastAPI Over Next.js](/posts/eventflow-tech-stack-decision/) - Tech stack decisions

---

### Why EventFlow?

**Personal:** I needed this. Creative vision, scattered execution. EventFlow works for chaotic planners like me.

**Technical:** Event planning is perfect for learning. Complex enough (multi-table DB, AI integration, real workflows) but simple enough (everyone understands events).

**Meta:** Building to solve your own problem = maximum motivation. Every feature tested with real use cases. Every bug actually matters. This isn't a portfolio project. **This is survival mode.**

</details>

---

<details>
<summary><h2 class="inline-heading">Technical Deep Dive: Type-Safe AI Extraction</h2></summary>

## Making Caroline AI Reliable (Week 2 Upgrade)

**The Problem:** LLMs hallucinate formats. Caroline would create:
- Budget: "twenty thousand" (should be: "20000")
- Date: "next Friday" (should be: "2025-10-25")
- Priority: "super mega urgent!!" (should be: "critical")

**The Solution:** Pydantic schemas + LLM JSON mode enforcement.

**The Architecture:**

### 1. Pydantic Schema Layer

Created 7 main schemas with strict validation:

```python
class CreateEventInput(BaseModel):
    name: str = Field(..., min_length=1, max_length=255)
    event_date: str = Field(..., pattern=r'^\d{4}-\d{2}-\d{2}$')
    event_type: Literal['wedding', 'conference', 'party', 'birthday', 'corporate']
    budget: Optional[str] = Field(None, pattern=r'^\d+\.?\d*$')
    expected_guests: Optional[int] = Field(None, gt=0, lt=100000)
```

**Key Design Decisions:**
- Enums for controlled vocabularies (no hallucinated categories)
- Date validation with custom validators (must be future dates)
- Numeric strings for money (avoid floating point issues)
- Required vs optional fields clearly defined

### 2. LLM JSON Mode Enforcement

Using LiteLLM's `response_format` parameter:

```python
response = completion(
    model="groq/llama-3.3-70b-versatile",
    messages=[...],
    response_format=CreateEventInput  # 🎯 Forces schema compliance
)

# Parse and validate
event = CreateEventInput(**json.loads(response.choices[0].message.content))
# ✅ Guaranteed valid! Types match from LLM → API → Database
```

**What this gives:**
- LLM can't return invalid JSON structure
- Dates always YYYY-MM-DD format
- Enums always valid values
- Numbers always numeric strings
- Type safety end-to-end

### 3. Testing Methodology: 5 Difficulty Levels

Created progressive test scenarios:

**Level 1 - Easy (100% expected):**
```
Formal meeting notes, structured format, all info clear
Result: 100% accuracy ✅
```

**Level 2 - Medium (95% expected):**
```
Casual WhatsApp chat, relative dates ("próxima semana")
Result: 98% accuracy ✅
```

**Level 3 - Hard (90% expected):**
```
Multiple events mixed in same notes
Result: 92% accuracy ✅
```

**Level 4 - Very Hard (85% expected):**
```
Messy, interrupted conversation:
- João changes date 3 times (december → november → jan 18 → jan 17)
- Budget negotiation (15k → 20k → 25k → 20k final)
- Math needed (45 + 20 + 15 = 80 guests)
- Call drops, critical info AFTER reconnection (vegan requirement!)
- Client undecided (DJ vs banda)

Result: 87.5% accuracy ✅
```

**Impressive achievements:**
- Tracked through 3 date corrections
- Did math with client's self-corrections
- Picked conservative budget (20k not 25k)
- Flagged vegan as CRITICAL (mentioned after call dropped!)
- Marked music as BLOCKED (client undecided)

**Level 5 - Expert (80% expected):**
```
Multi-language chaos (PT + EN + emojis + slang)
Status: Not tested yet 🙈
```

### 4. Extraction Review Workflow

**Problem:** Even at 87.5% accuracy, humans need control.

**Solution:** All extractions go through planner review before database commit.

**Architecture:**

```python
class EventExtractionReview(BaseModel):
    extraction_id: str
    meeting_notes: str
    extracted_event: CreateEventInput
    extracted_tasks: list[ExtractedTaskWithOptions]
    field_extractions: dict[str, FieldExtraction]  # Traceability!
    review_status: ExtractionReviewStatus
    event_confidence: float
    needs_attention: list[str]
```

**Key Features:**

**Traceability (Excerpt + Justification):**
```python
{
  "field": "budget",
  "value": "20000.00",
  "excerpt": "João: sei lá... 15k? ou é pouco? talvez 20k então...",
  "justification": "Client discussed progression: 15k → 20k → 25k available. Picked conservative 20k.",
  "confidence": 0.8
}
```

**Multiple Options for Ambiguity:**
When client says "não sei se DJ ou banda":
```python
{
  "decision_required": true,
  "options": [
    {
      "option_label": "Option A: DJ",
      "excerpt": "João: música... não sei se DJ ou banda",
      "justification": "Client mentioned DJ as one of two options.",
      "confidence": 0.5
    },
    {
      "option_label": "Option B: Live Band",
      "excerpt": "João: música... não sei se DJ ou banda",
      "justification": "Client mentioned banda as alternative option.",
      "confidence": 0.5
    }
  ]
}
```

**Planner Actions:**
- ✅ Approve All (high confidence, looks good)
- ✏️ Edit & Approve (tweak values, then create)
- ❌ Reject (extract manually)

### 5. What Nobody Taught Me

**Architecture Wisdom I Didn't Have:**

**Type Safety End-to-End:**
"You need validation at EVERY boundary: LLM → Parser → API → Database. Pydantic gives you this." - Nobody

**Enum Design for LLMs:**
"Make enums match natural language. Not `TASK_CATEGORY_VENUE`, but `Venue`. LLMs understand human language better." - Nobody

**Confidence Scores Strategy:**
"Always extract confidence. If LLM says 0.5, that's a human review flag. If 0.9+, probably safe to auto-approve." - Nobody

**Traceability Pattern:**
"LLMs should cite their sources. Extract which text led to which value. This builds trust and catches hallucinations." - Nobody

**Ambiguity Handling:**
"When client is undecided, don't pick randomly. Create BOTH options with equal confidence. Let planner choose." - Nobody

**Time saved by Nobody's guidance:** Weeks of trial-and-error and refactoring.

### 6. The Results

**Before Pydantic Upgrade:**
- Caroline created data ✅
- Sometimes formats wrong ❌
- No validation ❌
- Database could get corrupted ❌

**After Pydantic Upgrade:**
- Caroline creates data ✅
- Formats ALWAYS correct ✅
- Full validation ✅
- Database protected ✅
- Planner reviews extractions ✅
- Traceability (excerpt + justification) ✅
- Multiple options for ambiguity ✅
- 87.5% accuracy on chaos ✅

**The Unlock:** Can now trust Caroline with production data. Even when she infers or estimates, the *types* are always valid.

### 7. Files Created

**Schema System:**
- `utils/caroline_schemas.py` (700+ lines) - All Pydantic schemas
- `utils/caroline_extraction_review.py` - Review workflow

**Tests:**
- `test_caroline_pydantic.py` - 11 unit tests (100% passing)
- `test_caroline_litellm_extraction.py` - Real LLM test
- `test_level_4_extraction.py` - Very hard scenario
- `test_meeting_extraction_mock.py` - Mock tests

**Documentation:**
- `CAROLINE_PYDANTIC_SCHEMAS.md` - Full schema docs
- `EXTRACTION_DIFFICULTY_LEVELS.md` - 5 test levels explained
- `EXPECTED_VS_ACTUAL_EXTRACTION.md` - What LLM actually does
- `ANSWER_TO_MISHA_MEETING_EXTRACTION.md` - Type analysis

**Time investment:** 3 days of intense work.
**Lines of code:** ~2000+ (schemas, tests, docs, review system)
**Result:** Type-safe AI that can handle real-world chaos.

**Read the full story:** [Caroline AI Gets Type-Safe: Teaching an LLM to Follow the Rules](/posts/eventflow-caroline-pydantic-upgrade/)

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

![Caroline AI - Telegram Bot](/images/eventflow/caroline-chat.png)
*Caroline AI in action. 47 tools, all type-safe now. She can create events from natural language, extract info from messy meeting notes, and (as of Week 2) can't break the database even if she tries. Progress.*

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

![Event Details View](/images/eventflow/event-details.png)
*Event details page showing tasks, guests, budget tracking. Each event has its own dashboard with real-time progress.*

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

![Vendor Marketplace](/images/eventflow/vendor-marketplace.png)
*Vendor marketplace with search, filters, ratings. Built like a mini LinkedIn for event vendors. Still needs real data, but the structure works.*

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

### ✅ Meetings & LLM Extraction (NEW: Type-Safe! 🎉)
- Meeting notes with AI extraction
- **Pydantic schema enforcement** (LLM can't create invalid data!)
- Automatic action items detection
- Decisions and concerns extraction
- Assignee and deadline identification
- **Extraction review workflow** (planner approves before DB)
- **Traceability system** (excerpt + justification for every field)
- **Multiple options for ambiguity** (client undecided? Create both!)
- **5 difficulty levels tested** (87.5% accuracy on "very hard" messy notes)
- Groq API + LiteLLM integration

### ✅ Caroline AI (Telegram Bot) - Type-Safe Edition
- **47 tools with Pydantic validation** (no more "vinte mil" in budget field!)
- Natural language interface
- **Type-safe from LLM → Database** (enums, date formats, validation)
- Memory system for context
- Auto-refresh for tool updates
- Accessible from phone anywhere
- **Confidence scores** for extraction quality
- **Handles chaos**: interruptions, corrections, client changing mind

![AI Inbox - Client Conversations](/images/eventflow/ai-inbox.png)
*AI Inbox where planners chat with Caroline about events. She can extract info from natural conversation and create structured data. This was HARD to build - getting LLMs to be reliable took 3 days of Pydantic schemas and testing.*

**Honest note:** Caroline works in tests (87.5% accuracy on messy notes!) but I haven't tested her manually in production yet. The Pydantic schemas ensure she can't break the database, but real-world chaos? That's the next test.

### 🔄 In Testing
- End-to-end workflows
- Mobile responsiveness
- Edge cases and error handling
- Performance optimization

### ✅ Authentication & Onboarding (Week 2 Addition!)
- Login/register system with bcrypt password hashing
- Profile creation flow (2-step onboarding)
- Session management
- Welcome screens with CTAs

![Auth System & Onboarding](/images/eventflow/auth-system.png)
*Login verification screen. Added auth system in Week 2 because I realized "wait, multiple planners need accounts." Rookie oversight, but caught it before shipping.*

### ✅ Project Creation Flow
- Multi-step project wizard
- Event type templates (wedding, corporate, etc.)
- Auto-generate initial task lists
- Client profile creation

![Create Project Wizard](/images/eventflow/create-project.png)
*Create project wizard with templates. This generates 30+ tasks automatically based on event type. Saves planners from starting from scratch every time.*

### ❌ Not Built Yet
- Payment processing
- Email notifications
- Multi-tenant support (but architecture ready)
- Production deployment (Docker + PostgreSQL planned)
- Comprehensive user docs

**Honestly:** ~96% of planned features work. The last 4% is polish and production readiness.

![EventFlow Analytics Dashboard](/images/eventflow/analytics.png)
*Analytics showing task progress, guest RSVPs, and vendor bookings. The data viz actually helps you see what's happening at a glance. Pink charts are a vibe.*

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

**UI Evolution - From Gradio to Beautiful Templates:**
- **Week 1:** Started with Gradio (rapid prototyping, functional but basic)
- **Week 2:** Realized "this looks like a prototype, not a product"
- **Pivot:** Kept FastAPI backend, built custom Jinja2 templates
- **Result:** Bootstrap 5 + Chart.js + custom CSS = actually looks professional
- **Lesson:** Gradio was perfect for MVP speed, but UI matters for real users

**Caroline AI - The Hardest Part:**
- Building 47 tools was time-consuming but straightforward
- Making LLMs RELIABLE? That was the challenge
- 3 days on Pydantic schemas, JSON mode enforcement, testing
- Created 5 difficulty levels to stress-test extraction
- **Current status:** 87.5% accuracy on chaos, but not manually tested yet
- **Honest truth:** Tests pass, but real-world usage? That's the scary part

**Testing Everything:**
- Created comprehensive testing checklist
- Learning to think about edge cases
- Understanding user flows
- **Reality check:** Automated tests ≠ real user testing (still need to do that)

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

![EventFlow Calendar View](/images/eventflow/calendar.png)
*Calendar interface for managing events and meetings. Testing this revealed so many edge cases. Delete button placement? Check. Toast notifications? Check. Not losing data when you accidentally click something? Also check. Building in public means showing the messy learning process.*

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
- LLM API usage (Groq, LiteLLM)
- Agent frameworks (Smolagents)
- Tool composition
- Context management
- Prompt engineering
- **Pydantic + LLM JSON mode** (type-safe outputs!)
- **Schema enforcement** (can't create invalid data)
- **Extraction validation patterns** (confidence scores, traceability)
- **Handling LLM uncertainty** (multiple options, review workflows)

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

## Visual Journey: From Prototype to (Almost) Product

Throughout this build, the UI evolved from "functional Gradio" to "actually looks like software people would use":

- **Dashboard:** Pink theme (non-negotiable), real-time stats, notifications
- **Calendar:** Full CRUD, modals, toast notifications, color coding
- **Analytics:** Chart.js visualizations showing actual progress
- **Vendor Marketplace:** Search, filters, ratings (mini LinkedIn vibes)
- **AI Inbox:** Natural language → structured data (the hardest part!)
- **Auth System:** Week 2 addition (rookie oversight, caught in time)
- **Project Wizard:** Templates that auto-generate 30+ tasks

**What you see in screenshots:** Weeks of iteration, broken features fixed, edge cases caught, UI polished.

**What you don't see:** The Gradio prototype I started with (RIP functional but ugly MVP).

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

**AI & Type Safety:**
- 🎯 [Caroline AI Gets Type-Safe: Teaching an LLM to Follow the Rules](/posts/eventflow-caroline-pydantic-upgrade/) **NEW!**

**Coming Soon:**
- 🤖 Building Caroline AI Architecture (Telegram bot deep dive)
- 📊 Database Design Lessons (SQLite → PostgreSQL migration)
- 🧪 Testing a Real Product (current phase)
- 🚀 Production Deployment (Docker, nginx, the works)

**Follow along:** [#eventflow](/tags/eventflow/) for all updates

---

*Last Updated: October 22, 2025*
*Status: Caroline AI Type-Safe Upgrade Complete ✅ | Testing Continues*
*Latest: Pydantic schemas + extraction review system + 87.5% accuracy on chaos*
*Next post: Testing discoveries and first user feedback*
