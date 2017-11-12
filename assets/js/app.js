// Our preopopulated array
var cryptos = ["Bitcoin", "Ethereum", "Litecoin"];

function buttonMaker() {
    for(var i = 0; i < cryptos.length; i++) {
        //Adds "+" between words
        var plusTitles = cryptos[i].split(' ').join('-');

        //Button attributes
        var button = $('<button data-cryptos=' + plusTitles + '>').append(cryptos[i]);

        //Add button class
        button.addClass('button');
        
        //Appened to div
        $('#cryptoButtons').append(button);
    }

    $('.button').on('click', function() {
        var crypto = $(this).data('cryptos');

        crypto = crypto.split('-').join(' ');
        var queryURL = "https://api.coinmarketcap.com/v1/ticker/?limit=10";

        $.ajax({
            url: queryURL,
            method: 'GET'
        })
        .done(function(data) {
            console.log(data);

            for (var i = 0; i < data.length; i++) {
                console.log(crypto);
                console.log(data[i].name);
                        if (crypto === data[i].name) {
                           console.log(data[i].price_usd);  
                        }
                       
            }

        })
    });

}

$('#addCrypto').on('click', function(){

        //Clear the buttons so they won't duplicate on the page
        $('#cryptoButtons').empty();
         
        //newTitle gets the movie title user entered
        var newTitle = $('#crypto-input').val();

//         newTitle.charAt(0).toUpperCase() + string.slice(1);

        

// function capitalizeFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }

        //Only add one instance of movie
        for (i = 0; i < cryptos.length; i++) {
        
            //If newTitle can be found in the array
            if (newTitle == cryptos[i]) {

               //Remove newTitle from the array
                cryptos.pop(newTitle);
            }
        }

        //Adds newTitle to the titles array
        cryptos.push(newTitle);

        //Calls the loop again with the new title
        buttonMaker();
});


buttonMaker();

// $('#button').on('click', function() {
// 	$('#display').html('');
//         var queryURL = "https://api.coinmarketcap.com/v1/ticker/?limit=10";

//         //Ajax call
//          $.ajax({
//             url: queryURL,
//             method: 'GET'
//             })

//         //Ajax response
//         .done(function(data) {

//             //Console log object returned
//             console.log(data);
//             buttonMaker(data);


//         });
      
// });

// function buttonMaker(data) {
//             for (i = 0; i < data.length; i++) {
            	
//             	var button = $('<button id=' + data[i].id + '>').append(data[i].name);
//             	button.addClass('button');
//             	$('#currencyButtons').append(button);


// });
//             	$('.button').on('click', function() {
// 	var name = $(this).attr('id');
// 	console.log(name);
//             }
// }



