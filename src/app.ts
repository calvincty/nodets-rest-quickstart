import express from 'express';
import config from './config/config';
import logging from './config/logging';
import bookRouter from './routes/books';

const router = express();
const NAMESPACE = 'Server';

/** Log the request */
router.use((req, res, next) => {
    logging.info(NAMESPACE, `${req.method} ${req.url} ${req.socket.remoteAddress}`);

    res.on('finish', () => {
        logging.info(NAMESPACE, `${req.method} ${req.url} ${req.socket.remoteAddress} ${res.statusCode}`);
    });

    next();
});

/** API rules */
router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }

    next();
});

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

/** Routes */
router.use('/api/books', bookRouter);

/** Error handling */
router.use((req, res, next) => {
    const error = new Error('Not found');

    res.status(404).json({
        message: error.message
    });
});
router.listen(config.server.port, () => {
    logging.info(NAMESPACE, `Server is listenting at ${config.server.port}`);
});
