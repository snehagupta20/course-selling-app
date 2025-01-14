"use client";

import Image from "next/image";
import logo from "../../public/logo-black-2.png";
import { MainHeading } from "../atoms/Heading";
import { Navlink } from "../atoms/NavLinks";
import { GrayButton, TransparentButton } from "../atoms/Button";
import Link from "next/link";
import {useAuth} from "../../context/AuthContext";


export default function Navbar(){
    const {isAuthenticated, logout} = useAuth();

    return(
        <div className="w-full h-[10%] bg-beige border-[1.5px] border-b-black flex justify-between p-4 " >
            <div className="flex" >
                <a className=" mr-2 m-auto" ><Image height={25} src={logo} alt="logo"/></a>
                <MainHeading class="content-center" >Good Course</MainHeading>
            </div>
            <div className="" >
                <ul className="flex items-center" >
                    <Navlink>Home</Navlink>
                    <Navlink>About</Navlink>
                    <Navlink>Courses</Navlink>
                    <Navlink>FAQs</Navlink>
                    {isAuthenticated ? (
                        <GrayButton class="mx-4 mr-7" onClick={logout} >Logout</GrayButton>
                    ) : (
                        <Link href="\role">
                            <GrayButton class="mx-4 mr-7" >Login / Signup</GrayButton>
                        </Link>
                    )}
                    <TransparentButton class="mr-2" >Cart</TransparentButton>
                </ul>
            </div>
        </div>
    );
};