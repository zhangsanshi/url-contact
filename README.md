# URL-CONTACT
contact url search and replace url params

## Usage

### urlContact(url, params, search [,searchOptions])

about `searchOptions` , see it [https://github.com/ljharb/qs#stringifying](https://github.com/ljharb/qs#stringifying)
eg: 
```
  const params = {
    a: 1,
    b: 2
  };
  const search = {
    c: 1,
    d: 2,
    e: [1, 2]
  };
  const ops = {
    encodeValuesOnly: true
  };
  
  urlContact('/api/:a/:b', params, search, ops);
  
  // => /api/1/2?c=1&d=2&e[0]=1&e[1]=2
  
  urlContact('/api/:a/:b?t=1', params, search, ops);
  
  // => /api/1/2?t=1&c=1&d=2&e[0]=1&e[1]=2
  
  urlContact('/api/:a/:b?c=2#d', params, search, ops);
  
  // => /api/1/2?c=2&c=1&d=2&e[0]=1&e[1]=2#d
  
  urlContact('/api/:a/:b#d', params, search, ops);
  
  // => /api/1/2?c=1&d=2&e[0]=1&e[1]=2#d

```

## License
MIT