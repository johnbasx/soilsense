import clsx from "clsx";
import logoImage from "@/assets/logos/soilsense-logo.png";
import logoDarkImage from "@/assets/logos/soilsense.png";

interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  image?: string;
  dark?: boolean;
}

export function Logo({ image = logoImage, dark = false, ...props }: LogoProps) {
  return (
    <img
      className={clsx("object-contain", props.className)}
      alt='SoilSense Logo'
      src={dark ? logoDarkImage : logoImage}
    />
  );
}
