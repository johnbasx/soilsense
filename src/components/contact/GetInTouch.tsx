import React from "react";
import { Container } from "@/components/Container";

const GetInTouch = () => {
  return (
    <section className='py-12 bg-gradient-to-br from-primary-400 to-primary-400 via-primary-400 sm:py-18'>
      <Container>
        <div>
          <div className='max-w-md mx-auto px-6 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:px-8'>
            <h1 className='text-4xl leading-10 font-extrabold tracking-tight text-white text-center drop-shadow sm:text-5xl sm:leading-none lg:text-5xl'>
              Get in touch
            </h1>
            <p className='mt-6 max-w-2xl mx-auto text-lg leading-normal text-gray-100 drop-shadow text-center'>
              Got a question about us? Are you interested in partnering with us?
              have some suggestions or just want to say Hi? Just contact us. We
              are here to assist you.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GetInTouch;
