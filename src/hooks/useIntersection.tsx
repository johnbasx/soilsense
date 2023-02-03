import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export const useIntersection = (variant: string) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start(variant);
    }
  }, [controls, inView]);
  return { controls, ref, inView };
};
