// filepath: /Users/macbookpro/Documents/project/myvisamart/frontend/components/tools/StepCard.tsx
import React from "react";

interface StepCardProps {
    number: number;
    title: string;
    desc: string;
    bgImage?: string;
}


const StepCard: React.FC<StepCardProps> = ({ number, title, desc }) => (
    <div
        className="flex rounded-2xl p-6 items-center gap-4 relative overflow-hidden"
        style={{
            backgroundImage: `url('${"/tools/Frame272632086.png"}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            // minHeight: "120px",
            width: "450px",
            borderRadius: "25px",

        }}    >
        <div className="  z-10 absolute top-6">
            <div className="   text-white text-2xl font-bold">
                {String(number).padStart(2, "0")}
            </div>
        </div>
        <div className="z-10 mt-20">
            <div className="font-semibold text-lg mb-1 mt-10">{title}</div>
            <div className="text-[#5B5F62] text-base max-w-xl">{desc}</div>
        </div>
    </div >
);

export default StepCard;