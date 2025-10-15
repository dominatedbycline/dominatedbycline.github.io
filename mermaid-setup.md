## 🎯 **OK! Archie Theme + Mermaid**

Vi que o **Archie tema é minimal** e **NÃO tem Mermaid built-in**. Mas vi também que alguém teve o mesmo problema que tu (discourse post). 

Vou criar uma solução **SUPER simples** específica para Archie!

---

## ✅ **SETUP MERMAID NO ARCHIE (3 Passos)**

### **PASSO 1: Criar Shortcode**

```bash
# No teu projeto Hugo:
mkdir -p layouts/shortcodes
```

Cria ficheiro: `layouts/shortcodes/mermaid.html`

```html
<!-- layouts/shortcodes/mermaid.html -->
<div class="mermaid">
{{- .Inner | safeHTML }}
</div>

<!-- Load Mermaid only once per page -->
{{ if not (.Page.Scratch.Get "mermaid") }}
  {{ .Page.Scratch.Set "mermaid" true }}
  <script type="module">
    import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
    mermaid.initialize({ 
      startOnLoad: true,
      theme: 'default',
      securityLevel: 'loose',
    });
  </script>
{{ end }}
```

---

### **PASSO 2: Configurar Hugo**

Edita `config.toml` (ou `config.yaml`):

```toml
# config.toml

[markup]
  [markup.goldmark]
    [markup.goldmark.renderer]
      unsafe = true  # IMPORTANTE!
```

Ou se usas YAML:

```yaml
# config.yaml
markup:
  goldmark:
    renderer:
      unsafe: true
```

---

### **PASSO 3: USAR NOS POSTS!**

No teu post markdown:

```markdown
---
title: "Testing Mermaid"
date: 2025-10-15
---

## My AI Workflow

{{</* mermaid */>}}
graph TD
    A[Start] --> B{AI Tool?}
    B -->|MidJourney| C[Generate Images]
    B -->|ChatGPT| D[Write Content]
    C --> E[Human Refinement]
    D --> E
    E --> F[Final Result]
{{</* /mermaid */>}}
```

**DONE!** 🎉

---

## 🎨 **STYLING PARA ARCHIE (Optional)**

O Archie é minimal, então podes querer ajustar o estilo dos diagramas.

Cria: `assets/css/custom.css`

```css
/* assets/css/custom.css */

/* Mermaid diagram styling */
.mermaid {
  background-color: transparent;
  text-align: center;
  margin: 2rem 0;
}

/* Adjust size for mobile */
@media (max-width: 768px) {
  .mermaid svg {
    max-width: 100%;
    height: auto;
  }
}
```

Adiciona ao config:

```toml
# config.toml
[params]
  customcss = ["css/custom.css"]
```

---

## 🧪 **TESTAR AGORA**

```bash
# 1. Cria post de teste
hugo new posts/mermaid-test.md

# 2. Adiciona conteúdo (exemplo acima)

# 3. Run server
hugo server -D

# 4. Abre browser
# http://localhost:1313/posts/mermaid-test/
```

---

## 🎨 **EXEMPLO: AI Creative Process Diagram**

Aqui tens um exemplo **perfeito** para o teu site:

```markdown
---
title: "My AI Creative Workflow"
date: 2025-10-15
tags: ["ai-tools", "workflow", "process"]
---

## How I Use AI Tools

{{</* mermaid */>}}
graph TB
    A[💡 Project Idea] --> B{Need AI?}
    
    B -->|Images| C[🎨 MidJourney]
    B -->|Text| D[✍️ ChatGPT]
    B -->|Video| E[🎬 Runway]
    
    C --> F[Generate 50+ variations]
    D --> G[Get multiple drafts]
    E --> H[Create B-roll footage]
    
    F --> I[🧠 Human Curation]
    G --> I
    H --> I
    
    I --> J{Good enough?}
    
    J -->|No| K[Iterate prompt]
    K --> C
    K --> D
    K --> E
    
    J -->|Yes| L[🎨 Refine in Photoshop]
    L --> M[✅ Final Result]
    
    style A fill:#FFE4E1
    style M fill:#98FB98
    style I fill:#FFD700
{{</* /mermaid */>}}

This is my actual workflow for the Murder Mystery project!
```

