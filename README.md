# Altera Site Redesign

## Quick Start

### Open the project locally

Fastest option on Windows:
`start-local.cmd`

1. Install dependencies once:
   `npm install`
2. Start the site for editing:
   `npm start`
3. Open:
   `http://127.0.0.1:4321/`

Windows shortcut:

- Double-click `start-local.cmd`
- It starts the local server and opens the site in your browser

### Open the built version

1. Build the site:
   `npm run build`
2. Start the production server:
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

## Telegram Notifications

The registration form now submits to `/api/registration` and sends new leads to a Telegram bot.

Required environment variables:

- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`

Example local setup:

1. Copy `.env.example` to `.env`
2. Add your real Telegram bot token and target chat ID
3. Run `npm start` for local testing

Important:

- The bot token stays on the server and must never be exposed in browser-side code.
- Production deployment now needs a Node-compatible Astro runtime because `/api/registration` is server-rendered.

## Gmail SMTP Notifications

The same `/api/registration` endpoint can also send registration emails through Gmail SMTP with an app password.

Required environment variables for Gmail SMTP:

- `SMTP_HOST=smtp.gmail.com`
- `SMTP_PORT=465`
- `SMTP_SECURE=true`
- `SMTP_USER=garageautokool@gmail.com`
- `SMTP_PASS=your-16-character-gmail-app-password`
- `SMTP_TO=garageautokool@gmail.com`

Optional:

- `SMTP_FROM="Altera Autokool <garageautokool@gmail.com>"`

Notes:

- Gmail SMTP uses the Google account email as the username.
- `SMTP_PASS` must be the Gmail app password, not the normal Google password.
- The form now supports Telegram, Gmail SMTP, or both at the same time.

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
