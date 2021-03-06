
(function () {

	var queue = [
		{ lib: 'jquery-ui', url: 'js/libs/jquery-ui.min.js' },
		{ lib: 'smoothScroll', url: 'js/util/smoothScroll.js' },
		{ lib: 'jfeed', url: 'js/util/jquery.jfeed.js' },
		{ lib: 'lightbox', url: 'js/util/jquery.lightbox_me.js' },
		{ lib: 'colorPicker', url: 'js/util/colorPicker/js/colorpicker.js' }
	];

	var libs = {};

	function addDependencyFunction(lib, fn) {
		if (libs[lib].loaded)
			fn();
		else
			libs[lib].fn.push(fn);
	}

	function runLibFunctions(lib) {
		libs[lib].fn.forEach(function (fn) {
			fn();
		});
	}

	queue.forEach(function (item) {
		var lib = item.lib;
		var script = document.createElement('script');
		libs[lib] = { loaded: false, fn: [] };
		script.onload = function () {
			libs[lib].loaded = true;
			runLibFunctions(lib);
		};
		script.src = item.url;
		document.head.appendChild(script);
	});

	window.addDependencyFunction = addDependencyFunction;

})();
