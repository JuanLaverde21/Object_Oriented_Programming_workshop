var counter = /** @class */ (function () {
    function counter(initialNumber, finalNumber) {
        this.initialNumber = 0;
        this.finalNumber = 0;
        this.initialNumber = initialNumber;
        this.finalNumber = finalNumber;
    }
    counter.prototype.increase = function () {
        while (this.initialNumber <= this.finalNumber) {
            alert("El numero es: " + this.initialNumber);
            this.initialNumber = this.initialNumber + 1;
        }
        ;
    };
    counter.prototype.decrease = function () {
        while (this.initialNumber >= this.finalNumber) {
            alert("El numero es: " + this.initialNumber);
            this.initialNumber = this.initialNumber - 1;
        }
        ;
    };
    return counter;
}());
;
var num = new counter(2, 5);
console.log(num.increase);
