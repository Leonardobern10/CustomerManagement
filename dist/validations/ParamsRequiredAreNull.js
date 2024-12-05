"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParamsRequiredAreNull = void 0;
var BadRequestException_1 = require("../exceptions/BadRequestException");
var ParamsRequiredAreNull = /** @class */ (function () {
    function ParamsRequiredAreNull() {
    }
    ParamsRequiredAreNull.validate = function (param) {
        if (!param) {
            throw new BadRequestException_1.BadRequestException("All parameters are required");
        }
    };
    return ParamsRequiredAreNull;
}());
exports.ParamsRequiredAreNull = ParamsRequiredAreNull;
