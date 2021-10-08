const Web3 = require("web3")
const rpcURL = "https://ropsten.infura.io/v3/febe4a0e7b8c467f940e40837e0913f2"
const web3 = new Web3(rpcURL)
contractAddress = "0x65266251940C1802bFbeF822EF741F90FCa0Aee0";
contractAbi = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "ageCaller",
		"type": "event"
	},
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
]



const contractMethodAsync = async() => {
    try { 
		const contract = new web3.eth.Contract(contractAbi, contractAddress);
        let getallEvent = await contract.getPastEvents("AllEvents", {
            fromBlock: 0,
            toBlock: "latest"
        });
        console.log("getAllEvents", getallEvent);
    }
    catch(error){
        console.log("error", error);
    }
}
contractMethodAsync()