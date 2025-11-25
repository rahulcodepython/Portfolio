# Portfolio Admin Dashboard

A complete Next.js admin dashboard for managing portfolio content with authentication, SQLite database, and full CRUD operations.

## Features

- **Authentication**: Secure login with bcrypt password hashing
- **Projects Management**: Create, read, update, delete portfolio projects
- **Skills Management**: Manage technical skills with categories and proficiency levels
- **Contacts Management**: View contact form submissions with read/unread status
- **Site Settings**: Configure social media links, CV URL, and theme preferences
- **Dashboard**: Overview statistics and quick access to all modules

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Database**: SQLite with better-sqlite3
- **Authentication**: bcryptjs with HTTP-only cookies
- **UI**: Tailwind CSS v4 + shadcn/ui
- **Validation**: Zod schemas
- **Icons**: Lucide React

## Getting Started

### Installation

1. Install dependencies:
\`\`\`bash
npm install
\`\`\`

2. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

3. Open [http://localhost:3000](http://localhost:3000)

### Default Credentials

- **Username**: `admin`
- **Password**: `admin123`

## Project Structure

\`\`\`
app/
├── admin/                  # Protected admin routes
│   ├── layout.tsx         # Admin layout with sidebar
│   ├── page.tsx           # Dashboard overview
│   ├── projects/          # Projects CRUD
│   ├── skills/            # Skills CRUD
│   ├── contacts/          # Contacts management
│   └── settings/          # Site settings
├── api/                   # API routes
│   ├── auth/             # Authentication endpoints
│   └── admin/            # Protected admin endpoints
├── contact/              # Public contact form
└── login/                # Login page

lib/
├── db.ts                 # SQLite database setup
├── auth.ts               # Authentication utilities
└── validations.ts        # Zod schemas

middleware.ts             # Route protection
\`\`\`

## Database Schema

### Projects
- id, title, description, technologies, image_url, live_url, github_url, featured, created_at

### Skills
- id, name, category, proficiency_level, created_at

### Contacts
- id, name, email, message, read, created_at

### Site Settings
- id, github_url, linkedin_url, twitter_url, facebook_url, instagram_url, cv_url, theme_mode, primary_color, updated_at

### Admin Users
- id, username, password_hash, created_at

## API Routes

### Authentication
- `POST /api/auth/login` - Login
- `POST /api/auth/logout` - Logout

### Projects
- `GET /api/admin/projects` - List all projects
- `POST /api/admin/projects` - Create project
- `PUT /api/admin/projects/[id]` - Update project
- `DELETE /api/admin/projects/[id]` - Delete project

### Skills
- `GET /api/admin/skills` - List all skills
- `POST /api/admin/skills` - Create skill
- `PUT /api/admin/skills/[id]` - Update skill
- `DELETE /api/admin/skills/[id]` - Delete skill

### Contacts
- `POST /api/contact` - Submit contact form (public)
- `GET /api/admin/contacts` - List all contacts
- `PATCH /api/admin/contacts/[id]` - Update read status
- `DELETE /api/admin/contacts/[id]` - Delete contact

### Site Settings
- `GET /api/admin/settings` - Get settings
- `PUT /api/admin/settings` - Update settings

## Security

- All admin routes protected by middleware
- Password hashing with bcryptjs
- HTTP-only cookies for session management
- Zod validation on all forms
- SQL injection prevention with parameterized queries

## Development

The database file `portfolio.db` is created automatically on first run. To reset the database, delete the file and restart the server.