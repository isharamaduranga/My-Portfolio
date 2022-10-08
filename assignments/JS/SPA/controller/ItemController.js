/** Save  Item Click Event Function */
$('#btnItemSave').click(function () {
    // Calling SaveItem function...
    saveItem();
});

/** Get All Customer Click Event Function */
$('#btnGetAllItem').click(function () {
    // Calling loadAllItem function...
    loadAllItem();
    setData_Bind_Row_Events_Item();
    clearTextFieldsItem();
});

/** Search Item txtItemCode id input field Key Press Function */
$('#txtItemCode').keydown(function (event) {

    if (event.key == 'Enter') {
        let inputCode = $('#txtItemCode').val();
        let item = searchItemForInputField(inputCode);

        if (item != null) {
            $('#txtItemCode').val(item.code);
            $('#txtItemName').val(item.name);
            $('#txtItemPrice').val(item.price);
            $('#txtItemQty').val(item.qty);
        }else{
            alert("There is no Item available for that "+inputCode);
        }
    }
});


/** Delete Item Click Event Function */
$('#btnDeleteItem').click(function () {

    let deleteCode = $('#txtItemCode').val();

    let option = confirm("Do you really want to delete " + deleteCode);

    if (option) {
        if (deleteItem(deleteCode)) {
            alert("Customer Successfully Deleted..");
            clearTextFieldsItem();
        }else{
            alert("No such customer to delete. please check the id");
        }
    }
});


/** Search text field bar  Key Press Function */
$('#txtSearchItem').keypress(function (event) {
    if (event.which == 13) {
        //pass the parameter of event to search item function
        searchItem(event);
    }
});

/** Search Button Clicked Function */
$('#btnSearchItem').click(function (event) {
    //pass the parameter of event to search item function
    searchItem(event);
});

/** Text Fields Key down to focus functionalities... */
//disable tab key of all input fields using grouping selector
$("#txtItemCode,#txtItemName,#txtItemPrice,#txtItemQty").keydown(function (event) {
    if (event.key == "Tab") {
        event.preventDefault();
    }
});

$('#txtItemCode').keydown(function (event) {
    if (event.which == 13) {
        $('#txtItemName').focus();
    }
});

$('#txtItemName').keydown(function (event) {
    if (event.which == 13) {
        $('#txtItemPrice').focus();
    }
});

$('#txtItemPrice').keydown(function (event) {
    if (event.which == 13) {
        $('#txtItemQty').focus();
    }
});

$('#txtItemQty').keydown(function (event) {
    if (event.which == 13) {
        saveItem();
        confirm("Do you  Want To Save Item ?");
        $('#txtItemCode').focus();
    }
});


/*************************** F U N C T I O N S ***************************/

/** SAVE ITEMS FUNCTION ... */
function saveItem() {
    /** select all the four text fields and then get their typed values */
    let ItemCode = $('#txtItemCode').val();
    let ItemName = $('#txtItemName').val();
    let ItemPrice = $('#txtItemPrice').val();
    let ItemQty = $('#txtItemQty').val();

    /**  put all of these values inside a named container  */
    var item = {
        code: ItemCode,
        name: ItemName,
        price: ItemPrice,
        qty: ItemQty
    }
    /** Add the Item object to the array */
    items.push(item);

    // Calling loadAllItem function...
    loadAllItem();

    clearTextFieldsItem();
    // Calling setData_Bind_Row_Events_Item function after the Item added...
    setData_Bind_Row_Events_Item();
}


/** LOAD ALL ITEMS FUNCTION ... */
function loadAllItem() {
    /** remove all the table body content before adding data */
    $('#itemTable').empty();

    /** get all ITEMS records from the array */
    for (let item of items) {
        /** Using String Literals to do the define row  */
        var row = ` <tr><td>${item.code}</td><td>${item.name}</td><td>${item.price}</td><td>${item.qty}</td></tr>`;

        /** then add it to the table body of Item table */
        $('#itemTable').append(row);
    }
}


/** SEARCH ITEMS FUNCTION ... */
function searchItem(event) {
    for (let item of items) {

        if (item.code === $('#txtSearchItem').val() ||
            item.name === $('#txtSearchItem').val()) {
            /* Clear Table */
            $('#itemTable').empty();
            /** search result add it to the table body of customer table */
            let row = `<tr><td>${item.code}</td><td>${item.name}</td><td>${item.price}</td><td>${item.qty}</td></tr>`;
            $('#itemTable').append(row);
        } else {
            event.preventDefault();
        }
    }
}


/** SEARCH ITEM WITH INPUT TIME FUNCTION ... */
function searchItemForInputField(code) {
    for (let item of items) {
        if (item.code == code) {
            return item;
        }
    }
    return null;
}


/** DELETE ITEM FUNCTION ... */
function deleteItem(deleteCode) {
    let item = searchItemForInputField(deleteCode);

    if (item != null) {
        //find index number for delete related item
        let indexNumber = items.indexOf(item);
        //remove that Item for matching that index(param1:startIndex/param2:deleteCount)
        items.splice(indexNumber,1);
        loadAllItem();
        setData_Bind_Row_Events_Item();
        return true;
    }else{
        return false;
    }
}


/** BIND ROW CLICK EVENT FUNCTION ... */
function setData_Bind_Row_Events_Item() {
    $('#itemTable>tr').click(function () {

        let code = $(this).children(':eq(0)').text();
        let name = $(this).children(':eq(1)').text();
        let price = $(this).children(':eq(2)').text();
        let qty = $(this).children(':eq(3)').text();

        /** setting table details values to text fields */
        $('#txtItemCode').val(code);
        $('#txtItemName').val(name);
        $('#txtItemPrice').val(price);
        $('#txtItemQty').val(qty);
    });
}


/** CLEAR TEXT FIELDS FUNCTION ... */
function clearTextFieldsItem() {
    $("#txtItemCode").focus();
    $("#txtItemCode,#txtItemName,#txtItemPrice,#txtItemQty").val("");

}

/*************************************************************************/

