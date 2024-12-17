import { MainHeading } from "../atoms/Heading";
import CourseCategory from "./CourseCategory";

export default function CourseSectionMain(){
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