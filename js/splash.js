(function () {

	let preload = document.getElementById("splash");
	let loading = 0;
	let id = setInterval(frame, 64);

	function frame() {
		if (loading == 100) {
			clearInterval(id);
			window.open("../principal/principal.html", "_self");
		}
		else {
			loading = loading + 1;
			if (loading == 90) {
				preload.style.animation = "fadeout 1s ease";
			}
		}
	}


})();
