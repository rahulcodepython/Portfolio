import Image from 'next/image'
import { BiLogoReact, BiCloudUpload, BiData, BiLogoDjango, BiLogoNodejs, BiEdit, BiNews, BiTimeFive, BiMap, BiEnvelope, BiPhoneCall, BiSolidPlusCircle, BiSolidCloudDownload, BiCodeAlt, BiHome, BiUser, BiFile, BiServer, BiGitBranch, BiIdCard } from '@/data/icons'

const Data = {
    hero: {
        button: [
            ['/#contact', 'Contact Me', <BiSolidPlusCircle key={1} />, ''],
            ['https://firebasestorage.googleapis.com/v0/b/z-tube-53cf1.appspot.com/o/Portfolio%2FRahul%20das.pdf?alt=media&token=5521819b-2b01-4d90-abba-965ea37b00d6', 'Download CV', <BiSolidCloudDownload key={1} />, '_blank'],
        ]
    },
    navlinks: [
        ['/#hero', <BiHome key={1} />, 'Home'],
        ['/#about', <BiUser key={1} />, 'About'],
        ['/#resume', <BiFile key={1} />, 'Resume'],
        ['/#services', <BiServer key={1} />, 'Services'],
        ['/#projects', <BiIdCard key={1} />, 'Portfolio'],
        ['https://github.com/rahulcodepython?tab=repositories', <BiGitBranch key={1} />, 'Repositories'],
        ['/#contact', <BiEnvelope key={1} />, 'Contact'],
    ],
    about: {
        aboutMe: "Hello, my name is Rahul Das. I am a Full Stack Web Developer with a passion for technology and innovation. I bring adaptability, a commitment to continuous learning, adept problem-solving skills, and a keen awareness of leading market technologies. With excellent communication and a suite of essential soft skills, I am poised for success in corporate environments.",
        experties: [
            'Full Stack Developer',
            'Backend Developer',
            'Frontend Developer',
            'Web Designing',
            'Software Engineer',
            'Database Management',
            'Project Management',
            'Dockerization',
        ],
        myDetails: [
            ['Address', 'Kankpul, Ashokenagar, North(24) Pgs, West Bengal, India'],
            ['Mobile', '+919775150082'],
            ['Email', 'rahulcodepython@gmail.com'],
        ]
    },
    resume: {
        education: [
            [
                '2015-2021',
                'Secondary School',
                'Completing my secondary education at Kalyangarh Bidhan Chandra Vidyapith (H.S) School has been a transformative journey from class 5 to 10. With consistent top-tier performance, active participation in extracurricular and scientific programs, and a proud achievement of securing 91% in the Class 10 examinations, I exemplify dedication, excellence, and a strong academic foundation.'
            ],
            [
                '2021-2023',
                'Higher Secondary School',
                'Having completed my higher secondary education with distinction at Kalyangarh Vidyamandir (H.S) School, I embarked on an enriching academic journey in classes 11 and 12. Equipped with a robust knowledge base and skill set in Mathematics, Physics, Chemistry, and Computer Science, I attained an impressive 82% in the Class 12 examinations, reflecting my unwavering commitment and scholarly prowess.'
            ],
            [
                '2023-Present',
                'BCA Degree',
                'I am currently pursuing a 3-year professional BCA course from Brainware University, immersing myself in a vibrant and intellectually stimulating college life. This esteemed institution offers a comprehensive curriculum, fostering my growth as a knowledgeable and skilled professional in the field of computer applications.'
            ],
        ],
        skills: [
            'Communication',
            'Problem Solving',
            'Adaptability',
            'Teamwork',
            'Time Management',
            'Good Leardership',
            'Continuous Learning',
            'Backend Developer',
            'Frontend Developer',
            'Database Management',
            'Project Management',
            'Full Stack Developer',
            'Dockerization',
        ],
        experience: [
            [
                '2023-2024',
                'Grasp Gross',
                'I worked as a Junior Full Stack Web Developer at Grasp Gross from May 1, 2023, to January 1, 2024. I developed and maintained web applications, handled coding and debugging, and collaborated with the team to implement new features and improve functionality.'
            ],
            [
                '2024-Present',
                'Open to Work',
                'From January 1, 2024, to the present, I have been actively seekingnew opportunities while dedicating my time to studying emergingtechnologies and enhancing my skills to prepare for future roles.'
            ],
        ],
    },
    services: [
        [
            <BiLogoReact key={1} />,
            'Landing Page',
            "As a skilled web developer, I'll craft stunning, responsive, SEO-friendly, and interactive landing pages that showcase your business with professionalism and creativity",
            'sky'
        ],
        [
            <BiLogoNodejs key={1} />,
            'Multipage Website',
            'I specialize in crafting multipage, responsive, SEO-friendly, beautiful, professional, creative, and interactive frontend websites for businesses.',
            'orange'
        ],
        [
            <BiLogoDjango key={1} />,
            'Full Stack Website',
            "I specialize in crafting custom full-stack websites tailored to your specific requirements, ensuring seamless database functionality, robust security measures, and the ability to customize it to your exact preferences for flawless performance.",
            'pink'
        ],
        [
            <BiData key={1} />,
            'API Development',
            'I provide secure, custom, and flexible APIs to enhance your frontend capabilities and streamline data communication for seamless integration and optimal performance.',
            'lime'
        ],
        [
            <BiEdit key={1} />,
            'Update and Maintenance',
            'I guarantee extended support for a year or more, maintaining and updating your site as per contract, ensuring it aligns with your evolving requirements and goals.',
            'yellow'
        ],
        [
            <BiCloudUpload key={1} />,
            'Deployment',
            'I specialize in seamless deployment of websites, encompassing both frontend and backend, on any server. With expertise in Docker, I ensure flawless performance and maximum security for your projects.',
            'purple'
        ],
    ],
    facts: [
        [<BiNews key={1} />, 10, 'Projects'],
        [<BiTimeFive key={1} />, 3, 'Year Of Experience'],
        [<BiCodeAlt key={1} />, 11, 'Repositories'],
    ],
    contacticons: [
        [<BiMap key={1} />, 'Location', 'West Bengal, India'],
        [<BiEnvelope key={1} />, 'Email', 'rahulcodepython@gmail.com'],
        [<BiPhoneCall key={1} />, 'Call', '+919775150082'],
    ],
    socialicons: [
        [<Image src={'/facebook.svg'} width={40} height={40} alt='icon' key={1} />, 'https://www.facebook.com/rahulcodepython/'],
        [<Image src={'/instagram.svg'} width={40} height={40} alt='icon' key={1} />, 'https://www.instagram.com/rahulcodepython/'],
        [<Image src={'/github.svg'} width={40} height={40} alt='icon' key={1} />, 'https://github.com/rahulcodepython'],
        [<Image src={'/twitter.svg'} width={40} height={40} alt='icon' key={1} />, 'https://twitter.com/rahulcodepython'],
        [<Image src={'/linkedin.svg'} width={40} height={40} alt='icon' key={1} />, 'https://www.linkedin.com/in/rahulcodepython/'],
        [<Image src={'/leetcode.svg'} width={40} height={40} alt='icon' key={1} />, 'https://leetcode.com/u/rahulcodepython/'],
    ],
    projects: [
        {
            image: '/projects/Exam-Portal.png',
            category: 'Backend',
            title: 'Exam Portal'
        },
        {
            image: '/projects/Django-Blog.png',
            category: 'Backend',
            title: 'Blog Project',
        },
        {
            image: '/projects/Django-Authentication.png',
            category: 'Backend',
            title: 'Django Authentication',
        },
        {
            image: '/projects/Razor-Pay.png',
            category: 'Full Stack',
            title: 'Razor Pay Demo'
        },
        {
            image: '/projects/Educational-Website.png',
            category: 'Backend',
            title: 'Educational Website'
        },
        {
            image: '/projects/News-App.png',
            category: 'Frontend',
            title: 'News App'
        },
        {
            image: '/projects/Full-Stack-Blog-Project.png',
            category: 'Full Stack',
            title: 'Full Stack Blog Project'
        },
        {
            image: '/projects/ChatApp.png',
            category: 'Backend',
            title: 'Chat App'
        },
        {
            image: '/projects/Textutils.png',
            category: 'Frontend',
            title: 'Textutils App'
        },
        {
            image: '/projects/SocialMedia.png',
            category: 'Full Stack',
            title: 'Z-Tube App'
        },
        {
            image: '/projects/MultiplayerChessGame.png',
            category: 'Full Stack',
            title: 'Chess App'
        },
        {
            image: '/projects/Cloud IDE.png',
            category: 'Full Stack',
            title: 'Cloude IDE App'
        },
        {
            image: '/projects/Djoser Package.png',
            category: 'Backend',
            title: 'Djoser Auth App'
        },
        {
            image: '/projects/ChatApp.png',
            category: 'Frontend',
            title: 'Secret Message Sending App'
        },
    ],
    skillsData: [
        'HTML',
        'CSS',
        'Javascript',
        'Typescript',
        'React',
        'Next JS',
        'Node JS',
        'Tailwind',
        'MongoDB',
        'MySQL',
        'PostgreSQL',
        'Git',
        'Bootstrap',
        'Docker',
        'Figma',
        'Firebase',
        'C',
        'C++',
        'Python',
        'Canva',
        'Ubuntu',
        'ViteJS',
        'Django',
        'Express JS',
        'Socket IO',
    ],
}

export default Data
