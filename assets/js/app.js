

$('#button').on('click', function() {
	$('#display').html('');
        var queryURL = "https://api.coinmarketcap.com/v1/ticker/?limit=10";

        //Ajax call
         $.ajax({
            url: queryURL,
            method: 'GET'
            })

        //Ajax response
        .done(function(data) {

            //Console log object returned
            console.log(data);
            buttonMaker(data);


        });
      
});

function buttonMaker(data) {
            for (i = 0; i < data.length; i++) {
            	
            	var button = $('<button id=' + data[i].id + '>').append(data[i].name);
            	button.addClass('button');
            	$('#currencyButtons').append(button);


});
            	$('.button').on('click', function() {
	var name = $(this).attr('id');
	console.log(name);
            }
}



