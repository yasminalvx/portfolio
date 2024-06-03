import { ContentPortfolio } from "../models/content-portfolio";

export const portfolioEn: ContentPortfolio = {
    home: {
        title: "Hello, I'm",
        subtitle: "I'm",
        subtitle2: "Front-end Developer",
        description: "I'm a developer at Minsait, working with Angular and .NET. I develop modern and intuitive web applications with Angular, and implement robust and scalable backend systems with .NET. At Minsait, I collaborate on challenging projects, transforming complex requirements into effective solutions, always focused on high performance and usability.",
        buttonContact: "Contact me",
        buttonDownloadCV: "Download CV"
    },
    skills: {
        title: "Skills",
        description: "These are some of the technologies I work with:",
        technologies: [
            {
                name: "Angular",
                icon: "angular",
                level: 80
            },
            {
                name: "Sass",
                icon: "sass",
                level: 80
            },
            {
                name: ".Net",
                icon: "code",
                level: 40
            },
            {
                name: "Git",
                icon: "git",
                level: 95
            }
        ],
        technicalsSkills: [
            {
                name: "UX Design",
                icon: "paint-brush",
                level: 80
            },
            {
                name: "UI Design",
                icon: "palette",
                level: 80
            },
            {
                name: "Figma",
                icon: "figma",
                level: 40
            }
        ],
        codingSkillsTitle: "Coding Skills",
        technicalSkillsTitle: "Technical Skills"
    },
    projects: {
        title: "Projects",
        description: "These are some of the projects I've worked on:",
        buttonTitle: "View",
        projects: [
            {
                title: "Project 1",
                description: "Description of project 1",
                image: "assets/project-1.jpg",
                technologies: ["Angular", "Sass"],
                link: "https://www.google.com"
            },
            {
                title: "Project 2",
                description: "Description of project 2",
                image: "assets/project-2.jpg",
                technologies: [".Net", "Git"],
                link: "https://www.google.com"
            },
            {
                title: "Project 3",
                description: "Description of project 3",
                image: "assets/project-3.jpg",
                technologies: ["Angular", "Figma"],
                link: "https://www.google.com"
            }
        ]
    },
    navbarTitles: {
        home: "Home",
        skills: "Skills",
        projects: "Projects"
    },
    contactMeTitle: "Contact me"
}