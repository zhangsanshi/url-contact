const stringify = require('qs/lib/stringify');

module.exports = function urlContact(url, params, search, searchOptions) {
  const $params = params || {};
  let $url = String(url);
  $url = $url.replace(/(\/|^):(.*?)(?=\/|\.|#|\?|$)/g, (a, b, param) => {
    if (param) {
      return b + encodeURIComponent($params[param] || '');
    }
    return b;
  });
  if (search) {
    const hasSearch = $url.indexOf('?') !== -1;
    const hasHash = $url.indexOf('#') !== -1;
    const searchStr = stringify(search, searchOptions);

    if (hasSearch) {
      if (hasHash) {
        $url = $url.replace('#', `&${searchStr}#`);
      } else {
        $url += `&${searchStr}`;
      }
    } else if (hasHash) {
      $url = $url.replace('#', `?${searchStr}#`);
    } else {
      $url += `?${searchStr}`;
    }
  }

  return $url;
};
