<<<<<<< HEAD
import { Form, useRouteError, useFetcher } from "@remix-run/react";
=======
import { Form, useRouteError } from "react-router";
>>>>>>> f4b52344ebe1b0f9a8d367672bceddc1a28910fd
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Separator } from "~/components/ui/separator";
import { isRouteErrorResponse } from "react-router";

type ActionTestProps = {
  actionData: {
    error?: string;
    success?: boolean;
    message?: string;
    submittedData?: { name: string };
  } | null;
};

export function ActionTest({ actionData }: ActionTestProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Action 테스트</h2>
      <div className="rounded-lg border p-6 shadow-sm">
        <h3 className="text-lg font-medium mb-4">Action 테스트</h3>
        <p className="text-sm text-gray-500 mb-4">
          Form 제출을 통해 Action 함수를 테스트할 수 있습니다.
          에러를 발생시키려면 이름을 error로 입력하세요.
        </p>
        <Form method="post" className="space-y-4">
          <div>
            <label htmlFor="name" className="text-sm font-medium">이름</label>
            <Input
              id="name"
              name="name"
              placeholder="이름을 입력하세요"
              className={actionData?.error ? "border-red-500" : ""}
            />
            {actionData?.error && (
              <p className="text-red-500 text-sm mt-1">{actionData.error}</p>
            )}
          </div>
          
          <div className="flex flex-col gap-4">
            <Button type="submit" name="action" value="submit">
              제출하기
            </Button>
            <Button
              type="submit"
              name="action"
              value="redirect"
              variant="outline"
            >
              리다이렉트 테스트
            </Button>
          </div>
        </Form>
        
        {actionData?.success && (
          <div className="mt-4 p-4 bg-green-100 dark:bg-green-900 rounded">
            <p>{actionData.message}</p>
            <Separator className="my-2" />
            <p className="text-sm">제출된 데이터:</p>
            <pre className="text-xs bg-gray-100 dark:bg-gray-800 p-2 rounded mt-1">
              {JSON.stringify(actionData.submittedData, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}