"use client";

import {useState} from "react";
import {useRouter} from "next/navigation";

import {MainHeading} from "../../../components/atoms/Heading";
import {RadioButton} from "../../../components/atoms/InputBox";
import {YellowButton} from "../../../components/atoms/Button";

export default function Role(){
    const [selectedButton, setSelectedButton] = useState<string>("");

    const router = useRouter();

    function handleSubmit(event : React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        if(selectedButton === "") alert("Please select an option");
        else{
            // console.log("router should have : ",selectedButton,"/signup");
            router.push(`${selectedButton}/signup`); 
        }
    }

    function handleChange(event : React.ChangeEvent<HTMLInputElement>){
        setSelectedButton(event.target.value);
    }

    return(
        <div className="bg-beige h-[100vh] flex justify-center items-center ">
            <div className="rounded-2xl w-[30%]  bg-white flex flex-col p-8 " >
            <MainHeading class="text-center">Who Are You?</MainHeading>
            <form className=" flex flex-col p-4 " onSubmit={handleSubmit}>
                <RadioButton class="text-black" id="user" name="Learner" value="learner" checked={selectedButton === "learner"} onChange={handleChange} />
                <RadioButton class="text-black" id="seller"  name="Teacher / Seller" value="seller" checked={selectedButton === "seller"} onChange={handleChange} />
                <YellowButton class="my-4 rounded-md">Submit</YellowButton>
            </form>
            </div>
        </div>
    );
}

