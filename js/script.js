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

    //side-up script

    $('#scroll-up-btn').click(function() {
        $('html').animate({scrollTop:0});
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

    var typed = new Typed(".typing_about2",{
        strings:["Full Stack Developer","WEB-DEVELOPER","BACK-END DEVELOPER","FRONT-END DEVELOPER","SOFTWARE DESIGNER","UI/UX DESIGNER"],
        typeSpeed:80,
        backSpeed:50,
        loop:true
    });
});

/* Displayed  default Home scripts..  */
$("#home_nav").css({'padding-bottom':'15px','border-radius':'10px','border-bottom':'2px solid lime'});
$("#about_nav").css('border-bottom','none');
$("#skill_nav").css('border-bottom','none');
$("#service_nav").css('border-bottom','none');
$("#project_nav").css('border-bottom','none');
$("#education_nav").css('border-bottom','none');
$("#contact_nav").css('border-bottom','none');

$("#home_nav").click(function () {
    $("#home_nav").css({'padding-bottom':'15px','border-radius':'10px','border-bottom':'2px solid lime'});
    $("#about_nav").css('border-bottom','none');
    $("#skill_nav").css('border-bottom','none');
    $("#service_nav").css('border-bottom','none');
    $("#project_nav").css('border-bottom','none');
    $("#education_nav").css('border-bottom','none');
    $("#contact_nav").css('border-bottom','none');
});

$("#about_nav").click(function () {
    $("#about_nav").css({'padding-bottom':'15px','border-radius':'10px','border-bottom':'2px solid lime'});
    $("#home_nav").css('border-bottom','none');
    $("#skill_nav").css('border-bottom','none');
    $("#service_nav").css('border-bottom','none');
    $("#project_nav").css('border-bottom','none');
    $("#education_nav").css('border-bottom','none');
    $("#contact_nav").css('border-bottom','none');
});

$("#skill_nav").click(function () {
    $("#skill_nav").css({'padding-bottom':'15px','border-radius':'10px','border-bottom':'2px solid lime'});
    $("#home_nav").css('border-bottom','none');
    $("#about_nav").css('border-bottom','none');
    $("#service_nav").css('border-bottom','none');
    $("#project_nav").css('border-bottom','none');
    $("#education_nav").css('border-bottom','none');
    $("#contact_nav").css('border-bottom','none');
});

$("#service_nav").click(function () {
    $("#service_nav").css({'padding-bottom':'15px','border-radius':'10px','border-bottom':'2px solid lime'});
    $("#home_nav").css('border-bottom','none');
    $("#about_nav").css('border-bottom','none');
    $("#skill_nav").css('border-bottom','none');
    $("#project_nav").css('border-bottom','none');
    $("#education_nav").css('border-bottom','none');
    $("#contact_nav").css('border-bottom','none');
});

$("#project_nav").click(function () {
    $("#project_nav").css({'padding-bottom':'15px','border-radius':'10px','border-bottom':'2px solid lime'});
    $("#home_nav").css('border-bottom','none');
    $("#skill_nav").css('border-bottom','none');
    $("#service_nav").css('border-bottom','none');
    $("#about_nav").css('border-bottom','none');
    $("#education_nav").css('border-bottom','none');
    $("#contact_nav").css('border-bottom','none');
});

$("#education_nav").click(function () {
    $("#education_nav").css({'padding-bottom':'15px','border-radius':'10px','border-bottom':'2px solid lime'});
    $("#home_nav").css('border-bottom','none');
    $("#skill_nav").css('border-bottom','none');
    $("#service_nav").css('border-bottom','none');
    $("#project_nav").css('border-bottom','none');
    $("#about_nav").css('border-bottom','none');
    $("#contact_nav").css('border-bottom','none');
});

$("#contact_nav").click(function () {
    $("#contact_nav").css({'padding-bottom':'15px','border-radius':'10px','border-bottom':'2px solid lime'});
    $("#home_nav").css('border-bottom','none');
    $("#skill_nav").css('border-bottom','none');
    $("#service_nav").css('border-bottom','none');
    $("#project_nav").css('border-bottom','none');
    $("#education_nav").css('border-bottom','none');
    $("#about_nav").css('border-bottom','none');
});

