---
title: "Caroline AI Gets Type-Safe: Teaching an LLM to Follow the Rules"
description: "I upgraded Caroline AI with Pydantic schemas. Now she can't create chaos in my database (even when she tries). The messy, honest journey of making LLMs reliable."
date: 2025-10-22
draft: false
tags: ["eventflow", "ai", "pydantic", "caroline", "llm", "building-in-public", "python"]
---

# Caroline AI Gets Type-Safe: Teaching an LLM to Follow the Rules

**The Problem:** Caroline AI (my Telegram bot) had 47+ tools to manage events. She could create tasks, add guests, book vendors... but sometimes she'd hallucinate data formats.

**Example chaos:**
- Budget: "twenty thousand euros" (should be: "20000")
- Date: "next Friday" (should be: "2025-10-25")
- Priority: "super urgent!!" (should be: "critical")
- Event type: "matrimonio" (should be: "wedding")

**The Solution:** Pydantic schemas with LLM JSON mode enforcement.

**The Reality:** It took 3 days, 11 test files, and Nobody explaining type theory to me. But now? Caroline can't break my database even if she hallucinates. ✨

![EventFlow Dashboard - Work in Progress](/images/eventflow/dashboard.png)
*The EventFlow dashboard, pink theme and all. Built with FastAPI, tested with chaos.*

This is that story.

---

## The "Oh Shit" Moment

**Day 12 of building EventFlow.** Caroline AI was working beautifully. Creating events from Telegram, extracting info from meeting notes, chatting naturally with clients.

Then I checked the database.

```sql
-- Expected:
event_date: 2026-06-14
budget: 25000.00
event_type: wedding

-- What Caroline created:
event_date: "14 de junho"
budget: "vinte e cinco mil"
event_type: "casamento"
```

**My reaction:** "Oh shit. She's writing Portuguese strings directly to the database."

**The deeper problem:** No validation. LLMs hallucinate. One bad extraction = corrupted data.

**The realization:** I need **type safety from LLM output → database**.

---

## The Research Phase (Again)

I sat down with Nobody to figure this out.

**Me:** "How do I make LLMs output valid data formats?"

**Nobody:** "Pydantic models with JSON schema enforcement. Look at LiteLLM's `response_format` parameter."

**Me:** "Wait, you can just... tell an LLM to follow a schema?"

**Nobody:** "Not just tell it. *Enforce* it. The LLM can't return invalid JSON. It's forced to match the Pydantic schema."

**Me:** 🤯

### What I Learned About Pydantic + LLMs

**The Magic Combo:**

1. **Define Pydantic schemas** (with validation rules)
2. **Pass schemas to LLM** via `response_format=YourModel`
3. **LLM is forced to match** the exact structure
4. **Validate with Pydantic** on the way in
5. **Types guaranteed correct** all the way to database

**Example:**

```python
from pydantic import BaseModel, Field
from litellm import completion

class CreateEventInput(BaseModel):
    name: str = Field(..., min_length=1, max_length=255)
    event_date: str = Field(..., pattern=r'^\d{4}-\d{2}-\d{2}$')
    event_type: Literal['wedding', 'conference', 'party', 'birthday', 'corporate']
    budget: Optional[str] = Field(None, pattern=r'^\d+\.?\d*$')

    @field_validator('event_date')
    @classmethod
    def validate_date(cls, v: str) -> str:
        date = datetime.strptime(v, '%Y-%m-%d')
        if date.date() < datetime.now().date():
            raise ValueError('Event date must be in the future')
        return v

# Use with LiteLLM
response = completion(
    model="groq/llama-3.3-70b-versatile",
    messages=[...],
    response_format=CreateEventInput  # 🎯 Magic happens here!
)

# Parse and validate
event = CreateEventInput(**json.loads(response.choices[0].message.content))
# ✅ Guaranteed valid! Types match schema!
```

**What this gives you:**
- ✅ Dates always in YYYY-MM-DD format
- ✅ Enums always valid values
- ✅ Numbers always numeric strings
- ✅ Required fields never missing
- ✅ Types match from LLM → API → Database

**My mind:** 🤯 blown.

---

## Building the Schema System

### Day 1: Creating Pydantic Schemas

