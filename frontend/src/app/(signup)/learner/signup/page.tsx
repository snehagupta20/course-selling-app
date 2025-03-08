"use client";

import { YellowButton } from "@/components/atoms/Button";
import { MainHeading } from "@/components/atoms/Heading";
import InputBox from "@/components/atoms/InputBox";
import Link from "next/link";
import { BACKEND_URL } from "../../../config.js";
import axios from "axios";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { ErrorModal } from "../../../../components/atoms/ErrorModal";
import { useAuth } from "../../../../context/AuthContext";


export default function Signup() {
    const [errorModal, setErrorModal] = useState<{ visible: boolean; message: string }>({
        visible: false,
        message: "",
    });

    const router = useRouter();
    const {login} = useAuth();

    function closeModal() {
        setErrorModal({ visible: false, message: "" });
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const form = event.target as HTMLFormElement;

        const name = form.elements.namedItem("name") as HTMLInputElement;
        const emailId = form.elements.namedItem("emailId") as HTMLInputElement;
        const password = form.elements.namedItem("password") as HTMLInputElement;

        const formData = {
            name: name.value.trim(),
            emailId: emailId.value.trim(),
            password: password.value.trim(),
        };

        try {
            const res = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, formData);

            const { token, emailId } = res.data;
            localStorage.setItem("token", `BEARER ${token}`);
            localStorage.setItem("emailId", `${emailId}`);

            login(token);
            router.push("/");
        } catch (error: any) {
            const errorMessage = error.response.data.message || "Unexpected Error";
            console.log("error message : ",errorMessage);
            setErrorModal({ visible: true, message: errorMessage });
        }
    }

    return (
        <div className={`bg-beige h-[100vh] flex justify-center items-center`}>
            {!errorModal.visible && (
                <div className="rounded-2xl w-[30%] bg-white flex flex-col p-8">
                    <MainHeading class="text-center">SignUp</MainHeading>
                    <form className="flex flex-col p-4" onSubmit={handleSubmit}>
                        <InputBox placeholder="Full Name" name="name" />
                        <InputBox type="email" placeholder="Email-ID" name="emailId" />
                        <InputBox type="password" placeholder="Password" name="password" />
                        <YellowButton class="my-4 rounded-md">Submit</YellowButton>
                    </form>
                    <p className="text-gray-400 text-center">
                        Already have an account?{" "}
                        <span className="text-gray-600">
                            <Link href="/learner/login">Login</Link>
                        </span>
                    </p>
                </div>
            )}

            {errorModal.visible && (
                <ErrorModal heading={errorModal.message} desc="" onClick={closeModal} />
            )}
        </div>
    );
}
