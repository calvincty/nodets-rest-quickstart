import { Books } from '../models';
import { Request, Response, NextFunction } from 'express';
import logger from '../config/logging';

const NAMESPACE = 'Book';

const getBooks = (req: Request, res: Response, next: NextFunction) => {
    const books = [new Books(1, "The Manager's Path"), new Books(2, 'Software Engineering at Google')];

    logger.info({
        namespace: NAMESPACE,
        message: 'Return list of books',
        data: books
    });
    res.status(200).json(books);
};

export default {
    getBooks
};
