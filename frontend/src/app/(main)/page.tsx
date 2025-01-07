import CourseFeature from "@/components/organs/CourseFeatures";
import CourseSectionMain from "@/components/organs/CourseSectionMain";
import HomePage from "@/components/organs/Homepage";
import MeetTeacher from "@/components/organs/MeetTeacher";
import ReviewPage from "@/components/organs/ReviewPage";
import GettingStarted from "@/components/organs/GettingStarted";
import FAQs from "@/components/organs/FAQs";

export default function Home() {
  return (
    <>
      <HomePage/>
      <CourseFeature/>
      <CourseSectionMain/>
      <MeetTeacher/>
      <ReviewPage/>
      <GettingStarted/>
      <FAQs/>
    </>
  );
}
