# Vado's portfolio

A small, responsive multi-page portfolio made with static HTML, CSS, and JavaScript.

## Pages

- `index.html` — Introduction, portrait, selected projects, and contact call to action.
- `pages/about.html` — Personal story, education, community, and student-council documentation.
- `pages/work.html` — Projects, documentation contribution, and achievements.
- `pages/interests.html` — Guitar, music, gaming, and other personal interests.
- `css/style.css` — Shared visual design, responsive layouts, and reduced-motion rules.
- `js/script.js` — Mobile navigation and the home-page idle animation.
- `images/website-pfp.jpg` — Portrait shown in the home-page hero.

## Personalize the content

Search the HTML files in the repository root and `pages/` folder for `ADD`, `Add`, `to add`, or `Make this yours` to find content that needs your details. In particular:

- **About:** Add real biographical details, school or college background, and the story of your student-council documentation contribution. The current prompts are scaffolding, not claims about your life.
- **Work:** Expand each project with your specific role, process, tools, outcome, and limitations. Add only achievements you actually earned.
- **Interests:** Add guitar details, favorite music, personal interests, gaming stats, and your actual profile URLs.
- **Links:** Replace the disabled `href="#"` placeholders for YouTube, gaming profiles, and any external achievements portfolio. Remove `aria-disabled="true"` and `data-placeholder-link` once a real URL is in place. Add your email address to the contact area on `index.html`.
- **Socials:** The LinkedIn, Instagram, and TikTok URLs are already populated; verify they are the accounts you want to publish.
- **Images:** The home page uses `images/website-pfp.jpg`. Replace it with an image you have permission to use if desired. Replace other `.image-slot` contents with images you have permission to use. For example:

  ```html
  <figure class="image-slot">
      <img src="../images/my-photo.webp" alt="Describe what is visible in this photo">
      <figcaption>A short caption, if useful.</figcaption>
  </figure>
  ```

  Store images in the `images/` folder, use meaningful alternative text, and avoid publishing identifiable photos of other people without permission. Unfilled image slots are deliberately styled placeholders.

## Run locally

Open the root `index.html` directly, or serve the folder with a local static server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

The font files load from Google Fonts, so the intended typography needs an internet connection. Page-transition effects use the browser's View Transitions support where available; the site still navigates normally in other browsers. The home illustration only animates after a short idle period and is disabled for visitors who prefer reduced motion.
