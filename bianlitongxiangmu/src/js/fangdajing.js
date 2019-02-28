	var $sImage = $(".wrapper_center_left_left_top img");
	var $bImage = $(".fangdajing img");
	var $oFloat = $(".wrapper_center_left_left_top .float");
	var $box = $(".wrapper_center_left_left_top");
	$(".wrapper_center_left_left_top").on({
		"mouseenter" : function(){
			$(".fangdajing").show();
			$(".float").show();
		},
		"mouseleave" : function(){
			$(".fangdajing").hide();
			$(".float").hide();
		},
		"mousemove" : function(e){
			var e = e || event;
			var x = e.pageX - $box.offset().left - $oFloat.width()/2;
			var y = e.pageY - $box.offset().top - $oFloat.height()/2;
			var maxW = $box.width() - $oFloat.width();
			var maxH = $box.height() - $oFloat.height();
			x = Math.min(Math.max( 0 , x ) , maxW);
			y = Math.min(Math.max( 0 , y ) , maxH);
			$oFloat.css({
					left : x,
					top : y
				});
				//大图left / oMark的left = 大图宽度/小图宽度
				var bigImgLeft = x*$bImage.width() / $sImage.width();
				var bigImgTop = y*$bImage.height() / $sImage.height();
				
				$bImage.css({
					left : -bigImgLeft,
					top : -bigImgTop
				});
			}
	})
