# 📝 블로그 – Next.js 14 기반 기술 블로그

개발자로서의 성장을 기록하기 위해 만든 기술 블로그입니다.  
Next.js 14의 App Router와 Contentlayer를 기반으로 설계되었으며,  
MVP(최소 기능 제품)부터 점진적으로 기능을 확장해 나가고 있습니다.

---

## 🧱 기술 스택

- **Next.js 14 (App Router)**
- **TypeScript**
- **Tailwind CSS** (+ Typography plugin)
- **Contentlayer** (MDX 기반 콘텐츠 관리)
- **Zustand** (전역 상태)
- **next-themes** (다크모드 지원)
- **next-seo**, **next-sitemap**
- **Prettier + Tailwind 플러그인**
- **Vercel** (배포)

---

## 📂 폴더 구조
``` bash
my-blog/
├── content/ # 블로그 포스트 (MDX)
│ └── posts/
├── src/
│ ├── app/ # App Router 라우팅
│ ├── components/ # 재사용 UI 컴포넌트
│ ├── lib/ # 상태, 유틸 함수
│ └── styles/ # 전역 스타일
├── public/ # 공개 리소스
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
Vercel을 통해 GitHub 연동으로 자동 배포됩니다.

## 📜 컨벤션
커밋 메시지: Conventional Commits 기반

폴더/컴포넌트명: PascalCase

변수/함수명: camelCase

스타일 클래스: Tailwind Utility 기준

## ✨ 프로젝트 목표
- 프론트엔드 개발자로서의 성장 기록
- 커스터마이징 가능한 구조 설계
- 디자인 시스템 기반 UI 구성
- 유지보수 가능한 콘텐츠 관리 방식