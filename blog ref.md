================================================
FILE: README.md
================================================
# Hugo Profile | [Wiki Page](https://github.com/gurusabarish/hugo-profile/wiki)

[![Twitter](https://img.shields.io/twitter/url?label=Tweet&style=social&url=https%3A%2F%2Fgithub.com%2Fgurusabarish%2Fhugo-profile)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fgurusabarish%2Fhugo-profile) [![GitHub forks](https://img.shields.io/github/forks/gurusabarish/hugo-profile?style=plastic)](https://github.com/gurusabarish/hugo-profile/network) [![GitHub stars](https://img.shields.io/github/stars/gurusabarish/hugo-profile?style=plastic)](https://github.com/gurusabarish/hugo-profile/stargazers)

[![Netlify Status](https://api.netlify.com/api/v1/badges/5c1dcb34-cada-4c80-82b7-cfdbdbd7c774/deploy-status)](https://app.netlify.com/sites/hugo-profile/deploys)
![Latest Release](https://img.shields.io/github/v/release/gurusabarish/hugo-profile?include_prereleases)
![Last Commit](https://img.shields.io/github/last-commit/gurusabarish/hugo-profile)
![Open Issues](https://img.shields.io/github/issues/gurusabarish/hugo-profile?color=important)
![Open Pull Requests](https://img.shields.io/github/issues-pr/gurusabarish/hugo-profile?color=yellowgreen)
![License](https://img.shields.io/github/license/gurusabarish/hugo-profile)

A high performance and mobile first hugo template for personal portfolio and blog

- ### Example Site: [https://hugo-profile.netlify.app](https://hugo-profile.netlify.app)

# Features
- Fully Responsive
- Minimalist Design
- SEO Friendly.
- Light/Dark/auto
- Taxonomies
- [Color customization](https://github.com/gurusabarish/hugo-profile/wiki/Color-Customization)
- Analytics Support 
  - [Google Analytics](https://gohugo.io/templates/internal/#google-analytics)
- Comment Support
  - [Disqus](https://gohugo.io/content-management/comments/)
- Integration with [FormSpree](https://formspree.io/) for submitting "Contact me" form

Technology used: Bootstrap, fontawesome 

# Requirements
- Hugo Version 0.87.0 or higher


# How to use this template

- [Hugo theme](#Hugo-theme)
- [Direct deployment using netlify](#Direct-deployment-using-netlify)

[For more details](https://github.com/gurusabarish/hugo-profile/wiki)
## Hugo theme

- Install Hugo and create a site using `hugo new site my-site --format="yaml"`
- Clone this repo inside your themes folder
```
cd themes
git clone https://github.com/gurusabarish/hugo-profile.git
```
- Create config.yaml (you can use `config.toml` too) inside root folder 
- Setup the configurations in `config.yaml`. [reference](https://github.com/gurusabarish/hugo-profile/blob/master/exampleSite/config.yaml)
- You should have the mentioned (_inside the config file_) images in static folder to use them.

For more details: [Hugo's official docs](https://gohugo.io/getting-started/quick-start/), [content management](https://www.mikedane.com/static-site-generators/hugo/content-organization/)

## Direct deployment using netlify

- Fork this repo or create new repo using `use this template` button and connect repo to netlify.
- whenever you customize the files exampleSite folder, netlify will automatically deploy your changes.

For more details: [host on netlify](https://gohugo.io/hosting-and-deployment/hosting-on-netlify/), [content management](https://www.mikedane.com/static-site-generators/hugo/content-organization/)

# Deployment

Run `hugo`. It will generate a folder called public. You can use the files inside public folder for deployment. You should delete the public folder for each time when you are using `hugo` command.

# Issues

If you have a question, please [open an issue](https://github.com/gurusabarish/hugo-profile/issues) for help and to help those who come after you. The more information you can provide, the better!

# Contributing

Contributions, issues, and feature requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

# License

Licensed under [MIT](LICENSE)

# 🤝 Support

Give a ⭐️ or buy me a ~`coffee`~ tea if you like this project!

<a href="https://www.buymeacoffee.com/gurusabarish" target="_blank" rel="noopener"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="40" width="145" alt="Buy Me A Coffee"></a>



================================================
FILE: LICENSE
================================================
MIT License

Copyright (c) 2021 GURU SABARISH

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.



================================================
FILE: netlify.toml
================================================
[build]
publish = "exampleSite/public"
command = 'cd exampleSite && echo -e "\ngoogleAnalytics: $GOOGLE_ANALYTICS \ndisqusShortname: $DISQUS_SHORTNAME \n" >> config.yaml && hugo --gc --minify --themesDir ../..'

[context.production.environment]
HUGO_VERSION = "0.143.0"
HUGO_ENV = "production"
HUGO_ENABLEGITINFO = "true"
HUGO_THEME = "repo"

[context.split1]
command = "cd exampleSite && hugo --gc --minify --enableGitInfo --themesDir ../.."

[context.split1.environment]
HUGO_VERSION = "0.143.0"
HUGO_ENV = "production"
HUGO_THEME = "repo"

[context.deploy-preview]
command = "cd exampleSite && hugo --gc --minify --buildFuture --themesDir ../.. -b $DEPLOY_PRIME_URL"

[context.deploy-preview.environment]
HUGO_VERSION = "0.143.0"
HUGO_THEME = "repo"

[context.branch-deploy]
command = "cd exampleSite && hugo --gc --minify --themesDir ../.. -b $DEPLOY_PRIME_URL"

[context.branch-deploy.environment]
HUGO_VERSION = "0.143.0"

[context.next.environment]
HUGO_ENABLEGITINFO = "true"



================================================
FILE: theme.toml
================================================
name = "Hugo Profile"
license = "MIT"
licenselink = "https://github.com/gurusabarish/hugo-profile/blob/master/LICENSE"
description = "A high performance and mobile first hugo template for personal portfolio and blog."
homepage = "https://github.com/gurusabarish/hugo-profile"
demosite = "https://hugo-profile.netlify.app"
tags = ["Responsive","Blog", "Portfolio", "Personal"]
min_version = "0.68.0"

[author]
  name = "Gurusabarish"
  homepage = "https://www.linkedin.com/in/gurusabarish/"



================================================
FILE: archetypes/default.md
================================================
---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true
author:
tags:
image:
description:
toc:
---


================================================
FILE: exampleSite/hugo.yaml
================================================
baseURL: "https://hugo-profile.netlify.app"
languageCode: "en-us"
title: "Hugo Profile"
theme: hugo-profile

outputs:
  home:
    - "HTML"
    - "RSS"
    - "JSON"
  page:
    - "HTML"
    - "RSS"

enableRobotsTXT: true

#services:
  #googleAnalytics:
    #id: G-MEASUREMENT_ID
  #disqus:
    #shortname: your-disqus-shortname

pagination:
  pagerSize: 3

markup:
  goldmark:
    renderer:
      unsafe: true

Menus:
  main:
    - identifier: blog
      name: Blog
      title: Blog posts
      url: /blogs
      weight: 1
    - identifier: gallery
      name: Gallery
      title: Blog posts
      url: /gallery
      weight: 2
    #Dropdown menu
    # - identifier: dropdown
    #   title: Example dropdown menu
    #   name: Dropdown
    #   weight: 3
    # - identifier: dropdown1
    #   title: example dropdown 1
    #   name: example 1
    #   url: /#
    #   parent: dropdown
    #   weight: 1
    # - identifier: dropdown2
    #   title: example dropdown 2
    #   name: example 2
    #   url: /#
    #   parent: dropdown
    #   weight: 2

params:
  title: "Hugo Profile"
  description: Text about my cool site
  # staticPath: ""  # The path to serve the static files from
  favicon: "/fav.png"

  # Whether to serve bootstrap css and js files from CDN or not. Can be set to true, "css" or "js" to choose between
  # serving both, only the css, or only the js files through the CDN. Any other value will make so that CDN is not used.
  # Note the lack of "" in true, it should be of boolean type.
  useBootstrapCDN: false

  # If you want to load dynamically responsive images from Cloudinary
  # This requires your images to be uploaded + hosted on Cloudinary
  # Uncomment and change YOUR_CLOUD_NAME to the Cloud Name in your Cloudinary console
  # cloudinary_cloud_name: "YOUR_CLOUD_NAME"

  # Whether to add mathjax support on all pages. Alternatively, you can opt-in per page by adding `mathjax: true` in the frontmatter.
  mathjax: false

  # Whether the fade animations on the home page will be enabled
  animate: true

  theme:
    # disableThemeToggle: true
    # defaultTheme: "light" # dark

  font:
    fontSize: 1rem # default: 1rem
    fontWeight: 400 # default: 400
    lineHeight: 1.5 # default: 1.5
    textAlign: left # default: left

  # color preference
  # When using hex codes for colors, quotations must be used along with the # sign
  # color:
  #   textColor: "#343a40"
  #   secondaryTextColor: "#6c757d"
  #   textLinkColor: "#007bff"
  #   backgroundColor: "#eaedf0"
  #   secondaryBackgroundColor: "#64ffda1a"
  #   primaryColor: "#007bff"
  #   secondaryColor: "#f8f9fa"

  #   darkmode:
  #     textColor: "#e4e6eb"
  #     secondaryTextColor: "#b0b3b8"
  #     textLinkColor: "#ffffff"
  #     backgroundColor: "#18191a"
  #     secondaryBackgroundColor: "#212529"
  #     primaryColor: "#ffffff"
  #     secondaryColor: "#212529"

  # If you want to customize the menu, you can change it here
  navbar:
    align: ms-auto # Left: ms-auto | center: mx-auto | right: me-auto | Default: ms-auto
    # brandLogo: "/logo.png" # Logo for the brand | default is the favicon variable
    # showBrandLogo: false # Show brand logo in nav bar | default is true
    brandName: "Hugo Profile" # Brand name for the brand | default is the title variable
    disableSearch: false
    # searchPlaceholder: "Search"
    stickyNavBar:
      enable : true
      showOnScrollUp : true
    enableSeparator: false
    menus:
      disableAbout: false
      disableExperience: false
      disableEducation: false
      disableProjects: false
      disableAchievements: false
      disableContact: false

  # Hero
  hero:
    enable: true
    intro: "Hi, my name is"
    title: "Isabella."
    subtitle: "I build things for the web"
    content: "A passionate web app developer. I tend to make use of modern web technologies to build websites that look great, feel fantastic, and function correctly."
    image: /images/hero.svg
    bottomImage:
      enable: true
    # roundImage: true # Make hero image circular | default false
    button:
      enable: true
      name: "Resume"
      url: "#"
      download: true
      newPage: false
    socialLinks:
      fontAwesomeIcons:
        - icon: fab fa-github
          url: https://example.com
        - icon: fab fa-x-twitter
          url: https://example.com
      customIcons:
        - icon: /fav.png
          url: "https://example.com"

  # About
  about:
    enable: true
    title: "About Me"
    image: "/images/me.png"
    content: |-
      I am a software developer with a passion for web development. I have a background in computer science and mathematics, and I have a strong interest in the intersection of technology and art. I am currently working as a software developer at [example org.](https://example.com) in San Francisco, CA.

      I am currently working on a project that will be used to help people find the best way to get around the city.
    skills:
      enable: true
      title: "Here are a few technologies I've been working with recently:"
      items:
        - "HTML"
        - "CSS"
        - "JavaScript"
        - "React"
        - "Node"
        - "Express"

  # Experience
  experience:
    enable: true
    # title: "Custom Name"
    items:
      - company: "Facebook"
        companyUrl: "https://example.com"
        jobs:
          - name: "Senior Software Developer"
            date: "Jan 2023 - present"
            content: "I am currently working as a senior software developer at [example org.](https://example.com) in San Francisco, CA. I am currently working on a project that will be used to help people find the best way to get around the city."
            info:
              content: Working as a senior software developer
            featuredItems:
              fontAwesomeIcons:
                - icon: fa-brands fa-react
                  url: https://react.dev/
                  tooltip: Example tooltip content
                - icon: fab fa-x-twitter
                  url: https://example.com
                  # tooltip: Example tooltip content
              customIcons:
                - icon: /fav.png
                  url: "https://example.com"
                  tooltip: Example tooltip content
          - name: "Software Developer"
            date: "Jan 2022 - Dec 2023"
            content: "I worked as a software developer. I worked on a project that will be used to help people find the best way to get around the city."

      - company: "Amazon"
        companyUrl: "https://example.com"
        jobs:
          - name: "Software Developer"
            date: "Sep 2020 - Dec 2021"
            info:
              content: I worked as a software developer for more than one year in Amazon.
            content: |
              I am currently working as a software developer at [example org.](https://example.com) in San Francisco, CA. I am currently working on a project that will be used to help people find the best way to get around the city.

              - Lead backend developer for a product.
              - Created a frontend design for a product.

      - company: "Apple"
        companyUrl: "https://example.com"
        jobs: 
        - name: "Junior Software Developer"
          date: "Jan 2020 - Aug 2020"
          featuredItems:
            fontAwesomeIcons:
              - icon: fa-brands fa-react
                url: https://react.dev/
              - icon: fab fa-x-twitter
                url: https://example.com
            customIcons:
              - icon: /fav.png
                url: "https://example.com"
          content: |
            I am currently working as a software developer at [example org.](https://example.com) in San Francisco, CA. I am currently working on a project that will be used to help people find the best way to get around the city.

            - Lead backend developer for a product.
            - Created a frontend design for a product.

      - company: "Netflix"
        companyUrl: "https://example.com"
        jobs:
        - name: "UI/UX Designer"
          date: "June 2017 - Nov 2019"
          content: |
            I am currently working as a software developer at [example org.](https://example.com) in San Francisco, CA. I am currently working on a project that will be used to help people find the best way to get around the city.

            - Lead backend developer for a product.
            - Created a frontend design for a product.

      - company: "Google"
        companyUrl: "https://example.com"
        jobs:
        - name: "Product Designer"
          date: "Feb 2016 - Mar 2017"
          content: "I am currently working as a software developer at [example org.](https://example.com) in San Francisco, CA. I am currently working on a project that will be used to help people find the best way to get around the city."

  # Education
  education:
    enable: true
    # title: "Custom Name"
    index: false
    items:
      - title: "Master of Business Administration"
        school:
          name: "University of California, Berkeley"
          url: "https://example.org"
        date: "2013 - 2015"
        GPA: "3.8 out of 5.0"
        content: |-
          Extracurricular Activities
            - Lorem ipsum dolor sit amet consectetur adipisicing elit.
            - Tempora esse, eaque delectus nulla quo doloribus itaque expedita alias natus optio totam maxime nihil excepturi velit a animi laborum hic similique.
      - title: "Bachelor of Science in Computer Science"
        school:
          name: "Massachusetts Institute of Technology"
          url: "https://example.org"
        date: "2009 - 2013"
        GPA: "3.9 out of 5.0"
        content: |-
          I Publiced two papers in the ACM SIGCHI Conference on Artificial Intelligence.
          - [Fast and Accurate Object Detection with a Single Convolutional Neural Network](https://example.com)
          - Face mask detection using a single convolutional neural network.

          Extracurricular Activities
            - Lorem ipsum dolor sit amet consectetur adipisicing elit.
            - Tempora esse, eaque delectus nulla quo doloribus itaque expedita alias natus optio totam maxime nihil excepturi velit a animi laborum hic similique.
        featuredLink:
          enable: true
          name: "My academic record"
          url: "https://example.com"
      - title: "High School"
        school:
          name: "Thomas Jefferson High School for Science and Technology."
          url: "https://example.org"
        GPA: "4.2 out of 5.0"
        featuredLink:
          enable: true
          url: "https://example.com"

  # Achievements
  achievements:
    enable: true
    # title: "Custom Name"
    items:
      - title: Google kickstart runner
        content: I solved all problems with optimal solution.
        url: https://example.com
        image: /images/achievement.jpg
      - title: Facebook Hackathon Winner
        content: Developed a product using Artificial Intelligence.
        image: /images/achievement.jpg
      - title: Hugo Profile
        content: Developed a theme and getting 1K+ downloads per month.
        url: "https://github.com/gurusabarish/hugo-profile"
        image: /images/achievement.jpg
      - title: Microsoft Imagine Runner
        content: We are developed a product which can help others.
      - title: Google Summer of Code
        content: Contributed to a open source project.
        url: https://example.com

  # projects
  projects:
    enable: true
    # title: "Custom Name"
    items:
      - title: Hugo Profile
        content: A highly customizable and mobile first Hugo template for personal portfolio and blog.
        image: /images/projects/profile.png
        featured:
          name: Demo
          link: https://hugo-profile.netlify.app
        badges:
          - "Hugo"
          - "Bootstrap"
          - "Javascript"
        links:
          - icon: fa fa-envelope
            url: mailto:?subject=Hugo%20Profile%20Template&body=Check%20it%20out:%20https%3a%2f%2fhugo-profile.netlify.app%2fblog%2fmarkdown-syntax%2f
          - icon: fab fa-github
            url: https://github.com/gurusabarish/hugo-profile
          - icon: fab fa-twitter
            url: https://twitter.com/intent/tweet?text=Check+it+out:&url=https%3A%2F%2Fgithub.com%2Fgurusabarish%2Fhugo-profile

      - title: Image Converter
        content: A web app to convert image to pdf, png to jpg, png to jpg and png to webp without database using django.
        image: /images/projects/converter.jpg
        featured:
          name: Demo
          link: https://django-converter.herokuapp.com
        badges:
          - "Django"
          - "Bootstrap"
        links:
          - icon: fab fa-github
            url: https://github.com/gurusabarish/converter

      - title: Hugo Profile V2
        content: A clean and simple Hugo template for personal portfolio and blog.
        image: /images/projects/profile2.jpg
        featured:
          name: Demo V2
          link: https://hugo-profile-2.netlify.app
        badges:
          - "Hugo"
          - "Bootstrap"
          - "Javascript"
        links:
          - icon: fab fa-github
            url: https://github.com/gurusabarish/HugoProfileV2

  #Contact
  contact:
    enable: true
    # title: "Custom Name"
    content: My inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
    btnName: Mail me
    btnLink: mailto:gurusabarisha@gmail.com
    # formspree:
    #   enable: true # `contact.email` value will be ignored
    #   formId: abcdefgh # Take it from your form's endpoint, like 'https://formspree.io/f/abcdefgh'
    #   emailCaption: "Enter your email address"
    #   messageCaption: "Enter your message here"
    #   messageRows: 5

  footer:
    recentPosts:
      path: "blogs"
      count: 3
      title: Recent Posts
      enable: true
      disableFeaturedImage: false
    socialNetworks:
      github: https://github.com
      linkedin: https://linkedin.com
      twitter: https://twitter.com
      instagram: https://instagram.com
      facebook: https://facebook.com

  # List pages like blogs and posts
  listPages:
    disableFeaturedImage: false

  # Single pages like blog and post
  singlePages:
    socialShare: true
    readTime:
      enable: true
      content: "min read"
    scrollprogress:
      enable: true
    tags:
      openInNewTab: true

  # For translations
  terms:
    read: "Read"
    toc: "Table Of Contents"
    copyright: "All rights reserved"
    pageNotFound: "Page not found"
    emailText: "Check out this site"

  datesFormat:
    article: "Jan 2, 2006"
    articleList: "Jan 2, 2006"
    articleRecent: "Jan 2, 2006"

  #customScripts: -| # You can add custom scripts which will be added before </body> tag
  #  <script type="text/javascript"><!-- any script here --></script>



================================================
FILE: exampleSite/content/gallery.md
================================================
---
title: "Image Gallery"
date: 2022-06-25T18:35:46+05:30
draft: false
description: "My gallery :earth_asia:"
layout: "gallery"
galleryImages:
 - src: https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111-1500x1000.jpg
 - src: https://img.etimg.com/thumb/msid-68721417,width-650,imgsize-1016106,,resizemode-4,quality-100/nature1_gettyimages.jpg
 - src: https://thumbs.dreamstime.com/b/team-ants-council-collective-decision-work-17037482.jpg
 - src: https://thumbs.dreamstime.com/b/summer-day-smiling-women-relax-wearing-red-dress-fashion-standing-wooden-bridge-over-sea-blue-sky-background-summer-107411998.jpg
 - src: https://thumbs.dreamstime.com/b/young-woman-playing-dog-pet-beach-sunrise-sunset-girl-dog-having-fun-seasid-seaside-cute-neglected-stay-66480218.jpg
 - src: https://thumbs.dreamstime.com/b/funny-picture-taken-sunrise-frozen-lake-perspective-rider-retro-bicycle-sunrise-personal-211066044.jpg 
viewer : true
viewerOptions : {
    title: false
    # you can add more options here. refer https://github.com/fengyuanchen/viewerjs?tab=readme-ov-file#options
}
---



================================================
FILE: exampleSite/content/blogs/emoji-support.md
================================================
---
title: "Emoji Support"
date: 2021-04-03T22:53:58+05:30
draft: false
github_link: "https://github.com/gurusabarish/hugo-profile"
author: "Gurusabarish"
tags:
  - Emoji support
  - Sample
  - example
image: /images/post.jpg
description: ""
toc: 
---

Emoji can be enabled in a Hugo project in a number of ways. :zap:

## Emoji Support

The [emojify](https://gohugo.io/functions/emojify/) function can be called directly in templates or [Inline Shortcodes](https://gohugo.io/templates/shortcode-templates/#inline-shortcodes).

To enable emoji globally, set ```enableEmoji``` to ```true``` in your site’s [configuration](https://gohugo.io/getting-started/configuration/) and then you can type emoji shorthand codes directly in content files; e.g.

The [Emoji cheat sheet](http://www.emoji-cheat-sheet.com/) is a useful reference for emoji shorthand codes.

<hr>

**N.B.** The above steps enable Unicode Standard emoji characters and sequences in Hugo, however the rendering of these glyphs depends on the browser and the platform. To style the emoji you can either use a third party emoji font or a font stack; e.g.

```
.emoji {
  font-family: Apple Color Emoji, Segoe UI Emoji, NotoColorEmoji, Segoe UI Symbol, Android Emoji, EmojiSymbols;
}
```


================================================
FILE: exampleSite/content/blogs/markdown-syntax.md
================================================
---
title: "Markdown Syntax"
date: 2021-04-03T23:29:21+05:30
draft: false
github_link: "https://github.com/gurusabarish/hugo-profile"
author: "Gurusabarish"
tags:
  - Markdown syntax
  - Sample
  - example
image: /images/post.jpg
description: ""
toc:
---

## Paragraph

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

## Blockquotes

The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a `footer` or `cite` element, and optionally with in-line changes such as annotations and abbreviations.

### Blockquote without attribution

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.
> **Note** that you can use _Markdown syntax_ within a blockquote.

### Blockquote with attribution

> Don't communicate by sharing memory, share memory by communicating.</p>
> — <cite>Rob Pike[^1]</cite>

[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.

## Tables

Tables aren't part of the core Markdown spec, but Hugo supports supports them out-of-the-box.

| Name  | Age |
| ----- | --- |
| Bob   | 27  |
| Alice | 23  |

### Inline Markdown within tables

| Inline&nbsp;&nbsp;&nbsp; | Markdown&nbsp;&nbsp;&nbsp; | In&nbsp;&nbsp;&nbsp;                | Table  |
| ------------------------ | -------------------------- | ----------------------------------- | ------ |
| _italics_                | **bold**                   | ~~strikethrough~~&nbsp;&nbsp;&nbsp; | `code` |

## Code Blocks

### Code block with backticks

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```

### Code block indented with four spaces

    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Example HTML5 Document</title>
    </head>
    <body>
      <p>Test</p>
    </body>
    </html>

### Code block with Hugo's internal highlight shortcode

{{< highlight html >}}

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Example HTML5 Document</title>
</head>
<body>
  <p>Test</p>
</body>
</html>
{{< /highlight >}}

## List Types

### Ordered List

1. First item
2. Second item
3. Third item

### Unordered List

- List item
- Another item
- And another item

### Nested list

- Item
  1. First Sub-item
  2. Second Sub-item

## Headings

The following HTML `<h1>`—`<h6>` elements represent six levels of section headings. `<h1>` is the highest section level while `<h6>` is the lowest.

# H1

## H2

### H3

#### H4

##### H5

###### H6

## Other Elements — abbr, sub, sup, kbd, mark

<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.



================================================
FILE: exampleSite/content/blogs/math.md
================================================
---
title: "Render Math With Mathjax"
date: 2022-12-09T19:53:33+05:30
draft: false
author: "Gurusabarish"
tags:
  - Markdown syntax
  - Mathjax
  - example
image: /images/mathjax.png
description: ""
toc: true
mathjax: true
---

## Mathjax

Math equations can be rendered using [Mathjax](https://www.mathjax.org) syntax with AMS symbol support.

Optionally enable this on a per-page basis by adding `mathjax: true` to your frontmatter.

Then, use `$$ ... $$` on a line by itself to render a block equation:

$$ | Pr_{x \leftarrow P_{1}} [A(x) = 1] - Pr_{x \leftarrow P_{2}} [A(x) = 1] | < \text{negligible} $$

The raw version is:

```
$$ | Pr_{x \leftarrow P_{1}} [A(x) = 1] - Pr_{x \leftarrow P_{2}} [A(x) = 1] | < \text{negligible} $$
```


Write in-line equations with `\\( ... \\)` , like \\( x^n / y \\) . It's easy!

```
Write in-line equations with `\\( ... \\)` , like \\( x^n / y \\) . It's easy!
```




================================================
FILE: exampleSite/content/blogs/placeholder-text.md
================================================
---
title: "Placeholder Text"
date: 2021-04-03T22:41:10+05:30
draft: false
github_link: "https://github.com/gurusabarish/hugo-profile"
author: "Gurusabarish"
tags:
  - Placeholder text
  - Sample
  - example
image: /images/post.jpg
description: ""
toc: 
---

Lorem est tota propiore conpellat pectoribus de pectora summo.

Redit teque digerit hominumque toris verebor lumina non cervice subde tollit usus habet Arctonque, furores quas nec ferunt. Quoque montibus nunc caluere tempus inhospita parcite confusaque translucet patri vestro qui optatis lumine cognoscere flos nubis! Fronde ipsamque patulos Dryopen deorum.

  1. Exierant elisi ambit vivere dedere
  2. Duce pollice
  3. Eris modo
  4. Spargitque ferrea quos palude

Rursus nulli murmur; hastile inridet ut ab gravi sententia! Nomine potitus silentia flumen, sustinet placuit petis in dilapsa erat sunt. Atria tractus malis.

  1. Comas hunc haec pietate fetum procerum dixit
  2. Post torum vates letum Tiresia
  3. Flumen querellas
  4. Arcanaque montibus omnes
  5. Quidem et

# Vagus elidunt

[The Van de Graaf Canon](https://en.wikipedia.org/wiki/Canons_of_page_construction#Van_de_Graaf_canon)

## Mane refeci capiebant unda mulcebat
Victa caducifer, malo vulnere contra dicere aurato, ludit regale, voca! Retorsit colit est profanae esse virescere furit nec; iaculi matertera et visa est, viribus. Divesque creatis, tecta novat collumque vulnus est, parvas. Faces illo pepulere tempus adest. Tendit flamma, ab opes virum sustinet, sidus sequendo urbis.

Iubar proles corpore raptos vero auctor imperium; sed et huic: manus caeli Lelegas tu lux. Verbis obstitit intus oblectamina fixis linguisque ausus sperare Echionides cornuaque tenent clausit possit. Omnia putatur. Praeteritae refert ausus; ferebant e primus lora nutat, vici quae mea ipse. Et iter nil spectatae vulnus haerentia iuste et exercebat, sui et.

Eurytus Hector, materna ipsumque ut Politen, nec, nate, ignari, vernum cohaesit sequitur. Vel mitis temploque vocatus, inque alis, oculos nomen non silvis corpore coniunx ne displicet illa. Crescunt non unus, vidit visa quantum inmiti flumina mortis facto sic: undique a alios vincula sunt iactata abdita! Suspenderat ego fuit tendit: luna, ante urbem Propoetides parte.


================================================
FILE: exampleSite/content/blogs/rich-content.md
================================================
---
title: "Rich Content"
date: 2021-04-03T19:53:33+05:30
draft: false
author: "Gurusabarish"
tags:
  - Rich content
  - Sample
  - example
image: /images/post.jpg
description: ""
toc: 
---

Hugo ships with several [Embedded Shortcodes](https://gohugo.io/content-management/shortcodes/#embedded) for rich content, along with a [Privacy Config](https://gohugo.io/about/privacy/#configuration) and a set of Simple Shortcodes that enable static and no-JS versions of various social media embeds.

## X Simple Shortcode
```
{{</* x user="GoHugoIO" id="1315233626070503424" */>}}
```
<br>
{{< x user="GoHugoIO" id="1315233626070503424" >}}
<br>



## Vimeo Simple Shortcode
```
{{</* vimeo 146022717 */>}}
```
<br>
{{< vimeo 146022717 >}}
<br>



## Youtube Simple Shortcode
```
{{</* youtube w7Ft2ymGmfc */>}}
```
<br>
{{< youtube w7Ft2ymGmfc >}}
<br>

## Theme Custom Shortcodes

These shortcodes are not Hugo built-ins, but are provided by the theme.

### Responsive Images with Cloudinary

You can learn more about this [here](https://cloudinary.com/documentation/responsive_images).

Set the `cloudinary_cloud_name` parameter in your site config to use this shortcode.

```
{{</* dynamic-img src="/my/image/on/cloudinary" title="A title for the image" */>}}
```

Note that you do not include the file extension (e.g. `.png`) in the `src` parameter, as the shortcode will automatically determine the best quality and format for the user's device.

Optionally, you can customize the general CSS styles for the image:

```
{{</* dynamic-img src="/my/image/on/cloudinary" title="A title for the image" style="max-width:60%" */>}}
```



================================================
FILE: layouts/404.html
================================================
{{ define "head" }}
<meta name="description" content={{ .Site.Params.description }}>
{{ end }}

{{ define "title" }}
{{ .Site.Title }} | {{ .Site.Params.terms.pageNotFound | default "404 page not found" }}
{{ end }}

{{ define "main" }}
<div class="container py-5 text-center">
    <img src="{{ .Site.Params.staticPath }}/404.png" alt='{{ .Site.Params.terms.pageNotFound | default "404 page not found" }}' class="img-fluid" width="40%">
    <h1>{{ .Site.Params.terms.pageNotFound | default "404 page not found" }}</h1>
</div>
{{ end }}


================================================
FILE: layouts/index.html
================================================
{{ define "head" }}
<meta name="description" content={{ .Site.Params.description }}>
<link rel="stylesheet" href="{{ .Site.Params.staticPath }}/css/index.css" media="all">
<link rel="stylesheet" href="{{ .Site.Params.staticPath }}/css/projects.css" media="all">

<!-- fontawesome -->
<script defer src="{{ .Site.Params.staticPath }}/fontawesome-6/all-6.4.2.js"></script>
{{ end }}

{{ define "title" }}
{{ .Site.Title }}
{{ end }}

{{ define "main" }}
{{- partial "sections/hero/index.html" . -}}
{{- partial "sections/about.html" . -}}
{{- partial "sections/experience.html" . -}}
{{- partial "sections/education.html" . -}}
{{- partial "sections/projects.html" . -}}
{{- partial "sections/achievements.html" . -}}
{{- partial "sections/contact.html" . -}}
{{ end }}


================================================
FILE: layouts/_default/about.html
================================================
{{ define "head" }}
<meta name="description" content="{{ .Params.description }}">
<link rel="stylesheet" href="{{.Site.Params.staticPath}}/css/about.css">

<!-- fontawesome -->
<script defer src="{{.Site.Params.staticPath}}/fontawesome-6/all-6.4.2.js"></script>
{{ end }}

{{ define "title" }}
{{.Title }} | {{ .Site.Title }}
{{ end }}

{{ define "main" }}
<section id="single">
    <div class="container">
        <div class="title mb-3">
            <h1 class="text-center mb-4">{{ .Title }}</h1>
        </div>
        <div class="row justify-content-center">
            {{ if .Params.image }}
            <div class="col-sm-12 col-md-12 col-lg-3 px-3">
                <div class="sticky-sidebar">
                    <aside class="aboutImg">
                        <div class="text-center">
                            <img src="{{ .Params.image }}" class="mx-auto rounded" alt="">
                        </div>
                        <h2 class="text-center pt-3">
                            {{ .Params.name }}
                        </h2>
                        <div class="aboutImg-content">
                            <ul class="list-inline pt-3 text-center">
                                {{ range .Params.socialLinks.fontAwesomeIcons }}
                                <li class="list-inline-item text-center">
                                    <a href="{{ .url }}" target="_blank">
                                        <i class="{{ .icon }}"></i>
                                    </a>
                                </li>
                                {{ end }}

                                {{ range .Params.socialLinks.customIcons }}
                                <li class="list-inline-item text-center">
                                    <a href="{{ .url }}" target="_blank" class="img-icon">
                                        <img src="{{ .icon }}">
                                    </a>
                                </li>
                                {{ end }}
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
            {{ end }}

            <div class="col-sm-12 col-md-12 col-lg-6 pt-4 p-2">
                <div class="pr-lg-4">
                    <article class="page-content p-2">
                        {{ .Content | emojify }}
                    </article>
                </div>
            </div>
        </div>
    </div>
    <button class="p-2 px-3" onclick="topFunction()" id="topScroll">
        <i class="fas fa-angle-up"></i>
    </button>
</section>

<script>
    var topScroll = document.getElementById("topScroll");
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            topScroll.style.display = "block";
        } else {
            topScroll.style.display = "none";
        }
    }

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
</script>

{{ end }}


================================================
FILE: layouts/_default/baseof.html
================================================
<!DOCTYPE html>
<html lang="{{ .Site.Language.Lang }}">

<head>
  {{- partial "head.html" . -}}
  {{- block "head" . }} {{- end }}

  <!-- Custom Styles -->
  {{ if .Site.Params.customCSS }}
    <link rel="stylesheet" href="{{ .Site.Params.staticPath }}/style.css">
  {{ end }}

  <title>
    {{- block "title" . }} {{- end }}
  </title>
</head>

<body class="light">
  <!-- javascripts -->
  <!-- <script src="/js/jquery-3.6.0.min.js"></script> -->

  {{- partial "sections/header.html" . -}}
  <div id="content">
    {{- block "main" . }}{{- end }}
  </div>
  {{- partial "sections/footer/index.html" . -}}

  {{- if (or (eq .Site.Params.UseBootstrapCDN true) (eq .Site.Params.UseBootstrapCDN "js")) -}}
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
  {{- else -}}
  <script src="{{ .Site.Params.staticPath }}/bootstrap-5/js/bootstrap.bundle.min.js"></script>
  {{- end -}}

  {{- partial "scripts.html" . -}}

  <!-- for search -->
  <section id="search-content" class="py-2">
    <div class="container" id="search-results"></div>
  </section>
</body>

</html>



================================================
FILE: layouts/_default/gallery.html
================================================
{{ define "head" }}
<meta name="description" content="{{ .Title }} of {{ .Site.Title }}">
<!-- <link rel="stylesheet" href="{{ .Site.Params.staticPath }}/css/list.css" media="all"> -->
{{ if .Params.viewer | default true }}
<link rel="stylesheet" href="{{ .Site.Params.staticPath }}/css/gallery.css">
<link rel="stylesheet" href="{{ .Site.Params.staticPath }}/viewer/viewer.min.css">
<script src="{{ .Site.Params.staticPath }}/viewer/viewer.min.js"></script>
{{ end }}

{{ end }}

{{ define "title" }}
{{.Title }} | {{ .Site.Title }}
{{ end }}

{{ define "main" }}
<div class="container pt-5" id="list-page">
    <h2 class="text-center pb-2">{{.Title}}</h2>
    <h6 class="text-center">{{ .Params.description | emojify }}</h6>
    <div class="row p-4">
        {{ .Content | emojify }}
    </div>
    <div class="card-group p-4">
        <div class="row justify-content-center">
            {{ range .Params.galleryImages }}
            <div class="col-md-4 p-0 m-0">
                <div class="card p-0 m-0 border-0">
                    <img class="w-100 {{if .Params.viewer | default true}}viewer-enabled-image{{end}}" height="280px" src="{{ .src }}">
                </div>
            </div>
            {{ end }}
        </div>
    </div>
</div>

{{ if .Params.viewer | default true }}
<script>
    document.addEventListener('DOMContentLoaded', function() {
        var viewer = new Viewer(document.getElementById('list-page'), {
            ...{{ .Params.viewerOptions }}
        });
    });
</script>
{{ end }}

{{ end }}


================================================
FILE: layouts/_default/index.json
================================================
{{- $.Scratch.Add "index" slice -}}
{{- range .Site.RegularPages -}}
    {{- $.Scratch.Add "index" (dict "title" .Title "description" .Params.description "content" .Content "image" .Params.image "permalink" .Permalink) -}}
{{- end -}}
{{- $.Scratch.Get "index" | jsonify -}}


================================================
FILE: layouts/_default/list.html
================================================
{{ define "head" }}
<meta name="description" content="{{ .Title }} of {{ .Site.Title }}">
<link rel="stylesheet" href="{{ .Site.Params.staticPath }}/css/list.css" media="all">
{{ end }}

{{ define "title" }}
{{.Title }} | {{ .Site.Title }}
{{ end }}

{{ define "main" }}
<div class="container pt-5" id="list-page">
    <h2 class="text-center pb-2">{{.Title}}</h2>
    <div class="row">
        {{ range .Paginator.Pages }}
        <div class="col-lg-4 col-md-6 my-3">
            <div class="card-columns">
                <div class="card h-100">
                    {{ if and (not (.Site.Params.listPages.disableFeaturedImage | default false)) (.Params.image) }}
                    <div class="card-header">
                        <a href="{{ .RelPermalink }}">
                            <img src="{{ .Params.image }}" class="card-img-top" alt="{{ .Title }}">
                        </a>
                    </div>
                    {{ end }}
                    <div class="card-body bg-transparent p-4 shadow-sm">
                        <a href="{{ .RelPermalink }}" class="primary-font card-title">
                            <h5 class="card-title bg-transparent" title="{{ .Title }}">{{ .Title | truncate 25 }}</h5>
                        </a>
                        <div class="card-text secondary-font">
                            <p>{{ .Summary | truncate 300}}</p>
                        </div>
                    </div>
                    <div class="mt-auto post-footer bg-transparent py-3">
                        <span class="float-start bg-transparent">{{ .Date.Format (.Site.Params.datesFormat.articleList | default "January 2, 2006") }}</span>
                        <a href="{{ .RelPermalink }}" class="float-end btn btn-outline-info btn-sm">{{ .Site.Params.terms.read | default "Read" }}</a>
                    </div>
                </div>
            </div>
        </div>
        {{ end }}
        <div class="row justify-content-center">
            <div class="col-auto m-3">
                {{template "_internal/pagination.html" . }}
            </div>
        </div>
    </div>
</div>
{{ end }}


================================================
FILE: layouts/_default/single.html
================================================
{{ define "head" }}
<meta name="description" content="{{ .Params.description }}">
<link rel="stylesheet" href="{{.Site.Params.staticPath}}/css/single.css">

<!-- fontawesome -->
<script defer src="{{.Site.Params.staticPath}}/fontawesome-6/all-6.4.2.js"></script>
{{ end }}

{{ define "title" }}
{{.Title }} | {{ .Site.Title }}
{{ end }}

{{ define "main" }}
<section id="single">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-sm-12 col-md-12 col-lg-9">
        <div class="pr-lg-4">
          <div class="title mb-5">
            <h1 class="text-center mb-4">{{ .Title }}</h1>
            <div class="text-center">
              {{ if .Params.author }}
                {{ .Params.author }}
                <small>|</small>
              {{ end }}
              {{ .Date.Format (.Site.Params.datesFormat.article | default "Jan 2, 2006") }}

              {{ if or (.Site.Params.singlePages.readTime.enable | default true) (.Params.enableReadingTime) }}
              <span id="readingTime">
                {{ .Site.Params.singlePages.readTime.content | default "min read" }}
              </span>
              {{ end }}
            </div>
          </div>
          {{ if .Params.image }}
          <div class="featured-image">
            <img class="img-fluid mx-auto d-block" src="{{ .Params.image }}" alt="{{ .Title }}">
          </div>
          {{ end }}
          <article class="page-content  p-2">
          {{ .Content | emojify }}
          </article>
        </div>
      </div>
      <div class="col-sm-12 col-md-12 col-lg-3">
        <div id="stickySideBar" class="sticky-sidebar">
          {{ if .Params.toc | default true}}
          <aside class="toc">
              <h5>
                {{ .Site.Params.terms.toc | default "Table Of Contents" }}
              </h5>
              <div class="toc-content">
                {{.TableOfContents}}
              </div>
          </aside>
          {{ end }}

          {{ if .Params.tags }}
          <aside class="tags">
            <h5>{{ .Site.Params.terms.tags | default "Tags" }}</h5>
            <ul class="tags-ul list-unstyled list-inline">
              {{range .Params.tags}}
              <li class="list-inline-item"><a href="{{`tags` | absURL}}/{{.| urlize}}"
                {{ if site.Params.singlePages.tags.openInNewTab | default true }}target="_blank"{{ end }}
              >{{.}}</a></li>
              {{end}}
            </ul>
          </aside>
          {{end}}

          {{ if .Params.socialShare | default .Site.Params.singlePages.socialShare | default true }}
          <aside class="social">
            <h5>{{ .Site.Params.terms.social | default "Social" }}</h5>
            <div class="social-content">
              <ul class="list-inline">
                <li class="list-inline-item text-center">
                  <a target="_blank" href="https://www.linkedin.com/feed/?shareActive=true&text={{ .Params.description }} {{ .Site.Params.hostName }}{{ .Permalink | absURL }}">
                    <i class="fab fa-linkedin"></i>
                  </a>
                </li>
                <li class="list-inline-item text-center">
                  <a target="_blank" href='https://twitter.com/share?text={{ .Title }}&url={{ .Site.Params.hostName }}{{ .Permalink | absURL }}&hashtags={{ delimit .Params.tags "," }}'>
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li class="list-inline-item text-center">
                  <a target="_blank" href="https://api.whatsapp.com/send?text={{ .Title }}: {{ .Site.Params.hostName }}{{ .Permalink | absURL }}">
                    <i class="fab fa-whatsapp"></i>
                  </a>
                </li>
                <li class="list-inline-item text-center">
                  <a target="_blank" href='mailto:?subject={{ .Title }}&amp;body={{ .Site.Params.terms.emailText | default "Check out this site" }} {{ .Site.Params.hostName }}{{ .Permalink | absURL }}'>
                    <i class="fa fa-envelope"></i>
                  </a>
                </li>
              </ul>
            </div>
          </aside>
          {{ end }}
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-9 p-4">
        {{ template "_internal/disqus.html" . }}
      </div>
    </div>
  </div>
  <button class="p-2 px-3" onclick="topFunction()" id="topScroll">
    <i class="fas fa-angle-up"></i>
  </button>
</section>

{{ if or (.Site.Params.singlePages.scrollprogress.enable | default true) (.Params.enableScrollProgress) }}
<div class="progress">
  <div id="scroll-progress-bar" class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<Script src="{{.Site.Params.staticPath}}/js/scrollProgressBar.js"></script>
{{ end }}

<script>
  var topScroll = document.getElementById("topScroll");
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      topScroll.style.display = "block";
    } else {
      topScroll.style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  // To set height of sticky sidebar dynamically
  let stickySideBarElem = document.getElementById("stickySideBar");
  let stickyNavBar = {{ .Site.Params.navbar.stickyNavBar.enable | default false }};
  if(stickyNavBar) {
    let headerElem = document.getElementById("profileHeader");
    let headerHeight = headerElem.offsetHeight + 15;
    stickySideBarElem.style.top = headerHeight + "px";
  } else {
    stickySideBarElem.style.top = "50px";
  }
</script>

{{ if or (.Site.Params.singlePages.readTime.enable | default true) (.Params.enableReadingTime) }}
<script src="{{.Site.Params.staticPath}}/js/readingTime.js"></script>
{{end}}

{{ end }}



================================================
FILE: layouts/partials/head.html
================================================
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<meta http-equiv="Accept-CH" content="DPR, Viewport-Width, Width">
<link rel="icon" href={{ .Site.Params.favicon | default "/fav.png" }} type="image/gif">

<!-- Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload"
      as="style"
      href="https://fonts.googleapis.com/css2?family=Alata&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
>
<link rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Alata&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
      media="print" onload="this.media='all'" />
<noscript>
  <link
          href="https://fonts.googleapis.com/css2?family=Alata&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet">
</noscript>

<!-- font configuration -->
<link rel="stylesheet" href="{{ .Site.Params.staticPath }}/css/font.css" media="all">

<!-- Internal templates -->
{{ template "_internal/google_analytics.html" . }}
{{ template "_internal/opengraph.html" . }}
{{ template "_internal/twitter_cards.html" . }}

<!-- stylesheets -->
{{- if (or (eq .Site.Params.UseBootstrapCDN true) (eq .Site.Params.UseBootstrapCDN "css")) -}}
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
{{- else -}}
<link rel="stylesheet" href="{{ .Site.Params.staticPath }}/bootstrap-5/css/bootstrap.min.css" media="all">
{{- end -}}
<link rel="stylesheet" href="{{ .Site.Params.staticPath }}/css/header.css" media="all">
<link rel="stylesheet" href="{{ .Site.Params.staticPath }}/css/footer.css" media="all">

<!-- theme -->
<link rel="stylesheet" href="{{ .Site.Params.staticPath }}/css/theme.css" media="all">

<style>
    :root {
        --text-color: {{ .Site.Params.color.textColor | default "#343a40" }};
        --text-secondary-color: {{ .Site.Params.color.secondaryTextColor | default "#6c757d" }};
        --text-link-color: {{ .Site.Params.color.textLinkColor | default (.Site.Params.color.primaryColor | default "#007bff") }};
        --background-color: {{ .Site.Params.color.backgroundColor | default "#eaedf0" }};
        --secondary-background-color: {{ .Site.Params.color.secondaryBackgroundColor | default "#64ffda1a" }};
        --primary-color: {{ .Site.Params.color.primaryColor | default "#007bff" }};
        --secondary-color: {{ .Site.Params.color.secondaryColor | default "#f8f9fa" }};

        /* dark mode colors */
        --text-color-dark: {{ .Site.Params.color.darkmode.textColor | default "#e4e6eb" }};
        --text-secondary-color-dark: {{ .Site.Params.color.darkmode.secondaryTextColor | default "#b0b3b8" }};
        --text-link-color-dark: {{ .Site.Params.color.darkmode.textLinkColor | default (.Site.Params.color.darkmode.primaryColor | default "#ffffff") }};
        --background-color-dark: {{ .Site.Params.color.darkmode.backgroundColor | default "#18191a" }};
        --secondary-background-color-dark: {{ .Site.Params.color.darkmode.secondaryBackgroundColor | default "#212529" }};
        --primary-color-dark: {{ .Site.Params.color.darkmode.primaryColor | default "#ffffff" }};
        --secondary-color-dark: {{ .Site.Params.color.darkmode.secondaryColor | default "#212529" }};
    }
    body {
        font-size: {{ .Site.Params.font.fontSize | default "1rem" }};
        font-weight: {{ .Site.Params.font.fontWeight | default "400" }};
        line-height: {{ .Site.Params.font.lineHeight | default "1.5" }};
        text-align: {{ .Site.Params.font.textAlign | default "left" }};
    }

    html {
        background-color: var(--background-color) !important;
    }

    body::-webkit-scrollbar {
        height: 0px;
        width: 8px;
        background-color: var(--background-color);
    }

    ::-webkit-scrollbar-track {
        border-radius: 1rem;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 1rem;
        background: #b0b0b0;
        outline: 1px solid var(--background-color);
    }

    #search-content::-webkit-scrollbar {
        width: .5em;
        height: .1em;
        background-color: var(--background-color);
    }
</style>

{{ partial "head/extensions.html" . }}



================================================
FILE: layouts/partials/scripts.html
================================================
{{- if (eq .Site.Params.theme.defaultTheme "light") }}
<script>
    if (document.body.className.includes("dark")) {
        document.body.classList.remove('dark');
        document.documentElement.classList.remove('dark');
        localStorage.setItem("pref-theme", 'light');
    }
</script>

{{ else if (eq .Site.Params.theme.defaultTheme "dark") }}
{{- /* theme is dark */}}
<script>
    if (document.body.className.includes("light")) {
        document.documentElement.classList.add('dark');
        document.body.classList.add('dark');
        localStorage.setItem("pref-theme", 'dark');
    }
</script>

{{- else }}
{{- /* theme is auto */}}
<script>
    if (localStorage.getItem("pref-theme") === "dark") {
        document.documentElement.classList.add('dark');
        document.body.classList.add('dark');
    } else if (localStorage.getItem("pref-theme") === "light") {
        document.body.classList.remove('dark')
        document.documentElement.classList.remove('dark');
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
        document.body.classList.add('dark');
    }

</script>
{{- end }}

{{- if (not .Site.Params.theme.disableThemeToggle) }}
<script>
    document.getElementById("theme-toggle").addEventListener("click", () => {
        if (document.body.className.includes("dark")) {
            document.body.classList.remove('dark');
            document.documentElement.classList.remove('dark');
            localStorage.setItem("pref-theme", 'light');
        } else {
            document.body.classList.add('dark');
            document.documentElement.classList.add('dark');
            localStorage.setItem("pref-theme", 'dark');
        }
    })

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })

</script>
{{- end }}

{{ if not (.Site.Params.navbar.disableSearch | default false) }}
    <script src="{{ .Site.Params.staticPath }}/js/search.js"></script>
{{ end }}


{{ if or (.Params.mathjax | default false) (.Site.Params.mathjax) }}

{{ "<!-- MathJax -->" | safeHTML }}
<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/tex-mml-chtml.min.js" integrity="sha384-M5jmNxKC9EVnuqeMwRHvFuYUE8Hhp0TgBruj/GZRkYtiMrCRgH7yvv5KY+Owi7TW" crossorigin="anonymous"></script>

<script type="text/x-mathjax-config">
    MathJax.Hub.Config({
      tex2jax: {
        inlineMath: [['\\(','\\)']],
        displayMath: [['$$','$$'], ['\[','\]']],
        processEscapes: true,
        processEnvironments: true,
        skipTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
        TeX: { equationNumbers: { autoNumber: "AMS" },
             extensions: ["AMSmath.js", "AMSsymbols.js"] }
      }
    });
</script>
{{ end }}

{{ if (.Site.Params.cloudinary_cloud_name | default false) }}

{{ "<!-- cloudinary -->" | safeHTML }}
<script src="https://unpkg.com/cloudinary-core@2.13.0/cloudinary-core-shrinkwrap.js" integrity="sha384-0bQduxVhZMs6xfvcPH9osdUIw44hjF8EahHuQBdyN6Rryk8tgyFO80Yz5d14F+5d" crossorigin="anonymous"></script>
<script type="text/javascript">
    var cl = cloudinary.Cloudinary.new({cloud_name: "{{- .Site.Params.cloudinary_cloud_name }}"}); 
    cl.responsive();
</script>

{{ end }}

{{ if (.Site.Params.contact.formspree.enable | default false) }}
<script src="{{ .Site.Params.staticPath }}/js/contact.js"></script>
{{ end }}

{{ if (.Site.Params.customScripts | default false) }}
{{ .Site.Params.customScripts | safeHTML }}
{{ end }}



================================================
FILE: layouts/partials/head/extensions.html
================================================
{{/*
    You can add further theme extensions or customizations here if they should
    appear in <head>.
*/}}


================================================
FILE: layouts/partials/sections/about.html
================================================
{{ if .Site.Params.about.enable | default false }}
<section id="about" class="py-0 py-sm-5">
    <div class="container bg-transparent">
        <h3 class="text-center bg-transparent">{{ .Site.Params.about.title }}</h3>
        <div class="bg-transparent row justify-content-center px-3 py-5">
            {{ if .Site.Params.about.image }}
            <div class="col-sm-12 col-md-8 col-lg-4 mb-5 mb-sm-0 mb-md-5 mb-lg-0 d-none d-sm-none d-md-block">
                <div class="image d-flex px-5">
                    <img src="{{ .Site.Params.about.image }}" class="img-thumbnail mx-auto rounded-circle" alt="">
                </div>
            </div>
            {{ end }}
            <div class="col-sm-12 col-md-12 col-lg-8 content">
                {{ .Site.Params.about.content | markdownify }}

                {{ if .Site.Params.about.skills.enable }}
                {{ .Site.Params.about.skills.title }}
                <ul>
                    {{ range .Site.Params.about.skills.items }}
                    <li>{{ . | markdownify }}</li>
                    {{ end }}
                </ul>
                {{ end }}
            </div>
        </div>
    </div>
</section>
{{ end }}


================================================
FILE: layouts/partials/sections/achievements.html
================================================
{{ if .Site.Params.achievements.enable | default false }}
<section id="achievements" class="py-5">
    <div class="container">
        <h3 class="text-center">{{ .Site.Params.achievements.title | default "Achievements" }}</h3>
        <div class="px-0 px-md-5 px-lg-5">
            <div class="row justify-content-center px-3 px-md-5 px-lg-5">
                {{ range .Site.Params.achievements.items }}
                {{ if .url }}
                <div class="col-lg-4 col-md-6 my-3">
                    <a class="card my-3 h-100 p-3" href="{{ .url }}" title="{{ .title }}" target="_blank">
                        {{if .image }}
                            <div class="card-head">
                                <img class="card-img-top" src="{{ .image }}">
                            </div>
                        {{ end }}
                        <div class="card-body bg-transparent">
                            <h5 class="card-title bg-transparent">{{ .title }}</h5>
                            <div class="card-text secondary-font">
                                {{ .content }}
                            </div>
                        </div>
                    </a>
                </div>
                {{ else }}
                <div class="col-lg-4 col-md-6 my-3">
                    <div class="card my-3 h-100 p-3" title="{{ .title }}">
                        {{if .image }}
                            <div class="card-head">
                                <img class="card-img-top" src="{{ .image }}">
                            </div>
                        {{ end }}
                        <div class="card-body bg-transparent">
                            <h5 class="card-title bg-transparent">{{ .title }}</h5>
                            <div class="card-text secondary-font">
                                {{ .content }}
                            </div>
                        </div>
                    </div>
                </div>
                {{ end }}
                {{ end }}
            </div>
        </div>
    </div>
</section>
{{ end }}


================================================
FILE: layouts/partials/sections/contact.html
================================================
{{ if .Site.Params.contact.enable | default false }}
<section id="contact" class="py-5">
    <div class="container">
        <h3 class="text-center">{{ .Site.Params.contact.title | default "Get in Touch" }}</h3>
        <div class="px-0 px-md-5 px-lg-5">
            <div class="row justify-content-center px-md-5">
                <div class="col-md-8 py-3">
                    <div class="text-center">
                        {{ .Site.Params.contact.content | emojify | markdownify }}
                    </div>
                    {{ if .Site.Params.contact.formspree.enable | default false }}
                    <div class="row justify-content-center">
                        <form id="contact-form" action="https://formspree.io/f/{{ .Site.Params.contact.formspree.formId }}" onsubmit="handleFormspreeSubmit(event)" method="POST" class="col-md-7">
                            <div class="form-group pt-3">
                                <input type="email" class="form-control"  name="email" required="true" placeholder='{{ .Site.Params.contact.formspree.emailCaption | emojify | default "Enter your email" }}'>
                            </div>
                            <div class="form-group pt-3">
                                <textarea class="form-control" name="message" required="true" placeholder='{{ .Site.Params.contact.formspree.messageCaption | emojify | default "Enter your message" }}' rows="{{ .Site.Params.contact.formspree.messageRows | default 3 }}"></textarea>
                            </div>
                            <div class="form-group text-center pt-3">
                                <button type="submit" class="btn">{{ .Site.Params.contact.btnName | default "Get in Touch" }}</button>
                            </div>
                        </form>
                    </div>
                    {{ else if or (.Site.Params.contact.email)  (.Site.Params.contact.btnLink) }}
                    <div class="text-center pt-3">
                        <a 
                            href='{{ if .Site.Params.contact.btnLink }}
                                    {{ .Site.Params.contact.btnLink | default "#" }}
                                  {{ else }}
                                    mailto:{{ .Site.Params.contact.email }}
                                  {{ end }}'
                            target="_blank"
                            class="btn"
                        >
                            {{ .Site.Params.contact.btnName | default "Get in Touch" }}
                        </a>
                    </div>
                    {{ end }}
                </div>
            </div>
        </div>
    </div>
    <div id="contact-form-status"></div>
</section>
{{ end }}

<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
  <symbol id="check-circle-fill" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
  </symbol>
  <symbol id="info-fill" viewBox="0 0 16 16">
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
  </symbol>
  <symbol id="exclamation-triangle-fill" viewBox="0 0 16 16">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </symbol>
</svg>



================================================
FILE: layouts/partials/sections/education.html
================================================
{{ if .Site.Params.education.enable | default false }}
<section id="education" class="py-5">
    <div class="container">
        <h3 class="text-center">{{ .Site.Params.education.title | default "Education" }}</h3>
        <div class="row justify-content-center py-5">
            {{ $indexMenu := .Site.Params.education.index }}
            {{ range $index, $element := .Site.Params.education.items }}
            <div class="col-12 p-0">
                <div class="row row align-items-center justify-content-center m-1 mb-4">
                    {{ if $indexMenu }}
                    <div class="col-md-1 text-center me-2 p-0 d-none d-md-block">
                        <div class="py-2">
                            <span class="index shadow-lg">
                                {{ add $index 1 }}
                            </span>
                        </div>
                    </div>
                    {{ end }}

                    <div class="col-md-9">
                        <div class="card">
                            <div class="card-body">
                                <div class="float-end">
                                    <small>{{ .date }}</small>
                                </div>
                                <h5 class="card-title">{{ .title }}</h5>
                                
                                {{ if .school.url }}
                                <a href="{{ .school.url }}" target="_blank">
                                    <h6>
                                    {{ .school.name }}
                                    </h6>
                                </a>
                                {{ else }}
                                {{ .school.name }}
                                {{ end }}

                                {{ if .GPA }}
                                <div class="py-1">
                                    GPA:
                                    <i>
                                        <small>{{ .GPA }}</small>
                                    </i> 
                                </div>
                                {{ end }}
                                <div class="py-1 education-content">
                                    {{ .content | markdownify}}
                                </div>

                                {{ if .featuredLink.enable }}
                                <div class="py-1">
                                    <a href="{{ .featuredLink.url }}" class="btn">
                                        {{ .featuredLink.name | default "Featured" }}
                                    </a>
                                </div>
                                {{ end }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {{ end }}
        </div>
    </div>
</section>
{{ end }}



================================================
FILE: layouts/partials/sections/experience.html
================================================
{{ if .Site.Params.experience.enable | default false }}
<section id="experience" class="py-5">
    <div class="container">
        <h3 class="text-center">{{ .Site.Params.experience.title | default "Experience" }}</h3>
        <div class="row justify-content-center">
            <div class="col-sm-12 col-md-8 col-lg-8 py-5">
                <div class="experience-container px-3 pt-2">
                    <ul class="nav nav-pills mb-2 bg-transparent primary-font" id="pills-tab" role="tablist">
                        {{ range $index, $element := .Site.Params.experience.items }}
                            <li class="nav-item px-1 bg-transparent" role="presentation">
                                <div 
                                    class="nav-link {{ if (eq $index 0) }}active{{ end }} bg-transparent" 
                                    aria-selected="true" 
                                    role="tab" 
                                    data-bs-toggle="pill"
                                    id='{{ replace .company " " "-" }}-{{ replace .date " " "-" }}-tab'
                                    data-bs-target='#pills-{{ replace .company " " "-" }}-{{ replace .date " " "-" }}'
                                    aria-controls='{{ replace .company " " "-" }}-{{ replace .date " " "-" }}' 
                                >
                                    {{ .company }}
                                </div>
                            </li>
                        {{ end }}
                    </ul>

                    <div class="tab-content pb-3 bg-transparent primary-font" id="pills-tabContent">
                        {{ range $index, $element := .Site.Params.experience.items }}
                            {{ $company := .company }}
                            {{ $companyUrl := .companyUrl }}
                            <div 
                                class="tab-pane fade bg-transparent {{ if eq $index 0 }}show active{{ end }}"
                                role="tabpanel"
                                id='pills-{{ replace $company " " "-" }}-{{ replace .date " " "-" }}'
                                aria-labelledby='pills-{{ replace $company " " "-" }}-{{ replace .date " " "-" }}-tab'
                            >
                                {{ range $jobIdx, $job := .jobs }}
                                    <div>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <div>
                                                <span class="{{ if eq $jobIdx 0 }}h4{{ else }}h5{{ end }}">{{ $job.name }}</span>
                                                
                                                {{ if $job.info.content }}
                                                    <span class="p-2">
                                                        <span 
                                                            style="cursor: pointer;" 
                                                            data-bs-toggle="tooltip" 
                                                            data-bs-placement="top" 
                                                            data-bs-original-title={{$job.info.content}}
                                                        > 
                                                            <i class="fas fa-info-circle fa-xs"></i>
                                                        </span>
                                                    </span>
                                                {{ end }}
                                                
                                                {{ if eq $jobIdx 0 }}
                                                    <small>-</small>
                                                    <a href="{{ $companyUrl }}" target="_blank">{{ $company }}</a>
                                                {{ end }}
                                            </div>
                                            <div class="d-block">
                                                <small>{{ $job.date }}</small>
                                                {{ if $job.featuredItems }}
                                                    <div class="featuredLink list-inline d-flex justify-content-end align-items-center">
                                                        {{ range $job.featuredItems.fontAwesomeIcons }}
                                                            <div class="list-inline-item">
                                                                <a
                                                                    href="{{ .url }}"
                                                                    target="_blank"

                                                                    {{ if .tooltip}}
                                                                        data-bs-toggle="tooltip" 
                                                                        data-bs-placement="top" 
                                                                        data-bs-original-title={{.tooltip}}
                                                                    {{ end }}
                                                                >
                                                                    <i class="{{ .icon }}"></i>
                                                                </a>
                                                            </div>
                                                        {{ end }}

                                                        {{ range $job.featuredItems.customIcons }}
                                                            <div class="list-inline-item">
                                                                <a
                                                                    class="d-flex align-items-center justify-content-between" 
                                                                    href="{{ .url }}" 
                                                                    target="_blank"

                                                                    {{ if .tooltip}}
                                                                        data-bs-toggle="tooltip" 
                                                                        data-bs-placement="top" 
                                                                        data-bs-original-title={{.tooltip}}
                                                                    {{ end }}
                                                                >
                                                                    <img src="{{ .icon }}">
                                                                </a>
                                                            </div>
                                                        {{ end }}
                                                    </div>
                                                {{ end }}
                                            </div>
                                        </div>

                                        <div class="pb-2 pb-3">
                                            {{ $job.content | markdownify}}
                                        </div>
                                    </div>
                                {{ end }}
                            </div>
                        
                        {{ end }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
{{ end }}



================================================
FILE: layouts/partials/sections/header.html
================================================
{{- /* theme is auto */}}
<script>
    let localStorageValue = localStorage.getItem("pref-theme");
    let mediaQuery = window.matchMedia('(prefers-color-scheme: dark)').matches;

    switch (localStorageValue) {
        case "dark":
            document.documentElement.classList.add('dark');
            document.body.classList.add('dark');
            break;
        case "light":
            document.body.classList.remove('dark');
            document.documentElement.classList.remove('dark');
            break;
        default:
            if (mediaQuery) {
                document.documentElement.classList.add('dark');
                document.body.classList.add('dark');
            }
            break;
    }
</script>

<!-- Show header on scroll up -->
{{ if .Site.Params.navbar.stickyNavBar.enable | default false }}
{{ $showNavBarOnScrollUp := .Site.Params.navbar.stickyNavBar.showOnScrollUp | default false }}
<script>
    var prevScrollPos = window.pageYOffset;
    window.addEventListener("scroll", function showHeaderOnScroll() {
        let profileHeaderElem = document.getElementById("profileHeader");
        let currentScrollPos = window.pageYOffset;
        let resetHeaderStyle = false;
        let showNavBarOnScrollUp = {{ $showNavBarOnScrollUp }};
        let showNavBar = showNavBarOnScrollUp ? prevScrollPos > currentScrollPos : currentScrollPos > 0;
        if (showNavBar) {
            profileHeaderElem.classList.add("showHeaderOnTop");
        } else {
            resetHeaderStyle = true;
        }
        if(currentScrollPos === 0) {
            resetHeaderStyle = true;
        }
        if(resetHeaderStyle) {
            profileHeaderElem.classList.remove("showHeaderOnTop");
        }
        prevScrollPos = currentScrollPos;
    });
</script>
{{ end }}

<!-- Navbar -->
<header id="profileHeader">
    <nav class="pt-3 navbar navbar-expand-lg {{ if .Site.Params.animate }}animate{{ end }}">
        <div class="container-fluid mx-xs-2 mx-sm-5 mx-md-5 mx-lg-5">
            <!-- navbar brand -->
            <a class="navbar-brand primary-font text-wrap" href="{{ .Site.BaseURL | relURL }}">
                {{ if and (or (.Site.Params.favicon) (.Site.Params.navbar.brandLogo)) (.Site.Params.navbar.showBrandLogo | default true) }}
                <img src="{{ .Site.Params.navbar.brandLogo | default .Site.Params.favicon }}" width="30" height="30"
                    class="d-inline-block align-top">
                {{ .Site.Params.navbar.brandName | default .Site.Params.title }}
                {{ else }}
                {{ .Site.Params.navbar.brandName | default .Site.Params.title }}
                {{ end }}
            </a>

            {{ if not (.Site.Params.navbar.disableSearch | default false) }}
                <div>
                    <input id="search" autocomplete="off" class="form-control mr-sm-2 d-none d-md-block" placeholder='{{ .Site.Params.navbar.searchPlaceholder | default "Ctrl + k to Search..."}}'
                        aria-label="Search" oninput="searchOnChange(event)">
                </div>
            {{ end }}

            <!-- navbar toggler -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent"
                aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                <svg aria-hidden="true" height="24" viewBox="0 0 16 16" version="1.1" width="24" data-view-component="true">
                    <path fill-rule="evenodd" d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z"></path>
                </svg>
            </button>

            <!-- navbar content -->
            <div class="collapse navbar-collapse text-wrap primary-font" id="navbarContent">
                <ul class="navbar-nav {{ .Site.Params.navbar.align | default "ms-auto"}} text-center">
                    {{ if not (.Site.Params.navbar.disableSearch | default false) }}
                        <li class="nav-item navbar-text d-block d-md-none">
                            <div class="nav-link">
                                <input id="search" autocomplete="off" class="form-control mr-sm-2" placeholder='{{ .Site.Params.navbar.searchPlaceholder | default "Ctrl + k to Search..."}}' aria-label="Search" oninput="searchOnChange(event)">
                            </div>
                        </li>
                    {{ end }}

                    {{ if and (.Site.Params.about.enable | default false) (not (.Site.Params.navbar.menus.disableAbout | default false)) }}
                    <li class="nav-item navbar-text">
                        <a class="nav-link" href="{{ .Site.BaseURL | relURL }}#about" aria-label="about">
                            {{ .Site.Params.about.title | default "About" }}
                        </a>
                    </li>
                    {{ end }}

                    {{ if and (.Site.Params.experience.enable | default false) (not (.Site.Params.navbar.menus.disableExperience | default false)) }}
                    <li class="nav-item navbar-text">
                        <a class="nav-link" href="{{ .Site.BaseURL | relURL }}#experience"
                            aria-label="experience">
                            {{ .Site.Params.experience.title | default "Experience" }}
                        </a>
                    </li>
                    {{ end }}

                    {{ if and (.Site.Params.education.enable | default false) (not (.Site.Params.navbar.menus.disableEducation | default false)) }}
                    <li class="nav-item navbar-text">
                        <a class="nav-link" href="{{ .Site.BaseURL | relURL }}#education"
                            aria-label="education">
                            {{ .Site.Params.education.title | default "Education" }}
                        </a>
                    </li>
                    {{ end }}

                    {{ if and (.Site.Params.projects.enable | default false) (not (.Site.Params.navbar.menus.disableProjects | default false)) }}
                    <li class="nav-item navbar-text">
                        <a class="nav-link" href="{{ .Site.BaseURL | relURL }}#projects"
                            aria-label="projects">
                            {{ .Site.Params.projects.title | default "Projects" }}
                        </a>
                    </li>
                    {{ end }}

                    {{ if and (.Site.Params.achievements.enable | default false) (not (.Site.Params.navbar.menus.disableAchievements | default false)) }}
                    <li class="nav-item navbar-text">
                        <a class="nav-link" href="{{ .Site.BaseURL | relURL }}#achievements"
                            aria-label="achievements">
                            {{ .Site.Params.achievements.title | default "Achievements" }}
                        </a>
                    </li>
                    {{ end }}

                    {{ if and (.Site.Params.contact.enable | default false) (not (.Site.Params.navbar.menus.disableContact | default false)) }}
                    <li class="nav-item navbar-text">
                        <a class="nav-link" href="{{ .Site.BaseURL | relURL }}#contact"
                            aria-label="contact">
                            {{ .Site.Params.contact.title | default "Contact" }}
                        </a>
                    </li>
                    {{ end }}

                    {{ if and .Site.Menus.main (.Site.Params.navbar.enableSeparator | default false) }}
                        <li class="nav-item navbar-text d-none d-lg-block d-xl-block"><div class="nav-link nav-link-sep"></div></li>
                        <div class="dropdown-divider"></div>
                    {{ end }}

                    <!-- custom menus from the user -->
                    {{ range .Site.Menus.main }}
                    {{ if .HasChildren }}
                    <!-- Dropdown menu -->
                    <li class="nav-item navbar-text dropdown">
                        <a class="nav-link dropdown-toggle" href="{{ .URL }}" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="{{ .Title }}">
                            {{ .Name }}
                        </a>
                        <div class="dropdown-menu shadow-lg rounded" aria-labelledby="navbarDropdown">
                            {{ range .Children }}
                            <a class="dropdown-item text-center nav-link" href="{{ .URL }}"
                                title="{{ .Title }}">
                                {{ .Name }}
                            </a>
                            {{ end }}
                        </div>
                    </li>
                    {{else}}
                    <!-- Single menu item -->
                    <li class="nav-item navbar-text">
                        <a class="nav-link" href="{{.URL}}" title="{{ .Title }}">
                            {{ .Pre }}
                            {{ .Name }}
                        </a>
                    </li>
                    {{end}}
                    {{end}}

                    {{ if (not .Site.Params.theme.disableThemeToggle | default false) }}
                    <li class="nav-item navbar-text">
                        <!-- darkmode mode toggle -->
                        <div class="text-center">
                            <button id="theme-toggle">
                                <svg id="moon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                </svg>
                                <svg id="sun" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="5"></circle>
                                    <line x1="12" y1="1" x2="12" y2="3"></line>
                                    <line x1="12" y1="21" x2="12" y2="23"></line>
                                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                                    <line x1="1" y1="12" x2="3" y2="12"></line>
                                    <line x1="21" y1="12" x2="23" y2="12"></line>
                                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                                </svg>
                            </button>
                        </div>
                    </li>
                    {{ end }}

                </ul>

            </div>
        </div>
    </nav>
</header>



================================================
FILE: layouts/partials/sections/projects.html
================================================
{{ if .Site.Params.projects.enable | default false }}
<section id="projects" class="py-5">
    <div class="container">
        <h3 class="text-center">{{ .Site.Params.projects.title | default "Projects" }}</h3>
        <div class="row justify-content-center px-3 px-md-5">
            {{ range .Site.Params.projects.items }}
            <div class="col-lg-4 col-md-6 my-3">
                <div class="card my-3 h-100" title="{{ .title }}">
                    <div class="card-head">
                        <img class="card-img-top" src="{{ .image }}" alt="{{ .title }}">
                    </div>
                    <div class="card-body bg-transparent p-3">
                        <div class="pb-2 bg-transparent">
                            {{ range .badges }}
                            <span class="badge badge-secondary">{{ . }}</span>
                            {{ end }}
                        </div>
                        <h5 class="card-title bg-transparent mt-1">{{ .title }}</h5>
                        <div class="card-text bg-transparent secondary-font">
                            {{ .content }}
                        </div>
                    </div>
                    {{ if or (.links) (.featured) }}
                    <div class="card-footer py-3">
                        {{ range .links }}
                        <span class="m-1 mx-2">
                            <a href="{{ .url }}" target="_blank">
                                <i class="{{ .icon }}"></i>
                            </a>
                        </span>
                        {{ end }}
                        {{ if .featured }}
                        <span class="float-end">
                            <a class="btn btn-sm" href="{{ .featured.link }}" target="_blank">
                                {{ .featured.name }}
                            </a>
                        </span>
                        {{ end }}
                    </div>
                    {{ end }}
                </div>
            </div>
            {{ end }}
            {{ range ( where .Site.RegularPages "Type" "projects" ) }}
            {{ if .Params.showInHome | default true }}
            <div class="col-lg-4 col-md-6 my-3">
                <div class="card my-3 h-100" title="{{ .Title }}">
                    <div class="card-head">
                        <img class="card-img-top" src="{{ .Params.image }}" alt="{{ .Title }}">
                    </div>
                    <div class="card-body bg-transparent p-3">
                        <div class="pb-2 bg-transparent">
                            {{ range .Params.badges }}
                            <span class="badge badge-secondary">{{ . }}</span>
                            {{ end }}
                        </div>
                        <h5 class="card-title bg-transparent">{{ .Title | truncate 50 }}</h5>
                        <div class="card-text bg-transparent secondary-font">
                            {{ .Summary | truncate 100 | safeHTML }}
                        </div>
                    </div>
                    <div class="card-footer py-3">
                        {{ range .Params.links }}
                        <span class="m-1 mx-2">
                            <a href="{{ .url }}">
                                <i class="{{ .icon }}"></i>
                            </a>
                        </span>
                        {{ end }}
                        <span class="float-end">
                            <a class="btn btn-sm" href="{{ .RelPermalink }}">
                                Know more
                            </a>
                        </span>
                    </div>
                </div>
            </div>
            {{ end }}
            {{ end }}
        </div>
    </div>
</section>
{{ end }}


================================================
FILE: layouts/partials/sections/footer/copyright.html
================================================
<div class="container py-4">
    <div class="row justify-content-center">
        <div class="col-md-4 text-center">
            {{ if or .Site.Params.navbar.brandLogo .Site.Params.favicon }}
                <div class="pb-2">
                    <a href="{{ .Site.BaseURL }}" title="{{ .Site.Title }}">
                        <img alt="Footer logo" src="{{ .Site.Params.navbar.brandLogo | default .Site.Params.favicon }}"
                            height="40px" width="40px">
                    </a>
                </div>
            {{ end }}
            &copy; {{ now.Format "2006"}} {{ .Site.Params.copyright }} {{ .Site.Params.terms.copyright | default "All Rights Reserved" }}
            <div class="text-secondary">
                Made with
                <span class="text-danger">
                    &#10084;
                </span>
                and
                <a href="https://github.com/gurusabarish/hugo-profile" target="_blank"
                    title="Designed and developed by gurusabarish">
                    Hugo Profile
                </a>
            </div>
        </div>
    </div>
</div>



================================================
FILE: layouts/partials/sections/footer/index.html
================================================
<footer>
    <!-- Recent blog posts -->
    {{- partial "sections/footer/recentBlogPosts.html" . -}}

    <!-- Social Icons -->
    {{- partial "sections/footer/socialNetwork.html" . -}}

    <!-- Copyright -->
    {{- partial "sections/footer/copyright.html" . -}}
</footer>


================================================
FILE: layouts/partials/sections/footer/recentBlogPosts.html
================================================
{{ $recentPostsPath := .Site.Params.footer.recentPosts.path | default "blogs" }}
{{ $currentNumOfrecentPosts := len (where .Site.RegularPages "Type" $recentPostsPath) }} 
{{ if and (gt $currentNumOfrecentPosts 0) (.Site.Params.footer.recentPosts.enable | default false) }} 
<div class="container py-3" id="recent-posts">
    {{ $recentPostsCount := .Site.Params.footer.recentPosts.count | default 3 }}
    {{ $recentPosts := where .Site.RegularPages "Section" $recentPostsPath | first $recentPostsCount }}
    <div class="h3 text-center text-secondary py-3">
        {{ .Site.Params.footer.recentPosts.title | default "Recent Posts" }}
    </div>
    <div class="row justify-content-center">
        {{ range $recentPosts }}
        <div class="col-lg-4 col-md-6 pt-2">
            <div class="card h-100">
                {{ if and (not (.Site.Params.footer.recentPosts.disableFeaturedImage | default false)) (.Params.image) }}
                <div class="card-header">
                    <a href="{{ .RelPermalink }}">
                        <img src="{{ .Params.image }}" class="card-img-top" alt="{{ .Title }}">
                    </a>
                </div>
                {{ end }}
                <div class="card-body bg-transparent p-3 shadow-sm">
                    <a href="{{ .RelPermalink }}" class="primary-font card-title">
                        <h5 class="card-title bg-transparent" title="{{ .Title }}">{{ .Title | truncate 25 }}</h5>
                    </a>
                    <div class="card-text secondary-font">
                        <p>{{ .Summary | truncate 300}}</p>
                    </div>
                </div>
                <div class="mt-auto card-footer">
                    <span class="float-start">{{ .Date.Format (.Site.Params.datesFormat.articleRecent | default "January 2, 2006") }}</span>
                    <a href="{{ .RelPermalink }}" class="float-end btn btn-outline-info btn-sm">{{ .Site.Params.terms.read | default "Read" }}</a>
                </div>
            </div>
        </div>
        {{ end }}
    </div>
</div>
{{ end }}



================================================
FILE: layouts/partials/sections/footer/socialNetwork.html
================================================
<div class="text-center pt-2">
    {{ if .Site.Params.footer.socialNetworks.github }}
    <span class="px-1">
        <a href="{{ .Site.Params.footer.socialNetworks.github }}" target="_blank" aria-label="github">
            <svg xmlns="http://www.w3.org/2000/svg" width="2.7em" height="2.7em" viewBox="0 0 1792 1792">
                <path id="footer-socialNetworks-github-svg-path"
                    d="M522 1352q-8 9-20-3-13-11-4-19 8-9 20 3 12 11 4 19zm-42-61q9 12 0 19-8 6-17-7t0-18q9-7 17 6zm-61-60q-5 7-13 2-10-5-7-12 3-5 13-2 10 5 7 12zm31 34q-6 7-16-3-9-11-2-16 6-6 16 3 9 11 2 16zm129 112q-4 12-19 6-17-4-13-15t19-7q16 5 13 16zm63 5q0 11-16 11-17 2-17-11 0-11 16-11 17-2 17 11zm58-10q2 10-14 14t-18-8 14-15q16-2 18 9zm964-956v960q0 119-84.5 203.5t-203.5 84.5h-224q-16 0-24.5-1t-19.5-5-16-14.5-5-27.5v-239q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-121-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-86-13.5q-44 113-7 204-79 85-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-40 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 103t.5 68q0 22-11 33.5t-22 13-33 1.5h-224q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z" />

                <metadata>
                    <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                        xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#" xmlns:dc="http://purl.org/dc/elements/1.1/">
                        <rdf:Description about="https://iconscout.com/legal#licenses"
                            dc:title="Github, Online, Project, Hosting, Square"
                            dc:description="Github, Online, Project, Hosting, Square" dc:publisher="Iconscout"
                            dc:date="2016-12-14" dc:format="image/svg+xml" dc:language="en">
                            <dc:creator>
                                <rdf:Bag>
                                    <rdf:li>Font Awesome</rdf:li>
                                </rdf:Bag>
                            </dc:creator>
                        </rdf:Description>
                    </rdf:RDF>
                </metadata>
            </svg>
        </a>
    </span>
    {{ end }}

    {{ if .Site.Params.footer.socialNetworks.linkedin }}
    <span class="px-1">
        <a href="{{ .Site.Params.footer.socialNetworks.linkedin }}" target="_blank" aria-label="linkedin">
            <svg xmlns="http://www.w3.org/2000/svg" width='2.4em' height='2.4em' fill="#fff" aria-label="LinkedIn"
                viewBox="0 0 512 512">
                <rect width="512" height="512" fill="#0077b5" rx="15%" />
                <circle cx="142" cy="138" r="37" />
                <path stroke="#fff" stroke-width="66" d="M244 194v198M142 194v198" />
                <path d="M276 282c0-20 13-40 36-40 24 0 33 18 33 45v105h66V279c0-61-32-89-76-89-34 0-51 19-59 32" />
            </svg>
        </a>
    </span>
    {{ end }}

    {{ if .Site.Params.footer.socialNetworks.twitter }}
    <a href="{{ .Site.Params.footer.socialNetworks.twitter }}" target="_blank" aria-label="twitter">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px">
            <path fill="#03a9f4"
                d="M42,37c0,2.762-2.239,5-5,5H11c-2.762,0-5-2.238-5-5V11c0-2.762,2.238-5,5-5h26c2.761,0,5,2.238,5,5 V37z" />
            <path fill="#fff"
                d="M36,17.12c-0.882,0.391-1.999,0.758-3,0.88c1.018-0.604,2.633-1.862,3-3 c-0.951,0.559-2.671,1.156-3.793,1.372C31.311,15.422,30.033,15,28.617,15C25.897,15,24,17.305,24,20v2c-4,0-7.9-3.047-10.327-6 c-0.427,0.721-0.667,1.565-0.667,2.457c0,1.819,1.671,3.665,2.994,4.543c-0.807-0.025-2.335-0.641-3-1c0,0.016,0,0.036,0,0.057 c0,2.367,1.661,3.974,3.912,4.422C16.501,26.592,16,27,14.072,27c0.626,1.935,3.773,2.958,5.928,3c-1.686,1.307-4.692,2-7,2 c-0.399,0-0.615,0.022-1-0.023C14.178,33.357,17.22,34,20,34c9.057,0,14-6.918,14-13.37c0-0.212-0.007-0.922-0.018-1.13 C34.95,18.818,35.342,18.104,36,17.12" />
        </svg>
    </a>
    {{ end }}

    {{ if .Site.Params.footer.socialNetworks.instagram }}
    <a href="{{ .Site.Params.footer.socialNetworks.instagram }}" target="_blank" aria-label="instagram">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px">
            <radialGradient id="yOrnnhliCrdS2gy~4tD8ma" cx="19.38" cy="42.035" r="44.899"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#fd5" />
                <stop offset=".328" stop-color="#ff543f" />
                <stop offset=".348" stop-color="#fc5245" />
                <stop offset=".504" stop-color="#e64771" />
                <stop offset=".643" stop-color="#d53e91" />
                <stop offset=".761" stop-color="#cc39a4" />
                <stop offset=".841" stop-color="#c837ab" />
            </radialGradient>
            <path fill="url(#yOrnnhliCrdS2gy~4tD8ma)"
                d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z" />
            <radialGradient id="yOrnnhliCrdS2gy~4tD8mb" cx="11.786" cy="5.54" r="29.813"
                gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#4168c9" />
                <stop offset=".999" stop-color="#4168c9" stop-opacity="0" />
            </radialGradient>
            <path fill="url(#yOrnnhliCrdS2gy~4tD8mb)"
                d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z" />
            <path fill="#fff"
                d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z" />
            <circle cx="31.5" cy="16.5" r="1.5" fill="#fff" />
            <path fill="#fff"
                d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z" />
        </svg>
    </a>
    {{ end }}

    {{ if .Site.Params.footer.socialNetworks.facebook }}
    <a href="{{ .Site.Params.footer.socialNetworks.facebook }}" target="_blank" aria-label="facebook">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px">
            <path fill="#3F51B5"
                d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z" />
            <path fill="#FFF"
                d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z" />
        </svg>
    </a>
    {{ end }}
</div>


================================================
FILE: layouts/partials/sections/hero/index.html
================================================
{{ if .Site.Params.hero.enable | default false }}
<section id="hero" class="py-5 align-middle">
    <div class="container px-3 px-sm-5 px-md-5 px-lg-5 pt-lg-3">
        <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-8 content {{ if .Site.Params.animate }}animate{{ end }}" id="primary-font">
                <span class="subtitle">
                    {{ .Site.Params.hero.intro }}
                </span>
                <h1>
                    {{ .Site.Params.hero.title }}
                </h1>
                <h2>
                    {{ .Site.Params.hero.subtitle }}
                </h2>
                <p class="hero-content">
                    {{ .Site.Params.hero.content | markdownify }}
                </p>
                <div class="row">
                    <div class="col-auto h-100">
                        {{ if .Site.Params.hero.button.enable }}
                        <a href="{{ .Site.Params.hero.button.url }}" class="btn" {{ cond .Site.Params.hero.button.download "download" "" }}
			  {{ if .Site.Params.hero.button.newPage | default true }}
                          target="_blank"
                          {{ end }}>
                            {{ .Site.Params.hero.button.name }}
                        </a>
                        {{ end }}
                    </div>
                    <div class="col-auto px-0 h-100">
                        {{- partial "sections/hero/social.html" . -}}
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-4">
                <div class="row justify-content-center">
                    <div class="col-sm-12 col-md-9 pt-5 image {{ if .Site.Params.animate }}animate{{ end }} px-5 px-md-5 px-lg-0 text-center">
                        <img src="{{ .Site.Params.hero.image }}"
                            class="img-thumbnail mx-auto{{ if .Site.Params.hero.roundImage }} rounded-circle{{ end }}"
                            alt=""
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
    {{ if .Site.Params.hero.bottomImage.enable | default true }}
    <div class="hero-bottom-svg d-md-block d-lg-block d-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="201" height="201" viewBox="0 0 201 201">
            <g id="Group_1168" data-name="Group 1168" transform="translate(-384 -1392)">
                <rect id="Rectangle_2206" data-name="Rectangle 2206" width="12" height="2" rx="1"
                    transform="translate(391 1392) rotate(90)" fill="#282f49" />
                <rect id="Rectangle_2271" data-name="Rectangle 2271" width="12" height="2" rx="1"
                    transform="translate(391 1500) rotate(90)" fill="#282f49" />
                <rect id="Rectangle_2238" data-name="Rectangle 2238" width="12" height="2" rx="1"
                    transform="translate(391 1446) rotate(90)" fill="#282f49" />
                <rect id="Rectangle_2278" data-name="Rectangle 2278" width="12" height="2" rx="1"
                    transform="translate(391 1554) rotate(90)" fill="#282f49" />
                <rect id="Rectangle_2222" data-name="Rectangle 2222" width="12" height="2" rx="1"
                    transform="translate(391 1419) rotate(90)" fill="#282f49" />
                <rect id="Rectangle_2272" data-name="Rectangle 2272" width="12" height="2" rx="1"
                    transform="translate(391 1527) rotate(90)" fill="#282f49" />
                <rect id="Rectangle_2241" data-name="Rectangle 2241" width="12" height="2" rx="1"
                    transform="translate(391 1473) rotate(90)" fill="#282f49" />
                <rect id="Rectangle_2288" data-name="Rectangle 2288" width="12" height="2" rx="1"
                    transform="translate(391 1581) rotate(90)" fill="#282f49" />
                <rect id="Rectangle_2214" data-name="Rectangle 2214" width="12" height="2" rx="1"
                    transform="translate(499 1392) rotate(90)" fill="#282f49" />
                <rect id="Rectangle_2289" data-name="Rectangle 2289" width="12" height="2" rx="1"
                    transform="translate(499 1500) rotate(90)" fill="#282f49" />
                <rect id="Rectangle_2256" data-name="Rectangle 2256" width="12" height="2" rx="1"
                    transform="translate(499 1446) rotate(90)" fill="#282f49" />
                <rect id="Rectangle_2290" data-name="Rectangle 2290" width="12" height="2" rx="1"
                    transform="translate(499 1554) rotate(90)" fill="#282f49" />
                <rect id="Rectangle_2231" data-name="Rectangle 2231" width="12" height="2" rx="1"
                    transform="translate(499 1419) rotate(90)" fill="#282f49" />
                <rect id="Rectangle_2291" data-name="Rectangle 2291" width="12" height="2" rx="1"
                    transform="translate(499 1527) rotate(90)" fill="#282f49" />
                <rect id="Rectangle_2257" data-name="Rectangle 2257" width="12" height="2" rx="1"
                    transform="translate(499 1473) rotate(90)" fill="#282f49" />
                <rect id="Rectangle_2292" data-name="Rectangle 2292" width="12" height="2" rx="1"
                    transform="translate(499 1581) rotate(90)" fill="#282f49" />
                <rect id="Rectangle_2210" data-name="Rectangle 2210" width="12" height="2" rx="1"
                    transform="translate(445 1392) rotate(90)" fill="#282f49" />
                <rect id="Rectangle_2279" data-name="Rectangle 2279" width="12" height="2" rx="1"
                    transform="translate(445 1500) rotate(90)" fill="#282f49" />
                <rect id="Rectangle_2248" data-name="Rectangle 2248" width="12" height="2" rx="1"
                    transform="translate(445 1446) rotate(90)" fill="#282f49" />
                <rect id="Rectangle_2280" data-name="Rectangle 2280" width="12" height="2" rx="1"
                    transform="translate(445 1554) rotate(90)" fill="#282f49" />
                <rect id="Rectangle_2226" data-name="Rectangle 2226" width="12" height="2" rx="1"
                    transform="translate(445 1419) rotate(90)" fill="#282f49" />
                <rect id="Rectangle_2281" data-name="Rectangle 2281" width="12" height="2" rx="1"
                    transform="translate(445 1527) rotate(90)" fill="#282f49" />
                <rect id="Rectangle_2249" data-name="Rectangle 2249" width="12" height="2" rx="1"
                    transform="translate(445 1473) rotate(90)" fill="#282f49" />
                <rect id="Rectangle_2293" data-name="Rectangle 2293" width="12" height="2" rx="1"
                    transform="translate(445 1581) rotate(90)" fill="#282f49" />
                <rect id="Rectangle_2219" data-name="Rectangle 2219" width="12" height="2" rx="1"
                    transform="translate(553 1392) rotate(90)" fill="#282f49" />
                <rect id="Rectangle_2310" data-name="Rectangle 2310" width="12" height="2" rx="1"
                    transform="translate(553 1500) rotate(90)" fill="#282f49" />
                <rect id="Rectangle_2262" data-name="Rectangle 2262" width="12" height="2" rx="1"
                    transform="translate(553 1446) rotate(90)" fill="#282f49" />
                <rect id="Rectangle_2311" data-name="Rectangle 2311" width="12" height="2" rx="1"
                    transform="translate(553 1554) rotate(90)" fill="#282f49" />
                <rect id="Rectangle_2232" data-name="Rectangle 2232" width="12" height="2" rx="1"
                    transform="translate(553 1419) rotate(90)" fill="#282f49" />
                <rect id="Rectangle_2312" data-name="Rectangle 2312" width="12" height="2" rx="1"
                    transform="translate(553 1527) rotate(90)" fill="#282f49" />
                <rect id="Rectangle_2263" data-name="Rectangle 2263" width="12" height="2" rx="1"
                    transform="translate(553 1473) rotate(90)" fill="#282f49" />
                <rect id="Rectangle_2313" data-name="Rectangle 2313" width="12" height="2" rx="1"
                    transform="translate(553 1581) rotate(90)" fill="#282f49" />
                <rect id="Rectangle_2209" data-name="Rectangle 2209" width="12" height="2" rx="1"
                    transform="translate(418 1392) rotate(90)" fill="#282f49" />
                <rect id="Rectangle_2273" data-name="Rectangle 2273" width="12" height="2" rx="1"
                    transform="translate(418 1500) rotate(90)" fill="#282f49" />
                <rect id="Rectangle_2242" data-name="Rectangle 2242" width="12" height="2" rx="1"
                    transform="translate(418 1446) rotate(90)" fill="#282f49" />
                <rect id="Rectangle_2282" data-name="Rectangle 2282" width="12" height="2" rx="1"
                    transform="translate(418 1554) rotate(90)" fill="#282f49" />
                <rect id="Rectangle_2223" data-name="Rectangle 2223" width="12" height="2" rx="1"
                    transform="translate(418 1419) rotate(90)" fill="#282f49" />
                <rect id="Rectangle_2274" data-name="Rectangle 2274" width="12" height="2" rx="1"
                    transform="translate(418 1527) rotate(90)" fill="#282f49" />
                <rect id="Rectangle_2243" data-name="Rectangle 2243" width="12" height="2" rx="1"
                    transform="translate(418 1473) rotate(90)" fill="#282f49" />
                <rect id="Rectangle_2294" data-name="Rectangle 2294" width="12" height="2" rx="1"
                    transform="translate(418 1581) rotate(90)" fill="#282f49" />
                <rect id="Rectangle_2217" data-name="Rectangle 2217" width="12" height="2" rx="1"
                    transform="translate(526 1392) rotate(90)" fill="#282f49" />
                <rect id="Rectangle_2314" data-name="Rectangle 2314" width="12" height="2" rx="1"
                    transform="translate(526 1500) rotate(90)" fill="#282f49" />
                <rect id="Rectangle_2258" data-name="Rectangle 2258" width="12" height="2" rx="1"
                    transform="translate(526 1446) rotate(90)" fill="#282f49" />
                <rect id="Rectangle_2315" data-name="Rectangle 2315" width="12" height="2" rx="1"
                    transform="translate(526 1554) rotate(90)" fill="#282f49" />
                <rect id="Rectangle_2233" data-name="Rectangle 2233" width="12" height="2" rx="1"
                    transform="translate(526 1419) rotate(90)" fill="#282f49" />
                <rect id="Rectangle_2316" data-name="Rectangle 2316" width="12" height="2" rx="1"
                    transform="translate(526 1527) rotate(90)" fill="#282f49" />
                <rect id="Rectangle_2259" data-name="Rectangle 2259" width="12" height="2" rx="1"
                    transform="translate(526 1473) rotate(90)" fill="#282f49" />
                <rect id="Rectangle_2317" data-name="Rectangle 2317" width="12" height="2" rx="1"
                    transform="translate(526 1581) rotate(90)" fill="#282f49" />
                <rect id="Rectangle_2211" data-name="Rectangle 2211" width="12" height="2" rx="1"
                    transform="translate(472 1392) rotate(90)" fill="#282f49" />
                <rect id="Rectangle_2295" data-name="Rectangle 2295" width="12" height="2" rx="1"
                    transform="translate(472 1500) rotate(90)" fill="#282f49" />
                <rect id="Rectangle_2250" data-name="Rectangle 2250" width="12" height="2" rx="1"
                    transform="translate(472 1446) rotate(90)" fill="#282f49" />
                <rect id="Rectangle_2296" data-name="Rectangle 2296" width="12" height="2" rx="1"
                    transform="translate(472 1554) rotate(90)" fill="#282f49" />
                <rect id="Rectangle_2227" data-name="Rectangle 2227" width="12" height="2" rx="1"
                    transform="translate(472 1419) rotate(90)" fill="#282f49" />
                <rect id="Rectangle_2297" data-name="Rectangle 2297" width="12" height="2" rx="1"
                    transform="translate(472 1527) rotate(90)" fill="#282f49" />
                <rect id="Rectangle_2251" data-name="Rectangle 2251" width="12" height="2" rx="1"
                    transform="translate(472 1473) rotate(90)" fill="#282f49" />
                <rect id="Rectangle_2298" data-name="Rectangle 2298" width="12" height="2" rx="1"
                    transform="translate(472 1581) rotate(90)" fill="#282f49" />
                <rect id="Rectangle_2221" data-name="Rectangle 2221" width="12" height="2" rx="1"
                    transform="translate(580 1392) rotate(90)" fill="#282f49" />
                <rect id="Rectangle_2318" data-name="Rectangle 2318" width="12" height="2" rx="1"
                    transform="translate(580 1500) rotate(90)" fill="#282f49" />
                <rect id="Rectangle_2264" data-name="Rectangle 2264" width="12" height="2" rx="1"
                    transform="translate(580 1446) rotate(90)" fill="#282f49" />
                <rect id="Rectangle_2319" data-name="Rectangle 2319" width="12" height="2" rx="1"
                    transform="translate(580 1554) rotate(90)" fill="#282f49" />
                <rect id="Rectangle_2236" data-name="Rectangle 2236" width="12" height="2" rx="1"
                    transform="translate(580 1419) rotate(90)" fill="#282f49" />
                <rect id="Rectangle_2320" data-name="Rectangle 2320" width="12" height="2" rx="1"
                    transform="translate(580 1527) rotate(90)" fill="#282f49" />
                <rect id="Rectangle_2265" data-name="Rectangle 2265" width="12" height="2" rx="1"
                    transform="translate(580 1473) rotate(90)" fill="#282f49" />
                <rect id="Rectangle_2321" data-name="Rectangle 2321" width="12" height="2" rx="1"
                    transform="translate(580 1581) rotate(90)" fill="#282f49" />
                <rect id="Rectangle_2207" data-name="Rectangle 2207" width="12" height="2" rx="1"
                    transform="translate(396 1399) rotate(-180)" fill="#282f49" />
                <rect id="Rectangle_2270" data-name="Rectangle 2270" width="12" height="2" rx="1"
                    transform="translate(396 1507) rotate(-180)" fill="#282f49" />
                <rect id="Rectangle_2239" data-name="Rectangle 2239" width="12" height="2" rx="1"
                    transform="translate(396 1453) rotate(-180)" fill="#282f49" />
                <rect id="Rectangle_2283" data-name="Rectangle 2283" width="12" height="2" rx="1"
                    transform="translate(396 1561) rotate(-180)" fill="#282f49" />
                <rect id="Rectangle_2224" data-name="Rectangle 2224" width="12" height="2" rx="1"
                    transform="translate(396 1426) rotate(-180)" fill="#282f49" />
                <rect id="Rectangle_2275" data-name="Rectangle 2275" width="12" height="2" rx="1"
                    transform="translate(396 1534) rotate(-180)" fill="#282f49" />
                <rect id="Rectangle_2244" data-name="Rectangle 2244" width="12" height="2" rx="1"
                    transform="translate(396 1480) rotate(-180)" fill="#282f49" />
                <rect id="Rectangle_2299" data-name="Rectangle 2299" width="12" height="2" rx="1"
                    transform="translate(396 1588) rotate(-180)" fill="#282f49" />
                <rect id="Rectangle_2215" data-name="Rectangle 2215" width="12" height="2" rx="1"
                    transform="translate(504 1399) rotate(-180)" fill="#282f49" />
                <rect id="Rectangle_2300" data-name="Rectangle 2300" width="12" height="2" rx="1"
                    transform="translate(504 1507) rotate(-180)" fill="#282f49" />
                <rect id="Rectangle_2252" data-name="Rectangle 2252" width="12" height="2" rx="1"
                    transform="translate(504 1453) rotate(-180)" fill="#282f49" />
                <rect id="Rectangle_2301" data-name="Rectangle 2301" width="12" height="2" rx="1"
                    transform="translate(504 1561) rotate(-180)" fill="#282f49" />
                <rect id="Rectangle_2228" data-name="Rectangle 2228" width="12" height="2" rx="1"
                    transform="translate(504 1426) rotate(-180)" fill="#282f49" />
                <rect id="Rectangle_2302" data-name="Rectangle 2302" width="12" height="2" rx="1"
                    transform="translate(504 1534) rotate(-180)" fill="#282f49" />
                <rect id="Rectangle_2253" data-name="Rectangle 2253" width="12" height="2" rx="1"
                    transform="translate(504 1480) rotate(-180)" fill="#282f49" />
                <rect id="Rectangle_2303" data-name="Rectangle 2303" width="12" height="2" rx="1"
                    transform="translate(504 1588) rotate(-180)" fill="#282f49" />
                <rect id="Rectangle_2212" data-name="Rectangle 2212" width="12" height="2" rx="1"
                    transform="translate(450 1399) rotate(-180)" fill="#282f49" />
                <rect id="Rectangle_2284" data-name="Rectangle 2284" width="12" height="2" rx="1"
                    transform="translate(450 1507) rotate(-180)" fill="#282f49" />
                <rect id="Rectangle_2245" data-name="Rectangle 2245" width="12" height="2" rx="1"
                    transform="translate(450 1453) rotate(-180)" fill="#282f49" />
                <rect id="Rectangle_2285" data-name="Rectangle 2285" width="12" height="2" rx="1"
                    transform="translate(450 1561) rotate(-180)" fill="#282f49" />
                <rect id="Rectangle_2229" data-name="Rectangle 2229" width="12" height="2" rx="1"
                    transform="translate(450 1426) rotate(-180)" fill="#282f49" />
                <rect id="Rectangle_2286" data-name="Rectangle 2286" width="12" height="2" rx="1"
                    transform="translate(450 1534) rotate(-180)" fill="#282f49" />
                <rect id="Rectangle_2246" data-name="Rectangle 2246" width="12" height="2" rx="1"
                    transform="translate(450 1480) rotate(-180)" fill="#282f49" />
                <rect id="Rectangle_2304" data-name="Rectangle 2304" width="12" height="2" rx="1"
                    transform="translate(450 1588) rotate(-180)" fill="#282f49" />
                <rect id="Rectangle_2218" data-name="Rectangle 2218" width="12" height="2" rx="1"
                    transform="translate(558 1399) rotate(-180)" fill="#282f49" />
                <rect id="Rectangle_2322" data-name="Rectangle 2322" width="12" height="2" rx="1"
                    transform="translate(558 1507) rotate(-180)" fill="#282f49" />
                <rect id="Rectangle_2266" data-name="Rectangle 2266" width="12" height="2" rx="1"
                    transform="translate(558 1453) rotate(-180)" fill="#282f49" />
                <rect id="Rectangle_2323" data-name="Rectangle 2323" width="12" height="2" rx="1"
                    transform="translate(558 1561) rotate(-180)" fill="#282f49" />
                <rect id="Rectangle_2234" data-name="Rectangle 2234" width="12" height="2" rx="1"
                    transform="translate(558 1426) rotate(-180)" fill="#282f49" />
                <rect id="Rectangle_2324" data-name="Rectangle 2324" width="12" height="2" rx="1"
                    transform="translate(558 1534) rotate(-180)" fill="#282f49" />
                <rect id="Rectangle_2267" data-name="Rectangle 2267" width="12" height="2" rx="1"
                    transform="translate(558 1480) rotate(-180)" fill="#282f49" />
                <rect id="Rectangle_2325" data-name="Rectangle 2325" width="12" height="2" rx="1"
                    transform="translate(558 1588) rotate(-180)" fill="#282f49" />
                <rect id="Rectangle_2208" data-name="Rectangle 2208" width="12" height="2" rx="1"
                    transform="translate(423 1399) rotate(-180)" fill="#282f49" />
                <rect id="Rectangle_2276" data-name="Rectangle 2276" width="12" height="2" rx="1"
                    transform="translate(423 1507) rotate(-180)" fill="#282f49" />
                <rect id="Rectangle_2240" data-name="Rectangle 2240" width="12" height="2" rx="1"
                    transform="translate(423 1453) rotate(-180)" fill="#282f49" />
                <rect id="Rectangle_2287" data-name="Rectangle 2287" width="12" height="2" rx="1"
                    transform="translate(423 1561) rotate(-180)" fill="#282f49" />
                <rect id="Rectangle_2225" data-name="Rectangle 2225" width="12" height="2" rx="1"
                    transform="translate(423 1426) rotate(-180)" fill="#282f49" />
                <rect id="Rectangle_2277" data-name="Rectangle 2277" width="12" height="2" rx="1"
                    transform="translate(423 1534) rotate(-180)" fill="#282f49" />
                <rect id="Rectangle_2247" data-name="Rectangle 2247" width="12" height="2" rx="1"
                    transform="translate(423 1480) rotate(-180)" fill="#282f49" />
                <rect id="Rectangle_2305" data-name="Rectangle 2305" width="12" height="2" rx="1"
                    transform="translate(423 1588) rotate(-180)" fill="#282f49" />
                <rect id="Rectangle_2216" data-name="Rectangle 2216" width="12" height="2" rx="1"
                    transform="translate(531 1399) rotate(-180)" fill="#282f49" />
                <rect id="Rectangle_2326" data-name="Rectangle 2326" width="12" height="2" rx="1"
                    transform="translate(531 1507) rotate(-180)" fill="#282f49" />
                <rect id="Rectangle_2260" data-name="Rectangle 2260" width="12" height="2" rx="1"
                    transform="translate(531 1453) rotate(-180)" fill="#282f49" />
                <rect id="Rectangle_2327" data-name="Rectangle 2327" width="12" height="2" rx="1"
                    transform="translate(531 1561) rotate(-180)" fill="#282f49" />
                <rect id="Rectangle_2235" data-name="Rectangle 2235" width="12" height="2" rx="1"
                    transform="translate(531 1426) rotate(-180)" fill="#282f49" />
                <rect id="Rectangle_2328" data-name="Rectangle 2328" width="12" height="2" rx="1"
                    transform="translate(531 1534) rotate(-180)" fill="#282f49" />
                <rect id="Rectangle_2261" data-name="Rectangle 2261" width="12" height="2" rx="1"
                    transform="translate(531 1480) rotate(-180)" fill="#282f49" />
                <rect id="Rectangle_2329" data-name="Rectangle 2329" width="12" height="2" rx="1"
                    transform="translate(531 1588) rotate(-180)" fill="#282f49" />
                <rect id="Rectangle_2213" data-name="Rectangle 2213" width="12" height="2" rx="1"
                    transform="translate(477 1399) rotate(-180)" fill="#282f49" />
                <rect id="Rectangle_2306" data-name="Rectangle 2306" width="12" height="2" rx="1"
                    transform="translate(477 1507) rotate(-180)" fill="#282f49" />
                <rect id="Rectangle_2254" data-name="Rectangle 2254" width="12" height="2" rx="1"
                    transform="translate(477 1453) rotate(-180)" fill="#282f49" />
                <rect id="Rectangle_2307" data-name="Rectangle 2307" width="12" height="2" rx="1"
                    transform="translate(477 1561) rotate(-180)" fill="#282f49" />
                <rect id="Rectangle_2230" data-name="Rectangle 2230" width="12" height="2" rx="1"
                    transform="translate(477 1426) rotate(-180)" fill="#282f49" />
                <rect id="Rectangle_2308" data-name="Rectangle 2308" width="12" height="2" rx="1"
                    transform="translate(477 1534) rotate(-180)" fill="#282f49" />
                <rect id="Rectangle_2255" data-name="Rectangle 2255" width="12" height="2" rx="1"
                    transform="translate(477 1480) rotate(-180)" fill="#282f49" />
                <rect id="Rectangle_2309" data-name="Rectangle 2309" width="12" height="2" rx="1"
                    transform="translate(477 1588) rotate(-180)" fill="#282f49" />
                <rect id="Rectangle_2220" data-name="Rectangle 2220" width="12" height="2" rx="1"
                    transform="translate(585 1399) rotate(-180)" fill="#282f49" />
                <rect id="Rectangle_2330" data-name="Rectangle 2330" width="12" height="2" rx="1"
                    transform="translate(585 1507) rotate(-180)" fill="#282f49" />
                <rect id="Rectangle_2268" data-name="Rectangle 2268" width="12" height="2" rx="1"
                    transform="translate(585 1453) rotate(-180)" fill="#282f49" />
                <rect id="Rectangle_2331" data-name="Rectangle 2331" width="12" height="2" rx="1"
                    transform="translate(585 1561) rotate(-180)" fill="#282f49" />
                <rect id="Rectangle_2237" data-name="Rectangle 2237" width="12" height="2" rx="1"
                    transform="translate(585 1426) rotate(-180)" fill="#282f49" />
                <rect id="Rectangle_2332" data-name="Rectangle 2332" width="12" height="2" rx="1"
                    transform="translate(585 1534) rotate(-180)" fill="#282f49" />
                <rect id="Rectangle_2269" data-name="Rectangle 2269" width="12" height="2" rx="1"
                    transform="translate(585 1480) rotate(-180)" fill="#282f49" />
                <rect id="Rectangle_2333" data-name="Rectangle 2333" width="12" height="2" rx="1"
                    transform="translate(585 1588) rotate(-180)" fill="#282f49" />
            </g>
        </svg>
    </div>
    {{ end }}
</section>
{{ end }}


================================================
FILE: layouts/partials/sections/hero/social.html
================================================
<span>
    {{ range .Site.Params.hero.socialLinks.fontAwesomeIcons }}
    <span class="px-1">
        <a href="{{ .url }}"
            {{ if not (hasPrefix .url "#") }} target="_blank" {{ end }}
            class="btn social-icon"
        >
            <i class="{{ .icon }}"></i>
        </a>
    </span>
    {{ end }}

    {{ range .Site.Params.hero.socialLinks.customIcons }}
    <span class="px-1">
        <a href="{{ .url }}"
            {{ if not (hasPrefix .url "#") }} target="_blank" {{ end }}
            class="btn social-icon"
        >
            <img src="{{ .icon }}">
        </a>
    </span>
    {{ end }}
</span>



================================================
FILE: layouts/projects/list.html
================================================
{{ define "head" }}
<meta name="description" content="{{ .Title }} of {{ .Site.Title }}">
<link rel="stylesheet" href="{{ .Site.Params.staticPath }}/css/projects.css" media="all">

<!-- fontawesome -->
<script defer src="{{ .Site.Params.staticPath }}/fontawesome-6/all-6.4.2.js"></script>
{{ end }}

{{ define "title" }}
{{.Title }} | {{ .Site.Title }}
{{ end }}

{{ define "main" }}
<div class="container pt-5" id="projects">
    <h2 class="text-center pb-2">{{.Title}}</h2>
    <div class="row">
        {{ range .Paginator.Pages }}
        <div class="col-lg-4 col-md-6 my-3">
            <div class="card my-3 h-100" title="{{ .Title }}">
                <div class="card-head">
                    <img class="card-img-top" src="{{ .Params.image }}" alt="{{ .Title }}">
                </div>
                <div class="card-body bg-transparent p-3">
                    <div class="pb-2 bg-transparent">
                        {{ range .Params.badges }}
                        <span class="badge badge-secondary">{{ . }}</span>
                        {{ end }}
                    </div>
                    <h5 class="card-title bg-transparent">{{ .Title | truncate 50 }}</h5>
                    <div class="card-text bg-transparent secondary-font">
                        {{ .Summary | truncate 100 | safeHTML }}
                    </div>
                </div>
                <div class="card-footer py-3">
                    {{ range .Params.links }}
                    <span class="m-1 mx-2">
                        <a href="{{ .url }}" target="_blank">
                            <i class="{{ .icon }}"></i>
                        </a>
                    </span>
                    {{ end }}
                    <span class="float-end">
                        <a class="btn btn-sm" href="{{ .RelPermalink }}">
                            Know more
                        </a>
                    </span>
                </div>
            </div>
        </div>
        {{ end }}
        <div class="row justify-content-center">
            <div class="col-auto m-3">
                {{template "_internal/pagination.html" . }}
            </div>
        </div>
    </div>
</div>
{{ end }}


================================================
FILE: layouts/shortcodes/dynamic-img.html
================================================
{{ $image := .Get "src" }}
{{ $alt := .Get "title" }}
{{ $width := .Get "width" | default "w_auto" }}
{{ $style := .Get "style" | default "max-width:80%" }}
<img alt="{{ $alt }}" title="{{ $alt }}" data-src="https://res.cloudinary.com/{{ $.Site.Params.cloudinary_cloud_name }}/{{ $width }},c_scale,f_auto,q_auto,dpr_auto{{ $image}}" class="cld-responsive" style="padding-bottom: 16px; display: block; margin: auto; {{ $style }}">



================================================
FILE: static/css/about.css
================================================
#single {
    padding: 60px 0;
    line-height: 1.7em;
    font-size: 17px;
}

#single .title>h1 {
    opacity: 0.8;
    color: var(--text-color) !important;
}

#single .title small {
    opacity: 0.7;
}

#single .featured-image {
    padding: 1rem;
    padding-top: 0;
}

#single .featured-image img {
    border-radius: 1rem;
    box-shadow: 0px 8px 56px rgba(15, 80, 100, 0.16);
    margin-bottom: 1rem;
}

#single .page-content a {
    display: inline-block;
    text-decoration: none;
    color: var(--text-link-color) !important;
}

#single .page-content a::after {
    content: "";
    display: block;
    width: 0px;
    height: 2px;
    bottom: 0.37em;
    background-color: var(--primary-color);
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    opacity: 0.5;
}

#single .page-content a:hover::after,
#single .page-content a:focus::after,
#single .page-content a:active::after {
    width: 100%;
}

#single .page-content h1,
#single .page-content h2,
#single .page-content h3,
#single .page-content h4,
#single .page-content h5,
#single .page-content h6 {
    color: var(--primary-color) !important;
    margin-bottom: 0.7em;
    opacity: 0.9;
}

#single .page-content blockquote {
    padding: 20px 30px;
    border-left: 6px solid var(--primary-color) !important;
    color: var(--text-secondary-color) !important;
    font-weight: 600;
    font-size: 20px;
    margin: 30px 0;
    border-radius: 5px;
}

#single .page-content blockquote,
#single .page-content blockquote * {
    background-color: var(--secondary-color) !important;
}

/* table */
#single .page-content table {
    width: auto;
    border-radius: 5px;
    padding: 0.1rem;
    margin-bottom: 1.2em;
    max-width: 100%;
    display: block;
    overflow-x: auto;
    opacity: 0.8;
}

#single .page-content table>tr {
    height: 40px !important;
}

#single .page-content table>thead>tr>th {
    padding: 0.5rem !important;
    background-color: var(--primary-color) !important;
    color: var(--secondary-color) !important;
    border: 1px solid var(--secondary-color);
    opacity: 0.9;
}

#single .page-content table>tbody>tr>td {
    padding: 0.5rem !important;
    border: 1px solid var(--secondary-color);
    background-color: var(--secondary-color) !important;
    opacity: 0.9;
}

#single .page-content table>thead>tr {
    background-color: var(--secondary-color) !important;
    color: var(--secondary-color) !important;
}

/* code */

#single .page-content pre {
    border-radius: 0.7em !important;
    margin: 5px;
    margin-bottom: 2em;
    padding: 2em;
    background-color: var(--secondary-color) !important;
    color: var(--text-secondary-color) !important;
    max-height: 450px;
}

#single .page-content pre>code {
    color: var(--text-secondary-color) !important;
}

#single .page-content code {
    color: var(--primary-color) !important;
}

/* kbd and mark */

#single .page-content kbd {
    color: var(--primary-color) !important;
    background-color: var(--secondary-color) !important;
}

#single .page-content mark {
    color: var(--primary-color) !important;
    background-color: var(--secondary-color) !important;
}

/* list */

#single .page-content ol,
#single .page-content ul {
    margin-bottom: 1.2em;
    padding-left: 1.5em;
    list-style-position: inside;
    opacity: 0.9;
}

#single .page-content ol li li,
#single .page-content ul li li {
    margin-bottom: 0.5em;
    padding-left: 1.5em;
}

/* sidebar */

#single aside {
    /* background-color: var(--secondary-color); */
    border-radius: .7rem;
    padding: .7rem 1rem;
    margin-bottom: 1em;
}

#single .sticky-sidebar {
    position: sticky;
    top: 150px;
}

/* aboutImg */

#single aside.aboutImg {
    padding: .7rem 1rem;
}

#single aside.aboutImg img {
    border-radius: 1.5rem !important;
    position: relative;
    /* box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.2); */
    max-width: 100%;
}
@media (min-width: 768px) and (max-width: 1024px) {
    #single aside.aboutImg img {
        width: 60%;
    }
 }


#single aside.aboutImg h5 {
    margin: .7em 0;
    margin-bottom: 1em;
    color: var(--text-color);
}

#single aside.aboutImg .img-icon img {
    width: 1em;
}

#single aside.aboutImg .aboutImg-content {
    margin-bottom: 1em;
    opacity: 0.9;
}

#single aside.aboutImg .aboutImg-content ul {
    margin-bottom: 1em;
    opacity: 0.9;
}

#single aside.aboutImg .aboutImg-content ul li a {
    border: 1px solid var(--primary-color);
    padding: .7rem;
    color: var(--text-color);
    border-radius: 10px;
    overflow: hidden;
}

#single aside.aboutImg .aboutImg-content ul li {
    margin: .7rem .5rem;
    margin-left: 0;
}

#single aside.aboutImg .aboutImg-content ul li:hover a {
    opacity: .8;
    color: var(--primary-color);
}

/* Top scroll */

#single #topScroll {
    display: none;
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 99;
    border: none;
    outline: none;
    background-color: var(--secondary-color);
    color: var(--primary-color);
    cursor: pointer;
    border-radius: 10px;
}

#single #topScroll:hover {
    background-color: var(--primary-color);
    color: var(--secondary-color);
    transition: .5s;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}


================================================
FILE: static/css/font.css
================================================

/* Default font for body */
body {
    font-family: "Lora", serif !important;
}

/* secondary font */
.secondary-font, #secondary-font {
    font-family: "Lora", serif;
}

/* primary font */
.primary-font, #primary-font {
    font-family: "Alata", sans-serif;
}

/* Default font */
.default-font, #default-font {
    font-family: "Roboto", sans-serif;
}


================================================
FILE: static/css/footer.css
================================================
footer a h5 {
    color: var(--text-color) !important;
}

footer a {
  text-decoration: none;
  color: var(--text-link-color) !important;
}

footer a:hover {
  color: var(--primary-color) !important;
}

footer .card {
    background-color: var(--secondary-color) !important;
    border-radius: .75rem;
    cursor: context-menu;
    overflow: hidden;
    border: none;
}

footer .card:hover {
    transition: all 0.3s ease-out;
    box-shadow: 0px 8px 56px rgba(15, 80, 100, 0.16);
}

footer .card-text * {
    background-color: var(--secondary-color) !important;
}

footer .card-footer {
    background-color: var(--background-color) !important;
    padding: .8em .7em;
    border: 1px solid var(--secondary-color);
}

footer .card-footer a {
    color: var(--text-link-color) !important;
    border-color: var(--primary-color) !important;
    transition: none;
    background-color: var(--background-color) !important;
}

footer .card-footer a:hover {
    color: var(--primary-color) !important;
    opacity: 0.8;
}

footer .card-footer a:focus {
    box-shadow: none !important;
}

footer .card > .card-header {
    padding: 0 !important;
    border: none !important;
    background-color: var(--secondary-color) !important;
}

footer .card > .card-header .card-img-top {
    width: 100%;
    height: 250px !important;
    object-fit: cover;
    background-color: transparent !important;
}


================================================
FILE: static/css/gallery.css
================================================
.viewer-enabled-image {
    cursor: zoom-in;
}


================================================
FILE: static/css/header.css
================================================
header {
    z-index: 10;
    position: relative;
    top: 0;
}

.showHeaderOnTop {
    box-shadow: 0px 8px 56px rgba(15, 80, 100, 0.16);
    top: 0;
    position: sticky;
}

header .navbar .navbar-nav a {
    color: var(--text-color) !important;
}

#theme-toggle {
    background-color: var(--background-color) !important;
    color: var(--text-color) !important;
}

.navbar-toggler {
    border: none;
    outline: none;
    color: var(--text-color);
}
.navbar-toggler svg {
    fill: currentColor;
    color: var(--text-color);
}
.navbar-toggler:focus {
    box-shadow: 0 0 0 .05em;
}
.navbar-text {
    font-size: 16px !important;
    opacity: 0.95;
    white-space: nowrap;
}
header .nav-link{
    transition: none !important;
}
.navbar-brand {
    color: var(--primary-color) !important;
    opacity: 0.95;
} 
.navbar .nav-link:hover {
    color: var(--primary-color) !important;
}
.nav-link.nav-link-sep:after {
    content: "|";
    color: var(--text-color) !important;
}

li > .dropdown-toggle:focus{
    color: var(--primary-color) !important;
}

.dropdown-menu {
    overflow: auto;
    /* z-index: 100; */
    background-color: var(--background-color) !important;
    border-color: var(--text-secondary-color) !important;
}

.dropdown-item:hover {
    background-color: var(--secondary-color) !important;
}

.dropdown-item:focus, .dropdown-item:active {
    background-color: var(--secondary-color) !important;
}

.dropdown-divider {
	border-top: 1px solid var(--lt-color-border-dark);
}

#search {
    border-radius: 1rem !important;
    background-color: var(--secondary-color);
    color: var(--text-color);
    border-color: var(--background-color) !important;
    transition: none;
}

#search:focus {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
#search-content {
    -ms-scroll-chaining: none;
    scrollbar-width: none;
    display: none;
    border-radius: 1rem;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    z-index: 9999;
    width: 10%;
    max-height: 350px;
    background-color: var(--secondary-color) !important;
    position: absolute;
    overflow: scroll;
}

#search-content::-webkit-scrollbar {
    display: none;
}

#search-results > .card {
    background-color: transparent !important;
    border: none;
    margin-bottom: 10px;
}

#search-results > .card :hover {
    border-radius: 1rem !important;
    background-color: var(--background-color) !important;
    transition: .2s;
}

#search-results .card a {
    opacity: 0.9;
    display: inline-block;
    text-decoration: none;
    color: var(--text-color) !important;
}

#search-results .card a:hover {
    color: var(--primary-color) !important;
}


================================================
FILE: static/css/index.css
================================================
/* Animation */
@keyframes fade-in {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
@keyframes fade-bottom {
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes fade-left {
  0% {
    transform: translateX(-10px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fade-right {
  0% {
    transform: translateX(20px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Header animation */
@keyframes fade-up {
  0% {
    transform: translateY(-10px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

header .navbar.animate {
    animation: fade-up 0.5s ease-in;
}

/* ToolTip */

.tooltip {
    line-height: 1rem;
    border-radius: .5rem !important;
}
.tooltip-inner {
    line-height: 1rem;
}
.tooltip .tooltip-arrow { 
    visibility: hidden !important;
}

/* hero */

#hero {
    min-height: 100vh;
    line-height: 2rem;
    max-width: 100%;
}
#hero .content.animate {
    animation: fade-left 1s ease-out;
}

#hero .hero-bottom-svg {
    opacity: 0.5;
    position: absolute;
    bottom: -50px;
    left: -150px;
}

#hero .subtitle {
    font-size: clamp(14px,5vw,16px);
    opacity: 0.6;
}

#hero h1 {
    font-size: clamp(40px, 8vw, 80px);
    color: var(--primary-color) !important;
}

#hero h2 {
    font-size: clamp(40px, 8vw, 60px);
    opacity: 0.5;
}

#hero p {
    margin: 20px 0px 0px;
    max-width: 640px;
    opacity: 0.8;
}

#hero .image img {
    box-shadow:0px 8px 56px rgba(15, 80, 100, 0.16);
    padding: 0;
    border: 3px solid var(--secondary-color);
    border-radius: 1rem;
}

#hero .image.animate img {
    animation: fade-in 1s ease-out;
    transition: box-shadow 0.3s;
}

#hero .image img:hover {
    cursor: pointer;
}

#hero .image.animate img:hover {
    box-shadow: 0 0 11px rgb(15 80 100 / 20%);
    filter: contrast(1.2);
    cursor: pointer;
}

#hero a.btn.social-icon {
    color: var(--primary-color) !important;
    line-height: 0%;
    border-radius: 50%;
    margin-top: 50px;
    padding: 0.7rem;
    border: 1px solid var(--primary-color);
    transition: none;
}

#hero a.btn.social-icon img {
    width: 1em;
}

#hero a.btn.social-icon:hover {
    opacity: 0.8;
}

#hero a.btn {
    margin-top: 50px;
    padding: 0.7rem 1.75rem;
    border: 1px solid var(--primary-color);
    color: var(--text-color) !important;
    border-radius: .75rem;
    transition: none;
}

#hero a.btn:focus {
    box-shadow: none;
}

#hero a.btn:hover {
    background-color: var(--secondary-color) !important;
    color: var(--text-color) !important;
    opacity: 0.9;
}

#hero a.btn.social-icon:hover {
    background-color: var(--background-color) !important;
    opacity: 0.7;
}

#hero .hero-content > a {
    display: inline-block;
    text-decoration: none;
    color: var(--text-link-color) !important;
}

#hero .hero-content > a::after {
    content: "";
    display: block;
    width: 0px;
    height: 2px;
    bottom: 0.37em;
    background-color: var(--primary-color);
    transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
    opacity: 0.5;
}

#hero .hero-content > a:hover::after, #hero .hero-content > a:focus::after, #hero .hero-content > a:active::after {
    width: 100%;
}



/* about me */
#about h3 {
    color: var(--text-secondary-color) !important;
}

#about .image img {
    box-shadow: 0px 8px 56px rgba(15, 80, 100, 0.16);
    transition: box-shadow 0.3s;
    padding: 0;
    border: 0;
}

#about .image img:hover {
    box-shadow: 0 0 11px rgb(15 80 100 / 20%);
}

#about ul {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    gap: 0px 10px;
    padding: 0px;
    margin: 20px 0px 0px;
    overflow: hidden;
    list-style: none;
}

#about ul li {
    position: relative;
    margin-bottom: 10px;
    padding-left: 20px;
}

#about ul li::before {
    content: "▹";
    color: var(--primary-color);
    position: absolute;
    left: 0px;
}

#about .content {
    font-weight: 500;
    opacity: 0.9 !important;
    line-height: 1.7rem !important;
}

#about a {
    display: inline-block;
    text-decoration: none;
    color: var(--text-link-color) !important;
}

#about a::after {
    content: "";
    display: block;
    width: 0px;
    height: 2px;
    bottom: 0.37em;
    background-color: var(--primary-color);
    transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
    opacity: 0.5;
}

#about a:hover::after, #about a:focus::after, #about a:active::after {
    width: 100%;
}

/* experience */

#experience h3 {
    color: var(--text-secondary-color) !important;
}

#experience * {
    background-color: transparent !important;
}

#experience .tab-pane > * {
    opacity: 0.9;
}

#experience .tab-pane small {
    opacity: 0.8;
}

#experience .tab-pane ul {
    padding-top: 1%;
    padding-bottom: 1%;
}

#experience .experience-container .tab-content > .tab-pane p {
    padding: 1% 0;
    margin: 0;
}

#experience .experience-container {
    background-color: var(--secondary-color) !important;
    border-radius: .75rem;
    box-shadow: 0px 8px 56px rgb(15 80 100 / 16%);
}

#experience .nav-item .nav-link {
    color: var(--text-color) !important;
    border-bottom: 2px solid transparent; 
    border-radius: 0%;
    transition: none;
    cursor: pointer;
}

#experience .nav-item .nav-link.active {
    color: var(--text-color) !important;
    border-bottom: 2px solid var(--primary-color); 
    opacity: 0.8;
}

#experience .nav-item .nav-link.active:hover { 
    transition: none !important;
}

#experience .nav-item .nav-link:hover {
    border-bottom: 2px solid var(--primary-color);
    opacity: 0.8;
}

#experience a {
    opacity: 0.9;
    display: inline-block;
    text-decoration: none;
    color: var(--text-link-color) !important;
}

#experience a::after {
    content: "";
    display: block;
    width: 0px;
    height: 2px;
    bottom: 0.37em;
    background-color: var(--primary-color);
    transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
    opacity: 0.5;
}

#experience a:hover::after, #experience a:focus::after, #experience a:active::after {
    width: 100%;
}

#experience .experience-container .tab-content .tab-pane ul {
    overflow: hidden;
    list-style: none;
    margin-bottom: 0;
}

#experience .experience-container .tab-content .tab-pane ul li {
    position: relative;
    margin-bottom: 10px;
    padding-left: 20px;
}

#experience .experience-container .tab-content .tab-pane ul li::before {
    content: "▹";
    color: var(--primary-color);
    position: absolute;
    left: 0px;
}

#experience .experience-container .tab-content .tab-pane .featuredLink img {
    width: 1.1em;
}

#experience .experience-container .tab-content .tab-pane .featuredLink a::after {
    display: block;
    width: auto;
    height: auto;
    bottom: 0em;
    background-color: transparent;
    transition: none;
    opacity: 1;
}

#experience .experience-container .tab-content .tab-pane .featuredLink a.btn {
    border: 1px solid var(--primary-color);
    border-radius: .75rem;
    transition: none;
}

#experience .experience-container .tab-content .tab-pane .featuredLink a.btn:focus {
    box-shadow: none;
}

#experience .experience-container .tab-content .tab-pane .featuredLink a.btn:hover {
    color: var(--text-color) !important;
    opacity: 0.7;
}

/* Education */

#education .container > h3 {
    color: var(--text-secondary-color) !important;
}

#education .row .index {
    opacity: 0.8;
    padding: 13px 20px;
    line-height: 0%;
    border-radius: 50%;
    max-height: 50px;
    z-index: 2;
    background-color: var(--primary-color) !important;
    color: var(--secondary-color) !important;
    font-weight: bold;
}

#education .card * {
    background-color: var(--secondary-color) !important;
}

#education .card {
    border-radius: 1.5rem;
    box-shadow: 0px 8px 56px rgb(15 80 100 / 16%);
    border: 2px solid var(--text-secondary-color) !important;
    transition: box-shadow .2s linear,opacity .2s linear;
    transition: transform 0.2s;
}

#education .card .card-body {
    border-radius: 1.5rem;
    padding: 2rem;
}

@media all and (max-width:768px) {
    #education .card .card-body {
        padding: 2rem 1rem;
    }
}

#education .card:hover {
    transition: 0.3s;
    box-shadow: 0 4px 11px rgb(15 80 100 / 16%);
    border: 2px solid var(--primary-color) !important;
}

#education .card .card-body .education-content a {
    color: var(--text-link-color) !important;
    text-decoration: none;
    opacity: 0.9;
}

#education .card .card-body > a h6 {
    display: inline-block;
    text-decoration: none;
    color: var(--text-link-color) !important;
}

#education .card .card-body > a h6::after {
    content: "";
    display: block;
    width: 0px;
    height: 2px;
    bottom: 0.37em;
    background-color: var(--primary-color);
    transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
    opacity: 0.5;
}

#education .card .card-body > a h6:hover::after, #education .card .card-body > a h6:focus::after, #education .card .card-body > a h6:active::after {
    width: 100%;
}

#education .card .card-body a.btn {
    opacity: 0.9;
    border: 1px solid var(--primary-color) !important;
    color: var(--text-color) !important;
    border-radius: .75rem;
    box-shadow: none;
    transition: none;
}

#education .card .card-body a.btn:hover {
    opacity: 0.8;
}

/* achievements */

#achievements a {
    text-decoration: none;
}

#achievements h3 {
    color: var(--text-secondary-color) !important;
}

#achievements .card {
    cursor: context-menu;
    background-color: var(--secondary-color) !important;
    border-radius: 1rem;
    box-shadow: 0 0 36px rgba(0,0,0,0.1);
    /* transform: translate3d(0, 0, 0); */
    transition: box-shadow .2s linear,opacity .2s linear;
    border: 2px solid transparent;
}

#achievements a.card {
    cursor: alias;
}

#achievements .card h5 {
    color: var(--text-color) !important;
    opacity: 0.9;
}

#achievements .card:hover {
    border: 2px solid var(--text-color);
    transition: .3s;
}
#achievements .card:focus {
    border: 2px solid var(--text-color);
    transition: .3s;
}

#achievements .card-text {
    background-color: var(--secondary-color) !important;
    color: var(--text-secondary-color) !important;
}

#achievements img {
    border-radius: 0.7rem;
}

/* contact */

#contact h3 {
    color: var(--text-secondary-color) !important;
}

#contact .btn {
    transition: none;
    transition: opacity 0.3s;
    border-radius: .5rem !important;
    border-color: var(--primary-color) !important;
    background-color: var(--secondary-color) !important;
    color: var(--text-color) !important;
}

#contact .btn:hover {
    opacity: .7;
}

#contact .btn:focus {
    box-shadow: none !important;
}

#contact form .form-control {
    background-color: var(--secondary-color);
    color: var(--text-color);
    border-radius: .7rem;
    border: 1px solid var(--text-secondary-color);
    box-shadow: 0px 8px 56px rgb(15 80 100 / 5%);
}

#contact-form-status {
    position: fixed;
    bottom: 10px;
    right: 10px;
    z-index: 1;
    transform: translate3d(0, 0, 0);
}

#contact-form-status svg {
    height: 18px;
    width: 18px;
}

#contact-form-status button {
    border-radius: 50%;
    border: none;
    background-color: white;
    padding: 0.5rem;
    margin-left: 0.5rem;
    box-shadow: 0px 8px 56px rgb(15 80 100 / 5%);
    font-size: .6rem !important;
}

#contact-form-status .alert {
    border-radius: 0.5rem;
    box-shadow: 0px 8px 56px rgb(15 80 100 / 5%);
    padding: .5rem 1rem;
}


================================================
FILE: static/css/list.css
================================================
#list-page .card {
    background-color: var(--secondary-color) !important;
    box-shadow: 0px 8px 56px rgba(15, 80, 100, 0.16);
    border-radius: .75rem;
    cursor: context-menu;
    overflow: hidden;
    border: none;
}

#list-page .card a {
    text-decoration: none;
}

#list-page .card a h5 {
    color: var(--text-color) !important;
}

#list-page .card:hover {
    transition: all 0.3s ease-out;
    transform: translateY(-7px);
}

#list-page .card-text * {
    background-color: var(--secondary-color) !important;
}

#list-page .post-footer {
    padding: .5rem 1rem;
    background-color: var(--secondary-color) !important;
    color: var(--text-color) !important;
    border-top: 1px solid rgba(15, 80, 100, 0.16);
    opacity: 0.9;
}

#list-page .post-footer a {
    background-color: var(--secondary-color) !important;
    color: var(--text-secondary-color) !important;
    border-color: var(--primary-color) !important;
    transition: none;
}

#list-page .post-footer a:focus {
    box-shadow: none !important;
}

#list-page .post-footer a:hover {
    color: var(--primary-color) !important;
}

#list-page .card > .card-header {
    padding: 0 !important;
    border: none !important;
    background-color: var(--secondary-color) !important;
}

#list-page .card > .card-header .card-img-top {
    width: 100%;
    height: 250px !important;
    background-color: transparent !important;
}

/* pagination */
#list-page ul li a {
    transition: none;
    border-color: var(--secondary-color);
    background-color: var(--secondary-color) !important;
    color: var(--text-color) !important;
}

#list-page ul li a:focus {
    box-shadow: none;
}

#list-page .page-item.active .page-link {
    border-color: var(--primary-color);
    background-color: var(--primary-color) !important;
    color: var(--secondary-color) !important;
}



================================================
FILE: static/css/projects.css
================================================
/* projects */

#projects h3 {
    color: var(--text-secondary-color) !important;
}

#projects a {
    text-decoration: none;
    color: var(--text-link-color) !important;
}

#projects .badge {
    background-color: var(--background-color) !important;
    color: var(--text-color) !important;
    margin: 0 1%;
}

#projects .card {
    background-color: var(--secondary-color) !important;
    box-shadow: 0px 8px 56px rgb(15 80 100 / 16%);
    min-height: 400px;
    overflow: hidden;
    border-radius: 1rem;
    border: none !important;
}

#projects .card:hover {
    box-shadow: 0 0 11px rgb(15 80 100 / 20%);
    transition: transform 0.3s;
    transform: translateY(-7px);
}

#projects .card .card-head {
    -o-object-fit: cover;
    object-fit: cover;
    overflow: hidden;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    border: none !important;
}

#projects .card .card-footer {
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
}

#projects .card:hover .card-img-top {
    transform: scale(1.2);
    transition: all 0.3s ease-out;
}

#projects .card-img-top {
    transition: transform 0.3s;
}

#projects .float-end .btn {
    transition: none;
    border-radius: .5rem !important;
    border-color: var(--primary-color) !important;
}

#projects .float-end .btn:focus {
    box-shadow: none !important;
}


================================================
FILE: static/css/single.css
================================================
#single {
    padding: 60px 0;
    line-height: 1.7em;
    font-size: 17px;
}

#single .title > h1 {
    opacity: 0.8;
    color: var(--text-color) !important;
}

#single .title small {
    opacity: 0.7;
}

#single .featured-image {
    padding: 1rem;
    padding-top: 0;
}

#single .featured-image img {
    border-radius: 1rem;
    box-shadow: 0px 8px 56px rgba(15, 80, 100, 0.16);
    margin-bottom: 1rem;
    background-color: var(--secondary-color);
}

#single .page-content img {
    max-width: 100%;
    border-radius: 1rem;
}

#single .page-content a {
    display: inline-block;
    text-decoration: none;
    color: var(--text-link-color) !important;
}

#single .page-content a::after {
    content: "";
    display: block;
    width: 0px;
    height: 2px;
    bottom: 0.37em;
    background-color: var(--primary-color);
    transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
    opacity: 0.5;
}

#single .page-content a:hover::after, #single .page-content a:focus::after, #single .page-content a:active::after {
    width: 100%;
}

#single .page-content h1, #single .page-content h2, #single .page-content h3, #single .page-content h4, #single .page-content h5, #single .page-content h6 {
    color: var(--text-link-color) !important;
    margin-bottom: 0.7em;
    opacity: 0.9;
}

#single .page-content blockquote {
    padding: 20px 30px;
    border-left: 6px solid var(--primary-color) !important;
    color: var(--text-secondary-color) !important;
    font-weight: 600;
    font-size: 20px;
    margin: 30px 0;
    border-radius: 5px;
}

#single .page-content blockquote, #single .page-content blockquote * {
    background-color: var(--secondary-color) !important;
}

/* table */
#single .page-content table {
    width: auto;
    border-radius: 5px;
    padding: 0.1rem;
    margin-bottom: 1.2em;
    max-width: 100%;
    display: block;
    overflow-x: auto;
    opacity: 0.8;
}

#single .page-content table > tr {
    height: 40px !important;
}

#single .page-content table > thead > tr > th {
    padding: 0.5rem !important;
    background-color: var(--primary-color) !important;
    color: var(--secondary-color) !important;
    border: 1px solid var(--secondary-color);
    opacity: 0.9;
}
#single .page-content table > tbody > tr > td {
    padding: 0.5rem !important;
    border: 1px solid var(--secondary-color);
    background-color: var(--secondary-color) !important;
    opacity: 0.9;
}

#single .page-content table > thead > tr {
    background-color: var(--secondary-color) !important;
    color: var(--secondary-color) !important;
}

/* code */

#single .page-content pre {
  border-radius: 0.7em !important;
  margin: 5px;
  margin-bottom: 2em;
  padding: 2em;
  background-color: var(--secondary-color) !important;
  color: var(--text-secondary-color) !important;
  max-height: 450px;
}

#single .page-content pre > code {
  color: var(--text-secondary-color) !important;
}

#single .page-content code {
  color: var(--primary-color) !important;
}

/* kbd and mark */

#single .page-content kbd {
  color: var(--primary-color) !important;
  background-color: var(--secondary-color) !important;
}

#single .page-content mark {
  color: var(--primary-color) !important;
  background-color: var(--secondary-color) !important;
}

/* list */

#single .page-content ol, #single .page-content ul {
    margin-bottom: 1.2em;
    padding-left: 1.5em;
    list-style-position: inside;
    opacity: 0.9;
}

#single .page-content ol li li, #single .page-content ul li li {
    margin-bottom: 0.5em;
    padding-left: 1.5em;
}

/* sidebar */

#single aside {
    background-color: var(--secondary-color);
    border-radius: .7rem;
    padding: .7rem 1rem;
    margin-bottom: 1em;
}

#single .sticky-sidebar {
  position: sticky;
}

#single .sticky-sidebar ::-webkit-scrollbar {
    height: 0px;
    width: 8px;
}

/* Tags */
#single aside.tags {
    max-height: 35vh;
    overflow: scroll;
}

#single aside.tags h5 {
    margin: .7em 0;
    margin-bottom: 1em;
}


#single aside.tags ul.tags-ul li a {
    padding: 5px 10px;
    margin-bottom: 2px;
    border-radius: 10px;
    background-color: var(--background-color);
    text-decoration: none;
    color: var(--text-link-color) !important;
}

#single aside.tags ul.tags-ul li {
    margin-bottom: 0.8rem;
}

#single aside.tags ul.tags-ul li:hover {
    opacity: 0.8;
}


/*TOC*/
#single aside.toc {
    padding: .7rem 1rem;
    max-height: 50vh;
    overflow: scroll;
}

#single aside.toc h5 {
    margin: .7em 0;
    margin-bottom: 1em;
    color: var(--text-color);
}

#single aside.toc .toc-content ol, #single aside.toc .toc-content ul {
    margin-bottom: 1em;
    padding-left: .5em;
    list-style: none;
    opacity: 0.9;
}

#single aside.toc .toc-content ol li a, #single aside.toc .toc-content ul li a {
    font-size: 16px;
    text-decoration: none;
    color: var(--text-link-color) !important;
    opacity: 0.9;
}

#single aside.toc .toc-content ol li a:hover, #single aside.toc .toc-content ul li a:hover {
    color: var(--primary-color);
    opacity: 1.2;
}

#single aside.toc .toc-content ol li li, #single aside.toc .toc-content ul li li {
    padding-left: .7em;
}

/* Social */

#single aside.social {
    padding: .7rem 1rem;
}

#single aside.social h5 {
    margin: .7em 0;
    margin-bottom: 1em;
    color: var(--text-color);
}

#single aside.social .social-content {
    margin-bottom: 1em;
    opacity: 0.9;
}

#single aside.social .social-content ul {
    margin-bottom: 1em;
    opacity: 0.9;
}

#single aside.social .social-content ul li a {
    border: 1px solid var(--primary-color);
    padding: .7rem;
    color: var(--text-link-color) !important;
    border-radius: 10px;
    overflow: hidden;
}

#single aside.social .social-content ul li {
    margin: .7rem .5rem;
    margin-left: 0;
}

#single aside.social .social-content ul li:hover a {
    opacity: .8;
    color: var(--text-link-color) !important;
}

/* Top scroll */

#single #topScroll {
    display: none;
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 99;
    border: none;
    outline: none;
    background-color: var(--secondary-color);
    color: var(--primary-color);
    cursor: pointer;
    border-radius: 10px;
}

#single #topScroll:hover {
    background-color: var(--primary-color);
    color: var(--secondary-color);
    transition: .5s;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}

/* Singlepage scroll progress start */
.progress {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--background-color);
    z-index: 999;
}

.progress-bar {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: var(--primary-color);
    transition: width .2s;
}

/* Singlepage scroll progress end */


================================================
FILE: static/css/theme.css
================================================
/* light mode */
.light > *{
    background-color: var(--background-color) !important;
    color: var(--text-color) !important;
}

.light > #footer-socialNetworks-github-svg-path{
    fill: none;
}

/* dark mode */
.dark {
    --background-color: var(--background-color-dark) !important;
    --secondary-background-color: var(--secondary-background-color-dark) !important;
    --text-color: var(--text-color-dark) !important;
    --text-secondary-color: var(--text-secondary-color-dark) !important;
    --text-link-color: var(--text-link-color-dark) !important;
    --primary-color: var(--primary-color-dark);
    --secondary-color: var(--secondary-color-dark);
}

.dark #footer-socialNetworks-github-svg-path{
    fill: #FFFFFF;
}

.text-secondary {
    color: var(--text-secondary-color) !important;
}

#theme-toggle:focus {
    outline: 0;
}

#theme-toggle svg {
    height: 18px;
}

button#theme-toggle {
    border: none;
    font-size: 26px;
    margin: auto 4px;
}

body.dark #moon {
    vertical-align: middle;
    display: none;
}

body:not(.dark) #sun {
    display: none;
}



================================================
FILE: static/js/contact.js
================================================
async function handleFormspreeSubmit(event) {
  event.preventDefault();
  var form = document.getElementById("contact-form");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        contactAlert("success", "Thanks for your submission!");
        form.reset();
      } else {
        response.json().then((data) => {
          var errMessage = data.errors;
          for (var i = 0; i < errMessage.length; i++) {
            contactAlert("danger", errMessage[i].message);
          }
        });
      }
    })
    .catch((error) => {
      contactAlert("danger", "Oops! There was a problem submitting your form");
    });
}

function contactAlert(type, message) {
  var contactFormStatus = document.getElementById("contact-form-status");
  var alert = `<div class="alert alert-${type} d-flex align-items-center" role="alert">
                     <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Success:">
                        <use xlink:href="#check-circle-fill" />
                    </svg>
                    <div>${message}</div>
                    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                </div>`;
  contactFormStatus.innerHTML = alert;

  // Remove alert after 3 seconds
  setTimeout(function () {
    contactFormStatus.innerHTML = "";
  }, 3000);
}



================================================
FILE: static/js/readingTime.js
================================================
function readingTime() {
  const text = document.querySelector("article").innerText;
  const wpm = 225;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);

  const timeElement = document.querySelector("span#readingTime");
  timeElement.innerHTML = "<small> | </small>" + time + timeElement.innerHTML;
}
readingTime();



================================================
FILE: static/js/scrollProgressBar.js
================================================
function getScrollPercent() {
  const totalHeight = document.body.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;
  return (scrolled / totalHeight) * 100;
}
const scrollProgressBar = document.getElementById("scroll-progress-bar");

document.onscroll = function () {
  var scrollPercent = Math.round(getScrollPercent());
  scrollProgressBar.style.width = scrollPercent + "%";
  scrollProgressBar.ariaValueNow = scrollPercent;
};



================================================
FILE: static/js/search.js
================================================
function encodeHTML(str) {
  return str.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
}

function isValidUrl(url) {
  try {
    const parsedUrl = new URL(url, window.location.origin);
    return parsedUrl.protocol === "http:" || parsedUrl.protocol === "https:";
  } catch (e) {
    return false;
  }
}

let debounceTimeout;
function searchOnChange(evt) {
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(() => {
    performSearch(evt);
  }, 300); // Debounce delay of 300ms
}

async function performSearch(evt) {
  let searchQuery = evt.target.value.trim().toLowerCase();

  if (searchQuery !== "") {
    const searchButtonEle = document.querySelectorAll("#search");

    if (searchButtonEle.length < 2) {
      console.error("Search button elements missing!");
      return;
    }

    let searchButtonPosition;
    if (window.innerWidth > 768) {
      searchButtonPosition = searchButtonEle[0].getBoundingClientRect();
      document.getElementById("search-content").style.width = "500px";
    } else {
      searchButtonPosition = searchButtonEle[1].getBoundingClientRect();
      document.getElementById("search-content").style.width = "300px";
    }

    document.getElementById("search-content").style.top =
      searchButtonPosition.top + 50 + "px";
    document.getElementById("search-content").style.left =
      searchButtonPosition.left + "px";

    try {
      let response = await fetch("/index.json");
      if (!response.ok) {
        throw new Error("Failed to fetch search data");
      }

      let searchJson = await response.json();
      console.log("Fetched Data:", searchJson); // Debugging log

      let searchResults = searchJson.filter((item) => {
        if (!item || typeof item !== "object") return false;
        if (!item.title && !item.description && !item.content) return false;

        return (
          (item.title && item.title.toLowerCase().includes(searchQuery)) ||
          (item.description && item.description.toLowerCase().includes(searchQuery)) ||
          (item.content && item.content.toLowerCase().includes(searchQuery))
        );
      });

      const searchResultsContainer = document.getElementById("search-results");
      searchResultsContainer.innerHTML = ""; // Clear previous results

      if (searchResults.length > 0) {
        searchResults.forEach((item) => {
          if (!item.permalink || !isValidUrl(item.permalink)) {
            console.warn("Skipping invalid search result:", item);
            return;
          }

          const card = document.createElement("div");
          card.className = "card";

          const link = document.createElement("a");
          link.href = item.permalink; // Safe, since we validated it

          const contentDiv = document.createElement("div");
          contentDiv.className = "p-3";

          const title = document.createElement("h5");
          title.textContent = item.title || "Untitled"; // Use textContent to prevent XSS

          const description = document.createElement("div");
          description.textContent = item.description || "No description available"; // Safe

          contentDiv.appendChild(title);
          contentDiv.appendChild(description);
          link.appendChild(contentDiv);
          card.appendChild(link);
          searchResultsContainer.appendChild(card);
        });
      } else {
        const noResultsMessage = document.createElement("p");
        noResultsMessage.className = "text-center py-3";
        noResultsMessage.textContent = `No results found for "${searchQuery}"`;
        searchResultsContainer.appendChild(noResultsMessage);
      }

      document.getElementById("search-content").style.display = "block";
    } catch (error) {
      console.error("Error fetching search data:", error);
    }
  } else {
    document.getElementById("search-content").style.display = "none";
    document.getElementById("search-results").innerHTML = "";
  }
}



================================================
FILE: .github/FUNDING.yml
================================================
# These are supported funding model platforms

github: gurusabarish # Replace with up to 4 GitHub Sponsors-enabled usernames e.g., [user1, user2]
patreon: # Replace with a single Patreon username
open_collective: # Replace with a single Open Collective username
ko_fi: # Replace with a single Ko-fi username
tidelift: # Replace with a single Tidelift platform-name/package-name e.g., npm/babel
community_bridge: # Replace with a single Community Bridge project-name e.g., cloud-foundry
liberapay: # Replace with a single Liberapay username
issuehunt: # Replace with a single IssueHunt username
otechie: # Replace with a single Otechie username
custom: ['https://www.buymeacoffee.com/gurusabarish'] # Replace with up to 4 custom sponsorship URLs e.g., ['link1', 'link2']



================================================
FILE: .github/stale.yml
================================================
# Number of days of inactivity before an issue becomes stale
daysUntilStale: 120
# Number of days of inactivity before a stale issue is closed
daysUntilClose: 30
# Issues with these labels will never be considered stale
exemptLabels:
  - Keep
# Label to use when marking an issue as stale
staleLabel: Stale
# Comment to post when marking an issue as stale. Set to `false` to disable
markComment: >
  This issue has been automatically marked as stale because it has not had
  recent activity.
  If this is a **bug** and you can still reproduce this error on the <code>master</code> branch, please reply with all of the information you have about it in order to keep the issue open.
  If this is a **feature request**, and you feel that it is still relevant and valuable, please tell us why.
  This issue will automatically be closed in the near future if no further activity occurs. Thank you for all your contributions.
  
# Comment to post when closing a stale issue. Set to `false` to disable
closeComment: false



================================================
FILE: .github/ISSUE_TEMPLATE/bug_report.md
================================================
---
name: Bug report
about: Create a report to help us improve
title: ''
labels: ''
assignees: ''

---

**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected behavior**
A clear and concise description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Desktop (please complete the following information):**
 - OS: [e.g. iOS]
 - Browser [e.g. chrome, safari]
 - Version [e.g. 22]

**Smartphone (please complete the following information):**
 - Device: [e.g. iPhone6]
 - OS: [e.g. iOS8.1]
 - Browser [e.g. stock browser, safari]
 - Version [e.g. 22]

**Additional context**
Add any other context about the problem here.



================================================
FILE: .github/ISSUE_TEMPLATE/custom.md
================================================
---
name: Custom issue template
about: Describe this issue template's purpose here.
title: ''
labels: ''
assignees: ''

---





================================================
FILE: .github/ISSUE_TEMPLATE/feature_request.md
================================================
---
name: Feature request
about: Suggest an idea for this project
title: ''
labels: ''
assignees: ''

---

**Is your feature request related to a problem? Please describe.**
A clear and concise description of what the problem is. Ex. I'm always frustrated when [...]

**Describe the solution you'd like**
A clear and concise description of what you want to happen.

**Describe alternatives you've considered**
A clear and concise description of any alternative solutions or features you've considered.

**Additional context**
Add any other context or screenshots about the feature request here.


