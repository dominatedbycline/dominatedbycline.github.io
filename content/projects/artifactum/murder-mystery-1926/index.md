---
title: "Christmas Murder Mystery 1926"
description: "An interactive AI-generated murder mystery"
date: 2025-10-14
featured: true
tags: ["project", "murder-mystery", "artifactum", "ai-tools", "game-design"]
---

# Christmas Murder Mystery 1926

<div style="text-align: center; margin: 2rem 0;">
  <video width="100%" style="max-width: 500px; border-radius: 8px;" controls>
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
<summary><h2 style="display: inline;">The Origin Story</h2></summary>

It started on a beach.

I was stuck. No prospects. Feeling creatively blocked. Nobody (my personal Cri-Kee 💙) suggested—again—that I try AI.

"But it can't be creative," I said.

<img src="/images/innocent-as-a-babydog.png" alt="innocent dog" style="width: 150px; display: block; margin: 1rem 0;" />
<p style="font-size: 0.85rem; font-style: italic; margin-top: -0.5rem; margin-bottom: 1rem;">(me innocent as a baby dog)(yodo)</p>

**Well. Guess not.**

A few weeks earlier, I'd seen an Instagram reel from a creative director who made a murder mystery party for her friends. I loved it. I wanted to make one too.

<img src="/images/instagram-inspo.jpg" alt="Instagram inspiration" style="max-width: 200px; display: block; margin: 1rem 0;" />
<p style="font-size: 0.85rem; font-style: italic; margin-top: -0.5rem; margin-bottom: 1rem;">Insta:viktoria.psd</p>

My sister hosts a Christmas dinner every year with friends. I suggested we do a murder mystery this year instead.

10 people signed up.

<img src="/images/burning-in-hell.png" alt="burning in hell" style="width: 150px; display: block; margin: 1rem 0;" />

So I had 2 weeks to make an 11-character murder mystery roleplay game from scratch.

With AI as my production team.

**Spoiler:** It worked. 🎭

</details>

---

<details>
<summary><h2 style="display: inline;">What It Is</h2></summary>

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
<summary><h2 style="display: inline;">Development Story</h2></summary>

### Week 1: Character Development & Story Architecture

Claude became the mastermind behind this project—the creative collaborator that feeds my ideas and helps them evolve.

{{< claude-carousel >}}

- Started with character concepts and relationships
- Developed 11 interconnected backstories with secret connections
- Created plot threads that weave between characters
- Multiple iterations to ensure narrative coherence
- Claude analyzed consistency across all character arcs

<details style="border: none; background: transparent;">
<summary style="border: none; list-style: none; cursor: pointer;">
<div style="text-align: center; padding: 1rem 0;">
<strong>Character Relationship Web</strong><br/>
<span style="font-size: 2em; color: #FF1493; font-weight: bold;">SPOILER ALERT</span><br/>
<span style="font-size: 0.9em;">(click to reveal)</span>
</div>
</summary>

<img src="/images/character-relationship-web.png" alt="Character Relationship Web showing all 11 characters and their connections" style="max-width: 100%; display: block; margin: 1rem auto;" />

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
<summary><h2 style="display: inline;">Tools & Workflow</h2></summary>

<img src="/images/dreamteam.webp" alt="The Dream Team" style="max-width: 600px; display: block; margin: 2rem auto;" />

### The Mastermind: Claude

Claude was the creative engine behind this entire project. Not just a tool—a collaborator that:
- Helped develop and refine 11 interconnected character arcs
- Analyzed narrative consistency across backstories
- Evolved ideas from vague concepts to concrete plots
- Fed my creativity instead of replacing it

---

### Character Portraits: Gemini

<img src="/images/gemini-interface.png" alt="Gemini interface for character generation" style="max-width: 600px; display: block; margin: 1rem auto;" />

**Image Generation:**
- Prompt + reference photo → character portraits
- Multiple iterations per character
- Style consistency across all 11 characters

<details style="border: none; background: transparent;">
<summary style="border: none; list-style: none; cursor: pointer;">
<div style="text-align: center; padding: 1rem 0;">
<strong>Guest List</strong><br/>
<span style="font-size: 2em; color: #FF1493; font-weight: bold;">GUEST LIST</span><br/>
<span style="font-size: 0.9em;">(click to reveal)</span>
</div>
</summary>

<img src="/images/guest-list.png" alt="Grid of all 11 character portraits" style="max-width: 100%; display: block; margin: 1rem auto;" />

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

<img src="/images/smiley-baby.png" alt="Smiley baby" style="width: 150px; display: block; margin: 1rem auto;" />

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

