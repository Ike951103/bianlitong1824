var deff = $.ajax({
	type : "get",
	url : "../.././details.json",
	async : true
});
deff.done(function(msg1){
	var str = "";
	for(var attr in msg1){
		//console.log(msg1[attr].list);
		for(var i = 0; i < msg1[attr].list.length;i ++){
			var pro = msg1[attr].list[i];
			
			str += "<li><div class='liebiao1'><div class='liebiao2'><a href='list.html'><img src=../image/" + pro.src +"></a></div><div class='liebiao3'><div class='xinxi1'>"+pro.price +"</div><div class='xinxi2'>"+ pro.introduce +"</div></div></div></li>";
		}
		$('.liebiao0 ul').html(str);
	}
})