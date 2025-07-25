export const HERO_IDENTIFICATION = ["YuJin Kwon", "권유진"];
export const HERO_TEXT = [
  "3년차 열정러",
  "배움을 향한 열정이 가득한",
  "사용자 경험을 극대화하는",
];

export const QUESTION_ANS_ANSWER = [
  {
    key: "question_1",
    question: "프론트엔드 개발을 시작하게 된 계기는 무엇인가요?",
    answer:
      "저는 사용자의 행동과 심리를 분석하는 데 관심이 많았고, 그것을 시작적이고 직관적으로 구현할 수 있는 프론트엔드에 매력을 느꼈어요.",
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
    logoUrl: "/logo/Vue.js.png",
    projects: [
      {
        id: 1,
        title: "국립대구과학관 홈페이지 개편",
        period: "2025.02-2025.05",
        description:
          "국립대구과학관 사용자 및 관리자 서비스를 Vue.js 3 기반 프론트엔드와 Spring boot 기반 백엔드로 통합하여 클라우드 환경에 맞춰 고도화를 진행했습니다.",
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
        id: 2,
        title: "에듀넷 티-클리어 클라우드 전환 및 서비스 재구조화",
        period: "2024.08-2025.02",
        description:
          "Legacy 기반으로 운영되던 에듀넷 사용자 서비스를 포함한 6개의 서비스를 클라우드 환경에 맞게 구조를 재설계 및 통합 마이그레이션을 진행했습니다.",
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
        id: 3,
        title: "사내 관리자 프레임워크 개발",
        period: "2024.01-2024.07",
        description:
          "사내 프로젝트의 관리자(Admin) 공통 기능을 분석하여 다양한 서비스에 일관된 기능을 제공할 수 있도록 재사용 가능한 관리자 Framework 구축",
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
    id: 1,
    title: "YK Portfolio",
    period: "2025.06-2025.07",
    description:
      "React.js 기반 Framer Motion을 활용한 개인 포트폴리오 프로젝트",
    tags: ["React.js", "Vite", "Framer Motion", "Tailwind CSS"],
    projectType: "Personal",
    backgroundImgUrl: "/illustration/project_3.png",
    githubUrl: "",
    notionPageId: "239184f7752480f3817dc1b9fe2a4d29",
  },
];

export const SKILL_SET = {
  frontend: [
    {
      name: "JavaScript",
      icon: "/logo/JavaScript.png",
    },
    {
      name: "Vue.js",
      icon: "/logo/Vue.js.png",
    },
    {
      name: "React",
      icon: "/logo/React.png",
    },
    {
      name: "Tailwind CSS",
      icon: "/logo/Tailwind CSS.png",
    },
    {
      name: "TypeScript",
      icon: "/logo/TypeScript.png",
    },
  ],
  backend: [
    {
      name: "Java",
      icon: "/logo/Java.png",
    },
  ],
  database: [
    {
      name: "MySQL",
      icon: "/logo/MySQL.png",
    },
    {
      name: "PostgresSQL",
      icon: "/logo/PostgresSQL.png",
    },
  ],
  design: [
    {
      name: "Figma",
      icon: "/logo/Figma.png",
    },
  ],
  build: [
    {
      name: "Vite",
      icon: "/logo/Vite.js.png",
    },
    {
      name: "Gradle",
      icon: "/logo/Gradle.png",
    },
  ],
};
