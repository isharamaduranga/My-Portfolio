/** ==================================== D E F I N E D   V A L I D A T I O N S ===================================*/
/** customer regular expressions */
/*  Focused customerID input field When Firstly open that page..*/
$('#txtCusId').focus();

const cusIdRegEx = /^(C00-)[0-9]{1,3}$/;
const cusNameRegEx = /^[A-z ]{5,20}$/;
const cusAddressRegEx = /^[0-9/A-z. ,]{7,}$/;
const cusSalaryRegEx = /^[0-9]{1,}[.]?[0-9]{1,2}$/;

/* Defined Validation Array */
let customerValidationArray = [];

/* Pushed regex pattern , related Input field Object & error massage to the Array */
customerValidationArray.push({
    reg: cusIdRegEx,
    field: $('#txtCusId'),
    error: 'Customer ID Pattern is Wrong Format: C00-001'
});
customerValidationArray.push({
    reg: cusNameRegEx,
    field: $('#txtCusName'),
    error: 'Customer Name Pattern is Wrong Format: A-z 5-20'
});
customerValidationArray.push({
    reg: cusAddressRegEx,
    field: $('#txtCusAddress'),
    error: 'Customer Address Pattern is Wrong Format: A-z 0-9 ,/'
});
customerValidationArray.push({
    reg: cusSalaryRegEx,
    field: $('#txtCusSalary'),
    error: 'Customer Salary Pattern is Wrong Format: 1000 or 1000.00'
});


/** Text Fields Key down to Tab & prevent Default function.. */
$("#txtCusId,#txtCusName,#txtCusAddress,#txtCusSalary").on('keydown', function (event) {
    if (event.key == "Tab") {
        event.preventDefault();
    }
});

/** Text Fields Key Up to Check validation function.. */
$("#txtCusId,#txtCusName,#txtCusAddress,#txtCusSalary").on('keyup', function (event) {
    checkCustomerValidation();

});

/** Text Fields blur to Check validation function.. */
$("#txtCusId,#txtCusName,#txtCusAddress,#txtCusSalary").on('blur', function (event) {
    checkCustomerValidation();

});

/** Text Fields Key down to focus and validate functionalities... */
$("#txtCusId").on('keydown', function (event) {

    if (event.key == "Enter" && check(cusIdRegEx, $("#txtCusId"))) {
        $("#txtCusName").focus();
    } else {
        $("#txtCusId").focus();
    }
});

$("#txtCusName").on('keydown', function (event) {
    if (event.key == "Enter" && check(cusNameRegEx, $("#txtCusName"))) {
        $("#txtCusAddress").focus();
    }
});

$("#txtCusAddress").on('keydown', function (event) {
    if (event.key == "Enter" && check(cusAddressRegEx, $("#txtCusAddress"))) {
        $("#txtCusSalary").focus();
    }
});

$("#txtCusSalary").on('keydown', function (event) {
    if (event.key == "Enter" && check(cusSalaryRegEx, $('#txtCusSalary'))) {

        let option = confirm("Do you  Want To Save Customer ?");

        if (option) {
            saveCustomer();
        }

        $("#txtCusId").focus();
    }
});

/** function of CheckCustomer Validation Event  */
function checkCustomerValidation() {
    let errorCount = 0;
    for (let validate of customerValidationArray) {
        if (check(validate.reg, validate.field)) {
            // to write success event
            successEvent(validate.field, "");


        } else {
            /* Increase error count when find a error*/
            errorCount = errorCount + 1;
            // to write error event
            errorEvent(validate.field, validate.error)
        }
    }
    setButtonState(errorCount);
}

/** function of Check Event  */
function check(regPattern, textField) {
    if (regPattern.test(textField.val())) {
        return true;
    } else {
        return false;
    }
}

/** function of Success Event  */
function successEvent(textField, massage) {
    if (textField.val().length <= 0) {
        //calling default text function...
        defaultText(textField, "");
    } else {
        textField.css("border", "3px solid #049104FF");
        textField.parent().children('span').text(massage);
    }
}

