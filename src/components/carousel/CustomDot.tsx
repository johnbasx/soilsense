import { DotProps } from "react-multi-carousel/lib/types";
import clsx from "clsx";
import { MdMaximize } from "react-icons/md";
import { createID } from "@/utils/helpers";
import Image1 from "@/assets/images/1.jpeg";
import Image2 from "@/assets/images/2.jpg";
import Image3 from "@/assets/images/3.jpg";

export interface CarouselProps {
  id: string;
  src: string;
  heading: string;
  tagline: string;
}

export const carouselItems: CarouselProps[] = [
  {
    id: createID(),
    src: Image3,
    heading: "Soil Sense",
    tagline: "Innovation in precise Agriculture",
  },
  {
    id: createID(),
    src: Image1,
    heading: "Smart irrigation ",
    tagline:
      "Reduces water scarcity risk and prevents exploitation of underground water table",
  },
  {
    id: createID(),
    src: Image2,
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
