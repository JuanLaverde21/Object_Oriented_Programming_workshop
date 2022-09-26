var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var vehicle = /** @class */ (function () {
    function vehicle(brand, color, type, serialNumber) {
        this.brand = "";
        this.color = "";
        this.type = "";
        this.serialNumber = 0;
        this.brand = brand;
        this.color = color;
        this.type = type;
        this.serialNumber = serialNumber;
    }
    vehicle.prototype.turn = function () {
        return "Encendido ";
    };
    vehicle.prototype.start = function () {
        return "Arrancando ";
    };
    vehicle.prototype.turnOff = function () {
        return "Apagado";
    };
    return vehicle;
}());
;
var motorcycle = /** @class */ (function (_super) {
    __extends(motorcycle, _super);
    function motorcycle(licensePlate, cylinderCapacity, brand, color, type, serialNumber) {
        var _this = _super.call(this, brand, color, type, serialNumber) || this;
        _this.licensePlate = "";
        _this.cylinderCapacity = 0;
        _this.licensePlate = licensePlate;
        _this.cylinderCapacity = cylinderCapacity;
        return _this;
    }
    motorcycle.prototype.speed = function () {
        return "I am fast";
    };
    motorcycle.prototype.capacity = function () {
        return "I am full";
    };
    return motorcycle;
}(vehicle));
var moto = new motorcycle("UUQ881", 100, "AKT", "Negro", "hibrido", 211095);
console.log(moto.capacity());
var car = /** @class */ (function (_super) {
    __extends(car, _super);
    function car(model, reference, brand, color, type, serialNumber) {
        var _this = _super.call(this, brand, color, type, serialNumber) || this;
        _this.model = 0;
        _this.reference = "";
        _this.model = model;
        _this.reference = reference;
        return _this;
    }
    car.prototype.sale = function () {
        return "its sold";
    };
    car.prototype.rent = function () {
        return "Its rented";
    };
    return car;
}(vehicle));
var car1 = new car(2021, "Optra", "Chevrolet", "Negro", "hibrido", 211095);
console.log(car1.sale());
