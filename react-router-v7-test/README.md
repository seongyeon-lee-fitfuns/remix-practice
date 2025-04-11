# React Router v7 + Auth0 인증 테스트

React Router v7을 이용한 Auth0 인증 기능 테스트 프로젝트입니다.

## 시작하기

### 설치

필요한 패키지 설치:

```bash
npm install
```

### Auth0 설정

1. [Auth0 웹사이트](https://auth0.com/)에서 계정을 생성하고 새로운 애플리케이션을 등록합니다.
2. 애플리케이션 유형으로 "Single Page Application"을 선택합니다.
3. "Allowed Callback URLs", "Allowed Logout URLs", "Allowed Web Origins" 모두에 `http://localhost:3000`을 추가합니다.
4. `.env` 파일을 수정하여 Auth0 도메인과 클라이언트 ID를 입력합니다:

```
VITE_AUTH0_DOMAIN=your-auth0-domain.auth0.com
VITE_AUTH0_CLIENT_ID=your-auth0-client-id
VITE_AUTH0_CALLBACK_URL=http://localhost:3000
```

### 개발 서버 실행

개발 서버 실행:

```bash
npm run dev
```

애플리케이션은 `http://localhost:3000`에서 접근할 수 있습니다.

## 기능

- Auth0를 이용한 로그인/로그아웃
- 로그인 상태 표시
- 인증된 사용자만 접근 가능한 프로필 페이지
- 사용자 정보 표시

## 기술 스택

- React
- React Router v7
- Auth0 Authentication
- Tailwind CSS

---

Built with ❤️ using React Router and Auth0.
