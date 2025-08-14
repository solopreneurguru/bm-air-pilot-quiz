# BM Air Pilot Quiz

A professional pilot assessment and training platform built with Next.js 14+, React 19, and Tailwind CSS.

## Features

- 🚁 **Professional Design**: Clean, mobile-first interface optimized for aviation professionals
- 📱 **Mobile-First**: Responsive design that works perfectly on all devices
- ⚡ **Performance**: Built with Next.js 15 and React 19 for optimal performance
- 🎨 **Modern UI**: Beautiful Tailwind CSS design with professional color scheme
- 🔒 **Type Safe**: Full TypeScript support with path aliases
- 📊 **Health Monitoring**: Built-in health check endpoint

## Tech Stack

- **Framework**: Next.js 15.4.6 (App Router)
- **React**: 19.1.0
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Fonts**: Geist Sans & Geist Mono (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd bm-air-pilot-quiz
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Development Commands

```bash
# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

## Project Structure

```
src/
├── app/                    # App Router directory
│   ├── layout.tsx         # Root layout with header/footer
│   ├── page.tsx           # Home page
│   ├── quiz/              # Quiz routes
│   │   ├── layout.tsx     # Quiz layout with progress bar
│   │   ├── page.tsx       # Quiz overview page
│   │   ├── start/         # Quiz start route
│   │   │   └── page.tsx   # Q1: Equipment selection
│   │   ├── q2/            # Q2: Air quality concerns
│   │   │   └── page.tsx   # Q2 page
│   │   ├── q3/            # Q3: Equipment quantity
│   │   │   └── page.tsx   # Q3 page
│   │   ├── q4/            # Q4: Timeline
│   │   │   └── page.tsx   # Q4 page
│   │   ├── q5/            # Q5: Contact preferences
│   │   │   └── page.tsx   # Q5 page
│   │   ├── contact/       # Contact collection
│   │   │   └── page.tsx   # Contact form
│   │   └── thank-you/     # Thank you page
│   │       └── page.tsx   # Success confirmation
│   ├── api/               # API routes
│   │   ├── submitQuiz/    # Quiz submission to Airtable
│   │   │   └── route.ts   # POST endpoint
│   │   ├── env-check/     # Environment variable check
│   │   │   └── route.ts   # GET endpoint
│   │   └── health/        # Health check
│   │       └── route.ts   # GET endpoint
│   └── health/            # Health check API
│       └── route.ts       # Health endpoint
├── context/               # React context
│   └── quiz.tsx           # Quiz state management
├── globals.css            # Global styles with Tailwind
└── types/                 # TypeScript type definitions
```

## Available Routes

- **`/`** - Home page with welcome message and CTA
- **`/quiz`** - Quiz overview page with "coming soon" message
- **`/quiz/start`** - Q1: Equipment selection (Excavators, Wheel Loaders, Bulldozers, Other)
- **`/quiz/q2`** - Q2: Air quality concerns (Cab dust, Diesel emissions, Silica, All of the above)
- **`/quiz/q3`** - Q3: Equipment quantity (1 machine, 2–3 machines, 4+ machines)
- **`/quiz/q4`** - Q4: Timeline (This quarter, Next quarter, Exploring options)
- **`/quiz/q5`** - Q5: Contact preferences (On-site demo, Remote intro, Spec sheet)
- **`/quiz/contact`** - Contact collection form (Name, Phone, Email)
- **`/quiz/thank-you`** - Success confirmation page
- **`/health`** - Health check API endpoint
- **`/api/env-check`** - Environment variable status
- **`/api/submitQuiz`** - Quiz submission to Airtable

## API Endpoints

### Health Check

**GET** `/health`

Returns application status and version information.

```json
{
  "ok": true,
  "version": "0.1.0",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "status": "healthy"
}
```

### Environment Check

**GET** `/api/env-check`

Returns environment variable configuration status.

```json
{
  "hasKey": true,
  "base": "app2En7eWbTDePsDw",
  "tableName": "Leads",
  "tableId": null,
  "tablePath": "Leads"
}
```

### Quiz Submission

**POST** `/api/submitQuiz`

Submits quiz answers and contact information to Airtable.

**Request Body:**
```json
{
  "answers": {
    "Q1": "Excavators",
    "Q2": "Cab dust",
    "Q3": "2–3 machines",
    "Q4": "Next quarter",
    "Q5": "Yes, on-site demo"
  },
  "contact": {
    "name": "John Doe",
    "phone": "555-1234",
    "email": "john@example.com"
  },
  "source": "qr-mailer-2025"
}
```

**Response:**
```json
{
  "ok": true
}
```

## Building for Production

### Build the Application

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

### Start Production Server

```bash
npm run start
```

### Environment Variables

Create a `.env.local` file for local development:

```env
# Airtable Configuration
AIRTABLE_API_KEY=your_personal_access_token_here
AIRTABLE_BASE_ID=app2En7eWbTDePsDw
AIRTABLE_TABLE_NAME=Leads
# Optional: Use table ID instead of name for more reliable identification
# AIRTABLE_TABLE_ID=tblXXXXXXXXXXXXXX
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub/GitLab
2. Connect your repository to Vercel
3. Deploy automatically on every push
4. Set environment variables in Vercel dashboard

### Other Platforms

The application can be deployed to any platform that supports Node.js:

- **Netlify**: Use `npm run build` and set build output to `.next`
- **Railway**: Automatic deployment from GitHub
- **Docker**: Build and run in containers

### Docker Deployment

```dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

## Development Guidelines

### Code Style

- Use TypeScript for all new files
- Follow Next.js 13+ App Router conventions
- Use Tailwind CSS for styling
- Implement mobile-first responsive design

### Component Structure

- Keep components small and focused
- Use semantic HTML elements
- Ensure accessibility with proper ARIA labels
- Test on multiple screen sizes

### Performance

- Use Next.js Image component for images
- Implement proper loading states
- Minimize bundle size with code splitting
- Use React.memo for expensive components

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and proprietary.

## Support

For questions or support, please contact the development team.

---

**Built with ❤️ using Next.js, React, and Tailwind CSS**

**Production deployment ready - Vercel auto-deploys on push to main**

**Latest update: Full quiz flow with Airtable integration and TypeScript compliance**
