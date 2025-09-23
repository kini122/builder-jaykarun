import * as React from "react";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";

export interface SmoothScrollHeroProps {
  /** Height of the scroll section in pixels @default 1500 */
  scrollHeight?: number;
  /** Background image URL for desktop view */
  desktopImage: string;
  /** Background image URL for mobile view */
  mobileImage?: string;
  /** Initial clip path percentage @default 10 */
  initialClipPercentage?: number;
  /** Final clip path percentage @default 90 */
  finalClipPercentage?: number;
  className?: string;
}

interface SmoothScrollHeroBackgroundProps extends Required<Pick<SmoothScrollHeroProps,
  "scrollHeight" | "desktopImage" | "mobileImage" | "initialClipPercentage" | "finalClipPercentage">> {}

const SmoothScrollHeroBackground: React.FC<SmoothScrollHeroBackgroundProps> = ({
  scrollHeight,
  desktopImage,
  mobileImage,
  initialClipPercentage,
  finalClipPercentage,
}) => {
  const { scrollY } = useScroll();

  const clipStart = useTransform(scrollY, [0, scrollHeight], [initialClipPercentage, 0]);
  const clipEnd = useTransform(scrollY, [0, scrollHeight], [finalClipPercentage, 100]);

  const clipPath = useMotionTemplate`polygon(${clipStart}% ${clipStart}%, ${clipEnd}% ${clipStart}%, ${clipEnd}% ${clipEnd}%, ${clipStart}% ${clipEnd}%)`;

  const backgroundSize = useTransform(scrollY, [0, scrollHeight + 500], ["170%", "100%"]);

  return (
    <motion.div
      className="sticky top-0 h-screen w-full"
      style={{ willChange: "transform, opacity" }}
    >
      {/* Blurred background layer - Mobile */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          backgroundImage: `url(${mobileImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(40px)",
          transform: "scale(1.1)",
        }}
      />
      {/* Blurred background layer - Desktop */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          backgroundImage: `url(${desktopImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(40px)",
          transform: "scale(1.1)",
        }}
      />
      
      {/* Clipped foreground layer */}
      <motion.div
        className="absolute inset-0 z-10"
        style={{ clipPath, willChange: "transform, opacity" }}
      >
        {/* Mobile background */}
        <motion.div
          className="absolute inset-0 md:hidden"
          style={{
            backgroundImage: `url(${mobileImage})`,
            backgroundSize,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        {/* Desktop background */}
        <motion.div
          className="absolute inset-0 hidden md:block"
          style={{
            backgroundImage: `url(${desktopImage})`,
            backgroundSize,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </motion.div>
    </motion.div>
  );
};

/**
 * A smooth scroll hero component with parallax background effect
 */
const SmoothScrollHero: React.FC<SmoothScrollHeroProps> = ({
  scrollHeight = 1500,
  desktopImage,
  mobileImage,
  initialClipPercentage = 10, // Changed from 25 to 10
  finalClipPercentage = 90,   // Changed from 75 to 90
  className,
}) => {
  const mobile = mobileImage ?? desktopImage;
  return (
    <div style={{ height: `calc(${scrollHeight}px + 100vh)` }} className={"relative w-full " + (className ?? "") }>
      <SmoothScrollHeroBackground
        scrollHeight={scrollHeight}
        desktopImage={desktopImage}
        mobileImage={mobile}
        initialClipPercentage={initialClipPercentage}
        finalClipPercentage={finalClipPercentage}
      />
    </div>
  );
};

export default SmoothScrollHero;