$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    })

    /* toggle menu/ navbar script */

    $('.menu-btn').click(function () {

        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");

    });

    /*typing animation script*/
    var typed = new Typed(".typing",{
        strings:["Full Stack Developer","WEB-DEVELOPER","BACK-END DEVELOPER","FRONT-END DEVELOPER","SOFTWARE DESIGNER","UI/UX DESIGNER"],
        typeSpeed:80,
        backSpeed:50,
        loop:true
    });


    var typed = new Typed(".typing_about",{
        strings:["Full Stack Developer","WEB-DEVELOPER","BACK-END DEVELOPER","FRONT-END DEVELOPER","SOFTWARE DESIGNER","UI/UX DESIGNER"],
        typeSpeed:80,
        backSpeed:50,
        loop:true
    });



});