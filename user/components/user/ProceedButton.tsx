import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

 
export default function ProceedButton({ onClick } : { onClick: () => void }) {
    return (
        <button
            className="bg-[#022538] text-[#578BCC] px-10 py-4 rounded-full flex items-center gap-2 hover:bg-[#083d7a] transition text-lg font-medium shadow"
            onClick={onClick}
        >
            Proceed
            <MdKeyboardDoubleArrowRight  size={33}/>
        </button>
    );
}
