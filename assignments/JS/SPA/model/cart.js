function cartModel(cartOID, cartItemCode, cartItemName, cartItemPrice, orderQty, cartTotal) {

    var cartOid = cartOID;
    var cartICode = cartItemCode;
    var cartIName = cartItemName;
    var cartIPrice = cartItemPrice;
    var cartOrderQty = orderQty;
    var cartTotal = cartTotal;

    this.getCartOid = function () {
        return cartOid;
    }
    this.getCartICode = function () {
        return cartICode;
    }
    this.getCartIName = function () {
        return cartIName;
    }
    this.getCartIPrice = function () {
        return cartIPrice;
    }
    this.getCartOrderQty = function () {
        return cartOrderQty;
    }
    this.getCartTotal = function () {
        return cartTotal;
    }


    this.setCartOid = function (newOid) {
        cartOid = newOid;
    }
    this.setCartICode = function (newICode) {
        cartICode = newICode;
    }
    this.setCartIName = function (newIName) {
        cartIName = newIName;
    }
    this.setCartIPrice = function (newIPrice) {
        cartIPrice = newIPrice;
    }
    this.setCartOrderQty = function (newOdQty) {
        cartOrderQty = newOdQty;
    }
    this.setCartTotal = function (newTotal) {
        cartTotal = newTotal;
    }
}