import { check, validationResult } from 'express-validator';
import User from '../models/user.model.js';

export const userValidationRules = () => {
    return [
        check('name.firstName').isLength({ min: 2 }).withMessage('First name should be at least 2 characters long.'),
        check('name.lastName').isLength({ min: 2 }).withMessage('Last name should be at least 2 characters long.'),
        check('username').notEmpty().withMessage('Username is required.'),
        check('email').isEmail().withMessage('Invalid email format.'),
        check('email').custom(async (email, { req }) => {
            const user = await User.findOne({ email });
            if (user) {
                throw new Error('User already exists');
            }
        }),
        check('password').notEmpty().withMessage('Password is required.')
    ];
}

export const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }

    const firstError = errors.array()[0].msg;

    return res.status(422).json({
        errors: errors.array(),
        message: firstError
    });
}
