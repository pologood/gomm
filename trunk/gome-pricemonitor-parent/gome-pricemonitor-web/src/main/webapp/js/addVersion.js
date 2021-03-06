/**
 * Created by caowei on 2015/11/23
 */

//保存版本
$(function(){
	//保存
	$("#save_btn").click(function(){
		if(!checkSubmit()){
			return false;
		}
		var content={};
    	content.url=$("#filePath").val();
    	content.version=$("#version").val();
    	content.operateUser=$("#operateUser").val();
    	$.ajax({
    		url:'../version/addVersion',
    		type:'POST',
    		dataType:'json',
    		async:false,
    		data:{
    			content:JSON.stringify(content)
    		},
    		success:function(data){
    			if(data.code==1){
    				pop_up("添加成功",true);
					window.location.href="../version/toVersionListView";
    			}else{
    				pop_up("添加失败",false);
    			}
    		},
    		error:function(){
    			pop_up("系统异常",false);
    		}
    		
    	});
	});
	
	function checkSubmit(){
		if(check.checkNull("filePath")){
			check.showErrorMessage("filePath", "请上传软件包！");
			return false;
		}
		if(check.checkNull("version")){
			check.showErrorMessage("version", "请输入版本号！");
			return false;
		}
		//清除所有错误信息
		$("span[id$=ErrorSpan]").html("");
		return true;
	}
	
	$("#version").blur(function(){
		if(check.checkNull("version")){
			check.showErrorMessage("version", "请输入版本号！");
			return false;
		}
		check.clearErrorMessage("version");
	});
	
	
	/*
	function checkGoodsName(){
		if(check.checkNull("goodsName")){
    		check.showErrorMessage("goodsName", "请输入商品名称！");
    		return false;
    	}
    	if($("#goodsName").val().length < 4){
    		check.showErrorMessage("goodsName", "长度太短！");
    		return false;
    	}
		if (!check.checkFormat(check.nameReg, "goodsName")) {
			check.showErrorMessage("goodsName", '只能包含汉字、数字、字母、下划线并且不能以下划线开头和结尾，长度为4-16位！');
			return false;
		}
		if(checkGoodsNameUsed()){
			return false;
		}
		check.clearErrorMessage("goodsName");
		return true;
	}
	
	function checkLinks(){
		if(check.checkNull("links")){
    		check.showErrorMessage("links", "请输入链接地址！");
    		return false;
    	}
		if($("#links").val().length > 80){
    		check.showErrorMessage("links", "长度不能超过80位！");
    		return false;
    	}
    	if (!check.checkFormat(check.urlReg, "links")) {
			check.showErrorMessage("links", '链接地址不合法，只能以http/https开头！');
			return false;
		}
    	check.clearErrorMessage("links");
		return true;
	}
	
	function checkPrice(){
		if(check.checkNull("price")){
    		check.showErrorMessage("price", "请输入参考价格！");
    		return false;
    	}
		if (!check.checkFormat(check.priceReg, "price")) {
			check.showErrorMessage("price", '只能为数字，小数部分最多两位，也可以不带小数位！');
			return false;
		}
		check.clearErrorMessage("price");
		return true;
	}
	
	function checkDescription(){
		if(!check.checkNull("description")){
			if($("#description").val().length > 100){
	    		check.showErrorMessage("description", "描述太长，建议不超过100个字符！");
	    		return false;
	    	}
    	}
		check.clearErrorMessage("description");
		return true;
	}
	
	//检查商品名称是否已经被占用（同一类别下的商品名称不允许重复，不同类别下的商品名称可以重复）
	function checkGoodsNameUsed(){
		var usedFlag = false;
		var goodsName = $("#goodsName").val();
		var categoryId = $("#categoryId").val();
    	$.ajax({
    		url:'../goods/checkIsUsed',
    		type:'POST',
    		dataType:'json',
    		async:false,
    		data:{
    			goodsName:goodsName,
    			categoryId:categoryId
    		},
    		success:function(data){
				if(data.code == 5){     //名称已被占用
					check.showErrorMessage("goodsName", "该名称已经被占用！");
					usedFlag = true;
				} else if(data.code == 6){     //名称未被占用
					check.clearErrorMessage("goodsName");
					usedFlag = false;
				} else {
					pop_up("系统异常",false);
			  		usedFlag = false;
				}
    				
    		},
    		error:function(){
    			pop_up("系统异常",false);
		  		usedFlag = false;
    		}
    		
    	});
    	return usedFlag;
	}
	
	*/
	
	//返回
	$(".return-btn").click(function(){
		history.back();
	});
	
});