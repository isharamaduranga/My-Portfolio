
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

  /* Displayed a customer form  When clicked "customer" link with navbar  */
  $("#linkCustomer").click(function () {
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

  $("#linkItem").click( function (){

      $("#dashboard_Slide").css("display", "none");
      $("#customer_Slide").css("display", "none");
      $("#item_Slide").css("display", "block");
      $("#order_Slide").css("display", "none");
      $("#orderDetailsSlide").css("display", "none");

      $("#linkHome").css();
      $("#linkCustomer").css();
      $("#linkItem").css();
      $("#linkOrder").css();
      $("#linkOrder_Details").css();




  });


