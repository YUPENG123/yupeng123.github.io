// JavaScript Document

$(document).ready(function(){
	/*搜索框弹出*/
	$("#header .header-con .r-b .search-btn").click(function(){
		$("#search-box").fadeIn();
	});
	/*搜索框隐藏*/
	$("#search-box .bg,#search-box form .off").click(function(){
		$("#search-box").fadeOut();
	});
	
	
	
	
	var off01 = true;
	$("#header .header-con .r-b .menu-btn,#Navigation .bg").click(function(){
		if(off01){
			$("#header .header-con .r-b .menu-btn").addClass("on");
			$("#Navigation").addClass("show");
			$(".pageContent").addClass("on");
			off01 = false;
		}else{
			$("#header .header-con .r-b .menu-btn").removeClass("on");
			$("#Navigation").removeClass("show");
			$(".pageContent").removeClass("on");
			$("#Navigation").removeClass("yd");
			$("#Navigation ul li .two-column").removeClass("active");
			off01 = true;
		}
	});
	var off2019 = true;
	$("#header .pc-menu-btn").click(function(){
		if(off01){
			$("#header .pc-menu-btn").addClass("on");
			$(".pc-nav-new").show();
			off01 = false;
		}else{
			$("#header .pc-menu-btn").removeClass("on");
			$(".pc-nav-new").hide();
			off01 = true;
		}
	});
	/*
	var off02 = true;
	$("#Navigation ul li em").click(function(){
		
		if(off02){
			$("#Navigation ul li em").removeClass("c");
			$(this).addClass("c");
			
			$(this).parent().siblings().children(".two-column").removeClass("active");
			$(this).siblings(".two-column").addClass("active");
			off02 = false;
		}else{
			$("#Navigation ul li em").removeClass("c");
			$(".two-column").removeClass("active");
			off02 = true;
		}
	});
	*/
	
    $("#Navigation ul li em").click(function(){
		$("#Navigation").addClass("yd");
		$("#Navigation ul li .two-column").removeClass("active");
		$(this).siblings(".two-column").addClass("active");
	});
	$("#Navigation ul li .two-column .return-btn").click(function(){
		$("#Navigation").removeClass("yd");
		$("#Navigation ul li .two-column").removeClass("active");
	});
	
	
	$(".move-three-category span").click(function(){
		$(".category-Popup-Box").addClass("active");
	});
	$(".category-Popup-Box i").click(function(){
		$(".category-Popup-Box").removeClass("active");
	});
	
	
//	$(".structure-box .item-box > h2").mouseenter(function(){
//		$(this).children(".tanChuang-box").slideDown();
//	});
//	$(".structure-box .item-box > h2").mouseleave (function(){
//		$(this).children(".tanChuang-box").slideUp();
//	});
//	
	$(".in-contact-con .text-01 .tc a.weixin").click(function(){
		$(".tanchuang-0001").addClass("active");
	});
	
	$(".tanchuang-0001 .bg").click(function(){
		$(".tanchuang-0001").removeClass("active");
	});
	
	
	
	
	$(".online-Resume-box .con .r-b .line .add-btn.a1").click(function(){
		$(this).siblings(".mod").append("<em></em><div class='lump'><p><input type='text' name='education_date[]' placeholder='日期'></p></div><div class='lump'><p style='width: 90%;'><input type='text' name='education_school[]' placeholder='学校'></p></div><div class='lump'><p style='width: 90%;'><input type='text' name='education_major[]' placeholder='专业'></p></div><textarea name='education_course[]' placeholder='主修课程'></textarea>");
	});
	$(".online-Resume-box .con .r-b .line .add-btn.a2").click(function(){
		$(this).siblings(".mod").append("<em></em><div class='lump'><p><input type='text' name='work_date[]' placeholder='日期'></p></div><div class='lump'><p style='width: 90%;'><input type='text' name='work_company[]' placeholder='公司名称'></p></div><div class='lump'><p style='width: 90%;'><input type='text' name='work_job[]' placeholder='职位'></p></div><textarea name='work_content[]' placeholder='工作内容'></textarea>");
	});
	
});

















