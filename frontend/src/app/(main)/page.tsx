import CourseFeature from "@/components/organs/landing/CourseFeatures";
import CourseSectionMain from "@/components/organs/landing/CourseSectionMain";
import HomePage from "@/components/organs/landing/Homepage";
import MeetTeacher from "@/components/organs/landing/MeetTeacher";
import ReviewPage from "@/components/organs/landing/ReviewPage";
import GettingStarted from "@/components/organs/landing/GettingStarted";
import FAQs from "@/components/organs/landing/FAQs";
import Footer from "@/components/organs/landing/Footer";
import {AuthProvider} from "../../context/AuthContext";

export default function Home() {
  return (
    <AuthProvider>
      <HomePage/>
      <CourseFeature/>
      <CourseSectionMain/>
      <MeetTeacher/>
      <ReviewPage/>
      <GettingStarted/>
      <FAQs/>
      <Footer/>
    </AuthProvider>
  );
}
