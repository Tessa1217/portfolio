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
