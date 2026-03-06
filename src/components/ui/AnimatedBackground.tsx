import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface AnimatedBackgroundProps {
  imageSrc: string;
  overlayOpacity?: number;
  parallaxStrength?: number;
  className?: string;
  children?: React.ReactNode;
}

export const AnimatedBackground = ({
  imageSrc,
  overlayOpacity = 0.7,
  parallaxStrength = 50,
  className = "",
  children,
}: AnimatedBackgroundProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-parallaxStrength, parallaxStrength]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.5]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* Parallax background image */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{ y, scale }}
      >
        <motion.img
          src={imageSrc}
          alt=""
          className="w-full h-full object-cover"
          style={{ opacity }}
        />
      </motion.div>

      {/* Dark gradient overlay for text readability */}
      <div 
        className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/70 to-background"
        style={{ opacity: overlayOpacity }}
      />

      {/* Additional tech grid overlay */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--primary)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.05)_1px,transparent_1px)] bg-[size:3rem_3rem]" />

      {children}
    </div>
  );
};
