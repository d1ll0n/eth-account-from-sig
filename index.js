const signMsg = require('./sign')

const ethAddressFromSignature = (web3, account, msgToSign) =>
  signMsg(web3, account, msgToSign)
  .then(sig => sig.signature || sig)
  .then(web3.utils.sha3)
  .then(web3.eth.accounts.privateKeyToAccount)

module.exports = ethAddressFromSignature