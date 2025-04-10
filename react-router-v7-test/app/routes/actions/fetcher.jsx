import { useFetcher, useLoaderData, useNavigation } from "react-router";

// 로더 함수 추가
export async function loader() {
  console.log("Fetcher 라우트 로더 호출됨");
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return {
    message: "Fetcher 라우트 로더 데이터",
    timestamp: new Date().toISOString(),
    loadCount: Math.floor(Math.random() * 1000) // 로더가 새로 호출될 때마다 변경되는 값
  };
}

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
  const loaderData = useLoaderData();
  const navigation = useNavigation();
  
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
  const isLoading = navigation.state === "loading";

  return (
    <div>
      <h1>Fetcher로 액션 호출 테스트</h1>
      
      <div className="loader-status">
        <h2>로더 상태</h2>
        <div className={`status-indicator ${isLoading ? 'loading' : 'idle'}`}>
          {isLoading ? "로딩 중..." : "로딩 완료"}
        </div>
        <div className="loader-data">
          <h3>로더 데이터 (loadCount: {loaderData.loadCount}):</h3>
          <pre>{JSON.stringify(loaderData, null, 2)}</pre>
        </div>
        <p className="note">
          <strong>참고:</strong> Fetcher를 사용하여 액션을 호출할 때는 페이지가 리로드되지 않으므로
          로더 상태는 변경되지 않습니다. 하지만 액션이 완료된 후 관련된 로더 데이터는 자동으로 갱신됩니다.
        </p>
      </div>
      
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
          <h3>액션 결과:</h3>
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