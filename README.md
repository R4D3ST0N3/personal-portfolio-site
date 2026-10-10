# Vado's portfolio

A small, responsive multi-page portfolio made with static HTML, CSS, and JavaScript.

## Pages

- `index.html` — Introduction, portrait, selected projects, and contact call to action.
- `pages/about.html` — Personal story, education, community, and student-council documentation.
- `pages/work.html` — Project notebooks and a community documentation contribution.
- `pages/interests.html` — Guitar, music, gaming, and other personal interests.
- `css/style.css` — Shared visual design, responsive layouts, and reduced-motion rules.
- `js/script.js` — Mobile navigation and disabled-placeholder link handling.
- `images/` — Owner portrait, notebook-output charts, and locally stored interest photos. See [image credits](images/credits.md) for photo sources and licenses.

## Personalize the content

The About, Work, and Interests pages now use details from the owner's profile notes. They intentionally present a public-safe summary: private identifiers, exact school and location, birth date, and detailed grades are not included. The profile notes in `My_Profile/` are a separate source and should be stored privately if they contain details you do not want public; static files in a published repository may be accessible even when they are not linked from a page.

- **About:** The page summarizes interests, study goals, strengths, growth areas, languages, and collaboration experience.
- **Work:** Add verified personal roles, process, tools, findings, outcomes, and limitations to the notebook case studies. Keep claims proportionate to what the notebooks demonstrate.
- **Interests:** The page includes the listed music, guitar, sports, games, anime, language learning, and creative interests. Remove or revise anything that is no longer accurate.
- **Links:** The LinkedIn, Instagram, and TikTok URLs are populated; confirm they are the intended public accounts. The contact button uses LinkedIn. Avoid adding private account links or gaming details unless you want them public.
- **Images:** The home and About pages use `images/website-pfp.jpg`. Project charts are copied from the linked notebook outputs; the three interest photos are stored locally with source and license credits in `images/credits.md`. If replacing or adding images, use meaningful alternative text and avoid publishing identifiable photos of other people without permission. For example:

  ```html
  <figure class="image-slot">
      <img src="../images/my-photo.webp" alt="Describe what is visible in this photo">
      <figcaption>A short caption, if useful.</figcaption>
  </figure>
  ```

  Store images in the `images/` folder and use meaningful alternative text.

## Run locally

Open the root `index.html` directly, or serve the folder with a local static server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

The font files load from Google Fonts, so the intended typography needs an internet connection. Supported browsers use View Transitions for page changes; other browsers navigate normally. The site respects reduced-motion preferences for transitions and smooth scrolling.
