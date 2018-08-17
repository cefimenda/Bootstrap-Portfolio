$(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
        // $("nav").animate({
        //     height:"10px"
        // })
        $("nav").addClass('shrink');
    } else {
        $("nav").removeClass("shrink");
        // $("nav").animate({
        //     height:"10px"
        // })
    }
})