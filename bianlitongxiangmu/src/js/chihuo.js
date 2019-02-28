var deff = $.ajax({
	type:"get",
	url:"../.././chihuo.json",
	async:true
});
deff.done(function(msg){
	var src = "";
	
	for(var attr in msg){
		for(var i = 0; i < msg[attr].list.length; i ++){
			var pro = msg[attr].list[i];
			//console.log(msg[attr].list[i]);
			src += "<li><a href='list.html'><img src=../image/" + pro.src + " ><div>"+ pro.introduce +"</div></a><span>"+ pro.price +"</span><del>￥88.8</del></li>";
		} 
		
			

		$("#chihuo_bottom_right ul").append(src);
	}
})