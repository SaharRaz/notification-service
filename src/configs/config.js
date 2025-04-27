import dotenv from 'dotenv';
dotenv.config();

export const env = {
    PORT: process.env.PORT || 5003,
    MONGO_URI: process.env.MONGO_URI,
};
