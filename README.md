# 🌐 Developer Portfolio

## 권유진의 포트폴리오 사이트입니다.

🔗 **Live Demo**

https://portfolio-six-indol-86.vercel.app/

---

## ✨ Features

- ⚡ **Next.js 기반의 포트폴리오 제작**
- 🌀 **React 19 + Tailwind CSS**를 활용한 반응형 UI
- ✨ **Framer Motion**을 활용한 자연스러운 인터랙션 애니메이션
- 🌗 **Light / Dark Mode 지원** (Tailwind CSS 기반)
- 🌈 배경 파티클 모션 및 타이핑 텍스트 애니메이션
- 🛠 Introduction / About / Experience / Skills 섹션 구성

---

## 🔄 Migration: Vite → Next.js

기존 포트폴리오는 **Vite + React** 환경에서 운영되었으며,

Notion 페이지를 API로 불러오는 구조였습니다.

### ❗ 문제점

- Notion 페이지 fetch 시 **4~5초 이상의 로딩 시간**
- 초기 진입 시 콘텐츠를 즉시 확인하기 어려움
- Lighthouse 기준 **Blocking Time 및 Dependency Tree 이슈**

### ✅ 해결 방법

- **Next.js로 마이그레이션**
- **ISR (Incremental Static Regeneration)** 적용
  - 빌드 시 페이지를 정적으로 생성
  - 일정 주기로 증분 빌드를 수행하여 최신 데이터 유지
- 사용자는 **즉시 페이지를 확인 가능**, 성능 및 UX 개선

---

## 🚀 Performance & UX Improvements

- ⚡ **ISR 적용**
  - Notion 기반 콘텐츠를 정적 페이지로 제공
  - 서버 요청 없이 빠른 페이지 접근 가능
- 🔤 **Font Optimization**
  - `next/font`를 활용한 폰트 로딩 최적화
  - 불필요한 외부 폰트 요청 제거
  - Lighthouse 기준 **Blocking Time / Dependency Tree 개선**
- 🌗 **Light / Dark Mode**
  - Tailwind CSS 기반 테마 전환
  - 시스템 테마 및 사용자 선택 대응

---

## 🛠 기술 스택

| 영역      | 기술                                  |
| --------- | ------------------------------------- |
| Framework | Next.js, React 19, TypeScript         |
| Styling   | Tailwind CSS                          |
| Animation | Framer Motion                         |
| Rendering | ISR (Incremental Static Regeneration) |
| Deploy    | Vercel                                |

---

## 📁 프로젝트 구조

> Next.js App Router 기반
>
> 모든 소스 코드는 `src/` 하위에 위치합니다.

```bash
.
├── public/
├── src/
│   ├── app/ # Next.js App Router
│   │   ├── project/[id] #Slug를 통한 project별 페이지
│   │   ├── layout.tsx # Root layout
│   │   └── page.tsx # Main page
│   ├── components/ # 공통 UI 컴포넌트
│   ├── constants/ # 애니메이션 variants 및 상수
│   ├── contexts/ # Theme Context
│   ├── hooks/ # Custom hooks
│   ├── lib/ # 데이터 및 유틸 로직, Notion API를 위한 lib
│   ├── styles/ # Global styles & Tailwind config
│   └── types/ # Type definitions
├── next.config.js
└── README.md
```

> 🔹 기존 api/notion-page.js 서버리스 함수는
>
> **Next.js 도입 이후 Route Handler + ISR 구조로 제거**

---

## 🚀 실행 방법

```bash
# install dependencies
npm install

# run local dev server
npm run dev

# build for production
npm run build
```

---

## 📝 회고

- 사이트를 통해 나만의 포트폴리오 설계 및 구축 경험
- 성능, UX를 고려한 구조 설계 경험
- Next.js의 **렌더링 전략(SSG / ISR)**에 대한 필요성 이해 및 적용
