/** Store all the customer records */
var items=[];

/** Save  Item Click Event Function */
$('#btnItemSave').click(function () {
    // Calling SaveItem function...
    saveItem();
});

/** Get All Customer Click Event Function */
$('#btnGetAllItem').click(function () {
    // Calling loadAllItem function...
    loadAllItem();
});

/** Text Fields Key down to focus functionalities... */



/* ************************** F U N C T I O N S ************************** */

/** SAVE ITEMS FUNCTION ... */
function saveItem() {
    /** select all the four text fields and then get their typed values */
    let ItemCode = $('#txtItemCode').val();
    let ItemName = $('#txtItemName').val();
    let ItemPrice = $('#txtItemPrice').val();
    let ItemQty = $('#txtItemQty').val();

    /**  put all of these values inside a named container  */
    var item={
        code:ItemCode,
        name:ItemName,
        price:ItemPrice,
        qty:ItemQty
    }
    /** Add the Item object to the array */
    items.push(item);

    // Calling loadAllItem function...
    loadAllItem();

    // Calling setData_Bind_Row_Events function after the Item added...
    setData_Bind_Row_Events();
}

/** LOAD ALL ITEMS FUNCTION ... */
function loadAllItem() {
    /** remove all the table body content before adding data */
    $('#itemTable').empty();

    /** get all ITEMS records from the array */
    for (let item of items) {
        /** Using String Literals to do the define row  */
        var row =` <tr><td>${item.code}</td><td>${item.name}</td><td>${item.price}</td><td>${item.qty}</td></tr>`;

        /** then add it to the table body of Item table */
        $('#itemTable').append(row);
    }
}

/** BIND ROW CLICK EVENT FUNCTION ... */
function setData_Bind_Row_Events() {
    $('#itemTable>tr').click(function () {

        let code=$(this).children(':eq(0)').text();
        let name=$(this).children(':eq(1)').text();
        let price=$(this).children(':eq(2)').text();
        let qty=$(this).children(':eq(3)').text();

        /** setting table details values to text fields */
        $('#txtItemCode').val(code);
        $('#txtItemName').val(name);
        $('#txtItemPrice').val(price);
        $('#txtItemQty').val(qty);
    });
}

/* *********************************************************************** */