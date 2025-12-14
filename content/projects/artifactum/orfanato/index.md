---
title: "Orfanato Nossa Senhora das Dores"
description: "A supernatural murder mystery investigation game - hybrid physical + digital"
date: 2024-12-07
tags: ["game-design", "murder-mystery", "AI-assisted", "hybrid-game", "portuguese"]
---

# Orfanato Nossa Senhora das Dores

**Status:** 80% Complete 🎯
**Format:** Hybrid (physical box + companion app)
**Players:** 1-4 (cooperative)
**Duration:** 2-3 hours
**Language:** Portuguese

---

## The Concept

Three nuns are found dead at 03:33 AM—each killed in a different way, in different locations, at the exact same moment. As investigators, players must piece together impossible evidence that defies logic.

The deeper they dig, the darker the truth becomes: these weren't innocent victims. The orphanage hides decades of child abuse, and the killers... aren't human.

**Core tension:** All evidence is physically impossible. No single person could have done this. The solution requires accepting the supernatural.

---

## What Makes This Different

### Hybrid Physical + Digital
- **Physical:** A box with locked compartments, documents, photographs, evidence to pin on a cork board with red string (detective style)
- **Digital:** Companion app with videos, historical records, and the darkest secrets

### Self-Running
No game master needed. The game guides itself through locked phases—each unlock reveals new evidence and deeper horror.

### Deduction Over Discovery
Players aren't told "it was ghosts." They must deduce the supernatural through logical elimination of all human possibilities.

---

## Game Structure

```
THE BOX
│
├─ Setup Layer (open)
│  └─ Cork board, pins, string, floor plan, QR to start
│
├─ INTRO VIDEO → Question → Unlock Phase 1
│
├─ Phase 1: CRIME SCENE (locked)
│  └─ Autopsies, scene photos, impossibilities emerge
│
├─ Phase 2: TESTIMONIES (locked)
│  └─ Witnesses, contradictions, first hints of abuse
│
├─ Phase 3: THE PAST (app)
│  └─ Historical records, the dead children, the truth
│
├─ Phase 4: FINAL EVIDENCE (locked)
│  └─ Everything connects, solution becomes clear
│
└─ CONCLUSION VIDEO
```

---

## The Story (No Spoilers)

An isolated Portuguese orphanage with an impeccable reputation. Three devoted nuns found brutally murdered. Impossible evidence. Terrified orphans who won't talk about what happens after 21:00.

And three children who died in "accidents" over the years—children whose belongings keep appearing at the crime scenes.

---

## Development Approach

This is my second Artefactum game, but the first with:

- **Hybrid format** (previous was pure roleplay)
- **Escape room mechanics** (locks, codes, phases)
- **App integration** (companion digital experience)
- **Darker tone** (horror vs period drama)

### AI Integration

Using AI throughout development for:
- Narrative consistency checking
- Document generation (testimonies, reports)
- Puzzle design validation
- Potentially: in-game AI features (hints, atmosphere)

---

## Current Progress

```
CONCEITO     ████████████████████ 100%
NARRATIVA    ████████████████████ 100%
PERSONAGENS  ████████████████████ 100% (22 fichas!)
ESTRUTURA    ████████████████████ 100%
DOCS INGAME  ████████░░░░░░░░░░░░ 40%
TESTEMUNHOS  ███████████░░░░░░░░░ 55%
```

### Major Milestone: 5-Act Structure Complete

The game now follows a **LucasArts-inspired puzzle dependency methodology**—each document exists to unlock something. No filler.

**Design Philosophy:** "The player is a DETECTIVE, not a spectator. Emotion comes from DISCOVERING, not being TOLD."

### Done ✅

**Concept & Narrative:**
- Complete Narrative Bible
- VERSÃO_CANÓNICA.md - Single source of truth
- 5-Act structure with minute-by-minute player experience

**Characters (22 total):**
- 4 living nuns (including Madre Superiora Francisca)
- 3 murdered nuns (Conceição, Beatriz, Carmo)
- 3 ghost children (João 1973, Sofia 1987, Miguel 2008)
- 4 staff members (Manuel, Rosa, Padre Henrique, Dr. António)
- 5 adult survivors (Carla, Tomás, Inês, Rui, Vera)
- 3 current orphans (Lucas 17, Ana 15, Matilde 12)

