import Image from 'next/image'
import { BiLogoReact, BiCloudUpload, BiData, BiLogoDjango, BiLogoNodejs, BiEdit, BiNews, BiSupport, BiTimeFive, BiMap, BiEnvelope, BiPhoneCall, BiRightArrowAlt, BiSolidPlusCircle, BiSolidCloudDownload } from 'react-icons/bi'

const data = {
    hero: {
        button: [
            ['/freelance/pricing', 'Hire Me', <BiRightArrowAlt key={1} />, ''],
            ['/#contact', 'Contact Me', <BiSolidPlusCircle key={1} />, ''],
            ['/cv.pdf', 'Download CV', <BiSolidCloudDownload key={1} />, '_blank'],
        ]
    },
    about: {
        aboutMe: "An accomplished web developer adept in the latest technologies, embodying exceptional leadership, project management, and innovative thinking, all while possessing an articulate and engaging social speaking style.",
        experties: [
            'Full Stack Developer',
            'Backend Developer',
            'Frontend Developer',
            'Web Designer',
            'Software Engineer',
            'Database',
            'Server Management',
            'Project Management',
            'Cloud Services',
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
            'Project Management',
            'Technical Proficiency',
            'Security Awareness',
            'Analytical Thinking',
            'Attention to Detail',
            'Creativity',
            'Continuous Learning',
            'Backend Developer',
            'Frontend Developer',
            'Database',
            'Server Management',
            'Project Manager',
            'Full Stack Developer',
            'Cloud Management',
            'Database Management',
            'UI/UX Design',
            'Testing and Debugging',
        ],
        tech: [
            ['HTML', '97%',],
            ['CSS', '85%',],
            ['Tailwind CSS', '93%',],
            ['JavaScript', '90%',],
            ['Python', '95%',],
            ['Django', '90%',],
            ['Django Rest Framework', '90%',],
            ['React JS', '93%',],
            ['Next JS', '88%',],
            ['OOP', '70%',],
            ['C', '50%',],
            ['C++', '50%',],
            ['Mongodb', '65%',],
            ['Sequel Database', '83%',],
            ['Git', '90%',],
            ['Figma', '50%',],
            ['Chat GPT', '70%',],
            ['Software Development', '73%',],
            ['Competitive Programming', '73%',],
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
            'I offer seamless deployment of websites, be it frontend or backend, on any server, ensuring flawless performance and maximum security for your site.',
            'purple'
        ],
    ],
    facts: [
        [<BiNews key={1} />, 10, 'Projects'],
        [<BiTimeFive key={1} />, 3, 'Year Of Experience'],
        [<BiSupport key={1} />, '24x7', 'Support'],
    ],
    pricing: [
        {
            plan: "Basic",
            desc: "Experience our basic plan, delivering essential features and functionality to establish your online presence efficiently and affordably.",
            price: "30",
            pack: "/month",
            check: [
                "Only One Project",
                "Personal Attendent",
            ],
            uncheck: [
                "With hosting",
                "Source Code",
                "Maintainence",
                "Backend"
            ]
        },
        {
            plan: "Intermediate",
            desc: "Opt for our intermediate plan, designed to provide a balanced and comprehensive solution to meet your requirements effectively.",
            price: "50",
            pack: "/month",
            check: [
                "Only One projects",
                "Personal Attendent",
                "With hosting",
                "Maintainence",
            ],
            uncheck: [
                "Source Code",
                "Backend"
            ]
        },
        {
            plan: "Advance",
            desc: "Elevate your digital presence with our advanced plan, offering a robust suite of features, enhanced customization options, and top-notch support for your website's optimal performance and growth.",
            price: "70",
            pack: "/month",
            check: [
                "Only One projects",
                "Personal Attendent",
                "With hosting",
                "Source Code",
                "Backend"
            ],
        },
    ],
    contacticons: [
        [<BiMap key={1} />, 'Location', 'Lorem ipsum dolor sit amet.'],
        [<BiEnvelope key={1} />, 'Email', 'Lorem ipsum dolor sit amet.'],
        [<BiPhoneCall key={1} />, 'Call', 'Lorem ipsum dolor sit amet.'],
    ],
    socialicons: [
        [<Image src={'/image/facebook.png'} width={27} height={27} alt='icon' key={1} />, 'https://www.facebook.com/rahul2004das/'],
        [<Image src={'/image/instagram.png'} width={27} height={27} alt='icon' key={1} />, 'https://www.instagram.com/rahul_2004_das/'],
        [<Image src={'/image/github.png'} width={27} height={27} alt='icon' key={1} />, 'https://github.com/rahulcodepython'],
        [<Image src={'/image/twitter.png'} width={27} height={27} alt='icon' key={1} />, 'https://twitter.com/rd21102004'],
    ],
    repositories: [
        [
            'Backend',
            'Jul 1, 2022',
            'Edutech Django Website: Advanced Education Website in Django',
            'Our advanced education website, built using the Django framework, offers a seamless learning experience with interactive courses, personalized progress tracking, and collaborative features. Empowering learners with a modern and intuitive platform to excel in their educational pursuits.',
            'https://github.com/rahulcodepython/Educational-Website'
        ],
        [
            'Frontend',
            'May 9, 2022',
            'ReactNewsApp: Dynamic News Website with ReactJS',
            '"ReactNewsApp is a dynamic and user-friendly news website built with ReactJS. Stay updated with the latest headlines, breaking news, and personalized content. Enjoy a smooth and responsive interface, intuitive navigation, and customizable preferences to curate your newsfeed. Explore a world of information at your fingertips.',
            'https://github.com/rahulcodepython/News-App'
        ],
        [
            'Backend',
            'Jun 17, 2023',
            'Djoser-Powered Django Auth: Simple & Secure User Management',
            'Django Authentication website using Djoser: Seamlessly implement user authentication and registration functionalities with Djoser package. Streamline user management, password reset, and token-based authentication for your Django web application.',
            'https://github.com/rahulcodepython/Auth-Djoser-Google'
        ],
        [
            'Backend',
            'May 6, 2023',
            'Django ASGI Chat: Real-time Communication Made Easy with Asynchronous Server Gateway Interface',
            'A real-time chat application built with Django ASGI, offering seamless and efficient communication, supporting multiple users, and delivering instant messaging capabilities in a modern and scalable environment.',
            'https://github.com/rahulcodepython/Chat-App'
        ],
        [
            'Backend',
            'Jun 19, 2023',
            'Seamless Django Payment Gateway Integration: Empowering Transactions with Razorpay',
            'The Payment Gateway project in Django with Razorpay integration enables seamless online payment processing, securely handling transactions for businesses.',
            'https://github.com/rahulcodepython/Razor-Pay-Django'
        ],
        [
            'Frontend',
            'Jun 21, 2023',
            'Payment Gateway Integration in Next.js with Razorpay',
            'A Next.js Payment Gateway project integrating Razorpay for seamless online transactions. Enables secure and efficient payment processing within a Next.js web application.',
            'https://github.com/rahulcodepython/Razor-Pay-Next-Js'
        ],
        [
            'Frontend',
            'May 7, 2022',
            'React.js project for text manipulation and analysis.',
            'Text Utils is a React.js application that lets you modify text in various ways. It includes features like converting text to uppercase or lowercase, removing extra spaces, and more.',
            'https://github.com/rahulcodepython/TextUtils'
        ],
        [
            'Backend',
            'Apr 23, 2022',
            "Django Diary: Empowering Your Blogging Journey.",
            'A Django blog project designed to provide a user-friendly platform for creating, publishing, and managing blog posts. It includes features like user authentication, post commenting, and categorization to ensure an engaging and organized blogging experience.',
            'https://github.com/rahulcodepython/Blog-Website'
        ],
        [
            'Backend',
            'Mar 9, 2022',
            "DjangoExam: Seamless Testing Platform for Academic Success",
            'The Exam Portal project in Django is a web application that facilitates online exams. It allows users to create and take exams, providing features for question management, real-time exam timer, and result tracking.',
            'https://github.com/rahulcodepython/Exam-Portal'
        ],
        [
            'Backend',
            'Jul 23, 2023',
            "Django & Django Rest Framework: Building a Powerful Backend for Your Blog Project",
            'The blog project backend in Django and Django Rest Framework is a powerful and efficient web application that handles data storage, authentication, and provides RESTful API endpoints, enabling seamless communication between the front-end and back-end, creating a dynamic and interactive blogging experience.',
            'https://github.com/rahulcodepython/FullStack-Blog-Backend'
        ],
        [
            'Frontend',
            'Jul 23, 2023',
            "Building a Next.js Backend: Powering Your Blog Project with Efficiency and Flexibility",
            'Next.js backend for a blog project, handling data storage, retrieval, and APIs. Utilizing server-side rendering and API routes, enabling efficient and dynamic content rendering while ensuring seamless user experience.',
            'https://github.com/rahulcodepython/FullStack-Blog-Frontend'
        ],
    ],
    projects: {
        tabs: [
            ['All Project', 'all'],
            ['Frontend', 'frontend'],
            ['Backend', 'backend'],
            ['Full Stack', 'full stack'],
        ],
        projects: [
            {
                image: "/image/projects/Django-Blog.png",
                category: "Backend",
                title: "Blog Project",
            },
            {
                image: "/image/projects/Full-Stack-Blog-Project.png",
                category: "Full Stack",
                title: "Full Stack Blog Project",
            },
            {
                image: "/image/projects/Textutils.png",
                category: "Frontend",
                title: "Textutils",
            },
            // {
            //     image: "/image/background.png",
            //     category: "Full Stack",
            //     title: "Grass Grosp",
            // },
            {
                image: "/image/projects/Razor-Pay.png",
                category: "Full Stack",
                title: "Razor Pay Demo",
            },
            {
                image: "/image/projects/Django-Authentication.png",
                category: "Backend",
                title: "Django Authentication",
            },
            {
                image: "/image/projects/Educational-Website.png",
                category: "Backend",
                title: "Educational Website",
            },
            {
                image: "/image/projects/Exam-Portal.png",
                category: "Backend",
                title: "Exam Portal",
            },
            {
                image: "/image/projects/News-App.png",
                category: "Frontend",
                title: "News App",
            },
            {
                image: "/image/projects/Chat-App.png",
                category: "Backend",
                title: "Chat App",
            },
        ]
    }
}

export default data