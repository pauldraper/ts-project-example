"use strict";
exports.__esModule = true;
var Metal_1 = require("metal/Metal");
var Wheel_1 = require("wheel/Wheel");
var Car = (function () {
    function Car() {
    }
    Car.prototype.Car = function () {
        var _this = this;
        this.metal = new Metal_1["default"];
        this.wheels = [, , ,].map(function (_) { return new Wheel_1["default"](_this.metal); });
    };
    return Car;
}());
exports["default"] = Car;
