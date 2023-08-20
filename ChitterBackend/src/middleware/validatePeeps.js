import { check } from 'express-validator';

export const validatePeeps = [
    check('name').exists().isString(),
    check('timestamp').exists().isString(),
    check('message')
        .exists()
        .isString()
        .isLength({ max: 280 })
        .withMessage('Message is too long')

];