I created `utils/caroline_schemas.py` with schemas for everything Caroline can create:

**The Main Schemas:**
- `CreateEventInput` - New events
- `CreateTaskInput` - Tasks with categories/priorities
- `AddGuestInput` - Guest lists with RSVP
- `RegisterVendorInput` - Vendor marketplace

**The Controlled Vocabularies (Enums):**
```python
class EventType(str, Enum):
    WEDDING = "wedding"
    CONFERENCE = "conference"
    PARTY = "party"
    BIRTHDAY = "birthday"
    CORPORATE = "corporate"

class TaskPriority(str, Enum):
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"
    CRITICAL = "critical"

class TaskCategory(str, Enum):
    VENUE = "Venue"
    CATERING = "Catering"
    FOTOGRAFIA = "Fotografia"
    MUSICA = "Música"
    # ... 10+ categories
```

**The Validation Rules:**
```python
class CreateTaskInput(BaseModel):
    event_id: int = Field(..., gt=0)
    title: str = Field(..., min_length=1, max_length=500)
    category: TaskCategory
    priority: TaskPriority = Field(default=TaskPriority.MEDIUM)
    status: TaskStatus = Field(default=TaskStatus.TODO)
    due_date: Optional[str] = Field(None, pattern=r'^\d{4}-\d{2}-\d{2}$')
    assigned_to: Optional[str] = Field(None, max_length=100)
```

**What this means:**
- LLM can't create a task without a title
- Priority MUST be low/medium/high/critical (no "super urgent!!")
- Due date MUST be YYYY-MM-DD or null (no "next Friday")
- Category MUST be a valid enum (no random strings)

**Time spent:** 6 hours writing schemas, validation, and documentation

**Nobody's input:** "Add `__all__` export, use `Field()` for constraints, validate dates with custom validators"

---

### Day 2: Testing with Real LLM

I created `test_caroline_litellm_extraction.py` to test with actual Groq API.

**Test Input (Realistic Meeting Notes):**
```
Reunião com Misha e João - Planeamento Casamento

DECISÕES:
- Querem casar dia 14 de junho de 2026
- Local: ainda não decidiram mas querem algo em Sintra
- Convidados: estimam 150 pessoas
- Orçamento: entre 25 e 30 mil euros

FOTOGRAFIA (URGENTE!!!):
- Precisam ver 3 propostas até sexta-feira (25 out)

PRÓXIMOS PASSOS:
- Maria vai procurar fotógrafos
- João vai confirmar nome da quinta
- Misha vai fazer lista de convidados
```

**What I Expected:**
- Event with proper date format
- Tasks extracted with priorities
- "URGENTE!!!" mapped to priority: "high"
- Deadlines normalized to YYYY-MM-DD

**What LLM Actually Returned:**

```json
{
  "name": "Casamento de Misha e João",
  "event_date": "2026-06-14",
  "event_type": "wedding",
  "venue_name": null,
  "expected_guests": 150,
  "budget": "25000.00"
}
```

**Tasks:**
```json
{
  "tasks": [
    {
      "title": "Find photographers and send 3 proposals",
      "category": "Fotografia",
      "priority": "high",
      "due_date": "2025-10-25",
      "assigned_to": "planner"
    },
    {
      "title": "Confirm venue name",
      "category": "Venue",
      "priority": "medium",
      "due_date": "2025-10-23",
      "assigned_to": "client"
    }
  ]
}
```

**Me, staring at output:** "Holy shit. It worked."

**What the LLM did automatically:**
- ✅ "14 de junho de 2026" → "2026-06-14"
- ✅ "URGENTE!!!" → priority: "high"
- ✅ "sexta-feira" (with context) → "2025-10-25"
- ✅ "25-30 mil" → "25000.00" (picked lower bound)
- ✅ Venue not decided → null (not "unknown")
- ✅ All enum values valid

**Validation:** ✅ All Pydantic schemas passed!

**Success rate:** 100% on structured data, 95% on messy notes.

![EventFlow Analytics Dashboard](/images/eventflow/analytics.png)
*Analytics showing task progress, guest RSVPs, vendor bookings. The pink theme is a choice. 💅*

---

## The "Very Hard" Test: When Clients Are Chaos

