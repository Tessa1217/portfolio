export interface QuestionAnswer {
  question: string;
  answer: string;
}

export interface WorkInformation {
  id: number;
  company: string;
  role: string;
  period: string;
  logoUrl: string;
  description?: string;
}

export const ProjectType = ["Company", "Personal"] as const;

export interface ProjectInformation {
  id: string;
  title: string;
  period: string;
  description: string;
  tags: string[];
  projectType: (typeof ProjectType)[number];
  backgroundImgUrl: string;
  githubUrl?: string;
  notionPageId?: string;
}

export interface SkillInformation {
  id: number;
  skillName: string;
  skillIconUrl: string;
}
