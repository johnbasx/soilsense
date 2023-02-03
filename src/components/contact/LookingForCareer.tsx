import React from "react";
import { TbExternalLink } from "react-icons/tb";
import { ButtonLink } from "../Button";

const LookingForCareer = () => {
  return (
    <section>
      <div className='bg-primary-400'>
        <div className='max-w-md mx-auto text-center py-10 px-4 sm:max-w-2xl sm:py-24 sm:px-6 lg:px-8 lg:py-24 space-y-6'>
          <h2 className='text-4xl block text-white font-extrabold sm:text-5xl'>
            Looking for a new career?
          </h2>
          <span className='block text-2xl text-primary-100'>We’re hiring.</span>

          <ButtonLink
            href='#!'
            variant='white'
            size='large'
            className='inline-flex justify-center items-center space-x-2'
          >
            <span>See open positions</span>
            <TbExternalLink
              className='ml-3 h-5 w-5 text-gray-400'
              aria-hidden='true'
            />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};

export default LookingForCareer;
