---
title: "Why lm-arena Beats Fal.ai (And Standalone Sora)"
date: 2024-10-16
draft: false
tags: ["artifactum", "video-generation", "ai-tools", "lm-arena", "sora", "murder-mystery"]
description: "I had budget on Fal.ai. Tried everything. Results were shit. Then I tried lm-arena with the SAME tool (Sora). Completely different experience. Here's why."
---

# Why lm-arena Beats Fal.ai (And Standalone Sora)

**Part of the [Murder Mystery 1926](/projects/artifactum/murder-mystery-1926/) project**

---

## The Problem

I needed a video teaser for my murder mystery game.

**Requirements:**
- 1920s aesthetic
- Noir atmosphere
- Specific props (piano wire, bloodstains, murder weapon vibes)
- Professional enough to hype 10 people for Christmas dinner murder

**My resources:**
- Fal.ai budget (not unlimited, but enough to test)
- Access to multiple video generation tools
- 2 weeks timeline
- Zero video production experience

**My expectations:** Generate some clips, edit together, done.

**Reality:** Most tools gave me absolute garbage.

---

## The Fal.ai Experience

### What I Tried

**Fal.ai has MANY video generation models:**
- Minimax
- Kling
- Luma
- Runway
- Various Sora alternatives

**What I did:**
- Tested them systematically
- Wrote detailed prompts
- Tried different prompt styles
- Adjusted parameters
- Generated multiple variations
- Spent actual money

**Results:** 🗑️ Shit. Consistently shit.

---

### Why It Sucked

**Not Fal.ai's fault specifically** - the platform works fine.

**The problem:**
- Models didn't follow prompts accurately
- 1920s aesthetic = random interpretation
- "Piano wire" = ???
- Noir lighting = sometimes just dark, sometimes neon???
- Parameter control felt limited
- No way to compare models side-by-side efficiently

**Example prompt:**
```
Extreme macro close-up, broken piano wire approximately 30cm length
coiled on dark wood surface (mahogany desk), wire diameter 0.8mm
visible in sharp detail, dark brownish-red stains on sections of wire
(dried blood implication)...
```

**Result:** Not even close. (See the blooper video in the [project page](/projects/artifactum/murder-mystery-1926/).)

---

## Then I Tried Standalone Sora

**Why Sora:** Heard it was the best for realistic, cinematic generation.

**Access:** Through official OpenAI interface.

**Prompt:** Same detailed, parameter-heavy prompt.

**Result:** Still... not great?

Better than some Fal.ai models, but:
- Didn't nail the aesthetic consistently
- Still had weird interpretations
- Limited control over output
- Expensive per generation

**Frustration level:** High.

---

## Then Someone Suggested lm-arena

**What is lm-arena?**

