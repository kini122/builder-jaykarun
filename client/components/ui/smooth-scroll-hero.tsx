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
    <div className={"relative w-full " + (className ?? "")}>
      {/* Mobile image */}
      <div
        className="block md:hidden w-full h-[380px] bg-center bg-cover"
        style={{ backgroundImage: `url(${mobile})` }}
        aria-hidden
      />

      {/* Desktop image */}
      <div
        className="hidden md:block w-full h-[620px] bg-center bg-cover"
        style={{ backgroundImage: `url(${desktopImage})` }}
        aria-hidden
      />
    </div>
  );
};

export default SmoothScrollHero;
