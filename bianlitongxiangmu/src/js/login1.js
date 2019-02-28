$("form").submit(function(){
	if($.cookie("text") == $("#text").val() && $.cookie("password") == $("password").val()){
		alert("登陆成功");
		return true;
	}else{
		 $("#budui").html("不能为空或账号密码不一致").css("color","red");
		//alert("账号密码不一致或不能为空");
		return false;
	}
})