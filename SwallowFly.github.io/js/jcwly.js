/*index start*/
$(function(){
    //banner
        $('.banner-slide').flexslider({
            directionNav: true,
            pauseOnAction: true,
            autoPlay:50000
        });
})
/*index end*/

/*index2 start*/
/*index2 end*/

/*warehouseSystem start*/
//�����
$(function(){
    $(".wareHose-system-left > dl > dt").click(function(){
        $(this).toggleClass("current").parents("dl");
        $(this).next("dd").slideToggle(200);

    });

})
/*warehouseSystem end*/
/*rukudan start*/
//�����
/*rukudan end*/

