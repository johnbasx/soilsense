import clsx from "clsx";
import { PhoneFrame } from "@/components/hero/PhoneFrame";

import { AppStoreLink } from "@/components/AppStoreLink";
import { ButtonLink } from "@/components/Button";
import { Container } from "@/components/Container";
import mobileScreen from "@/assets/screens/screen-01.png";
import { MdOutlinePlayCircleOutline } from "react-icons/md";
import PlayStoreDownload from "@/components/footer/PlayStoreDownload";
import {
  currentServicesData,
  futureServicesData,
} from "@/contents/heroServices";

export function Hero() {
  return (
    <div className='overflow-hidden pt-12 pb-20 sm:py-32 lg:pb-32 xl:pb-36'>
      <Container>
        <div className='flex justify-start mb-8 sm:mb-3 px-4 md:px-0'>
          <PlayStoreDownload />
        </div>
        <div className='lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20 px-4 md:px-0'>
          <div className='relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6'>
            <h1 className='text-5xl font-extrabold tracking-tight text-gray-900'>
              Why soil sense?
            </h1>
            <p className='mt-6 text-lg text-gray-600'>
              By leveraging the technology and Agricultural insights, you’ll
              know exactly when and to give nutrients to plants, weather
              forecast, irrigation scheduling, all these to help you maximize
              profits and yield more.
            </p>
            <div className='mt-8 flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-4'>
              <div className='flex justify-center items-center content-center'>
                <AppStoreLink svgClassName='h-10' />
              </div>
              <ButtonLink
                href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
                variant='outline'
                className='inline-flex justify-center items-center'
              >
                <MdOutlinePlayCircleOutline className='h-6 w-6 flex-none' />
                <span className='ml-2.5'>Watch the video</span>
              </ButtonLink>
            </div>
          </div>
          <div className='relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6'>
            <div className='-mx-4 h-[448px] px-9 [mask-image:linear-gradient(to_bottom,white_60%,transparent)] sm:mx-0 lg:absolute lg:-inset-x-10 lg:-top-10 lg:-bottom-20 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32'>
              <PhoneFrame className='mx-auto max-w-[366px]'>
                <div>
                  <img
                    src={mobileScreen}
                    alt='mobile-screen'
                    className='object-contain'
                  />
                </div>
              </PhoneFrame>
            </div>
          </div>
          <div className='relative mt-10 lg:col-span-7 lg:mt-0 xl:col-span-6'>
            <p className='text-center text-3xl font-bold text-gray-900 lg:text-left'>
              Our Current services
            </p>
            <ul
              role='list'
              className='mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-x-10 gap-y-8 lg:mx-0 lg:justify-start'
            >
              {currentServicesData.map(({ id, name, image }) => (
                <li
                  key={"current-service" + id + name}
                  className={clsx(
                    "flex flex-col justify-center items-center space-y-2 w-20 text-center"
                  )}
                >
                  <img src={image} alt={name} className='h-16 md:h-12' />
                  <p className='text-xs font-medium'>{name}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className='relative mt-10 lg:col-span-7 lg:mt-0 xl:col-span-6'>
            <p className='text-center text-xl font-semibold text-gray-900 lg:text-left'>
              Future services
            </p>
            <ul
              role='list'
              className='mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-x-10 gap-y-8 lg:mx-0 lg:justify-start'
            >
              {futureServicesData.map(({ id, name, image }) => (
                <li
                  key={"future-service-" + id + name}
                  className={clsx(
                    "flex flex-col justify-center items-center w-24 text-center space-y-1"
                  )}
                >
                  <img src={image} alt={name} className='h-16 md:h-12' />
                  <p className='text-xs font-medium'>{name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}
