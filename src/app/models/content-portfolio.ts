import { Technology } from "../body/skills/card-skill/card-skill.component";


export interface ContentPortfolio {
    home: Home;
    skills: Skills;
    projects: Project;
    contactMeTitle: string;
    navbarTitles: NavbarItem;
}

interface Home {
    title: string;
    subtitle: string;
    subtitle2: string;
    description: string;
    buttonContact: string;
    buttonDownloadCV: string;
}

interface Skills {
    title: string;
    description: string;
    technologies: Technology[];
    technicalsSkills: Technology[];
    codingSkillsTitle: string;
    technicalSkillsTitle: string;
}

export interface Project {
    title: string;
    description: string;
    projects: ProjectItem[];
    buttonTitle: string;
}

export interface ProjectItem {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    link: string;
}

interface NavbarItem { 
    home: string;
    skills: string;
    projects: string;
}