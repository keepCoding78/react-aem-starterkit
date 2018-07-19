import appConfig from '../../../app.config';
import serviceConfig from '../../../services.config';
import { getObjProp, buildUrl } from '../../../platform/utilities';

const runtimeAppConfig = window.__APP_CONFIG__ || {};
const config = { ...appConfig, ...runtimeAppConfig };

const getAppConfig = (key = '') => {
  return getObjProp(key, config);
};

const getServiceConfig = (key = '') => {
  return getObjProp(key, serviceConfig);
};

const getService = (name = '', params = {}) => {
  const config = getServiceConfig(name);
  return buildUrl(config, params);
};

export { getAppConfig, getServiceConfig, getService };
