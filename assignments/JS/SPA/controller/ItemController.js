/** ==================================== D E F I N E D   V A L I D A T I O N S ===================================*/
/** Item regular expressions */
/*  Focused Item Code input field When Firstly open that page..*/
$('#txtItemCode').focus();

const itemCodeRegEx = /^(I00-)[0-9]{1,3}$/;
const itemNameRegEx = /^[A-z ]{5,20}$/;
const itemPriceRegEx = /^[0-9]{1,}[.]?[0-9]{1,2}$/;
const itemQtyRegEx = /^[0-9]{1,7}$/;

let itemValidationArray = [];

itemValidationArray.push({
    reg: itemCodeRegEx,
    field: $('#txtItemCode'),
    error: 'Item Code Pattern is Wrong Format: I00-001'
});
itemValidationArray.push({
    reg: itemNameRegEx,
    field: $('#txtItemName'),
    error: 'Item Name Pattern is Wrong Format: A-z 5-20'
});
itemValidationArray.push({
    reg: itemPriceRegEx,
    field: $('#txtItemPrice'),
    error: 'Item Price Pattern is Wrong Format: 1000 or 1000.00'
});
itemValidationArray.push({
    reg: itemQtyRegEx,
    field: $('#txtItemQty'),
    error: 'Item Qty Pattern is Wrong Format: 0-9 {0,7}'
});

/** Text Fields Key down to Tab & prevent Default function.. */
$("#txtItemCode,#txtItemName,#txtItemPrice,#txtItemQty").on('keydown', function (event) {
    if (event.key == "Tab") {
        event.preventDefault();
    }
});
/** Text Fields Key Up to Check validation function.. */
$("#txtItemCode,#txtItemName,#txtItemPrice,#txtItemQty").on('keyup', function (event) {

    checkItemValidation();

});
/** Text Fields blur to Check validation function.. */
$("#txtItemCode,#txtItemName,#txtItemPrice,#txtItemQty").on('blur', function (event) {
    checkItemValidation();
});


/** Text Fields Key down to focus functionalities... */

$('#txtItemCode').on('keydown',function (event) {
    if (event.key == "Enter" && checkItem(itemCodeRegEx, $("#txtItemCode"))) {
        $("#txtItemName").focus();
    } else {
        $("#txtItemCode").focus();
    }
});

$('#txtItemName').on('keydown',function (event) {
    if (event.key == "Enter"  && checkItem(itemNameRegEx, $("#txtItemName"))) {
        $('#txtItemPrice').focus();
    }
});

$('#txtItemPrice').on('keydown',function (event) {
    if (event.key == "Enter"  && checkItem(itemPriceRegEx, $("#txtItemPrice"))) {
        $('#txtItemQty').focus();
    }
});

$('#txtItemQty').on('keydown',function (event) {
    if (event.key == "Enter"  && checkItem(itemQtyRegEx, $("#txtItemQty"))) {

        let option = confirm("Do you  Want To Save Item ?");
        if (option) {
            saveItem();
        }
        $('#txtItemCode').focus();
    }
});

/** function of CheckItem Validation Event  */
function checkItemValidation() {
    let errorCountItem = 0;
    for (let validateItem of itemValidationArray) {
        if (checkItem(validateItem.reg, validateItem.field)) {

            successEventItem(validateItem.field, "");

        } else {
            /* Increase error count when find a error*/
            errorCountItem=errorCountItem+1;
            // to write error event
            errorEventItem(validateItem.field, validateItem.error);
        }
    }
    setButtonState_Item(errorCountItem);
}

/** function of Check item Event  */
function checkItem(regex, field) {
    if (regex.test(field.val())) {
        return true;
    } else {
        return false;
    }
}

/** function of Success Event  */
function successEventItem(textField, massage) {
    if (textField.val().length <= 0) {
        defaultTextItem(textField, "");
    } else {
    textField.css("border","3px solid #049104FF");
    textField.parent().children('span').text(massage);
    }
}

/** function of Error Event  */
function errorEventItem(textField, error) {
    if (textField.val().length <= 0) {
        defaultTextItem(textField, "");
    } else {
        textField.css("border","3px solid red");
        textField.parent().children('span').text(error);
    }
}

/** function of Default text */
function defaultTextItem(textField,text) {
    textField.css("border", "2px solid #ced4da");
    textField.parent().children('span').text(text);
}

/** function of Button State */
function setButtonState_Item(count) {
    if (count>0) {
        $("#btnItemSave").attr('disabled', true);
    }else {
        $("#btnItemSave").attr('disabled', false);
    }
}
/** ================================================================================================================ */


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
          // Calling setTextFieldValueFromItem function
            setTextFieldValueFromItem(item.getItemCode(),item.getItemName(),item.getItemPrice(),item.getItemQty());
            alert("This customer "+item.getItemCode()+" Already Exists...");

        } else {
            alert("There is no Item available for that " + inputCode);

        }
    }
});

