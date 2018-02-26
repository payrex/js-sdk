PAYREX-JS-SDK
=============

[![Build Status](https://travis-ci.org/payrex/js-sdk.svg?branch=master)](https://travis-ci.org/payrex/js-sdk)
[![codecov](https://codecov.io/gh/payrex/js-sdk/branch/master/graph/badge.svg)](https://codecov.io/gh/payrex/js-sdk)
![node](https://img.shields.io/node/v/passport.svg)


Install
-------

```bash
npm install --save payrex-js-sdk
```


Usage
-----

```javascript
const PayrexSdk = require('payrex-js-sdk');

const options = {/* ... options ... */};
const sdkBase = new PayrexSdk(options);
```

| Option | Type | Usage | Description |
|--------|------|-------|-------------|
| credentials | string | *optional* | API secret key |
| baseUrl | string | *optional* | API base url (default "http://localhost:3000/") |


See usage docs on [base page](https://github.com/payrex/js-sdk-base#readme)
