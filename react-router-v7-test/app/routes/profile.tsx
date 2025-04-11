import { useAuth0 } from '@auth0/auth0-react';
import { AuthNav } from '../components/AuthNav';
import { ProtectedRoute } from '../components/ProtectedRoute';
import { Link } from 'react-router';

export default function Profile() {
  const { user } = useAuth0();

  return (
    <ProtectedRoute>
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8 pb-4 border-b">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold">React Router v7 + Auth0 테스트</Link>
            <AuthNav />
          </div>
        </header>
        
        <main>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">사용자 프로필</h2>
              
              {user && (
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    {user.picture && (
                      <img src={user.picture} alt={user.name || '사용자'} className="w-16 h-16 rounded-full" />
                    )}
                    <div>
                      <h3 className="text-lg font-medium">{user.name}</h3>
                      <p className="text-gray-500">{user.email}</p>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="font-medium mb-2">사용자 정보</h4>
                    <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto whitespace-pre-wrap">
                      {JSON.stringify(user, null, 2)}
                    </pre>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
} 