$(document).ready(function () {
	//Variables here so they can be accessed
	var list = $("#list");

	//Get the data
	$.get("https://swapi.co/api/planets/2/", function (response) {
		$("#council").text(response.name);
		$("#council_code").text(response.climate);

		//Dealing with the list of residents
		for (i = 0; i < response.residents.length; i++) {
			var $resi = response.residents[i];
			$.get($resi, function (residentData) {
				var itemToAppend = template(residentData);
				list.append(itemToAppend);
			})
		};
	});

	// Template of data to append
	var template = function (residentData) {
		var templateString = "<div class ='item'><p>" + residentData.name + " - " + residentData.hair_color + "</p></div>";
		return $(templateString);
	}
});