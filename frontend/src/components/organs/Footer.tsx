import Image from 'next/image';
import {MainHeading} from '../atoms/Heading';
import logo from "../../public/logo-white-2.png";
import {FooterNavlink} from '../atoms/NavLinks';

export default function Footer() {
    return (
        <footer className="bg-black p-16 mt-[20rem] w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 border-t pb-[7rem]">
            <div className="w-[20rem] mb-3 text-gray-400">
                <a href="/" className="flex items-center mb-3 text-gray-800 no-underline">
                    <Image height={20} src={logo} alt="logo"/>
                    <MainHeading class="ml-2 content-center text-white" >Good Course</MainHeading>
                </a>
                <p className="text-gray-500">© {new Date().getFullYear()}</p>
                <p>Good Course offers professionals tech courses from the leading teachers in their industries.</p>
                <hr className='border-gray-500 my-4 '/>
                <p className="text-gray-500">Developed by Sneha Gupta with Love</p>

            </div>
    
            <div className="col mb-3"></div>
    
            <div className="col mb-3">
                <h5 className="text-lg font-medium">Main Pages</h5>
                <ul className="flex flex-col space-y-2">
                    <FooterNavlink>Home</FooterNavlink>
                    <FooterNavlink>About</FooterNavlink>
                    <FooterNavlink>Courses</FooterNavlink>
                    <FooterNavlink>Teachers</FooterNavlink>
                </ul>
            </div>
    
            <div className="col mb-3">
                <h5 className="text-lg font-medium">CMS Pages</h5>
                <ul className="flex flex-col space-y-2">
                    <FooterNavlink>Course Category</FooterNavlink>
                    <FooterNavlink>Blog Post</FooterNavlink>
                    <FooterNavlink>Teacher Profile</FooterNavlink>
                    <FooterNavlink>Course Category</FooterNavlink>
                </ul>
            </div>
    
            <div className="col mb-3">
                <h5 className="text-lg font-medium">Other Pages</h5>
                <ul className="flex flex-col space-y-2">
                    <FooterNavlink>FAQs</FooterNavlink>
                    <FooterNavlink>Legal</FooterNavlink>
                    <FooterNavlink>Contact</FooterNavlink>
                    <FooterNavlink>See all Pages</FooterNavlink>
                </ul>
            </div>
        </footer>
    );
}
