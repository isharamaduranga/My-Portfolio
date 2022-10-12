function loadAllCustomersForComboBox() {
    $('#cmbCustomerIDS').empty();
    $('#cmbCustomerIDS').prepend('<option>Select Customer</option>');
    for (let customer of customers) {
        $('#cmbCustomerIDS').append(`<option>${customer.id}</option>`);
    }
}

function loadAllItemsForComboBox() {
    $('#cmbItemIds').empty();
    $('#cmbItemIds').prepend('<option>Select Item</option>');
    for (let item of items) {
        $('#cmbItemIds').append(`<option>${item.code}</option>`);
    }
}

$('#cmbCustomerIDS').change(function () {
    let cusID = $('#cmbCustomerIDS').val();
    let customer = searchCustomerForInputField(cusID);
    if (customer != null) {

        $('#txtCusIdForOrder').val(customer.id);
        $('#txtCusNameForOrder').val(customer.name);
        $('#txtCusSalaryForOrder').val(customer.salary);
        $('#txtAddressForOrder').val(customer.address);

    }
    textFieldColorChange_customer();

});

function textFieldColorChange_customer() {
    let cusId = $('#cmbCustomerIDS').val();
    if (cusId === 'Select Customer') {

        $("#txtCusIdForOrder,#txtCusNameForOrder,#txtCusSalaryForOrder,#txtAddressForOrder")
            .css("border", "1px solid #ced4da");

        //clear fields
        clearSetDetails($("#txtCusIdForOrder"), $("#txtCusNameForOrder"), $("#txtCusSalaryForOrder"), $("#txtAddressForOrder"));

    } else {
        $("#txtCusIdForOrder,#txtCusNameForOrder,#txtCusSalaryForOrder,#txtAddressForOrder")
            .css("border", "2px solid limegreen");
    }
}

$('#txtOrderQty').on('keyup',function (event) {
    orderQtyColourChange();
});

function orderQtyColourChange() {
    let qHand = parseInt($("#txtQTYONHand").val());
    let orQty = parseInt($("#txtOrderQty").val());
    if (qHand<orQty) {
        $('#txtOrderQty').css("border", "1px solid red");
        $('#txtOrderQty').parent().children('span').text("Please  Enter a Amount lower than: "+orQty+"");
    }else {
        $('#txtOrderQty').css("border", "1px solid #ced4da");
        $('#txtOrderQty').parent().children('span').text("");
    }
}

$('#btnAddToCart').click(function () {
    let qtyOnHand = parseInt($("#txtQTYONHand").val());
    let orderQty = parseInt($("#txtOrderQty").val());
    if ($("#txtOrderQty").val() != "") {

        if (qtyOnHand < orderQty) {
            alert("This Item Not Available for this Quantity !!!")
        } else {
            updateQty();
            addToCart();
            loadAllCart();
            calculateTotal();

            $("#txtItemIDForOrder,#txtItemNameForOrder,#txtQTYONHand,#txtOrderQty,#txtItemPriceForOrder").val("")

        }
    } else {
        alert("please Enter Order Quantity..");
    }
});

$('#txtCash').on('keyup', function (event) {

    if (event.key == "Enter") {
        event.preventDefault();
    }

    let cash = parseFloat($('#txtCash').val());
    let tot = $('#total>span').text();

    if (cash > tot) {
        let total = parseFloat($('#subTot').text());
        let balance = cash - total;

        $('#txtBalance').val(balance);

        $('#txtCash').css("border", "1px solid #ced4da");
        $('#txtCash').parent().children('span').text("");
        $("#btnPurchase").attr('disabled',false);
    } else {
        $('#txtCash').css('border', '2px solid red');
        $('#txtCash').parent().children('span').text("Insufficient Credit Balance");
    }
});


function removeItemInCart() {
    $("#tblCart>tr").on('dblclick', function () {
        $(this).remove();
        //select the row which runs the event at the moment and then delete it
        let totAfterRemove = $('#total>span').text();
        let newVal = totAfterRemove - parseFloat($($(this).children(this).get(5)).text());
        $('#total>span').text(newVal).append('.00');

        if ($("#txtDiscount").val() === "") {
            $('#subtotal>span').text(newVal);
        }
    });
}

function addToCart() {
    let oid = $('#txtOrderId').val();
    let itm_code = $('#txtItemIDForOrder').val();
    let itm_name = $('#txtItemNameForOrder').val();
    let itm_price = $('#txtItemPriceForOrder').val();
    let order_qty = $('#txtOrderQty').val();
    let total = itm_price * order_qty;


    for (let cartElement of cart) {
        if (cartElement.cartICode == itm_code) {
            var newQty = +cartElement.cartOrderQty + +order_qty;
            let newTotal = itm_price * newQty;
            cartElement.cartOrderQty = newQty;
            cartElement.cartTotal = newTotal;
            return;
        }
    }

    let cartOrder = cartModel(oid, itm_code, itm_name, itm_price, order_qty, total);
    cart.push(cartOrder);

    $("#txtBalance,#txtCash,#txtDiscount").val("");

}

