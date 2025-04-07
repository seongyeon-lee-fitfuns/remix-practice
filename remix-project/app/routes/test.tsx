import { redirect } from "@remix-run/node";
import { Form, isRouteErrorResponse, useActionData, useLoaderData, useRouteError } from "@remix-run/react";
import { LoaderTest } from "~/components/LoaderTest";
import { ActionTest } from "~/components/ActionTest";
import { Button } from "~/components/ui/button";

export async function loader() {
  const currentTime = new Date().toLocaleString();
  const randomNumber = Math.floor(Math.random() * 100);
  
  return Response.json({
    currentTime,
    randomNumber,
    message: "loader에서 가져온 데이터입니다."
  });
}

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const name = formData.get("name") as string;
  const action = formData.get("action") as string;
  
  // 입력 유효성 검사
  if (action === "submit" && (!name || name.length < 2)) {
    return Response.json(
      { error: "이름은 최소 2글자 이상이어야 합니다." },
      { status: 400 }
    );
  }
  
  // 리다이렉트 기능 테스트
  if (action === "redirect") {
    return redirect("/test");
  }

  // 에러 테스트 
  if (name === "error") {
    throw new Response("에러 테스트입니다.", { status: 400 });
  }

  // 성공 응답
  return Response.json({
    success: true,
    submittedData: { name },
    message: `${name}님, 폼이 성공적으로 제출되었습니다.`
  });
}

export default function TestPage() {
  const loaderData = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Remix Loader와 Action 테스트</h1>
      
      <div className="flex flex-col space-y-8">
        <LoaderTest 
          currentTime={loaderData.currentTime}
          randomNumber={loaderData.randomNumber}
          message={loaderData.message}
        />
        
        <ActionTest actionData={actionData} />
      </div>
    </div>
  );
}



export function ErrorBoundary() {
  const error = useRouteError();
  
  return (
    <div className="rounded-lg border border-red-500 p-6 shadow-sm bg-red-50 dark:bg-red-900/20">
      <h2 className="text-xl font-semibold mb-4 text-red-600 dark:text-red-400">에러 발생</h2>
      <div className="p-4 bg-white dark:bg-gray-800 rounded border border-red-200 dark:border-red-800">
        {isRouteErrorResponse(error) ? (
          <>
            <h3 className="text-lg font-medium mb-2">
              {error.status} {error.statusText}
            </h3>
            <p className="text-gray-700 dark:text-gray-300">{error.data}</p>
          </>
        ) : error instanceof Error ? (
          <>
            <h3 className="text-lg font-medium mb-2">{error.name}</h3>
            <p className="text-gray-700 dark:text-gray-300">{error.message}</p>
          </>
        ) : (
          <p className="text-gray-700 dark:text-gray-300">알 수 없는 에러가 발생했습니다.</p>
        )}
      </div>
      <div className="mt-4">
        <Form method="get">
          <Button type="submit" variant="outline">다시 시도</Button>
        </Form>
      </div>
    </div>
  );
}


