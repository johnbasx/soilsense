import React, { useEffect } from "react";
import { Button } from "../Button";
import { Container } from "../Container";
import ssMobileMockup01 from "@/assets/SS-mockup.png";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const PersonalisedFarming = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className='bg-gradient-to-r from-primary-400 to-primary-400 via-primary-500 py-16'>
      <Container>
        <motion.div
          ref={ref}
          animate={controls}
          initial='hidden'
          variants={containerVariants}
          className='overflow-hidden sm:grid sm:grid-cols-2 sm:items-center'
        >
          <div className='lg:py-24 px-2'>
            <div className='mx-auto max-w-xl text-center sm:text-left'>
              <h2 className='text-4xl md:text-5xl font-bold text-white drop-shadow'>
                Personalized farming
              </h2>

              <p className='drop-shadow text-lg text-primary-50 my-4 block'>
                Customised farming just for you with our Techland app. Grow
                plants on 1,902 acres of land with our technology.
              </p>

              <motion.div
                animate={controls}
                initial='hidden'
                variants={containerVariants}
                transition={{ delay: 0.2 }}
                className='my-10 md:my-8'
              >
                <Button size='large' variant='white'>
                  Get Started Today
                </Button>
              </motion.div>
            </div>
          </div>
          <motion.div
            animate={controls}
            initial='hidden'
            variants={mobileVariants}
            transition={{ delay: 0.6 }}
          >
            <img
              alt='Violin'
              src={ssMobileMockup01}
              className='h-full w-full object-contain drop-shadow'
            />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};
const containerVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
  hidden: { opacity: 0, y: 100 },
};

const mobileVariants = {
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: 0.5,
    },
  },
  hidden: { opacity: 0, x: 200, scale: 0.9 },
};

export default PersonalisedFarming;
