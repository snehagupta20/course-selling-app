import { MainHeading } from "../atoms/Heading";
import CourseCategory from "./CourseCategory";
import axios from "axios";
import {BACKEND_URL} from '../../app/config';

export default function CourseSectionMain(){


    async function fetchCourses(){
        // console.log("inside fetc course");
        try {
            const res = await axios.get(`${BACKEND_URL}/api/v1/user/course/allCourses`);
            console.log(res.data.courses);
    
        } catch (error) {
            console.log("error while fetching ALL courses", error);
        }
    }

    // console.log("calling fetc course");
    fetchCourses();


    return(
        <section className="bg-light-pink-beige h-[100vh] flex flex-col items-center" >
            <CourseCategory/>
            <MainHeading>Leave 9-5 by joining one of our courses</MainHeading>
            <div>
                {/* json of courses  */}
            </div>
        </section>
    );
};