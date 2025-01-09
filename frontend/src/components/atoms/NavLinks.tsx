interface NavlinkProps{
    children : React.ReactNode,
    class ?: string,
}
 
export function Navlink(props : NavlinkProps){
    return(
        <li className={` text-md p-2 px-4 ${props.class}`} ><a>{props.children}</a></li>
    );
};


interface FooterNavlinkProps{
    children : React.ReactNode,
}
 
export function FooterNavlink(props : FooterNavlinkProps){
    return(
        <li>
            <a href="#" className="text-gray-500 hover:text-gray-800 transition">{props.children}</a>
        </li>
    );
};


