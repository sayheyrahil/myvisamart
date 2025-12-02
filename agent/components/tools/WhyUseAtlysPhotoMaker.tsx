import React from "react";
import { TbArrowBadgeRightFilled } from "react-icons/tb";

interface Point {
  title: string;
  desc: string;
}

const WhyUseAtlysPhotoMaker: React.FC<{ points: Point[] }> = ({ points }) => (
  <ul className="mb-4 space-y-2">
    {points.map((point, idx) => (
      <li key={idx} className="flex items-start gap-2">
        <TbArrowBadgeRightFilled color="#0A509F" size={22} className="mt-1" />
        <span>
          <b>{point.title}</b> {point.desc}
        </span>
      </li>
    ))}
  </ul>
);

export default WhyUseAtlysPhotoMaker;
