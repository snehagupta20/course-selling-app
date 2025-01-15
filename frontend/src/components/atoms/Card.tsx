import React from "react";
import { SubHeading, MainHeading, GraySmallHeading } from "./Heading";
import Image from 'next/image';
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
        <div className="flex items-center mb-2 mr-5" >
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
                <Image height={10} width={10} src={props.thumbnail} alt={props.alt} />
            </div>
            
            <div className="m-4" >
                <div>
                    <GraySmallHeading>{props.level}</GraySmallHeading>
                    <MainHeading class="font-medium" >{props.title}</MainHeading>
                    <p className="tracking-wider" >{props.description}</p>
                </div>

                <p className="font-bold" >_______________________</p>

                <div className="grid grid-cols-2 pt-4 " >
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
                        class="p-[0.3rem]"
                        icon={<IconCertificate height="1.5em" width="1.5em" />}
                        title="Certificate"
                    />

                </div>
            </div>
        </div>
    );
};

interface TeacherCardProps{
    src:string,
    alt:string,
    profession:string,
    name:string,
}

export function TeacherCard(props : TeacherCardProps){
    return(
        <div className="flex flex-col p-4 m-4" >
            <div className="" >
                <Image className="rounded-xl" src={props.src} alt={props.alt} height={300} width={300}/>
            </div>
            <div className="m-2 p-4" >
                <GraySmallHeading>{props.profession}</GraySmallHeading>
                <SubHeading>{props.name}</SubHeading>
            </div>
        </div>
    );
};

interface ReviewCardProps{
    // src : string,
    name : string,
    review : string,
    stars : number,
}

export function ReviewCard(props : ReviewCardProps){
    const maxStars = 5;
    return(
        <div className="rounded-xl border-2 border-black flex bg-light-pink-beige p-4 m-4 w-[35rem] h-[14.5rem] " >
            <div className="rounded-xl m-4 bg-black h-[10rem] w-[10rem]">
                {/* image  */}
                {/* <Image src={props.src} alt={props.name} height={100} width={100}></Image> */}
            </div>
            <div className="flex flex-col p-4 text-left w-[20rem]">
                <div className="flex items-center mb-2">
                    <MainHeading class="mr-3">{props.name}</MainHeading>
                    {/* star div  */}
                    <div>
                        {Array.from({length : maxStars}, (_, index) => (
                            <span key={index} className={index < props.stars ? " text-yellow-500 " : "" } >★</span>
                        ))}
                    </div>
                </div>
                <p className="text-sm mb-4">{`"${props.review}`}</p>
                <hr className="font-bold border border-black" />
            </div>
        </div>
    );
}; 


interface CoursePageCourseCardProps {
    thumbnail : string,  
    alt : string,
    level : string,
    title : string,
    description : string,
    author : string,
    hours : string,
    price : string,
}
export function CoursePageCourseCard(props : CoursePageCourseCardProps){
    return(
        <div className="w-[40rem] flex m-4 border-2 border-black p-4 rounded-2xl bg-beige " >
            <div className="border border-black w-[15rem] m-4" >
                <Image height={10} width={10} src={props.thumbnail} alt={props.alt} />
            </div>
            
            <div className="m-4" >
                <div>
                    <GraySmallHeading>{props.level}</GraySmallHeading>
                    <MainHeading class="font-medium" >{props.title}</MainHeading>
                    <p className="tracking-wider" >{props.description}</p>
                </div>

                <p className="font-bold" >_______________________</p>

                <div className="grid grid-cols-2 pt-4 " >
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
                        class="p-[0.3rem]"
                        icon={<IconCertificate height="1.5em" width="1.5em" />}
                        title="Certificate"
                    />

                </div>
            </div>
        </div>
    );
};