**Game Structure:**
- **5-Act blueprint** with emotional arc mapped
- Puzzle system: 0333 → MIGUEL → 2008 → 1960
- 6 essential testimonies identified (from original 11)
- ~19 pages of core documents designed

**Act 1: The Crime - PRODUCTION READY:**
- Police report (Typst format, authentic visual design)
- 3 autopsies with impossible deaths (Typst format)
- Dr. António testimony
- Production guide created

**Act 2: The Suspicions - COMPLETE:**
- Rosa testimony (reveals abuse)
- Ana testimony (sees ghosts)
- Matilde testimony (witnessed death)
- Helena testimony (MIGUEL cipher)

**Technical:**
- GitHub repo: [artefactum_games](https://github.com/marialu1/artefactum_games)
- Real Sintra facts integrated (1982 flying stones phenomenon)
- Typst templates for authentic document production

### In Progress 🚧

**Act 2 support materials:**
- 3 newspaper clippings (1973, 1987, 2008)
- Matilde's 4 drawings
- Orphanage floor plan

**Act 3: The Dead:**
- Sofia's letter (child voice)
- Miguel's diary (3 entries)
- João's death certificate
- Carla's testimony ✅ (already written)

### Next Steps

| Act | Status | Documents |
|-----|--------|-----------|
| Act 1 | ✅ Ready | Print and test |
| Act 2 | 🟡 90% | Support materials |
| Act 3 | ⏳ Pending | 3 documents |
| Act 4 | ⏳ Pending | Transfer records, foundation letter |
| Act 5 | ⏳ Pending | Final letter, conclusion video |

---

## Technical Exploration: App-Controlled Locks

One of my goals with Artefactum games is to **implement new tech in each project**. For Orfanato, I'm exploring electronic locks controlled by the companion app.

### The Challenge

How do you make a physical box that opens when the app says so?

### Options Explored

| Approach | Cost | Complexity | iOS Support |
|----------|------|------------|-------------|
| Manual combo locks | €10 | Zero | Yes |
| ESP8266 + WiFi/WebSocket | €15 | Medium | Yes |
| ESP32 + Bluetooth | €20 | Medium | No* |
| NFC tags | €5 | Low | Limited |

*Web Bluetooth API not supported on iOS/Safari

### Current Direction: ESP8266 + WebSocket

The most promising budget solution:

```
📱 Phone connects to "Orfanato-Box" WiFi
         │
         ▼ WebSocket
┌─────────────────────┐
│      ESP8266        │
│         │           │
│    ┌────┴────┐      │
│    │  RELAY  │      │
│    └────┬────┘      │
│         │           │
│    ┌────┴────┐      │
│    │SOLENOID │      │
│    │  LOCK   │      │
│    └─────────┘      │
└─────────────────────┘
```

**Total cost:** ~€15 for 3 electronic locks

### Open Source Resources

Projects I'm studying:
- [ArduinoProps](https://github.com/xcape-io/ArduinoProps) - Escape room prop library
- [Node-REDscape](https://github.com/playfultechnology/node-redscape) - Complete control system
- [arduinoWebSockets](https://github.com/Links2004/arduinoWebSockets) - WebSocket library

### Questions I'm Working Through

1. **ESP8266 vs ESP32-C3?** - €2 vs €3, Bluetooth worth the extra?
2. **WiFi AP mode vs existing network?** - Portability vs convenience
3. **Battery life?** - How many unlocks per charge?
4. **Fallback for failures?** - Manual override needed?

### Shopping List (AliExpress)

```
- Wemos D1 Mini (ESP8266): €2
- 3x Solenoid Lock 12V: €9
- 4-channel Relay Module: €1.50
- Battery holder + wires: €2
Total: ~€15
```

---

## Links

- **Repository:** [github.com/marialu1/artefactum_games](https://github.com/marialu1/artefactum_games)
- **Key Documents:**
  - [ESTRUTURA_5_ACTOS.md](https://github.com/marialu1/artefactum_games/blob/main/orfanato/docs/ESTRUTURA_5_ACTOS.md) - Game blueprint (START HERE)
  - [VERSÃO_CANÓNICA.md](https://github.com/marialu1/artefactum_games/blob/main/orfanato/docs/VERSAO_CANONICA.md) - Single source of truth
  - [GDD](https://github.com/marialu1/artefactum_games/blob/main/orfanato/docs/GDD.md) - Game Design Document
- **Technical Docs:**
  - [Physical-Digital Connection Options](https://github.com/marialu1/artefactum_games/blob/main/orfanato/docs/PHYSICAL_DIGITAL_CONNECTION.md)
  - [Electronic Locks Guide](https://github.com/marialu1/artefactum_games/blob/main/orfanato/docs/TECHNICAL_ELECTRONIC_LOCKS.md)
  - [Budget & Open Source Options](https://github.com/marialu1/artefactum_games/blob/main/orfanato/docs/BUDGET_OPENSOURCE_OPTIONS.md)

---

## Development Log

| Date | Update |
|------|--------|
| Dec 2024 | Initial concept created |
| Dec 7, 2024 | Restructured project, started GDD, GitHub repo created |
| Dec 7, 2024 | Defined puzzle system, codes, hints, app architecture |
| Dec 7, 2024 | Researched electronic locks, open source options, budget solutions |
| Dec 7, 2024 | **Complete Narrative Bible** - 10 characters, timeline, deaths, atmosphere |
| Dec 8, 2024 | **Major sync:** Created ORFANATO_MASTER.md - unified GDD + Bible into single source |
| Dec 8, 2024 | Fixed hierarchy: Francisca is Madre Superiora (alive), Conceição is educator |
| Dec 8, 2024 | Integrated real Sintra facts: 1982 flying stones, Capuchos convent, haunted quintas |
| Dec 8, 2024 | Added trigger warnings, finalized character list (15+ characters) |
| Dec 8, 2024 | **5-Act Structure:** Created ESTRUTURA_5_ACTOS.md - LucasArts methodology |
| Dec 8, 2024 | **Reduced scope:** 11 testimonies → 6 essential (less docs, more impact) |
| Dec 10, 2024 | All 11 witness testimonies written (keeping extras for expansion) |
| Dec 11, 2024 | Puzzle dependency chart complete |
| Dec 11, 2024 | **Act 1 complete:** Police report in Typst with visual authenticity |
| Dec 11, 2024 | **3 autopsies created** (Typst format) - impossible deaths finalized |
| Dec 12, 2024 | **Character expansion:** 22 characters fully documented |
| Dec 12, 2024 | **Act 2 complete:** All 4 testimonies (Rosa, Ana, Matilde, Helena) |
| Dec 12, 2024 | **Consistency audit:** Fixed autopsy/character sheet inconsistencies |
| Dec 12, 2024 | Dr. António testimony - Act 1 now production ready |
| Dec 12, 2024 | Created VERSÃO_CANÓNICA.md - definitive source of truth |

## Key Learnings

### 1. Less Documents = More Impact

Started with 11 testimonies, ended with 6 essential. The "LucasArts methodology" - every document must unlock something or advance understanding. No atmospheric filler.

**Before:** 11 testimonies + 16 characters = player gets lost
**After:** 6 essential testimonies = player is invested

### 2. Canonical Source of Truth

After finding inconsistencies between autopsies and character sheets, created VERSÃO_CANÓNICA.md. Now every change goes through one document first.

**Ghost-Victim relationships (corrected):**
- Miguel → killed Conceição (impacts)
- João → killed Beatriz (internal burns)
- Sofia → killed Carmo (drowned in bucket)

### 3. Emotional Arc Design

Mapped minute-by-minute player experience:
```
Act 1: Curiosity → Confusion → Intrigue
Act 2: Discomfort → Horror → Determination
Act 3: Empathy → Sadness → Rage
Act 4: Understanding → Ambivalence → Acceptance
Act 5: Reverence → Peace → Satisfaction
```

### 4. Typst > LaTeX for Game Docs

Switched from LaTeX to Typst for document production. Faster compilation, easier syntax, beautiful authentic-looking police reports and autopsies.

### 5. AI as Quality Control

Claude checks consistency across all documents. When autopsies said one thing and character sheets another, the system caught it.

---

## Writing Process

This project is being developed through **collaborative ping-pong with Claude**. The AI handles:
- Narrative consistency checking across 22 characters
- Document generation (testimonies, reports)
- Puzzle logic validation
- Production planning

Read more about the process: [Collaborative Storytelling with Claude: A Ping-Pong Method](/posts/collaborative-storytelling-with-claude/)

---

*This project is part of the [Artefactum Mystery Crimes](/projects/artifactum/) series.*
