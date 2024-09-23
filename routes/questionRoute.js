import {Router} from 'express'
import { createQuestion, getAll } from '../controllers/questionController.js';

const router = Router();

router.post('/create', createQuestion)
router.get("/getAll", getAll)

export default router