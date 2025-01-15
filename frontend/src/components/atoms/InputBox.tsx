import {GraySmallHeading} from "./Heading";

interface InputBoxProps{
    placeholder : string,
    class ?: string,
    type ?: string,
    name ?: string,
}

export default function InputBox(props : InputBoxProps){
    return(
        <input type={props.type} className={` rounded-md border border-gray-200 p-4 my-2 ${props.class} `} placeholder={props.placeholder} name={props.name} ></input>
    )
}

interface RadioButtonProps {
    id:string,
    class ?: string,
    name : string,
    checked ?: boolean,
    onChange : (event:React.ChangeEvent<HTMLInputElement>) => void,
    value ?: string,
}

export function RadioButton(props : RadioButtonProps ){
    return(
        <div>
            <input type="radio" className={` text-black mr-4 mb-2 ${props.class} `} id={props.id} value={props.value} onChange={props.onChange} checked={props.checked} />
            <label htmlFor={props.id} >{props.name}</label>
        </div>
    );
}

interface CheckBoxProps {
    children : string,
    number ?: string,
    desc ?: string,
}
export function CheckBox(props : CheckBoxProps){
    return(
        <div className="flex flex-col mt-1 " >
            <div className="flex items-center" >
                <input className="mr-1 cursor-pointer " type="checkbox" id={props.children} name={props.children} value={props.children}/>
                <label className="text-sm mr-2 cursor-pointer flex" htmlFor={props.children}>
                    {props.children}
                    <GraySmallHeading class="text-sm ml-2" >{props.number}</GraySmallHeading>
                </label>
            </div>
            <GraySmallHeading class="text-sm" >{props.desc}</GraySmallHeading>
            
        </div>
    )
}