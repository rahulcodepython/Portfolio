import Image from 'next/image'
import { BiLogoReact, BiCloudUpload, BiData, BiLogoDjango, BiLogoNodejs, BiEdit, BiNews, BiSupport, BiTimeFive, BiMap, BiEnvelope, BiPhoneCall, BiRightArrowAlt, BiSolidPlusCircle, BiSolidCloudDownload, BiCodeAlt } from 'react-icons/bi'

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
        [<BiMap key={1} />, 'Location', 'West Bengal, India'],
        [<BiEnvelope key={1} />, 'Email', 'rahulcodepython@gmail.com'],
        [<BiPhoneCall key={1} />, 'Call', '+919775150082'],
    ],
    socialicons: [
        [<Image src={'/image/facebook.png'} width={27} height={27} alt='icon' key={1} />, 'https://www.facebook.com/rahul2004das/'],
        [<Image src={'/image/instagram.png'} width={27} height={27} alt='icon' key={1} />, 'https://www.instagram.com/rahul_2004_das/'],
        [<Image src={'/image/github.png'} width={27} height={27} alt='icon' key={1} />, 'https://github.com/rahulcodepython'],
        [<Image src={'/image/twitter.png'} width={27} height={27} alt='icon' key={1} />, 'https://twitter.com/rd21102004'],
    ],
    projects: {
        tabs: [
            ['All Project', 'all'],
            ['Frontend', 'frontend'],
            ['Backend', 'backend'],
            ['Full Stack', 'full stack'],
        ],
    },
}

export default data