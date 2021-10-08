const Web3 = require("web3");
const Tx = require('ethereumjs-tx').Transaction;
const rpcURL = "https://ropsten.infura.io/v3/febe4a0e7b8c467f940e40837e0913f2" 
const web3 = new Web3(rpcURL);

const account1 = "0xc763f8387f962ad6a779357CE790D7Bbd63DBacA";
const account2 = "0x1a1D281C72837228C91971376A3Cba277a892112";

const privatekey = "b7261ea1e3f472d19391a69dfe5a9eabb135ac179715505b1145e09bd0c9b104";
const privatekey2 = "408251a2c551d75be0fdd3e398278f16a6d980cb86375fb0b9be950c755dbfeb";

const account1_privatekey = Buffer.from(privatekey, 'hex');

web3.eth.getTransactionCount(account1, (err, txCount) => {
    console.log("nonceValue:", txCount);
    const txObject = {
      nonce:    web3.utils.toHex(txCount),
      to:       account2,
      value:    web3.utils.toHex(web3.utils.toWei('0.1', 'ether')),
      gasLimit: web3.utils.toHex(21000),
      gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
    }

    const tx = new Tx(txObject, {chain : 'ropsten'});
    tx.sign(account1_privatekey);
    const serializedTx = tx.serialize();
    const txHex = '0x' +serializedTx.toString('hex');
    
    web3.eth.sendSignedTransaction(txHex, (error, txHash) => {
if(!error){
    console.log("Transaction successful", txHash);
}else{
    console.log("error", error);
}
    });
  });

