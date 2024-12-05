"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerExists = void 0;
var NotFoundException_1 = require("../exceptions/NotFoundException");
var CustomerExists = /** @class */ (function () {
    function CustomerExists() {
    }
    CustomerExists.validate = function (customer) {
        if (!customer) {
            throw new NotFoundException_1.NotFoundException('Customer not found.');
        }
    };
    return CustomerExists;
}());
exports.CustomerExists = CustomerExists;