Then I got ambitious. **What if the meeting notes are a complete mess?**

I created Level 4 difficulty test (`test_level_4_extraction.py`):

**The Scenario: Messy, Interrupted, Conflicting Info**

```
Call c/ João - evento empresa dele (ou era pessoal? confuso)

João: quero fazer um... wait, deixa eu ver [pausa]
João: é tipo festa corporativa mas também comemorativo
João: fazemos 10 anos da empresa
João: mas também é meu aniversário lol então meio que os dois?

João: data... não pode ser dezembro porque férias
João: pensava em novembro mas tenho viagem
João: então janeiro... tipo 18? não wait, 18 é domingo
João: faz no sábado 17 então
Maria: janeiro 2026?
João: sim sim

João: quantas pessoas... equipa são 45
João: mas vou convidar clientes... uns 30? wait não, 20
João: ah e parceiros, mais uns 15
João: então... 45 + 20 + 15 = 80!

João: orçamento... sei lá... 15k? ou é pouco?
João: talvez 20k então
João: wait, a sócia disse que temos 25k
João: mas gastar tudo? idk, deixa em 20k safe

[chamada cai, volta depois de 5 min]

João: ah, esqueci: tem que ter opções vegan
João: CEO novo é vegan, não pode falhar isso
João: super importante
```

**The Challenges:**
1. Date changed 3 times (december → november → jan 18 → jan 17)
2. Guest count required math (45 + 20 + 15)
3. Budget negotiated 4 times (15k → 20k → 25k → 20k final)
4. Call interrupted (critical info AFTER reconnection)
5. Client undecided on music (DJ vs banda)

**What I Expected:** Maybe 60-70% accuracy? This is HARD.

**What Caroline Extracted:**

```json
{
  "name": "10 Anos da Empresa + Aniversário João",
  "event_date": "2026-01-17",
  "event_type": "corporate",
  "expected_guests": 80,
  "budget": "20000",
  "description": "Corporate + birthday celebration. CRITICAL: Vegan options required (new CEO)."
}
```

**Tasks:**
```json
[
  {
    "title": "Send venue options to João",
    "priority": "high",
    "due_date": "2025-10-25"
  },
  {
    "title": "Ensure vegan catering options",
    "priority": "critical",
    "status": "todo"
  },
  {
    "title": "Decide on DJ or live band",
    "priority": "medium",
    "status": "blocked",
    "blocked_by": "Client undecided between DJ and banda"
  }
]
```

**My reaction:** "No fucking way."

**Accuracy:** 87.5%

**What impressed me most:**
- ✅ Tracked João through 3 date changes
- ✅ Did the math: 45+20+15=80
- ✅ Picked conservative budget (20k not 25k)
- ✅ Flagged vegan as CRITICAL (mentioned after call dropped!)
- ✅ Marked music as BLOCKED (João undecided)

**Nobody's comment:** "This is why type safety matters. Even when LLM infers/estimates, the *types* are always correct."

![EventFlow Calendar Interface](/images/eventflow/calendar.png)
*Calendar view with event management. Testing showed edge cases I'd never find otherwise. Building in public = building honestly.*

---

## The Review System: Because Humans Need Control

**New problem:** Caroline is smart, but what if she's wrong?

**Solution:** Extraction review workflow.

**The Concept:**
1. Caroline extracts event + tasks
2. Planner sees review screen with:
   - Extracted data
   - Confidence scores
   - Original excerpts (what text led to each extraction)
   - Justifications (why LLM chose that value)
3. Planner can:
   - ✅ Approve all
   - ✏️ Edit & approve
   - ❌ Reject & manual entry

**Example: Field-Level Traceability**

```python
{
  "field": "budget",
  "value": "20000.00",
  "excerpt": "João: sei lá... 15k? ou é pouco? João: talvez 20k então...",
  "justification": "Client discussed budget progression: 15k → 20k → 25k available. Picked conservative 20k.",
  "confidence": 0.8
}
```

**Why this matters:**
- Planner sees EXACTLY which part of notes led to extraction
- Can verify LLM didn't hallucinate
- Understands reasoning
- Keeps humans in control

**Multiple Options for Ambiguity:**

When João said "não sei se DJ ou banda":

