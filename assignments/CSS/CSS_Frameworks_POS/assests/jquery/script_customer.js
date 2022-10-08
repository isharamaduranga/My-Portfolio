/** global scope (Store all the customer records) */
var customers = [];


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


/** Search Customer txtCustomer id input field Key Press Function */
$('#txtCusId').keydown(function (event) {
    if (event.key == "Enter") {

        let inputId = $('#txtCusId').val();
        //pass the parameter of event to search customer function
        let customer = searchCustomerForInputField(inputId);

        if (customer != null) {
            $('#txtCusId').val(customer.id);
            $('#txtCusName').val(customer.name);
            $('#txtCusAddress').val(customer.address);
            $('#txtCusSalary').val(customer.salary);
        }
        else{
            alert("There is no customer available for that"+inputId);
        }
    }
});


/** Delete Customer Click Event Function */
$('#btnDeleteCustomer').click(function () {
    let deleteID = $("#txtCusId").val();

    let option = confirm("Do you really want to delete " + deleteID);

    if (option) {
        if (deleteCustomer(deleteID)){
            alert("Customer Successfully Deleted..");
            clearTextFields();
        }else{
            alert("No such customer to delete. please check the id");
        }
    }
});


/** Update Customer Click Event Function */
function updateCustomer(cusId){


}


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



/** Text Fields Key down to focus functionalities... */
$("#txtCusId,#txtCusName,#txtCusAddress,#txtCusSalary").on('keydown', function (event) {
    if (event.key == "Tab") {
        event.preventDefault();
    }
});

$("#txtCusId").on('keydown', function (event) {

    if (event.key == "Enter") {
        $("#txtCusName").focus();
    }
});

$("#txtCusName").on('keydown', function (event) {
    if (event.key == "Enter") {
        $("#txtCusAddress").focus();
    }
});

$("#txtCusAddress").on('keydown', function (event) {
    if (event.key == "Enter") {
        $("#txtCusSalary").focus();
    }
});

$("#txtCusSalary").on('keydown', function (event) {
    if (event.key == "Enter") {

        let option = confirm("Do you  Want To Save Customer ?");

        if (option) {
            saveCustomer();
        }

        $("#txtCusId").focus();
    }
});


/*************************** F U N C T I O N S ***************************/

/** SAVE CUSTOMERS FUNCTION ... */
function saveCustomer() {
    /** select all the four text fields and then get their typed values */
    let customerID = $('#txtCusId').val();
    let customerName = $('#txtCusName').val();
    let customerAddress = $('#txtCusAddress').val();
    let customerSalary = $('#txtCusSalary').val();

    /**  put all of these values inside a named container  */
    var customer = {
        id: customerID,
        name: customerName,
        address: customerAddress,
        salary: customerSalary
    }
    /** Add the customer object to the array  */
    customers.push(customer);

    // Calling loadAllCustomers function...
    loadAllCustomers();

    clearTextFields();
    // Calling setData_Bind_Row_Events function after the customer added...
    setData_Bind_Row_Events();
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
        var row = `<tr><td>${customer.id}</td><td>${customer.name}</td><td>${customer.address}</td><td>${customer.salary}</td></tr>`;

        /** then add it to the table body of customer table */
        $('#customerTable').append(row);
    }
}


/** SEARCH CUSTOMERS FUNCTION ... */
function searchCustomer(event) {
    for (let customer of customers) {
        if (customer.id === $('#txtSearchCustomer').val() ||
            customer.name === $('#txtSearchCustomer').val()) {
            /* Clear Table */
            $('#customerTable').empty();

            /** search result add it to the table body of customer table */
            let row = `<tr><td>${customer.id}</td><td>${customer.name}</td><td>${customer.address}</td><td>${customer.salary}</td></tr>`;
            $('#customerTable').append(row);
        } else {
            event.preventDefault();
        }
    }
}


/** SEARCH CUSTOMERS WITH INPUT TIME FUNCTION ... */
function searchCustomerForInputField(cusId){

    for (let customer of customers) {
        if(customer.id==cusId){
            return customer;
        }
    }
    return null;
}


/** DELETE CUSTOMERS FUNCTION ... */
function deleteCustomer(cusId){
    let customer = searchCustomerForInputField(cusId);

    if (customer!= null) {
        let IndexNumber = customers.indexOf(customer);
        customers.splice(IndexNumber,1);
        loadAllCustomers();
        setData_Bind_Row_Events();
        return true;

    }else{
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
    $('#txtCusId').val("");
    $('#txtCusName').val("");
    $('#txtCusAddress').val("");
    $('#txtCusSalary').val("");
}


/*************************************************************************/






