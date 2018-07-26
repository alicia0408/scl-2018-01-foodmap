 

var platform = new H.service.Platform({

	app_id: ' {3zGaOD2cy6cTNhzwclJw} ',
	app_code: ' {wFzC3HVloYWs1lavwxph2Q} ',
});

var defaultLayers = plataforma.createDefaultLayers();
var mapPlaceholder = documento.getElementById(' contenedor del mapa ');

var map = new H.Map(
	mapContainer,
	defaultLayers.normal.mapa);

ventana.addEventListener(' resize ', function () {
	mapa.getViewPort().resize();
});