import express from 'express';
import zod from 'zod';
import { Seller } from '../model/seller.model.js';
import jwt from 'jsonwebtoken';
import courseRouter from './course.js';

const router = express.Router();

router.use('/course', courseRouter);

// validating input using zod
const signupBody = zod.object({
    name : zod.string(),
    profession : zod.string(),
    experience: zod.number(),
    emailId : zod.string().email().toLowerCase(),
    password: zod.string().min(6, {message : "Minimum of 6 characters are required for a password."}),
})

router.post('/signup', async (req, res) => {
    // take inputs from reqest
    const body = req.body;

    // check if the inputs are valid, like correct email or valid password
    const {success, error} = signupBody.safeParse(body);
    if(!success){
        return res.status(411).json({
            message : "Incorrect inputs. Please check again.",
            error : error,
        });
    }

    // check if inputs alredy exists in the db
    const userExists = await Seller.findOne(
        { emailId : body.emailId },
    );    
    if(userExists){
        res.status(411).json({
            message : "This Email-id alredy Exists.",
        });
    };

    // if they do not exists, then add them to the db
    const seller = await Seller.create({
        name : body.name,
        profession : body.profession,
        experience : body.experience,
        emailId : body.emailId,
        password : body.password,
    });

    // token will have username & pass in the jwt
    const emailId = body.emailId;
    const password = body.password;

    const token = jwt.sign({emailId, password}, process.env.JWT_SECRET);

    // return affirmative sentence and token or error 
    return res.status(200).json({
        message : "User Logged in successfuly!! :)",
        token : token,
    });
    
});

router.post('/login', async (req, res) => {
    const body = req.body;

    // check if user exists
    const userExists = await Seller.findOne({
        emailId : body.emailId,
        password : body.password
    });

    // make token
    const emailId = body.emailId;
    const password = body.password;
    const token = jwt.sign({emailId, password}, process.env.JWT_SECRET);

    // if exist, then send token
    if(userExists){
        return res.status(200).json({
            message : "User logged in successfully!! :)",
            token : token
        });
    }

    // if not exist, send dont exist, and ask to signup
    return res.status(411).json({
        message : "Email-id does not exists, please Sign-up"
    })

});

router.get('/getSeller', async (req, res) => {
    try{    
        const sellers = await Seller.find();
        if(sellers){
            return res.status(200).json({
                message : "sellers present in db : ",
                seller : sellers,
            })
        }
    } catch (error){
        return res.status(411).json({
            message : "sellers not found in db",
            error : error,
        })
    }
});

const sellerRouter = router;
export default sellerRouter;