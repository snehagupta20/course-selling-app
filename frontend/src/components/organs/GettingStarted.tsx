import {MainHeading , GraySmallHeading} from "../atoms/Heading";
import {YellowButton} from "../atoms/Button";
import Image from "next/image";
import peopleImage from "../../public/people-cirle.png";
import girlsPotrait from "../../public/potraits/get to know people.png";

export default function GettingStarted(){
    return(
        <div className="m-4 bg-mustard-yellow flex mt-20 h-[100vh]">
            <div className="flex flex-col">
                <MainHeading>Get Started Today</MainHeading>
                <GraySmallHeading>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, consectetur. Hic commodi eveniet perspiciatis debitis facilis a nihil quibusdam maiores sapiente aspernatur aliquid ipsum totam, quae incidunt molestias nisi obcaecati!</GraySmallHeading>
                <div>
                    <YellowButton class="bg-black text-white">Explore Courses </YellowButton>
                    {/* image  */}
                    <Image src={peopleImage} alt="people" height={10} width={20} />
                </div>
            </div>
            <div className="">
                <Image src={girlsPotrait} alt="girls" height={100} width={100} />
            </div>
        </div>
    );
};