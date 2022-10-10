

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
    let cusID=$('#cmbCustomerIDS').val();
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
    let cusId= $('#cmbCustomerIDS').val();
    if(cusId ==='Select Customer'){

        $("#txtCusIdForOrder,#txtCusNameForOrder,#txtCusSalaryForOrder,#txtAddressForOrder")
            .css("border","1px solid #ced4da");
    }else{
        $("#txtCusIdForOrder,#txtCusNameForOrder,#txtCusSalaryForOrder,#txtAddressForOrder")
            .css("border","2px solid green");
    }
}


$('#cmbItemIds').change(function () {
    let code=$('#cmbItemIds').val();
    let item = searchItemForInputField(code);

    if (item != null) {
        $('#txtItemIDForOrder').val(item.code);
        $('#txtItemNameForOrder').val(item.name);
        $('#txtItemPriceForOrder').val(item.price);
        $('#txtQTYONHand').val(item.qty);
    }
    textFieldColorChange_Item();
});

$("#btnPlaceOrder").click(function (){
    generateOrderID();

});


function textFieldColorChange_Item() {
    let itemCode=$('#cmbItemIds').val();

    if (itemCode==="Select Item") {

        $("#txtItemIDForOrder,#txtItemNameForOrder,#txtItemPriceForOrder,#txtQTYONHand")
            .css("border","1px solid #ced4da");

    }else{
        $("#txtItemIDForOrder,#txtItemNameForOrder,#txtItemPriceForOrder,#txtQTYONHand")
            .css("border","2px solid green");

    }
}


function generateOrderID() {
    $("#txtOrderId").val("OID-0001");
    let orderId = order[order.length - 1].getOrderId();
    let tempId = parseInt(orderId.split("-")[1]);

           tempId = tempId+1;

    if (tempId <= 9){
        $("#txtOrderId").val("OID-000"+tempId);
    }else if (tempId <= 99) {
        $("#txtOrderId").val("OID-00" + tempId);
    }else if (tempId <= 999){
        $("#txtOrderId").val("OID-0" + tempId);
    }else {
        $("#txtOrderId").val("OID-"+tempId);
    }
}