$(document).ready(function(){
    var opened=false;
    $('#up #heading2').click(function(){
        if(opened){
        	opened=false;
        	$('#up').css('-webkit-transform','translateY(0%)');
        	$('#up').css('-moz-transform','translateY(0%)');
        	$('#up').css('-ms-transform','translateY(0%)');
        	$('#up').css('-o-transform','translateY(0%)');
        	$('#up').css('transform','translateY(0%)');
        	$('#down').css('-webkit-transform','translateY(0%)');
        	$('#down').css('-moz-transform','translateY(0%)');
        	$('#down').css('-ms-transform','translateY(0%)');
        	$('#down').css('-o-transform','translateY(0%)');
        	$('#down').css('transform','translateY(0%)');
        	$('#middle img:nth-child(1)').css('transform','translateX(0%)');
        	$('#middle img:nth-child(1)').css('-webkit-transform','translateX(0%)');
        	$('#middle img:nth-child(1)').css('-moz-transform','translateX(0%)');
        	$('#middle img:nth-child(1)').css('-o-transform','translateX(0%)');
        	$('#middle img:nth-child(1)').css('-ms-transform','translateX(0%)');
        	$('#middle img:nth-child(2)').css('transform','translateX(0%)');
        	$('#middle img:nth-child(2)').css('-webkit-transform','translateX(0%)');
        	$('#middle img:nth-child(2)').css('-moz-transform','translateX(0%)');
        	$('#middle img:nth-child(2)').css('-o-transform','translateX(0%)');
        	$('#middle img:nth-child(2)').css('-ms-transform','translateX(0%)');
        	$('#middle img:nth-child(3)').css('transform','translateX(0%)');
        	$('#middle img:nth-child(3)').css('-webkit-transform','translateX(0%)');
        	$('#middle img:nth-child(3)').css('-moz-transform','translateX(0%)');
        	$('#middle img:nth-child(3)').css('-o-transform','translateX(0%)');
        	$('#middle img:nth-child(3)').css('-ms-transform','translateX(0%)');
        	$('#middle img:nth-child(4)').css('transform','translateX(0%)');
        	$('#middle img:nth-child(4)').css('-webkit-transform','translateX(0%)');
        	$('#middle img:nth-child(4)').css('-moz-transform','translateX(0%)');
        	$('#middle img:nth-child(4)').css('-o-transform','translateX(0%)');
        	$('#middle img:nth-child(4)').css('-ms-transform','translateX(0%)');
        	$('#middle img:nth-child(5)').css('transform','translateX(0%)');
        	$('#middle img:nth-child(5)').css('-webkit-transform','translateX(0%)');
        	$('#middle img:nth-child(5)').css('-moz-transform','translateX(0%)');
        	$('#middle img:nth-child(5)').css('-o-transform','translateX(0%)');
        	$('#middle img:nth-child(5)').css('-ms-transform','translateX(0%)');
            $('#down a').css('display','none');
        }
        else{
        	opened=true;
        	$('#up').css('-webkit-transform','translateY(-30%)');
        	$('#up').css('-o-transform','translateY(-30%)');
        	$('#up').css('-moz-transform','translateY(-30%)');
        	$('#up').css('-ms-transform','translateY(-30%)');
        	$('#up').css('transform','translateY(-30%)');
        	$('#down').css('-webkit-transform','translateY(70%)');
        	$('#down').css('-moz-transform','translateY(70%)');
        	$('#down').css('-ms-transform','translateY(70%)');
        	$('#down').css('-o-transform','translateY(70%)');
        	$('#down').css('transform','translateY(70%)');
        	$('#middle img:nth-child(1)').css('-webkit-transform','translateX(-200%)');
        	$('#middle img:nth-child(1)').css('-moz-transform','translateX(-200%)');
        	$('#middle img:nth-child(1)').css('-ms-transform','translateX(-200%)');
        	$('#middle img:nth-child(1)').css('-o-transform','translateX(-200%)');
        	$('#middle img:nth-child(1)').css('transform','translateX(-200%)');
        	$('#middle img:nth-child(2)').css('-webkit-transform','translateX(-100%)');
        	$('#middle img:nth-child(2)').css('-moz-transform','translateX(-100%)');
        	$('#middle img:nth-child(2)').css('-o-transform','translateX(-100%)');
        	$('#middle img:nth-child(2)').css('-ms-transform','translateX(-100%)');
        	$('#middle img:nth-child(2)').css('transform','translateX(-100%)');
        	$('#middle img:nth-child(3)').css('transform','translateX(0%)');
        	$('#middle img:nth-child(4)').css('-webkit-transform','translateX(100%)');
        	$('#middle img:nth-child(4)').css('-moz-transform','translateX(100%)');
        	$('#middle img:nth-child(4)').css('-ms-transform','translateX(100%)');
        	$('#middle img:nth-child(4)').css('-o-transform','translateX(100%)');
        	$('#middle img:nth-child(4)').css('transform','translateX(100%)');
        	$('#middle img:nth-child(5)').css('-webkit-transform','translateX(200%)');
        	$('#middle img:nth-child(5)').css('-moz-transform','translateX(200%)');
        	$('#middle img:nth-child(5)').css('-ms-transform','translateX(200%)');
        	$('#middle img:nth-child(5)').css('-o-transform','translateX(200%)');
        	$('#middle img:nth-child(5)').css('transform','translateX(200%)');
            $('#down a').css('display','');
        }
    });
            
  });
$(window).load(function(){
	$('#loading_screen').css('display','none');
    $('#down a').css('display','none');
});