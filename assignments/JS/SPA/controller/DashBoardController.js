
/* When first opening the index file, hide all slides, but show only one content. */

/* Displayed  default DashBoard scripts..  */
$("#dashboard_Slide").css("display", "block"); // firstly open
$("#customer_Slide").css("display", "none");
$("#item_Slide").css("display", "none");
$("#order_Slide").css("display", "none");
$("#orderDetailsSlide").css("display", "none");

$("#linkHome").css({'color':'deeppink','border-bottom':'2px solid gold'});
$("#linkCustomer").css({'color':'white','border-bottom':'none'});
$("#linkItem").css({'color':'white','border-bottom':'none'});
$("#linkOrder").css({'color':'white','border-bottom':'none'});
$("#linkOrder_Details").css({'color':'white','border-bottom':'none'});

/* Displayed a customer form  When clicked "Customer" link with navbar  */
$("#linkCustomer,#linkCustomer2").click(function () {
    $("#dashboard_Slide").css("display", "none");
    $("#customer_Slide").css("display", "block");
    $("#item_Slide").css("display", "none");
    $("#order_Slide").css("display", "none");
    $("#orderDetailsSlide").css("display", "none");

    $("#linkHome").css({'color': 'white','border-bottom':'none' });
    $("#linkCustomer").css({'color':'deeppink','border-bottom':'2px solid gold'});
    $("#linkItem").css({'color': 'white','border-bottom':'none' });
    $("#linkOrder").css({'color': 'white','border-bottom':'none' });
    $("#linkOrder_Details").css({'color': 'white','border-bottom':'none' });
});

/* Displayed a Item form  When clicked "Item" link with navbar  */
$("#linkItem,#linkItem2").click( function (){

    $("#dashboard_Slide").css("display", "none");
    $("#customer_Slide").css("display", "none");
    $("#item_Slide").css("display", "block");
    $("#order_Slide").css("display", "none");
    $("#orderDetailsSlide").css("display", "none");

    $("#linkHome").css({'color': 'white','border-bottom':'none' });
    $("#linkCustomer").css({'color': 'white','border-bottom':'none' });
    $("#linkItem").css({'color':'deeppink','border-bottom':'2px solid gold'});
    $("#linkOrder").css({'color': 'white','border-bottom':'none' });
    $("#linkOrder_Details").css({'color': 'white','border-bottom':'none' });

});

/* Displayed a Order form  When clicked "Order" link with navbar  */
$("#linkOrder,#linkOrder2").click(function (){
    $("#dashboard_Slide").css("display", "none");
    $("#customer_Slide").css("display", "none");
    $("#item_Slide").css("display", "none");
    $("#order_Slide").css("display", "block");
    $("#orderDetailsSlide").css("display", "none");

    $("#linkHome").css({'color': 'white','border-bottom':'none' });
    $("#linkCustomer").css({'color': 'white','border-bottom':'none' });
    $("#linkItem").css({'color': 'white','border-bottom':'none' });
    $("#linkOrder").css({'color':'deeppink','border-bottom':'2px solid gold'});
    $("#linkOrder_Details").css({'color': 'white','border-bottom':'none' });

    generateOrderID();
});

/* Displayed a Order-Details form  When clicked "Order-Details" link with navbar  */
$("#linkOrder_Details,#linkOrder_Details2").click(function (){
    $("#dashboard_Slide").css("display", "none");
    $("#customer_Slide").css("display", "none");
    $("#item_Slide").css("display", "none");
    $("#order_Slide").css("display", "none");
    $("#orderDetailsSlide").css("display", "block");

    $("#linkHome").css({'color': 'white','border-bottom':'none' });
    $("#linkCustomer").css({'color': 'white','border-bottom':'none' });
    $("#linkItem").css({'color': 'white','border-bottom':'none' });
    $("#linkOrder").css({'color': 'white','border-bottom':'none' });
    $("#linkOrder_Details").css({'color':'deeppink','border-bottom':'2px solid gold'});

});

/* Displayed a Home form  When clicked "Home" link with navbar  */
$("#linkHome,#linkHome2").click(function (){
    $("#dashboard_Slide").css("display", "block");
    $("#customer_Slide").css("display", "none");
    $("#item_Slide").css("display", "none");
    $("#order_Slide").css("display", "none");
    $("#orderDetailsSlide").css("display", "none");

    $("#linkHome").css({'color':'deeppink','border-bottom':'2px solid gold'});
    $("#linkCustomer").css({'color': 'white','border-bottom':'none' });
    $("#linkItem").css({'color': 'white','border-bottom':'none' });
    $("#linkOrder").css({'color': 'white','border-bottom':'none' });
    $("#linkOrder_Details").css({'color': 'white','border-bottom':'none' });

});



year = new Date().getFullYear();
month = new Date().getMonth();
date = new Date().getDate();

$("#currentDate").text(`${year}-${month+1}-${date}`);