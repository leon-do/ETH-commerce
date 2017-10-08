
    function buy (){

        web3.eth.sendTransaction({
            value: $('#buyValue').val() * 1000000000000000000,
            to: $("#buyTransactionNumber").val()
        }, function(err, transactionHash) {
          if (!err)
            $('#buyTransactionHash').text(transactionHash)
            console.log(transactionHash); // "0x0f92722137f0867bf55d643f7a2585597bb26bf22e72a457bf562d476ebe6b9b"
        });

    }