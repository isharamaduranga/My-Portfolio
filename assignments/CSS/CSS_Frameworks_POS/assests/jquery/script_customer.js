/** global scope (Store all the customer records) */
var customers = [];

/** Save  Customer Click Event Function */
$('#btnCustomerSave').click(function () {//local scope // function scope

    saveCustomer();
});

/** Get All Customer Click Event Function */
$('#btnGetAllCustomer').click(function () {

    loadAllCustomers();
});

/** Text Fields Key down to focus functionalities... */
$("#txtCusId,#txtCusName,#txtCusAddress,#txtCusSalary").on('keydown',function (event) {
    if(event.key=="Tab"){
        event.preventDefault();
    }
});

$("#txtCusId").on('keydown',function (event) {

    if(event.key=="Enter"){
        $("#txtCusName").focus()
    }
});

$("#txtCusName").on('keydown',function (event) {
    if(event.key=="Enter"){
        $("#txtCusAddress").focus()
    }
});

$("#txtCusAddress").on('keydown',function (event) {
    if(event.key=="Enter"){
        $("#txtCusSalary").focus()
    }
});

$("#txtCusSalary").on('keydown',function (event) {
    if(event.key=="Enter"){
        saveCustomer();
        confirm("Do you  Want To Save Customer ?")
        $("#txtCusId").focus()
    }
});

/* ************************** F U N C T I O N S ************************** */
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
        salary: customerSalary,
    }
    /** Add the customer object to the array  */
    customers.push(customer);

    // Calling loadAllCustomers function...
    loadAllCustomers();

    // Calling setData_Bind_Row_Events function after the customer added...
    setData_Bind_Row_Events()
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


/** BIND ROW CLICK EVENT FUNCTION ... */
function setData_Bind_Row_Events(){
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
    $("#customerTable>tr").on('dblclick',function () {
        $(this).remove();
    });
}

/* *********************************************************************** */






