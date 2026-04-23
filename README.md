# Sheki City FC — Official Web Platform

Official website for Sheki City football club. Built by the frontend team at Azintelecom.

## Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 + TypeScript | UI framework |
| Vite | Build tool & dev server |
| Redux Toolkit | Global UI state (loader, menu, auth, locale) |
| React Query | Server state & data fetching |
| Ant Design 5 | UI component library |
| react-jss | Component-level styling |
| React Router v6 | Client-side routing |
| Axios | HTTP client with interceptors |

## Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/your-org/sheki-city-web.git
cd sheki-city-web

# 2. Install dependencies
npm install

# 3. Set up environment
cp .env.example .env
# Fill in your API URL in .env

# 4. Start dev server
npm run dev
# Runs on http://localhost:3000
```

## Project Structure

```
src/
├── assets/          # Fonts, images, styles, translations
├── core/
│   ├── configs/     # axios, api endpoints, theme, app config
│   ├── helpers/     # debounce, format-date, token utils
│   ├── layouts/     # Public layout (navbar, side-menu, footer)
│   └── shared/      # Reusable components (Card, Modal, Pagination...)
├── pages/           # One folder per page/feature
├── router/          # Route definitions and protected route guards
└── store/           # Redux store, reducer, types
```

## Branch Convention

```
main        → production only, no direct pushes
dev         → integration branch, PR target
feature/[your-name]-[feature-name]  → your work
```

**Always branch from `dev`, open PRs into `dev`.**

## Pages

| Route | Page | Status |
|-------|------|--------|
| `/` | Home | 🔲 |
| `/klub-haqqinda` | About the club | 🔲 |
| `/klub-tarixi` | Club history | 🔲 |
| `/nailiyyetler` | Achievements | 🔲 |
| `/oyuncu-profili` | Player profiles | 🔲 |
| `/oyunlar` | Match schedule & results | 🔲 |
| `/oyunlar-arxivi` | Match video archive | 🔲 |
| `/canli-oyunlar` | Live stream | 🔲 |
| `/xeberler` | News | 🔲 |
| `/mehsullar` | Merchandise shop | 🔲 |
| `/iane` | Donate | 🔲 |
| `/forum` | Fan forum | 🔲 |
| `/vakansiyalar` | Job vacancies | 🔲 |
