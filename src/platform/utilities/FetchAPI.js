import log from 'loglevel';

/**
 * Wrapper over a standard fetch function to add basic sanitization,
 * logging and common headers
 *
 * @param {String|Object} url A URL for fetching data | a service object with url property
 * @param {Object} options A config object for fetch
 */

const Fetch = async (url, options = {}) => {
  const defaultOptions = {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
    credentials: 'same-origin'
  };

  const defaultHeaders = {
    'content-type': 'application/json'
  };

  // extract headers from options
  const { headers, ...optionsWithoutHeaders } = options;

  // combine headers and create a Header instance
  const requestHeaders = new Headers({ ...defaultHeaders, ...headers });

  const requestOptions = { ...defaultOptions, ...optionsWithoutHeaders, headers: requestHeaders };

  // check for url object
  if(typeof url === 'object' && url.url){
    url = url.url;
  }

  /**
   * Create a request object
   * @link https://developer.mozilla.org/en-US/docs/Web/API/Request/Request
   */
  const request = new Request(url, requestOptions);
  log.info('Fetch: options/request', requestOptions, request);

  /**
   * Return fetch
   * @link https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
   */
  return fetch(request)
    .then(handleStatus)
    .then(handleJSON)
    .then(handleResponse)
    .catch(error => {
      log.error('Fetch: Fail', { error, request });
    });

  function handleStatus(response) {
    if (!response.ok) {
      log.error('Fetch: Not OK response received', { response });

      throw new Error('Fetch: Call returned with NOT OK response');
    }

    return response;
  }

  function handleJSON(response) {
    return response
      .json()
      .then(json => {
        return json;
      })
      .catch(error => {
        log.error('Fetch: JSON parsing failed', { response });

        throw new Error('JSON parsing failed in fetch call');
      });
  }

  function handleResponse(response) {
    log.info('Fetch: Success', response);
    return response;
  }
};

const withData = (func, method) => {
  return function(url, options, data) {
    const defaultOptions = {
      method,
      body: JSON.stringify(data)
    };
    return func.call(this, url, { ...defaultOptions, ...options });
  };
};

const Post = withData(Fetch, 'POST');
const Put = withData(Fetch, 'PUT');
const Patch = withData(Fetch, 'PATCH');
const Delete = withData(Fetch, 'DELETE');

const FetchAPI = {
  Get: Fetch,
  Post,
  Put,
  Patch, Delete
}

export { FetchAPI, Fetch };
