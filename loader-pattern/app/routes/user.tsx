import type { Route } from './+types/user';
import { Outlet } from 'react-router';

export async function clientLoader() {
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
    const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
    await delay(1000);
    const data: { name: string } = await res.json();
    return data;
}

export function HydrateFallback() {
    return <div>사용자 로딩 중...</div>;
}

clientLoader.hydrate = true as const;

function User({ loaderData }: Route.ComponentProps) {
  const user = loaderData;

  return (
    <div >
      <h2>사용자: {user.name}</h2>
      <Outlet />
    </div>
  );
}

export default User;
