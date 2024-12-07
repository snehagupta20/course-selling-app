import express from 'express';
import sellerRouter from './seller.js';
import userRouter from './user.js';

const router = express.Router();

router.use('/seller',sellerRouter );
router.use('/user',userRouter);


const mainRouter = router;
export default mainRouter;