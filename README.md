# BM Air Pilot Quiz

A professional, mobile-first Next.js application for the BM Air Pilot Program questionnaire.

## Features

- **Mobile-first design** with Tailwind CSS
- **5-question quiz flow** with progress tracking
- **Airtable integration** for lead capture and scan logging
- **QR code generation** and printable stickers
- **Vercel Analytics** integration
- **TypeScript** throughout

## Tech Stack

- **Next.js 15.4.6** (App Router)
- **React 19.1.0**
- **Tailwind CSS v4**
- **TypeScript**
- **Airtable API**

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build & Deploy

```bash
npm run build
npm start
```

Production deployment ready - Vercel auto-deploys on push to main

Latest update: Full quiz flow with Airtable integration and TypeScript compliance

Force deployment: Adding this line to trigger Vercel rebuild

**Latest fix: Next.js 15 route handler compatibility update**

**Buffer type fixes: PNG QR route now uses proper type assertions**
