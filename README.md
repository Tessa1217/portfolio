# 🌐 Developer Portfolio

## 권유진의 포트폴리오 사이트입니다.
🔗 링크: https://portfolio-six-indol-86.vercel.app/

<img width="1866" height="916" alt="스크린샷 2025-07-30 035028" src="https://github.com/user-attachments/assets/c826d1f7-b040-4e2c-b428-2ebf733c26ba" />

## ✨ Features

- 🌀 **React + TailwindCSS 기반** 반응형 UI
- ✨ `Framer Motion`를 활용한 애니메이션
- 📌 **Q&A 섹션**을 통한 개발자 철학 소개
- 🛠 Introduction / About / Experience / Skills 섹션 구성
- 🌈 배경 모션 particles 및 텍스트 타이핑 애니메이션

---
## 🛠 기술 스택

| 영역      | 기술                               |
| --------- | ---------------------------------- |
| Frontend  | React 18, TypeScript, Tailwind CSS |
| Animation | Framer Motion                      |
| Build     | Vite                               |
| Deploy    | Vercel                             |

## 📁 프로젝트 구조

```bash
.
├── .github/workflows/deploy.yml # vercel 베포
├── public/
├── api/notion-page.js           # 노션 page fetch를 위한 serverless function
├── src/
│   ├── assets/                  # 이미지 및 아이콘
│   ├── components/              # UI 구성 컴포넌트
│   ├── constants/               # 애니메이션 variants 설정
│   ├── hooks/                   # custom hooks (e.g. useInViewAnimation)
│   ├── lib/                     # 정보 데이터
│   ├── pages/                   # 각 섹션 (About, Skills, Projects, Experience and etc)
│   ├── styles/                  # Tailwind 및 글로벌 스타일
│   ├── types/                   # types
│   └── App.tsx                  # 전체 레이아웃 조립
├── vite.config.ts               # vite 설정
└── README.md
```

## 🚀 실행 방법

```bash
# install dependencies
npm install

# run local dev server
npm run dev

# build for production
npm run build
```
