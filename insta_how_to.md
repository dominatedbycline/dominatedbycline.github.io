Perfect! Here's the **COMPLETE GUIDE** for Cline to set up Instagram posting from your PC:

---

# 🎯 COMPLETE PROMPT FOR CLINE: Hugo Blog → Instagram Publishing (PC-Based)

## 📋 MISSION

Set up a workflow where you:
1. Write blog posts in Hugo (markdown)
2. Run a Python script **on your PC** that reads the post
3. Script auto-posts to Instagram with image + caption
4. Tracks what's been posted (no duplicates)

---

## 🔧 STEP-BY-STEP IMPLEMENTATION

---

### **PHASE 1: Instagram Business Account Setup**

Instagram Graph API requires an Instagram Business or Creator account, which must be connected to a Facebook Page.

#### **A. Convert to Instagram Business Account**

**On Mobile (Required - some settings only available on phone):**

1. **Open Instagram app**
2. **Go to Profile** → **Settings** (☰ menu)
3. **Account** → **Switch to Professional Account**
4. **Choose category** (e.g., "Blogger", "Tech", "Developer")
5. **Select "Business"** (or "Creator" - both work)

#### **B. Create/Link Facebook Page**

You must connect your Instagram Business Account to a Facebook Page:

1. **Go to Facebook** → https://facebook.com
2. **Create a Page:**
   - Click **"Pages"** (left sidebar)
   - **"Create new Page"**
   - Name: "Dominated by Cline" (or similar)
   - Category: "Personal Blog" or "Technology Company"
   - Click **Create**

3. **Link Instagram to Facebook Page:**
   - On **mobile Instagram**: Settings → Account → **Linked Accounts** → **Facebook**
   - Or on **Facebook Page**: Settings → Instagram → **Connect Account**
   - Login to your Instagram account
   - Select the Page to link

**Verify:** In Facebook Page settings, you should see Instagram connected

---

### **PHASE 2: Facebook Developer App Setup**

You need to create a Facebook app and add Instagram Graph API to get an access token.

#### **A. Create Facebook Developer Account**

1. Go to: https://developers.facebook.com
2. Click **"Get Started"**
3. **Create account** (uses your existing Facebook account)
4. **Accept Terms**

#### **B. Create App**

Create a Business-type app and add Instagram Graph API as a product:

1. **Go to:** https://developers.facebook.com/apps/
2. Click **"Create App"**
3. **Select app type:** **"Business"**
4. **Fill in details:**
   - App Name: `DominatedByClne_Blog` (or similar)
   - Contact Email: your email
   - (Optional) Business Account: Skip for now
5. Click **"Create App"**

#### **C. Add Instagram Product**

1. In your app dashboard, find **"Add Products"** section
2. Find **"Instagram Graph API"**
3. Click **"Set Up"**
4. Choose: **"API Setup with Facebook Login"** (easier)

#### **D. Configure App**

