$(window).scroll(function(){
	var top = document.documentElement.scrollTop || document.body.scrollTop;
	if(top > 500){
		$(".huidaodingbu").css({"display" : "block"});
	}else{
		$(".huidaodingbu").css({"display" : "none"});
	}	
})
$(".huidaodingbu").click(function(){
		$("html").animate({ scrollTop: 0 }, 300);
	})