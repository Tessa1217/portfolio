export interface DetailStrengthProps {
  title: string;
  description: string;
  colorVariant: string;
}

export interface TechStackProps {
  stack: string;
  colorVariant: string;
}

export interface ImpactNumberDetailStrengthProps {
  number: number;
  suffix?: string;
  impact: string;
  colorVariant: string;
}

export type StrengthKey = "architecture" | "culture" | "platform";

export type DetailType = "stacks" | "impacts";

export interface StrengthCardProps {
  key: StrengthKey;
  title: string;
  detailType: DetailType;
  details: DetailStrengthProps[];
  stacks?: string[];
  impacts?: ImpactNumberDetailStrengthProps[];
  icon?: React.ReactElement;
  colorVariant: string;
}
