var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded ({ extended:true }));


var contract = {}
/*
var transation = {
    'uuid1':
        {
            'seller_amount'    : 2,
            'seller_address'  : '0x98usdji'
        },
    'uuid2':
        {
            'seller_amount'    : 2,
            'seller_address'  : '0x98usdji'
            'buyer_amount'    : 4,
            'buyer_address'  : '0xf8h2ja2m'
        },        
};
*/



app.post('/', function (req, res){
	console.log('\n\n\n =================')
	console.log('\n Message Recieved...')
    const message = req.body
    console.log('\n The message is: \n', message)

    if (message.represent === 'seller'){
    	console.log('\n The message is from the seller...')
    	console.log('\n going to seller logic...')
    	seller(message)
    	return 'your money'
    }
    else if (message.represent === 'buyer' && message.command === 'I_agree_to_the_contract'){
    	console.log('\n The message is from the buyer and he/she agrees to the contract...')
    	console.log('\n going to contract_agreement() logic...')
    	contract_agreement(message)
    	return 'your money'
    }
    else if (message.represent === 'buyer' && message.command === 'complete_transaction'){
    	console.log('\n The message from the buyer and says complete the transaction')
    	console.log('\n going to complete_transaction() logic...')
    	complete_transaction(message)
    	return 'your money'
    }
    else {
    	console.log('\n message is invalid. Returning your money.')
    	return 'your money'
    }

    //refreshes page
    res.redirect("/");
})

function contract_agreement(message){
	console.log('\n Starting the contract agreement logic:')

	if (message.buyer_amount >= 2 * contract[message.uuid].seller_amount){
		console.log("\n The buyer amount is greater than the seller amount + seller collateral (2 * seller amount)...")		
		console.log('\n ...adding buyer information to the contract')
		contract[message.uuid].buyer_address = message.buyer_address
		contract[message.uuid].buyer_amount = message.buyer_amount

    	console.log('\n Your contract is: ', contract[message.uuid])
		console.log('\n Contract is now locked in. Message the seller to ship the item. When the item arrives, complete contract')
		return 'and wait for the item...'
	
	} else {
	
		console.log("\n The buyer amount is too low. Return funds.")
		return 'your funds'
	
	}

}


function complete_transaction(message){
	console.log('\n Starting complete transaction logic:')

	console.log('\n pay the seller the value 2 times the seller amount (1x for the value of the item and 1x for the collateral)')
	var seller_pay = 2 * contract[message.uuid].seller_amount

	console.log('\n pay the buyer the rest of his collateral')
	var buyer_pay = contract[message.uuid].buyer_amount - contract[message.uuid].seller_amount
    
    console.log('\n Your contract is: ', contract[message.uuid])
	console.log('\n seller gets paid ', seller_pay)
	console.log('\n buyer gets paid ', buyer_pay)

}

function seller(message){
	console.log('\n Starting seller logic:')

	if (contract[message.uuid] === undefined){
		console.log('\n The seller information is not listed in the contract...')

	    console.log('\n ...adding seller address to the contract.')
	    console.log(`\n ...holding seller amount as collateral.`)
	    contract[message.uuid] = {
	        'seller_amount' : message.seller_amount, 
	        'seller_address': message.seller_address,
    	}  
    	
    	console.log('\n Your contract is: ', contract[message.uuid])
    	console.log('\n The item is now listed on the contract. Waiting on buyer...')
	} 
	else {
		console.log('\n Seller information is already listed in the contract. Returning your money.')
		return 'your money'
	}
}



app.listen(3000)