import Joi from 'joi';

export const createNotificationSchema = Joi.object({
    userId: Joi.string().required(),
    message: Joi.string().min(1).required()
});
