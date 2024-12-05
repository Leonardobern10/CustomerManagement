import { Customer } from '../entities/Customer';
import { BadRequestException } from '../exceptions/BadRequestException';

export class ParamsRequiredAreNull {
    static validate = (param: string | Customer | null) => {
        if (!param) {
            throw new BadRequestException(`All parameters are required`);
        }
    };
}
