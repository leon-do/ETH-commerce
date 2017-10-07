var contractByteCode = '606060405233600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060023481151561005157fe5b046000819055503460005460020214151561006b57600080fd5b6107a08061007a6000396000f300606060405236156100a2576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806308551a53146100a757806320965255146100fc57806335a063b4146101255780633fa4f2451461013a5780637150d8ae1461016357806373fac6f0146101b857806384b09e86146101cd578063c19d93fb14610222578063d696069714610259578063fa0c151314610263575b600080fd5b34156100b257600080fd5b6100ba6102b8565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561010757600080fd5b61010f6102de565b6040518082815260200191505060405180910390f35b341561013057600080fd5b6101386102e7565b005b341561014557600080fd5b61014d610443565b6040518082815260200191505060405180910390f35b341561016e57600080fd5b610176610449565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156101c357600080fd5b6101cb61046f565b005b34156101d857600080fd5b6101e061062f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561022d57600080fd5b610235610659565b6040518082600281111561024557fe5b60ff16815260200191505060405180910390f35b61026161066c565b005b341561026e57600080fd5b61027661074a565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561034357600080fd5b600080600281111561035157fe5b600260149054906101000a900460ff16600281111561036c57fe5b14151561037857600080fd5b7f72c874aeff0b183a56e2b79c71b46e1aed4dee5e09862134b8821ba2fddbf8bf60405160405180910390a160028060146101000a81548160ff021916908360028111156103c257fe5b0217905550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc3073ffffffffffffffffffffffffffffffffffffffff16319081150290604051600060405180830381858888f19350505050151561044057600080fd5b50565b60005481565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156104cb57600080fd5b60018060028111156104d957fe5b600260149054906101000a900460ff1660028111156104f457fe5b14151561050057600080fd5b7fe89152acd703c9d8c7d28829d443260b411454d45394e7995815140c8cbcbcf760405160405180910390a160028060146101000a81548160ff0219169083600281111561054a57fe5b0217905550600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6000549081150290604051600060405180830381858888f1935050505015156105b357600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc3073ffffffffffffffffffffffffffffffffffffffff16319081150290604051600060405180830381858888f19350505050151561062c57600080fd5b50565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600260149054906101000a900460ff1681565b600080600281111561067a57fe5b600260149054906101000a900460ff16600281111561069557fe5b1415156106a157600080fd5b60005460020234148015156106b557600080fd5b7fd5d55c8a68912e9a110618df8d5e2e83b8d83211c57a8ddd1203df92885dc88160405160405180910390a133600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600260146101000a81548160ff0219169083600281111561074157fe5b02179055505050565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050905600a165627a7a723058209a58dc0317bfd9753be75e16a98e7c328bf6e1aca0a230160c5e8a7b31debedb0029'

var contractAbi = [
	{
		"constant": true,
		"inputs": [],
		"name": "seller",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "getValue",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "abort",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "value",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "buyer",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "confirmReceived",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "getSellerAddress",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "state",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "confirmbuy",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "getBuyerAddress",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [],
		"name": "Aborted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [],
		"name": "buyConfirmed",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [],
		"name": "ItemReceived",
		"type": "event"
	}
]