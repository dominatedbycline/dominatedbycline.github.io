---
title: "Christmas Murder Mystery 1926"
description: "An interactive AI-generated murder mystery"
date: 2025-10-14
featured: true
tags: ["project", "murder-mystery", "artifactum", "ai-tools", "game-design"]
---

# Christmas Murder Mystery 1926

<div class="video-container">
  <video controls>
    <source src="/videos/teaser.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>

**Status:** In Development 🎨 (almost there!)  
**Development Time:** 2+ weeks (14+ hours/day, hyperfocused)  
**Players:** 11 interconnected characters → 10 people signed up  
**Pages:** 100+ game materials  
**Setting:** 1920s Manhattan  
**Event:** December 25, 2025

---

<details>
<summary><h2 class="inline-heading">The Origin Story</h2></summary>

It started on a beach.

I was stuck. No prospects. Feeling creatively blocked. Nobody (my personal Cri-Kee 💙) suggested—again—that I try AI.

"But it can't be creative," I said.

<img src="/images/innocent-as-a-babydog.png" alt="innocent dog" class="meme-img" />
<p class="img-caption">(me innocent as a baby dog)(yodo)</p>

**Well. Guess not.**

A few weeks earlier, I'd seen an Instagram reel from a creative director who made a murder mystery party for her friends. I loved it. I wanted to make one too.

<img src="/images/instagram-inspo.jpg" alt="Instagram inspiration" class="meme-img" />
<p class="img-caption">Insta:viktoria.psd</p>

My sister hosts a Christmas dinner every year with friends. I suggested we do a murder mystery this year instead.

10 people signed up.

<img src="/images/burning-in-hell.png" alt="burning in hell" class="meme-img" />

So I had 2 weeks to make an 11-character murder mystery roleplay game from scratch.

With AI as my production team.

**Spoiler:** It worked. 🎭

</details>

---

<details>
<summary><h2 class="inline-heading">What It Is</h2></summary>

A complete murder mystery roleplay game for 11 players set in 1920s Manhattan. Each player receives:
- Detailed character sheet with backstory
- Secret relationships and objectives
- Plot threads that intersect with other characters
- A murder to solve (or commit)

**(photo: sample character sheet pages spread out ou stacked game materials)**

**Total materials:** 100+ pages of custom-designed game content

**(photo: printed character booklets ou digital files preview)**

</details>

---

<details>
<summary><h2 class="inline-heading">Development Story</h2></summary>

### Week 1: Character Development & Story Architecture

Claude became the mastermind behind this project—the creative collaborator that feeds my ideas and helps them evolve.

{{< claude-carousel >}}

- Started with character concepts and relationships
- Developed 11 interconnected backstories with secret connections
- Created plot threads that weave between characters
- Multiple iterations to ensure narrative coherence
- Claude analyzed consistency across all character arcs

<details class="spoiler-details">
<summary class="spoiler-summary">
<div class="spoiler-header">
<strong>Character Relationship Web</strong><br/>
<span class="spoiler-alert">SPOILER ALERT</span><br/>
<span class="spoiler-hint">(click to reveal)</span>
</div>
</summary>

<img src="/images/character-relationship-web.png" alt="Character Relationship Web showing all 11 characters and their connections" class="wide-img" />

</details>

### Week 2: Production Pipeline

With characters locked, it was time to build everything.

```mermaid
graph TD
    A[Week 2: Production]
    A --> B[Typesetting Automation]
    A --> C[AI Character Portraits]
    A --> D[Video Teaser Production]
    A --> E[Git Version Control]
    A --> F[Final Assembly]
    
    B & C & D & E --> F
    
    style A fill:#FF6B6B
    style B fill:#4ECDC4
    style C fill:#4ECDC4
    style D fill:#4ECDC4
    style E fill:#4ECDC4
    style F fill:#95E1D3
```

- Typesetting automation with Typst
- AI-generated character portraits and assets
- Video teaser production
- Git-based version control for all content
- Final assembly and testing

</details>

---

<details>
<summary><h2 class="inline-heading">Tools & Workflow</h2></summary>

<img src="/images/dreamteam.webp" alt="The Dream Team" class="wide-img" />

### The Mastermind: Claude

Claude was the creative engine behind this entire project. Not just a tool—a collaborator that:
- Helped develop and refine 11 interconnected character arcs
- Analyzed narrative consistency across backstories
- Evolved ideas from vague concepts to concrete plots
- Fed my creativity instead of replacing it

---

### Character Portraits: Gemini

<img src="/images/gemini-interface.png" alt="Gemini interface for character generation" class="wide-img" />

