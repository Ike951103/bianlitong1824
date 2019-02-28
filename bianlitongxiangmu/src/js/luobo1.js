$(function(){
	var timer = setInterval(lunbo1,2000);
	var index = 0;
	function lunbo1(){
		index++;
		if(index == $("#chihuo_bottom_left img").size()){
			index =0;
		}
		$("#chihuo_bottom_left img").eq(index).fadeIn(1500).siblings().fadeOut(1500);
	}
	$("#chihuo_bottom_left img").mouseenter(function(){
		clearInterval(timer);
		index = $(this).index()-1;
		lunbo1();
	})
	$("#chihuo_bottom_left img").mouseout(function(){
		timer = setInterval(lunbo1,2000)
	})
})