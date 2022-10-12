function orderModel(oid, cid, date, total) {
    return{
        ordID: oid,
        cusID: cid,
        itmPrice: date,
        ordTotal: total
    };
}