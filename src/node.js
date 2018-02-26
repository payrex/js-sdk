const fetch = require('node-fetch');
const PayrexSdkBase = require('payrex-js-sdk-base');

const ASSIGN_OPTIONS = {
  fetch,
  Headers: fetch.Headers,
};

class PayrexSdk extends PayrexSdkBase {
  constructor(options = {}) {
    super(Object.assign({}, ASSIGN_OPTIONS, options));
  }
}

module.exports = PayrexSdk;
