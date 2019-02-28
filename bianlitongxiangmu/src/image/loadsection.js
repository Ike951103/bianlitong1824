﻿$(function(){

	$('#the-topbar').load("/section/topbar.html", function(){
		$.getJSON("http://emall.chblt.com/AjaxPage/CommonAjax.aspx?callback=?", {op:"CheckUserLogin"}, function(json) {
        $("#userPanel").html(json[0].result);
    });
	});
	
	$('#the-top').load("/section/search.html", function(){	
		$("#searchBtn").click(function(){
			search('请输入搜索关键字...');
		})
	});

	$('#the-nav').load("/section/nav.html", function(){});
	
	$('#the-foot').load("/section/foot.html", function(){});
	
});

function SetHome(obj,url){
	    try{
	        obj.style.behavior='url(#default#homepage)';
	       obj.setHomePage(url);s
	   }catch(e){
	       if(window.netscape){
	          try{
	              netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
	         }catch(e){
	              alert("抱歉，此操作被浏览器拒绝！\n\n请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'");
	          }
	       }else{
	        alert("抱歉，您所使用的浏览器无法完成此操作。\n\n您需要手动将【"+url+"】设置为首页。");
	       }
	  }
	}
	//收藏本站 bbs.ecmoban.com
	function AddFavorite(title, url) {
	  try {
	      window.external.addFavorite(url, title);
	  }
	  catch (e) {
	     try {
	       window.sidebar.addPanel(title, url, "");
	    }
	     catch (e) {
	         alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加");
	     }
	  }
	}
	
	function logout() {
    $.getJSON("http://emall.chblt.com/AjaxPage/CommonAjax.aspx?callback=?", { op: 'Logout' }, function(json) {
	if(json[0].result == "1") {
		window.location.href = 'http://www.chblt.com';
	}
    });
}
function search(v) {
    if (validataSearchKeyword()) {
        if ($.trim(v) == $.trim($("#searchInput").val())) {
            return;
        }		
		if(document.charset){
				document.charset='gb2312';
		}

		document.getElementById('searchForm').submit();
    }
}

$(function(){
	$("#searchBtn").bind("click",function(){
		search('请输入搜索关键字...');
	})
})

function validataSearchKeyword() {
    if ($.trim($('#searchInput').val()) != '') {
        return true;
    }
    else {
        window.alert('请输入搜索关键字...');
        return false;
    }
    return true;
}

function search(v) {
    if (validataSearchKeyword()) {
        if ($.trim(v) == $.trim($("#searchInput").val())) {
            return;
        }		
			if(document.charset){
					document.charset='gb2312';
			}
			document.getElementById('searchForm').submit();
    }
}

function validataSearchKeyword() {
    if ($.trim($('#searchInput').val()) != '') {
        return true;
    }
    else {
        window.alert('请输入搜索关键字...');
        return false;
    }
    return true;
}