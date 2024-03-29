import { ButtonLink } from "../../components/Button";
import React from "react";
import { footerLinksData } from "../../contents/footerLinks";
import AppStoreDownload from "./AppStoreDownload";
import PlayStoreDownload from "./PlayStoreDownload";
import { SocialLinks } from "./SocialLinks";

const FooterLinks = () => {
  return (
    <div className='grid grid-cols-2 gap-8 mt-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16'>
      <div className='col-span-2'>
        <div>
          <h2 className='text-2xl font-bold text-white drop-shadow'>
            SoilSense Private Limited
          </h2>

          <p className='mt-4 text-gray-100 drop-shadow'>
            Let's dive into the future of Agriculture & Plantation with the
            power of advanced technologies.
          </p>
        </div>
      </div>
      <div className='col-span-3 lg:col-span-3 lg:flex lg:items-end lg:justify-end gap-x-4 space-y-6'>
        <div className='grid grid-cols-1 space-y-4'>
          <ButtonLink
            href='#!'
            variant='white'
            className='text-center font-semibold'
          >
            Request a demo
          </ButtonLink>
          <AppStoreDownload />
          <PlayStoreDownload />
        </div>
      </div>
      {footerLinksData.map((data, index) => (
        <div
          className='col-span-2 sm:col-span-1'
          key={"Footer-link-" + data.id}
        >
          <p className='font-medium drop-shadow text-white'>
            {data.footerHead}
          </p>

          <nav aria-label='Footer Navigation - Services' className='mt-6'>
            <ul className='space-y-4 text-sm'>
              {data.footers.map((footerLink, idx) => (
                <li key={"Footer-nav-" + footerLink.id}>
                  <a
                    href={footerLink.link}
                    className='text-gray-100 transition drop-shadow hover:opacity-75'
                  >
                    {footerLink.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ))}
      <SocialLinks />
    </div>
  );
};

export default FooterLinks;
