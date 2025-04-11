import { AuthNav } from "../components/AuthNav";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router";

export default function Index() {
  const { isAuthenticated } = useAuth0();
  if (isAuthenticated) {
    return <Navigate to="/profile" replace />;
  }
  console.log("isAuthenticated",isAuthenticated);
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 pb-4 border-b">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">React Router v7 + Auth0 테스트</h1>
          <AuthNav />
        </div>
      </header>

      <main>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">
              Auth0 인증 테스트 페이지
            </h2>
            <p className="mb-4">
              이 페이지는 React Router v7과 Auth0를 이용한 인증을 테스트하기
              위한 페이지입니다.
            </p>
            <p className="mb-4">
              오른쪽 상단의 로그인 버튼을 클릭하여 Auth0 인증을 시작하세요.
              로그인 후 프로필 페이지에 접근할 수 있습니다.
            </p>
            <p>프로필 페이지는 인증된 사용자만 접근 가능합니다.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
