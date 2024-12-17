"use client";

import { YellowButton } from "@/components/atoms/Button";
import { MainHeading } from "@/components/atoms/Heading";
import InputBox from "@/components/atoms/InputBox";
import Link from "next/link";
import {BACKEND_URL} from "../../config.js";
import axios from "axios";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Signup(){
    const router = useRouter();

    async function handleSubmit(event : FormEvent<HTMLFormElement>){
        event.preventDefault();

        const form = event.target as HTMLFormElement;
        // console.log("form? : ", form);

        const name = form.elements.namedItem('name') as HTMLInputElement;
        const emailId = form.elements.namedItem('emailId') as HTMLInputElement;
        const password = form.elements.namedItem('password') as HTMLInputElement;

        const formData = {
            // name : form.name.value.trim(),
            // emailId : form.emailId.value.trim(),
            // password : form.password.value.trim(),

            name : name.value.trim(),
            emailId : emailId.value.trim(),
            password : password.value.trim(),
        }

        // const formData = new FormData(event.currentTarget);

        // console.log("form data entered by user : ", formData);

        try {
            const res = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, formData);

            const {token, emailId} = res.data;
            localStorage.setItem("token", `BEARER ${token}`);
            localStorage.setItem("emailId", `${emailId}`);

            // redirect('/');
            router.push('/');

        } catch (error) {
            console.log("error in signing up : ", error);
        }
    }

    return (
        <div className="bg-beige h-[100vh] flex justify-center items-center ">
            <div className="rounded-2xl w-[30%]  bg-white flex flex-col p-8 " >
            <MainHeading class="text-center">SignUp</MainHeading>
            <form className=" flex flex-col p-4 " onSubmit={handleSubmit} >
                <InputBox placeholder="Full Name" name="name" />
                <InputBox type="email" placeholder="Email-ID" name="emailId" />
                <InputBox type="password" placeholder="Password" name="password" />
                <YellowButton class="my-4 rounded-md">Submit</YellowButton>
            </form>
            <p className="text-gray-400 text-center" >Alredy have an account? <Link href="/login">Login</Link></p>
            </div>
        </div>
    );
};