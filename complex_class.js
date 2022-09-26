var complex = /** @class */ (function () {
    function complex(value1, value2) {
        this.value1 = 0;
        this.value2 = 0;
        this.value1 = value1;
        this.value2 = value2;
    }
    complex.prototype.addition = function () {
        return this.value1 + this.value2;
    };
    complex.prototype.subtraction = function () {
        return this.value1 - this.value2;
    };
    complex.prototype.multiplication = function () {
        return this.value1 * this.value2;
    };
    complex.prototype.division = function () {
        return this.value1 / this.value2;
    };
    return complex;
}());
;
var operation1 = new complex(5, 5);
console.log(operation1.addition());
