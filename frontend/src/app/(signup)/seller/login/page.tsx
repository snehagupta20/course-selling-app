"use client";

import { BACKEND_URL } from "@/app/config";
import { YellowButton } from "@/components/atoms/Button";
import { MainHeading } from "@/components/atoms/Heading";
import InputBox from "@/components/atoms/InputBox";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { ErrorModal } from "../../../../components/atoms/ErrorModal";

export default function Login() {
    const [errorModal, setErrorModal] = useState<{ visible: boolean; message: string }>({
        visible: false,
        message: "",
    });

    const router = useRouter();

    function closeModal() {
        setErrorModal({ visible: false, message: "" });
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const form = event.target as HTMLFormElement;

        const emailId = form.elements.namedItem("emailId") as HTMLInputElement;
        const password = form.elements.namedItem("password") as HTMLInputElement;

        const formData = {
            emailId: emailId.value.trim(),
            password: password.value.trim(),
        };

        try {
            const res = await axios.post(`${BACKEND_URL}/api/v1/seller/login`, formData);

            const { token, emailId } = res.data;
            localStorage.setItem("token", `BEARER ${token}`);
            localStorage.setItem("emailId", `${emailId}`);

            router.push("/");
        } catch (error: any) {
            const errorMessage = error.response.data.message || "Unexpected Error";
            console.log("Error when logging in: ", errorMessage || error);
            setErrorModal({ visible: true, message: errorMessage });
        }
    }

    return (
        <div className={`bg-beige h-[100vh] flex justify-center items-center`}>
            {!errorModal.visible && (
                <div className="rounded-2xl w-[30%] bg-white flex flex-col p-8">
                    <MainHeading class="text-center">Login</MainHeading>
                    <form className="flex flex-col p-4" onSubmit={handleSubmit}>
                        <InputBox type="email" placeholder="Email-ID" name="emailId" />
                        <InputBox type="password" placeholder="Password" name="password" />
                        <YellowButton class="my-4 rounded-md">Submit</YellowButton>
                    </form>
                    <p className="text-gray-400 text-center">
                        Don't have an account? Create new one.{" "}
                        <span className="text-gray-600">
                            <Link href="/seller/signup">SignUp</Link>
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