import { MainHeading } from "../atoms/Heading";
import CourseCategory from "./CourseCategory";
import axios from "axios";
import {BACKEND_URL} from '../../app/config';
import {CourseCard} from '../atoms/Card'
import {YellowButton} from '../atoms/Button';

export default async function CourseSectionMain(){
    interface Course {
        level: string;
        _id: string;
        title: string;
        description: string;
        thumbnail: string;
        cost: number;
        hours: number;
        tags:string[];
    }

    let courseId:string[] = [];
    let course:Course[] = [];


    async function fetchCourses(){
        let response = await axios.get(`${BACKEND_URL}/api/v1/seller/getSeller`);
        let sellers=response.data.seller;

        for(let i=0;i<sellers.length;i++){
            if(sellers[i].courses.length>0){
                courseId.push(sellers[i].courses[0]);
            }
        }

        for(let i=0;i<courseId.length;i++){
            let id = courseId[i];

            let courseDetail = await axios.get(`${BACKEND_URL}/api/v1/seller/course/courseDetail?id=${id}`);

            course.push(courseDetail.data.course);

            if(course.length == 5) break;
        }
    };

    await fetchCourses();

    // console.log(course);

    return(
        <section className="bg-light-pink-beige h-[100vh] flex flex-col items-center" >
            <CourseCategory/>
            <MainHeading class="mt-8 text-4xl" >Learn & Build.</MainHeading>
            <div className="flex flex-col m-4" >
                {course.map((val)=>(
                    <CourseCard
                        thumbnail={val.thumbnail}
                        title={val.title}
                        // description={val.description}
                        description="lorem32"
                        price={`${val.cost} Rs.`}
                        hours={`${val.hours} Hours`}
                        alt="sss"
                        level={val.level}
                        author="ss ss ss"
                    />
                ))}
            </div>
            <YellowButton>See all Courses</YellowButton>
        </section>
    );
};