$(document).ready function($){

	$.ajax({
		url: 'http://pokeapi.co/api/v2/pokedex/1/',
		type: 'GET',
		dataType: 'JSON',
		data: {limit: '811'},
	})
	.done(function(respt) {
		console.log("respt");
		console.log("success");
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
	
	
};