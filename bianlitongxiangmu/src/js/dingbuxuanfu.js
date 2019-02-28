$(window).scroll(function(){
	var top = document.documentElement.scrollTop || document.body.scrollTop;
	if(top > 100){
		$("#nav").css({"position":"fixed","z-index" : 10000,"top" : 0});
		
	}else{
		$("#nav").css({"position":""});
	} 
})
