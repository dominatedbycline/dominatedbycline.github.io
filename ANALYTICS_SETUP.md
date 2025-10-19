# Analytics Setup Guide

This site is ready for analytics. Choose one option below:

## Option 1: Plausible Analytics (Recommended)

**Why Plausible:**
- Privacy-friendly (GDPR compliant)
- No cookies needed
- Lightweight (< 1KB script)
- Simple, beautiful dashboard
- **Free for personal sites** (up to 10k pageviews/month)

**Setup:**

1. **Sign up:** https://plausible.io/
2. **Add your domain:** `dominatedbycline.github.io`
3. **Edit `hugo.toml`:**
   ```toml
   customJS = ["js/code-copy.js", "https://plausible.io/js/script.js"]
   ```
4. **Add script to header:**
   In `/layouts/partials/header.html`, add after line 16:
   ```html
   <!-- Plausible Analytics -->
   <script defer data-domain="dominatedbycline.github.io" src="https://plausible.io/js/script.js"></script>
   ```

**Done!** View stats at https://plausible.io/dominatedbycline.github.io

---

## Option 2: Google Analytics 4

**Why GA4:**
- Free forever
- More detailed data
- Integration with other Google tools

**Setup:**

1. **Create GA4 property:** https://analytics.google.com/
2. **Get your Measurement ID:** Looks like `G-XXXXXXXXXX`
3. **Edit `hugo.toml`:**
   ```toml
   googleAnalytics = "G-XXXXXXXXXX"
   ```
4. **Add to header:**
   Hugo has built-in GA4 support. Add to `/layouts/partials/header.html` before `</head>`:
   ```html
   {{- template "_internal/google_analytics.html" . -}}
   ```

**Done!** View stats at https://analytics.google.com/

---

## What to Track

**Key metrics:**
- Most popular posts
- Traffic sources (where people find you)
- Guide usage (which guides are most helpful)
- Time on page
- Bounce rate

**Guide-specific:**
- Track which sections people read
- See if people use search
- Monitor related posts clicks

---

## Privacy Best Practices

**If using Plausible:**
- ✅ Already GDPR compliant
- ✅ No cookie banner needed
- ✅ No personal data collected

**If using GA4:**
- Add privacy policy page
- Consider cookie consent banner
- Anonymize IPs (enabled by default in GA4)
- Add to privacy policy

---

## Current Status

🔄 **Not yet configured** - Choose an option above and set it up!

Once configured:
- You'll see pageviews, referrers, popular content
- Helps understand what content resonates
- Guides you on what to write next
