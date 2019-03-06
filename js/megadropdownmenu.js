$(document).ready(function(){			
			//start=====dropdown script================================================				
		var config = {    
			sensitivity: 3, // number = sensitivity threshold (must be 1 or higher)
			interval: 150, // number = milliseconds for onMouseOver polling interval
			over: openDropdown, // function = onMouseOver callback (REQUIRED)
			timeout: 150, // number = milliseconds delay before onMouseOut
			out: closeDropdown // function = onMouseOut callback (REQUIRED)
		};
		
		function openDropdown(){ 				
				$(this).addClass("active");
				$(this).addClass("btmnav_sl");
				
				//$(this).parent().siblings(".submenu").slideDown("fast");
				//$(this).children("ul").show("slow");				
				$(".submenu").animate({ left: '240px' }, { duration: 500, queue: false });
				$(this).children("ul").animate({ top: '0'}, { duration: 1000, queue: false });
				//$(this).children("ul").slideDown("fast");
				
		}
		function closeDropdown(){ 			
					
			//$(this).removeClass("active");	
			$(this).removeClass("btmnav_sl");
			//$(this).children("ul").slideUp("fast");	
			//$(this).parent().siblings(".submenu").slideUp("fast");
			$(this).children("ul").animate({ top: '-1024px'}, { duration: 500, queue: false });
			//$(this).children("ul").hide("fast");	
			$(".submenu").animate({ left: '-240px' }, { duration: 500, queue: false });
		}
		
		
		//$("nav li ul").hide();
		
		$(".submenu").toggleClass("active");
		$("nav  li ul").toggleClass("active");		
		//$("nav  li").parent().siblings(".submenu").hide();		
		$("nav  li").has("ul").hoverIntent( config );

		
			//end=====dropdown script================================================	
			
});