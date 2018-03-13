// (C) 2017 Internet of Coins / Metasync / Joachim de Koning
// hybridd module - waves/deterministic.js
// Deterministic encryption wrapper for Waves


var wrapper = (
  function() {

    var Waves = wrapperlib.create(wrapperlib.MAINNET_CONFIG);

    var functions = {

      keys: function(data) {
        return Waves.Seed.fromExistingPhrase(data.seed);
      },

      address: function(data) {
        return data.address;
      },

      transaction: function(data,callback) {

        if (data.mode != 'token') {
          // set the parameters

          var txParams = { // optional-> data: payloadData

            recipient: data.target,
            // ID of a token, or WAVES
            assetId: 'WAVES',
            // The real amount is the given number divided by 10^(precision of the token)
            amount: parseInt(data.amount),
            // The same rules for these two fields
            feeAssetId: 'WAVES',
            fee: 100000,
            // 140 bytes of data (it's allowed to use Uint8Array here)
            attachment: '',
            timestamp: Date.now()
          };
        } else {
        /*  // TEST: var encoded = encode({'func':'balanceOf(address):(uint256)','vars':['target'],'target':data.target});
          var encoded = encode({
            'func': 'transfer(address,uint256):(bool)',
            'vars': ['target', 'amount'],
            'target': data.target,
            'fee_to_pay': '100000',
            'amount': parseInt(data.amount).toString(16)
          }); // returns the encoded binary (as a Buffer) data to be
          // set the parameters
          var txParams = {
            //is nonce needed?
            nonce: '0x' + parseInt(data.unspent.nonce).toString(16), // nonce
            to: data.toAddr, // send payload to contract address
            value: '0x' + parseInt(0).toString(16), // set to zero, since we're sending tokens
            data: encoded // payload as encoded using the smart contract
            };*/
        }
        Waves.API.Node.v1.assets.transfer(txParams, data.keys.keyPair).then((responseData) => {}).catch(function (error) {
          callback(error.data); // Since we've hacked the fetch command it will error, but we don't need the result, we need the request
        });
      }
    }

    return functions;
  }
)();

// export the functionality to a pre-prepared var
deterministic = wrapper;
