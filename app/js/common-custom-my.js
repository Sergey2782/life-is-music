var btnClickMail_1 = document.querySelector('.link_Post_1'),
    btnClickMail_2 = document.querySelector('.link_Post_2'),
    btnClickMail_3 = document.querySelector('.link_Post_3');

    btnClickMail_1.onclick = hideMailopenMailwin;
    btnClickMail_2.onclick = hideMailopenMailwin;
    btnClickMail_3.onclick = hideMailopenMailwin;

var m = new Array('moc.liamg@432nugresm');

    function hideMailopenMailwin (){
       var w = window.open();
       w.window.location="mailto:" + m[0].split('').reverse().join('');
    }

var $btnTop = $('.btn-totop');

$(window).on('scroll', function(){
     if($(window).scrollTop() >= 200){
         $btnTop.fadeIn();
     }else{
         $btnTop.fadeOut();
     }
  });

$btnTop.on('click', function(){
     $('html,body').animate({scrollTop:0}, 900)
});

















