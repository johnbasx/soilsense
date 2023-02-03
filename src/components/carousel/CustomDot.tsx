import { DotProps } from "react-multi-carousel/lib/types";
import React from "react";
import clsx from "clsx";
import { MdMaximize } from "react-icons/md";
import { createID } from "../../utils/helpers";

export const carouselItems = [
  {
    id: createID(),
    src: "../../src/assets/images/1.jpeg",
    heading: "Soil Sense",
    tagline: "Innovation in precise Agriculture",
  },
  {
    id: createID(),
    src: "../src/assets/images/2.jpg",
    heading: "Smart irrigation ",
    tagline:
      "Reduces water scarcity risk and prevents exploitation of underground water table",
  },
  {
    id: createID(),
    src: "../src/assets/images/3.jpg",
    heading: "Soil Nutrients",
    tagline: "Balance with Organic Manure",
  },
];

const CustomDots = ({
  index,
  active,
  onClick,
  carouselState,
  ...rest
}: DotProps) => {
  return (
    <button
      className={clsx(
        active ? "text-primary-200" : "text-primary-50",
        "duration-50 text-3xl font-extrabold"
      )}
      // @ts-ignore
      onClick={() => onClick()}
      {...rest}
    >
      <MdMaximize className='' />
    </button>
  );
};
export default CustomDots;
