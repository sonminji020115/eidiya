// * 문서 전체 스크롤 이벤트 시작
$(window).scroll(function(){
    let sct = $(window).scrollTop();
});

// * 헤더 - gnb 
$('.gnb').mouseover(function(){
    $('#header').addClass('wh');
    $(this).find('.depth2').stop().slideDown();
}).mouseout(function(){
    $('#header').removeClass('wh');
    $(this).find('.depth2').stop().slideUp();
});

$('.gnb').mouseover(function(){
    $(this).find('.depth2').stop().slideDown();
    $('.gnb_bg').stop().slideDown();
}).mouseout(function(){
    $(this).find('.depth2').stop().slideUp();
    $('.gnb_bg').stop().slideUp();
})

// * 본문 1 - 배너 스크립트

// $('.main_slide_1').slick({
//     dots : true
// });

$('.main_slide_1').slick({
    // 이전버튼으로 사용할 태그 지정
    prevArrow : '.ms_arrow_left',
    // 다음버튼으로 사용할 태그 지정
    nextArrow : '.ms_arrow_right',
    // 페이저 사용함
    dots : true,
    // 페이저 영역으로 사용할 태그 지정
    appendDots : '.ms_pager',
    // 자동재생 처리함
    autoplay : true,
    // 3초에 한 번씩 이동
    autoplaySpeed : 3000,
    // 이미지 전환 속도
    speed : 1200
});

$('.stop2').click(function(){
    $(this).hide();
    $('.play2').show();
    $('.main_slide_1').slick('slickPause');
});

$('.play2').click(function(){
    $(this).hide();
    $('.stop2').show();
    $('.main_slide_1').slick('slickPlay');
});

// * 본문2 - 스크롤 이벤트
$(window).scroll(function(){
    let sct = $(window).scrollTop();

    // 본문 2의 내용
    let m2Top = $('.main2').offset().top - 1500;
    if(sct >= m2Top){
        $('.m2').addClass('on');
    } else {
        $('.m2').removeClass('on');
    }
    });

// * 본문5 - 메뉴 열기
$('.wrap_in .wrap .title a').click(function(e){
    e.preventDefault(); 
    $('.wrap_in .wrap').removeClass('on');
    $(this).parents('.wrap').addClass('on');
})

// * SNS영역2 - slick 플러그인 이벤트
$('.sns_2_in').slick({
    slidesToShow : 7,
    slideToScroll : 5,
    centerMode : true,
    arrows : false
});
