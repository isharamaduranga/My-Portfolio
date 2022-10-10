

function loadAllCustomersForComboBox() {
    $('#cmbCustomerIDS').empty();
    for (let customer of customers) {
        $('#cmbCustomerIDS').append(`<option>${customer.id}</option>`);
    }
}

function loadAllItemsForComboBox() {
    $('#cmbItemIds').empty();
    for (let item of items) {
        $('#cmbItemIds').append(`<option>${item.code}</option>`);
    }
}

$('#cmbCustomerIDS').change(function () {
    let cusID=$('#cmbCustomerIDS').val()
    let customer = searchCustomerForInputField(cusID);
    if (customer != null) {

        $('#txtCusIdForOrder').val(customer.id);
        $('#txtCusNameForOrder').val(customer.name);
        $('#txtCusSalaryForOrder').val(customer.salary);
        $('#txtAddressForOrder').val(customer.address);
    }
});

$('#cmbItemIds').change(function () {
    let code=$('#cmbItemIds').val();
    let item = searchItemForInputField(code);

    if (item != null) {
        $('#txtItemIDForOrder').val(item.code);
        $('#txtItemNameForOrder').val(item.name);
        $('#txtItemPriceForOrder').val(item.price);
        $('#txtQTYONHand').val(item.qty);

    }
})


