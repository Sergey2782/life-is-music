
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
/*
$(".cont").css('width',function(i,value){
    return parseFloat(value)*1.2;
})
*/
