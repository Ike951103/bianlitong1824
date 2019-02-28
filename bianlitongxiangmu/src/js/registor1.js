var text , password = null;
$("#text").blur(function(){
	var tes = /^[a-z]{1}[a-z0-9]{5}$/;
	if(tes.test($(this).val())){
		$(this).next().css("color","green");
		$(this).next().next().css("color","green");
		$(this).next().next().html("格式正确");
		text = true;
		
		if($(this).val() == $.cookie("text")){	
			$(this).next().next().html("用户名已存在");
			$(this).next().css("color", "red");
			$(this).next().next().css("color", "red");
		text = false;
		}
	}else if($(this).val() == ""){
		$(this).next().css("color","red");
		$(this).next().next().css("color","red");
		$(this).next().next().html("不能为空");
		text = false;
	}else{
		$(this).next().css("color","red");
		$(this).next().next().css("color","red");
		$(this).next().next().html("格式错误");
		text = false;
	}
}) 

$("#password").blur(function(){
	var tes = /^[0-9]{6}$/;
	if(tes.test($(this).val())){
		$(this).next().css("color","green");
		$(this).next().next().css("color","green");
		$(this).next().next().html("格式正确");
		password = true;
	}else if($(this).val() == ""){
		$(this).next().css("color","red");
		$(this).next().next().css("color","red");
		$(this).next().next().html("不能为空");
		password = false;
	}else{
		$(this).next().css("color","red");
		$(this).next().next().css("color","red");
		$(this).next().next().html("格式错误");
		password = false;
	}
}) 

$("form").submit(function(){
	if(text&&password){
		
		$.cookie("text",$("#text").val(),{path : "/"});
		$.cookie("password",$("password").val(),{path : "/"});
		alert("注册成功");
		return true;
	}else{
		$(".buquan").html("补全信息").css("color","red");
		return false;
		
	}
})