import React from 'react';

import { CategoryCard } from "../../atoms/Card";
import { MainHeading } from "../../atoms/Heading";
import { TransparentButton } from "../../atoms/Button";

import COURSECATEGORY from "../../../data/courseCategory.json";

import IconBriefcase from "@/public/icons/BriefCaseIcon";
import IconPaintbrush from "@/public/icons/PaintBrushIcon";
import IconGrowth from "@/public/icons/PersonalityDevIcon";
import IconBxsBriefcase from "@/public/icons/BuisinessNmarkettingIcon";
import IconCodeSlash from "@/public/icons/CodeIcon";

type IconName = 'IconPaintbrush' | 'IconGrowth' | 'IconBxsBriefcase' | 'IconCodeSlash';

const iconMapping = {
    IconPaintbrush,
    IconGrowth,
    IconBxsBriefcase,
    IconCodeSlash,
}

export default function CourseCategory(){
    return(
        // <div  >
        <div className="bg-beige border-[1.5px] border-y-black flex flex-col items-center w-full p-12" >
            <div className='w-max'>
                <div className="flex justify-between items-center mx-5 mb-6 " >
                    <MainHeading class="!text-3xl" >Explore courses by category.</MainHeading>
                    <TransparentButton class="items-center" >See All</TransparentButton>

                </div>
                <div className="grid grid-cols-4 " >

                    {COURSECATEGORY.CourseCategory.map((val) => {
                        return (
                            <CategoryCard
                                icon={React.createElement(iconMapping[val.icon as IconName])}
                                name={val.name}
                            />
                        );
                    })}
                
                </div>
            </div>
        </div>
    )
}