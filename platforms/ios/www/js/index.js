
var App = (function(geo, map) {
    
    var ModuleObj = {};
    
    ModuleObj.initialize = function() {
        this.bindEvents();
    };
    
    
    ModuleObj.bindEvents = function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    };
    

    ModuleObj.onDeviceReady = function() {
    	StatusBar.hide();
    	map.initialize("map-canvas", function() {
    	debugger
    		geo.getCurrentPosition(function(pos) {
					map.setMarker(pos, "My Location");
				}, function(err) {
					console.log(err);
				});
    	});
		};
		
		return ModuleObj;
})(Geo, Map);
