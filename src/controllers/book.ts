import { Books } from '../models';
import { Request, Response, NextFunction } from 'express';
import logging from '../config/logging';

const NAMESPACE = 'Book';

const getBooks = (req: Request, res: Response, next: NextFunction) => {
    const books = [new Books(1, "The Manager's Path"), new Books(2, 'Software Engineering at Google')];

    logging.info(NAMESPACE, `Return list of books`, books);
    res.status(200).json(books);
};

export default {
    getBooks
};
