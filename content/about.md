---
title: ""
description: "Interior designer → AI experimenter → Building production tools with unconventional tech"
date: 2026-01-11T13:00:00Z
draft: false
---

<details open>
<summary><h2>The Short Version</h2></summary>

I'm Marilu — an interior designer who discovered AI and completely pivoted into creating interactive experiences, games, and event concepts using AI tools as creative collaborators.

I'm learning web development, building projects in public, and documenting the messy, chaotic, ADHD-fueled journey of figuring out what's possible when you combine creativity with AI.

**This site?** I built it from scratch. It's both my portfolio and my proof of learning.

</details>

---

<details>
<summary><h2>The Longer Version: How I Got Here</h2></summary>

### Interior Design Wasn't Enough

I started in interior design because I love creating spaces that tell stories. But here's the thing: my ADHD brain craves constant stimulation and variety. Interior design, as much as I loved it, felt... **incomplete**. Too narrow. Too slow. I needed more.

**Enter AI.**

Suddenly, I could do a bit of everything. Design, code, write, create games, plan events, build interactive experiences. I get to learn constantly — **"pra xuxu"** as I say (which roughly translates to "learning all the things, obsessively") — and that's exactly what my brain needs.

### The ADHD Advantage

Traditional career paths don't work for me. "Pick one thing and master it" sounds like a nightmare.

But with AI as a creative collaborator, I can:
- Hyperfocus on complex projects for weeks
- Learn new technical skills rapidly when needed
- Switch between creative and technical work
- Build systems that keep me in flow state
- Turn chaos into productive experimentation

**AI tools don't replace my creativity. They enable continuous workflow.** No more stopping to learn an entire new skill before I can execute an idea. I learn what I need, when I need it, while staying in the project.

</details>

---

<details>
<summary><h2>What I'm Building</h2></summary>

### 🎭 Artefactum: Automated Mystery Game Generator

I built a **production-ready pipeline** that generates complete 12-player murder mystery games in 3 hours. Not prototypes—**production games** with professional PDFs, interactive dashboards, and deployment packages.

**First game:** [The Red Corner: Moscow 1956](/projects/red-corner-1956/) — 1956 Russian Mafia themed murder mystery
**Current status:** 100% production-ready, commercially viable
**Tools I chose (and why):**
- **Groq** (not OpenAI) — 0.3s inference vs 5-10s (speed compounds when generating 200+ pieces of content)
- **DSPy** (not prompt engineering) — structured LLM programs with typed outputs, not fragile prompts
- **Typst** (not LaTeX) — 2s compile time vs 5+ minutes (enables rapid iteration)
- **Vis.js** — interactive 3D relationship graphs (132 relationships auto-visualized)
- **Custom ontology** — domain-specific relationship types (not generic friend/enemy)

**What it generates:**
- 12 character dossiers (professional PDFs, 30+ pages each)
- 14 clues (7 real + 7 red herrings)
- 36 objectives with physical props
- 132 character relationships (graph-validated)
- Complete story with 3-paragraph twist
- 480-line GM running script
- Interactive voting system
- Deployment package ready for Netlify

**The commercial angle:** This pipeline could generate games for $20-50 each. Or license the generator. Exploring patents and product launch.

**What I learned:**
- Speed matters more than model quality (Groq's 0.3s > GPT-4's 10s)
- Structure beats prompts (DSPy > prompt engineering)
- Domain ontologies make AI outputs feel handcrafted
- The right tools enable production-quality automation

[Generator Details →](/projects/mystery-game-generator/) | [Red Corner Game →](/projects/red-corner-1956/)

### 💻 This Website: Learning Web Dev in Public

I built this site from scratch using Hugo, a static site generator I'd never touched before.

**Why build instead of using Squarespace?** Because I wanted to actually learn. And I wanted proof that I could.

**What I learned:**
- Hugo static site generator
- Git & GitHub Pages
- Markdown content workflow
- Basic HTML/CSS customization
- How to break things and fix them

**The tool that made this possible:** Cline, an AI coding assistant that explained concepts clearly while I built hands-on.

[Read the build series →](/projects/building-this-site/)

### 📅 EventFlow: Building a Real Product (Not Just a Tutorial)

**EventFlow** is a full-stack event planning platform I built in 2 weeks. This isn't a tutorial project — it's solving a real problem.

**The problem:** I'm organizationally chaotic. Post-its everywhere, lists scattered across 5 apps, can't keep track of simple tasks. But I LOVE planning elaborate dinners and events. The irony is real.

**The trigger:** A friend asked me to help plan her wedding. My reaction: "Yes! I love this!" Also my reaction: "Oh shit. How do I not lose my mind?"

**The moment:** Looking at event planning tools ($100-300/month?! Too complicated! No AI?!) and thinking... "Wait. I could just build something better?"

**What I built:**
- Full-stack platform (FastAPI backend, Bootstrap 5 frontend)
- AI-powered extraction (Caroline bot with 47 type-safe tools)
- Type-safe from LLM → Database (Pydantic schemas, JSON mode enforcement)
- 87.5% accuracy on messy, interrupted, conflicting meeting notes
- Extraction review workflow (planner approves before database commit)
- Analytics, vendor marketplace, guest RSVPs, task templates
- **Current status:** Feature-complete, production-ready

**What makes it different:**
- Built for chaotic planners like me (creative vision, scattered execution)
- Caroline AI can't corrupt the database even if she hallucinates (type safety!)
- Real production app, not a portfolio piece
- Using it for an actual wedding (survival mode = best motivator)

**The hardest part:** Making LLMs reliable. Building 47 tools was straightforward. Teaching an LLM to follow rules? 3 days of Pydantic schemas, testing with progressive difficulty levels (casual chat → messy interruptions → multi-language chaos), and Nobody explaining type theory to me.

