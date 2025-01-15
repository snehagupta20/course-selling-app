
import NavbarCourse from "../../../components/organs/courses/NavbarCourse";
import FilterBy from "../../../components/organs/courses/FilterBySideBar";

export default function CourseHomePage(){
    return(
        <div>
            <NavbarCourse/>
            <div className="flex " >
                <FilterBy/>
            </div>
        </div>
    );
};