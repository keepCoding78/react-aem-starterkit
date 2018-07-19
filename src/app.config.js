const config = {
  server: {
    // Application host
    host: 'http://localhost:3000',
    // Application path - every route will be prefixed with this path
    path: ''
  },
 
  oktaOIDC: {
    // Okta issues path
    issuer: 'https://',
    // Okta client id
    client_id: '',
    // Implicit callback path, should be relative. host and path from server will be added automatically
    // host + path + redirect_uri
    redirect_uri: '/login/implicit/callback',
    scope: ['openid', 'profile', 'groups']
  },
  login: {
    entry: '/login',
    redirectAfterLogin: '/products',
    redirectAfterLogout: '/login'
  },
  locale: {
    lang: 'en',
    country: 'US'
  },
  region: 'VNGOSC',
  toast: {
    autoClose: 3000
  },
  defaultMeasuringUnit: 'MT'
};

export default config;
