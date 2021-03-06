/**
 * jQuery Horizontal Navigation 1.0
 * https://github.com/sebnitu/horizontalNav
 *
 * By Sebastian Nitu - Copyright 2012 - All rights reserved
 * Author URL: http://sebnitu.com
 */
(function($) {
	$.fn.horizontalNav = function(options) {
		var opts = $.extend({}, $.fn.horizontalNav.defaults, options);
		return this.each(function () {
			var $this = $(this);
			var o = $.meta ? $.extend({}, opts, $this.data()) : opts;
			if ($this.is('ul')) {
				var ul_wrap = $this.parent();
			} else {
				var ul_wrap = $this;
			}
			ul_wrap.css({ 'zoom' : '1' }).append('<div class="clearHorizontalNav">');
			$('.clearHorizontalNav').css({
				'display' : 'block',
				'overflow' : 'hidden',
				'visibility' : 'hidden',
				'width' : 0,
				'height' : 0,
				'clear' : 'both'
			});
			
			var ul = $this.is('ul') ? $this : ul_wrap.find('> ul'),
				li = ul.find('> li'),
				li_last = li.last(),
				li_count = li.size(),
				li_a = li.find('> a');
		
			if ( o.responsive === true ) {
				if ( (o.tableDisplay != true) || ($.browser.msie && parseInt($.browser.version, 10) <= 7) ) {
					resizeTrigger( _construct, o.responsiveDelay );
				}
			}
			
			_construct();
			
			function trueInnerWidth(element) {
				return element.innerWidth() - ( 
					parseInt(element.css('padding-left')) + parseInt(element.css('padding-right')) 
				);
			}
			
			function resizeTrigger(callback, delay) {
				delay = delay || 100;	
				var resizeTimer;
				$(window).resize(function() {
					clearTimeout(resizeTimer);
					resizeTimer = setTimeout(function() {
						callback();
					}, delay);
				});
			}
			
			function _construct() {
				if ( (o.tableDisplay != true) || ($.browser.msie && parseInt($.browser.version, 10) <= 7) ) {
					ul.css({ 'float' : 'left' });
					li.css({ 'float' : 'left', 'width' : 'auto' });
					li_a.css({ 'padding-left' : 0, 'padding-right' : 0 });
					
					var ul_width = trueInnerWidth(ul),
						ul_width_outer = ul.outerWidth(true),
						ul_width_extra = ul_width_outer - ul_width,
						
						full_width = trueInnerWidth(ul_wrap),
						extra_width = (full_width - ul_width_extra) - ul_width,
						li_padding = Math.floor( extra_width / li_count );
					
					li.each(function(index) {
						var li_width = trueInnerWidth( $(this) );
						$(this).css({ 'width' : (li_width + li_padding) + 'px' });
					});
					
					var li_last_width = trueInnerWidth(li_last) + ( (full_width - ul_width_extra) - trueInnerWidth(ul) );
					if ($.browser.mozilla || $.browser.msie) {
						li_last_width = li_last_width - 1;
					}
					li_last.css({ 'width' : li_last_width + 'px' });
				
				} else {
					ul.css({ 'display' : 'table', 'float' : 'none', 'width' : '100%' });
					li.css({ 'display' : 'table-cell', 'float' : 'none' });
				}
			}
		});
	};
	$.fn.horizontalNav.defaults = {
		responsive : true,
		responsiveDelay : 100,
		tableDisplay : true
	};
})(jQuery);