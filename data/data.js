import Image from 'next/image'
import { BiLogoReact, BiCloudUpload, BiData, BiLogoDjango, BiLogoNodejs, BiEdit, BiNews, BiSupport, BiTimeFive, BiMap, BiEnvelope, BiPhoneCall, BiLogoFacebook, BiLogoInstagramAlt, BiLogoLinkedin, BiLogoGithub, BiLogoTwitter, BiLogoDiscordAlt } from 'react-icons/bi'

const data = {
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
                'I completed my secondary education from Kalyangarh Bidhan Chandra Vidyapith (H.S) School, where I diligently pursued my academic journey from class 5 to 10. This esteemed institution nurtured my intellectual growth, fostering a solid foundation for my future endeavors.'
            ],
            [
                '2021-2023',
                'Higher Secondary School',
                'I successfully completed my higher secondary education from Kalyangarh Vidyamandir (H.S) School, where I dedicatedly pursued my academic journey during classes 11 and 12. This renowned institution provided me with an enriching environment and equipped me with the necessary knowledge and skills to excel in my studies.'
            ],
            [
                '2023-Present',
                'BCA Degree',
                'I am currently pursuing a 3-year professional BCA course from Brainware University, immersing myself in a vibrant and intellectually stimulating college life. This esteemed institution offers a comprehensive curriculum, fostering my growth as a knowledgeable and skilled professional in the field of computer applications.'
            ],
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
        ]
    },
    services: [
        [
            <BiLogoReact />,
            'Landing Page',
            "As a skilled web developer, I'll craft stunning, responsive, SEO-friendly, and interactive landing pages that showcase your business with professionalism and creativity",
        ],
        [
            <BiLogoNodejs />,
            'Multipage Website',
            'I specialize in crafting multipage, responsive, SEO-friendly, beautiful, professional, creative, and interactive frontend websites for businesses.',
        ],
        [
            <BiLogoDjango />,
            'Full Stack Website',
            "I specialize in crafting custom full-stack websites tailored to your specific requirements, ensuring seamless database functionality, robust security measures, and the ability to customize it to your exact preferences for flawless performance.",
        ],
        [
            <BiData />,
            'API Development',
            'I provide secure, custom, and flexible APIs to enhance your frontend capabilities and streamline data communication for seamless integration and optimal performance.',
        ],
        [
            <BiEdit />,
            'Update and Maintenance',
            'I guarantee extended support for a year or more, maintaining and updating your site as per contract, ensuring it aligns with your evolving requirements and goals.',
        ],
        [
            <BiCloudUpload />,
            'Deployment',
            'I offer seamless deployment of websites, be it frontend or backend, on any server, ensuring flawless performance and maximum security for your site.',
        ],
    ],
    facts: [
        [<BiNews />, 10, 'Projects'],
        [<BiTimeFive />, 3, 'Year Of Experience'],
        [<BiSupport />, '24x7', 'Support'],
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
                "With hosting"
            ],
            uncheck: [
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
                "Unlimited projects",
                "Personal Attendent",
                "With hosting"
            ],
            uncheck: [
                "Source Code",
                "Maintainence",
                "Backend"
            ]
        },
        {
            plan: "Advance",
            desc: "Elevate your digital presence with our advanced plan, offering a robust suite of features, enhanced customization options, and top-notch support for your website's optimal performance and growth.",
            price: "70",
            pack: "/month",
            check: [
                "Unlimited projects",
                "Personal Attendent",
                "With hosting"
            ],
        },
    ],
    contacticons: [
        [<BiMap />, 'Location', 'Lorem ipsum dolor sit amet.'],
        [<BiEnvelope />, 'Email', 'Lorem ipsum dolor sit amet.'],
        [<BiPhoneCall />, 'Call', 'Lorem ipsum dolor sit amet.'],
    ],
    socialicons: [
        [<Image src={'/image/facebook.png'} width={27} height={27} />, 'https://www.facebook.com/rahul2004das/'],
        [<Image src={'/image/instagram.png'} width={27} height={27} />, 'https://www.instagram.com/rahul_2004_das/'],
        [<Image src={'/image/github.png'} width={27} height={27} />, 'https://github.com/rahulcodepython'],
        [<Image src={'/image/twitter.png'} width={27} height={27} />, 'https://twitter.com/rd21102004'],
    ]
}

export default data