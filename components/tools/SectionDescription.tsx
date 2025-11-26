import React from "react";

interface SectionDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

const SectionDescription: React.FC<SectionDescriptionProps> = ({ children, className = "" }) => (
  <div className={`w-full text-base leading-6 text-zinc-600 max-md:text-base max-md:leading-5 max-sm:text-sm max-sm:leading-5 my-2 ${className}`}>
    {children}
  </div>
);

export default SectionDescription;
