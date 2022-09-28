
var items=[];
/** Save  Item Click Event Function */
$('#btnItemSave').click(function () {
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
    /** Add the Item object to the array  */
    items.push(item);
    console.log(items);

});

