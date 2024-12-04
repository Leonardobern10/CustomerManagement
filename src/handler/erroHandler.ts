import { NextFunction, Request, Response } from 'express';
import { BaseException } from '../exceptions/BaseExceptions';

export function errorHandler(
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) {
    if (err instanceof BaseException) {
        console.error(err.message);
        res.status(err.statusCode).json({
            error: err.name,
            message: err.message,
        });
    } else {
        console.error(err.message);
        res.status(500).json({
            error: 'InternalServerException',
            message: 'An unexpected error occurred.',
        });
    }
}
