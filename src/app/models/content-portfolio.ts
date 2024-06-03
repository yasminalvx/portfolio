import { Technology } from "../modules/body/skills/card-skill/card-skill.component";


export interface ContentPortfolio {
    home: string;
    skills: Skills;
    projects: ProjectItem[];
}

interface Skills {
    technologies: Technology[];
    technicalsSkills: Technology[];
}

export interface ProjectItem {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    link: string;
}