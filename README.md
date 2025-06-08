# 📝 블로그 – Next.js 14 기반 기술 블로그

Next.js 14의 App Router와 Contentlayer를 활용해  
**프론트엔드 개발자로서의 성장 과정과 기술 기록**을 남기기 위한 블로그 프로젝트입니다.  
MVP(최소 기능 제품)를 시작으로 점진적으로 기능을 확장하고 있습니다.

---

## 🧱 기술 스택

- **Next.js 14 (App Router)**
- **TypeScript**
- **Tailwind CSS** (+ Typography plugin)
- **Contentlayer** (MDX 기반 콘텐츠 관리)
- **Zustand** (전역 상태 관리)
- **next-themes** (다크 모드 지원)
- **next-seo**, **next-sitemap** (SEO)
- **Prettier + Tailwind 플러그인**
- **Vercel** (배포)

---

## 📂 폴더 구조

```bash
blog/
├── content/                  # 블로그 포스트 (MDX)
│   └── posts/
├── src/
│   ├── app/                 # App Router 기반 라우팅
│   ├── components/         # UI 컴포넌트
│   ├── lib/                # 유틸 함수, 상태 관리
│   └── styles/             # 전역 스타일
├── public/                 # 공개 정적 리소스
├── contentlayer.config.ts
├── tailwind.config.ts
├── next.config.mjs
```

---

## 🚀 실행 방법

```bash
# 패키지 설치
yarn install

# 개발 서버 실행
yarn dev
```

## 📦 배포

GitHub와 연동된 Vercel을 통해 자동 배포됩니다.

## 📜 컨벤션

커밋 메시지: Conventional Commits 기반

폴더/컴포넌트명: PascalCase

변수/함수명: camelCase

스타일 클래스: Tailwind Utility 기준

## ✨ 프로젝트 목표

개발자 성장 및 학습 기록

커스터마이징 가능한 블로그 아키텍처 설계

디자인 시스템 기반 UI 구성

유지보수 가능한 콘텐츠 관리 방식 도입
