import { Books } from '../models';
import { Request, Response, NextFunction } from 'express';
import logger from '../config/logging';

const NAMESPACE = 'Book';
const books = [new Books(1, "The Manager's Path"), new Books(2, 'Software Engineering at Google')];

const getBooks = (req: Request, res: Response, next: NextFunction) => {
    logger.info({
        namespace: NAMESPACE,
        message: 'Return list of books',
        data: books
    });
    res.status(200).json(books);
};

const getBookById = (req: Request, res: Response, next: NextFunction) => {
    let book = books.find((x) => x.id === parseInt(req.params.id));
    if (book) {
        logger.info({
            namespace: NAMESPACE,
            message: `Returning data of book -> ID: ${book.id}, Title: ${book.name}`,
            data: book
        });
        res.status(200).json(book);
    } else {
        logger.info({
            namespace: NAMESPACE,
            message: `Book ID ${req.params.id} not found`
        });
        res.status(404).json({
            message: 'Book not found'
        });
    }
};

export default {
    getBooks,
    getBookById
};
