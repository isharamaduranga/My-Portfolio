
  /* When first opening the index file, hide all slides, but show only one content. */

  /* Displayed  default DashBoard scripts..  */
  $("#dashboard_Slide").css("display", "block"); // firstly open
  $("#customer_Slide").css("display", "none");
  $("#item_Slide").css("display", "none");
  $("#order_Slide").css("display", "none");
  $("#orderDetailsSlide").css("display", "none");

  $("#linkHome").css({'color':'deeppink','border-bottom':'2px solid gold'});
  $("#linkCustomer").css('color', 'white');
  $("#linkItem").css('color', 'white');
  $("#linkOrder").css('color', 'white');
  $("#linkOrder_Details").css('color', 'white');

  /* Displayed a customer form  When clicked "customer" link with navbar  */
  $("#linkCustomer").click(function () {
      $("#dashboard_Slide").css("display", "none");
      $("#customer_Slide").css("display", "block");
      $("#item_Slide").css("display", "none");
      $("#order_Slide").css("display", "none");
      $("#orderDetailsSlide").css("display", "none");

      $("#linkHome").css({'color': 'white','border-bottom':'none' });
      $("#linkCustomer").css({'color':'deeppink','border-bottom':'2px solid gold'});
      $("#linkItem").css('color', 'white');
      $("#linkOrder").css('color', 'white');
      $("#linkOrder_Details").css('color', 'white');
  });

  $("#linkItem").click( function (){







  });


