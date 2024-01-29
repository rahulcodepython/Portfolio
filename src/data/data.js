import Image from 'next/image'
import { BiLogoReact, BiCloudUpload, BiData, BiLogoDjango, BiLogoNodejs, BiEdit, BiNews, BiTimeFive, BiMap, BiEnvelope, BiPhoneCall, BiSolidPlusCircle, BiSolidCloudDownload, BiCodeAlt, BiHome, BiUser, BiFile, BiServer, BiGitBranch, BiIdCard } from '@/data/icons'

const Data = {
    hero: {
        button: [
            ['/#contact', 'Contact Me', <BiSolidPlusCircle key={1} />, ''],
            ['/cv.pdf', 'Download CV', <BiSolidCloudDownload key={1} />, '_blank'],
        ]
    },
    navlinks: [
        ['/#hero', <BiHome key={1} />, 'Home'],
        ['/#about', <BiUser key={1} />, 'About'],
        ['/#resume', <BiFile key={1} />, 'Resume'],
        ['/#services', <BiServer key={1} />, 'Services'],
        ['/#projects', <BiIdCard key={1} />, 'Portfolio'],
        ['/#repositiories', <BiGitBranch key={1} />, 'Repositories'],
        ['/#contact', <BiEnvelope key={1} />, 'Contact'],
    ],
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
            ['Next JS', '90%',],
            ['OOP', '70%',],
            ['C', '50%',],
            ['C++', '50%',],
            ['Mongodb', '65%',],
            ['Sequel Database', '83%',],
            ['Git', '90%',],
            ['Chat GPT', '70%',],
            ['Software Development', '73%',],
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
        [<BiCodeAlt key={1} />, 11, 'Repositories'],
    ],
    contacticons: [
        [<BiMap key={1} />, 'Location', 'West Bengal, India'],
        [<BiEnvelope key={1} />, 'Email', 'rahulcodepython@gmail.com'],
        [<BiPhoneCall key={1} />, 'Call', '+919775150082'],
    ],
    socialicons: [
        [<Image src={'https://firebasestorage.googleapis.com/v0/b/z-tube-53cf1.appspot.com/o/Portfolio%2Ffacebook.png?alt=media&token=8435cdad-351f-4d94-9c09-d5aef91aa408'} width={45} height={45} alt='icon' key={1} />, 'https://www.facebook.com/rahul2004das/'],
        [<Image src={'https://firebasestorage.googleapis.com/v0/b/z-tube-53cf1.appspot.com/o/Portfolio%2Finstagram.png?alt=media&token=8d09970c-326c-41e0-b129-2658ff2163be'} width={45} height={45} alt='icon' key={1} />, 'https://www.instagram.com/rahul_2004_das/'],
        [<Image src={'https://firebasestorage.googleapis.com/v0/b/z-tube-53cf1.appspot.com/o/Portfolio%2Fgithub.png?alt=media&token=2d575e06-572d-4f8c-a07c-41c1afb14796'} width={45} height={45} alt='icon' key={1} />, 'https://github.com/rahulcodepython'],
        [<Image src={'https://firebasestorage.googleapis.com/v0/b/z-tube-53cf1.appspot.com/o/Portfolio%2Ftwitter.png?alt=media&token=86b0142f-3c31-4fd8-9875-2baff1d8b3e9'} width={45} height={45} alt='icon' key={1} />, 'https://twitter.com/rd21102004'],
        [<Image src={'https://firebasestorage.googleapis.com/v0/b/z-tube-53cf1.appspot.com/o/Portfolio%2Flinkedin.png?alt=media&token=ccdf2a8f-98e9-4b9f-a9ab-11da25a8ae24'} width={35} height={35} alt='icon' key={1} />, 'https://www.linkedin.com/in/rahulcodepython/'],
    ],
    projects: [
        {
            image: 'https://firebasestorage.googleapis.com/v0/b/z-tube-53cf1.appspot.com/o/Portfolio%2FProjects%2FExam-Portal.png?alt=media&token=74217d7b-c498-4427-92d1-1bc28fbc3c0d',
            category: 'Backend',
            title: 'Exam Portal'
        },
        {
            image: 'https://firebasestorage.googleapis.com/v0/b/z-tube-53cf1.appspot.com/o/Portfolio%2FProjects%2FDjango-Blog.png?alt=media&token=a0c3cb93-f43b-4efa-88f7-cb6ea434744d',
            category: 'Backend',
            title: 'Blog Project',
        },
        {
            image: 'https://firebasestorage.googleapis.com/v0/b/z-tube-53cf1.appspot.com/o/Portfolio%2FProjects%2FDjango-Authentication.png?alt=media&token=5c921c27-2939-4b12-b02b-3c88d70e0f84',
            category: 'Backend',
            title: 'Django Authentication',
        },
        {
            image: 'https://firebasestorage.googleapis.com/v0/b/z-tube-53cf1.appspot.com/o/Portfolio%2FProjects%2FRazor-Pay.png?alt=media&token=a7b60b53-c129-4629-a5b8-b963f3f2d11e',
            category: 'Full Stack',
            title: 'Razor Pay Demo'
        },
        {
            image: 'https://firebasestorage.googleapis.com/v0/b/z-tube-53cf1.appspot.com/o/Portfolio%2FProjects%2FEducational-Website.png?alt=media&token=0fecbabf-592c-497a-9d7b-fd1f6559a25f',
            category: 'Backend',
            title: 'Educational Website'
        },
        {
            image: 'https://firebasestorage.googleapis.com/v0/b/z-tube-53cf1.appspot.com/o/Portfolio%2FProjects%2FNews-App.png?alt=media&token=515b53ba-ca7e-4845-9b0e-d364ca9b7a54',
            category: 'Frontend',
            title: 'News App'
        },
        {
            image: 'https://firebasestorage.googleapis.com/v0/b/z-tube-53cf1.appspot.com/o/Portfolio%2FProjects%2FFull-Stack-Blog-Project.png?alt=media&token=47d25cc8-57fc-45c4-b145-9e061edbae81',
            category: 'Full Stack',
            title: 'Full Stack Blog Project'
        },
        {
            image: 'https://firebasestorage.googleapis.com/v0/b/z-tube-53cf1.appspot.com/o/Portfolio%2FProjects%2FChat-App.png?alt=media&token=f7cefb59-fab2-4d56-9f50-3bfde9e8f89a',
            category: 'Backend',
            title: 'Chat App'
        }
    ]
}

export default Data