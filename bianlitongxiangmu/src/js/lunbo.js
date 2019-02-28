$(function(){
	var timer = setInterval(lunbo,1500);
	var index = 0;
	function lunbo(){
		index ++;
		if(index == $("#classify_center_center_top ol li").size()){
			index = 0;
		}
		$("#classify_center_center_top ol li").eq(index).addClass("current").siblings().removeClass("current");
		$("#classify_center_center_top ul li").eq(index).fadeIn(1000).siblings().fadeOut(1000);
	}
	$("#classify_center_center_top ol li").mouseenter(function(){
		clearInterval(timer);
		index = $(this).index()-1;
		lunbo();
	})
	$("#classify_center_center_top ol li").mouseout(function(){
		timer = setInterval(lunbo,1500)
	})
})