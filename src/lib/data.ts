import type { SkillInformation } from "@/types";

export const HERO_IDENTIFICATION = ["YuJin Kwon", "권유진"];
export const HERO_TEXT = [
  "3년차 열정러",
  "배움을 향한 열정이 가득한",
  "사용자 경험을 극대화하는",
];

export const PHILOSOPHY_ABOUT = [
  {
    key: "curiosity",
    title: "끊임없는 탐구",
    description:
      "새로운 기술을 학습하고 실험하며, 프로젝트에 적용하는 과정을 통해 지속적으로 성장합니다.",
  },
  {
    key: "share",
    title: "지식 공유",
    description:
      "기술 세미나와 문서화를 통해 팀원들과 인사이트를 공유하며 함께 성장하는 문화를 만듭니다.",
  },
  {
    key: "enhancement",
    title: "생산성 향상",
    description:
      " 디자인 시스템과 공통 컴포넌트로 팀 전체의 개발 효율성을 높이는 데 집중합니다.",
  },
];

export const STRENGTH_ABOUT = [
  {
    key: "architecture",
    title: "아키텍처 설계 및 기술 도입 주도",
    detailType: "stacks",
    details: [
      {
        title: "레거시 모던화 전문",
        description: "Spring MVC + JSP → Vue.js 3 전환 프로젝트 다수 주도",
      },
      {
        title: "컴포넌트 중심 설계",
        description: "Pinia 상태 관리 및 Composable 패턴 적용",
      },
      {
        title: "모노레포 구조",
        description: "Turborepo + pnpm workspace로 재사용성 극대화",
      },
    ],
    stacks: ["Vue.js 3", "TypeScript", "Composables"],
  },
  {
    key: "culture",
    title: "지식 공유 및 팀 문화 조성",
    detailType: "impacts",
    details: [
      {
        title: "기술 세미나 주도",
        description:
          "Vue.js 마이그레이션 가이드, 성능 최적화 등 정기 세션 진행",
      },
      {
        title: "문서화 문화",
        description: "가이드 문서 4건+ 작성으로 팀 온보딩 시간 단축",
      },
      {
        title: "지식 공유 문화",
        description: "온보딩 세션 및 코드 리뷰를 통한 팀 역량 강화",
      },
    ],
    impacts: [
      {
        number: 4,
        suffix: "+",
        impact: "가이드 문서",
      },
      {
        number: 2,
        suffix: "+",
        impact: "기술 세미나",
      },
      {
        number: 100,
        suffix: "%",
        impact: "팀 커버리지",
      },
    ],
  },
  {
    key: "platform",
    title: "플랫폼 지향 개발",
    detailType: "stacks",
    details: [
      {
        title: "Starter Template 시스템 구축",
        description:
          "Atomic Design 기반 Starter Template 시스템 설계 및 전사 적용",
      },
      {
        title: "디자인 시스템 구축",
        description:
          "일관된 UI/UX를 위한 토큰 시스템 구축 및 개발 생산성 향상을 위한 디자인 시스템 기반 UI 시스템 구축",
      },
      {
        title: "개발 도구",
        description:
          "UI 코드 제너레이터 개발로 반복 작업 자동화에 대한 개선 방안 모색",
      },
    ],
    stacks: ["React 19", "Vanilla Extract", "Turborepo"],
  },
];

export const QUESTION_ANS_ANSWER = [
  {
    key: "question_1",
    question: "프론트엔드 개발을 시작하게 된 계기는 무엇인가요?",
    answer:
      "프론트엔드는 사용자의 반응을 가장 먼저 만날 수 있어서, 제 일에 대한 피드백이 즉각적으로 오는 게 무척 보람됐습니다. 계속 변화하는 기술 흐름을 따라가며 공부하고 다양한 시도와 경험을 할 수 있다는 점도 저의 도전적이고 열정적인 성향과 잘 맞았습니다. 그래서 망설임 없이 프론트엔드를 선택하게 되었습니다!",
  },
  {
    key: "question_2",
    question: "개발자로서 가장 중요하게 생각하는 가치는 무엇인가요?",
    answer:
      "배움과 책임감입니다. 개발은 늘 새롭고 예측 불가능한 문제를 마주하는 일이기에, 배움을 멈추지 않는 태도가 중요하다고 생각해요. 그리고 맡은 일에 책임을 지는 자세는 동료와 팀의 신뢰를 만들 수 있습니다. 저는 멈춰있지 않고, 항상 동료들에게 의지될 수 있는 개발자가 되려고 노력합니다.",
  },
  {
    key: "question_3",
    question: "앞으로 어떤 개발자가 되고 싶나요?",
    answer:
      "배움을 즐기되, 그걸 팀과 함께 나눌 수 있는 개발자가 되고 싶어요. 실력만 키우는 게 아니라, 나의 고민과 해결 과정을 팀원과 공유하고 함께 성장하는 문화를 만드는 개발자가 되고 싶습니다.",
  },
];

