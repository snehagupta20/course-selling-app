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