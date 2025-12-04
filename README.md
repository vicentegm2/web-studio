# 🎨 Web Studio - Professional Portfolio Platform

A modern, elegant and fully responsive portfolio website built with Next.js 15, React 18, and Tailwind CSS. Designed to showcase professional skills, experience, projects, and certifications with a clean and sophisticated interface.

## ✨ Features

### 🎯 Core Functionality
- **Profile Display**: Professional presentation with optimized profile photo and bio
- **Tech Stack Showcase**: Visual representation of technologies and skills with icons
- **Experience Timeline**: Elegant timeline displaying professional experience and volunteer work
- **Projects Gallery**: Showcase of featured projects with descriptions and links
- **Certifications Section**: Display professional certifications and achievements
- **Contact Form**: Integrated contact functionality
- **CV Download**: Direct download button for PDF resume
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)

### 🎨 Design System
- **Primary Color**: Dark Navy Blue (#243A73) - Professional and corporate
- **Background**: Light Gray (#F0F4F8) - Clean and elegant
- **Accent Color**: Muted Purple (#635985) - Modern touch
- **Typography**: 
  - Headlines: Space Grotesk
  - Body: Inter
- **UI Components**: 35+ Radix UI components for accessibility
- **Animations**: Smooth transitions with Framer Motion
- **Dark Mode**: Theme switcher with next-themes

### 🚀 Technical Features
- **Next.js 15**: Latest React framework with Turbopack for fast development
- **TypeScript**: Full type safety
- **Tailwind CSS**: Utility-first styling
- **Firebase Integration**: Backend and hosting support
- **Google Genkit AI**: AI-powered features integration
- **SEO Optimized**: Meta tags, OpenGraph, and sitemap ready
- **Form Validation**: React Hook Form with Zod schemas

## 📦 Tech Stack

### Frontend
- **Framework**: Next.js 15.3.3 (React 18.3.1)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4
- **UI Library**: Radix UI
- **Icons**: Lucide React
- **Animations**: Framer Motion 11.5
- **Forms**: React Hook Form + Zod validation

### Backend & Services
- **Firebase**: Authentication, database, and hosting
- **Google Genkit AI**: AI capabilities integration
- **API Routes**: Next.js API endpoints

### Developer Tools
- **Package Manager**: npm/pnpm
- **Linting**: ESLint
- **Type Checking**: TypeScript compiler
- **Hot Reload**: Turbopack

## 🛠️ Installation

### Prerequisites
- Node.js 20+ 
- npm or pnpm

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/vicentegm2/web-studio.git
cd web-studio
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment Variables**
Create a `.env.local` file in the root directory with your Firebase and API configurations:
```env
# Add your environment variables here
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
# ... other Firebase config
```

4. **Run development server**
```bash
npm run dev
```

The application will be available at `http://localhost:9002`

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with Turbopack on port 9002 |
| `npm run build` | Build production bundle |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript type checking |
| `npm run genkit:dev` | Start Genkit AI development mode |
| `npm run genkit:watch` | Start Genkit AI with hot reload |

## 📁 Project Structure

```
web-studio/
├── src/
│   ├── app/                  # Next.js app directory
│   │   ├── api/             # API routes
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   ├── components/          # React components
│   │   ├── ui/             # Reusable UI components (35+)
│   │   ├── icons/          # Icon components
│   │   ├── header.tsx      # Navigation header
│   │   ├── footer.tsx      # Site footer
│   │   ├── profile-section.tsx
│   │   ├── tech-stack-section.tsx
│   │   ├── timeline-section.tsx
│   │   ├── projects-section.tsx
│   │   ├── certifications-section.tsx
│   │   └── contact-section.tsx
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions and configs
│   └── ai/                 # Genkit AI configuration
├── public/                 # Static assets
├── docs/                   # Documentation
│   └── blueprint.md       # Project blueprint
├── next.config.ts         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## 🎨 UI Components

The project includes 35+ professionally styled components:

- **Layout**: Card, Separator, Scroll Area, Sheet
- **Forms**: Input, Textarea, Select, Checkbox, Radio Group, Switch, Slider
- **Navigation**: Dropdown Menu, Menubar, Tabs
- **Feedback**: Alert, Toast, Progress, Skeleton
- **Overlay**: Dialog, Alert Dialog, Popover, Tooltip
- **Data Display**: Avatar, Badge, Table, Accordion, Collapsible
- **Media**: Carousel, Chart
- **Special**: Calendar, Theme Switcher

## 🌐 Deployment

### Firebase Hosting

The project is configured for Firebase deployment:

```bash
# Build the project
npm run build

# Deploy to Firebase
firebase deploy
```

## 🔧 Configuration

### Image Optimization
Configured remote image patterns for:
- placehold.co
- images.unsplash.com
- picsum.photos
- storage.googleapis.com

### TypeScript
- Strict mode enabled
- Build errors ignored for flexibility (configure as needed)

## 📝 Customization

1. **Colors**: Edit `tailwind.config.ts` to change the color scheme
2. **Content**: Update component files in `src/components/`
3. **Profile Data**: Modify data in respective section components
4. **Fonts**: Configure in `src/app/layout.tsx`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is private and proprietary.

## 👨‍💻 Author

**Vicente Gómez**
- GitHub: [@vicentegm2](https://github.com/vicentegm2)