$('#btnUpdateItem').click(function () {
    let code = $('#txtItemCode').val();
    let option = updateItem(code);
    if (option) {
        alert("Item Updated Successfully");
    } else {
        alert("Update Failed..! Something went wrong..");
    }
})

/** Delete Item Click Event Function */
$('#btnDeleteItem').click(function () {

    let deleteCode = $('#txtItemCode').val();

    let option = confirm("Do you really want to delete " + deleteCode);

    if (option) {
        if (deleteItem(deleteCode)) {
            alert("Customer Successfully Deleted..");
            clearTextFieldsItem();
        } else {
            alert("No such customer to delete. please check the id");
        }
    }
});


/** Search text field bar Key Pressed Function */
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


/** Clear Button Clicked Function */
$('#btnClearItem').click(function () {
    clearTextFieldsItem();
});


/*************************** F U N C T I O N S  A L L   C R U D   O P E R A T I O N S ***************************/

/** SAVE ITEMS FUNCTION ... */
function saveItem() {
    /** select all the four text fields and then get their typed values */
    let ItemCode = $('#txtItemCode').val();
    let ItemName = $('#txtItemName').val();
    let ItemPrice = $('#txtItemPrice').val();
    let ItemQty = $('#txtItemQty').val();

    /**  put all of these values inside a named container  */
    var item = new ItemModel(ItemCode,ItemName,ItemPrice,ItemQty);
    /** Add the Item object to the array */
    items.push(item);

    // Calling loadAllItem function...
    loadAllItem();

    clearTextFieldsItem();
    // Calling setData_Bind_Row_Events_Item function after the Item added...
    setData_Bind_Row_Events_Item();

    /** Load  All Item Codes with Order Form Item Id ComboBox */
    loadAllItemsForComboBox();
}


/** LOAD ALL ITEMS FUNCTION ... */
function loadAllItem() {
    /** remove all the table body content before adding data */
    $('#itemTable').empty();

    /** get all ITEMS records from the array */
    for (let item of items) {
        /** Using String Literals to do the define row  */
        var row = `<tr><td>${item.getItemCode()}</td><td>${item.getItemName()}</td><td>${item.getItemPrice()}</td><td>${item.getItemQty()}</td></tr>`;

        /** then add it to the table body of Item table */
        $('#itemTable').append(row);
    }
}

/** SET TEXT FIELD VALUES */
function setTextFieldValueFromItem(code, name, price, qty) {
    $('#txtItemCode').val(code);
    $('#txtItemName').val(name);
    $('#txtItemPrice').val(price);
    $('#txtItemQty').val(qty);
}

/** SEARCH ITEMS FUNCTION ... */
function searchItem(event) {
    for (let item of items) {

        if (item.getItemCode() === $('#txtSearchItem').val() ||
            item.getItemName() === $('#txtSearchItem').val()) {
            /* Clear Table */
            $('#itemTable').empty();
            /** search result add it to the table body of customer table */
            let row = `<tr><td>${item.getItemCode()}</td><td>${item.getItemName()}</td><td>${item.getItemPrice()}</td><td>${item.getItemQty()}</td></tr>`;
            $('#itemTable').append(row);
        } else {
            event.preventDefault();
        }
    }
}


/** SEARCH ITEM WITH INPUT TIME FUNCTION ... */
function searchItemForInputField(code) {
    for (let item of items) {
        if (item.getItemCode() == code) {
            return item;
        }
    }
    return null;
}


/** UPDATE ITEM FUNCTION ... */
function updateItem(itemCode) {
    let item = searchItemForInputField(itemCode);
    if (item != null) {

        item.setItemCode($('#txtItemCode').val());
        item.setItemName($('#txtItemName').val());
        item.setItemPrice($('#txtItemPrice').val());
        item.setItemQty($('#txtItemQty').val());

        loadAllItem();
        setData_Bind_Row_Events_Item();
        clearTextFieldsItem();
        return true;
    } else {
        return false;
    }
}


/** DELETE ITEM FUNCTION ... */
function deleteItem(deleteCode) {
    let item = searchItemForInputField(deleteCode);

    if (item != null) {
        //find index number for delete related item
        let indexNumber = items.indexOf(item);
        //remove that Item for matching that index(param1:startIndex/param2:deleteCount)
        items.splice(indexNumber, 1);
        loadAllItem();
        setData_Bind_Row_Events_Item();
        loadAllItemsForComboBox();
        return true;
    } else {
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

/*************************************************************************************************************************/

