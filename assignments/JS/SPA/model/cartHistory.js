function cartHistoryModel(cartOID,cartItemCode,cartItemName,cartItemPrice,orderQty,cartTotal) {
    return{
        tempOid: cartOID,
        tempICode: cartItemCode,
        tempIName: cartItemName,
        tempIPrice: cartItemPrice,
        tempOrderQty: orderQty,
        tempTotal: cartTotal
    };
}