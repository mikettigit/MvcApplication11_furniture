$(function(){
  $('.tab-nav li:first').addClass('select');                                                                 // Первой вкладке добавляетсякласс select
 $('.tab-nav li:first').addClass('first_tab'); 
 $('.tab-nav li:last').addClass('last_tab');
 $('.katalog .katalog_slide>div').css('opacity',0).filter(":first").css('opacity',1);                          // Всем блокам кроме первого задается прозрачность 0
 $('.katalog .katalog_slide>div').css('z-index',-1).filter(":first").css('z-index',0);
  $('.tab-nav a').click(function(){                                                                          // При клике на вкладку
      $('.katalog .katalog_slide>div').animate({'opacity':0},150).filter(this.hash).animate({'opacity':1},150); // - блок с описанием текущей вкладки плавно становится видимым
	  $('.katalog .katalog_slide>div').css('z-index',-1).filter(this.hash).css('z-index',0);
      $('.tab-nav li').removeClass('select');                                                                // - удаляется класс 'select' у активной ранее вкладки
      $(this).parent().addClass('select');                                                                   // - добавляется класс 'select' для выбранной вкладки        
      return (false);                                                                                        // - прерывается обработка события onClick 
  })  
})

$(function(){
 $('.tab-mat').find('li:first').addClass('select');                                                                 // Первой вкладке добавляетсякласс select
 $('.tab-mat').find('li:first').addClass('first_tab');
 $('.tab-mat').find('li:last').addClass('last_tab');

 $('#typical_katalog .mat_slide>div').css('opacity', 0).filter(":first").css('opacity', 1);                          // Всем блокам кроме первого задается прозрачность 0
 $('#typical_katalog .mat_slide>div').css('z-index', -1).filter(":first").css('z-index', 0);
 $('#typical_katalog').find('.tab-mat a').click(function () {                                                                          // При клике на вкладку
     $('#typical_katalog').find('.mat_slide>div').animate({ 'opacity': 0 }, 150).filter(this.hash).animate({ 'opacity': 1 }, 150); // - блок с описанием текущей вкладки плавно становится видимым
     $('#typical_katalog').find('.mat_slide>div').css('z-index', -1).filter(this.hash).css('z-index', 0);
     $('#typical_katalog').find('.tab-mat  li').removeClass('select');                                                                // - удаляется класс 'select' у активной ранее вкладки
     $(this).parent().addClass('select');                                                                   // - добавляется класс 'select' для выбранной вкладки        
     return (false);                                                                                        // - прерывается обработка события onClick 
 })

 $('#materials .mat_slide>div').css('opacity',0).filter(":first").css('opacity',1);                          // Всем блокам кроме первого задается прозрачность 0
 $('#materials .mat_slide>div').css('z-index',-1).filter(":first").css('z-index',0);
 $('#materials').find('.tab-mat a').click(function () {                                                                          // При клике на вкладку
     $('#materials').find('.mat_slide>div').animate({ 'opacity': 0 }, 150).filter(this.hash).animate({ 'opacity': 1 }, 150); // - блок с описанием текущей вкладки плавно становится видимым
     $('#materials').find('.mat_slide>div').css('z-index', -1).filter(this.hash).css('z-index', 0);
     $('#materials').find('.tab-mat  li').removeClass('select');                                                                // - удаляется класс 'select' у активной ранее вкладки
      $(this).parent().addClass('select');                                                                   // - добавляется класс 'select' для выбранной вкладки        
      return (false);                                                                                        // - прерывается обработка события onClick 
  })  
})
