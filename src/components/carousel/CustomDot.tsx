import { DotProps } from "react-multi-carousel/lib/types";
import React from "react";
import clsx from "clsx";
import { MdMaximize } from "react-icons/md";
import { createID } from "@/utils/helpers";
import image1 from "@/assets/images/1.jpeg";
import image2 from "@/assets/images/2.jpg";
import image3 from "@/assets/images/3.jpg";

export const carouselItems = [
  {
    id: createID(),
    src: image3,
    heading: "Soil Sense",
    tagline: "Innovation in precise Agriculture",
  },
  {
    id: createID(),
    src: image1,
    heading: "Smart irrigation ",
    tagline:
      "Reduces water scarcity risk and prevents exploitation of underground water table",
  },
  {
    id: createID(),
    src: image2,
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