/** function of Error Event  */
function errorEvent(textField, error) {
    if (textField.val().length <= 0) {
        //calling default text function...
        defaultText(textField, "");
    } else {
        textField.css('border', '3px solid red');
        textField.parent().children('span').text(error);
    }
}

/** function of Default text */
function defaultText(txtField, massage) {
    txtField.css("border", "2px solid #ced4da");
    txtField.parent().children('span').text(massage);
}

/** function of Button State */
function setButtonState(count) {
    if (count > 0) {
        $("#btnCustomerSave").attr('disabled', true);
    } else {
        $("#btnCustomerSave").attr('disabled', false);
    }
}

/** ================================================================================================================ */


/** Save  Customer Click Event Function */
$('#btnCustomerSave').click(function () {//local scope // function scope
    saveCustomer();

});


/** Get All Customer Click Event Function */
$('#btnGetAllCustomer').click(function () {
    loadAllCustomers();
    setData_Bind_Row_Events();
    clearTextFields();
});

/** Search Customer txtCustomer id input field Key Down Function */
$('#txtCusId').keydown(function (event) {
    if (event.key == "Enter") {

        let inputId = $('#txtCusId').val();
        //pass the parameter of event to search customer function
        let customer = searchCustomerForInputField(inputId);

        if (customer != null) {

            //Calling setTextFieldValueFromCustomer function
            setTextFieldValueFromCustomer(customer.getCustomerId(),customer.getCustomerName(),customer.getAddress(),customer.getSalary());
            alert("This Item "+customer.getCustomerId()+" Already Exists...");
        } else {
            alert("There is no customer available for that " + inputId);

        }
    }
});


/** Delete Customer Click Event Function */
$('#btnDeleteCustomer').click(function () {
    let deleteID = $("#txtCusId").val();

    let option = confirm("Do you really want to delete " + deleteID);

    if (option) {
        if (deleteCustomer(deleteID)) {
            alert("Customer Successfully Deleted..");
            clearTextFields();
        } else {
            alert("No such customer to delete. please check the id");
        }
    }
});


/** Update Customer Click Event Function */
$('#btnUpdateCustomer').click(function () {

    let cusID = $('#txtCusId').val();
    let option = updateCustomer(cusID);
    if (option) {
        alert("Customer Updated Successfully");
    } else {
        alert("Update Failed..! Something went wrong..");
    }


});


/** Search text field bar Key Press Function */
$('#txtSearchCustomer').keypress(function (event) {
    if (event.key == "Enter") {
        //pass the parameter of event to search customer function
        searchCustomer(event);
    }
});


/** Search Button Clicked Function */
$('#btnSearchCustomer').click(function (event) {
    //pass the parameter of event to search customer function
    searchCustomer(event);
});

/** Clear Button Clicked Function */
$('#btnClearCustomer').click(function () {
    clearTextFields();
});

/****************************** F U N C T I O N S   A L L   C R U D   O P E R A T I O N S ***************************/

/** SAVE CUSTOMERS FUNCTION ... */
function saveCustomer() {
    /** select all the four text fields and then get their typed values */
    let customerID = $('#txtCusId').val();
    let customerName = $('#txtCusName').val();
    let customerAddress = $('#txtCusAddress').val();
    let customerSalary = $('#txtCusSalary').val();



    /**  put all of these values inside a named container  */
    var customer = new customerModel(customerID,customerName,customerAddress,customerSalary);

    /** Add the customer object to the array  */
    customers.push(customer);

    // Calling loadAllCustomers function...
    loadAllCustomers();

    clearTextFields();
    // Calling setData_Bind_Row_Events function after the customer added...
    setData_Bind_Row_Events();

    /** Load  All customer IDS with Order Form customer Id ComboBox */
    loadAllCustomersForComboBox();
}


