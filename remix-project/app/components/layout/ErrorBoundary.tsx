import { isRouteErrorResponse, useRouteError } from "@remix-run/react";

export function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);
  
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>THIS IS ROOT ERROR BOUNDARY</h1>
        <p>{error.status}</p>
        <p>{error.data}</p>
      </div>
    );
  }
    
  return (
    <div>
      <h1>THIS IS ROOT ERROR BOUNDARY for client error</h1>
      <p>{error instanceof Error ? error.message : '알 수 없는 오류가 발생했습니다.'}</p>
    </div>
  );
} 