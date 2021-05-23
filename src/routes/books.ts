import express from 'express';
import controller from '../controllers/book';

const router = express.Router();

router.get('/', controller.getBooks);
router.get('/:id', controller.getBookById);

export = router;
