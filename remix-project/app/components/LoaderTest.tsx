import { Form } from "@remix-run/react";
import { Button } from "~/components/ui/button";

type LoaderTestProps = {
  currentTime: string;
  randomNumber: number;
  message: string;
};

export function LoaderTest({ currentTime, randomNumber, message }: LoaderTestProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Loader 테스트</h2>
      <div className="rounded-lg border p-6 shadow-sm">
        <h3 className="text-lg font-medium mb-4">Loader 데이터</h3>
        <p className="text-sm text-gray-500 mb-4">
          Loader 함수에서 반환된 데이터를 확인할 수 있습니다.
        </p>
        <div className="space-y-4">
          <div>
            <div className="text-sm font-medium">현재 시간</div>
            <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded">
              {currentTime}
            </div>
          </div>
          <div>
            <div className="text-sm font-medium">랜덤 숫자</div>
            <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded">
              {randomNumber}
            </div>
          </div>
          <div>
            <div className="text-sm font-medium">메시지</div>
            <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded">
              {message}
            </div>
          </div>
        </div>
        <div className="mt-4">
          <Form method="get">
            <Button type="submit">새로고침</Button>
          </Form>
        </div>
      </div>
    </div>
  );
} 