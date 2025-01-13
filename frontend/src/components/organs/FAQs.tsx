"use client";

import {MainHeading , GraySmallHeading , SubHeading} from "../atoms/Heading";
import {YellowButton} from "../atoms/Button";
import {useState} from "react";
import QUESTIONS from "../../data/FAQs.json";

type Category = "courses" | "payment" | "other";

export default function FAQs(){
    const [isActive, setIsActive] = useState<Category>("courses");
    const [isAnsVisible, setAnsVisible] = useState<{[key: string]: boolean}>({});

    function handleClick(id : Category){
        setIsActive(id);
        setAnsVisible({});
    }

    function handleShowAnswer(index : number){
        setAnsVisible((prev) => ({
            ...prev,
            [index] : !prev[index]
        }));
    };

    function renderQuestions(category : Category){
        return QUESTIONS[category].map((val, index) => (
            <div key={index} className="" >
                <hr className="border border-gray-300 my-6" />
                <div className="flex justify-between">
                    <SubHeading class="font-medium" >{val.question}</SubHeading>
                    <button className="text-3xl mr-4" onClick={() => handleShowAnswer(index)}>{isAnsVisible[index] ? "--" : "+"}</button>
                </div>
                {isAnsVisible[index] && (
                    <GraySmallHeading>{val.answer}</GraySmallHeading>
                )}
            </div>
        ))
    };

    return(
        <div className="h-[100vh] bg-light-pink-beige flex flex-col items-center justify-center mt-[20rem]" >
            <MainHeading class="!text-5xl mb-4" >Some Questions, Some Answers</MainHeading> 
            <GraySmallHeading class="!text-black text-lg mb-8" >Here are our most frequently asked questions</GraySmallHeading>
            <div className="bg-black rounded-xl flex p-4 mx-2 mb-4" >
                {/* clicking tabs  */}
                <button className={`px-4 p-2 rounded-xl ${isActive==="courses" ? 'bg-white text-black' : "bg-black text-white"}`} onClick={() => handleClick("courses")} >Courses</button>
                <button className={`${isActive==="payment" ? 'bg-white text-black' : "bg-black text-white"} rounded-xl px-4 p-2`} onClick={() => handleClick("payment")} >Payment</button>
                <button className={`${isActive==="other" ? 'bg-white text-black' : "bg-black text-white"} rounded-xl px-4 p-2`} onClick={() => handleClick("other")} >Other</button>
            </div>
            <div className="border-2 border-black rounded-xl p-8 m-4 bg-beige w-[55rem] " >


                {renderQuestions(isActive)}
                

                {/* {isActive==="courses" && QUESTIONS.Courses.map((val) => {
                    return(
                        <div>
                            <hr/>
                                <div className="flex justify-between" >
                                    <SubHeading>{val.question}</SubHeading>
                                    <div onClick={()=>handleShowAnswer} >+</div>
                                </div>
                            <hr/>
                        </div>
                    )
                })}

                {isActive==="payment" && QUESTIONS.Payment.map((val) => {
                    return(
                        <div>
                            <hr/>
                                <div className="flex justify-between" >
                                    <SubHeading>{val.question}</SubHeading>
                                    <div onClick={()=>handleShowAnswer} >+</div>
                                </div>
                            <hr/>
                        </div>
                    )
                })}

                {isActive==="other" && QUESTIONS.Other.map((val) => {
                    return(
                        <div>
                            <hr/>
                                <div className="flex justify-between" >
                                    <SubHeading>{val.question}</SubHeading>
                                    <div onClick={()=>handleShowAnswer} >+</div>
                                </div>
                            <hr/>
                        </div>
                    )
                })} */}

            </div>
            <YellowButton class="mt-4">Contact Us</YellowButton>
        </div>
    );
};