import { useState, useEffect } from "react";
import { useActionData, useSubmit, useNavigation, useLoaderData } from "react-router";

// 로더 함수 추가
export async function loader() {
  console.log("useSubmit 라우트 로더 호출됨");
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return {
    message: "useSubmit 라우트 로더 데이터",
    timestamp: new Date().toISOString()
  };
}

// 서버 액션 정의
export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries());
  console.log("UseSubmit 액션 호출됨:", data)
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    "who": "usesubmit",
    data,
    timestamp: new Date().toISOString()
  };
}

export default function UseSubmitActionTest() {
  const actionData = useActionData();
  const loaderData = useLoaderData();
  const navigation = useNavigation();
  
  // useSubmit 훅 사용
  const submit = useSubmit();
  const handleSubmitClick = () => {
    submit(
      { 
        name: "useSubmit 테스트",
      },
      // {
      //   action: "/actions/usesubmit",
      //   method: "post"
      // }
      // TODO: 다른 라우터의 action 호출 가능, 페이지 이동 됨.
      {
        action: "/actions/fetcher",
        method: "post",
        encType: "application/x-www-form-urlencoded"
      }
    );
  };
  
  // 네비게이션 상태에 따라 제출 상태 확인
  const isSubmitting = navigation.state !== "idle";
  const isLoading = navigation.state === "loading";
  const isComplete = navigation.state === "idle" && actionData;

  return (
    <div>
      <h1>useSubmit으로 액션 호출 테스트</h1>
      
      <div className="loader-status">
        <h2>로더 상태</h2>
        <div className={`status-indicator ${isLoading ? 'loading' : 'idle'}`}>
          {isLoading ? "로딩 중..." : "로딩 완료"}
        </div>
        <div className="loader-data">
          <h3>로더 데이터:</h3>
          <pre>{JSON.stringify(loaderData, null, 2)}</pre>
        </div>
      </div>
      
      <div className="action-card">
        <h2>프로그래밍 방식으로 제출</h2>
        <p>버튼을 클릭하면 useSubmit 훅을 사용하여 액션이 호출됩니다.</p>
        
        <button 
          onClick={handleSubmitClick}
          disabled={isSubmitting}
        >
          {isSubmitting ? "제출 중..." : "useSubmit으로 제출하기"}
        </button>
        
        {isComplete && (
          <div className="result-container">
            <h3>액션 결과:</h3>
            <pre>
              {JSON.stringify(actionData, null, 2)}
            </pre>
          </div>
        )}
      </div>
      
      <p>
        <a href="/actions" className="back-link">돌아가기</a>
      </p>
    </div>
  );
} 