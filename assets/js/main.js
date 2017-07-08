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
            var nombre = e.name; //cada elemento sobre el cual itera, (el nombre) se guarda en una variable

            var div = $("<div>", //Se crea un div
				{
				id: "poke", //atributo directo, nombre del id
					"class": "col-sm-12 col-md-4 col-lg-3", //class entre comillas porque es una palabra reservada en javascript,
					//le agrege la clase de bootstrap				
				});

            $(".row").append(div);//se inserta el div creado dinamicamente en el html

            $(div).append("<img class='imagen' src='http://img.pokemondb.net/artwork/"
            	+ nombre + ".jpg'>"); //se coloca la imagen dentro de cada col de bootstrap en el div creado

            $(div).append("<h3>" + nombre + "</h3>")// para poner el nombre de cada pokemon
        });
    };	

});


	