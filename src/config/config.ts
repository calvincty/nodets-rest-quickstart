import dotenv from 'dotenv';

dotenv.config();

const config = {
    server: {
        port: process.env.SERVER_PORT || 3000
    },
    mongodb: {
        user: process.env.MONGODB_USER,
        pwd: process.env.MONGODB_PWD,
        host: process.env.MONGODB_HOST,
        port: process.env.MONGODB_PWD,
        logdb: process.env.LOG_DB
    }
};

export = config;
