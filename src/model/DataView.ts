export interface IExperienceCard {
    post: string;
    company: string;
    stackIconsLink: string[];
    summary: string[];
    startDate: string;
    endDate?: string;
    linkProjeto?: string[];
}

export interface IAbout {
    picture: string;
    aboutMeText: string;
    facts: string[];
}

export interface IHero {
    picture: string;
    descriptions: string[];
}

export interface IHeader {
    socials: string[];
}

export interface IProjects {
    logo: string;
    name: string;
    descriptions: string[];
    link: string;
}