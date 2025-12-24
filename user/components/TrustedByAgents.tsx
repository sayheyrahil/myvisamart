import Image from "next/image";
import React from "react";

const agentLogos = [
    { src: "/image4560456748.png", alt: "Dial Travel" },
    { src: "/Text.png", alt: "Traveldeal Online" },
    // Add more logos as needed
];

export default function TrustedByAgents() {
    return (
        <section className="w-full   py-16 flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                <span className="text-brand">5000+</span>{" "}
                Travel Agents Trust Visamart for <br className="hidden md:block" />
                On Time Visas
            </h2>
            <div className="w-full flex flex-col items-center">
                <div className="w-full flex flex-wrap justify-center gap-x-12 gap-y-8 ">
                    {Array.from({ length: 12 }).map((_, i) => (
                        <div key={i} className="flex flex-col items-center min-w-[120px]">
                            <Image
                                src={agentLogos[i % agentLogos.length].src}
                                alt={agentLogos[i % agentLogos.length].alt}
                                width={80}
                                height={40}
                                className="object-contain mb-2"
                            />
                            <span className="font-medium text-base text-[#222]">
                                {agentLogos[i % agentLogos.length].alt}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
