"use client";

import Image from "next/image";
import logo from "../../../public/logo-black-2.png";
import { MainHeading } from "../../atoms/Heading";
import { GrayButton, TransparentButton } from "../../atoms/Button";
import Link from "next/link";
import {useAuth} from "../../../context/AuthContext";
import {SearchIcon} from "../../../public/icons/SearchIcon";


export default function NavbarCourse(){
    const {isAuthenticated, logout} = useAuth();

    return(
        <div className="w-full h-[10%] bg-beige border-[1.5px] border-b-black flex justify-between p-4 " >
            <div className="flex" >
                <Link className="flex mr-16" href="\">
                    <a className=" mr-2 m-auto" ><Image height={25} src={logo} alt="logo"/></a>
                    <MainHeading class="content-center" >Good Course</MainHeading>
                </Link>
                {/* search func  */}
                <div className="border border-gray-400 rounded-2xl w-[30rem] h-[2.1rem] flex bg-light-pink-beige items-center" >
                    <input className="w-full p-4 bg-light-pink-beige rounded-3xl h-[1rem] focus:outline-none  " ></input>
                    <SearchIcon className="mr-2" />
                </div>
            </div>
            <div className="" >
                <ul className="flex items-center" >
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