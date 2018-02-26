const PayrexSdk = window.PayrexSdk;

describe('PayrexSdk', () => {
  it('should create successful with options', () => {
    assert.strictEqual(typeof PayrexSdk, 'function')
    const sdk = new PayrexSdk({ baseUrl: 'http://localhost/' });
    assert.strictEqual(typeof sdk, 'object');
    assert.strictEqual(sdk.credentials, '');
    assert.strictEqual(sdk.baseUrl, 'http://localhost/');
    assert.strictEqual(typeof sdk.get, 'function');
    assert.strictEqual(typeof sdk.post, 'function');
    assert.strictEqual(typeof sdk.put, 'function');
    assert.strictEqual(typeof sdk.remove, 'function');
  });
  it('should not throw errors', () => {
    new PayrexSdk();
    new PayrexSdk({ credentials: '' });
    new PayrexSdk({ credentials: 'AAA' });
    new PayrexSdk({ baseUrl: 'http://localhost' });
    new PayrexSdk({ baseUrl: 'http://localhost/' });
    new PayrexSdk({ baseUrl: 'https://localhost/' });
  });
});