**Image Generation:**
- Prompt + reference photo → character portraits
- Multiple iterations per character
- Style consistency across all 11 characters

<details class="spoiler-details">
<summary class="spoiler-summary">
<div class="spoiler-header">
<strong>Guest List</strong><br/>
<span class="spoiler-alert">GUEST LIST</span><br/>
<span class="spoiler-hint">(click to reveal)</span>
</div>
</summary>

<div style="background: white; padding: 1rem; border-radius: 8px; display: inline-block;">
<img src="/images/guest-list.png" alt="Grid of all 11 character portraits" class="wide-img" />
</div>

</details>

**Voice Generation:**
- Script-to-voice for audio clips
- Character-specific variations
- Multiple takes for selection

---

### Video Production: The lm-arena Experience

**The Discovery:**

I had budget on Fal.ai and tried MANY programs, including Sora. Results? Always shit.

**Then I tried lm-arena with Sora.**

Same tool. Different platform. **Quite different. Better.**

Why? I don't know. But lm-arena became my favorite video generation tool.

<img src="/images/smiley-baby.png" alt="Smiley baby" class="meme-img" />

**The Process:**
- Used multiple accounts (thanks Discord friends!)
- Generated multiple video clips in parallel
- High success rate for parameter-specific outputs
- Created several clips, fell in love with one I didn't even use
- Final editing in kdenlive

**Sound Design:**
- SFX created with Adobe Firefly
- Audio clips from Gemini voice generation
- Final mix in kdenlive

<img src="/images/kdenlive.png" alt="Kdenlive timeline" class="wide-img" />

---

### The Development Backbone: Cline (VS Code)

<img src="/images/vs-code-backbone.png" alt="VS Code with Cline interface" class="wide-img" />

💙 **You have my heart.**

Cline was the AI coding assistant that made the entire automation pipeline possible. From Python scripts to Git hooks to content assembly—Cline was the development backbone of this project.

Without Cline, none of the automation would have happened.

---

### Design & Assets: Canva Pro

<img src="/images/canva-window.png" alt="Canva Pro interface with project assets" class="wide-img" />

**Props & Visual Assets:**
- All physical props and visual assets designed in Canva Pro
- Character cards, invitations, promotional materials
- Print-ready designs for game materials
- Quick iterations and professional results

**(photo: finished Canva designs - character cards, invitations, props)**

---

### Typesetting & Automation

**Typst** (replaced LaTeX):
- Faster, modern typesetting system
- Automated character sheet generation
- Template-based modular content
- 100+ pages generated from snippets

```mermaid
graph LR
    A[Content<br/>Snippets] --> B[Typst<br/>Templates]
    B --> C[Build<br/>Script]
    C --> D[Final PDFs<br/>100+ pages]
    
    style A fill:#FFE66D
    style B fill:#4ECDC4
    style C fill:#FF6B6B
    style D fill:#95E1D3
```

**Python + Git:**
- Build automation scripts
- Git hooks for version control
- Modular content architecture
- Automated assembly pipeline

</details>

---

<details>
<summary><h2 class="inline-heading">Behind the Scenes: The Reality</h2></summary>

### The Privileged Setup

This project was created with access to:
- Premium AI tool subscriptions
- Fal.ai budget for experimentation
- Friends' accounts for parallel processing
- ADHD-friendly workflow (no forced breaks, continuous iteration)

This is a privileged setup. It matters to document that reality.

**Work Distribution:**

```mermaid
pie title AI vs Human Work Split
    "AI Generation" : 40
    "Human Curation" : 25
    "Human Refinement" : 20
    "Manual Work" : 15
```

---

### The Work: Hyperfocus Mode Activated

**14+ hours per day. Non-stop. Super hyperfocused.**

Not bragging—just the reality of ADHD hyperfocus when the right project hits.

When you're in the zone, you don't stop. You learn by doing. You iterate constantly. You make mistakes and fix them immediately. You generate more content than you need because you're exploring every possibility.

This project was built in that state. It's a privileged position to be able to work like that, but it's also how the learning happened.

---

### The Creative Chaos

- Tested MANY tools on Fal.ai before finding what worked
- Generated more content than I needed
- Fell in love with video clips I didn't use
- Learned an insane amount in 2 weeks
- Nobody's suggestion paid off (he was right, again)

</details>

---

<details>
<summary><h2 class="inline-heading">What Worked</h2></summary>

✅ **Claude as creative collaborator** - Feeds creativity, doesn't replace it  
✅ **Cline for development** - Made automation pipeline possible  
✅ **lm-arena for video** - Better results than standalone tools  
✅ **Gemini for character images** - Prompt + photo = consistent portraits  
✅ **Adobe Firefly for SFX** - Professional audio without a sound designer  
✅ **Typst over LaTeX** - Faster, easier automation  
✅ **Git for creative projects** - Version control for storytelling  
✅ **Modular content architecture** - Easy iterations and updates

