// (C) 2017 Internet of Coins / Joachim de Koning
// hybridd module - bitshares/deterministic.js
// Deterministic encryption wrapper for Counterparty


// Reference: https://counterparty.io/docs/api/#signing-transactions-before-broadcasting

var wrapper = (
  function() {

    /*

<html>
    <script src="https://raw.githubusercontent.com/bitpay/bitcore-lib/f031e1ddfbf0064ef503a28aada86c4fbf9a414c/bitcore-lib.min.js"></script>
    <script src="https://raw.githubusercontent.com/CounterpartyXCP/counterwallet/master/src/js/util.bitcore.js"></script>
    <script src="https://raw.githubusercontent.com/CounterpartyXCP/counterwallet/master/src/js/external/mnemonic.js"></script>
    <script>
    counterparty_api = function(method, params) {
        // call Counterparty API method via your prefered method
    }

    bitcoin_api = function(method, params) {
        // call Bitcoin Core API method via your prefered method
    }

    // generate a passphrase
    var m = new Mnemonic(128); //128 bits of entropy (12 word passphrase)
    var words = m.toWords();
    var passphrase = words.join(' ')

    // generate private key, public key and address from the passphrase
    wallet = new CWHierarchicalKey(passphrase);
    var cwk = wallet.getAddressKey(i); // i the number of the address
    var source = key.getAddress();
    var pubkey = cwk.getPub()

    // generate unsigned transaction
    unsigned_hex = counterparty_api('create_send', {'source': source, 'destination': destination, 'asset': asset, 'quantity': quantity, 'pubkey': pubkey})

    CWBitcore.signRawTransaction2(self.unsignedTx(), cwk, function(signedHex) {
        bitcoin_api('sendrawtransaction', signedHex)
    })
    </script>
</html>
*/
    var functions = {

      // create deterministic public and private keys based on a seed
      keys : function(data) {
        console.log(data.seed);
        return "appeltaart";
      },

      // generate a unique wallet address from a given public key
      address : function(data) {
        return "cheesecake";
      },

      // create and sign a transaction
      transaction : function(data,callback) {

      },

    }

    return functions;
  }
)();

// export functionality to a pre-prepared var
deterministic = wrapper;