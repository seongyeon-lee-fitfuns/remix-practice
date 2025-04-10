import { Link, Outlet } from "react-router";

export async function loader() {
  console.log("메인 Actions 라우트 로더 호출됨");
  return {
    message: "액션 테스트를 위한 메인 페이지 로더 데이터",
    timestamp: new Date().toISOString()
  };
}

export default function ActionsOverview() {
  return (
    <div className="actions-overview">
      <h1>React Router v7 Actions 테스트</h1>
      
      <p>
        React Router v7에서는 세 가지 방법으로 액션을 호출할 수 있습니다:
      </p>
      
      <ul className="action-types">
        <li>
          <Link to="/actions/form" className="action-link">Form 컴포넌트 사용</Link> - 
          전통적인 폼 제출 방식으로 액션을 호출하며, 새로운 페이지로 이동합니다.
        </li>
        <li>
          <Link to="/actions/usesubmit" className="action-link">useSubmit 훅 사용</Link> - 
          명령형 방식으로 프로그래밍적으로 액션을 호출하며, 새로운 페이지로 이동합니다.
        </li>
        <li>
          <Link to="/actions/fetcher" className="action-link">Fetcher 사용</Link> - 
          페이지 이동 없이 액션을 호출하는 방식입니다 (SPA 방식).
        </li>
      </ul>
      
      <h2>액션의 특징</h2>
      <ul className="features-list">
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
            <li>페이지 이동으로 인해 로더가 다시 호출됨</li>
          </ul>
        </div>
        
        <div className="action-card">
          <h3>useSubmit 훅</h3>
          <ul>
            <li>프로그래밍 방식으로 폼 데이터를 제출</li>
            <li>사용자 상호작용 없이도 액션 호출 가능</li>
            <li>액션 호출 시 페이지 이동 발생</li>
            <li>페이지 이동으로 인해 로더가 다시 호출됨</li>
          </ul>
        </div>
        
        <div className="action-card">
          <h3>Fetcher</h3>
          <ul>
            <li>페이지 이동 없이 액션 호출</li>
            <li>여러 액션을 동시에 호출 가능</li>
            <li>fetcher.Form과 fetcher.submit 제공</li>
            <li>데이터 갱신 중에도 UI 사용 가능</li>
            <li>페이지 이동이 없어 로더는 다시 호출되지 않음</li>
            <li>하지만 관련 로더 데이터는 자동으로 갱신됨</li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .loader-status {
          background-color: #f5f5f5;
          padding: 15px;
          margin-bottom: 20px;
          border-radius: 5px;
          border: 1px solid #e0e0e0;
        }
        
        .status-indicator {
          padding: 8px 12px;
          border-radius: 4px;
          display: inline-block;
          font-weight: bold;
          margin-bottom: 10px;
        }
        
        .status-indicator.loading {
          background-color: #ffeb3b;
          color: #000;
        }
        
        .status-indicator.idle {
          background-color: #4caf50;
          color: white;
        }
        
        .loader-data {
          background-color: #f9f9f9;
          padding: 10px;
          border-radius: 4px;
          border: 1px solid #ddd;
        }
        
        .action-card {
          background-color: white;
          padding: 20px;
          margin: 10px 0;
          border-radius: 8px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        .result-container {
          margin-top: 20px;
          padding: 15px;
          background-color: #f0f8ff;
          border-radius: 5px;
          border: 1px solid #cce5ff;
        }
        
        pre {
          background-color: #f1f1f1;
          padding: 10px;
          border-radius: 4px;
          overflow-x: auto;
        }
        
        .note {
          background-color: #fff8e1;
          padding: 10px;
          border-left: 4px solid #ffc107;
          margin: 15px 0;
        }
        
        .action-link {
          color: #1976d2;
          font-weight: bold;
          text-decoration: none;
        }
        
        .action-link:hover {
          text-decoration: underline;
        }
        
        button {
          background-color: #2196f3;
          color: white;
          border: none;
          padding: 10px 15px;
          border-radius: 4px;
          cursor: pointer;
          font-weight: bold;
        }
        
        button:disabled {
          background-color: #cccccc;
          cursor: not-allowed;
        }
        
        .back-link {
          display: inline-block;
          margin-top: 20px;
          color: #607d8b;
          text-decoration: none;
        }
        
        .back-link:hover {
          text-decoration: underline;
        }
      `}</style>
      
      <Outlet />
    </div>
  );
} 