```mermaid
mindmap
  root((� The Dream Team))
    🤖 AI Collaborators
      Claude
        Creative partner
        Feeds creativity
        Doesn't replace it
      Gemini
        Character images
        Prompt + photo
        Consistent portraits
      LM Arena
        Video creation
        Better than standalone
        Multi-model testing
    💻 Development Stack
      Cline
        Automation pipeline
        Dev efficiency
        Code generation
      Typst
        Faster than LaTeX
        Easy automation
        Clean documents
      Git
        Version control
        Creative projects
        Collaboration
    🎨 Production Tools
      Adobe Firefly
        Professional SFX
        No sound designer
        High quality audio
      Canva
        Visual design
        Quick mockups
        Brand consistency
      Mermaid
        Auto diagrams
        Documentation
        This diagram!
    🏗️ Architecture
      Modular Content
        Easy iterations
        Clean updates
        Scalable system
        Reusable components
```

</details>

---

<details>
<summary><h2 class="inline-heading">What I Learned</h2></summary>

**"AI can't be creative"** → Wrong. AI can be an incredible creative collaborator.

<img src="/images/flexing.png" alt="Flexing in hell slaying" class="meme-img" />

But it's not about the AI replacing you. It's about the AI feeding your ideas, helping them evolve, and handling the production work while you stay in creative control.

Claude was the mastermind. Cline was the builder. I was the director. The game was the result.

```mermaid
graph LR
    A[Claude<br/>The Mastermind] --> D[Murder Mystery<br/>Game]
    B[Cline<br/>The Builder] --> D
    C[Maria<br/>The Director] --> D
    
    style A fill:#9B59B6
    style B fill:#3498DB
    style C fill:#E74C3C
    style D fill:#2ECC71
```

</details>

---

<details>
<summary><h2 class="inline-heading">Bloopers & Failures</h2></summary>

Coming soon: Screenshots and stories of what went spectacularly wrong.

**Video Generation Gone Wrong:**

<div class="video-container">
  <video controls>
    <source src="/videos/clue002.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>

**The Prompt:**

> Extreme macro close-up, broken piano wire approximately 30cm length coiled on dark wood surface (mahogany desk), wire diameter 0.8mm visible in sharp detail, dark brownish-red stains on sections of wire (dried blood implication), one end shows clean break with metal fiber separation visible, wire casts dramatic shadow from single key light above left, camera slow rotation orbit 270 degrees around wire over 6 seconds revealing different angles and stain patterns, slight movement as if wire has subtle life (micro-vibration), shot with 100mm macro lens f/2.0, ultra-sharp focus showing steel wire texture, color grading dark noir with cool blue tones, stains appear darker brown, photorealistic metal material and forensic detail, 8K macro, unsettling

**Preview:**

<img src="/images/blooper-confused.png" alt="When you don't understand what just happened" class="screenshot-img" />

<img src="/images/blooper-frustrated.png" alt="Frustration with character files" class="screenshot-img" />

More chaos documentation coming! 💀

</details>

---

<details>
<summary><h2 class="inline-heading">Future Posts</h2></summary>

Detailed breakdowns coming:
- AI-assisted character development workflow
- Why lm-arena > standalone Sora
- Automated typesetting with Typst
- Video production pipeline
- Modular content architecture for creative projects
- Full bloopers post

**Want updates?** Follow [#artifactum](/tags/artifactum/)

</details>

---

<details>
<summary><h2 class="inline-heading">The Final Sprint</h2></summary>

**Current status:** Finishing the final details. Almost ready for December 25.

**Project Timeline:**

```mermaid
gantt
    title Murder Mystery 1926 - Development
    dateFormat  YYYY-MM-DD
    section Week 1
    Character Design     :done, a1, 2025-09-30, 7d
    Story Architecture   :done, a2, 2025-10-02, 5d
    section Week 2
    AI Asset Generation  :done, a3, 2025-10-07, 4d
    Video Production     :done, a4, 2025-10-09, 3d
    Typesetting Setup    :done, a5, 2025-10-11, 2d
    section Final Sprint
    Final Assembly       :active, a6, 2025-10-13, 2d
    Testing & Polish     :a7, 2025-10-15, 10d
    Event Day            :milestone, a8, 2025-12-25, 0d
```

**Feelings:** Exhausted. Proud. Nervous. Excited.

---

**Note:** Full game details and character materials available upon request. The game will be played December 25, 2025. Almost there! 🎭🎄

</details>
