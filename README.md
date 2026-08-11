# News Feed

A news search UI on Next.js. Type a query, load articles from [NewsAPI](https://newsapi.org/), and browse a featured piece plus a card list. Search state is handled with Zustand.

## Features

- Keyword search
- Main / featured article block
- Article cards
- Last query kept with Zustand + `localStorage`

## Stack

- Next.js 14
- React 18
- TypeScript
- Zustand
- NewsAPI

## Run locally

Create `.env.local`:

```env
NEXT_PUBLIC_NEWS_API_KEY=your_newsapi_key
```

Then:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).
