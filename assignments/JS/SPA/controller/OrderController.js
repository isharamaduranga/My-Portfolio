


function loadAllCustomersForComboBox() {
    $('#cmbCustomerIDS').empty();
    for (let customer of customers) {
        $('#cmbCustomerIDS').append(`<option>${customer.id}</option>`);
    }
}