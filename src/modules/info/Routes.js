import { Router } from 'express';
import info from './info.js';
const router = Router();

router.post('/', info);

export default router;