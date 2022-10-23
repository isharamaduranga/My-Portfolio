
function customerModel(Cus_id,Cus_name ,Cus_address,Cus_salary) {

    var id = Cus_id;
    var name = Cus_name;
    var address = Cus_address;
    var salary = Cus_salary;

    this.getCustomerId = function () {
        return id;
    }
    this.getCustomerName = function () {
        return name;
    }
    this.getAddress = function () {
        return address;
    }
    this.getSalary = function () {
        return salary;
    }

    this.setCustomerId=function (newId) {
        id=newId;
    }

    this.setCustomerName=function (newName) {
        name=newName;
    }

    this.setCustomerAddress=function (newAddress) {
        address=newAddress;
    }

    this.setCustomerSalary=function (newSalary) {
        salary=newSalary;
    }

}