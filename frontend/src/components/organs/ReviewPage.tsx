import {MainHeading} from "../atoms/Heading";
import {TransparentButton} from "../atoms/Button";
import REVIEWS from "../../data/reviewCrad.json";
import {ReviewCard} from "../atoms/Card"; 
import {IconArrowLeft} from "../../public/icons/LeftArrowIcon";
import {IconArrowRight} from "../../public/icons/RightArrowIcon";

export default function ReviewPage(){
    return(
        <div className="h-[60vh] bg-beige pt-20 mt-4 p-8">
            <div className="flex justify-between">
                <MainHeading class="text-2xl">Literally Life-Chnaging</MainHeading>
                <TransparentButton>Explore Courses</TransparentButton>
            </div>
            <div>
                {/* card  */}
                <div className="flex">
                    {/* {REVIEWS.ReviewCard.map((review) => (
                        <ReviewCard
                            name={review.name}
                            stars={review.stars}
                            review={review.review}
                        />
                    ))} */}
                    <ReviewCard 
                    name= "Sneha Gupta"
                    review= "I was working as a waiter and was always passionate about web design. Because of Good Course, I upskilled myself and am now working as a full-time freelance designer."
                    stars= {5}
                    />
                </div>
                <div>
                    {/* arrow to scroll card  */}
                    <div className="flex m-4 ">
                        <IconArrowLeft className="mr-4 cursor-pointer" />
                        <IconArrowRight className="cursor-pointer" />
                    </div>
                    {/* one imahe  */}
                </div>

            </div>
        </div>
    );
};