import {
    faCode,
    faMobileScreenButton,
    faHashtag,
    faRobot,
    faBullhorn,
    faChartLine,
} from "@fortawesome/free-solid-svg-icons";

export const services = [
    {
        number: "01",
        slug: "web-development",
        title: "Web Development",
        description:
            "We build modern, responsive websites that help your business grow online.",
        icon: faCode,
        tag: "WEB / DIGITAL",
        startingPrice: "₹2,999",

        intro:
            "From simple landing pages to complete business websites and online stores, we create websites that look professional and work smoothly on every device.",

        types: [
            {
                name: "Landing Page",
                price: "₹2,999",
                description: "A single-page website to promote your business, product or service.",
                features: [
                    "Single-page website",
                    "Mobile-friendly design",
                    "Contact section",
                    "Call-to-action buttons",
                ],
            },
            {
                name: "Portfolio Website",
                price: "₹4,999",
                description: "Showcase your work, skills, projects and achievements.",
                features: [
                    "Home and About sections",
                    "Projects and portfolio",
                    "Skills and experience",
                    "Contact form",
                ],
            },
            {
                name: "Business Website",
                price: "₹7,999",
                description: "A professional website to present your business online.",
                features: [
                    "Home page",
                    "About and Services pages",
                    "Contact page",
                    "Responsive design",
                ],
            },
            {
                name: "Multi-page Website",
                price: "₹11,999",
                description: "A complete website with multiple pages and sections.",
                features: [
                    "Multiple custom pages",
                    "Navigation and footer",
                    "Contact form",
                    "Responsive design",
                ],
            },
            {
                name: "E-commerce Website",
                price: "₹14,999",
                description: "An online store where customers can browse and purchase products.",
                features: [
                    "Product listings",
                    "Shopping cart",
                    "Order management",
                    "Payment integration",
                ],
            },
            {
                name: "Blog / News Website",
                price: "₹7,999",
                description: "Publish articles, news and updates online.",
                features: [
                    "Blog and article pages",
                    "Categories",
                    "Admin content management",
                    "Search-friendly structure",
                ],
            },
            {
                name: "Educational Website",
                price: "₹9,999",
                description: "A platform for sharing courses, notes and educational resources.",
                features: [
                    "Course and subject sections",
                    "Notes and resources",
                    "Student-friendly design",
                    "Admin management",
                ],
            },
            {
                name: "NGO Website",
                price: "₹6,999",
                description: "Showcase your NGO's work, activities and social impact.",
                features: [
                    "About and mission",
                    "Activities and gallery",
                    "Donation section",
                    "Volunteer section",
                ],
            },
            {
                name: "Custom Web Application",
                price: "₹19,999+",
                description: "A custom web-based system built around your business needs.",
                features: [
                    "Custom dashboard",
                    "User authentication",
                    "Database integration",
                    "Custom functionality",
                ],
            },
        ],

        packages: [
            {
                name: "Starter",
                price: "₹2,999",
                description: "For individuals and small projects.",
                features: [
                    "Single-page website",
                    "Responsive design",
                    "Contact section",
                    "Basic SEO setup",
                ],
            },
            {
                name: "Business",
                price: "₹7,999",
                description: "For businesses building their online presence.",
                popular: true,
                features: [
                    "Up to 5 pages",
                    "Custom design",
                    "Contact form",
                    "Responsive design",
                    "Basic SEO setup",
                ],
            },
            {
                name: "Advanced",
                price: "₹14,999+",
                description: "For businesses needing advanced functionality.",
                features: [
                    "Custom multi-page website",
                    "Database integration",
                    "Admin functionality",
                    "Advanced features",
                    "SEO-friendly structure",
                ],
            },
        ],
    },

    {
        number: "02",
        slug: "app-development",
        title: "App Development",
        description:
            "We create easy-to-use mobile apps designed around your business and users.",
        icon: faMobileScreenButton,
        tag: "MOBILE / APPS",
        startingPrice: "₹14,999",

        intro:
            "Whether you need a business app, shopping app or a custom mobile application, we help turn your idea into a working mobile experience.",

        types: [
            {
                name: "Business App",
                price: "₹14,999",
                description: "An app to showcase your business and connect with customers.",
                features: [
                    "Business information",
                    "Services and products",
                    "Contact options",
                    "Mobile-friendly interface",
                ],
            },
            {
                name: "E-commerce App",
                price: "₹29,999",
                description: "Let customers browse products and place orders through an app.",
                features: [
                    "Product listings",
                    "Shopping cart",
                    "Order management",
                    "Payment integration",
                ],
            },
            {
                name: "Educational App",
                price: "₹24,999",
                description: "A mobile learning platform for students and educators.",
                features: [
                    "Course sections",
                    "Learning materials",
                    "Student accounts",
                    "Progress tracking",
                ],
            },
            {
                name: "Booking App",
                price: "₹24,999",
                description: "Allow customers to book appointments and services.",
                features: [
                    "Service listings",
                    "Booking system",
                    "Appointment management",
                    "Customer accounts",
                ],
            },
            {
                name: "Delivery App",
                price: "₹39,999",
                description: "An app for managing customer orders and deliveries.",
                features: [
                    "Order placement",
                    "Delivery status",
                    "Customer interface",
                    "Order management",
                ],
            },
            {
                name: "Social / Community App",
                price: "₹49,999",
                description: "Build a platform where users can connect and interact.",
                features: [
                    "User profiles",
                    "Posts and updates",
                    "User interactions",
                    "Community features",
                ],
            },
            {
                name: "Custom Mobile App",
                price: "₹49,999+",
                description: "A mobile application designed around your specific requirements.",
                features: [
                    "Custom functionality",
                    "User authentication",
                    "Database integration",
                    "Personalized interface",
                ],
            },
        ],

        packages: [
            {
                name: "Starter",
                price: "₹14,999",
                description: "For simple business applications.",
                features: [
                    "Basic app screens",
                    "Responsive interface",
                    "Basic navigation",
                    "Contact functionality",
                ],
            },
            {
                name: "Business",
                price: "₹29,999",
                description: "For businesses needing more functionality.",
                popular: true,
                features: [
                    "Multiple app screens",
                    "User accounts",
                    "Database integration",
                    "Custom functionality",
                    "API integration",
                ],
            },
            {
                name: "Advanced",
                price: "₹49,999+",
                description: "For feature-rich custom applications.",
                features: [
                    "Advanced functionality",
                    "Custom dashboard",
                    "User management",
                    "API integrations",
                    "Advanced database features",
                ],
            },
        ],
    },

    {
        number: "03",
        slug: "social-media-management",
        title: "Social Media Management",
        description:
            "We create engaging content and manage your social media presence.",
        icon: faHashtag,
        tag: "CONTENT / SOCIAL",
        startingPrice: "₹2,999/mo",

        intro:
            "We help your business stay active on social media through regular posts, creative content and a consistent online presence.",

        types: [
            {
                name: "Social Media Posts",
                price: "₹999+",
                description: "Creative posts to keep your audience engaged.",
                features: ["Post designs", "Brand colours", "Captions", "Social-ready formats"],
            },
            {
                name: "Reels & Short Videos",
                price: "₹499+",
                description: "Short-form videos to showcase your business.",
                features: ["Video editing", "Text and captions", "Basic transitions", "Social-ready format"],
            },
            {
                name: "Account Management",
                price: "₹2,999/mo",
                description: "Regular management of your social media accounts.",
                features: ["Content scheduling", "Profile management", "Regular posting", "Basic reporting"],
            },
        ],

        packages: [
            {
                name: "Starter",
                price: "₹2,999/mo",
                description: "For small businesses getting started.",
                features: ["8 posts per month", "Basic captions", "Content planning", "One platform"],
            },
            {
                name: "Growth",
                price: "₹5,999/mo",
                description: "For businesses looking to grow their audience.",
                popular: true,
                features: ["12 posts per month", "4 reels per month", "Captions", "Content planning", "Basic reporting"],
            },
            {
                name: "Premium",
                price: "₹9,999/mo",
                description: "For businesses needing regular social media support.",
                features: ["16 posts per month", "8 reels per month", "Content planning", "Account management", "Performance reports"],
            },
        ],
    },

    {
        number: "04",
        slug: "ai-automation",
        title: "AI & Automation",
        description:
            "We use smart tools to automate repetitive work and save your business time.",
        icon: faRobot,
        tag: "AI / AUTOMATION",
        startingPrice: "₹3,999",

        intro:
            "Make everyday business tasks easier with chatbots, automated replies, lead management and custom AI-powered solutions.",

        types: [
            {
                name: "AI Chatbot",
                price: "₹4,999",
                description: "A chatbot that answers common customer questions.",
                features: ["Website chatbot", "Common question answers", "Basic setup", "Customer assistance"],
            },
            {
                name: "WhatsApp Automation",
                price: "₹4,999",
                description: "Automate customer communication using supported WhatsApp tools.",
                features: ["Automated replies", "Message workflows", "Customer communication", "Basic setup"],
            },
            {
                name: "Lead Automation",
                price: "₹3,999",
                description: "Collect and organize customer enquiries automatically.",
                features: ["Lead collection", "Data organization", "Notifications", "Basic workflow"],
            },
            {
                name: "Business Automation",
                price: "₹7,999",
                description: "Reduce repetitive work with automated business processes.",
                features: ["Task automation", "Workflow setup", "Tool integration", "Process improvement"],
            },
            {
                name: "Custom AI Solution",
                price: "₹14,999+",
                description: "An AI-powered solution designed for your business.",
                features: ["Custom AI workflow", "Data integration", "Business-specific features", "Custom implementation"],
            },
        ],

        packages: [
            {
                name: "Starter",
                price: "₹3,999",
                description: "For simple business automation.",
                features: ["One basic workflow", "Initial setup", "Basic integration", "Testing"],
            },
            {
                name: "Business",
                price: "₹7,999",
                description: "For businesses automating regular tasks.",
                popular: true,
                features: ["Multiple workflows", "Tool integration", "Automation setup", "Testing and support"],
            },
            {
                name: "Advanced",
                price: "₹14,999+",
                description: "For custom AI and automation projects.",
                features: ["Custom workflows", "AI integration", "Advanced automation", "Custom implementation"],
            },
        ],
    },
     {
        number: "05",
        slug: "marketing-strategies",
        title: "Marketing Strategies",
        description:
            "We help your business reach the right people and attract more customers.",
        icon: faChartLine,
        tag: "STRATEGY / MARKETING",
        startingPrice: "₹999",

        intro:
            "We help you plan your digital marketing activities, improve your online visibility and reach people who are interested in your products or services.",

        types: [
            {
                name: "SEO Setup",
                price: "₹2,999",
                description: "Improve your website structure so search engines can understand it.",
                features: ["Basic SEO setup", "Page titles", "Meta descriptions", "Basic keyword research"],
            },
            {
                name: "Social Media Strategy",
                price: "₹1,999",
                description: "A content and growth plan for your social media accounts.",
                features: ["Content ideas", "Posting plan", "Audience research", "Growth suggestions"],
            },
            {
                name: "Google Business Setup",
                price: "₹999",
                description: "Set up your business profile to improve local visibility.",
                features: ["Profile setup assistance", "Business information", "Contact details", "Basic optimization"],
            },
            {
                name: "Ad Campaign Setup",
                price: "₹2,999",
                description: "Set up advertising campaigns to reach potential customers.",
                features: ["Campaign setup", "Audience selection", "Ad structure", "Basic tracking setup"],
            },
            {
                name: "Digital Marketing Plan",
                price: "₹4,999",
                description: "A marketing plan based on your business goals.",
                features: ["Business analysis", "Audience research", "Marketing channels", "Action plan"],
            },
        ],

        packages: [
            {
                name: "Starter",
                price: "₹1,999",
                description: "For businesses beginning digital marketing.",
                features: ["Basic marketing plan", "Audience research", "Growth suggestions"],
            },
            {
                name: "Business",
                price: "₹2,999",
                description: "For businesses looking to improve their reach.",
                popular: true,
                features: ["Marketing strategy", "SEO recommendations", "Social media planning", "Campaign suggestions"],
            },
            {
                name: "Premium",
                price: "₹4,999",
                description: "For businesses needing a complete marketing plan.",
                features: ["Business analysis", "Audience research", "Marketing roadmap", "Channel recommendations", "Performance planning"],
            },
        ],
    },

    {
        number: "06",
        slug: "digital-branding",
        title: "Digital Branding & Growth",
        description:
            "We help your business build a memorable identity and stand out online.",
        icon: faBullhorn,
        tag: "BRANDING / GROWTH",
        startingPrice: "₹499",

        intro:
            "From logo design to a complete brand identity, we help your business look professional and recognizable across digital platforms.",

        types: [
            {
                name: "Logo Design",
                price: "₹999",
                description: "A unique logo that represents your business.",
                features: ["Custom logo concept", "Colour selection", "High-quality files", "Final logo design"],
            },
            {
                name: "Brand Identity",
                price: "₹2,999",
                description: "Create a consistent visual identity for your business.",
                features: ["Logo design", "Brand colours", "Typography selection", "Basic brand guidelines"],
            },
            {
                name: "Business Card Design",
                price: "₹499",
                description: "Professional business cards for your brand.",
                features: ["Custom layout", "Contact details", "Print-ready design", "Digital format"],
            },
            {
                name: "Social Media Branding",
                price: "₹1,999",
                description: "Give your social media profiles a consistent look.",
                features: ["Profile graphics", "Post templates", "Brand colours", "Visual consistency"],
            },
            {
                name: "Complete Branding",
                price: "₹4,999",
                description: "A complete visual identity for your business.",
                features: ["Logo design", "Brand identity", "Social media assets", "Brand guidelines"],
            },
        ],

        packages: [
            {
                name: "Starter",
                price: "₹999",
                description: "For a new business needing a logo.",
                features: ["Logo design", "Colour selection", "Final design files"],
            },
            {
                name: "Business",
                price: "₹2,999",
                description: "For businesses building a consistent identity.",
                popular: true,
                features: ["Logo design", "Brand colours", "Typography", "Basic brand guidelines"],
            },
            {
                name: "Premium",
                price: "₹4,999",
                description: "For a complete digital brand identity.",
                features: ["Complete logo design", "Brand identity", "Social media assets", "Brand guidelines"],
            },
        ],
    },

   
];