[lm-arena.ai](https://lmarena.ai/) = Platform for comparing LLMs and multimodal models side-by-side.

**But it has video generation.**

With multiple models. Including... Sora.

**My reaction:** "Wait, isn't that the same Sora I just tried?"

**Narrator:** *It was. But the experience was completely different.*

---

## The lm-arena Experience

### Why It's Better

**1. Side-by-side comparison**

You generate with **multiple models at once**.

Same prompt → 2-4 different models → instant comparison.

**This is HUGE because:**
- You see which model understands your prompt better
- You learn which models work for your aesthetic
- You don't waste time/money on single generations
- You can iterate faster

**Example:**
- Prompt about piano wire + bloodstains
- Generate with Sora, Kling, Runway simultaneously
- Pick the best result
- Adjust prompt based on what worked
- Repeat

**This workflow is SO MUCH FASTER.**

---

**2. Better Sora results (somehow???)**

I don't know why. I really don't.

**Same model. Same prompts. Better outputs.**

Theories:
- Different inference parameters?
- Different sampling settings?
- Platform optimization?
- Pure luck?
- The universe decided to help me?

**I have no idea.** But it worked.

---

**3. The voting system teaches you**

lm-arena has a voting system (which model's output is better).

**Why this matters:**
- You start seeing patterns in what works
- You learn which models excel at what
- You develop prompt intuition faster
- Community votes = implicit feedback

**It's like having a focus group for your prompts.**

---

**4. Multiple accounts strategy**

**The hack:** I had access to multiple Discord accounts (thanks friends!).

**Why this helped:**
- Parallel generation across accounts
- More attempts per hour
- Faster iteration cycle
- Test multiple prompt variations simultaneously

**Ethical?** Debatable. **Effective?** Extremely.

*(Note: Check lm-arena's terms of service. I'm just documenting what I did.)*

---

## The Results

### What I Generated

**Total clips generated:** 20+ across all attempts

**Usable clips:** 5-6 high quality

**Final teaser:** 1 clip I fell in love with (and actually used!)

**Bonus:** 1 clip I loved but didn't fit the teaser (saved for future use)

---

### The Winning Workflow

**1. Write detailed prompt**
- Specific parameters (camera angle, lighting, movement)
- Reference aesthetics (noir, 1920s, cinematic)
- Technical details (macro lens, 8K, color grading)

**2. Generate on lm-arena with multiple models**
- Sora (usually the winner)
- Kling (sometimes surprising)
- Runway (hit or miss)

**3. Pick the best result**
- Vote on lm-arena
- Download the winner
- Note which model worked

**4. Iterate on the prompt**
- Adjust based on what worked/didn't
- Test variations
- Refine parameters

**5. Repeat until satisfied**

**Total time:** ~4 hours of active work (spread over 2 days)

**Total cost:** Way less than Fal.ai burn

---

## Direct Comparison

### Fal.ai
✅ **Pros:**
- Many models in one place
- Simple interface
- Pay-per-generation pricing

❌ **Cons:**
- No side-by-side comparison
- Slower iteration (one model at a time)
- Higher cost for same results
- Hard to learn which model fits your needs

---

### Standalone Sora
✅ **Pros:**
- Official OpenAI interface
- High quality model
- Reliable access

❌ **Cons:**
- Expensive
- Single model (no comparison)
- Slower learning curve
- Results weren't as good as lm-arena (for me, somehow???)

---

### lm-arena
✅ **Pros:**
- **Side-by-side comparison** (game changer)
- Multiple models simultaneously
- Learn faster which models work for you
- Sora results were better (I don't know why!)
- Community voting = feedback loop
- More efficient use of time/budget

❌ **Cons:**
- Interface not as polished as dedicated platforms
- Requires understanding of multiple models
- Rate limits (unless you have multiple accounts 👀)
- Not designed primarily for video generation (but works!)

---

## What I Learned

### 1. Platform matters as much as the model

**Same model (Sora), different platforms, different results.**

I don't fully understand why, but it's real.

**Possible factors:**
- Inference parameters
- Sampling settings
- Platform optimization
- Random seed differences
- API vs web interface differences

**Lesson:** Don't give up on a model after one platform fails. Try different interfaces.

---

### 2. Side-by-side comparison accelerates learning

**Before lm-arena:** Generate → evaluate → adjust → generate → repeat
- Slow feedback loop
- Hard to know which model suits your style
- Expensive trial and error

**With lm-arena:** Generate (multiple) → compare → pick best → adjust → repeat
- Fast feedback loop
- Learn model strengths quickly
- Efficient experimentation

**It's like A/B testing for AI generation.**

---

### 3. Prompt engineering is model-specific

**What worked for Sora:** Detailed, technical, parameter-heavy prompts

**What worked for Kling:** More conceptual, aesthetic-focused prompts

**What worked for Runway:** Shorter, action-focused prompts

**You can't learn this without comparison.**

---

### 4. Multiple accounts = parallel experimentation

**Ethically gray? Yes.**

**Practically useful? Extremely.**

If you have friends willing to lend accounts (with their consent!), parallel generation speeds up iteration massively.

**But:** Check terms of service. Don't abuse systems. Be respectful.

---

### 5. Budget on the wrong platform = wasted money

I spent money on Fal.ai with mediocre results.

Then got better results on lm-arena (which has free tier + voting credits).

**Lesson:** Test platforms before committing budget.

---

## Practical Recommendations

### If You're Starting Video Generation

**1. Start with lm-arena**
- Free tier available
- Test multiple models
- Learn what works for your style
- Don't commit budget until you know which models you need

**2. Use side-by-side comparison aggressively**
- Generate with 3-4 models at once
- Vote honestly (helps the community)
- Take notes on which models excel at what

**3. Write detailed prompts**
- Technical parameters (lens, lighting, camera movement)
- Aesthetic references (noir, 1920s, cinematic)
- Specific details (props, colors, textures)
- Negative prompts (what you DON'T want)

**4. Iterate quickly**
- Don't expect perfection on first try
- Test variations
- Learn from failures
- Refine prompts based on results

---

### If You're Frustrated with Fal.ai/Standalone Tools

**Try lm-arena.**

Seriously.

Same models. Different experience.

**Why it might work better:**
- Side-by-side comparison changes workflow
- Voting system provides implicit feedback
- Community-driven model selection
- Potentially different inference settings

---

## The Murder Mystery Teaser

**Final result:** 30-second teaser video

**Tools used:**
- lm-arena (Sora) for main footage
- Adobe Firefly for SFX
- Gemini for voice clips
- kdenlive for editing

**Total cost:** Fraction of what I burned on Fal.ai

**Quality:** Good enough to hype 10 people for a Christmas murder mystery

**Watch it:** [Murder Mystery 1926 project page](/projects/artifactum/murder-mystery-1926/)

---

## Honest Disclaimer

**I don't know WHY lm-arena worked better.**

Maybe:
- Inference settings
- Platform optimization
- Random luck
- Confirmation bias
- The universe conspiring to help my murder mystery game

**All I know:** Same model, different platform, better results (for me).

**Your mileage may vary.** Test for yourself.

---

## Final Thoughts

**Video generation tools are NOT plug-and-play.**

You will:
- Generate garbage
- Waste money
- Get frustrated
- Question your prompts
- Question the tools
- Question your life choices

**But:**
- Some platforms work better than others
- Side-by-side comparison accelerates learning
- Prompt engineering improves with practice
- Eventually you get results you're proud of

**For me, lm-arena was the breakthrough.**

Maybe it'll be yours too. Maybe not. Only one way to find out.

---

**Part of the [Artifactum](/projects/artifactum/) series** - Murder mysteries built with AI assistance.

**Next:** [The full video production pipeline](/posts/2024-10-17-murder-mystery-video-pipeline/) (coming soon)

---

**Tools mentioned:**
- **[lm-arena.ai](https://lmarena.ai/)** - Multi-model comparison platform
- **[Fal.ai](https://fal.ai/)** - AI model hosting platform
- **[Sora](https://openai.com/sora)** - OpenAI's video generation model
- **Adobe Firefly** - SFX generation
- **kdenlive** - Open-source video editor

**Disclaimer:** Not sponsored. Just sharing what worked (and didn't) for my project.

---

**Generated weird AI video clips?** [Show me!](#) I want to see the bloopers. 🎬
