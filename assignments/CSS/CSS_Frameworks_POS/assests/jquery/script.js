$('#btnCustomerSave').click(function () {

    let customerID = $('#txtCusId').val();
    let customerName = $('#txtCusName').val();
    let customerAddress = $('#txtCusAddress').val();
    let customerSalary = $('#txtCusSalary').val();




    /*  put all of these values   */
        var customer={
            id:"C001",
            name:"ishara",
            address:"Nittambuwa",
            salary:120000,
        }

       console.log(customer);

});

