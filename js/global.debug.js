(function(){
var slice = Array.prototype.slice;
function log(nameAndOtherArgs) {
    var topTierArgs = slice.call(arguments);
    return function log() {
    	var args = topTierArgs.concat(slice.call(arguments));
        window.console&&window.console.log&&window.console.log.apply(console, args);
        window.__log.prev = args;
    }
}

window._log = log(null);
window.__log = log;
window._require2global = function(moduleName, propertyName){
	propertyName || (propertyName = moduleName)
	require([moduleName], function(module){
		window[propertyName] = module;
	});
}
})();