1. **Left sidebar** → **Settings** → **Basic**
2. Copy these (you'll need them):
   - **App ID**: `123456789...`
   - **App Secret**: Click **"Show"** → copy

3. **Add Platform:**
   - Scroll down → **"+ Add Platform"**
   - Select **"Website"**
   - Site URL: `http://localhost:3000` (for testing)

4. **Save Changes**

---

### **PHASE 3: Get Access Token & Instagram Account ID**

#### **A. Using Graph API Explorer**

Use the Graph API Explorer tool to generate an access token with the necessary permissions:

1. Go to: https://developers.facebook.com/tools/explorer/
2. **Select your app** (top dropdown)
3. **User or Page:** Select your Facebook Page
4. Click **"Generate Access Token"**
5. **Permissions needed:**
   - `instagram_basic`
   - `instagram_content_publish`
   - `pages_read_engagement`
   - `pages_show_list`
6. Click **"Generate Access Token"** → Login if prompted
7. **Copy the token** (long string starting with `EAAH...`)

⚠️ **This token expires in ~2 hours** - we'll make it long-lived next

#### **B. Get Instagram Account ID**

In Graph API Explorer:

1. Query: `me/accounts`
2. Click **Submit**
3. Find your Facebook Page in response
4. Copy the `id` value

Next query:

1. Replace `{PAGE_ID}` with the ID you just copied
2. Query: `{PAGE_ID}?fields=instagram_business_account`
3. Click **Submit**
4. Copy `instagram_business_account.id` value

**Save these:**
```
INSTAGRAM_ACCOUNT_ID = "17841405xxxxxx"
SHORT_LIVED_TOKEN = "EAAHgC..."
```

#### **C. Generate Long-Lived Token (90 days)**

Run this in your terminal (replace values):

```bash
curl -i -X GET "https://graph.facebook.com/v18.0/oauth/access_token?grant_type=fb_exchange_token&client_id=YOUR_APP_ID&client_secret=YOUR_APP_SECRET&fb_exchange_token=YOUR_SHORT_LIVED_TOKEN"
```

Response will include:
```json
{
  "access_token": "EAAHgC...",  ← Copy this!
  "expires_in": 5183999  ← ~60 days
}
```

**Save this token securely!**

---

### **PHASE 4: Project Structure**

Create this folder structure:

```
dominatedbycline.github.io/
├── content/
│   └── posts/
│       └── 2025-01-15-feature.md
├── static/
│   └── images/
│       └── posts/
│           └── 2025-01-15-feature.jpg
├── scripts/
│   ├── post_to_instagram.py       ← Main script
│   ├── instagram_config.py        ← Config/credentials
│   └── requirements.txt
├── .instagram_posted.json         ← Tracks posted articles
└── hugo.toml
```

---

### **PHASE 5: Python Scripts**

#### **A. Install Dependencies**

`scripts/requirements.txt`:
```
requests==2.31.0
python-frontmatter==1.0.0
Pillow==10.1.0
```

Install:
```bash
cd scripts
pip install -r requirements.txt
```

#### **B. Config File**

`scripts/instagram_config.py`:

```python
"""
Instagram API Configuration
Store your credentials here (DO NOT commit to GitHub!)
"""

# From Phase 3
INSTAGRAM_ACCOUNT_ID = "17841405xxxxxx"  # Your Instagram Business ID
ACCESS_TOKEN = "EAAHgC..."  # Your long-lived token

# Your blog URL
BLOG_URL = "https://dominatedbycline.github.io"

# Max hashtags (Instagram limit: 30)
MAX_HASHTAGS = 10
```

**⚠️ IMPORTANT:** Add to `.gitignore`:
```bash
echo "scripts/instagram_config.py" >> .gitignore
```

#### **C. Main Posting Script**

`scripts/post_to_instagram.py`:

Instagram Graph API requires a two-step process: first create a media container with the image URL, then publish it:

```python
#!/usr/bin/env python3
"""
Post Hugo blog articles to Instagram
Reads posts with instagram.post: true in front matter
"""

import os
import sys
import json
import requests
import frontmatter
from pathlib import Path
from datetime import datetime
from PIL import Image

# Import config
from instagram_config import (
    INSTAGRAM_ACCOUNT_ID,
    ACCESS_TOKEN,
    BLOG_URL,
    MAX_HASHTAGS
)

# Constants
GRAPH_API_URL = "https://graph.facebook.com/v18.0"
POSTED_TRACKER = ".instagram_posted.json"
CONTENT_DIR = "content/posts"
STATIC_DIR = "static"


def load_posted_tracker():
    """Load list of already-posted articles"""
    if Path(POSTED_TRACKER).exists():
        with open(POSTED_TRACKER, 'r') as f:
            return json.load(f)
    return {"posted": []}


def save_posted_tracker(data):
    """Save list of posted articles"""
    with open(POSTED_TRACKER, 'w') as f:
        json.dump(data, f, indent=2)


def get_pending_posts():
    """Find posts ready to post to Instagram"""
    posted_data = load_posted_tracker()
    posted_slugs = posted_data.get("posted", [])
    
    pending = []
    
    # Scan all markdown files in content/posts
    for md_file in Path(CONTENT_DIR).glob("*.md"):
        # Parse front matter
        with open(md_file, 'r', encoding='utf-8') as f:
            post = frontmatter.load(f)
        
        # Check if should post to Instagram
        instagram_config = post.get('instagram', {})
        
        if not instagram_config.get('post', False):
            continue  # Skip if instagram.post != true
        
        # Check if already posted
        slug = md_file.stem
        if slug in posted_slugs:
            print(f"⏭️  Already posted: {slug}")
            continue
        
        # Check if draft
        if post.get('draft', False):
            print(f"📝 Draft (skipping): {slug}")
            continue
        
        # Validate required fields
        image_path = instagram_config.get('image')
        if not image_path:
            print(f"⚠️  No image specified: {slug}")
            continue
        
        # Build full image path
        full_image_path = Path(STATIC_DIR) / image_path.lstrip('/')
        if not full_image_path.exists():
            print(f"❌ Image not found: {full_image_path}")
            continue
        
        # Build caption
        caption = instagram_config.get('caption', '')
        if not caption:
            # Generate default caption
            caption = f"{post.get('title', 'New Post')}\n\n"
            caption += f"{post.get('description', '')}\n\n"
            caption += f"Read more: {BLOG_URL}/posts/{slug}\n\n"
            
            # Add hashtags from tags
            tags = post.get('tags', [])
            hashtags = ' '.join([f"#{tag.replace(' ', '').lower()}" 
                                 for tag in tags[:MAX_HASHTAGS]])
            caption += hashtags
        
        pending.append({
            'slug': slug,
            'title': post.get('title'),
            'image': str(full_image_path),
            'caption': caption,
            'post_url': f"{BLOG_URL}/posts/{slug}"
        })
    
    return pending


def upload_to_temporary_host(image_path):
    """
    Upload image to a temporary hosting service
    Instagram Graph API requires publicly accessible URL
    
    Options:
    1. Upload to your GitHub repo (static/images/)
    2. Use imgbb.com API (free, no account needed)
    3. Use your own server
    
    For now, we'll use imgbb.com
    """
    
    # Option 1: If image already on GitHub Pages (best)
    # Extract path relative to static/
    rel_path = Path(image_path).relative_to(STATIC_DIR)
    public_url = f"{BLOG_URL}/{rel_path}"
    
    print(f"📸 Image URL: {public_url}")
    return public_url


def create_instagram_container(image_url, caption):
    """
    Step 1: Create media container
    """
    url = f"{GRAPH_API_URL}/{INSTAGRAM_ACCOUNT_ID}/media"
    
    params = {
        'image_url': image_url,
        'caption': caption,
        'access_token': ACCESS_TOKEN
    }
    
    response = requests.post(url, data=params)
    
    if response.status_code != 200:
        print(f"❌ Container creation failed: {response.text}")
        return None
    
    data = response.json()
    container_id = data.get('id')
    
    print(f"✅ Container created: {container_id}")
    return container_id


def publish_instagram_container(container_id):
    """
    Step 2: Publish the container
    """
    url = f"{GRAPH_API_URL}/{INSTAGRAM_ACCOUNT_ID}/media_publish"
    
    params = {
        'creation_id': container_id,
        'access_token': ACCESS_TOKEN
    }
    
    response = requests.post(url, data=params)
    
    if response.status_code != 200:
        print(f"❌ Publishing failed: {response.text}")
        return None
    
    data = response.json()
    media_id = data.get('id')
    
    print(f"✅ Published to Instagram: {media_id}")
    return media_id


def post_to_instagram(post_data):
    """
    Complete posting workflow
    """
    print(f"\n📮 Posting: {post_data['title']}")
    
    # Step 1: Get public image URL
    image_url = upload_to_temporary_host(post_data['image'])
    
    # Step 2: Create container
    container_id = create_instagram_container(
        image_url,
        post_data['caption']
    )
    
    if not container_id:
        return False
    
    # Wait a moment for processing
    import time
    time.sleep(2)
    
    # Step 3: Publish
    media_id = publish_instagram_container(container_id)
    
    return bool(media_id)


def main():
    print("🚀 Instagram Posting Script")
    print("=" * 50)
    
    # Find posts to publish
    pending = get_pending_posts()
    
    if not pending:
        print("\n✅ No posts to publish")
        return
    
    print(f"\n📝 Found {len(pending)} post(s) to publish:\n")
    for post in pending:
        print(f"  - {post['title']}")
    
    # Confirm
    confirm = input("\n⚠️  Proceed with posting? (yes/no): ")
    if confirm.lower() not in ['yes', 'y']:
        print("❌ Cancelled")
        return
    
    # Post each
    posted_data = load_posted_tracker()
    
    for post in pending:
        success = post_to_instagram(post)
        
        if success:
            # Mark as posted
            posted_data['posted'].append(post['slug'])
            save_posted_tracker(posted_data)
            print(f"✅ {post['title']} → Posted!")
        else:
            print(f"❌ {post['title']} → Failed")
    
    print("\n" + "=" * 50)
    print("✅ Done!")


if __name__ == "__main__":
    main()
```

---

### **PHASE 6: Usage Workflow**

#### **Create Blog Post with Instagram Config**

`content/posts/2025-01-15-new-feature.md`:

```markdown
---
title: "Added JWT Authentication"
date: 2025-01-15T10:00:00Z
draft: false
tags: ["authentication", "security", "webdev"]
description: "Implemented secure JWT authentication for our API"

# Instagram auto-posting
instagram:
  post: true
  image: "/images/posts/2025-01-15-jwt-auth.jpg"
  caption: |
    🔐 Just shipped JWT authentication!
    
    Implemented secure token-based auth for our API. 
    Users can now securely access protected endpoints.
    
    Read the full technical breakdown on my blog!
    
    #webdev #coding #authentication #jwt #developer #tech #api #security
---

## What I Built

Today I added JWT (JSON Web Token) authentication...

[rest of your blog post]
```

#### **Add Image**

```bash
# Save your screenshot/diagram as:
static/images/posts/2025-01-15-jwt-auth.jpg

# Image requirements:
# - Square ratio (1:1) or close (4:5, 1.91:1 acceptable)
# - Min 600x600px
# - Max 8MB
# - JPG or PNG
```

#### **Run the Script**

```bash
# From repo root
cd /path/to/dominatedbycline.github.io

# Run posting script
python scripts/post_to_instagram.py
```

**Output:**
```
🚀 Instagram Posting Script
==================================================

📝 Found 1 post(s) to publish:

  - Added JWT Authentication

⚠️  Proceed with posting? (yes/no): yes

📮 Posting: Added JWT Authentication
📸 Image URL: https://dominatedbycline.github.io/images/posts/2025-01-15-jwt-auth.jpg
✅ Container created: 18012345678901234
✅ Published to Instagram: 18087654321098765
✅ Added JWT Authentication → Posted!

==================================================
✅ Done!
```

#### **Commit & Push to Blog**

```bash
# Now push to GitHub (blog auto-deploys)
git add .
git commit -m "Add post: JWT authentication + Instagram"
git push origin main
```

**Result:**
- ✅ Blog post live at `dominatedbycline.github.io`
- ✅ Instagram post published
- ✅ Tracked in `.instagram_posted.json` (no duplicates)

---

### **PHASE 7: Helper Script (Optional)**

`scripts/prepare_post.sh`:

```bash
#!/bin/bash
# Helper: Create new post with Instagram template

DATE=$(date +%Y-%m-%d)
TITLE="$1"

if [ -z "$TITLE" ]; then
    echo "Usage: ./prepare_post.sh 'Post Title'"
    exit 1
fi

SLUG=$(echo "$TITLE" | tr '[:upper:]' '[:lower:]' | tr ' ' '-' | sed 's/[^a-z0-9-]//g')
FILE="content/posts/${DATE}-${SLUG}.md"

cat > "$FILE" << EOF
---
title: "$TITLE"
date: ${DATE}T$(date +%H:%M:%S)Z
draft: true
tags: []
description: ""

instagram:
  post: true
  image: "/images/posts/${DATE}-${SLUG}.jpg"
  caption: |
    [Emoji] $TITLE
    
    [Brief description]
    
    #webdev #coding #developer
---

## What I Did

[Content here...]
EOF

echo "✅ Created: $FILE"
echo "📸 Don't forget to add: static/images/posts/${DATE}-${SLUG}.jpg"
```

**Usage:**
```bash
chmod +x scripts/prepare_post.sh
./scripts/prepare_post.sh "Added User Dashboard"
```

---

## 🎯 COMPLETE WORKFLOW SUMMARY

```
1. Write code → Make changes

2. Ask Cline: "Create blog post + Instagram caption about this"
   → Cline generates markdown with instagram config

3. Add screenshot/image to static/images/posts/

4. Review post (edit if needed)

5. Set draft: false in front matter

6. Run: python scripts/post_to_instagram.py
   → Posts to Instagram immediately

7. git add . && git commit -m "Add post" && git push
   → Blog deploys to GitHub Pages

✅ Post now on blog AND Instagram!
```

---

## ⚠️ IMPORTANT NOTES

**Token Management:**
- Access tokens expire (long-lived = ~60 days)
- Set calendar reminder to refresh token monthly
- Store tokens in `instagram_config.py` (NOT in git!)

**Image Requirements:**
- Must be publicly accessible URL
- Instagram limits: 1:1 ratio, 600x600px min, 8MB max
- Your GitHub Pages images work perfectly!

**Rate Limits:**
- Instagram: ~25 posts/day
- Don't spam - quality over quantity

**Testing:**
- Test with `draft: true` posts first
- Check caption length (<2,200 chars)
- Verify hashtags work (max 30)

---

## 🔐 SECURITY CHECKLIST

- [ ] Add `instagram_config.py` to `.gitignore`
- [ ] Never commit access tokens to GitHub
- [ ] Use long-lived tokens (refresh every 60 days)
- [ ] Keep App Secret confidential
- [ ] Consider using environment variables for production

---

## 📚 REFERENCE DOCUMENTATION

- Instagram Graph API: https://developers.facebook.com/docs/instagram-api
- Content Publishing: https://developers.facebook.com/docs/instagram-api/guides/content-publishing
- Facebook Developer Console: https://developers.facebook.com/apps/

---
