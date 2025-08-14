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
│   │   ├── page.tsx       # Quiz overview page
│   │   └── start/         # Quiz start route
│   │       └── page.tsx   # Quiz start page
│   └── health/            # Health check API
│       └── route.ts       # Health endpoint
├── globals.css            # Global styles with Tailwind
└── types/                 # TypeScript type definitions
```

## Available Routes

- **`/`** - Home page with welcome message and CTA
- **`/quiz`** - Quiz overview page with "coming soon" message
- **`/quiz/start`** - Quiz start page (placeholder)
- **`/health`** - Health check API endpoint

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
# Add any environment variables here
NEXT_PUBLIC_APP_VERSION=0.1.0
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub/GitLab
2. Connect your repository to Vercel
3. Deploy automatically on every push

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
