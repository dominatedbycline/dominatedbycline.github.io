---
title: "Orfanato Nossa Senhora das Dores"
description: "A supernatural murder mystery investigation game - hybrid physical + digital"
date: 2024-12-07
tags: ["game-design", "murder-mystery", "AI-assisted", "hybrid-game", "portuguese"]
---

# Orfanato Nossa Senhora das Dores

**Status:** In Development 🚧
**Format:** Hybrid (physical box + companion app)
**Players:** 4-10 (cooperative)
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

### Done
- Core concept and narrative
- **Complete Narrative Bible** (700+ lines)
- **ORFANATO_MASTER.md** - Single source of truth (537 lines, synchronized)
- **15+ fully developed characters:**
  - **Madre Superiora Francisca** (alive - main witness, architect of the system)
  - 3 murdered nuns (Conceição - educator, Beatriz - discipline, Carmo - administration)
  - 3 ghost children (Miguel 2008, Sofia 1987, João 1973)
  - 2 good staff (Manuel caseiro, Rosa cozinheira)
  - 1 complicit priest (Padre Henrique)
  - 5 survivor witnesses (Carla, Tomás, Inês, Rui, Vera)
  - 3 current orphans (Lucas 17, Ana 15, Matilde 12)
  - 3 other nuns alive (Helena, Clara, Mariana)
- Game structure (4 phases + intro/conclusion)
- **Subtle impossible deaths** - each mirrors how the child died
- Lock/code puzzle system (0333, 1960, MIGUEL, 2008)
- Hint system design (3-level progressive hints)
- App architecture (PWA with React)
- Video production pipeline (AI images + ElevenLabs)
- **Real Sintra facts integrated** - 1982 flying stones, Convento dos Capuchos, haunted quintas
- **Trigger warnings** - content advisory for sensitive themes
- GitHub repo: [artefactum_games](https://github.com/marialu1/artefactum_games)

### In Progress
- **Testimony documents** (11 total, ~12 pages)
- Physical-digital connection system
- Technical R&D: Electronic locks controlled by app

### Next
- Write all 11 testimony documents
- Order ESP32/ESP8266 components (~€15-20)
- Build prototype with solenoid locks
- Develop companion app
- Create "Curiosidades de Sintra" companion document
- Playtest

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
- **GDD:** [Game Design Document](https://github.com/marialu1/artefactum_games/blob/main/orfanato/docs/GDD.md)
- **Master Doc:** [ORFANATO_MASTER.md](https://github.com/marialu1/artefactum_games/blob/main/orfanato/docs/ORFANATO_MASTER.md) - Single source of truth
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

## Writing Process

This project is being developed through **collaborative ping-pong with Claude**. Read more about the process: [Collaborative Storytelling with Claude: A Ping-Pong Method](/posts/collaborative-storytelling-with-claude/)

---

*This project is part of the [Artefactum Mystery Crimes](/projects/artifactum/) series.*
