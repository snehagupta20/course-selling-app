import IconCodeSlash from "@/public/icons/CodeIcon";
import { CategoryCard } from "../atoms/Card";
import { MainHeading } from "../atoms/Heading";
import IconBriefcase from "@/public/icons/BriefCaseIcon";
import IconPaintbrush from "@/public/icons/PaintBrushIcon";
import IconGrowth from "@/public/icons/PersonalityDevIcon";
import IconBxsBriefcase from "@/public/icons/BuisinessNmarkettingIcon";
import { TransparentButton } from "../atoms/Button";

export default function CourseCategory(){
    return(
        <div className="" >
            <div className="flex justify-between mr-4 " >
                <MainHeading class="!text-3xl ml-4 my-8 " >Explore courses by category.</MainHeading>
                <TransparentButton class="items-center" >See All</TransparentButton>

            </div>
            <div className="grid grid-cols-4 " >
                <CategoryCard 
                    icon={<IconCodeSlash />} 
                    name="Technology & Programming" 
                />
                
                <CategoryCard 
                    icon={<IconBxsBriefcase />} 
                    name="Business & Marketing" 
                />
                
                <CategoryCard 
                    icon={<IconPaintbrush />} 
                    name="Creative Arts & Design" 
                />
                
                <CategoryCard 
                    icon={<IconGrowth />} 
                    name="Personal Development" 
                />
            
            </div>
        </div>
    )
}