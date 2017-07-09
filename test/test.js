const assert = require('assert');
const urlContact = require('../dist/url-contact.js');
describe('urlContact', function() {
  describe('urlContact(url, params = {}, search, searchOptions)', function() {
    const params = {
      a: 1,
      b: 2
    };
    const params2 = {
      a: 1
    };
    const search = {
      c: 1,
      d: 2,
      e: [1, 2]
    };
    const ops = {
      encodeValuesOnly: true
    };
    it(`urlContact('/api/:a/:b', null, search, ops)`, function() {
      assert.equal(urlContact('/api/:a/:b', null, search, ops), '/api//?c=1&d=2&e[0]=1&e[1]=2');
    });
    it(`urlContact('/api/:a/:b', 1, search, ops)`, function() {
      assert.equal(urlContact('/api/:a/:b', 1, search, ops), '/api//?c=1&d=2&e[0]=1&e[1]=2');
    });
    it(`urlContact('/api/:a/:b', params, search, ops)`, function() {
      assert.equal(urlContact('/api/:a/:b', params, search, ops), '/api/1/2?c=1&d=2&e[0]=1&e[1]=2');
    });
    it(`urlContact('/api/:a/:b', params2, search, ops)`, function() {
      assert.equal(urlContact('/api/:a/:b', params2, search, ops), '/api/1/?c=1&d=2&e[0]=1&e[1]=2');
    });
    it(`urlContact('https://demo.com/api/:a/:b', params, search, ops)`, function() {
      assert.equal(urlContact('https://demo.com/api/:a/:b', params, search, ops), 'https://demo.com/api/1/2?c=1&d=2&e[0]=1&e[1]=2');
    });
    it(`urlContact('http://demo.com/api/:a/:b?t=1', params, search, ops)`, function() {
      assert.equal(urlContact('http://demo.com/api/:a/:b?t=1', params, search, ops), 'http://demo.com/api/1/2?t=1&c=1&d=2&e[0]=1&e[1]=2');
    });
    it(`urlContact('http://demo.com/api/:a/:b?c=2#d', params, search, ops)`, function() {
      assert.equal(urlContact('http://demo.com/api/:a/:b?c=2#d', params, search, ops), 'http://demo.com/api/1/2?c=2&c=1&d=2&e[0]=1&e[1]=2#d');
    });
    it(`urlContact('https://demo.com/api/:a/:b#d', params, search, ops)`, function() {
      assert.equal(urlContact('https://demo.com/api/:a/:b#d', params, search, ops), 'https://demo.com/api/1/2?c=1&d=2&e[0]=1&e[1]=2#d');
    });
    it(`urlContact('https://demo.com/api/:a/:b#d', params, search, ops)`, function() {
      assert.equal(urlContact('https://demo.com/api/:a/:b#d', params, search, ops), 'https://demo.com/api/1/2?c=1&d=2&e[0]=1&e[1]=2#d');
    });
    it(`urlContact('https://demo.com/api/:a/:b#d', params, search, ops)`, function() {
      assert.equal(urlContact('https://demo.com/api/:a/:b#d', params, search, ops), 'https://demo.com/api/1/2?c=1&d=2&e[0]=1&e[1]=2#d');
    });
    it(`urlContact('http://username:password@demo.com:8080/api/:a/:b#d', params, search, ops)`, function() {
      assert.equal(urlContact('http://username:password@demo.com:8080/api/:a/:b#d', params, search, ops), 'http://username:password@demo.com:8080/api/1/2?c=1&d=2&e[0]=1&e[1]=2#d');
    });
  });
});