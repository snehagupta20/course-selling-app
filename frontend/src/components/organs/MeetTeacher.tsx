import {YellowButton} from "../atoms/Button";
import {BACKEND_URL} from "../../app/config";
import axios from "axios";
import {TeacherCard} from "../atoms/Card";
// import image from "../../public/potraits/user icon.png";
import image from "../../public/potraits/avatar person icon - female.jpg";
import {MainHeading} from "../atoms/Heading";
import Slider from "react-slick";
import svg1 from "../../public/meet your teacher/svg-4.png";
import Image from 'next/image';


export default async function MeetTeacher(){
    interface Teacher{
        name:string,
        profession:string,
    }
    let teacher:Teacher[]=[];

    let res = await axios.get(`${BACKEND_URL}/api/v1/seller/getSeller`);
    // console.log(res.data.seller);
    let seller = res.data.seller;
    console.log(seller);

    for(let i=0;i<seller.length;i++){
        teacher.push({
            name : seller[i].name,
            profession : seller[i].profession,
        });
        if(teacher.length == 4) break;
    }


    return(
        <div className="h-max bg-black flex flex-col text-center m-4 mt-72 p-4 text-white pb-20 ">
            <div >
                <Image className="absolute" src={svg1.src} alt="svg" height={200} width={200} />
            </div>
            <div className="mt-32" >
                <MainHeading class="!text-4xl" >Meet Your Teachers!</MainHeading>
            </div>
            <div className="flex items-center" >
                {/* <Slider {...settings}> */}
                    {teacher.map((val)=>{
                        return (<TeacherCard
                            src={image.src}
                            alt={val.name}
                            profession={val.profession}
                            name={val.name}
                        />)
                    })}
                {/* </Slider> */}
            </div>
            
        </div>
    );
};