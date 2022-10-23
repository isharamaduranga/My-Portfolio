function invoiceModel(oid, cid, name, sal, add, dte) {

    var ODD_ID = oid;
    var CUS_ID = cid;
    var CUS_NAME = name;
    var CUS_SAL = sal;
    var CUS_ADD = add;
    var CUS_DATE = dte;

    this.getODD_ID =function () {
        return ODD_ID;
    }
    this.getCUS_ID =function () {
        return CUS_ID;
    }
    this.getCUS_NAME =function () {
        return CUS_NAME;
    }
    this.getCUS_SAL =function () {
        return CUS_SAL;
    }
    this.getCUS_ADD =function () {
        return CUS_ADD;
    }
    this.getCUS_DATE =function () {
        return CUS_DATE;
    }

    this.setODD_ID = function (oid) {
        ODD_ID=oid;
    }
    this.setCUS_ID = function (cid) {
        CUS_ID=cid;
    }
    this.setCUS_NAME = function (cname) {
        CUS_NAME=cname;
    }
    this.setCUS_SAL = function (sal) {
        CUS_SAL=sal;
    }
    this.setCUS_ADD = function (address) {
        CUS_ADD=address;
    }
    this.setCUS_DATE = function (date) {
        CUS_DATE=date;
    }
}