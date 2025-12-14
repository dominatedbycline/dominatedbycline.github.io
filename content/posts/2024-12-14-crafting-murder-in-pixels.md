---
title: "Crafting Murder in Pixels: Building the Artefactum Games Website"
date: 2024-12-14
draft: false
tags: ["web-development", "astro", "tailwind", "ai-tools", "design", "building-in-public", "murder-mystery"]
description: "How I built a vintage-aesthetic website for my murder mystery games company in a single day using Astro, Tailwind CSS, Python, Claude Code, and a lot of blood splatters."
---

# Crafting Murder in Pixels

## Building the Artefactum Games Website in One Day

What you're about to read is not a week-long sprint or a month of careful planning. **This entire website - blood splatters, vintage envelopes, claw scratches, bilingual content - was built in a single day.**

One day. From blank Astro project to immersive murder mystery experience.

**Artefactum Games** is my project for creating immersive murder mystery experiences - from dinner parties where everyone's a suspect to hybrid physical-digital detective games. The website needed to feel like opening an old letter that might contain evidence of a crime.

---

## The Vision: 1920s Meets Horror

The first game, **"Murder at Gatsby Rose"**, is set in Manhattan, 1926. Jazz, champagne, secrets. So the website had to channel that era - but with a sinister twist.

**What I wanted:**
- Vintage paper textures
- Blood splatters (tasteful ones, if that's possible)
- Typography that feels handwritten and old
- Interactive elements that surprise you
- That feeling of discovering a crime scene

**What I had:**
- Astro (a static site framework I'm learning)
- Tailwind CSS
- Claude Code as my AI pair programmer
- Zero design degree

Let's see how it went.

---

## The Tech Stack

### Astro + Tailwind CSS

I chose **Astro** because it's fast, component-based, and perfect for content-heavy sites. Each page is an `.astro` file mixing HTML, CSS, and JavaScript seamlessly.

**Tailwind CSS** handles the styling. Instead of writing CSS files, I use utility classes directly in HTML:

```html
<h1 class="text-6xl md:text-7xl mb-8"
    style="font-family: 'Cherish', cursive; color: #8B0000;">
  Murder at Gatsby Rose
</h1>
```

That `#8B0000` is blood red. You'll see it a lot.

### Python for Asset Generation

Here's where it gets fun. I needed blood splatters. Lots of them. Different sizes, shapes, organic-looking.

So I wrote Python scripts using PIL to generate them procedurally:

```python
from PIL import Image, ImageDraw
import random
import math

def create_blood_splatter(width, height, num_droplets=15):
    img = Image.new('RGBA', (width, height), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    # Main pool
    center_x, center_y = width // 2, height // 2
    for _ in range(num_droplets):
        # Dark coagulated layer
        x = center_x + random.randint(-width//4, width//4)
        y = center_y + random.randint(-height//4, height//4)
        r = random.randint(10, 40)
        color = (random.randint(60, 100), 0, 0, random.randint(180, 220))
        draw.ellipse([x-r, y-r, x+r, y+r], fill=color)

    return img
```

**The result?** Eight different blood splatter images (small, medium, large) scattered throughout the homepage. Each one slightly different. Each one adding to the crime scene atmosphere.

---

## The Vintage Envelope Cards

This is the part I'm most proud of.

Each game on the homepage is presented as a **vintage airmail envelope**. Not just a card with a border - a full-on 1930s envelope with:

- **Diagonal airmail stripes** (red, white, blue)
- **Perforated stamps** with the game date
- **Postal cancellation marks** with location
- **Coffee stains** and **age spots**
- **Paper texture** using SVG noise filters
- **Fold lines** across the middle
- **Wax seals** with the Artefactum "A"

Here's a snippet of how the stamp perforations work:

```css
clip-path: polygon(
  4% 0%, 8% 4%, 12% 0%, 16% 4%, 20% 0%,
  /* ... 100+ more points to create the zigzag edge */
);
```

It's ridiculous. It's excessive. **It's perfect.**

The coffee stain is just a radial gradient:

```html
<div class="absolute opacity-20 rounded-full"
     style="width: 120px; height: 100px;
            background: radial-gradient(ellipse, #8B4513 0%, transparent 70%);
            transform: rotate(20deg);">
</div>
```

Simple. Effective. Looks like someone left their cup on the envelope 90 years ago.

---

## The Claw Scratch Effect

Here's where I got ambitious.

I wanted claw marks that **reveal as you scroll down the page**. Like something is scratching through the screen as you explore deeper into the mystery.

**Step 1:** Generate claw scratches with Python (PIL again, drawing tapered lines with rough edges).

**Step 2:** Position them fixed on the left side of the viewport.

**Step 3:** Use CSS `clip-path` controlled by JavaScript to reveal them progressively:

```javascript
function updateScratches() {
  const scrollY = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

  let revealPercent = 0;
  if (scrollY > 0) {
    revealPercent = Math.min(100, 5 + (scrollY / maxScroll) * 95);
  }
  const clipValue = 100 - revealPercent;

  scratchImg.style.clipPath = `inset(${clipValue}% 0 0 0)`;
}

window.addEventListener('scroll', updateScratches);
```

**The effect:** As you scroll from top to bottom, claw marks slowly appear from top to bottom. By the time you reach the footer, the full scratch is visible.

Is it subtle? Not really. Is it thematic? Absolutely.

---

## Background Removal with rembg

Several decorative images came from vintage sources but needed their backgrounds removed. Instead of Photoshop, I used **rembg**, a Python library powered by AI:

```python
from rembg import remove
from PIL import Image

with open('vintage_lady.jpg', 'rb') as input_file:
    output = remove(input_file.read())
    with open('vintage_lady.png', 'wb') as output_file:
        output_file.write(output)
```

30 seconds of work. Perfect cutouts. The vintage lady with champagne in the "About" section? That's rembg doing its magic.

---

## Internationalization: PT + EN

The site is bilingual - Portuguese and English. Astro handles this with a simple i18n setup:

```typescript
// src/i18n/utils.ts
export const languages = {
  en: 'English',
  pt: 'Português',
};

export function t(lang: string, key: string): string {
  return translations[lang][key] || key;
}
```

Each page exists twice (`/pt/` and `/en/`), and a language switcher in the header lets users flip between them. The translation files are just JSON:

```json
{
  "home.hero.title": "Murder tastes like Dessert",
  "home.games.title": "Our Games",
  "games.status.coming_soon": "Coming Soon"
}
```

---

## What I Learned

### 1. CSS Can Do More Than You Think

Perforated stamps, paper textures, realistic shadows - all pure CSS. No images needed for effects that would've required Photoshop a few years ago.

### 2. Procedural Generation is Powerful

Writing Python scripts to generate blood splatters means I can create infinite variations. Need a bigger splatter? Change one parameter. Need it redder? Adjust the RGB values.

### 3. AI Pair Programming Changes Everything

This is the real secret to the one-day timeline.

I worked on this with Claude Code. Not "AI wrote everything" - more like having a senior developer who never gets tired of my questions and can write CSS clip-path polygons without crying.

The workflow:
- I describe what I want ("make the envelope look more realistic")
- Claude suggests approaches
- I pick one, we implement it together
- I say "não gosto" (I don't like it) and we iterate
- Repeat. Fast. All day.

In one session, we went from "I want vintage envelopes" to perforated stamps with coffee stains and wax seals. From "add some scratches" to scroll-triggered claw marks that reveal as you explore the page.

This level of iteration - trying ideas, discarding them, refining others - would normally take days or weeks. With AI pair programming, it took hours.

### 4. Details Matter Absurdly Much

The difference between "nice website" and "immersive experience" is in the coffee stains. The fold lines. The slight rotation on the stamps. The wax seal with a single letter.

None of these are necessary. All of them are essential.

---

## What's Next

One day got us the foundation. The website is functional but not finished. Coming soon:

- **Individual game pages** with full character teasers
- **A booking system** for mystery dinner parties
- **An evidence gallery** for the Orfanato game
- **More blood** (there's always room for more blood)

---

## Try It Yourself

The site is hosted at [artefactum.games](https://artefactum.games) (or will be soon - we're still in development).

If you're building something similar and want to chat about vintage web aesthetics, procedural asset generation, AI pair programming, or murder mystery game design - find me on the internet. I'm happy to share what I learned about rapid prototyping with modern tools.

**Remember:** The best websites aren't just functional. They're experiences. They're crime scenes waiting to be discovered.

Now if you'll excuse me, I have a murder to plan.

---

*Built in one day with Astro, Tailwind CSS, Python, Claude Code, and an unhealthy obsession with 1920s aesthetics.*

*Total time: ~8 hours. Total blood splatters: 8. Total coffee stains: enough.*