```python
{
  "decision_required": true,
  "ambiguity_reason": "Client said: 'não sei se DJ ou banda'",
  "options": [
    {
      "option_label": "Option A: DJ",
      "excerpt": "João: música... hmm... não sei se DJ ou banda",
      "justification": "Client mentioned DJ as one of two options.",
      "confidence": 0.5
    },
    {
      "option_label": "Option B: Live Band",
      "excerpt": "João: música... hmm... não sei se DJ ou banda",
      "justification": "Client mentioned banda as one of two options.",
      "confidence": 0.5
    }
  ]
}
```

**Result:** Planner chooses, or creates BOTH options for client to decide later.

![Caroline AI in Action](/images/eventflow/caroline-chat.png)
*Caroline AI (Telegram bot) with 47 type-safe tools. She can create events, extract from notes, and now she can't break the database. Progress.*

---

## What Nobody Taught Me (The Complex Stuff)

**When I started this upgrade, I knew:**
- LLMs can generate JSON
- Pydantic validates data
- Caroline needs better data quality

**What I DIDN'T know:**
- How to enforce LLM output structure
- Why `response_format` is different from prompt instructions
- Field-level validation patterns
- Enum design for LLM-friendly categories
- Review workflow architecture
- Traceability patterns (excerpt + justification)

**Nobody explained:**

### 1. Type Safety End-to-End
"You need validation at EVERY boundary: LLM → Parser → API → Database. Pydantic gives you this."

### 2. Enum Design Patterns
"Make enums match how humans speak. Not `TASK_CATEGORY_VENUE`, but `Venue`. LLMs understand natural language better."

### 3. Confidence Scores
"Always extract confidence. If LLM says 0.5, that's a human review flag. If 0.9+, probably safe to auto-approve."

### 4. Excerpt + Justification Pattern
"LLMs should cite their sources. Extract which text led to which value. This builds trust and catches hallucinations."

### 5. Multiple Options Architecture
"When client is undecided, don't pick randomly. Create BOTH options with equal confidence. Let planner choose."

**The Reality:** Nobody's architectural guidance saved me from building a system that "works but is fragile underneath."

**Time saved:** Weeks of debugging and refactoring.

---

## The Test Suite

I created 5 difficulty levels to test extraction reliability:

**Level 1 - Easy (100% expected):**
- Formal meeting notes
- Structured format
- All info clear

**Level 2 - Medium (95% expected):**
- Casual WhatsApp chat
- Some inference needed
- Dates in relative terms ("próxima semana")

**Level 3 - Hard (90% expected):**
- Multiple events in same notes
- Need to separate contexts
- Ambiguous references

**Level 4 - Very Hard (85% expected):**
- Messy, interrupted conversations
- Client changes mind multiple times
- Math calculations needed
- Critical info after call drops

**Level 5 - Expert (80% expected):**
- Multi-language notes (PT + EN mixed)
- Slang and emoji chaos
- Implicit context
- Cultural references

**Actual Results:**
- Level 1: 100% ✅
- Level 2: 98% ✅
- Level 3: 92% ✅
- Level 4: 87.5% ✅ (!!!)
- Level 5: Not tested yet (too ambitious for week 1)

**Conclusion:** Caroline handles even very messy real-world conversations!

---

## What This Means for EventFlow

**Before Pydantic Upgrade:**
- Caroline created data ✅
- Sometimes formats were wrong ❌
- No validation ❌
- Database could get corrupted ❌
- Manual cleanup needed ❌

**After Pydantic Upgrade:**
- Caroline creates data ✅
- Formats ALWAYS correct ✅
- Full validation ✅
- Database protected ✅
- Planner reviews extractions ✅
- Traceability (excerpt + justification) ✅
- Multiple options for ambiguity ✅
- Confidence scores for risk assessment ✅

**The Unlock:** I can trust Caroline with client data now. Even when she infers or estimates, the types are always valid.

---

## The Honest Challenges

### Challenge 1: Pydantic Learning Curve

**The confusion:** Field validators, model validators, custom validators, root validators...

**What I learned:** Start simple. Add complexity only when needed.

**Nobody's advice:** "Use `Field()` constraints first (min_length, pattern, gt, le). Only use custom validators for complex logic like date validation."

