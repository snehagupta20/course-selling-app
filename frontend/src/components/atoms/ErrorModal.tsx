import {IconCross} from "../../public/icons/CrossIcon";
import {RedHeading , GraySmallHeading} from "./Heading";
import {YellowButton} from "./Button";

interface ErrorModalProps {
    class ?: string,
    heading : string,
    desc : string,
    onClick : React.MouseEventHandler<HTMLButtonElement>,
};
export function ErrorModal(props : ErrorModalProps){
    return(
        <div className={` w-max rounded-xl flex flex-col justify-center items-center bg-white p-4 text-center ${props.class}`} >
            <div className=" border-2 border-gray-500 rounded-full p-2">
                <IconCross className="text-red-500 w-[1.5rem] h-[1.5rem] " />
            </div>
            
            <RedHeading class="m-4">{props.heading}</RedHeading>
            <GraySmallHeading>{props.desc}</GraySmallHeading>
            <YellowButton class="!bg-red-500 text-white rounded-xl" onClick={props.onClick} >Okay</YellowButton>
        </div>
    );
};