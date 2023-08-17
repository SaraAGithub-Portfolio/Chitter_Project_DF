import { check } from 'express-validator';

export const checkPeepValidation = [
    check('name').exists().isString(),
    check('timestamp').exists().isString(),
    check('peepMessage').exists().isString()
];