require('whatwg-fetch');
const PayrexSdkBase = require('payrex-js-sdk-base');

const ASSIGN_OPTIONS = {
  fetch: global.fetch,
  Headers: global.Headers,
};

class PayrexSdk extends PayrexSdkBase {
  constructor(options = {}) {
    super(Object.assign({}, ASSIGN_OPTIONS, options));
  }
}

module.exports = PayrexSdk;
