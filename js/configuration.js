requirejs.config({
	 baseUrl: '/js'
	,paths: {
		 'jquery': 'jquery-2.0.3.min'
		,'underscore': 'underscore-min'
		,'jqueryUi.widget': 'jquery-ui.widget.1.10.3'
	}
    ,shim: {
     	 underscore: { exports: '_' }
        ,'jqueryUi.widget': {
            deps: ['jquery']
        } 
     }
});

require(['jquery', 'underscore', 'global.debug']);