define(
['jquery', 'jqueryUi.widget'],
function($){
$.widget('gim.collapsible', {
    options:{
         handleContainer:       null
        ,initiallyCollapsed:    false
    }
    ,_create: function() {

        this.$body = this._getCollapsibleBodyWrapper();

        this.isCollapsed = false;
        this.$collapser = $('<a href="javascript:void(0)">&#709;</a>').click(_.bind(this.toggleCollapsed, this));
        this._appendHandle( $('<span class="gim-collapsible-toggle">').append(this.$collapser) );

        if(this.options.initiallyCollapsed)
            this.toggleCollapsedImmediate(false);
    }

    ,_getCollapsibleBodyWrapper: function() {
        this.element.wrapInner('<div class="gim-collpsible-wrapper">');
        return this.element.children('.gim-collpsible-wrapper');
    }
    ,_appendHandle: function($handle) {
        $handle.prependTo(this.handleContainer || this.element);
    }
    ,toggleCollapsed: function(show, fnShow, fnHide) {
        //All parameters are optional

        show = _.isBoolean(show) ? show : this.isCollapsed;     //default is to inverse current state
        if(show == !this.isCollapsed)                           //already in the correct state
            return;

        fnShow = fnShow || _.bind(this.defaultShow, this);
        if(show)
            return fnShow(this);
        fnHide = fnHide || _.bind(this.defaultHide, this);
        fnHide(this);
    }

    //collapse or show without animation
    ,toggleCollapsedImmediate: function(show) {
        this.toggleCollapsed(show, _.bind(function show(){
            this.$body.show();
            this.slideDone(false)();
        }, this), _.bind(function hide() {
            this.$body.hide();
            this.slideDone(true)();            
        }, this) );
    }

    ,slideDone: function(isCollapsed) { return _.bind(function() {
        this.$collapser.html(isCollapsed ? '&#708;' : '&#709;');
        this.isCollapsed = isCollapsed;
    }, this) }
    ,defaultShow: function() {
        this.$body.slideDown('normal', this.slideDone(false));
    }
    ,defaultHide: function() {
        this.$body.slideUp('normal', this.slideDone(true));        
    }
});
	
})