function loadAllCart() {

    $("#tblCart").empty();

    for (let cartItem of cart) {
        var cartRow = `<tr><td>${cartItem.CartOid}</td><td>${cartItem.cartICode}</td><td>${cartItem.cartIName}
        </td><td>${cartItem.cartIPrice}</td><td>${cartItem.cartOrderQty}</td><td>${cartItem.cartTotal}</td></tr>`;

        $("#tblCart").append(cartRow);
    }
    removeItemInCart();
}


function updateQty() {
    let qtyOnHand = $('#txtQTYONHand').val();
    let order_qty = $('#txtOrderQty').val();
    let newQtyValue = qtyOnHand - order_qty;

    for (let item of items) {
        if ($("#cmbItemIds").val() === item.code) {
            item.qty = newQtyValue;
            $('#txtQTYONHand').val(item.qty);

            loadAllItem();

        }
    }
}

function calculateTotal() {
    let tot = 0;
    $('#tblCart>tr').each(function () {
        tot = tot + parseFloat($($(this).children().get(5)).text());
        $('#total>span').text(tot).append('.00');

        if ($("#txtDiscount").val() === "") {

            $('#subtotal>span').text(tot);
        }
    });
    tempTot = tot;

}

$('#txtDiscount').on('keyup', function () {
    if ($("#txtDiscount").val() === "") {
        $('#subtotal>span').text('0.00');
    } else {
        let tot = parseFloat(tempTot);
        let dis = tot / 100 * parseFloat($("#txtDiscount").val());

        $('#subtotal>span').text(tot - dis);

        let cash = parseInt($("#txtCash").val());
        let subTot = parseInt($("#subTot").text());
        $("#txtBalance").val(cash - subTot);
    }
});


$('#cmbItemIds').change(function () {
    let code = $('#cmbItemIds').val();
    let item = searchItemForInputField(code);

    if (item != null) {
        $('#txtItemIDForOrder').val(item.code);
        $('#txtItemNameForOrder').val(item.name);
        $('#txtItemPriceForOrder').val(item.price);
        $('#txtQTYONHand').val(item.qty);
    }
    textFieldColorChange_Item();
    updateQty();
});


$('#btnPurchase').click(function () {
    placeOrder();
     generateOrderID();
    cart.splice(0,cart.length);
    $('#tblCart').empty();
    $("#btnPurchase").attr('disabled',true);
    $("#txtItemNameForOrder,#txtItemPriceForOrder,#txtQTYONHand,#txtOrderQty,#txtCusSalaryForOrder,#txtCusNameForOrder,#txtAddressForOrder,#txtCash,#txtBalance,#txtDiscount").val("");
    $("#total>span,#subTot").text("00");

});

function saveOrder() {
    let oid=$('#txtOrderId').val();
    let cid=$('#txtCusIdForOrder').val();
    let date;
    if ($("#txtOrderDate").val()===""){
        date = $("#currentDate").text();
    }else{
        date= $("#txtOrderDate").val();
    }

    let fullTot=$('#total>span').text();

    let NewOrder=orderModel(oid,cid,date,fullTot);
    let isSaved = order.push(NewOrder);
    if (isSaved) {
        return true;
    }else{}

}


function placeOrder() {

    if(saveOrder()){
        let date2;
        if ($("#txtOrderDate").val()===""){
            date2 = $("#currentDate").text();
        }else{
            date2= $("#txtOrderDate").val();
        }
        let discounts=$('#txtDiscount').val();
        let cide=$('#txtCusIdForOrder').val();
        let cnamee=$('#txtCusNameForOrder').val();

        for (var c of cart) {
            let odeetails=orderDetailsModel(c.CartOid,date2,cide,cnamee,c.cartICode,c.cartIName,c.cartOrderQty,discounts,c.cartTotal);
            orderDetails.push(odeetails);
        }
        alert("Successfully place order..");
    }else {
        alert("UnSuccessfully..Something went Wrong !!!")
    }
}



function textFieldColorChange_Item() {
    let itemCode = $('#cmbItemIds').val();

    if (itemCode === "Select Item") {

        $("#txtItemIDForOrder,#txtItemNameForOrder,#txtItemPriceForOrder,#txtQTYONHand")
            .css("border", "1px solid #ced4da");

        //clear fields
        clearSetDetails($("#txtItemIDForOrder"), $("#txtItemNameForOrder"), $("#txtItemPriceForOrder"), $("#txtQTYONHand"));

    } else {
        $("#txtItemIDForOrder,#txtItemNameForOrder,#txtItemPriceForOrder,#txtQTYONHand")
            .css("border", "2px solid limegreen");

    }
}

function clearSetDetails(param1, param2, param3, param4) {
    param1.val("");param2.val("");param3.val("");param4.val("");
}


function forOrder(){
    generateOrderID();
    $("#btnPurchase").attr('disabled',true);
}

function generateOrderID() {
    try {
        let lastOId = order[order.length - 1].ordID;
        let newOId = parseInt(lastOId.substring(3, 5)) + 1;
        if (newOId < 10) {
            $("#txtOrderId").val("OI00" + newOId);
        } else if (newOId < 100) {
            $("#txtOrderId").val("OI0" + newOId);
        } else {
            $("#txtOrderId").val("OI" + newOId);
        }
    } catch (e) {
        $("#txtOrderId").val("OID001");
    }
}
