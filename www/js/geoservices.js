
var Geo = (function () {

	var ModuleObj = {};

	/*
	 *	@success	Callback accepting a Position object
	 *	@failure	Callback accepting an error obj. containing e-code and message
	 */
	ModuleObj.getCurrentPosition = function (success, failure) {
		navigator.geolocation.getCurrentPosition(success, failure);
	}

	ModuleObj.startWatching = function () {
		alert("Not implemented");
	}
	
	ModuleObj.stopWatching = function () {
		alert("Not implemented");
	}

	return ModuleObj;
})();