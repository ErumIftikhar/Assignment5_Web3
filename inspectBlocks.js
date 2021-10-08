const Web3 = require("web3")
const rpcURL = "https://ropsten.infura.io/v3/febe4a0e7b8c467f940e40837e0913f2"
const web3 = new Web3(rpcURL)

web3.eth.getBlockNumber().then(console.log)

web3.eth.getBlock('latest').then(console.log)

web3.eth.getBlockNumber().then((latest) => {
    for (let i = 0; i < 10; i++) {
      web3.eth.getBlock(latest - i).then(console.log)
    }
  })

  const hash = '0xb2e2bb0a72b39e3a7c26cc1e86fafcf1a4ee4a3b807bdaf4024049311a670202'
web3.eth.getTransactionFromBlock(hash, 2).then(console.log)

