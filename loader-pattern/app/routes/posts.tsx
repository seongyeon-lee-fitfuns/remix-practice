import type { Route } from './+types/posts';

export async function clientLoader() {
  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=4`
  );
  await delay(1000);
  const data = await res.json();
  return data;
}

export function HydrateFallback() {
  return <div>게시글 로딩 중...</div>;
}

clientLoader.hydrate = true as const;

function Posts({ loaderData }: Route.ComponentProps) {
  const posts = loaderData;

  return (
    <div>
      <h3>게시글 목록</h3>
      <ul>
        {posts?.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
