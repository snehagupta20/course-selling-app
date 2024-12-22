import express from 'express';
import zod from 'zod';
import auth from '../../middleware.js';
import { Seller } from '../model/seller.model.js';
import { Course } from '../model/course.model.js';
import { User } from '../model/user.model.js';

const router = express.Router();

const courseBody = zod.object({
    title : zod.string(),
    description : zod.string().optional(),
    thumbnail : zod.string().url({message : "Please enter the valid image URL."}).optional(),
    cost : zod.number(),
    hours : zod.number(),
    tags : zod.array(zod.string()),
});

// seller's 
router.post('/addcourse', auth, async (req, res) => {
    const body = req.body;
    const emailId = req.emailId;
    
    // check if user's email id exists in seller's db
    const userExists = await Seller.findOne(
        {emailId : req.emailId}
    );
    if(!userExists){
        return res.status(411).json({
            message : "User is not Authorised to add the courses."
        });
    };

    // check if all inputs are valid or not
    const {success, error} = courseBody.safeParse(body);
    if(!success){
        return res.status(411).json({
            message : "Please enter the valid inputs.",
            error : error,
        });
    };

    // add course
    const course = await Course.create({
        title : body.title,
        description : body.description,
        thumbnail : body.thumbnail,
        cost : body.cost,
        hours : body.hours,
        tags : body.tags,

    });

    const courseId = course._id;

    // adding course in seller's array
    await Seller.updateOne(
        {emailId : emailId},
        {$push : {courses : courseId}}
    );

    return res.status(200).json({
        message : "Course created successfully!!",
        owner : emailId,
    });

});

router.get('/getcourse', auth , async (req, res) => {
    const emailId = req.emailId;
    const coursesArray = await Seller.findOne(
        {emailId : emailId},
        {courses : 1}
    ); 

    let courseDetail = [];

    for(let i=0; i<coursesArray.courses.length; i++){
        const course = await Course.findOne({_id : coursesArray.courses[i]});
        courseDetail.push(course);
    }

    return res.status(200).json({
        message : "Here are the list of courses : ",
        courses : coursesArray,
        courseDetail : courseDetail,
    });
    
});

// buyer's
router.get('/allcourses', async (req,res) => {
    const courses = await Course.find();
    console.log(courses);

    return res.status(200).json({
        message : "all of the courses present in db: ",
        courses : courses,
    });
});

router.post('/:courseid', auth , async (req, res) => {
    const courseid = req.params.courseid.split(':')[1].toString();  
    console.log(courseid);

    const emailId = req.emailId;
    console.log(emailId);

    await User.updateOne(
        {emailId : emailId},
        {$push : {courses : courseid }}
    );
    
    return res.status(200).json({
        message : "Course purchased successfully.",
    });
});

router.get('/purchasedcourses', auth, async (req, res) => {
    const emailId = req.emailId;
    const coursesArray = await User.findOne(
        {emailId : emailId},
        {courses : 1}
    ); 

    let courseDetail = [];

    for(let i=0; i<coursesArray.courses.length; i++){
        const course = await Course.findOne({_id : coursesArray.courses[i]});
        courseDetail.push(course);
    }

    return res.status(200).json({
        message : "Here are the list of courses : ",
        courses : coursesArray,
        courseDetail : courseDetail,
    });
})

const courseRouter = router;
export default courseRouter;