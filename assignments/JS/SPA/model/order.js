function orderModel(oid, cid, date, total) {
    return{
        ordID: oid,
        cusID: cid,
        date: date,
        ordTotal: total
    };
}