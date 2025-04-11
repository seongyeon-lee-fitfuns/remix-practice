import { Auth0Provider as Auth0ProviderBase } from '@auth0/auth0-react';
import { useNavigate } from 'react-router';

export const Auth0Provider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const domain = import.meta.env.VITE_AUTH0_ISSUER_BASE_URL;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL || window.location.origin;

  console.log('Auth0 설정값:', { domain, clientId, redirectUri });

  const onRedirectCallback = (appState: any) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  if (!(domain && clientId)) {
    console.error('Auth0 domain 또는 clientId가 설정되지 않았습니다.');
    return <>{children}</>;
  }

  return (
    <Auth0ProviderBase
      domain={domain.replace(/^https?:\/\//, '')}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
      onRedirectCallback={onRedirectCallback}
      useRefreshTokens={true}
      cacheLocation="localstorage"
    >
      {children}
    </Auth0ProviderBase>
  );
}; 