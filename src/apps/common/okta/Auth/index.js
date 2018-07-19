import { Auth as OktaAuth } from '@okta/okta-react';
import { getAppConfig } from '../../utilities/configUtils';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
let { issuer, client_id, redirect_uri, scope } = getAppConfig('oktaOIDC');
const {host, path} = getAppConfig('server');
const loginPath = path + getAppConfig('login').entry;
redirect_uri = host + path + redirect_uri;

const Auth = new OktaAuth({
  history,
  issuer,
  client_id,
  redirect_uri,
  scope,
  onAuthRequired: ({ history }) => {
    if (window.location.pathname !== loginPath) window.location = loginPath;
    else history.push(loginPath);
  }
});

export default Auth;
