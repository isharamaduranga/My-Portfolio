function cartModel(cartOID,cartItemCode,cartItemName,cartItemPrice,orderQty,cartTotal) {
    return{
        CartOid: cartOID,
        cartICode: cartItemCode,
        cartIName: cartItemName,
        cartIPrice: cartItemPrice,
        cartOrderQty: orderQty,
        cartTotal: cartTotal
    };
}