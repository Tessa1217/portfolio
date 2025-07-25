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

export interface ProjectInformation {
  id: number;
  title: string;
  period: string;
  description: string;
  tags: string[];
  projectType: "Company" | "Personal";
  backgroundImgUrl: string;
  githubUrl?: string;
  notionPageId?: string;
}
