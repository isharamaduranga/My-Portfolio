/** global scope (Store all the customer records) */
var customers = [];

/** Save  Customer Click Event Function */
$('#btnCustomerSave').click(function () {
    //local scope // function scope

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
    console.log(customers);

    // Calling loadAllCustomers function...
    loadAllCustomers();

});

$("#customerTable>tr").click(function () {
    alert("heloo");
});


/** Get All Customer Click Event Function */
$('#btnGetAllCustomer').click(function () {

    // Calling loadAllCustomers function...
    loadAllCustomers();
});

/** load all customers */
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




