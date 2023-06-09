import express from 'express';
import { visitorInfoFetch, createVisitor, deleteVisitor } from '../controllers/visitorControllers.js';

const router = express.Router();

router.get('/visitor-info', visitorInfoFetch);

router.post('/new-visitor-:id', createVisitor);

router.delete('/delete-visitor', deleteVisitor);

export default router;