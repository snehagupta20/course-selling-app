import express from 'express';
import zod from 'zod';
import { Seller } from '../model/seller.model.js';
import jwt from 'jsonwebtoken';
import { User } from '../model/user.model.js';

const router = express.Router();

// validating input using zod
const signupBody = zod.object({
    name : zod.string(),
    age : zod.number(),
    interests : zod.array(zod.string()),
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
    const userExists = await User.findOne(
        { emailId : body.emailId },
    );    
    if(userExists){
        res.status(411).json({
            message : "This Email-id alredy Exists.",
        });
    };

    // if they do not exists, then add them to the db
    const seller = await User.create({
        name : body.name,
        age : body.age,
        interests : body.interests,
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
    const userExists = await User.findOne({
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

})

const userRouter = router;
export default userRouter