import { Popover } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { Fragment } from "react";
import { TbArrowRight, TbChevronUp, TbMenu2 } from "react-icons/tb";
import { ButtonLink } from "./Button";
import Carousel from "./carousel/Carousel";
import { Container } from "./Container";
import PlayStoreDownload from "./footer/PlayStoreDownload";
import { Logo } from "./Logo";
import { navigationLinks, NavLinks } from "./NavLinks";

interface MobileNavProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

function MobileNavLink({ children, ...props }: MobileNavProps) {
  return (
    <Popover.Button
      as='a'
      className='block font-medium text-base px-3 py-2 hover:bg-primary-100 rounded-md text-gray-700 duration-150'
      {...props}
    >
      {children}
    </Popover.Button>
  );
}

export function Header() {
  return (
    <header className='relative'>
      <div className='absolute top-0 h-[50vh] right-0 w-full'>
        <Carousel />
      </div>
      <nav>
        <Container className='relative z-50 flex justify-between py-4 mb-[40vh] md:mb-[40vh]'>
          <Popover as={Fragment}>
            {({ open }) => (
              <>
                <div className='relative z-10 flex-grow flex justify-between items-center gap-16'>
                  <a href='/' aria-label='Home'>
                    {open ? (
                      <Logo
                        dark
                        className='h-10 w-auto drop-shadow lg:hidden'
                      />
                    ) : (
                      <Logo className='h-10 w-auto drop-shadow' />
                    )}
                  </a>
                  <div className='hidden lg:flex lg:gap-10 mr-10'>
                    <NavLinks />
                  </div>
                </div>
                <div className='flex items-center gap-6'>
                  <ButtonLink
                    href='/login'
                    variant='outline-white'
                    className='hidden lg:block font-semibold'
                  >
                    Download the app
                  </ButtonLink>
                  <ButtonLink
                    href='#'
                    className='hidden lg:inline-flex justify-center items-center space-x-2 font-semibold'
                  >
                    <span>Login</span> <TbArrowRight />
                  </ButtonLink>
                  {/* <Popover className='lg:hidden'>
              {({ open }) => (
                <> */}
                  <div className='lg:hidden'>
                    <Popover.Button
                      className='relative z-10 -m-2 inline-flex items-center rounded-lg stroke-primary-50 p-2 hover:bg-primary-200/50 hover:stroke-primary-600 active:stroke-primary-900 focus:outline-none'
                      aria-label='Toggle site navigation'
                    >
                      {({ open }) =>
                        open ? (
                          <TbChevronUp className='h-6 w-6' />
                        ) : (
                          <TbMenu2 className='h-6 w-6 text-white' />
                        )
                      }
                    </Popover.Button>
                    <AnimatePresence initial={false}>
                      {open && (
                        <>
                          <Popover.Overlay
                            static
                            as={motion.div}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className='fixed inset-0 z-0 bg-black/50 backdrop-blur'
                          />
                          <Popover.Panel
                            static
                            as={motion.div}
                            initial={{ opacity: 0, y: -32 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{
                              opacity: 0,
                              y: -32,
                              transition: { duration: 0.2 },
                            }}
                            className='absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-28 shadow-2xl shadow-gray-900/20'
                          >
                            <div className='space-y-4'>
                              {navigationLinks.map((item, index) => (
                                <MobileNavLink
                                  href={item.link}
                                  className='inline-flex items-center w-full px-3 py-2 space-x-2 text-lg font-medium'
                                  key={"Mobile-navigation-" + item.id}
                                >
                                  <span>{item.label}</span>
                                </MobileNavLink>
                              ))}
                            </div>
                            <div className='mt-8 flex flex-col gap-4 px-3'>
                              {/* <ButtonLink
                              href='/login'
                              variant='outline'
                              size='large'
                              className='text-center w-full'
                            >
                              Download the app
                            </ButtonLink> */}
                              <PlayStoreDownload />
                              <ButtonLink
                                href='#!'
                                size='large'
                                className='w-full text-center'
                              >
                                Login to your account
                              </ButtonLink>
                              <div className='text-center'>
                                <span className='text-gray-500 text-sm'>
                                  Don't have an account?
                                </span>
                                <ButtonLink href='#!' variant='link'>
                                  Register
                                </ButtonLink>
                              </div>
                            </div>
                          </Popover.Panel>
                        </>
                      )}
                    </AnimatePresence>
                  </div>
                  {/* </>
              )}
            </Popover> */}
                </div>
              </>
            )}
          </Popover>
        </Container>
      </nav>
    </header>
  );
}