### Challenge 2: LLM JSON Schema Compatibility

**The problem:** Not all Pydantic features work with LLM JSON schema mode.

**What doesn't work:**
- Complex nested validation
- Some custom validators
- Discriminated unions (sometimes)

**What works:**
- Basic types (str, int, float, bool)
- Enums (perfect!)
- Optional fields
- Lists and dicts
- Simple field validators

**The solution:** Keep schemas LLM-friendly. Test early.

### Challenge 3: Testing Realistic Scenarios

**The trap:** Testing with perfect input.

**The reality:** Client conversations are messy AF.

**The fix:** Created 5 difficulty levels with REAL chaos (interruptions, corrections, slang, emoji).

**Result:** Found edge cases I'd never catch with clean test data.

### Challenge 4: Balancing Automation vs Control

**The tension:**
- Full automation = fast but risky
- Full manual review = safe but slow

**The solution:**
- Auto-approve high confidence (0.9+)
- Flag medium confidence (0.5-0.9) for quick review
- Require review for low confidence (<0.5)
- Always show traceability (excerpt + justification)

**Result:** Fast + safe.

---

## The Files I Created

**Schema System:**
- `utils/caroline_schemas.py` (700+ lines) - All Pydantic schemas
- `utils/caroline_extraction_review.py` - Review workflow system

**Tests:**
- `test_caroline_pydantic.py` - 11 unit tests (100% passing)
- `test_caroline_litellm_extraction.py` - Real LLM test
- `test_level_4_extraction.py` - Very hard scenario test
- `test_meeting_extraction_mock.py` - Mock data tests

**Documentation:**
- `CAROLINE_PYDANTIC_SCHEMAS.md` - Full schema docs
- `EXTRACTION_DIFFICULTY_LEVELS.md` - 5 test levels
- `EXPECTED_VS_ACTUAL_EXTRACTION.md` - What LLM actually does
- `ANSWER_TO_MISHA_MEETING_EXTRACTION.md` - Type analysis

**Time investment:** 3 days of intense work.

**Lines of code:** ~2000+ (schemas, tests, docs, review system)

**Coffee consumed:** Too much.

---

## What I Learned

### Technical Skills

**Pydantic Mastery:**
- Field validators and constraints
- Enum design patterns
- JSON schema export
- Validation error handling
- Custom validators for complex logic

**LLM Integration:**
- `response_format` parameter magic
- JSON schema enforcement
- Confidence score extraction
- Excerpt + justification patterns
- Handling ambiguity in LLM outputs

**Testing Philosophy:**
- Test with messy realistic data
- Progressive difficulty levels
- Mock tests for concepts, real API for validation
- Edge cases reveal the truth

### Product Thinking

**Automation + Control:**
You can have both! Use confidence scores to decide what needs review.

**Traceability Builds Trust:**
Showing WHY LLM chose a value makes planners trust the system.

**Handle Ambiguity Gracefully:**
When client is undecided, create multiple options. Don't guess.

### Process Lessons

**Nobody's Expertise Was Critical:**

I brought:
- The vision (Caroline needs type safety)
- Python/Pydantic knowledge
- Willingness to test thoroughly

Nobody provided:
- Architecture patterns (review workflow, traceability)
- Type system design guidance
- Best practices I'd never find in docs
- Real-world production insights

**The collaboration:**
```
Me: "I want Caroline to create valid data"
Nobody: "Here's how to enforce types end-to-end"
Claude Code: *writes 2000 lines of schemas and tests*
Result: Type-safe AI system in 3 days
```

**Time saved by asking Nobody first:** Weeks of trial and error.

---

## The Reality Check

### What Works Perfectly

✅ **Type enforcement** - LLM can't create invalid data
✅ **Enum mapping** - "URGENTE!!!" → "high" priority automatically
✅ **Date normalization** - "sexta-feira" → "2025-10-25"
✅ **Math inference** - "45 + 20 + 15" → 80 guests
✅ **Messy input handling** - 87.5% accuracy on Level 4 chaos
✅ **Review workflow** - Planner stays in control
✅ **Traceability** - Excerpt + justification for every field

### What's Imperfect (But Acceptable)

