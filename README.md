# LeadBold Institutional Platform

A comprehensive leadership development and consulting platform built with modern React, TypeScript, and Vite.

## 🚀 Features

- **Executive Education**: Professional leadership training programs
- **Strategic Consulting**: Advisory services for high-impact organizations  
- **Leadership Summits**: Continental transformation convenings
- **Thought Leadership**: Research and policy briefs
- **AI-Powered**: Gemini integration for intelligent search and content generation
- **Modern Tech Stack**: React 19, TypeScript, Vite, Supabase

## 🛠 Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Database**: Supabase (PostgreSQL)
- **AI Integration**: Google Gemini API
- **Testing**: Vitest, React Testing Library
- **Linting**: ESLint, Prettier
- **CI/CD**: GitHub Actions

## 📋 Prerequisites

- Node.js >= 18.0.0
- npm >= 8.0.0 (or yarn/pnpm)

## 🚀 Quick Start

### 1. Clone the repository

```bash
git clone <repository-url>
cd leadbold-institutional-platform
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment Setup

Copy the environment example file and configure your environment variables:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration:

```env
# Gemini AI Configuration
GEMINI_API_KEY=your_gemini_api_key_here

# Supabase Configuration
SUPABASE_URL=https://ytdmrrnpeebpaftcbfte.supabase.co
SUPABASE_ANON_KEY=your_supabase_anon_key_here

# Application Configuration
NODE_ENV=development
PORT=3000
```

### 4. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
src/
├── components/          # React components
├── lib/                # Utility libraries (Supabase, etc.)
├── services/           # API services and external integrations
├── constants/          # Application constants and data
├── types/              # TypeScript type definitions
├── test/               # Test files
└── App.tsx             # Main application component

.github/
└── workflows/          # CI/CD pipelines

public/                 # Static assets
```

## 🧪 Testing

Run the test suite:

```bash
# Run all tests
npm test

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage
```

## 🔧 Development Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format

# Type checking
npm run typecheck
```

## 🏗️ Build & Deployment

### Build for Production

```bash
npm run build
```

This will create an optimized production build in the `dist/` directory.

### Docker Deployment

```bash
# Build Docker image
docker build -t leadbold-platform .

# Run container
docker run -p 3000:3000 leadbold-platform
```

### Environment Variables for Production

Ensure all required environment variables are set in your production environment:

- `GEMINI_API_KEY`: Google Gemini API key
- `SUPABASE_URL`: Supabase project URL
- `SUPABASE_ANON_KEY`: Supabase anonymous key

## 📚 API Documentation

### Supabase Integration

The application uses Supabase for data persistence. Key tables:

- `courses`: Course information and metadata
- `summits`: Summit events and details
- `personnel`: Faculty and staff information
- `insights`: Articles and thought leadership content

### Gemini AI Integration

The platform integrates with Google Gemini for:

- Intelligent search across content categories
- Personalized user greetings
- Institutional image generation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:

- Create an issue in the repository
- Contact the development team
- Check the documentation

## 🔗 Related Projects

- [LeadBold Website](https://leadbold.com)
- [LeadBold Consulting](https://leadbold.com/consulting)
- [LeadBold Summits](https://leadbold.com/summits)

---

**Built with ❤️ by the LeadBold Development Team**
