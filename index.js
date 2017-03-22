const stringify = require('qs/lib/stringify');

module.exports = function urlContact(url, params = {}, search, searchOptions) {
  let $url = String(url);
  const hasSearch = $url.indexOf('?') !== -1;
  const hasHash = $url.indexOf('#') !== -1;

  let searchStr = '';
  if ($url.indexOf(':') !== -1) {
    $url = $url.replace(/:(.*?)(?=\W|$)/g, (a, param) => encodeURIComponent(params[param] || ''));
  }
  if (search) {
    searchStr = stringify(search, searchOptions);
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
