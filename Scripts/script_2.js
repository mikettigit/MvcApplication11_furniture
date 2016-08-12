$(document).ready(function(){
    var h_mrg = 0;   // отступ когда шапка уже не видна
    $(function(){
        $(window).scroll(function(){
            var top = $(this).scrollTop();
            var elem = $('.nav-menu');
			var h_hght = 102;
			var ua = navigator.userAgent;
			if(ua.indexOf('Opera')!= -1)
			h_hght = 102;
			
            if (top+h_mrg < h_hght) {
                elem.css('top', (h_hght-top));
				$('.down_menu').toggleClass('down_menu').toggleClass('top_menu');
				
            } else {
                elem.css('top', h_mrg);
				$('.top_menu').toggleClass('top_menu').toggleClass('down_menu');
            }
        });
    });
		
		
    $('.add-el').click(function(){
        $(this).css('display','none');
        $(this).siblings('.drop').fadeIn();
        return false
    });
    $('.open-call-back-popup').click(function(){
        $('.call-back-popup').fadeIn()
        $('.overlay').fadeIn()
		$('.nav-menu').animate({'opacity':0},150);
        return false
    });
	$('.open-call-back-popup_2').click(function(){
        $('.call-back-popup_2').fadeIn()
        $('.overlay').fadeIn()
		$('.nav-menu').animate({'opacity':0},150);
        return false
    });
	$('.open-call-back-popup_3').click(function(){
        $('.call-back-popup_3').fadeIn()
        $('.overlay').fadeIn()
		$('.nav-menu').animate({'opacity':0},150);
        return false
    });
	
    $('.close-popup,  .overlay').click(function(){
        $('.call-back-popup, .thank, .overlay').css('display','none');
		$('.nav-menu').animate({'opacity':1},150);
        return false
    });
	$('.close-popup,  .overlay').click(function(){
        $('.call-back-popup_2, .thank, .overlay').css('display','none');
		$('.nav-menu').animate({'opacity':1},150);
		$('input:hidden[name=page-name]').val('');
        return false
    });
	$('.close-popup,  .overlay').click(function(){
        $('.call-back-popup_3, .thank, .overlay').css('display','none');
		$('.nav-menu').animate({'opacity':1},150);
		$('input:hidden[name=page-name-3]').val('');
        return false
    });
    //$('.open-thank').click(function(){
    //    $('.thank').fadeIn()
    //    $('.overlay').css('display','block');
    //    $('.call-back-popup').css('display','none');
    //    return false
    //});
    var test = document.createElement('input');
    if (!('placeholder' in test)) {
        $('input').each(function () {
            if ($(this).attr('placeholder') != "" && this.value == "") {
                $(this).val($(this).attr('placeholder'))
                    .css('color', 'grey')
                    .on({
                        focus: function () {
                            if (this.value == $(this).attr('placeholder')) {
                                $(this).val("").css('color', '#000');
                            }
                        },
                        blur: function () {
                            if (this.value == "") {
                                $(this).val($(this).attr('placeholder'))
                                    .css('color', 'grey');
                            }
                        }
                    });
            }
        });
    }

});
var lastId,
    topMenu = $(".nav-menu"),
    topMenuHeight = topMenu.outerHeight(), //здесь оффсет для меню
// All list items
    menuItems = topMenu.find("a"),
// Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
	if($(this).attr("href") != "#")
	{
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+25;
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 300);
    e.preventDefault();
	}
});

// Bind to scroll
$(window).scroll(function(){
    // Get container scroll position
    var fromTop = $(this).scrollTop()+topMenuHeight;
    // Get id of current scroll item
    var cur = scrollItems.map(function(){
        if ($(this).offset().top < fromTop)
            return this;
    });
    // Get the id of the current element
    cur = cur[cur.length-1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
        lastId = id;
        // Set/remove active class
        menuItems
            .parent().removeClass("active")
            .end().filter("[href=#"+id+"]").parent().addClass("active");
    }

});

$(document).ready(function() {
    $('.accordion-header').toggleClass('inactive-header');
    var contentwidth = $('.accordion-header').width();

    //$('.accordion-header').first().toggleClass('active-header').toggleClass('inactive-header');
    //$('.accordion-content').first().slideDown().toggleClass('open-content');
	$('.inactive-header').last().css('border','0');
    $('.accordion-header').click(function() {
        if ($(this).is('.inactive-header')) {
            $('.active-header').toggleClass('active-header').toggleClass('inactive-header').next().slideToggle().toggleClass('open-content');
            $(this).toggleClass('active-header').toggleClass('inactive-header');
            $(this).next().slideToggle().toggleClass('open-content');
        } else {
            $(this).toggleClass('active-header').toggleClass('inactive-header');
            $(this).next().slideToggle().toggleClass('open-content');
        }
    });
    return false;
});