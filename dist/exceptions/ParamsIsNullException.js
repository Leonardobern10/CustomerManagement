"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParamsIsNullException = void 0;
var BaseExceptions_1 = require("./BaseExceptions");
var ParamsIsNullException = /** @class */ (function (_super) {
    __extends(ParamsIsNullException, _super);
    function ParamsIsNullException(message) {
        if (message === void 0) { message = 'Param(s) has value null'; }
        var _this = _super.call(this, message, 400) || this;
        _this.name = 'ParamsIsNullException';
        return _this;
    }
    return ParamsIsNullException;
}(BaseExceptions_1.BaseException));
exports.ParamsIsNullException = ParamsIsNullException;
