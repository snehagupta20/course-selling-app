interface HeadingProps {
    children : React.ReactNode,
    class ?: String,
}

export function MainHeading(props : HeadingProps){
    return(
        <h1 className={` font-semibold text-xl ${props.class}`} >{props.children}</h1>
    )
}


interface SubHeadingProps {
    children : React.ReactNode;
    class ?: string,
}

export function SubHeading(props : SubHeadingProps){
    return(
        <h2 className={`font-bold text-xl  ${props.class}`} >{props.children}</h2>
    )
};