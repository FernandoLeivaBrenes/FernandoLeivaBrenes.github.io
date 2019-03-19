$(function(){
    var offset = $("#firstMsg").offset();
    var offsetTop = offset.top -$(document).scrollTop();

    $(window).scroll(function(){
        //console.log(offsetTop);
        offsetTop = offset.top -$(document).scrollTop();
        if (offsetTop<58){
            $("nav.navbar").css("animation-name","classical");
        }else{
            $("nav.navbar").css("animation-name","back_classical");
        }
    })
})