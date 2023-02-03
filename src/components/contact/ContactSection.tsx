import React from "react";
import ContactCover from "@/assets/images/for-pages/soil-8.jpg";
import { Button } from "@/components/Button";
import {
  HiArrowRight,
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";

const ContactSection = () => {
  return (
    <section>
      <div className='relative bg-white'>
        <div className='lg:absolute lg:inset-0'>
          <div className='lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
            <img
              className='h-56 w-full object-cover lg:absolute lg:h-full'
              src={ContactCover}
              alt='Contact-us-cover-image'
            />
          </div>
        </div>
        <div className='relative py-16 px-8 sm:py-24 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2'>
          <div className='lg:pr-8'>
            <div className='max-w-md mx-auto sm:max-w-lg lg:mx-0'>
              <h2 className='text-4xl font-extrabold tracking-tight sm:text-7xl'>
                Let's work together
              </h2>
              <address className='py-6 flex flex-col justify-center items-start text-left not-italic gap-2 font-medium'>
                <h4 className='font-semibold text-2xl'>Office</h4>
                <div className='flex flex-col gap-2'>
                  <a
                    className='inline-flex items-start space-x-2 hover:text-primary-500 duration-150'
                    href='https://goo.gl/maps/PUURpzbKMuJyCdzA6'
                  >
                    <HiOutlineLocationMarker className='h-5 text-primary-500 flex-shrink-0 w-5 mt-px' />
                    <p>
                      A26/12, 1st Floor, Chadha Market, Naya Bazar, Chandni
                      Chowk, Punjab - 110728
                    </p>
                  </a>
                  <div className='inline-flex items-start font-medium space-x-2'>
                    <HiOutlinePhone className='h-5 flex-shrink-0 w-5 text-primary-500 mt-px' />
                    <div>
                      <a
                        href='tel:+91-8987662772'
                        className='hover:text-primary-600 duration-150'
                      >
                        +91-8987662772
                      </a>
                      ,{" "}
                      <a
                        href='tel:+91-+91-8078998999'
                        className='hover:text-primary-600 duration-150'
                      >
                        +91-8078998999
                      </a>
                    </div>
                  </div>

                  <a
                    className='inline-flex justify-start items-center space-x-2 hover:text-primary-500 duration-150'
                    href='mailto:webmaster@somedomain.com'
                  >
                    <HiOutlineMail className='h-5 flex-shrink-0 w-5 mt-px text-primary-500' />
                    <span className='sr-only'>Email: </span>
                    <span>support@gov.eondelhi.org</span>
                  </a>
                </div>
              </address>

              <form
                action='#'
                method='POST'
                className='mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'
              >
                <div>
                  <label
                    htmlFor='first-name'
                    className='block text-sm font-medium text-gray-700'
                  >
                    First name
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      name='first-name'
                      id='first-name'
                      placeholder='Your first name'
                      autoComplete='first-name'
                      className='block w-full px-3 py-3 border shadow-sm sm:text-sm focus:ring-primary-500 focus:border-primary-500 focus:outline-primary-500 border-gray-200 rounded-md'
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor='last-name'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Last name
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      name='last-name'
                      id='last-name'
                      placeholder='Last name/family name'
                      autoComplete='last-name'
                      className='block w-full px-3 py-3 border shadow-sm sm:text-sm focus:ring-primary-500 focus:border-primary-500 focus:outline-primary-500 border-gray-200 rounded-md'
                    />
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Email
                  </label>
                  <div className='mt-1'>
                    <input
                      id='email'
                      name='email'
                      type='email'
                      autoComplete='email'
                      placeholder='yourname@abc.com'
                      className='block w-full px-3 py-3 border shadow-sm sm:text-sm focus:ring-primary-500 focus:border-primary-500 focus:outline-primary-500 border-gray-200 rounded-md'
                    />
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  <label
                    htmlFor='company'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Company
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      name='company'
                      id='company'
                      autoComplete='organization'
                      placeholder='Company / Institute / Organisation'
                      className='block w-full px-3 py-3 border shadow-sm sm:text-sm focus:ring-primary-500 focus:border-primary-500 focus:outline-primary-500 border-gray-200 rounded-md'
                    />
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  <div className='flex justify-between'>
                    <label
                      htmlFor='phone'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Phone
                    </label>
                    <span
                      id='phone-description'
                      className='text-sm text-gray-400'
                    >
                      Optional
                    </span>
                  </div>
                  <div className='mt-1'>
                    <input
                      type='text'
                      name='phone'
                      id='phone'
                      autoComplete='tel'
                      placeholder='+91-9986659098'
                      aria-describedby='phone-description'
                      className='block w-full px-3 py-3 border shadow-sm sm:text-sm focus:ring-primary-500 focus:border-primary-500 focus:outline-primary-500 border-gray-200 rounded-md'
                    />
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  <div className='flex justify-between'>
                    <label
                      htmlFor='how-can-we-help'
                      className='block text-sm font-medium text-gray-700'
                    >
                      How can we help you?
                    </label>
                    <span
                      id='how-can-we-help-description'
                      className='text-sm text-gray-500'
                    >
                      Max. 500 characters
                    </span>
                  </div>
                  <div className='mt-1'>
                    <textarea
                      id='how-can-we-help'
                      name='how-can-we-help'
                      aria-describedby='how-can-we-help-description'
                      rows={4}
                      placeholder='Something you wanna say to us...'
                      className='block w-full px-3 py-3 border shadow-sm sm:text-sm focus:ring-primary-500 focus:border-primary-500 focus:outline-primary-500 border-gray-200 rounded-md'
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  <label
                    htmlFor='how-did-you-hear-about-us'
                    className='block text-sm font-medium text-gray-700'
                  >
                    How did you hear about us?
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      name='how-did-you-hear-about-us'
                      id='how-did-you-hear-about-us'
                      placeholder='Friends / Website / Advertisements / Facebook?'
                      className='block w-full px-3 py-3 border shadow-sm sm:text-sm focus:ring-primary-500 focus:border-primary-500 focus:outline-primary-500 border-gray-200 rounded-md'
                    />
                  </div>
                </div>
                <div className='text-right mt-2 sm:col-span-2'>
                  <Button
                    size='large'
                    className='px-8 inline-flex justify-center items-center text-center space-x-2'
                  >
                    <span>Submit form</span>
                    <HiArrowRight />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
