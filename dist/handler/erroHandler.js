"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = errorHandler;
var BaseExceptions_1 = require("../exceptions/BaseExceptions");
function errorHandler(err, req, res, next) {
    if (err instanceof BaseExceptions_1.BaseException) {
        console.error(err.message);
        res.status(err.statusCode).json({
            error: err.name,
            message: err.message,
        });
    }
    else {
        console.error(err.message);
        res.status(500).json({
            error: 'InternalServerException',
            message: 'An unexpected error occurred.',
        });
    }
}
