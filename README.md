# Backend Developer Portfolio

A modern, responsive portfolio website built with **Vite + React + TypeScript** showcasing backend development expertise with 1.5+ years of experience in Node.js ecosystem.

## 🚀 Live Demo

- **Production**: [Your Vercel/Netlify URL]
- **Development**: `npm run dev`

## 🛠️ Tech Stack

- **Framework**: Vite + React 18 + TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel/Netlify

## ✨ Features

- **Responsive Design**: Mobile-first approach with clean, minimal UI
- **Dark/Light Mode**: Toggle with system preference detection
- **Smooth Animations**: Framer Motion for enhanced UX
- **Fast Performance**: Optimized with Vite bundler
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Modern UI**: TailwindCSS with custom color scheme

## 📱 Sections

### 🏠 Home (Hero)

- Name: **Ajay Kumawat**
- Title: **Backend Developer — Node.js**
- Pitch: Building scalable backend systems and APIs with 1.5+ years of experience
- CTAs: View Resume | Contact Me
- Social Links: GitHub, LinkedIn, Email

### 👨‍💻 About

- Professional bio emphasizing backend expertise
- Years of experience: **1.5+**
- Projects completed: **10+**
- Professional headshot placeholder

### 🎯 Skills

Backend-focused skill visualization with progress bars:

#### Backend Technologies

- **Node.js** (90%)
- **Express.js** (85%)
- **NestJS** (75%)
- **TypeScript** (80%)
- **JavaScript** (90%)
- **Python** (70%)

#### Databases & Storage

- **MongoDB** (85%)
- **PostgreSQL** (80%)
- **MySQL** (75%)
- **Redis** (70%)
- **Mongoose** (85%)

#### Frontend Skills

- **React** (80%)
- **Angular** (75%)
- **HTML/CSS** (85%)
- **TailwindCSS** (80%)

#### DevOps & Tools

- **Docker** (75%)
- **Git** (90%)
- **AWS** (70%)
- **Linux** (75%)
- **Nginx** (70%)

### 🚀 Featured Projects

#### 1. E-Commerce REST API

**Problem → Solution**: Built scalable e-commerce backend with payment processing

- **Tech**: Node.js, Express, MongoDB, JWT, Stripe
- **Features**:
  - RESTful API design with proper status codes
  - JWT-based authentication & authorization
  - MongoDB aggregation for analytics
  - Stripe payment integration
  - Redis caching for performance
- **Links**: [GitHub](https://github.com/ajay-kumawat1/ecommerce-api) | [Demo](https://ecommerce-api-demo.herokuapp.com)

#### 2. Task Management System

**Problem → Solution**: Full-stack task management with real-time collaboration

- **Tech**: Node.js, Socket.io, PostgreSQL, React, TypeScript
- **Features**:
  - Real-time collaboration with WebSockets
  - PostgreSQL with complex queries
  - Role-based access control
  - File upload & attachment system
  - Email notifications
- **Links**: [GitHub](https://github.com/ajay-kumawat1/task-manager) | [Demo](https://task-manager-demo.vercel.app)

#### 3. Microservices Architecture

**Problem → Solution**: Distributed system with Docker containers and API Gateway

- **Tech**: Node.js, Docker, Nginx, Redis, MongoDB
- **Features**:
  - API Gateway with rate limiting
  - Service-to-service communication
  - Docker containerization
  - Health checks & monitoring
  - Horizontal scaling capabilities
- **Links**: [GitHub](https://github.com/ajay-kumawat1/microservices-demo) | [Demo](https://microservices-demo.example.com)

### 💼 Experience

#### Backend Developer @ TechCorp Solutions

**Jan 2023 - Present** | Mumbai, India | Full-time

- Developed and maintained 5+ RESTful APIs serving 10K+ daily active users
- Optimized database queries reducing response time by 40% and improving user experience
- Implemented microservices architecture that improved system scalability by 60%
- **Tech**: Node.js, Express, MongoDB, Docker, AWS

#### Junior Full Stack Developer @ StartupHub

**Jun 2022 - Dec 2022** | Bangalore, India | Full-time

- Built end-to-end features for web applications using Node.js and React
- Collaborated with cross-functional teams to deliver 3 major product releases
- Implemented authentication system using JWT and OAuth2.0 protocols
- **Tech**: Node.js, React, PostgreSQL, TypeScript, Git

#### Backend Developer @ FreelanceWork

**Jan 2022 - May 2022** | Remote | Contract

- Delivered custom backend solutions for 5+ clients across different industries
- Integrated third-party APIs including payment gateways and social media platforms
- Mentored junior developers on best practices for API development and testing
- **Tech**: Node.js, Express, MongoDB, Redis, Heroku

### 📞 Contact

- **Email**: [ajay.kumawat@example.com](mailto:ajay.kumawat@example.com)
- **Phone**: +91 98765 43210
- **Location**: Mumbai, India
- **LinkedIn**: [linkedin.com/in/ajay-kumawat](https://linkedin.com/in/ajay-kumawat)
- **GitHub**: [github.com/ajay-kumawat1](https://github.com/ajay-kumawat1)

## 🗂️ Project Structure

```
portfolio/
├── public/
│   ├── assets/
│   │   ├── headshot.jpg          # Professional photo
│   │   ├── project1.jpg          # E-commerce API screenshot
│   │   ├── project2.jpg          # Task manager screenshot
│   │   └── project3.jpg          # Microservices screenshot
│   └── resume.pdf                # Latest resume
├── src/
│   ├── components/
│   │   ├── Navbar.tsx            # Navigation with dark mode
│   │   ├── Hero.tsx              # Landing section
│   │   ├── About.tsx             # About section
│   │   ├── Skills.tsx            # Skills visualization
│   │   ├── Projects.tsx          # Project showcase
│   │   ├── Experience.tsx        # Work experience
│   │   ├── Contact.tsx           # Contact form
│   │   └── Footer.tsx            # Footer section
│   ├── App.tsx                   # Main app component
│   ├── main.tsx                  # React entry point
│   └── index.css                 # TailwindCSS styles
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/ajay-kumawat1/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build & Deploy

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📋 Required Assets

Before going live, add these files:

1. **`/public/assets/headshot.jpg`** - Professional photo (400x400px)
2. **`/public/assets/project1.jpg`** - E-commerce API screenshot
3. **`/public/assets/project2.jpg`** - Task manager screenshot
4. **`/public/assets/project3.jpg`** - Microservices screenshot
5. **`/public/resume.pdf`** - Latest resume in PDF format

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`

---

**Built with ❤️ by Ajay Kumawat** | Backend Developer specializing in Node.js ecosystem
