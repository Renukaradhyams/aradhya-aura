import { useRef } from "react";
import { useInView } from "framer-motion";

export const useScrollReveal = (margin: `${number}px` = "-80px") => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin });
  return { ref, isInView };
};
