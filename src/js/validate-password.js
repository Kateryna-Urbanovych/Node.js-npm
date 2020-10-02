import Joi from 'joi';

const passShema = Joi.string().min(3).max(10);

export default function validatePassword(password) {
    return passShema.validate('password');
}
