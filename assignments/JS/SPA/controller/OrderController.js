

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

