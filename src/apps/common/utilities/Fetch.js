import { FetchAPI } from '../../../platform/utilities/FetchAPI';
import { Auth } from '../okta';

const withAuth = (func, Auth, method) => {
  return async function(url, options = {}, data = {}) {
    // swapping data and options so we don't have to pass empty {} everytime for Post, Put and Patch
    if (['POST', 'PUT', 'PATCH','DELETE'].includes(method)) {
      [options, data] = [data, options];
    }
    if (Auth && (await Auth.isAuthenticated())) {
      if (!('headers' in options)) {
        options.headers = {};
      }
      const accessToken = await Auth.getAccessToken();
      options.headers.authorization = 'Bearer ' + accessToken;
    }
    return func.call(this, url, options, data);
  };
};

const Get = withAuth(FetchAPI.Get, Auth, 'GET');
const Post = withAuth(FetchAPI.Post, Auth, 'POST');
const Put = withAuth(FetchAPI.Put, Auth, 'PUT');
const Patch = withAuth(FetchAPI.Patch, Auth, 'PATCH');
const Delete = withAuth(FetchAPI.Delete, Auth, 'DELETE');

export default {
  Get,
  Post,
  Put,
  Patch,
  Delete
};
