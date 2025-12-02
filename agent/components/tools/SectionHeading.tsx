import React from "react";
import SectionIcon from "./SectionIcon";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ children, className = "" }) => (
  <div className={`text-3xl font-semibold leading-9 text-teal-950 max-md:text-2xl max-md:leading-8 max-sm:text-xl max-sm:leading-7 flex   items-center gap-2 ${className}`}>
      <SectionIcon />  {children}
  </div>
);

export default SectionHeading;
