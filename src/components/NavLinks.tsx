import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { createID } from "../utils/helpers";

export const navigationLinks = [
  {
    id: createID(),
    label: "Home",
    link: "#!",
  },
  {
    id: createID(),
    label: "Services",
    link: "#footer",
  },
  {
    id: createID(),
    label: "About",
    link: "#!",
  },
  {
    id: createID(),
    label: "Contact",
    link: "/contact-page",
  },
];

export function NavLinks() {
  // let [hoveredIndex, setHoveredIndex] = useState<number>(0);

  return (
    <>
      {navigationLinks.map(({ label, id, link }, index) => (
        <a
          key={"navigation" + id}
          href={link}
          className='relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-white transition-colors duration-200 hover:text-primary-50 hover:bg-primary-100/50 font-semibold'
          // onMouseEnter={() => setHoveredIndex(index)}
          // onMouseLeave={() => setHoveredIndex(0)}
        >
          <AnimatePresence>
            {/* {hoveredIndex === index && ( */}
            <motion.span
              className='absolute inset-0 rounded-lg'
              // layoutId='hoverBackground'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.15 } }}
              exit={{
                opacity: 0,
                transition: { duration: 0.15, delay: 0.2 },
              }}
            />
            {/* )} */}
          </AnimatePresence>
          <span className='relative z-10'>{label}</span>
        </a>
      ))}
    </>
  );
}
