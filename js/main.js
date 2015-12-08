/* 
	Desenvolvido por Luiz Costa Developer;
*/

$(document).ready(function(){

	// menu fixo mobile
	var fixed = $('header');
     $(window).scroll(function () {
          if ($(this).scrollTop() > 50) {
              fixed.addClass("fixed");
          } else {
              fixed.removeClass("fixed");
          }
    });

     //menu mobile
	$('#btn-mobile').click(function(){
		$(this).next('.mobile').slideToggle();
		$(this).hasClass('active')
	})

	// modal
	$('.box').on('click',function(){
		$('.bg-modal').fadeIn();
	})

	$('.btn-fecha-modal').click(function(){
		$('.bg-modal').fadeOut();
	})


	//flexslider galeria
	$('#miniaturas').flexslider({
		animation: "slide",
	    controlNav: false,
	    directionNav:false,
	    animationLoop: false,
	    slideshow: false,
	    itemWidth: 210,
	    itemMargin: 5,
	    asNavFor: '#slider'
	})

	$('#slider').flexslider({
	    animation: "slide",
	    controlNav: false,
	    animationLoop: false,
	    slideshow: false,
	    sync: "#carousel"
	  });

	//anchor menu
	$('#menu a').click(function(){
		if($(this).attr("rel") == "btn-jobs") {			
			$('html,body').delay(500).stop().animate({scrollTop: $('#projects').offset().top -140}, 500);
			if(window.innerWidth <= 720){
				$('.mobile').slideToggle();
			}
		}

		if($(this).attr("rel") == "btn-me") {			
			$('html,body').delay(500).stop().animate({scrollTop: $('#me').offset().top -140}, 500);
			percent($('.skills'));	
			if(window.innerWidth <= 720){
				$('.mobile').slideToggle();
			}		
		}

		if($(this).attr("rel") == "btn-contact") {			
			$('html,body').delay(500).stop().animate({scrollTop: $('#contact').offset().top -140}, 500);
			if(window.innerWidth <= 720){
				$('.mobile').slideToggle();
			}
		}
	})

	//anchor logo
	$('#title a').click(function(){
		if($(this).attr('rel') == 'btn-top'){
			$('html,body').delay(500).stop().animate({scrollTop: $('#top').offset().top -0}, 500);
		}
	})

	


	
})

function percent(element){
	//skills width custom
	var sizeWidth = '';
	$(element).find('li').each(function(){
		sizeWidth = $(this).find('span').attr('class').split(' ')[1]+'%';
		$(this).find('.percent').animate({
			width: sizeWidth
		},500)

		$(this).attr('title',sizeWidth)
	})
}