import { isRouteErrorResponse, useRouteError } from "@remix-run/react";
import { Button } from "~/components/ui/button";

export function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-100">
            {isRouteErrorResponse(error) ? '페이지 오류' : '예상치 못한 오류'}
          </h2>
          <div className="mt-4 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              {isRouteErrorResponse(error) ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 dark:bg-red-900 rounded-full">
                    <svg className="w-6 h-6 text-red-600 dark:text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                      상태 코드: {error.status}
                    </h3>
                    <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      <p>{error.data}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto bg-yellow-100 dark:bg-yellow-900 rounded-full">
                    <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      <p>{error instanceof Error ? error.message : '알 수 없는 오류가 발생했습니다.'}</p>
                    </div>
                  </div>
                </div>
              )}
              <div className="mt-6 flex justify-center">
                <Button
                  onClick={() => window.location.href = '/'}
                  className="inline-flex items-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  홈으로 돌아가기
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 