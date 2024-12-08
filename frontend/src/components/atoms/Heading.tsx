interface HeadingProps {
    children : React.ReactNode,
    class ?: String,
}

export function MainHeading(props : HeadingProps){
    return(
        <h1 className={` font-semibold text-xl ${props.class}`} >{props.children}</h1>
    )
}