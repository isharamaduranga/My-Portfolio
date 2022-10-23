function ItemModel(item_code, item_name, item_price, item_qty) {

    var code = item_code;
    var name = item_name;
    var price = item_price;
    var qty = item_qty;

    this.getItemCode = function () {
        return code;
    }
    this.getItemName = function () {
        return name;
    }
    this.getItemPrice = function () {
        return price;
    }
    this.getItemQty = function () {
        return qty;
    }


    this.setItemCode=function (newCode){
        code=newCode;
    }
    this.setItemName=function (newName){
        name=newName;
    }
    this.setItemPrice=function (newPrice){
        price=newPrice;
    }
    this.setItemQty=function (newQty){
        qty=newQty;
    }


}