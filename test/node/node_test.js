const assert = require('assert');
const PayrexSdk = require('../../src/node');
const jsonServer = require('json-server');

describe('PayrexSdk node', function () {
  describe('constructor', function () {
    it('should create successful without options', () => {
      const sdk = new PayrexSdk();
      assert.strictEqual(typeof sdk, 'object');
    });
    it('should create successful with options', () => {
      const sdk = new PayrexSdk({ baseUrl: 'http://localhost/', credentials: 'AAA' });
      assert.strictEqual(typeof sdk, 'object');
      assert.strictEqual(sdk.credentials, 'AAA');
      assert.strictEqual(sdk.baseUrl, 'http://localhost/');
      assert.strictEqual(typeof sdk.get, 'function');
      assert.strictEqual(typeof sdk.post, 'function');
      assert.strictEqual(typeof sdk.put, 'function');
      assert.strictEqual(typeof sdk.remove, 'function');
    });
    it('should not throw errors', () => {
      new PayrexSdk();
      new PayrexSdk({ credentials: 'AAA' });
      new PayrexSdk({ baseUrl: 'http://localhost' });
      new PayrexSdk({ baseUrl: 'http://localhost/' });
      new PayrexSdk({ baseUrl: 'https://localhost/' });
    });
  });
  describe('fake rest', function () {
    let rest;
    before((done) => {
      const server = jsonServer.create();
      server.use(jsonServer.defaults());
      server.use(jsonServer.router('test/node/data.json'));
      rest = server.listen(3078, done);
    });
    after((done) => rest.close(done));

    it('should return real data', () => {
      return new PayrexSdk({ baseUrl: 'http://localhost:3078' })
        .get('/posts')
        .then(response => {
          assert.deepStrictEqual(response, [{ id: 1, title: 'json-server', author: 'typicode' }]);
        });
    });
  });
});
