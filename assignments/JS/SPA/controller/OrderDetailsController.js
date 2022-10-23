function loadingOrder() {
    loadOrderTable();
    loadOrderDetailsTable();
}

/** Order Table functionalities */
function loadOrderTable() {
    $('#orderTable').empty();

    for (var o of order) {

        let row1 = `<tr><td>${o.getOrdID()}</td><td>${o.getCusID()}</td><td>${o.getODate()}</td><td>${o.getOrdTotal()}</td></tr>`;
        $('#orderTable').append(row1);
    }

}
/** Order Details Table functionalities */
function loadOrderDetailsTable() {
    $('#orderDetailTable').empty();

    for (var d of orderDetails) {
        let row2 = `<tr>
        <td>${d.getOrderID()}</td>
        <td>${d.getDate_Od()}</td>
        <td>${d.getCustomerId()}</td>
        <td>${d.getCustomerName()}</td>
        <td>${d.getItemCode()}</td>
        <td>${d.getItemName()}</td>
        <td>${d.getOrderQty()}</td>
        <td>${d.getDiscount()}</td>
        <td>${d.getFullTotal()}</td>
        </tr>`;

        $('#orderDetailTable').append(row2);
    }
}