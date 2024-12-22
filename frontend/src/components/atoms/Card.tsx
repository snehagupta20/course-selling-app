import React from "react";
import { SubHeading, MainHeading, GraySmallHeading } from "./Heading";
import Image from 'next/image';
// import {GraySmallHeading} from '../atoms/Heading';
import IconPerson from '../../public/icons/PersonIcon';
import IconCertificate from '../../public/icons/CertificateIcon';
import IconClock from '../../public/icons/ClockIcon';
import IconRupee from '../../public/icons/RupeeIcon';

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

interface CourseCardFeatureProps {
    title : string,
    icon : React.ReactNode,
    class ?: string,
}
export function CourseCardFeature(props : CourseCardFeatureProps){
    return(
        <div className="flex items-center mb-2 mr-2" >
            {/* icon  */}
            <div className={`border border-black rounded-full p-2 mr-2 ${props.class}`} >{props.icon}</div>
            <p>{props.title}</p>
        </div>
    );
};

interface CourseCardProps {
    thumbnail : string,
    alt : string,
    level : string,
    title : string,
    description : string,
    author : string,
    hours : string,
    price : string,
}
export function CourseCard(props : CourseCardProps){
    return(
        <div className="w-[40rem] flex m-4 border-2 border-black p-4 rounded-2xl bg-beige " >
            <div className="border border-black w-[15rem] m-4" >
                {/* thumbnail */}
                <Image height={10} width={10} src={props.thumbnail} alt={props.alt} />
            </div>
            
            <div className="m-4" >
                <div>
                    {/* level, heading description */}
                    <GraySmallHeading>{props.level}</GraySmallHeading>
                    <MainHeading class="font-medium" >{props.title}</MainHeading>
                    <p className="tracking-wider" >{props.description}</p>
                </div>

                {/* horizontal line  */}
                <p className="font-bold" >_______________________</p>

                <div className="grid grid-cols-2 pt-4 " >
                    {/* ul of author, price, hours, ceriticate  */}
                    <CourseCardFeature
                        icon={<IconPerson />}
                        title={props.author}
                    />

                    <CourseCardFeature
                        icon={<IconClock />}
                        title={props.hours}
                    />

                    <CourseCardFeature
                        icon={<IconRupee />}
                        title={props.price}
                    />

                    <CourseCardFeature
                        class="p-1"
                        icon={<IconCertificate height="1.5em" width="1.5em" />}
                        title="Certificate"
                    />

                </div>
            </div>
        </div>
    );
};