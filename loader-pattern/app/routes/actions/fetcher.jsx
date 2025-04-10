import { useFetcher } from "react-router";

// 서버 액션 정의
export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries());
  console.log("Fetcher 액션 호출됨:", data);
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    "who": "fetcher",
    data,
    timestamp: new Date().toISOString()
  };
}

export default function FetcherActionTest() {
  // fetcher 사용
  const fetcher = useFetcher();
  
  const handleFetcherClick = () => {
    fetcher.submit(
      { 
        name: "Fetcher 테스트", 
      },
    //   {
    //     action: "/actions/fetcher",
    //     method: "post" 
    //   }
    {
        action: "/actions/usesubmit",
        method: "post"
    }
    );
  };
  
  // fetcher 상태 확인
  const isSubmitting = fetcher.state === "submitting";
  const isIdle = fetcher.state === "idle";
  const hasData = fetcher.data != null;

  return (
    <div>
      <h1>Fetcher로 액션 호출 테스트</h1>
      
      <div className="actions-container">
        <div className="action-card">
          <h2>fetcher.Form 사용</h2>
          <p>페이지 이동 없이 폼을 제출합니다.</p>
          
          <fetcher.Form method="post">
            <div>
              <label>이름</label>
              <input 
                type="text" 
                name="name" 
                defaultValue="Fetcher Form 테스트"
                disabled={!isIdle}
              />
            </div>
            <button type="submit" disabled={!isIdle}>
              {isSubmitting ? "제출 중..." : "Fetcher Form 제출"}
            </button>
          </fetcher.Form>
        </div>
        
        <div className="action-card">
          <h2>fetcher.submit 사용</h2>
          <p>프로그래밍 방식으로 페이지 이동 없이 액션을 호출합니다.</p>
          
          <button 
            onClick={handleFetcherClick}
            disabled={!isIdle}
          >
            {isSubmitting ? "제출 중..." : "fetcher.submit 호출"}
          </button>
          
          <div>
            <h3>Fetcher 상태: {fetcher.state}</h3>
            {fetcher.state !== "idle" && <p>로딩 중...</p>}
          </div>
        </div>
      </div>
      
      {hasData && isIdle && (
        <div className="result-container">
          <h3>결과:</h3>
          <pre>
            {JSON.stringify(fetcher.data, null, 2)}
          </pre>
        </div>
      )}
      
      <p>
        <a href="/actions" className="back-link">돌아가기</a>
      </p>
    </div>
  );
} 