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
//²à±ßÀ¸
$(function(){
    $(".wareHose-system-left > dl > dt").click(function(){
        $(this).toggleClass("current").parents("dl");
        $(this).next("dd").slideToggle(200);

    });

})
/*warehouseSystem end*/
/*rukudan start*/
//²à±ßÀ¸
/*rukudan end*/

