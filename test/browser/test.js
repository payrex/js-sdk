const PayrexSdk = window.PayrexSdk;

describe('PayrexSdk', () => {
  it('should have interface', () => {
    assert.strictEqual(typeof PayrexSdk, 'function')
    const sdk = new PayrexSdk();
    assert.strictEqual(typeof sdk, 'object')
    assert.strictEqual(typeof sdk.get, 'function')
    assert.strictEqual(typeof sdk.post, 'function')
    assert.strictEqual(typeof sdk.put, 'function')
    assert.strictEqual(typeof sdk.remove, 'function')
  });
});
