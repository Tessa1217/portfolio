import { STRENGTH_ABOUT } from "@/lib/data";
import { Animated } from "@/components/animation";
import {
  ICON_MAP,
  STRENGTH_COLOR_MAP,
  COLOR_CLASSES,
  TECH_ICON_MAP,
} from "@/components/about/strength-config";
import type {
  TechStackProps,
  StrengthCardProps,
  DetailStrengthProps,
  ImpactNumberDetailStrengthProps,
} from "@/types/strength";

function TechStackPill({ stack, colorVariant }: TechStackProps) {
  const colors = COLOR_CLASSES[colorVariant];
  const icon = TECH_ICON_MAP[stack];
  return (
    <span
      className={`px-3 py-1.5 ${colors.bg} ${colors.text} rounded-full text-sm font-medium flex items-center gap-2`}
    >
      <>
        {icon} {stack}
      </>
    </span>
  );
}

function ImpactNumber({
  number,
  suffix,
  impact,
  colorVariant,
}: ImpactNumberDetailStrengthProps) {
  const colors = COLOR_CLASSES[colorVariant];
  return (
    <div className={`p-4 ${colors.bg} rounded-xl`}>
      <p className={`text-2xl font-bold ${colors.text} mb-1`}>
        <>
          {number}
          {suffix}
        </>
      </p>
      <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
        {impact}
      </p>
    </div>
  );
}

function StrengthDetailCard({
  title,
  description,
  colorVariant,
}: DetailStrengthProps) {
  const colors = COLOR_CLASSES[colorVariant];
  return (
    <Animated.ListItem className="flex items-start gap-3 mb-3">
      <span className={`shrink-0 w-2 h-2 rounded-full ${colors.bullet} mt-2`} />
      <p className="text-light-text-secondary dark:text-dark-text-secondary text-start">
        <strong className="text-light-text dark:text-dark-text">{title}</strong>
        : {description}
      </p>
    </Animated.ListItem>
  );
}

interface StrengthCardComponentProps {
  strength: StrengthCardProps;
  colorVariant: string;
}

function StrengthCard({ strength, colorVariant }: StrengthCardComponentProps) {
  const colors = COLOR_CLASSES[colorVariant];
  const icon = ICON_MAP[strength.key];
  return (
    <Animated.Card
      hoverEffect="glow"
      viewport="aggressive"
      className="group p-8 bg-linear-to-br from-light-card to-light-background-secondary dark:from-dark-card dark:to-dark-background-secondary rounded-2xl border border-light-border dark:border-dark-border"
    >
      <div className="flex items-start gap-6">
        {/* 아이콘 */}
        <div className="shrink-0">
          <div
            className={`w-16 h-16 rounded-2xl ${colors.gradient} flex items-center justify-center`}
          >
            {icon}
          </div>
        </div>

        {/* 컨텐츠 */}
        <div className="flex-1">
          <h4 className="text-2xl font-bold text-light-text dark:text-dark-text mb-4">
            {strength.title}
          </h4>

          {/* 상세 설명 리스트 */}
          <Animated.List staggerSpeed="fast">
            {strength.details.map((detail) => (
              <StrengthDetailCard
                key={detail.title}
                {...detail}
                colorVariant={colorVariant}
              />
            ))}
          </Animated.List>

          {/* Impact Numbers */}
          {strength.detailType === "impacts" && strength.impacts && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
              {strength.impacts.map((impact, index) => (
                <ImpactNumber
                  key={`impact-${index}`}
                  {...impact}
                  colorVariant={colorVariant}
                />
              ))}
            </div>
          )}

          {/* Tech Stack Pills */}
          {strength.detailType === "stacks" && strength.stacks && (
            <div className="flex flex-wrap gap-2 mt-6">
              {strength.stacks.map((tech) => (
                <TechStackPill
                  key={tech}
                  stack={tech}
                  colorVariant={colorVariant}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </Animated.Card>
  );
}

export default function Strength() {
  const strengths = STRENGTH_ABOUT as StrengthCardProps[];
  return (
    <>
      <Animated.Box animation="fadeInUp" viewport="aggressive" className="mb-8">
        <h3 className="text-3xl font-bold text-light-text dark:text-dark-text mb-12 text-center">
          Core Strengths
        </h3>
      </Animated.Box>
      <div className="space-y-8">
        {strengths.map((strength) => (
          <StrengthCard
            key={strength.key}
            strength={strength}
            colorVariant={STRENGTH_COLOR_MAP[strength.key]}
          />
        ))}
      </div>
    </>
  );
}
