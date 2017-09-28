// sketching out blockchain logic

// this is on the blockchain
var transaction = 
{

    'uuid1':
        {
            'seller_amount'    : 2,
            'seller_address'  : '0x98usdji'
        },
};


// seller posts his/her item
var seller = {
    'uuid'           : 'uuid1',
    'seller_amount'   : 5,
    'seller_address' : '0xsSsSs',
}

// buyer accepts item
var buyer = {
    'uuid'           : 'uuid1',
    'buyer_amount'   : 10,
    'seller_address' : '0xsSsSs',
    'buyer_address'  : '0xbBbBb'
}

var buyer = {
    'uuid'                       : 'uuid1',
    'transaction_is_complete'    : true
}


// if the buyer says the transaction is complete && the transaction hasn't been completed yet...
if (buyer.transaction_is_complete === true && transaction[buyer.uuid].transaction_is_complete !== true){

    // ... then update status
    transaction[buyer.uuid].transaction_is_complete = true

    // ...then distribute money back
    var buyer_payment  = transaction[buyer.uuid].buyer_amount - transaction[buyer.uuid].seller_amount;
    var seller_payment = transaction[buyer.uuid].buyer_amount - transaction[buyer.uuid].seller_amount + transaction[buyer.uuid].seller_amount;

    console.log('transction is complete', transaction)
}





// if buyer agrees to pay the seller amount (or greater)...
if (buyer.buyer_amount / 2 >= transaction[buyer.uuid].seller_amount){
    
    // ...then add buyer information to the transaction.
    transaction[buyer.uuid].buyer_address = buyer.buyer_address
    transaction[buyer.uuid].buyer_amount = buyer.buyer_amount

    console.log('contract is confirmed ', transaction)

}




// if the seller information is not listed in transaction...
if (transaction[seller.uuid] === undefined){

    // ...then add seller information to the transaction.
    transaction[seller.uuid] = {
        'seller_amount' : seller.seller_amount,
        'seller_address': seller.seller_address
    }  
    console.log('unconfirmed: ', transaction)

}

