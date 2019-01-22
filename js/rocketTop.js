$("html,body").ready(function(){
	var scrollbar=$(window).scrollTop();
	var isClick=0;

	(scrollbar<=0)?($("#shape").hide()):($("#shape").show());

	$(window).scroll(function(){
		scrollbar=$(window).scrollTop();
		(scrollbar<=0)?($("#shape").hide()):($("#shape").show());			
	})

	$("#shape").hover(
		function(){
			$(".shapeColor").show();
		},

		function(){
			$(".shapeColor").hide();
		}
	)

	$(".shapeColor").click(
		function(){
			$(".shapeFly").show();
			$("html,body").animate({scrollTop: 0},"slow");
			$("#shape").delay("200").animate({marginTop:"-1000px"},"slow",function(){
				$("#shape").css("margin-top","-50px");
				$(".shapeFly").hide();
			});
			
	})

})