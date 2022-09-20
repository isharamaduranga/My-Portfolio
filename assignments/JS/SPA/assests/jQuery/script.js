
  /* When first opening the index file, hide all slides, but show only one content. */

  $("#dashboard_Slide").css("display", "block"); // firstly open
  $("#customer_Slide").css("display", "none");
  $("#item_Slide").css("display", "none");
  $("#order_Slide").css("display", "none");
  $("#orderDetailsSlide").css("display", "none");

  $("#linkHome").css('color', 'crimson');
  $("#linkCustomer").css('color', 'white');
  $("#linkItem").css('color', 'white');
  $("#linkOrder").css('color', 'white');
  $("#linkPurchaseOrder").css('color', 'white');


  $("#linkCustomer").click(function () {
      $("#dashboard_Slide").css("display", "none");
      $("#customer_Slide").css("display", "block");
      $("#item_Slide").css("display", "none");
      $("#order_Slide").css("display", "none");
      $("#orderDetailsSlide").css("display", "none");

      $("#linkHome").css('color', 'white');
      $("#linkCustomer").css('color', 'crimson');
      $("#linkItem").css('color', 'white');
      $("#linkOrder").css('color', 'white');
      $("#linkPurchaseOrder").css('color', 'white');
  });
