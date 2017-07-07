$(document).ready (function($){
		$.ajax({
		url: 'http://pokeapi.co/api/v2/pokedex/1/',
		type: 'GET',
		dataType: 'JSON',
		data: {q:pokemon_entries},
	})
	.done(function(respuesta) {
		console.log("respuesta");
		console.log("success");
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});


});