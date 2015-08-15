$(document).ready(function(){
    /*
    $(window).scroll(function() {
              if ($(document).scrollTop() > 25) {
                $('#navigation').css('z-index','100');
               } else {
                $('#navigation').css('z-index','0');
                }
            }); */

    

    
     

/*
    // Select the previously blasted text
$("div .blast").velocity(
    // Animate the existing text out of view with the appropriate UI pack effect
    "transition.fadeOut",
    {
        // Stagger the outward animation as you did the inward animation
        stagger: 50,
        backwards: true,
        // When this outward animation is complete, begin the inward animation
        complete: function() {
            // Proceed with the inward animation
            $('.description')
            .blast({ delimiter: "word" })
            .css("opacity", 0)
            .velocity({ opacity: 1 }, { stagger: 50 });
        }
    }
);
*/

/*
    $('.description')
    .blast({ delimiter: "word" })
    .css({ opacity: 0, display: "inline-block" })
    .velocity("transition.perspectiveDownIn", { stagger: 50 });

*/


	$('a').click(function(){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top - 80
        }, 500);
        return false;
    });

	var open=false,flip=false,page_no=1;
	$('#open_close_bt').click(function(){

		if(!open){
			
			$('.book_front').addClass('open');
			$('.book_front').css('z-index',-1);
			open=true;
			$('#open_close_bt').text('close');
		}
		else{
			var x=10;
			for(var i=1;i<=page_no;i++){
				
				console.log(x-i);
				$('.page'+i).removeClass('open');
				$('.page'+i).css('z-index',x-i);
				console.log("page"+i+"z-index:"+$('.page'+i).css('z-index'));
			}
			page_no=1;
			$('.book_front').removeClass('open');
			$('.book_front').css('z-index',11);
			$('#open_close_bt').text('open');
			open=false;
		}
	});

    $('.book').hover(function(){
    	if(!open)
    	    $('.book').addClass('flip');
    },function(){
    	$('.book').removeClass('flip');
    });

    $('#next_bt').click(function(){
    	if(!open){
    		$('.book_front').addClass('open');
    		$('.book_front').css('z-index',-1);
			$('#open_close_bt').text('close');
			open=true;
    	}

    	switch(page_no){
    		case 1:
    		    $('.page1').addClass('open');
    		    page_no=2;
    		    $('.page1').css('z-index',1);
    		    break;
    		case 2:
    		    $('.page2').addClass('open');
    		    $('.page2').css('z-index',2);
    		    page_no=3;
    		    break;
    		case 3:
    		    $('.page3').addClass('open');
    		    $('.page3').css('z-index',3);
    		    page_no=4;
    		    break;
    		case 4:
    		    $('.page4').addClass('open');
    		    $('.page4').css('z-index',4);
    		    page_no=5;
    		    break;
    		case 5:
    		    $('.page5').addClass('open');
    		    $('.page5').css('z-index',5);
    		    page_no=6;
    		    break;
    		case 6:
    		    $('.page6').addClass('open');
    		    $('.page6').css('z-index',6);
    		    //page_no=1;
    		    break;
    		default: ;

    	}
    	var temp1=page_no-1;
    	console.log("page"+temp1+"z-index:"+$('.page'+temp1).css('z-index'));
    });


    $('#back_bt').click(function(){
    	
    	switch(page_no){
    		case 1:
    		    $('.page1').removeClass('open');
    		    $('.page1').css('z-index',9);
    		    break;
    		case 2:
    		    $('.page2').removeClass('open');
    		    $('.page2').css('z-index',8);
    		    page_no=1;
    		    break;
    		case 3:
    		    $('.page3').removeClass('open');
    		    $('.page3').css('z-index',7);
    		    page_no=2;
    		    break;
    		case 4:
    		    $('.page4').removeClass('open');
    		    $('.page4').css('z-index',6);
    		    page_no=3;
    		    break;
    		case 5:
    		    $('.page5').removeClass('open');
    		    $('.page5').css('z-index',5);
    		    page_no=4;
    		    break;
    		case 6:
    		    $('.page6').removeClass('open');
    		    $('.page6').css('z-index',4);
    		    page_no=5;
    		    break;
    		default: ;

    	}
    });

    var p;
    var frame_no=1
    $('.image_holder').hover(function(){
    	var element_id=$(this).attr('id');
        console.log($('.left').css('z-index'));
    	console.log(element_id);
    	
    	p=setInterval(function(){
    		//change_image(element_id);
    		
    	},100);
    },function(){
    	clearInterval(p);
    });

    function change_image(){
    	
    	var element_id=arguments[0];
    	$('#'+element_id+' .head_image').css('z-index',1);
    	var element;
    	
    	switch(frame_no){
    		case 0:
    		  element='#'+element_id+' .front';
    		  break;
    		case 1:
    		  element='#'+element_id+' .up';
    		  break;
    		case 2:
    		  element='#'+element_id+' .upright';
    		  break;
    		case 3:
    		  element='#'+element_id+' .right';
    		  break;
    		case 4:
    		  element='#'+element_id+' .downright';
    		  break;
    		case 5:
    		  element='#'+element_id+' .down';
    		  break;
    		case 6:
    		  element='#'+element_id+' .downleft';
    		  break;
    		case 7:
    		  element='#'+element_id+' .left';
    		  break;
    		case 8:
    		  element='#'+element_id+' .upleft';
    		  break;
    		default: ;
    	}
    	$(element).css('z-index',2);
    	frame_no++;
    	if(frame_no==9){
    		frame_no=0;
    	}
    }


    //Event handling
    var total=15;//total no of events
    for(var i=2;i<=total;i++){
        $('#d'+i).css('display','none');
    }
    $('.title li:nth-child(1)').css('color','purple');
    $('.title li').click(function(){
        console.log($(this).attr('id'));
        var a=$(this).attr('id');
        for(i=1;i<=total;i++){
            if(i!=a){
                $('#d'+i).css('display','none');
                /*
                $('#d'+i)
                   .blast({ delimiter: "word" })
                   .css("display", 'none')
                   .velocity("transition.fadeIn", { stagger: 50 });
                */
                $('.title li:nth-child('+i+')').css('color','black');
            }
        }
        $('#d'+a).css('display','block');
        $('.title li:nth-child('+a+')').css('color','purple');
    });


});

$(window).load(function(){
	$('#loading_screen').css('display','none');
});