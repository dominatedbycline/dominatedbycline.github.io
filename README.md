# Artefactum

A blog exploring AI tools, techniques, and creative processes.

**Live Site:** [https://dominatedbycline.github.io/](https://dominatedbycline.github.io/)

---

## About

*Artefactum* (Latin: craft, skill, artifact) documents experiments with AI tools, programming workflows, and the artifacts that emerge from creative collaboration with AI.

**Topics:**
- AI-assisted workflows (HuggingFace, Claude, GPT-4)
- Programming techniques (Python, Typst, automation)
- Process documentation (concept → completion)
- Bloopers, learnings, and reusable templates

---

## Tech Stack

- **Hugo** - Static site generator
- **Archie theme** - Minimal, clean design
- **GitHub Pages** - Hosting
- **GitHub Actions** - Automated deployment

---

## Local Development

### Prerequisites

- [Hugo](https://gohugo.io/installation/) (v0.128.0 or later)

### Setup

```bash
# Clone repository with theme submodule
git clone --recurse-submodules https://github.com/marialu1/artefactum.git
cd artefactum

# Or if already cloned without submodules:
git submodule update --init --recursive

# Run local server
hugo server -D

# Visit http://localhost:1313
```

### Creating New Posts

```bash
# Create new post
hugo new content posts/YYYY-MM-DD-post-title.md

# Edit the file in content/posts/
# Set draft: false when ready to publish

# Commit and push - GitHub Actions will deploy automatically
```

---

## Project Structure

```
artefactum/
├── .github/workflows/hugo.yml    # Automated deployment
├── content/
│   ├── about.md                  # About page
│   └── posts/                    # Blog posts
├── themes/archie/                # Theme (git submodule)
├── hugo.toml                     # Hugo configuration
└── README.md                     # This file
```

---

## Deployment

This blog deploys automatically via GitHub Actions when pushing to the `main` branch.

**Deployment workflow:**
1. Push to `main` branch
2. GitHub Actions builds Hugo site
3. Deploys to GitHub Pages
4. Site live at [https://marialu1.github.io/artefactum/](https://marialu1.github.io/artefactum/)

---

## Featured Project

**Christmas Murder Dinner 1926** - A complete murder mystery roleplay game for 11 players set in 1920s Manhattan, showcasing:

- AI-assisted character development
- Automated typesetting with Typst
- Modular content architecture
- AI-generated video assets
- Workflow automation

See the blog for detailed breakdowns of techniques and code.

---

## License

Content: © Maria Lu  
Code/Templates: MIT License

---

**Questions or feedback?** Open an issue or reach out via [GitHub](https://github.com/marialu1).
