// All site content lives here. Edit this file and redeploy to update the portfolio.
import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react"

export const profile = {
    name: "Rahul Das",
    role: "Full Stack Developer",
    tagline: "I turn ideas into reality, building with passion to help businesses grow.",
    location: "Ashoknagar, West Bengal, India",
    email: "rahulcodepython@gmail.com",
    phone: "+91 9775150082",
    image: "/01.jpg",
    // Drop the PDF into public/resume.pdf or replace with a full URL
    cvUrl: "/resume.pdf",
    birthDate: "2004-10-21",
    openToFreelance: true,
    languages: ["Bengali", "English", "Hindi"],
    interests: ["Chess", "Exploring AI tools", "Open source"],
}

export const githubUrl = "https://github.com/rahulcodepython"

export const socials = [
    { icon: Github, href: githubUrl, label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/rahulcodepython/", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/rahulcodepython", label: "Twitter" },
    { icon: Facebook, href: "https://www.facebook.com/rahulcodepython", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/rahulcodepython", label: "Instagram" },
]

export const navigation = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
]

export type Experience = {
    title: string
    company: string
    companyUrl?: string
    location: string
    period: string
    type: string
    description: string
    achievements: string[]
    links?: { label: string; href: string }[]
    technologies: string[]
}

export const experiences: Experience[] = [
    {
        title: "Freelance Full Stack Developer",
        company: "Gentik",
        companyUrl: "https://gentik.in",
        location: "Remote",
        period: "Oct 2026 - Present",
        type: "Freelance",
        description: "Building Gendemy, Gentik's main product, end to end as a freelance full stack developer.",
        achievements: [
            "Built the entire Gendemy application, from database design to the user interface",
            "Developed the backend in Golang backed by PostgreSQL",
            "Built a fast, responsive frontend with Next.js and React",
        ],
        links: [{ label: "gendemy.in", href: "https://gendemy.in" }],
        technologies: ["Next.js", "React", "Golang", "PostgreSQL"],
    },
    {
        title: "Full Stack Developer Intern",
        company: "Zoraviks Technologies",
        location: "Hybrid",
        period: "Jul 2025 - Present",
        type: "Internship",
        description: "Working as a full stack developer on Fotopick, Zoraviks' main product, and on client projects.",
        achievements: [
            "Build and maintain features across the frontend and backend of the fotopick.in product website",
            "Built the website for Orchid Photography, a freelance client project of Zoraviks",
            "Developed APIs with NestJS and PostgreSQL",
        ],
        links: [{ label: "fotopick.in", href: "https://fotopick.in" }],
        technologies: ["Next.js", "React", "NestJS", "PostgreSQL"],
    },
]

export type Education = {
    degree: string
    institution: string
    location: string
    period: string
    status: "Pursuing" | "Completed"
    description: string
    achievements: string[]
}

export const education: Education[] = [
    {
        degree: "Master of Computer Application (MCA)",
        institution: "Brainware University",
        location: "West Bengal, India",
        period: "2026 - 2028",
        status: "Pursuing",
        description: "Advanced study of software engineering, system design and modern application development.",
        achievements: [
            "Currently in the first year",
            "Balancing studies with industry internship and freelance work",
        ],
    },
    {
        degree: "Bachelor of Computer Application (BCA)",
        institution: "Brainware University",
        location: "West Bengal, India",
        period: "2023 - 2026",
        status: "Completed",
        description: "Focused on software development, algorithms, data structures, and web technologies.",
        achievements: [
            "CGPA: 8.9/10",
            "Volunteered at the college tech fest",
            "Secured second position in a coding competition",
        ],
    },
    {
        degree: "Higher Secondary Education",
        institution: "Kalyangarh Vidyamandir (H.S)",
        location: "West Bengal, India",
        period: "2021 - 2023",
        status: "Completed",
        description: "Specialized in Science with Computer Science.",
        achievements: [
            "Percentage: 82%",
            "School ranker in Computer Science",
            "Started my web development journey",
        ],
    },
    {
        degree: "Secondary Education",
        institution: "Kalyangarh Bidhan Chandra Vidyapith (H.S)",
        location: "West Bengal, India",
        period: "2015 - 2021",
        status: "Completed",
        description: "Built a strong foundation in science and mathematics.",
        achievements: [
            "Percentage: 92%",
            "Held the top position in class for 6 consecutive years",
            "First position in an inter-school chess competition",
        ],
    },
]

export type SkillCategory = "frontend" | "backend" | "database" | "devops" | "deployment" | "ai"

