# Altera Site Redesign

## Quick Start

### Open the project locally

1. Install dependencies once:
   `npm install`
2. Start the site for editing:
   `npm start`
3. Open:
   `http://127.0.0.1:4321/`

### Open the built version

1. Build the site:
   `npm run build`
2. Start the local preview server:
   `npm run serve`
3. Open:
   `http://127.0.0.1:4321/`

### Save changes to GitHub

1. `git add .`
2. `git commit -m "Describe your changes"`
3. `git push origin main`

## Final Task List

- Build a new multilingual marketing website for `Altera`.
- Use a light UI with blue and red accents.
- Reuse old-site images by category where quality is good enough.
- Keep the old site online during redevelopment.
- Prepare the project for deployment to `zone.ee`.

## Registration Form

- `fullName`
- `personalCode`
- `phone`
- `email`
- `category`
- `studyLanguage`
- `courseStartDate`
- `comment`

## Image Migration

- Use images from the old site as the primary visual source.
- Prefer real Altera photos over stock images.
- Organize reused assets into:
  - `hero`
  - `categories/am`
  - `categories/a`
  - `categories/b`
  - `categories/be`
  - `team`
  - `testimonials`
  - `logo`

## MVP

- Home
- Prices
- Contact
- FAQ
- Category pages for `AM`, `A`, `B`, `BE`
- `EST`, `RU`, `ENG`
- Student portal button
- Registration form
- SEO foundation
