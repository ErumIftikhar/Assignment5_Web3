const Web3 = require('web3');
const rpcURL = 'https://ropsten.infura.io/v3/febe4a0e7b8c467f940e40837e0913f2' // Your RPC URL goes here
const web3 = new Web3(rpcURL);

const ABI = [
	{
		"inputs": [],
		"name": "retrieve",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "num",
				"type": "uint256"
			}
		],
		"name": "store",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

const contractAddress = "0xFafe049f3537413512c20c6fd42956c916A41ba4";
const contract = new web3.eth.Contract(ABI, contractAddress);
contract.methods.retrieve().call((err, result) => {
    if(!err){
        console.log("Result from contract", result);
    }
})