export const skills: Record<SkillCategory, string[]> = {
    frontend: [
        "React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3",
        "Tailwind CSS", "Shadcn UI", "React Query", "Zustand", "React Native",
    ],
    backend: [
        "Node.js", "NestJS", "Express.js", "Golang", "Fiber", "Python", "Django",
        "Django REST Framework", "Flask", "Socket.io", "REST APIs",
    ],
    database: ["PostgreSQL", "MongoDB", "SQLite", "Prisma", "Raw SQL", "Supabase", "Firebase"],
    devops: ["Docker", "Git", "GitHub", "CI/CD", "Linux", "Ubuntu", "Nginx", "WordPress"],
    deployment: ["Cloudflare", "Vercel", "Netlify", "DigitalOcean", "Railway", "PythonAnywhere"],
    ai: ["Claude", "Gemini", "DeepSeek", "v0", "Stitch"],
}

export type Project = {
    title: string
    category: string
    description: string
    highlights: string[]
    technologies: string[]
    // Screenshot in public/projects; null renders the terminal preview instead
    image: string | null
    liveUrl: string | null
    githubUrl: string | null
    builtFor?: { name: string; href: string }
}

export const projects: Project[] = [
    {
        title: "ppm: Python Project Manager",
        category: "Open Source CLI",
        description: "Create, run and manage Python projects with one small binary. ppm gives Python the workflow npm gives JavaScript.",
        highlights: [
            "One ppm.yml for dependencies and scripts",
            "Commands always run inside the project's virtualenv",
            "Uses uv when installed, pip otherwise",
        ],
        technologies: ["Go", "Python", "CLI", "uv"],
        image: null,
        liveUrl: null,
        githubUrl: "https://github.com/rahulcodepython/PPM",
    },
    {
        title: "CourseHunt",
        category: "Web App",
        description: "An online course platform where tutors publish video courses and students learn, take quizzes and earn certificates.",
        highlights: [
            "Separate dashboards for students, tutors and admins",
            "Quizzes, assignments and saved progress across devices",
            "Certificates anyone can verify with a single link",
        ],
        technologies: ["Next.js", "React", "Golang", "Fiber", "PostgreSQL", "Redis", "MinIO", "Docker"],
        image: "/projects/coursehunt.png",
        liveUrl: "https://coursehunt.rahulcodepython.in",
        githubUrl: null,
    },
    {
        title: "IdentityCard",
        category: "SaaS Product",
        description: "Event registration, ID card and check-in platform: publish a form, email every attendee a signed QR ID card and scan them in at the gate with any phone.",
        highlights: [
            "Server-signed QR codes that cannot be forged",
            "Any phone pairs as a scanner with a PIN",
            "Pay-per-event pricing with Razorpay payments",
        ],
        technologies: ["Next.js", "React", "Golang", "Fiber", "PostgreSQL", "Redis", "MinIO"],
        image: "/projects/identitycard.png",
        liveUrl: "https://events.rahulcodepython.in",
        githubUrl: null,
    },
    {
        title: "Notes Sharing",
        category: "Web App",
        description: "Lets students create class communities, upload notes of any file type and share them with classmates in one place.",
        highlights: [
            "Files stay in each student's own Google Drive",
            "Sign in with Google, no extra accounts",
            "Communities per class or study group",
        ],
        technologies: ["Next.js", "React", "Google Drive API", "Google OAuth"],
        image: "/projects/notes-sharing.png",
        liveUrl: "https://notes.rahulcodepython.in",
        githubUrl: null,
    },
    {
        title: "Gendemy",
        category: "SaaS Product",
        description: "Institute management software that runs batches, classes, attendance, fees and student progress from one place.",
        highlights: [
            "Separate apps for admins, faculty and students",
            "Fees with online payments and multi-branch support",
            "Built end to end as a freelancer",
        ],
        technologies: ["Next.js", "React", "Golang", "PostgreSQL"],
        image: "/projects/gendemy.png",
        liveUrl: "https://gendemy.in",
        githubUrl: null,
        builtFor: { name: "Gentik", href: "https://gentik.in" },
    },
    {
        title: "MyMoney",
        category: "Mobile App",
        description: "A personal finance operating system: one offline-first double-entry ledger for accounts, budgets, debts and autopay.",
        highlights: [
            "100% on-device, zero cloud tracking",
            "Instant backwards balance calculation and P2P debt graphs",
            "Android app shipped as a downloadable APK",
        ],
        technologies: ["React Native", "Expo", "Android", "Offline-first"],
        image: "/projects/mymoney.png",
        liveUrl: "https://mymoney.rahulcodepython.in",
        githubUrl: null,
    },
]
