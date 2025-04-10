import { Link, Outlet } from "react-router";

export default function ActionsOverview() {
  return (
    <div>
      <h1>React Router v7 Actions 테스트</h1>
      
      <p>
        React Router v7에서는 세 가지 방법으로 액션을 호출할 수 있습니다:
      </p>
      
      <ul>
        <li>
          <Link to="/actions/form">Form 컴포넌트 사용</Link> - 
          전통적인 폼 제출 방식으로 액션을 호출하며, 새로운 페이지로 이동합니다.
        </li>
        <li>
          <Link to="/actions/usesubmit">useSubmit 훅 사용</Link> - 
          명령형 방식으로 프로그래밍적으로 액션을 호출하며, 새로운 페이지로 이동합니다.
        </li>
        <li>
          <Link to="/actions/fetcher">Fetcher 사용</Link> - 
          페이지 이동 없이 액션을 호출하는 방식입니다 (SPA 방식).
        </li>
      </ul>
      
      <h2>액션의 특징</h2>
      <ul>
        <li>액션은 뮤테이션(데이터 변경)을 처리하기 위한 함수입니다.</li>
        <li>서버 액션(action)은 서버에서만 실행됩니다.</li>
        <li>클라이언트 액션(clientAction)은 브라우저에서 실행됩니다.</li>
        <li>액션이 완료되면 관련된 모든 로더 데이터가 자동으로 갱신됩니다.</li>
      </ul>
      
      <h2>각 방식별 특징</h2>
      
      <div className="actions-container">
        <div className="action-card">
          <h3>Form 컴포넌트</h3>
          <ul>
            <li>HTML form과 유사한 사용 방법</li>
            <li>선언적 방식으로 액션을 호출</li>
            <li>폼 제출 시 페이지 이동 발생</li>
          </ul>
        </div>
        
        <div className="action-card">
          <h3>useSubmit 훅</h3>
          <ul>
            <li>프로그래밍 방식으로 폼 데이터를 제출</li>
            <li>사용자 상호작용 없이도 액션 호출 가능</li>
            <li>액션 호출 시 페이지 이동 발생</li>
          </ul>
        </div>
        
        <div className="action-card">
          <h3>Fetcher</h3>
          <ul>
            <li>페이지 이동 없이 액션 호출</li>
            <li>여러 액션을 동시에 호출 가능</li>
            <li>fetcher.Form과 fetcher.submit 제공</li>
            <li>데이터 갱신 중에도 UI 사용 가능</li>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  );
} 