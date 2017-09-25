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
            seller_amount: '5',
            seller_address: '0xsSsSs',
            buyer_address: '0xbBbBb',
            buyer_amount: '10'
        },        
};
*/



app.post('/', function (req, res){
	console.log('\n =================')
	console.log('\n Message Recieved...')
    const message = req.body
    console.log('\n The message is: \n', message)

    if (contract[message.uuid] === undefined && message.represent === 'seller'){
    	console.log('\n The message is new & the message is from the seller...')
    	console.log('\n going to seller logic...')
    	seller(message)
    }
    else if (contract[message.uuid] !== undefined && message.represent === 'buyer' && message.command === 'I_agree_to_the_contract'){
    	console.log('\n The contract exists & the message is from the buyer & he/she agrees to the contract...')
    	console.log('\n going to contract_agreement() logic...')
    	contract_agreement(message)
    }
    else if (contract[message.uuid] !== undefined && message.represent === 'buyer' && message.command === 'complete_transaction'){
    	console.log('\n The contract exists & the message is from the buyer & he/she says `complete the transaction`...')
    	console.log('\n going to complete_transaction() logic...')
    	complete_transaction(message)
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

	if (contract[message.uuid].buyer_amount === undefined && message.buyer_amount >= 2 * contract[message.uuid].seller_amount){
		console.log('\n The item has not been bought & the buyer agrees to pay the seller_amount + collateral...')
        
        console.log('\n ...adding buyer information to the contract')
		contract[message.uuid].buyer_address = message.buyer_address
		contract[message.uuid].buyer_amount = message.buyer_amount

    	console.log('\n The contract = ', contract[message.uuid])
		console.log(`\n The contract is now locked in. Message the seller to ship the item. When the item arrives, click 'complete transacton'`)
		return 'and wait for the item...'
	
	} else {
	
		console.log("\n The buyer amount is too low or the item has already been bought.")
        console.log(contract[message.uuid])
        console.log('Return buyer money.')
		return 'buyer money'
	
	}

}


function complete_transaction(message){
	console.log('\n Starting complete transaction logic:')
    
    if (contract[message.uuid].buyer_amount >= 2 * contract[message.uuid].seller_amount){
        console.log('\n Verifying the contract_agreement...we gud.')

    	console.log('\n Pay the seller the value 2 times the seller amount (1x for the value of the item and 1x for the collateral)')
    	var seller_pay = 2 * contract[message.uuid].seller_amount

    	console.log('\n pay the buyer the rest of his/her collateral')
    	var buyer_pay = contract[message.uuid].buyer_amount - contract[message.uuid].seller_amount
        
        console.log('\n The contract = ', contract[message.uuid])
    	console.log('\n Seller gets paid: ', seller_pay)
    	console.log('\n Buyer gets paid: ', buyer_pay)

    } else {

        console.log("\n The contact hasn't been agreed upon.")
        console.log(contract[message.uuid])
        console.log('Return buyer money.')
        return 'buyer money'

    }

}

function seller(message){
	console.log('\n Starting seller logic:')

	if (message.seller_amount > 0){
		console.log('\n The seller listed an item worth > 0 ...')

	    console.log('\n ...adding seller_address to the contract.')
	    console.log(`\n ...holding seller_amount as collateral.`)
	    contract[message.uuid] = {
            'seller_address': message.seller_address,
	        'seller_amount' : message.seller_amount, 
    	}  
    	
    	console.log('\n The contract is: ', contract[message.uuid])
    	console.log('\n The item is now listed on the contract. Waiting on buyer...')
	} 
	else {
		console.log('\n The seller listed an item worth < 0')
        console.log(contract[message.uuid])
        console.log('Returning seller money.')
		return 'seller money'
	}
}



app.listen(3000)