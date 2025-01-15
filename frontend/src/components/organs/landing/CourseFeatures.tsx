import IconSandClock from "@/public/icons/SandClockIcon";
import { FeatureCard } from "../../atoms/Card";
import { MainHeading } from "../../atoms/Heading";
import IconBriefcase from "@/public/icons/BriefCaseIcon";
import IconAssignment from "@/public/icons/AssignmentIcon";
import IconMentor from "@/public/icons/MentorIcon";
import IconCertificate from "@/public/icons/CertificateIcon";
import IconProject from "@/public/icons/RealWorldProjectsIcon";

export default function CourseFeature(){
    return(
        <section className="bg-light-pink-beige h-[100vh] flex flex-col justify-center items-center w-full " > 
            <MainHeading class="!text-3xl mb-8" >Undenaible quality in every course.</MainHeading>
            <div className="grid grid-cols-3">
                <FeatureCard 
                    name="Learn at Your Own Pace" 
                    icon={<IconSandClock />} 
                    p="Access the courses anytime, anywhere, and learn at your comfort. Can also be accessed offline." 
                />
                <FeatureCard 
                    name="100% Job Assistance" 
                    icon={<IconBriefcase />} 
                    p="Get support to land a job with career guidance and placement help." 
                />
                <FeatureCard 
                    name="Interactive Assignments" 
                    icon={<IconAssignment />} 
                    p="Test your knowledge with interactive quizzes and practical assignments." 
                />
                <FeatureCard 
                    name="One-on-One Mentorship" 
                    icon={<IconMentor />} 
                    p="Receive personalized guidance from experienced mentors." 
                />
                <FeatureCard 
                    name="Industry Certification" 
                    icon={<IconCertificate />} 
                    p="Earn certificates that are valued and recognized by top employers." 
                />
                <FeatureCard 
                    name="Real-World Projects" 
                    icon={<IconProject />} 
                    p="Work on projects that solve real-world challenges and gain hands-on experience." 
                />
            </div>
        </section>
    );
};