---

## 📊 **MAIS EXEMPLOS ÚTEIS**

### **Tool Comparison:**

```markdown
{{</* mermaid */>}}
graph LR
    A[Need Character<br/>Portraits] --> B{Tool Options}
    
    B --> C[MidJourney<br/>⭐⭐⭐⭐⭐<br/>€30/mo]
    B --> D[DALL-E<br/>⭐⭐⭐<br/>€20/mo]
    B --> E[Leonardo<br/>⭐⭐<br/>Free]
    
    C -->|Chose| F[✓ Best Quality]
    
    style F fill:#90EE90
{{</* /mermaid */>}}
```

---

### **Project Timeline:**

```markdown
{{</* mermaid */>}}
gantt
    title Murder Mystery 1926 - Development
    dateFormat  YYYY-MM-DD
    section Design
    Character Design     :done, a1, 2025-10-01, 7d
    Typography           :done, a2, 2025-10-08, 5d
    Layout               :active, a3, 2025-10-13, 5d
    section Content
    AI Generation        :done, a4, 2025-10-01, 10d
    Writing              :done, a5, 2025-10-08, 7d
    section Production
    Test Print           :a6, 2025-10-18, 2d
    Final Assembly       :a7, 2025-10-20, 3d
{{</* /mermaid */>}}
```

---

### **AI vs Human Split:**

```markdown
{{</* mermaid */>}}
pie title AI vs Human Work (Murder Mystery)
    "AI Generation" : 40
    "Human Curation" : 25
    "Human Refinement" : 20
    "Manual Work" : 15
{{</* /mermaid */>}}
```

---

## 🐛 **SE NÃO FUNCIONAR**

### **Debug Checklist:**

```bash
# 1. Verifica se ficheiros existem:
ls layouts/shortcodes/mermaid.html

# 2. Verifica config:
grep -A 3 "markup" config.toml

# 3. Test no browser:
# F12 → Console → Check for errors

# 4. Rebuild sem cache:
hugo server --disableFastRender
```

---

### **Problema: "Diagram não aparece"**

**Fix 1:** Limpa browser cache (Ctrl+Shift+R)

**Fix 2:** Verifica se `unsafe = true` está no config

**Fix 3:** Testa com diagrama super simples:
```markdown
{{</* mermaid */>}}
graph TD
    A --> B
{{</* /mermaid */>}}
```

---

## 🎯 **QUICK TEST**

Copy-paste isto num post para testar rápido:

```markdown
---
title: "Mermaid Works!"
date: 2025-10-15
draft: false
---

# Testing 1-2-3

{{</* mermaid */>}}
graph LR
    A[It] --> B[Actually]
    B --> C[Works!]
    
    style C fill:#98FB98
{{</* /mermaid */>}}

If you see a green box saying "Works!", it's working! 🎉
```

---

## ✅ **RESUMO RÁPIDO**

```bash
# 3 comandos, 2 minutos:

# 1. Criar shortcode
mkdir -p layouts/shortcodes
cat > layouts/shortcodes/mermaid.html << 'EOF'
<div class="mermaid">
{{- .Inner | safeHTML }}
</div>
{{ if not (.Page.Scratch.Get "mermaid") }}
{{ .Page.Scratch.Set "mermaid" true }}
<script type="module">
import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
mermaid.initialize({ startOnLoad: true, theme: 'default' });
</script>
{{ end }}
EOF

# 2. Config (add unsafe=true manualmente)
# Edita config.toml!

# 3. Test
hugo server -D
```

**DONE!** 🚀

Testa e diz-me se funciona! Se não funcionar, manda-me o erro e debugamos juntos! 💪