					
var Map = (function(geo) {
	
	var ModuleObj = {};
	var map = {};
	var markers = [];

	ModuleObj.initialize = function(frame, callback) {
		geo.getCurrentPosition(function(pos) {
			var mapOptions = {
				center: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
				zoom: 12,
				zoomControl: false
			};
			map = new google.maps.Map(document.getElementById(frame), mapOptions);
		}, function() {
			alert("Unable to determine your current position");
		});
		
		if (callback)
			callback();
	};
	
	
	ModuleObj.setMarker = function(pos, title) {
		markers[title] = (new google.maps.Marker({
			position: pos,
			map: this.map,
			title: title
		}));
	}
	
	return ModuleObj;
})(Geo);