**Nobody's impact:** Architecture guidance saved weeks of mistakes. Modular structure, migration paths, validation patterns — expertise I didn't have.

**The meta:** Building a tool to solve my own chaos. While being chaotic. This is either genius or insane. Maybe both.

[Read the full EventFlow story →](/projects/eventflow/) | [Caroline AI Type-Safe Upgrade →](/posts/eventflow-caroline-pydantic-upgrade/)

### 🎯 Career Pivot: AI Creative Producer

I'm actively exploring roles that combine creativity with AI — specifically **AI Creative Producer** positions that need someone who can:
- Conceptualize creative projects
- Work with AI tools fluently
- Execute complex builds
- Learn technical skills rapidly
- Document and communicate process

**This site is my portfolio.** Every project here demonstrates skills relevant to that path.

</details>

---

<details>
<summary><h2>How I Actually Work with AI</h2></summary>

### It's Collaboration, Not Automation

I don't use AI to "do things for me." I use it to **amplify what I can do**.

**My process:**
1. **Conceptualize** - I have an idea (often chaotic, ambitious, weird)
2. **Research** - Use AI to explore what's possible, learn relevant concepts
3. **Architect** - Plan the structure with AI as a thinking partner
4. **Build** - Execute hands-on, using AI to handle technical gaps
5. **Iterate** - Refine based on results, learning as I go

**Key insight:** AI is best when it explains, teaches, and enables — not when it just generates output.

### Tools I Use

**Creative work:**
- **Claude** - Writing, storytelling, conceptual thinking
- **Gemini** - Visual asset generation
- **lm-arena** - Video creation

**Technical work:**
- **Cline** - AI coding assistant (the MVP for building this site)
- **Hugo** - Static site generator
- **Git/GitHub** - Version control & hosting
- **VS Code** - Code editor
- **Typst** - Typesetting automation

**Philosophy:** Learn the tools deeply enough to direct them effectively.

</details>

---

<details>
<summary><h2>What Makes This Different</h2></summary>

### Building in Public

I'm documenting everything. The successes, the failures, the "what was I thinking" moments, the learning process.

**Why?**
- Proves I can learn technical skills
- Shows problem-solving process  
- Demonstrates AI collaboration fluency
- Creates accountability
- Helps others in similar positions

**The meta layer:** The blog about learning web dev is published on a site I learned to build. That's the point.

### Transparent Learning

I don't pretend to be an expert. I share the confusion, the struggles, the debugging process.

**Recent example:** Spent 2 hours figuring out why a blog post wasn't showing up. The answer? I forgot `draft: false` in the front matter. I wrote about that.

**Why this matters:** It proves learning capacity, which is more valuable than pretending to know everything.

### The ADHD Workflow

My brain works in hyperfocus sprints. I need:
- Continuous workflow (context switching kills me)
- Variety within projects (multiple skills at once)
- Tangible progress (not endless planning)
- Tools that enable flow state

**AI tools make this possible.** I can stay in creative flow while getting technical help as needed.

</details>

---

<details>
<summary><h2>What I've Learned</h2></summary>

### From Artifactum
- AI collaboration workflows for complex creative projects
- Automated content production pipelines
- Version control for creative work
- Production quality matters (AI helps, but you still need standards)

### From Building This Site
- Web development fundamentals (Hugo, Git, Markdown)
- Learning in public creates accountability
- Breaking things teaches more than tutorials
- Cline is a game-changer for non-developers who want to learn

### From the Journey
- ADHD can be an advantage in AI-augmented work
- Rapid skill acquisition is more valuable than deep expertise in one thing
- Building proof is better than talking about ideas
- Nobody's support and teaching made all of this possible 💙

</details>

---

<details>
<summary><h2>What's Next</h2></summary>

**January 2026 — Shipping, Not Building**

I'm done with endless prototypes. **Time to ship production work.**

**Immediate (Q1 2026):**
- Generate 5-10 more mystery games with Artefactum (different themes, test commercial viability)
- Run The Red Corner event (validate game design with real players)
- Explore Artefactum commercialization (sell games? license generator? both?)
- Document unconventional tool choices (Groq, DSPy, Typst) in blog posts
- Build second game: Orfanato (Portuguese orphanage mystery, 80% complete)

**Medium term (2026):**
- Decide: Launch Artefactum as product or pivot to something else
- Keep learning cutting-edge tools (currently: DSPy, TextGrad, React Three Fiber)
- Focus on **revenue-generating projects** (not just portfolio pieces)
- Build in public, but protect IP strategically

**What I'm NOT doing:**
- Tutorial hell (if I'm not building something real, I'm wasting time)
- Freelancing or consulting (not interested right now)
- Traditional job hunting (unless the perfect AI Creative Producer role appears)
- Building things nobody wants (validate commercial viability first)

**Philosophy shift:**
I used to build to learn. Now I'm learning to build **products people pay for**. The skills are the same, but the mindset is different.

</details>

---

<details>
<summary><h2>Connect</h2></summary>

**GitHub:** [github.com/marialu1](https://github.com/marialu1)  
**Projects:** [View all projects →](/projects/)  
**Blog:** [Read latest posts →](/posts/)

Want to collaborate on something weird? Have questions about AI creative workflows? Just want to say hi?

Find me on GitHub.

</details>

---

**TL;DR:**
Interior designer → ADHD brain needed more → discovered AI → learned web dev → built this site → created murder mystery game → now making weird stuff and documenting everything → building in public → learning "pra xuxu" → loving it.

**The secret ingredient:** Nobody's friendship, support, and teaching. None of this would exist without them. 💙