/** LOAD ALL CUSTOMERS FUNCTION ... */
function loadAllCustomers() {

    /** remove all the table body content before adding data */
    $('#customerTable').empty();

    /** get all customers records from the array */
    for (var customer of customers) {

        /** add those data to the table row */
        // var row ="<tr><td>"+customer.id+"</td><td>"+customer.name+"</td><td>"+customer.address+"</td><td>"+customer.salary+"</td></tr>" ;

        /** Using String Literals to do the same thing as above  */
        var row = `<tr><td>${customer.getCustomerId()}</td><td>${customer.getCustomerName()}</td><td>${customer.getAddress()}</td><td>${customer.getSalary()}</td></tr>`;

        /** then add it to the table body of customer table */
        $('#customerTable').append(row);
    }
}

/** SET TEXT FIELD VALUES */
function setTextFieldValueFromCustomer(id, name, address, salary) {
    $('#txtCusId').val(id);
    $('#txtCusName').val(name);
    $('#txtCusAddress').val(address);
    $('#txtCusSalary').val(salary);
}

/** SEARCH CUSTOMERS FUNCTION ... */
function searchCustomer(event) {
    for (let customer of customers) {
        if (customer.getCustomerId() === $('#txtSearchCustomer').val() ||
            customer.getCustomerName() === $('#txtSearchCustomer').val()) {
            /* Clear Table */
            $('#customerTable').empty();

            /** search result add it to the table body of customer table */
            let row = `<tr><td>${customer.getCustomerId()}</td><td>${customer.getCustomerName()}</td><td>${customer.getAddress()}</td><td>${customer.getSalary()}</td></tr>`;
            $('#customerTable').append(row);
        } else {
            event.preventDefault();
        }
    }
}


/** SEARCH CUSTOMERS WITH INPUT TIME FUNCTION ... */
function searchCustomerForInputField(cusId) {

    for (let customer of customers) {
        if (customer.getCustomerId() == cusId) {
            return customer;
        }
    }
    return null;
}


/** UPDATE CUSTOMERS FUNCTION ... */
function updateCustomer(cusId) {
    let customer = searchCustomerForInputField(cusId);

    if (customer != null) {
        customer.setCustomerId($('#txtCusId').val());
        customer.setCustomerName($('#txtCusName').val());
        customer.setCustomerAddress($('#txtCusAddress').val());
        customer.setCustomerSalary($('#txtCusSalary').val());
        loadAllCustomers();
        setData_Bind_Row_Events();
        clearTextFields();
        return true;
    } else {
        return false;
    }

}


/** DELETE CUSTOMERS FUNCTION ..*/
function deleteCustomer(cusId) {
    let customer = searchCustomerForInputField(cusId);

    if (customer != null) {
        //find index number for delete related customer
        let IndexNumber = customers.indexOf(customer);
        //remove that Customer for matching that index(param1:startIndex/param2:deleteCount)
        customers.splice(IndexNumber, 1);
        loadAllCustomers();
        setData_Bind_Row_Events();
        loadAllCustomersForComboBox();
        return true;

    } else {
        return false;
    }

}


/** BIND ROW CLICK EVENT FUNCTION ... */
function setData_Bind_Row_Events() {
    $('#customerTable>tr').click(function () {
        let id = $(this).children(":eq(0)").text();
        let name = $(this).children(":eq(1)").text();
        let address = $(this).children(":eq(2)").text();
        let salary = $(this).children(":eq(3)").text();

        /** setting table details values to text fields */
        $('#txtCusId').val(id);
        $('#txtCusName').val(name);
        $('#txtCusAddress').val(address);
        $('#txtCusSalary').val(salary);
    });
    /** Remove Selected Row when double clicked */
    $("#customerTable>tr").on('dblclick', function () {
        $(this).remove();
    });
}


/** CLEAR TEXT FIELDS FUNCTION ... */
function clearTextFields() {
    $("#txtCusId").focus();
    $("#txtCusId,#txtCusName,#txtCusAddress,#txtCusSalary").val("");

}


/*************************************************************************************************************************/