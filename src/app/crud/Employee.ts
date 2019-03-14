export interface IEmployee {
    id: string;
    name: string;
    address: string;
    skills: ISkill[];
    email: string;
}

interface ISkill {
    skillName: string;
    experienceInYears: number;
    proficiency: string;
}