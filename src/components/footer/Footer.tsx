import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import FooterLinks from "./FooterLinks";
import Copyrights from "./Copyrights";

export function Footer() {
  return (
    <footer
      aria-label='Site Footer'
      id='footer'
      className='relative text-white'
    >
      <div className='absolute bg-green-land bg-no-repeat bg-cover -z-10 brightness-75 inset-0 w-full h-full' />
      <Container>
        <div className='bg-transparent'>
          <div className='max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8'>
            <div className='lg:flex lg:items-start lg:gap-8'>
              <div className='h-24 w-auto flex'>
                <Logo />
              </div>

              <FooterLinks />
            </div>

            <Copyrights />
          </div>
        </div>
      </Container>
    </footer>
  );
}
