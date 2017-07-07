$(document).ready (function(){

	$.ajax({

		url: 'http://pokeapi.co/api/v2/pokemon',
		type: 'GET',
		dataType: 'JSON',
		data: {'limit': '6'},
	})
	.done(function(r) {
		mostrar(r.results);
		console.log(r);
		console.log("success");
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});

	var mostrar = function(data){

        data.forEach(function(e){
            var nombre = e.name;
            $("#lista-pokemones").append("<li><img class='pokeImg' src='http://img.pokemondb.net/artwork/"
            	+ nombre + ".jpg'><p>"+ nombre +"</p><li>");

            $("#caja").addClass("")
        });
    };	

});


	