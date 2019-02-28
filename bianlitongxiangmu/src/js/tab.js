var deff = $.ajax({
	type:"get",
	url:"../.././tab.json",
	async:true
});
deff.done(function(msg0){
				var strCon = "";
	for(var attr in msg0){
		 $("#classify_center_left").append("<div><h2><a href='details.html'>" + msg0[attr].name + "</a></h2></div>");
// 		 for(var j = 0; j < msg[attr].list.length ; j++){
// 			 var pro = msg[attr].list[j];
// // 			strCon += `<div id="classify_center_left1">
// // 					<a href="" id="aa">${pro.id}</a><span ><a href="">${pro.name}</a></span></br>	
// // 				</div>`;
// 			// $("#classify_center_left1").append()
// 			
// 			strCon += "<a href='' id='aa'>"+ pro.id +"</a><span ><a href=''>"+ pro.name +"</a></span>";
// 			
// 		}
// 		 $("#classify_center_left1").html(strCon);
		 
		// console.log(msg[a].list);
		 $('#classify_center_left div').mouseenter(function(){
			$("#classify_center_left1").css("display","block");
			var a = "tab" + ($(this).index());
			var str1 = "";
			console.log(a);
			for(var i = 0; i < msg0[a].list.length; i ++){
				pro1 = msg0[a].list[i];
				//console.log(msg[a].list.length);
				str1 += "<a href='details.html' id='aa'>"+ pro1.id +"</a><span ><a href='details.html'>"+ pro1.name +"</a></span>";
				
			}
			$("#classify_center_left1").html(str1);
			return false;
		 })
		 
		 $('#classify_center_left1').mouseleave(function(){
			 $("#classify_center_left1").css("display","none");
			 return false;
		 })
	}
})
