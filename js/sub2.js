// * 본문2 - 스크롤 이벤트
$(window).scroll(function(){
    let sct = $(window).scrollTop();

    let m2Top = $('.main2').offset().top -8000;
    if(sct >= m2Top){
        $('.m2').addClass('on');
    } else {
        $('.m2').removeClass('on');
    }
    });

// * 본문3 - 스크롤 이벤트
$(window).scroll(function(){
    let sct6 = $(window).scrollTop();

    let m6Top = $('.main3').offset().top -7000;
    if(sct6 >= m6Top){
        $('.m3_1').addClass('on');
    } else {
        $('.m3_1').removeClass('on');
    }
    }); 

// * 본문6 - 나타나기
$(window).scroll(function(){
    let sct6 = $(window).scrollTop();

    let m6Top = $('.main6').offset().top - 2000;
    if(sct6 >= m6Top){
        $('.main6_in').addClass('on');
    }
    }); 