<img src="/images/kdenlive.png" alt="Kdenlive timeline" style="max-width: 100%; display: block; margin: 1rem auto;" />

---

### The Development Backbone: Cline (VS Code)

<img src="/images/vs-code-backbone.png" alt="VS Code with Cline interface" style="max-width: 600px; display: block; margin: 1rem auto;" />

💙 **You have my heart.**

Cline was the AI coding assistant that made the entire automation pipeline possible. From Python scripts to Git hooks to content assembly—Cline was the development backbone of this project.

Without Cline, none of the automation would have happened.

---

### Design & Assets: Canva Pro

<img src="/images/canva-window.png" alt="Canva Pro interface with project assets" style="max-width: 600px; display: block; margin: 1rem auto;" />

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

<div style="max-width: 500px; margin: 0.5rem auto;">

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

</div>

**Python + Git:**
- Build automation scripts
- Git hooks for version control
- Modular content architecture
- Automated assembly pipeline

</details>

---

<details>
<summary><h2 style="display: inline;">Behind the Scenes: The Reality</h2></summary>

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

**(photo: workspace at 3am - coffee cups, chaos, screens everywhere)**

**14+ hours per day. Non-stop. Super hyperfocused.**

Not bragging—just the reality of ADHD hyperfocus when the right project hits.

**(meme: person typing intensely ou "hyperfocus activated" energy)**

When you're in the zone, you don't stop. You learn by doing. You iterate constantly. You make mistakes and fix them immediately. You generate more content than you need because you're exploring every possibility.

**(photo: sleep tracker showing 4 hours ou coffee count chart)**

This project was built in that state. It's a privileged position to be able to work like that, but it's also how the learning happened.

---

### The Creative Chaos

**(graphic: "The Chaos" section header)**

- Tested MANY tools on Fal.ai before finding what worked
- Generated more content than I needed
- Fell in love with video clips I didn't use
- Learned an insane amount in 2 weeks
- Nobody's suggestion paid off (he was right, again)

**(meme: "Well well well, how the turntables" ou Nobody being smug as Cri-Kee)**

</details>

---

<details>
<summary><h2 style="display: inline;">What Worked</h2></summary>

**(graphic: checklist aesthetic)**

✅ **Claude as creative collaborator** - Feeds creativity, doesn't replace it  
✅ **Cline for development** - Made automation pipeline possible  
✅ **lm-arena for video** - Better results than standalone tools  
✅ **Gemini for character images** - Prompt + photo = consistent portraits  
✅ **Adobe Firefly for SFX** - Professional audio without a sound designer  
✅ **Typst over LaTeX** - Faster, easier automation  
✅ **Git for creative projects** - Version control for storytelling  
✅ **Modular content architecture** - Easy iterations and updates  

**(graphic: success metrics visualization ou before/after comparison)**

</details>

---

<details>
<summary><h2 style="display: inline;">What I Learned</h2></summary>

**(graphic: "The Lesson" ou lightbulb moment)**

**"AI can't be creative"** → Wrong. AI can be an incredible creative collaborator.

**(meme: "I was wrong" admission ou character development arc)**

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
<summary><h2 style="display: inline;">Bloopers & Failures</h2></summary>

**(graphic: "The Bloopers" header with fun font)**

Coming soon: Screenshots and stories of what went spectacularly wrong.

**(teaser image: blurred blooper screenshots)**

**Preview:**

**(screenshot: qnd-n-se-percebe-um-crl.png from Bloopers folder)**

**(screenshot: qnd-tava-frustrada-com-characterfiles.png from Bloopers folder)**

More chaos documentation coming! 💀

</details>

---

<details>
<summary><h2 style="display: inline;">Future Posts</h2></summary>

**(graphic: "Coming Soon" section)**

Detailed breakdowns coming:
- AI-assisted character development workflow
- Why lm-arena > standalone Sora
- Automated typesetting with Typst
- Video production pipeline
- Modular content architecture for creative projects
- Full bloopers post

**(photo: notebook with post ideas ou screenshot of post-ideas.md)**

**Want updates?** Follow [#artifactum](/tags/artifactum/)

</details>

---

<details>
<summary><h2 style="display: inline;">The Final Sprint</h2></summary>

**(photo: current workspace - "we're almost there" energy)**

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

**(meme: roller coaster of emotions ou "I'm fine" dog but actually fine this time)**

---

**Note:** Full game details and character materials available upon request. The game will be played December 25, 2025. Almost there! 🎭🎄

**(photo: "See you on December 25" graphic ou teaser for the event)**

</details>