export const WORK_EXPERIENCE = [
  {
    id: 1,
    company: "(주)퓨전소프트",
    role: "Frontend Developer",
    period: "2022.10 - Present",
    description:
      "Vue.js 기반 교육·공공 서비스 UI/UX 최적화, 성능 개선 프로젝트 진행",
    logoUrl: "/logo/Company_1_logo.png",
    projects: [
      {
        id: "daegu-cloud",
        title: "대구광역시 클라우드 네이티브 전환 사업",
        period: "2025-09-현재",
        description:
          "Vue.js 3 기반 프론트엔드와 MSA 기반의 클라우드 네이티브 전환 사업",
        tags: [
          "Vue.js",
          "Pinia",
          "Vite",
          "Monorepo",
          "Turborepo",
          "Java",
          "Spring Boot",
          "Spring Security",
          "CUBRID",
          "Mybatis",
        ],
        projectType: "Company",
        backgroundImgUrl: "/illustration/project_4.png",
        githubUrl: "",
        notionPageId: "2e5184f7752480fbb16dfbbe9f9b0406",
      },
      {
        id: "daegu-science",
        title: "국립대구과학관 홈페이지 개편",
        period: "2025.02-2025.05",
        description:
          "Vue.js 3 기반 프론트엔드와 Spring boot 기반의 사용자/관리자 웹 서비스 개편",
        tags: [
          "Vue.js",
          "Pinia",
          "Vite",
          "Java",
          "Spring Boot",
          "MySQL",
          "Mybatis",
        ],
        projectType: "Company",
        backgroundImgUrl: "/illustration/project_1.png",
        githubUrl: "",
        notionPageId: "239184f775248089bfe1e54251392601",
      },
      {
        id: "edunet",
        title: "에듀넷 티-클리어 클라우드 전환 및 서비스 재구조화",
        period: "2024.08-2025.02",
        description:
          "Legacy 기반으로 운영되던 에듀넷 사용자 서비스를 포함한 6개의 서비스를 클라우드 환경에 맞게 구조를 재설계 및 통합 마이그레이션",
        tags: [
          "Vue.js",
          "Pinia",
          "Vite",
          "Java",
          "Spring Boot",
          "MySQL",
          "Mybatis",
          "MSA",
          "Figma",
        ],
        projectType: "Company",
        backgroundImgUrl: "/illustration/project_2.png",
        githubUrl: "",
        notionPageId: "239184f77524806bba34ebde22ca0fda",
      },
      {
        id: "admin-starter",
        title: "관리자 사이트 Starter 프로젝트 구축",
        period: "2024.01-2024.07",
        description:
          "관리자(Admin) 공통 기능을 분석하여 사내 진행 프로젝트에서 도입할 수 있도록 관리자 사이트 Starter 프로젝트를 구축",
        tags: [
          "Vue.js",
          "Pinia",
          "Tailwind CSS",
          "Vite",
          "Java",
          "Spring Boot",
          "Spring Data JPA",
          "MySQL",
        ],
        projectType: "Company",
        backgroundImgUrl: "/illustration/project_3.png",
        githubUrl: "",
        notionPageId: "239184f7752480f3817dc1b9fe2a4d29",
      },
    ],
  },
];

export const PERSONAL_PROJECT_EXPERIENCE = [
  {
    id: "low-code-generator",
    title: "Low-Code UI Generator",
    period: "2025.11-2025.12",
    description:
      "디자인 시스템 기반의 시각적 페이지 빌더로 드래그 앤 드롭을 통해 React 컴포넌트를 구성하고 즉시 프로덕션 레디 코드를 생성하는 프로젝트",
    tags: [
      "React.js",
      "Vanilla Extract",
      "Style Dictionary",
      "@dnd-kit",
      "@xyflow/react",
      "@monaco-editor",
      "Vite",
    ],
    projectType: "Personal",
    backgroundImgUrl: "/illustration/project_5.png",
    githubUrl: "https://github.com/Tessa1217/lowcode-generator",
    notionPageId: "2e5184f77524800597f9c3b2384dff27",
  },
  {
    id: "personal-portfolio",
    title: "YK Portfolio",
    period: "2025.06-2025.07",
    description:
      "React.js 기반 Framer Motion을 활용한 개인 포트폴리오 프로젝트",
    tags: ["React.js", "Vite", "Framer Motion", "Tailwind CSS"],
    projectType: "Personal",
    backgroundImgUrl: "/illustration/project_3.png",
    githubUrl: "https://github.com/Tessa1217/portfolio",
    notionPageId: "23f184f7752480f1ad9fe60afd3ade16",
  },
];

export const SKILL_SET: Record<string, SkillInformation[]> = {
  frontend: [
    {
      id: 1,
      skillName: "JavaScript",
      skillIconUrl: "/logo/JavaScript.png",
    },
    {
      id: 2,
      skillName: "TypeScript",
      skillIconUrl: "/logo/TypeScript.png",
    },
    {
      id: 3,
      skillName: "React",
      skillIconUrl: "/logo/React.png",
    },
    {
      id: 4,
      skillName: "Vue.js",
      skillIconUrl: "/logo/Vue.js.png",
    },
    {
      id: 5,
      skillName: "Tailwind CSS",
      skillIconUrl: "/logo/Tailwind CSS.png",
    },
    {
      id: 6,
      skillName: "Vanilla Extract",
      skillIconUrl: "/logo/Vanilla-Extract.png",
    },
  ],
  backend: [
    {
      id: 1,
      skillName: "Java",
      skillIconUrl: "/logo/Java.png",
    },
  ],
  database: [
    {
      id: 1,
      skillName: "MySQL",
      skillIconUrl: "/logo/MySQL.png",
    },
    {
      id: 2,
      skillName: "PostgresSQL",
      skillIconUrl: "/logo/PostgresSQL.png",
    },
  ],
  design: [
    {
      id: 1,
      skillName: "Figma",
      skillIconUrl: "/logo/Figma.png",
    },
  ],
  build: [
    {
      id: 1,
      skillName: "Vite",
      skillIconUrl: "/logo/Vite.js.png",
    },
    {
      id: 2,
      skillName: "Gradle",
      skillIconUrl: "/logo/Gradle.png",
    },
  ],
};
