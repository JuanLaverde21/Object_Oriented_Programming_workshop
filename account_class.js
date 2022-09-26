var account = /** @class */ (function () {
    function account(amount, holderName, creationDate) {
        this.amount = 0;
        this.holderName = "";
        this.creationDate = new Date();
        this.amount = amount;
        this.holderName = holderName;
        this.creationDate = creationDate;
    }
    account.prototype.entry = function () {
        return "Su ingreso es de " + this.amount;
    };
    account.prototype.refund = function () {
        return "Su reintrego es de " + this.amount;
    };
    account.prototype.transfer = function () {
        return "Realizo una transferencias por " + this.amount;
    };
    return account;
}());
;
var client1 = new account(50000, "Juan Laverde", new Date());
console.log(client1.entry());
