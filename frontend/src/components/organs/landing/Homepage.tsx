import { MainHeading } from "../../atoms/Heading";
import Image from "next/image";
import photo from "../../../public/girl_using_ipad_home.avif";
import { YellowButton } from "../../atoms/Button";
import people from "../../../public/people-cirle.png";

interface HomePageProps{

}

export default function HomePage(props : HomePageProps){
    return(
        <div className="bg-beige flex m-auto h-[90vh] justify-between items-center  " >
            <div className="p-4 ml-16 mx-8 w-[40%] ">
                <MainHeading class="!text-6xl my-4" >Unlock skills. <br/> Create new life. </MainHeading>
                <MainHeading class="!text-xl my-4 mb-8 !font-normal " >Good Course offers professionals tech courses from the leading teachers in their industries.</MainHeading>
                <div className="flex items-center" >
                    <YellowButton class="mr-8">Explore courses</YellowButton>
                    <Image height={30} src={people} alt="people" ></Image>
                    <MainHeading class="!text-sm" >Trusted by over 10,000 students</MainHeading>
                </div>
            </div>
            <div className="mr-16 border-[3px] border-black rounded-3xl" >
                <Image className="rounded-3xl" height={400} src={photo} alt="girl holding ipad"></Image>
            </div>
        </div>
    );
};