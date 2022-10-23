function orderModel(oid, cid, date, total) {

    var ordID = oid;
    var cusID = cid;
    var ODate = date;
    var ordTotal = total;

    this.getOrdID=function () {
        return ordID;
    }
    this.getCusID=function () {
        return cusID;
    }
    this.getODate=function () {
        return ODate;
    }
    this.getOrdTotal=function () {
        return ordTotal;
    }

    this.setOrdID=function (newOid) {
        ordID=newOid;
    }
    this.setCusID=function (newCid) {
        cusID=newCid;
    }
    this.setODate=function (newODate) {
        ODate=newODate;
    }
    this.setOrdTotal=function (oTotal) {
        ordTotal=oTotal;
    }


}