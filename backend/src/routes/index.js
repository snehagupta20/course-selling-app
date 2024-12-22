import express from 'express';
import sellerRouter from './seller.js';
import userRouter from './user.js';
// import courseRouter from './couse.js'

const router = express.Router();

router.use('/seller',sellerRouter );
router.use('/user',userRouter);
// router.use('/course',courseRouter);


const mainRouter = router;
export default mainRouter;