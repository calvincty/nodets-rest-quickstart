"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("../models");
var logging_1 = __importDefault(require("../config/logging"));
var NAMESPACE = 'Book';
var getBooks = function (req, res, next) {
    var books = [new models_1.Books(1, "The Manager's Path"), new models_1.Books(2, 'Software Engineering at Google')];
    logging_1.default.info(NAMESPACE, "Return list of books", books);
    res.status(200).json(books);
};
exports.default = {
    getBooks: getBooks
};
