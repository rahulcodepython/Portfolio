-- RahulCodePython Dashboard Database Schema (PostgreSQL)

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  technologies TEXT NOT NULL,
  image_url TEXT,
  live_url TEXT,
  github_url TEXT,
  featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create skills table
CREATE TABLE IF NOT EXISTS skills (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  category VARCHAR(100) NOT NULL,
  proficiency_level VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create contacts table
CREATE TABLE IF NOT EXISTS contacts (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create settings table
CREATE TABLE IF NOT EXISTS settings (
  id INTEGER PRIMARY KEY CHECK (id = 1),
  github_url TEXT,
  linkedin_url TEXT,
  twitter_url TEXT,
  facebook_url TEXT,
  instagram_url TEXT,
  cv_url TEXT,
  image_url TEXT,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert projects (only if table is empty)
INSERT INTO projects (title, description, technologies, image_url, live_url, github_url, featured)
SELECT * FROM (VALUES
  ('Libom', 'An online library management system supporting book borrowing, returns, user authentication, and administrative controls with a sleek frontend and secure backend.', 'FullStack, Next.js, Mongodb', 'https://raw.githubusercontent.com/rahulcodepython/file-storage/refs/heads/main/portfolio/projectImage/LibraryManagementSystem.png', 'https://libom.rahulcodepython.space/', 'https://github.com/rahulcodepython/Libom.git', TRUE),
  ('CourseHunt', 'A web platform to discover, filter, and track online courses across providers, with user profiles, ratings, and recommendation logic.', 'FullStack, Next.js, Mongodb, Clean UI', 'https://raw.githubusercontent.com/rahulcodepython/file-storage/refs/heads/main/portfolio/projectImage/CourseHunt.png', 'https://coursehunt.rahulcodepython.space/', 'https://github.com/rahulcodepython/CourseHunt.git', TRUE),
  ('PPM - Python Package Manager', 'A command-line Python Package Manager that create, manage packages, initialize git and many more.', 'Python Package Manager, Python Package, CLI Tool', 'https://github.com/rahulcodepython/file-storage/blob/main/portfolio/projectImage/ppm.png', 'pypi.org/project/ppm3/', 'https://github.com/rahulcodepython/Python-Project-Manager.git', FALSE),
  ('Quiz Generator', 'A quiz generator powered by AI that creates dynamic questions, evaluates performance, and offers instant feedback for an interactive learning experience.', 'AI, API, Next.js, AI Generation', 'https://raw.githubusercontent.com/rahulcodepython/file-storage/refs/heads/main/portfolio/projectImage/Quiz.png', 'https://quiz.rahulcodepython.space/', 'https://github.com/rahulcodepython/AI-Quiz-App.git', FALSE),
  ('Multiplayer Chess', 'A real-time chess application enabling live multiplayer matches, move validation, and in-game chat using websockets and persistent backend logic.', 'Express.js, React.js, Socket.io, Chess.js', 'https://raw.githubusercontent.com/rahulcodepython/file-storage/refs/heads/main/portfolio/projectImage/MultiplayerChess.png', '', 'https://github.com/rahulcodepython/Multiplayer-Chess-Frontend.git', TRUE),
  ('Inventory Management System', 'A desktop application developed with Python, Tkinter, and SQLite3 to manage product stock, pricing, and availability. It features a simple GUI for adding, updating, and tracking inventory, ideal for small businesses or personal use.', 'Python, Tkinter, DesktopApp', 'https://raw.githubusercontent.com/rahulcodepython/file-storage/refs/heads/main/portfolio/projectImage/InventoryManagement.png', '', 'https://github.com/rahulcodepython/Inventory-Management', FALSE),
  ('Twitter Clone', 'A mobile-first social media app built using React Native, Express, and MongoDB. Users can post tweets, view timelines, and interact in real time. The backend handles user authentication and tweet storage, while the frontend delivers a smooth, native experience.', 'ReactNative, Express', 'https://raw.githubusercontent.com/rahulcodepython/file-storage/refs/heads/main/portfolio/projectImage/TwitterClone.png', '', 'https://github.com/rahulcodepython/Twitter', FALSE),
  ('Finance Tracker', 'A comprehensive full-stack financial management application built with Next.js, Golang, and PostgreSQL for managing accounts, budgets, recurring transactions, and categories. Features interactive charts for income/expense visualization and provides real-time financial insights with robust transaction tracking.', 'Next.js, Golang, PostgreSQL, TypeScript, Tailwind CSS, Chart.js', 'https://raw.githubusercontent.com/rahulcodepython/file-storage/refs/heads/main/portfolio/projectImage/Finance%20Tracker.png', '', 'https://github.com/rahulcodepython/Finance-Tracker', FALSE)
) AS v(title, description, technologies, image_url, live_url, github_url, featured)
WHERE NOT EXISTS (SELECT 1 FROM projects);

-- Insert skills (only if table is empty)
INSERT INTO skills (name, category, proficiency_level)
SELECT * FROM (VALUES
  -- Frontend Skills
  ('React.js', 'frontend', 'Advanced'),
  ('Next.js', 'frontend', 'Advanced'),
  ('TypeScript', 'frontend', 'Intermediate'),
  ('JavaScript', 'frontend', 'Advanced'),
  ('HTML5', 'frontend', 'Advanced'),
  ('CSS3', 'frontend', 'Advanced'),
  ('Tailwind CSS', 'frontend', 'Advanced'),
  ('Shadcn UI', 'frontend', 'Intermediate'),
  ('React Query', 'frontend', 'Intermediate'),
  ('Zustand', 'frontend', 'Intermediate'),
  ('React Native', 'frontend', 'Intermediate'),

  -- Backend Skills
  ('Django', 'backend', 'Advanced'),
  ('Django REST Framework', 'backend', 'Advanced'),
  ('Node.js', 'backend', 'Intermediate'),
  ('Express.js', 'backend', 'Intermediate'),
  ('Socket.io', 'backend', 'Intermediate'),
  ('Flask', 'backend', 'Intermediate'),
  ('Python', 'backend', 'Advanced'),
  ('REST APIs', 'backend', 'Advanced'),
  ('Golang', 'backend', 'Intermediate'),
  ('Fiber', 'backend', 'Intermediate'),

  -- Database Skills
  ('PostgreSQL', 'database', 'Intermediate'),
  ('MongoDB', 'database', 'Intermediate'),
  ('Sqlite3', 'database', 'Advanced'),
  ('Prisma', 'database', 'Intermediate'),
  ('Raw SQL', 'database', 'Intermediate'),

  -- DevOps Skills
  ('Docker', 'devops', 'Intermediate'),
  ('Git', 'devops', 'Advanced'),
  ('GitHub', 'devops', 'Advanced'),
  ('CI/CD', 'devops', 'Intermediate'),
  ('Linux', 'devops', 'Intermediate'),
  ('Nginx', 'devops', 'Intermediate'),
  ('Wordpress', 'devops', 'Intermediate'),
  ('ubuntu', 'devops', 'Intermediate'),

  -- Deployment Skills
  ('Vercel', 'deployment', 'Advanced'),
  ('Netlify', 'deployment', 'Intermediate'),
  ('DigitalOcean', 'deployment', 'Intermediate'),
  ('PythonAnyWhere', 'deployment', 'Intermediate'),
  ('Railway', 'deployment', 'Intermediate'),

  -- Other Skills
  ('VSCode', 'others', 'Advanced'),
  ('Neovim', 'others', 'Intermediate'),
  ('Postman', 'others', 'Advanced'),
  ('Mongodb Compass', 'others', 'Intermediate'),
  ('Figma', 'others', 'Intermediate'),
  ('Ereaser.io', 'others', 'Intermediate')
) AS v(name, category, proficiency_level)
WHERE NOT EXISTS (SELECT 1 FROM skills);

-- Insert settings (only if not exists)
INSERT INTO settings (
  id, 
  github_url, 
  linkedin_url, 
  twitter_url, 
  facebook_url, 
  instagram_url, 
  image_url
)
SELECT 
  1,
  'https://github.com/rahulcodepython',
  'https://www.linkedin.com/in/rahulcodepython/',
  'https://twitter.com/rahulcodepython',
  'https://www.facebook.com/rahulcodepython',
  'https://www.instagram.com/rahulcodepython',
  '/01.jpg'
WHERE NOT EXISTS (SELECT 1 FROM settings WHERE id = 1);