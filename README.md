# News Feed (Next.js)

News search UI built with Next.js. Users enter a query; articles are loaded from [NewsAPI](https://newsapi.org/). Client state uses Zustand.

> Status: **Learning / personal project**.  
> **Security:** never commit API keys. Use environment variables only.

## Features

- Search news by keyword
- Featured / main article view
- Article cards list
- Query state via Zustand (with localStorage for last query)

## Stack

- Next.js 14
- React 18
- TypeScript
- Zustand
- NewsAPI (`/v2/everything`)

## Setup

1. Get an API key from [newsapi.org](https://newsapi.org/).

2. Create `.env.local` (do not commit this file):

```env
NEXT_PUBLIC_NEWS_API_KEY=your_key_here
```

3. In the fetch URL, read the key from `process.env.NEXT_PUBLIC_NEWS_API_KEY` (remove any hardcoded key from source).

4. Run:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Important

If a key was ever committed publicly, **revoke it** in the NewsAPI dashboard and generate a new one. Prefer making the repo private until the leak is cleaned up.
