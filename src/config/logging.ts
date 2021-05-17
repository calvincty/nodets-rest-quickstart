import { transports, createLogger, format, Logger } from 'winston';
import { MongoDB } from 'winston-mongodb';
import config from '../config/config';

const logger: Logger = createLogger({
    format: format.combine(format.errors({ stack: true }), format.json(), format.metadata()),
    transports: [
        new transports.Console(),
        new MongoDB({
            db: `mongodb://${config.mongodb.user}:${config.mongodb.pwd}@${config.mongodb.host}:${config.mongodb.port}/${config.mongodb.logdb}`,
            options: {
                useUnifiedTopology: true
            },
            collection: 'server_log'
        })
        // new transports.File({ filename: 'logs/combined.log' })
    ]
});

export = logger;
