import { defer } from "react-router";
import { Await, useLoaderData } from "react-router";
import { Suspense } from "react";

// 빠른 데이터를 모방한 함수
const getFastData = () => {
  return {
    message: "이 데이터는 즉시 로드됩니다.",
    timestamp: new Date().toISOString(),
  };
};

// 느린 데이터를 모방한 함수 (3초 지연)
const getSlowData = async () => {
  // 3초 지연 시뮬레이션
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return {
    message: "이 데이터는 로딩에 시간이 소요됩니다.",
    items: ["항목 1", "항목 2", "항목 3", "항목 4", "항목 5"],
    timestamp: new Date().toISOString(),
  };
};

// 더 느린 데이터를 모방한 함수 (4.95초 지연)
const getVerySlowData = async () => {
  // 4.95초 지연 시뮬레이션
  await new Promise((resolve) => setTimeout(resolve, 4950));
  return {
    message: "이 데이터는 로딩에 더 많은 시간이 소요됩니다.",
    detailedInfo: {
      description: "매우 중요하지만 로딩에 오래 걸리는 데이터입니다.",
      status: "완료",
    },
    timestamp: new Date().toISOString(),
  };
};

export const loader = async () => {
  // 빠른 데이터는 즉시 반환
  const fastData = getFastData();
  
  // 느린 데이터는 defer를 통해 비동기적으로 처리
  // 최신 버전에서는 두 번째 인자로 옵션을 전달
  return defer({
    fastData,
    slowData: getSlowData(),
    verySlowData: getVerySlowData(),
  }, {
    headers: {
      "Cache-Control": "no-store"
    }
  });
};

export default function DeferTest() {
  const { fastData, slowData, verySlowData } = useLoaderData<typeof loader>();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Remix Defer 테스트 페이지</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">즉시 로드되는 데이터</h2>
        <div className="bg-blue-100 p-4 rounded-lg">
          <p>{fastData.message}</p>
          <p className="text-sm text-gray-500">타임스탬프: {fastData.timestamp}</p>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">지연 로드되는 데이터 (3초)</h2>
        <Suspense fallback={<div className="bg-yellow-100 p-4 rounded-lg">느린 데이터 로딩 중...</div>}>
          <Await resolve={slowData}>
            {(resolvedSlowData) => (
              <div className="bg-green-100 p-4 rounded-lg">
                <p>{resolvedSlowData.message}</p>
                <ul className="list-disc pl-5 my-2">
                  {resolvedSlowData.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p className="text-sm text-gray-500">타임스탬프: {resolvedSlowData.timestamp}</p>
              </div>
            )}
          </Await>
        </Suspense>
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">매우 느린 데이터 (4.95초)</h2>
        <Suspense fallback={<div className="bg-red-100 p-4 rounded-lg">매우 느린 데이터 로딩 중...</div>}>
          <Await resolve={verySlowData}>
            {(resolvedVerySlowData) => (
              <div className="bg-purple-100 p-4 rounded-lg">
                <p>{resolvedVerySlowData.message}</p>
                <div className="my-2">
                  <p><strong>설명:</strong> {resolvedVerySlowData.detailedInfo.description}</p>
                  <p><strong>상태:</strong> {resolvedVerySlowData.detailedInfo.status}</p>
                </div>
                <p className="text-sm text-gray-500">타임스탬프: {resolvedVerySlowData.timestamp}</p>
              </div>
            )}
          </Await>
        </Suspense>
      </div>
      
      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Remix Defer 설명</h2>
        <p>
          Remix의 <code className="bg-gray-200 px-1 rounded">defer</code> 기능은 데이터 로딩을 지연시켜 사용자 경험을 향상시킵니다.
          중요한 콘텐츠는 즉시 표시하고, 시간이 오래 걸리는 데이터는 준비되는 대로 화면에 표시됩니다.
        </p>
      </div>
    </div>
  );
} 