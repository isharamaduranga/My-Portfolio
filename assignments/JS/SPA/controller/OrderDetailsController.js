function loadingOrder() {
    loadOrderTable();
    loadOrderDetailsTable();
}

function loadOrderTable() {
    $('#orderTable').empty();

    for (var o of order) {

     let row1 = `<tr><td>${o.ordID}</td><td>${o.cusID}</td><td>${o.date}</td><td>${o.ordTotal}</td></tr>`;
        $('#orderTable').append(row1);
    }

}

function loadOrderDetailsTable() {
    $('#orderDetailTable').empty();

    for (var d of orderDetails) {
        let row2 = `<tr>
        <td>${d.orderID}</td>
        <td>${d.date}</td>
        <td>${d.customerId}</td>
        <td>${d.customerName}</td>
        <td>${d.itemCode}</td>
        <td>${d.itemName}</td>
        <td>${d.orderQty}</td>
        <td>${d.discount}</td>
        <td>${d.fullTotal}</td>
        </tr>`;

        $('#orderDetailTable').append(row2);
    }
}