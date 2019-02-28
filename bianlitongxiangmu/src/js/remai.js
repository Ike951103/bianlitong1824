var deff = $.ajax({
	type:"get",
	url:"../.././remai.json",
	async: true
});
deff.done(function(json){
	var src = "";
	for(var attr in json){
		for(var i = 0;i < json[attr].list.length;i ++){
			var pro = json[attr].list[i];
			//console.log(pro.src);
			src += "<li><a href='list.html'><img src=../image/" + pro.src + " ><div>" + pro.introduce +"</div></a><span>" + pro.price + "</span><del>￥88.8</del></li>";
		}
		$(".remai_center_center").html(src);
	}
})