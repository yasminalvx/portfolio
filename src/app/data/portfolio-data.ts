import { ContentPortfolio } from "../models/content-portfolio";

export const portfolioEn: ContentPortfolio = {
    home: "I'm a developer at Minsait, working with Angular and .NET. I develop modern and intuitive web applications with Angular, and implement robust and scalable backend systems with .NET. At Minsait, I collaborate on challenging projects, transforming complex requirements into effective solutions, always focused on high performance and usability.",
    skills: {
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
    },
    projects:  [
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
    
}