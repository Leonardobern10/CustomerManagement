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
exports.InternalServerException = void 0;
var BaseExceptions_1 = require("./BaseExceptions");
var InternalServerException = /** @class */ (function (_super) {
    __extends(InternalServerException, _super);
    function InternalServerException(message) {
        if (message === void 0) { message = 'Internal Server Error'; }
        return _super.call(this, message, 500) || this;
    }
    return InternalServerException;
}(BaseExceptions_1.BaseException));
exports.InternalServerException = InternalServerException;
