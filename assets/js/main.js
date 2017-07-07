$(document).ready (function($){
		
	var dibujar= function(data){
		
		var nombre="";
		data.forEach(function (element){
			nombre= element;
			$("#caja").append(armar(nombre));
		});
	}

	var armar = function(nombre){
		var poke= "<p>" + gif + "</p>"
		return poke;
	}

	var pokedex = function(pok){
		$.ajax({
			url: "http://pokeapi.co/api/v2/pokedex/1/",
			type: "GET",
			datatype: "json",
			data: {limit:"811"}
		})
		.done(function(response){
			console.log(response);
			dibujarGifs(response.data);
		})
		.fail(function(){
			console.log("error");
		});
	}

	$("#boton").click(function(event){
		console.log("Entro");
		$("#caja").empty();
		var poke=$("#poke").val();
		dibujar(name);


});

	});