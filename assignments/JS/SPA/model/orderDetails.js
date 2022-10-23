function orderDetailsModel(oid, date, cid, cname, i_code, i_name, o_qty, dis, total) {

    var orderID = oid;
    var date_Od = date;
    var customerId = cid;
    var customerName = cname;
    var itemCode = i_code;
    var itemName = i_name;
    var orderQty = o_qty;
    var discount = dis;
    var fullTotal = total;


    this.getOrderID=function () {
        return orderID;
    }

    this.getDate_Od=function () {
        return date_Od;
    }

    this.getCustomerId=function () {
        return customerId;
    }

    this.getCustomerName=function () {
        return customerName;
    }

    this.getItemCode=function () {
        return itemCode;
    }

    this.getItemName=function () {
        return itemName;
    }

    this.getOrderQty=function () {
        return orderQty;
    }

    this.getDiscount=function () {
        return discount;
    }

    this.getFullTotal=function () {
        return fullTotal;
    }



    this.setOrderID=function (oid) {
         orderID=oid;
    }

    this.setDate_Od=function (oDate) {
         date_Od=oDate;
    }

    this.setCustomerId=function (cId) {
         customerId=cId;
    }

    this.setCustomerName=function (cName) {
         customerName=cName;
    }

    this.setItemCode=function (iCode) {
         itemCode=iCode;
    }

    this.setItemName=function (iName) {
         itemName=iName;
    }

    this.setOrderQty=function (oQty) {
         orderQty=oQty;
    }

    this.setDiscount=function (disc) {
         discount=disc;
    }

    this.setFullTotal=function (tot) {
         fullTotal=tot;
    }



}