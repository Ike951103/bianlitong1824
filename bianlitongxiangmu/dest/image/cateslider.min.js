(function($) {
	$.fn.ZP_CATE_SLIDER = function(options) {
		var base = this;
		var opts = $.extend( {}, $.fn.ZP_CATE_SLIDER.defaults, options);
		//var dataurl = opts.dataurl;
		//var dataurl = 'cate.html';
		//alert(opts.dataurl);
		
		if(opts.isExtend==true){
			$(base).find('.categorys').load(opts.dataurl, function(){
						
				$(base).find(' .allcategorys').bind(
						"mouseover",function(){$(this).addClass('light');}
					).bind(
						"mouseout",function(){$(this).removeClass('light');}
					);
				$(base).find('.categorys .kind').bind(
						"mouseover",function(){$(this).addClass('hover');}
					).bind(
						"mouseout",function(){$(this).removeClass('hover');}
					);
				$(base).find('.categorys ul li p').find('a:last').addClass('last');
				$(base).find('.allcategorys .categorys').css('display','block');
			});
		}else{
				$(base).find('.categorys').load(opts.dataurl, function(){
						
				$(base).find(' .allcategorys').bind(
						"mouseover",function(){$(this).addClass('light');}
					).bind(
						"mouseout",function(){$(this).removeClass('light');}
					);
				$(base).find('.categorys .kind').bind(
						"mouseover",function(){$(this).addClass('hover');}
					).bind(
						"mouseout",function(){$(this).removeClass('hover');}
					);
				$(base).find('.categorys ul li p').find('a:last').addClass('last');
			});
		}
		
		if($('.fix_top').length>0){
			var theone = $('.fix_top');
			var navPosTop = theone.offset().top;
			$(window).resize(function() {
				var sTop = $(window).scrollTop();
			
				if(sTop >= navPosTop) {
					//if($.browser.msie && $.browser.version < 7){
					if ('undefined' == typeof(document.body.style.maxHeight)){
						theone.css({position: 'absolute', top: sTop});
						
					}else {
						theone.css({position: 'fixed', top: 0,margin:'auto'});
					}
				}else {
					theone.css({position: 'relative', top: 0});
				}
			});
			
			$(window).scroll(function() {
				var sTop = $(window).scrollTop();
				
				if(sTop >= navPosTop) {
					//if($.browser.msie && $.browser.version < 7){
					if ('undefined' == typeof(document.body.style.maxHeight)){
						theone.css({position: 'absolute', top: sTop});
						
					}else {
						//alert(theone.css('left'))
						theone.css({position: 'fixed', top: 0,left:0,margin:'auto'});
						//alert(theone.css('left'))
					}
					
				}else {
					theone.css({position: 'relative', top: 0});
				}
			});		
		}
		if($(base).hasClass('fix_top')){
			var navPosTop = $(base).offset().top;
			$(window).resize(function() {
				var sTop = $(window).scrollTop();
			
				if(sTop >= navPosTop) {
					//if($.browser.msie && $.browser.version < 7){
					if ('undefined' == typeof(document.body.style.maxHeight)){
						$(base).css({position: 'absolute', top: sTop});
					}else {
						$(base).css({position: 'fixed', top: 0, margin:'auto'});
					}
				}else {
					$(base).css({position: 'relative', top: 0,margin:'auto'});
				}
			});
			
			$(window).scroll(function() {
				var sTop = $(window).scrollTop();
				
				if(sTop >= navPosTop) {
					//if($.browser.msie && $.browser.version < 7){
					if ('undefined' == typeof(document.body.style.maxHeight)){
						$(base).css({position: 'absolute', top: sTop});
					}else {
						$(base).css({position: 'fixed', top: 0,margin:'auto'});
					}
				}else {
					$(base).css({position: 'relative', top: 0,margin:'auto'});
				}
			});			
		};
		

	};

	$.fn.ZP_CATE_SLIDER.defaults = {
		slideHeight : 8
	};

})(jQuery);