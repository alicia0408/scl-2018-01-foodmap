Promise.all([
	fetch("https://places.demo.api.here.com/places/v1/discover/search?at=37.7942%2C-122.4070&q=restaurant&app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg")
	
]).then((Responses) => { // responde a todas las promesas
	return Promise.all(Responses.map((response) => {
		return response.json();
	}));

}
).then((responseJsons) => {// arreglo de respuestas json
	console.log(responseJsons);

    

}).catch((error) => {
	alert("Error de carga" + error);
	//console.log(error)
}
);
