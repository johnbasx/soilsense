import React from "react";
import ReactCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomDot, { carouselItems } from "./CustomDot";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Carousel = () => {
  return (
    <div className='overflow-hidden relative'>
      <ReactCarousel
        responsive={responsive}
        infinite
        autoPlay
        swipeable={true}
        draggable
        showDots
        arrows={false}
        autoPlaySpeed={5000}
        keyBoardControl
        containerClass='max-h-[100vh] z-0'
        transitionDuration={1000}
        customDot={<CustomDot />}
      >
        {carouselItems.map((item, idx) => (
          <div
            key={"Carousel-" + item.id + idx}
            className='w-full h-[50vh] object-cover shadow-none overflow-hidden relative'
          >
            <div className='absolute p-6 bg-gradient-to-bl from-black/80 to-black/5 h-full w-full pointer-events-none text-white'>
              <div className='max-w-5xl pt-32 pb-8 px-8 md:px-0 mx-auto flex flex-col text-center md:text-left justify-center items-center space-y-4 md:items-start'>
                <h1 className='text-5xl md:text-7xl drop-shadow font-extrabold'>
                  {item.heading}
                </h1>
                <p className='text-xl md:text-2xl drop-shadow'>
                  {item.tagline}
                </p>
              </div>
            </div>
            <img
              src={item.src}
              alt={"Image-carousel-" + item.heading}
              className='object-cover w-full h-[50vh]'
            />
          </div>
        ))}
      </ReactCarousel>
    </div>
  );
};

export default Carousel;
