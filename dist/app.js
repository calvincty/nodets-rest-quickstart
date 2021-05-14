"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var config_1 = __importDefault(require("./config/config"));
var logging_1 = __importDefault(require("./config/logging"));
var books_1 = __importDefault(require("./routes/books"));
var router = express_1.default();
var NAMESPACE = 'Server';
/** Log the request */
router.use(function (req, res, next) {
    logging_1.default.info(NAMESPACE, req.method + " " + req.url + " " + req.socket.remoteAddress);
    res.on('finish', function () {
        logging_1.default.info(NAMESPACE, req.method + " " + req.url + " " + req.socket.remoteAddress + " " + res.statusCode);
    });
    next();
});
/** API rules */
router.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});
router.use(express_1.default.urlencoded({ extended: true }));
router.use(express_1.default.json());
/** Routes */
router.use('/api/books', books_1.default);
/** Error handling */
router.use(function (req, res, next) {
    var error = new Error('Not found');
    res.status(404).json({
        message: error.message
    });
});
router.listen(config_1.default.server.port, function () {
    logging_1.default.info(NAMESPACE, "Server is listenting at " + config_1.default.server.port);
});
