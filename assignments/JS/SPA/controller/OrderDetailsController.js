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


}