var btnClickMail_s = document.querySelectorAll('#post'),
    m = new Array('moc.liamg@432nugresm'); 

    for(var i=0; i <btnClickMail_s.length; i++){
        btnClickMail_s[i].onclick = hideMailopenMailwin;
    }

   function hideMailopenMailwin (){
        var sym = this.getAttribute("data-oper");
           if(sym =='post'){
               var w = window.open();
               w.window.location="mailto:" + m[0].split('').reverse().join('');
            }
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

