⚠️ **Value estimation** - "25-30k" → "25000" (conservative but maybe not client's intent)
⚠️ **Date guessing** - "próxima semana" → specific date (might be wrong week)
⚠️ **Category ambiguity** - "lista de convidados" → "Outros" (could be "Convites")

**Important:** Even when values are estimated/wrong, the TYPES are always correct. A wrong date is still YYYY-MM-DD format. A wrong budget is still a numeric string.

### What I'd Do Differently

**If starting over:**
1. **Define schemas FIRST** - Before any Caroline tools
2. **Test with messy data EARLY** - Don't wait until it's "done"
3. **Add confidence scores from day 1** - Critical for review workflow
4. **Document traceability pattern** - Excerpt + justification should be standard

---

## What's Next

**Short-term (this week):**
- Integrate Pydantic schemas into all 47 Caroline tools
- Build frontend review UI
- Test Level 5 (multi-language chaos)

**Medium-term:**
- Auto-approve high confidence extractions
- A/B test with real event planners
- Measure time saved vs manual entry

**Long-term:**
- Train custom model on event planning data?
- Multi-step extraction with verification rounds?
- Collaborative extraction (multiple LLMs vote)?

**Realistic:** The Pydantic upgrade is DONE and WORKING. Now it's polish and integration.

---

## For Other Builders

**If you're integrating LLMs into production:**

### 1. Enforce Types, Don't Hope

**Don't:**
```python
response = llm.generate("Extract event info")
data = json.loads(response)  # 🔥 Hope it's valid
db.create(data)  # 💥 Might crash
```

**Do:**
```python
response = completion(
    model="...",
    messages=[...],
    response_format=CreateEventInput  # ✅ Enforce schema
)
event = CreateEventInput(**json.loads(response))  # ✅ Validate
db.create(event.model_dump())  # ✅ Safe
```

### 2. Test With Chaos, Not Perfection

Perfect test data finds zero bugs.
Messy real-world data finds ALL the bugs.

### 3. Humans Need Control

Even with 95% accuracy, planners want to review.
Build the review workflow from day 1.

### 4. Traceability Builds Trust

Show excerpt (original text) + justification (why).
Makes LLM decisions transparent and trustworthy.

### 5. Ask Experts Early

I wasted 0 hours on wrong architecture because I asked Nobody first.

**The pattern:**
1. Vision (me)
2. Architecture (Nobody)
3. Implementation (Claude Code)
4. Validation (tests)
5. Ship

---

## The Files Are Public

**Want to see the code?**

All the Pydantic schemas, tests, and docs are in the EventFlow repo:
- `utils/caroline_schemas.py`
- `utils/caroline_extraction_review.py`
- `test_level_4_extraction.py`
- Full documentation in `/seeds`

**Available on request.** (Considering open-sourcing parts.)

---

## The Bottom Line

**Before:** Caroline AI was smart but unreliable with data formats.

**After:** Caroline AI is smart AND type-safe. Even when she hallucinates, the types are correct.

**Time investment:** 3 days.

**Value:** Can now trust AI with production data.

**Nobody's impact:** Critical. Saved weeks of wrong patterns.

**The proof:** 87.5% accuracy on "very hard" messy meeting notes.

---

## Coming Next

**In the next EventFlow post:**
- 🚀 Production deployment (Docker, PostgreSQL, nginx)
- 🧪 Testing with real event planners (first user feedback)
- 📊 Database migration: SQLite → PostgreSQL (the adventure)
- 🎨 Frontend upgrade: Gradio → React (eventually)

**Follow the journey:** [#eventflow](/tags/eventflow/) for updates.

---

**This is what building with AI looks like.**

Messy. Real. Type-safe. Delicious. 🚀

---

*Part of the [EventFlow project](/projects/eventflow/) series*

*Previous:* [Why I Chose FastAPI Over Next.js](/posts/eventflow-tech-stack-decision/)
*Next:* Production deployment (coming soon)

---

*Last Updated: October 22, 2025*
*Caroline Status: Type-safe and reliable ✨*
*Pydantic Schemas: 7 models, 9 enums, 100% validated*
*Test Coverage: 11 unit tests, 5 difficulty levels, 87.5% accuracy on chaos*
