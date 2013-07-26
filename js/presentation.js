define(
['jquery', 'underscore', 'gim.collapsible', 'domReady!'],
function($, _){
	$('.collapsible').collapsible({
		initiallyCollapsed: true
	}).filter('.expanded').collapsible('toggleCollapsed', true);
});