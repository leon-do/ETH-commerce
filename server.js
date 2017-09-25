var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded ({ extended:true }));


var transaction = 
{
    'uuid1':
        {
            'seller_amount'    : 2,
            'seller_address'  : '0x98usdji'
        },
};


app.post('/', function (req, res){

    const body = req.body

    //refreshes page
    res.redirect("/");
})

app.listen(3000)