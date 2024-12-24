import React from 'react';

import { CategoryCard } from "../atoms/Card";
import { MainHeading } from "../atoms/Heading";
import { TransparentButton } from "../atoms/Button";

import COURSECATEGORY from "../../data/courseCategory.json";

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
        <div className="" >
            <div className="flex justify-between mr-4 " >
                <MainHeading class="!text-3xl ml-4 my-8 " >Explore courses by category.</MainHeading>
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
    )
}