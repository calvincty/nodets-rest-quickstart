import { transports, createLogger, format, Logger } from 'winston';

const logger: Logger = createLogger({
    format: format.combine(format.timestamp(), format.json()),
    transports: [new transports.Console(), new transports.File({ filename: 'logs/combined.log' })]
});

export = logger;
