import { getPing } from '../controllers/ping';
import { Router } from 'express';
import { unsupportedUrl } from '../controllers/unsuportedUrl';
import { crypt, decrypt } from '../controllers/crypt';
import { getRequestBodyValidator } from '../controllers/validators';
import { cryptValidator } from '../validators/crypt';

const router = Router();

router.post('/crypt', getRequestBodyValidator(cryptValidator), crypt);
router.post('/decrypt', getRequestBodyValidator(cryptValidator), decrypt);


router.get('/ping', getPing);

router.use('*', unsupportedUrl);

export default router;
