const Web3 = require('web3');
const rpcURL = 'https://ropsten.infura.io/v3/febe4a0e7b8c467f940e40837e0913f2' // Your RPC URL goes here
const web3 = new Web3(rpcURL);
const address = '0xc763f8387f962ad6a779357CE790D7Bbd63DBacA' // Your account address goes here
web3.eth.getBalance(address, (err, wei) => {
 console.log("Balance in wei", wei);
    balance = web3.utils.fromWei(wei, 'ether');
    console.log("Balance in ether", balance);
})