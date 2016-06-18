$(document).ready(function(){

/*-------------------------------------
| Pinned Navigation
-------------------------------------*/
// var pin_state = 'scroll';

// var nav_height = 70;
// var main_offset = $('#main').offset().top;
// var nav_offset = main_offset - nav_height;


// function pinned_nav() {
// 	// how far scrolled from top
// 	var howFar = $(window).scrollTop();

// 	// console.log('Nav Offset:' + nav_offset);
// 	// console.log('Dist Scrolled:' + howFar);

// 	if (howFar >= nav_offset)
// 	{
// 		pin_state = 'pinned';
// 		$('body').addClass('pinned');
// 	}
// 	else
// 	{
// 		pin_state = 'scrolled';
// 		$('body').removeClass('pinned');
// 	}
// }


// $(window).scroll(pinned_nav);


/*-------------------------------------
| Chosen One State
-------------------------------------*/

/*-------------------------------------
| Hamburger Menu Behaviors
-------------------------------------*/
var menu_state = 'hidden';

function menu_manage() {
	// get window size
	var minWidth = $(window).innerWidth();

	// change state based on window size
	if (minWidth > 400)
	{
		menu_state = 'visible';
		$('nav#mainmenu .glyphicon-menu-hamburger').hide();
		$('nav#mainmenu .menu').show();
	}
	else
	{
		menu_state = 'hidden';
		$('nav#mainmenu .glyphicon-menu-hamburger').show();
		$('nav#mainmenu .menu').hide();
	}

	console.log(menu_state);
}

menu_manage();
$(window).resize(menu_manage);
$(window).scroll(menu_manage);

/*-------------------------------------
| Hamburger Toggle
-------------------------------------*/
function hamburger_toggle() {
	if (menu_state == 'hidden')
	{
		menu_state = 'visible';
		$('nav#mainmenu .menu').show();
	}
	else
	{
		menu_state = 'hidden';
		$('nav#mainmenu .menu').hide();
	}
}

$('nav#mainmenu .glyphicon-menu-hamburger').click(hamburger_toggle);


}); /*here ends doc ready*/

// LIGHTBOX//
function light_on() {
	var newSrc = $(this).find('img').attr('src');
	 $('#dark img').attr('src' , newSrc);

// get origional image side
	var liinboImg = new Image();
	liinboImg.src = newSrc;

	$(liinboImg).load(function(){

	new_w = liinboImg.width;
	new_h = liinboImg.height;


	$('#light').css({'width':new_w,'height':new_h});


	
//turn on the light box
	 $('#dark').show();
	}); //here ends the image load into memory

}

function light_off() {
	//turn off the lightboxS
	$('#dark').hide();
}

$('#gallery .item').click(light_on);
$('#dark .close').click(light_off);
$('#dark').click(light_off);





