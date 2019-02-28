	setInterval(function(){
		if($("#zuoyou ul").position().left == -1000){
			$("#zuoyou ul").animate({left:0},500);
			//alert("1");
		}else{
			$("#zuoyou ul").animate({left:-1000},500);
			//alert();
		}
	},3000);