require('whatwg-fetch');
const base64 = require('base-64');
const PayrexSdkBase = require('payrex-js-sdk-base');

function base64Encode(str) {
  return base64.encode(encodeURIComponent(str)
    .replace(/%([0-9A-F]{2})/g, (match, p1) => String.fromCharCode('0x' + p1)));
}

const ASSIGN_OPTIONS = {
  fetch: global.fetch,
  Headers: global.Headers,
  base64Encode: base64Encode,
};

class PayrexSdk extends PayrexSdkBase {
  constructor(options = {}) {
    super(Object.assign({}, ASSIGN_OPTIONS, options));
  }
}

module.exports = PayrexSdk;
