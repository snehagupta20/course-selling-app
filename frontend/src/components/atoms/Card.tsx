import React from "react";
import { SubHeading } from "./Heading";

interface FeatureCardProps {
    class ?: string,
    name : string,
    pClass ?: string,
    headingClass ?: string,
    icon : React.ReactNode,
    p : string,
}

export function FeatureCard(props : FeatureCardProps){
    return(
        <div className={`bg-beige flex flex-col w-[20rem] border-2 border-black p-8 m-4 rounded-2xl ${props.class}`}>
            <div className="pb-4" >{props.icon}</div>
            <SubHeading class={` pb-4 ${props.headingClass}`} >{props.name}</SubHeading>
            <p className={`text-sm ${props.pClass}`}>{props.p}</p>
        </div>
    );
};

interface CategoryCardProps {
    icon : React.ReactNode,
    name : string,
}
export function CategoryCard(props : CategoryCardProps){
    return(
        <div className="bg-beige flex flex-col w-[15rem] border-2 border-black pb-10 m-4 rounded-2xl text-center items-center justify-center py-4 " >
            <div className="rounded-full bg-black m-4 w-min p-4" >{props.icon}</div>
            <SubHeading class="!text-base font-medium" >{props.name}</SubHeading>
        </div>
    );
};

interface CourseCardProps {

}
export function CourseCard(props : CourseCardProps){
    return(
        <div>
            <div>
                <div>
                    {/* icon, level, heading  */}
                </div>
                <div>
                    {/* description  */}
                </div>
            </div>
            {/* horizontal line  */}
            <div>
                {/* ul of author, price, hours, ceriticate or not, download  */}
            </div>
        </div>
    );
};