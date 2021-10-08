const Web3 = require("web3")
const Tx = require('ethereumjs-tx').Transaction

const rpcURL = "https://ropsten.infura.io/v3/febe4a0e7b8c467f940e40837e0913f2"
const web3 = new Web3(rpcURL)

const account1 = "0xc763f8387f962ad6a779357CE790D7Bbd63DBacA"
// const account2 = "0x1a1D281C72837228C91971376A3Cba277a892112";

const privatekey = "b7261ea1e3f472d19391a69dfe5a9eabb135ac179715505b1145e09bd0c9b104"
// const privatekey2 = "408251a2c551d75be0fdd3e398278f16a6d980cb86375fb0b9be950c755dbfeb";

const account1_privatekey = Buffer.from(privatekey, 'hex')

const bytecode = "608060405234801561001057600080fd5b50610150806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80632e64cec11461003b5780636057361d14610059575b600080fd5b610043610075565b60405161005091906100a1565b60405180910390f35b610073600480360381019061006e91906100ed565b61007e565b005b60008054905090565b8060008190555050565b6000819050919050565b61009b81610088565b82525050565b60006020820190506100b66000830184610092565b92915050565b600080fd5b6100ca81610088565b81146100d557600080fd5b50565b6000813590506100e7816100c1565b92915050565b600060208284031215610103576101026100bc565b5b6000610111848285016100d8565b9150509291505056fea264697066735822122097852289d49ddb3cd4c9e92cbdec033bdd05d26b43005d76061d20d0205ad6aa64736f6c63430008090033"
	
const bytecodeBuffer = Buffer.from(bytecode, 'hex');
web3.eth.getTransactionCount(account1, (err, txCount) => {
   
    // console.log("nonceValue:", txCount);
    const txObject = {
      nonce:    web3.utils.toHex(txCount),
      gasLimit: web3.utils.toHex(7000000),
      gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
      data: bytecodeBuffer
    }

    const tx = new Tx(txObject, {chain :'ropsten'})
    tx.sign(account1_privatekey)
    const serializedTx = tx.serialize();
    const txHex = '0x' +serializedTx.toString('hex');
    
    web3.eth.sendSignedTransaction(txHex, (err, txHash) => {
        console.log('err:', err, 'txHash:', txHash)
// if(!error){
//     console.log("Deployment successful", txHash);
// }else{
//     console.log("error", error);
// }
    }).then(receipt => {
console.log(receipt);
    });
  });

 


