const fetch = require('node-fetch');
const PayrexSdkBase = require('payrex-js-sdk-base');

const ASSIGN_OPTIONS = {
  fetch,
  Headers: fetch.Headers,
  base64Encode: str => Buffer.from(str, 'utf-8').toString('base64'),
};

class PayrexSdk extends PayrexSdkBase {
  constructor(options = {}) {
    super(Object.assign({}, ASSIGN_OPTIONS, options));
  }
}

module.exports = PayrexSdk;
