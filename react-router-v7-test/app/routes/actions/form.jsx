import { Form, useActionData, useNavigation } from "react-router";

// 서버 액션 정의
export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries());
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  console.log("Action invoked with:", request);
  console.log("Form data:", data);
  
  return {
    "who": "form",
    data,
    timestamp: new Date().toISOString()
  };
}

export default function FormActionTest() {
  const actionData = useActionData();
  const navigation = useNavigation();
  
  // 네비게이션 상태에 따라 제출 상태 확인
  const isSubmitting = navigation.state !== "idle" && navigation.formAction === "/actions/form";
  
  return (
    <div>
      <h1>Form으로 액션 호출 테스트</h1>
      
      <div className="action-card">
        <h2>폼 제출하기</h2>
        {/* 다른 라우터의 action 호출 가능 */}
        <Form method="post" action="/actions/form">
          <div>
            <label>이름</label>
            <input 
              type="text" 
              name="name" 
              defaultValue="Form 테스트"
              disabled={isSubmitting}
            />
          </div>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "제출 중..." : "제출하기"}
          </button>
        </Form>
        
        {actionData && (
          <div className="result-container">
            <h3>결과:</h3>
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