# OpenGraph Images Setup

OpenGraph (OG) images are the preview images that appear when you share your posts on social media (Twitter, LinkedIn, Facebook, etc).

## Current Status

✅ **Basic OG meta tags are already set up** in `layouts/partials/seo.html`

The site currently uses:
- Post title as OG title
- Post description as OG description
- Default fallback image (if no custom image set)

## How to Add Custom Images to Posts

### Option 1: Add image to post frontmatter

Edit your post's frontmatter:

```yaml
---
title: "Your Post Title"
date: 2024-10-19
image: "/images/your-post-og-image.png"
description: "Your post description"
---
```

Then place the image in `/static/images/your-post-og-image.png`

**Recommended size:** 1200x630px (Facebook/LinkedIn standard)

### Option 2: Auto-generate with tools

#### Free Tools:
1. **[Canva](https://canva.com)** - Template-based, easy
2. **[Figma](https://figma.com)** - More control, free tier
3. **[Excalidraw](https://excalidraw.com)** - Simple sketchy style

#### Automated Tools:
1. **[OG Image Playground](https://og-playground.vercel.app/)** - Generate from HTML/CSS
2. **[Cloudinary](https://cloudinary.com)** - Automated with text overlay
3. **[Bannerbear](https://www.bannerbear.com/)** - API-based generation

### Option 3: Hugo Automated Generation

For advanced users, you can set up automated OG image generation with Hugo:

**Tools:**
- [tcardgen](https://github.com/Ladicle/tcardgen) - Generate Twitter cards
- [hugo-og-image](https://github.com/caarlos0/hugo-og-image) - Automated generation

**Setup is complex** - only recommended if you post frequently.

## Quick Design Tips

### What Makes a Good OG Image:

✅ **DO:**
- Keep text large (72px+ headline)
- Use high contrast
- Include your site name/logo
- Keep it simple
- Test on mobile preview

❌ **DON'T:**
- Put important text near edges
- Use tiny fonts
- Over-complicate
- Forget to test

### Template Structure:

```
┌────────────────────────────────┐
│  Logo          dominatedbycline│ <- Top bar
├────────────────────────────────┤
│                                │
│    YOUR POST TITLE             │ <- Big & bold
│    IN 1-2 LINES                │
│                                │
│    Brief description here      │ <- Subtitle
│                                │
└────────────────────────────────┘
```

### Color Schemes:

Match your site:
- Background: `#f8f9fa` (light) or `#1a1a1a` (dark)
- Primary: `#f06292` (pink gradient)
- Text: `#000` (light mode) or `#fff` (dark mode)

## Testing Your OG Images

### Before Publishing:

1. **[Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)**
   - Shows exactly what Facebook sees
   - Can force refresh cache

2. **[Twitter Card Validator](https://cards-dev.twitter.com/validator)**
   - Preview how it looks on Twitter
   - Validate meta tags

3. **[LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)**
   - Check LinkedIn preview
   - Clear cache if needed

### Quick Test:
```bash
# Check if image is accessible
curl -I https://dominatedbycline.github.io/images/your-image.png
```

## Current Meta Tags

Located in `layouts/partials/seo.html`:

```html
<meta property="og:title" content="{{ .Title }} | {{ .Site.Title }}">
<meta property="og:description" content="{{ .Description }}">
<meta property="og:type" content="website">
<meta property="og:url" content="{{ .Permalink }}">
<meta property="og:image" content="{{ .Params.image | absURL }}">
<meta name="twitter:card" content="summary_large_image">
```

## Workflow

### For Each Important Post:

1. Write the post
2. Create OG image (1200x630px)
3. Save to `/static/images/`
4. Add to frontmatter:
   ```yaml
   image: "/images/post-name-og.png"
   ```
5. Build site: `hugo`
6. Test with Facebook Debugger
7. Deploy!

## Future Improvements

**If you want fully automated OG images:**
- Set up GitHub Action to generate on build
- Use Cloudinary API integration
- Hugo + tcardgen setup

**But honestly?**
For a personal blog posting 1-2x week, **manual Canva templates are faster** and look better.

## Resources

- [OG Image Best Practices](https://css-tricks.com/essential-meta-tags-social-media/)
- [Twitter Cards Guide](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
- [Facebook Sharing Best Practices](https://developers.facebook.com/docs/sharing/webmasters/)

---

**Questions?** Open an issue or leave a comment!
