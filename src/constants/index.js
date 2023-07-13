import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiMysql,
  SiPython,
  SiCplusplus,
  SiSocketdotio,
  SiGit,
  SiBootstrap,
  SiVisualstudiocode,
  SiPostman,
  SiNetlify,
  SiVercel,
  SiGithub,
  SiFigma,
  SiUbuntu,
} from "react-icons/si";
import { FaNode, FaJava } from "react-icons/fa";
import { GiMongolia } from "react-icons/gi";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  Scraper,
  techzee,
  NextBlog,
  threejs,
  jewel,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "Project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "Resume",
    title: "Resume",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI UX developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML",
    icon: AiFillHtml5,
  },
  {
    name: "CSS",
    icon: DiCss3,
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
  },
  {
    name: "React JS",
    icon: SiReact,
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
  },
  {
    name: "Node JS",
    icon: FaNode,
  },
  {
    name: "Express JS",
    icon: SiExpress,
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
  },
  {
    name: "Next JS",
    icon: SiNextdotjs,
  },
  {
    name: "SQL",
    icon: SiMysql,
  },
  {
    name: "Python",
    icon: SiPython,
  },
  {
    name: "C++",
    icon: SiCplusplus,
  },
  {
    name: "Java",
    icon: FaJava,
  },
  {
    name: "Web Sockets",
    icon: SiSocketdotio,
  },
  {
    name: "Git",
    icon: SiGit,
  },
  {
    name: "Bootstrap",
    icon: SiBootstrap,
  },
];
const toolsUsed = [
  {
    name: "VS Code",
    icon: SiVisualstudiocode,
  },
  {
    name: "Postman",
    icon: SiPostman,
  },
  {
    name: "MongoDB Atlas",
    icon: GiMongolia,
  },
  {
    name: "Netlify",
    icon: SiNetlify,
  },
  {
    name: "Vercel",
    icon: SiVercel,
  },
  {
    name: "Github",
    icon: SiGithub,
  },
  {
    name: "Figma",
    icon: SiFigma,
  },
  {
    name: "Ubuntu",
    icon: SiUbuntu,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Scraper",
    description:
      "This web application utilizes web scraping techniques to gather data from various e-commerce websites. The scraped data, including product prices and details, is then stored and visualized on interactive charts. Users can track price fluctuations over time and set up personalized reminders for price drops or specific target prices. The project combines data scraping, data storage, and data visualization to provide users with valuable insights and help them make informed purchasing decisions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "puppetear",
        color: "pink-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
    ],
    image: Scraper,
    source_code_link: "https://github.com/Abhishek3223/Scraper-frontend",
    live_code_link: "https://scraaper.netlify.app/",
  },
  {
    name: "StudySnc",
    description:
      "Our Django-powered website is a cutting-edge online platform, akin to Discord, meticulously designed to facilitate seamless communication and collaboration. With robust features, including real-time messaging, voice and video calls, and intuitive channel organization, our platform empowers users to connect and engage effortlessly. Built on Django's scalable architecture, our website ensures optimal performance, security, and extensibility, delivering a seamless and immersive experience for tech-savvy individuals.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Abhishek3223/StudySnc",
  },
  {
    name: "NextBLog",
    description:
      "NextBlog is a dynamic and interactive blogging website built on Next.js. With its seamless rendering, server-side rendering, and static site generation capabilities, NextBlog provides users with fast-loading, SEO-friendly blogs. Its intuitive interface, customizable templates, and extensive plugin support make it the perfect platform for bloggers to express their thoughts and engage with readers.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: NextBlog,
    source_code_link: "https://github.com/Abhishek3223/NextBlog",
    live_code_link: "https://next-blog-blush-zeta.vercel.app/",
  },

  {
    name: "TechZee",
    description:
      "Our MERN-based video streaming website, powered by MongoDB, Express.js, React.js, and Node.js, offers a technologically advanced Zoom-like platform. Seamlessly connecting users with high-quality video streaming, real-time chat, and customizable meeting settings, it provides a secure and immersive virtual communication experience.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: techzee,
    source_code_link: "https://github.com/ankur020/Tech-Zee-frontend",
    live_code_link: "https://tzee.netlify.app/ ",
  },
  {
    name: "Jewel",
    description:
      "Jewel is a sophisticated e-commerce website that offers a wide range of exquisite jewelry pieces to fulfill your desires for elegance and luxury. Built on the cutting-edge Next.js framework, this online platform provides a seamless and immersive shopping experience.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Nextjs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: jewel,
    source_code_link: "https://github.com/Abhishek3223/Jewels",
    live_code_link: "https://jewels-chi.vercel.app/",
  }
];


export {
  services,
  toolsUsed,
  technologies,
  experiences,
  testimonials,
  projects,
};


