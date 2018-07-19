const getUrlProps = url => {
  const match = url.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/);
  return match
    ? {
        url: url,
        protocol: match[1],
        host: match[2],
        hostname: match[3],
        port: match[4],
        pathname: match[5],
        search: match[6],
        hash: match[7]
      }
    : false;
};

// test for number of decimal places
const testDecimalPlaces = (value, places) => {
  const regex = new RegExp('^[0-9]*(?:.[0-9]{0,' + places + '})?$');
  return regex.test(value);
};

//test time format for HH:MM or H:MM
const testTimeFormat = value => {
  const regex = new RegExp('^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$');
  return regex.test(value);
};

const buildUrl = (url, params) => {
  const isServiceObject = typeof url === 'object' && url.url ? true : false;
  let query = isServiceObject ? url.url : url;
  query += query.indexOf('?') < 1 ? '?' : '&';
  query += Object.keys(params)
    .map(key => key + '=' + params[key])
    .join('&');
  query = encodeURI(query);

  return isServiceObject ? { ...url, ...{ url: query } } : query;
};

const getObjProp = (path = '', obj = {}) => {
  return path.split('.').reduce((obj, key) => (obj && obj[key] ? obj[key] : null), obj);
};

export { getUrlProps, buildUrl, testDecimalPlaces, testTimeFormat, getObjProp };
