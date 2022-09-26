
var customers=[];

$('#btnCustomerSave').click(function () {

    let customerID = $('#txtCusId').val();
    let customerName = $('#txtCusName').val();
    let customerAddress = $('#txtCusAddress').val();
    let customerSalary = $('#txtCusSalary').val();


    /*  put all of these values   */
    var customer = {
        id: customerID,
        name: customerName,
        address: customerAddress,
        salary: customerSalary,
    }
    customers.push(customer);
    console.log(customers);

    $('#customerTable').empty();
    for (var customer of customers) {
        console.log(customer);
        var row ="<tr><td>"+customer.id+"</td><td>"+customer.name+"</td><td>"+customer.address+"</td><td>"+customer.salary+"</td></tr>" ;

        $('#customerTable').append(row);
    }



});

$('#btnGetAllCustomer').click(function () {

    $('#customerTable').empty();
    for (var customer of customers) {
        console.log(customer);
        var row ="<tr><td>"+customer.id+"</td><td>"+customer.name+"</td><td>"+customer.address+"</td><td>"+customer.salary+"</td></tr>" ;

        $('#customerTable').append(row);
    }

});

$('#tbl>td>tr').click(function () {
    alert("helooo");
});

/*
// Arrays
var myName = ['amal', 'kamlal', 'sugath', 'vimal'];
console.log(myName[0]);
console.log(myName[1]);
console.log(myName[2]);
console.log(myName[3]);


var ages = [10, 20, 30, 40];
console.log(ages[0]);
console.log(ages[1]);
console.log(ages[2]);
console.log(ages[3]);

var customers = [];
customers.push("A");
customers.push("B");
customers.push("C");
customers.push("D");
console.log(customers);

//(remove the last indexed value of Array)
customers.pop();
console.log(customers);

customers.pop();
console.log(customers);*/

/*

console.log('--------------- FOR LOOP ---------------------------');

for (var i = 0; i < 10; i++) {
    console.log(i);
}

console.log('--------------- WHILE ---------------------------');

var i=0;
while (i<10){
    i++;
    console.log(i);
}

console.log('-----------------DO WHILE-------------------------');

var i=0;

do {
    console.log(i);
    i++
}while (i<10);


*/

/*
console.log('-----------------------------------------------------------------');
var arrays=[10,20,30,40,50,60,70,80,90];

/!*
for (var j = 0; j < arrays.length; j++) {
    console.log(arrays[j]);
}
*!/
/!*
for (var i of arrays){
    console.log(i);
}
*!/

for (var i in arrays){
    console.log(i);
}

console.log('==================================');

for (var i in arrays){
    console.log(i,arrays[i]);
}*/
