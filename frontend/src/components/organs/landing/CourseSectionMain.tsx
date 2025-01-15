import { MainHeading } from "../../atoms/Heading";
import CourseCategory from "./CourseCategory";
import axios from "axios";
import {BACKEND_URL} from '../../../app/config';
import {CourseCard} from '../../atoms/Card'
import {YellowButton} from '../../atoms/Button';

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
    };

    interface CourseId{
        courseId : string,
        name : string,
    };

    let courseId:CourseId[] = [];
    // let course:Course[] = [];
    let course: Array<{courseDetail : Course, author : string}> = [];


    async function fetchCourses(){
        let response = await axios.get(`${BACKEND_URL}/api/v1/seller/getSeller`);
        let sellers=response.data.seller;

        for(let i=0;i<sellers.length;i++){
            if(sellers[i].courses.length>0){
                courseId.push({
                    name : sellers[i].name,
                    courseId : sellers[i].courses[0],
                });
            }
        }

        for(let i=0;i<courseId.length;i++){
            let id = courseId[i].courseId;

            let courseDetail = await axios.get(`${BACKEND_URL}/api/v1/seller/course/courseDetail?id=${id}`);

            let temp = {
                courseDetail : courseDetail.data.course,
                author : courseId[i].name,
            }

            course.push(temp);

            if(course.length == 5) break;
        }
    };

    await fetchCourses();

    return(
        <section className="bg-light-pink-beige h-[100vh] flex flex-col items-center" >
            <CourseCategory/>
            <MainHeading class="mt-8 text-4xl" >Learn & Build.</MainHeading>
            <div className="flex flex-col m-4" >
                {course.map((val)=>(
                    <CourseCard
                        thumbnail={val.courseDetail.thumbnail}
                        title={val.courseDetail.title}
                        description={val.courseDetail.description}
                        price={`${val.courseDetail.cost} Rs.`}
                        hours={`${val.courseDetail.hours} Hours`}
                        alt="Thumbnail"
                        level={val.courseDetail.level}
                        author={val.author}
                    />
                ))}
            </div>
            <YellowButton>See all Courses</YellowButton>
        </section>
    );
};