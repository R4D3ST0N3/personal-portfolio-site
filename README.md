# Personal Portfolio Site

A responsive, single-page portfolio for Vado. It highlights personal information, experience, achievements, projects, contact details, and social media accounts.

## Files

- `index.html` contains the page structure and all portfolio content.
- `style.css` contains the visual design, layout, responsive behavior, and typography.
- `script.js` handles smooth scrolling, the mobile navigation menu, and the demo contact form.

## Add your information

Edit the marked content directly in `index.html`:

- **About me:** Update the text inside `#about` and the three quick facts.
- **Experience:** Add or duplicate a `.timeline-item` inside `#experience`. Include your dates, role, organization, responsibilities, and results.
- **Achievements:** Add or duplicate an `.achievement-card` inside `#achievements` for awards, certifications, competitions, or milestones.
- **Projects:** Update the three `.project-card` elements inside `#projects` with a title, description, and project link.
- **Social media:** Replace the URLs in the `#social` links near the bottom of the page. Add another link using the same format for any additional account.
- **Profile details:** Update the name, page title, description, footer year, and contact copy to match your personal brand.

## Run locally

This is a static website, so no build step is required. Open `index.html` in a browser, or serve the folder with any local static server.

For example, with Python installed:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Notes

- The contact form currently shows a confirmation message and does not send email. Connect it to a form service or backend before publishing.
- The page loads its fonts from Google Fonts, so an internet connection is needed for the intended typography.
