import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router';

export const AuthNav = () => {
  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } = useAuth0();

  return (
    <div className="flex items-center gap-4">
      {isLoading ? (
        <div>로딩 중...</div>
      ) : isAuthenticated ? (
        <>
          <div className="flex items-center gap-2">
            {user?.picture && (
              <img
                src={user.picture}
                alt={user.name || '사용자 프로필'}
                className="w-8 h-8 rounded-full"
              />
            )}
            <span className="font-medium">{user?.name}</span>
          </div>
          <button
            onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
            className="px-4 py-2 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 transition"
          >
            로그아웃
          </button>
          <Link to="/profile" className="px-4 py-2 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
            프로필
          </Link>
        </>
      ) : (
        <button
          onClick={() => loginWithRedirect()}
          className="px-4 py-2 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          로그인
        </button>
      )}
    </div>
  );
}; 