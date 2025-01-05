interface TransparentButtonProps {
    children : React.ReactNode,
    class ?: string,
}

export function TransparentButton(props : TransparentButtonProps){
    return(
        <button className={` rounded-md text-sm h-min border-[1.5px] border-black px-5 py-2 ${props.class}`} >{props.children}</button>
    )
}


interface GrayButtonProps {
    children : React.ReactNode,
    class ?: string,
}

export function GrayButton(props : GrayButtonProps){
    return(
        <button className={`bg-light-gray px-4 py-2 mx-2 text-sm ${props.class}`} >{props.children}</button>
    )
}


interface YellowButtonProps {
    children : React.ReactNode,
    class ?: string,
    onClick ?: React.MouseEventHandler<HTMLButtonElement>
}

export function YellowButton(props : YellowButtonProps){
    return(
        <button className={`bg-mustard-yellow px-4 py-2 text-sm ${props.class}`} onClick={props.onClick} >{props.children}</button>
    )
}

