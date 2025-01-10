import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, IconBrandYoutube, IconKeyboard } from "@tabler/icons-react";
import Interview from './assets/interview.jpeg'
const Info = {
    name: "Asamit",
    stack: ["Software Engineer", "Full Stack Developer", "Competitive Programmer"],
    bio: "I'm a beginner software engineer eager to learn and apply my skills to develop efficient and scalable solutions. I’m excited to collaborate on projects that push my skills forward and help me become a better developer over time!"
}



const ProjectInfo = [
    {
        title: "InterviewMentorAI",
        desc: "Online Interview Preparation Tool : Developed an innovative SaaS application allowing users to upload resumes and participate in simulated online interviews, utilizing the Google Gemini API for personalized interview functionalities. Enabled users to efficiently view past feedback, significantly boosting user preparedness.",
        // image: "interview.jpeg",
        image: './assets/interview.jpeg',
        live: true,
        technologies: ["Next.JS", "TypeScript", "Drizzle ORM", "Google Gemini API", "Clerk"],
        link: "https://interview-mentor-ai-jade.vercel.app/",
        github: "https://github.com/Spidey00007/Interview-MentorAI"
    },

    {
        title: "EasyFormAI",
        desc: "Customizable Form Creation Tool : Developed a versatile SaaS application enabling users to create and customize forms with a variety of themes, backgrounds, and styles, leveraging the Google Gemini API for advanced functionalities.",
        image: "./assets/form.webp",
        live: true,
        technologies: ["Next.JS", "TypeScript", "Drizzle ORM", "Google Gemini API", "Clerk"],
        link: "https://easy-form-wheat.vercel.app/",
        github: "https://github.com/Spidey00007/Easy-Form"
    },
]


const SkillInfo = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS", "JavaScript", "React JS", "Redux", "Tailwind CSS"]
    },
    {
        title: "Backend",
        skills: ["Node JS", "Express JS", "MySQL", "MongoDB", "Firebase", "PostgresSQL"]
    },
    {
        title: "Languages",
        skills: ["C", "C++", "JavaScript", "TypeScript"]
    },
    {
        title: "Tools",
        skills: ["Git", "Github", "VS Code", "Postman", "MongoDB Compass"]
    }
]

const socialLinks = [
    { link: "https://github.com/Spidey00007", icon: IconBrandGithub },
    { link: "https://www.leetcode.com/u/Spidey7", icon: IconBrandLeetcode },
    { link: "https://www.linkedin.com/in/asamit-kumar-b34bbb256/", icon: IconBrandLinkedin },
    { link: "https://monkeytype.com/profile/Spidey77", icon: IconKeyboard },
];

const ExperienceInfo = [
    {
        role: "Intern",
        company: "Infosys",
        date: "Present",
        desc: "I led software development with Spring Boot, React, and Angular, creating scalable microservices and interfaces. I optimized performance by integrating frontend and backend, and enhanced security with RESTful APIs. Collaborating in agile teams, I fostered innovation and efficiency for top-quality solutions.",
        skills: ["Springboot", "React JS", "Angular", "Node JS", "MySQL", "MongoDB", "Microservices"]
    },
    
]
const Slugs = [
    "typescript",
    "spring",
    "javascript",
    "dart",
    "java",
    "react",
    "angular",
    "flutter",
    "android",
    "html5",
    "css3",
    "springboot",
    "mongodb",
    "selenium",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "mysql",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];
export { Info, ProjectInfo,socialLinks, SkillInfo, ExperienceInfo, Slugs };