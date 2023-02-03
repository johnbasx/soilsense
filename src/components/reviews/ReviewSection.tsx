import { reviews, shuffledReviews } from "@/contents/reviews";
import { Container } from "@/components/Container";
import EmptyReviewCard from "./EmptyReviewCard";
import ReviewCard from "./ReviewCard";

const ReviewSection = () => {
  return (
    <section>
      <Container>
        <div className='px-4 py-16 mx-auto md:max-w-full md:px-24 lg:px-8 lg:py-20'>
          <div className='mb-10 md:mx-auto text-center'>
            <h2 className='text-4xl font-bold sm:text-5xl'>
              Testimonial and Reviews
            </h2>

            <div className='mt-4 text-xl text-gray-600'>
              <p className='uppercase text-3xl font-extrabold tracking-tight text-primary-500'>
                We love
              </p>
              <span>What people say about us</span>
            </div>
          </div>
          <div className='grid md:grid-cols-2 grid-cols-1 xl:grid-cols-3 gap-3'>
            {shuffledReviews.slice(0, 8).map((review, idx) => (
              <ReviewCard {...review} />
            ))}
            <EmptyReviewCard />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ReviewSection;
