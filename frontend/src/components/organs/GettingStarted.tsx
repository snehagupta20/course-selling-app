import {MainHeading , GraySmallHeading} from "../atoms/Heading";
import {YellowButton} from "../atoms/Button";
import Image from "next/image";
import peopleImage from "../../public/potraits/people w yellow bg.png";
import girlsPotrait from "../../public/potraits/get to know people.png";

export default function GettingStarted(){
    return(
        <div className="m-4 bg-mustard-yellow flex h-max rounded-xl justify-between ">
            <div className="flex flex-col w-[50rem] p-16 my-auto ml-8 ">
                <MainHeading class="!text-5xl mb-4">Get Started Today</MainHeading>
                <GraySmallHeading class="mb-4">Unlock new opportunities and take the first step towards mastering your skills. Whether you're exploring courses, making payments, or simply looking for guidance, we're here to support you every step of the way. Dive in now and start your journey to success!</GraySmallHeading>
                <div className="flex items-center">
                    <YellowButton class="!bg-black text-light-pink-beige mr-4">Explore Courses </YellowButton>
                    {/* image  */}
                    <Image className="w-[5rem] mr-2" src={peopleImage} alt="people" />
                    <GraySmallHeading class="text-xs" >Trusted by over 10,000+ students</GraySmallHeading>
                </div>
            </div>
            <div className="align-right rounded-xl ">
                <Image className="h-full w-[35rem] rounded-xl" src={girlsPotrait} alt="girls"  />
            </div>
        </div>
    );
};