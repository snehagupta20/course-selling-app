import {MainHeading, SubHeading} from "../../atoms/Heading";
import FILTERBY from "../../../data/FilterBy.json";
import {CheckBox} from "../../atoms/InputBox";

export default function FilterBy(){
    return(
        <div className="w-max h-max flex flex-col p-8 border border-r-gray-300 " >
            <MainHeading>Filter By</MainHeading>
            <br/>
            <SubHeading class="my-2" >Subject</SubHeading>
            {FILTERBY.Subject.map((val, key) => {
                return(
                    <CheckBox number={val.number} desc={val.desc} >{val.name}</CheckBox>
                )
            })}

            <SubHeading class="mt-4 mb-1" >Language</SubHeading>
            {FILTERBY.Language.map((val, key) => {
                return(
                    <CheckBox number={val.number} desc={val.desc} >{val.name}</CheckBox>
                )
            })}

            <SubHeading class="mt-4 mb-1" >Level</SubHeading>
            {FILTERBY.Level.map((val, key) => {
                return(
                    <CheckBox number={val.number} desc={val.desc} >{val.name}</CheckBox>
                )
            })}

            <SubHeading class="mt-4 mb-1" >Duration</SubHeading>
            {FILTERBY.Duration.map((val, key) => {
                return(
                    <CheckBox number={val.number} desc={val.desc} >{val.name}</CheckBox>
                )
            })}

            <SubHeading class="mt-4 mb-1" >Skills</SubHeading>
            {FILTERBY.Skills.map((val, key) => {
                return(
                    <CheckBox number={val.number} desc={val.desc} >{val.name}</CheckBox>
                )
            })}
                        
            <SubHeading class="mt-4 mb-1" >Subtitles</SubHeading>
            {FILTERBY.Subtitles.map((val, key) => {
                return(
                    <CheckBox number={val.number} desc={val.desc} >{val.name}</CheckBox>
                )
            })}
        </div>
    );
};