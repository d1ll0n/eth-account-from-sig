const ethAddressFromSignature = require('./index')
const Web3 = require('web3')

async function test() {
  console.log('Testing eth-account-from-sig')
  const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3'))
  const account = web3.eth.accounts.create()
  const message = 'CALCULATING SECONDARY KEY\N'
    + 'DO NOT SIGN THIS MESSAGE UNLESS YOU ARE ON THE CORRECT WEBSITE'

  const acct1 = await ethAddressFromSignature(web3, account, message)
  console.log(`First private key: ${acct1.privateKey}`)
  const acct2 = await ethAddressFromSignature(web3, account, message)
  console.log(`Second private key: ${acct2.privateKey}`)
  console.log(acct1.privateKey == acct2.privateKey ? 'Keys match' : 'Keys do not match')
}

test()