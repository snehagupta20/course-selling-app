import { SubHeading } from "./Heading";

interface FeatureCardProps {
    class ?: string,
    name : string,
    pClass ?: string,
    headingClass ?: string,
    icon : React.ReactNode,
    p : string,
}

export function FeatureCard(props : FeatureCardProps){
    return(
        <div className={`bg-beige flex flex-col w-[20rem] border-2 border-black p-8 m-4 rounded-2xl ${props.class}`}>
            <div className="pb-4" >{props.icon}</div>
            <SubHeading class={` pb-4 ${props.headingClass}`} >{props.name}</SubHeading>
            <p className={`text-sm ${props.pClass}`}>{props.p}</p>
        </div>
    );
};