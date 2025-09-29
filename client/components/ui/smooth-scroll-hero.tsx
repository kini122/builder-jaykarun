import * as React from "react";
export interface SmoothScrollHeroProps {
  /** Background image URL for desktop view */
  desktopImage: string;
  /** Background image URL for mobile view */
  mobileImage?: string;
  className?: string;
}

/**
 * Simplified static hero: no animations, minimal and professional
 */
const SmoothScrollHero: React.FC<SmoothScrollHeroProps> = ({
  desktopImage,
  mobileImage,
  className,
}) => {
  const mobile = mobileImage ?? desktopImage;
  return (
    <div className={"relative w-full bg-white " + (className ?? "")}>
      {/* White hero block - mobile */}
      <div className="block md:hidden w-full h-[320px] bg-white" aria-hidden />

      {/* White hero block - desktop */}
      <div className="hidden md:block w-full h-[520px] bg-white" aria-hidden />
    </div>
  );
};

export default SmoothScrollHero;
