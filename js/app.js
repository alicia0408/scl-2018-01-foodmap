 let restaurant = null;



fetch(`https://places.cit.api.here.com/places/v1/discover/explore?app_id=3zGaOD2cy6cTNhzwclJw&app_code=wFzC3HVloYWs1lavwxph2Q&at=-33.43727,-70.650556&pretty`)
 .then(response => response.json())
 .then(explorer =>{
	 console.log(explorer);
	 
 })

