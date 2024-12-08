interface NavlinkProps{
    children : React.ReactNode,
    class ?: string,
}
 
export function Navlink(props : NavlinkProps){
    return(
        <li className={` text-md p-2 px-4 ${props.class}`} ><a>{props.children}</a></li>
    );
};