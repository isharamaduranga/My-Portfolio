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
        }
    } else {
        alert("please Enter Order Quantity..");
    }
});

$('#txtCash').on('keyup',function () {
    let cash= parseFloat($('#txtCash').val());
    let tot = $('#total>span').text();

    if(cash>tot){
        let total=parseFloat($('#subTot').text());
        let balance= cash-total;

        $('#txtBalance').val(balance);

        $('#txtCash').css("border", "1px solid #ced4da");
        $('#txtCash').parent().children('span').text("");
    }else {
        $('#txtCash').css('border', '2px solid red');
        $('#txtCash').parent().children('span').text("Insufficient Credit Balance");
    }
})

function addToCart() {
    let oid = $('#txtOrderId').val();
    let itm_code = $('#txtItemIDForOrder').val();
    let itm_name = $('#txtItemNameForOrder').val();
    let itm_price = $('#txtItemPriceForOrder').val();
    let order_qty = $('#txtOrderQty').val();
    let total = itm_price * order_qty;


    for (let cartElement of cart) {
        if(cartElement.cartICode==itm_code){
            var newQty =+ cartElement.cartOrderQty+ +order_qty;
            let newTotal= itm_price*newQty;
            cartElement.cartOrderQty=newQty;
            cartElement.cartTotal=newTotal;
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

}


function updateQty() {
    let qtyOnHand = $('#txtQTYONHand').val();
    let order_qty = $('#txtOrderQty').val();
    let newQty= qtyOnHand - order_qty;

    for (let item of items) {
        if($("#cmbItemIds").val()===item.code){
            item.qty=newQty;
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

        if($("#txtDiscount").val()===""){

            $('#subtotal>span').text(tot);
        }
    });
    tempTot = tot;

}




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
});

$("#btnPlaceOrder").click(function () {
    generateOrderID();

});


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
    param1.val("");
    param2.val("");
    param3.val("");
    param4.val("");
}


function generateOrderID() {
    $("#txtOrderId").val("OID-0001");
    let orderId = [order.length - 1].CartOid;
    let tempId = parseInt(orderId.split("-")[1]);

    tempId = tempId + 1;

    if (tempId <= 9) {
        $("#txtOrderId").val("OID-000" + tempId);
    } else if (tempId <= 99) {
        $("#txtOrderId").val("OID-00" + tempId);
    } else if (tempId <= 999) {
        $("#txtOrderId").val("OID-0" + tempId);
    } else {
        $("#txtOrderId").val("OID-" + tempId);
    }
}