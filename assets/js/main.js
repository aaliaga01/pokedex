$(document).ready(function() {
	$.ajax({
		url: "http://pokeapi.co/api/v2/pokedex/1/",
		type: "GET",
		datatype: "json",
		data: {limit:"811"},
		success: function(source){
			data = source;
			showInfo();
			},
		error: function(dato){
			alert("ERROR");
			}
	});

});

function showInfo(){
	$("#caja").append(data["data1"]);

	$.each(data["data2"], function(index, value) {
		$("#caja").append('index: ' + index + ' value1: ' + data['data2'][index]['value1'] + 
			'value2: ' + data['data2'][index]['value2']);
	});
}
