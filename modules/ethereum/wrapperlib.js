//
// wrapperlib to include libraries for incorporation into the virtual DOM
//

Decimal = require('../../common/crypto/decimal-light'); Decimal.set({ precision: 64 });

// shim for randomBytes to avoid require('crypto') incompatibilities
// solves bug: "There was an error collecting entropy from the browser
const randomBytes = crypto.randomBytes;
if (typeof window === 'object') {
  const wCrypto = window.crypto || {};
  if (!wCrypto.getRandomValues) {
    wCrypto.getRandomValues = function getRandomValues (arr) {
      const bytes = randomBytes(arr.length);
      for (let i = 0; i < bytes.length; i++) {
        arr[i] = bytes[i];
      }
    };
  }
}

// inclusion of necessary requires
let ethereumjs = {
  ethUtil: require('ethereumjs-util'),
  EthTx: require('ethereumjs-tx'),
  ethABI: require('ethereumjs-abi'),
  hex2dec: require('../../common/crypto/hex2dec')
};

module.exports = ethereumjs;
