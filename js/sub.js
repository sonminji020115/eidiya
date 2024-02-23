// * 본문영역 4 - 탭 UI

$('.m3_item_list .wrap .title a').click(function(e){
    e.preventDefault(); 
    $('.m3_item_list .wrap').removeClass('on');
    $(this).parents('.wrap').addClass('on');
})