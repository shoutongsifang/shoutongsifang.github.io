var width=$(".bannerbox").width();
var i=-1;
var timer=0;
$(document).ready(function () {
    move();
    timer=setInterval("move()",5000);
    $(".bannerbox ul li").hover(function(){
        clearInterval(timer);
    },function(){
        timer=setInterval("move()",5000);
    })
    $('.nav dl dd').click(function(){
        var ddIndex=$(this).index()-1;
        i=ddIndex;
        move();
    })
})
function move(){
    i++;
    $('.baner-01-a').css({"top":"0px",opacity:0});
    $('.baner-01-b').css({"top":"230px",opacity:0});
    $('.banner2-02,.banner2-03').css({opacity:0});
    $('.banner2-01').css({opacity:0,"left":"20%"});
    $('.banner3-01').css({opacity:0});
    $('.banner3-02').css({opacity:0});
    $('.banner3-03').css({opacity:0});
    if(i>=3){
        i=0;
    }
    if(i<3){
        if(i==0){
            //$('.fst-li').fadeIn(100).siblings().fadeOut(100);
            $('.nav dl dd').eq(i).addClass('bg').siblings().removeClass('bg');
            $('.bannerbox ul li').eq(i).fadeIn(100).siblings().fadeOut();
            $('.baner-01-a').animate({"top":"84px",opacity:1},450,function(){
                $('.baner-01-b').animate({"top":"260px",opacity:1},450)
            });
        }
        if(i==1){
            //$(".sec-li").fadeIn(100).siblings().fadeOut(100);
            $('.nav dl dd').eq(i).addClass('bg').siblings().removeClass('bg');
            $('.bannerbox ul li').eq(i).fadeIn(100).siblings().fadeOut();
            $('.banner2-02').animate({opacity:1},300,function(){
                $('.banner2-03').animate({opacity:1},300,function(){
                    $('.banner2-01').animate({opacity:1,"left":"40%"},300);
                });
            });
        }
        if(i==2){
            $('.nav dl dd').eq(i).addClass('bg').siblings().removeClass('bg');
            $('.bannerbox ul li').eq(i).fadeIn(100).siblings().fadeOut();
                $('.banner3-01').animate({opacity:1,"margin-left":"-360px"},225,function(){
                    $('.banner3-03').animate({opacity:1,"margin-left":"-107px"},225,function(){
                        $('.banner3-02').animate({opacity:1,"margin-left":"-305px"},225);
                    });
                });
        }
    }
}

