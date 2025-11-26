import React from "react";
import { CheckCircle } from "lucide-react";
import { TbArrowBadgeRightFilled } from "react-icons/tb";

const glossaryData = {
  A: [
    {
      title: "Adjustment Of Status",
      desc: "Adjustment of Status: A key process in the U.S. for non-immigrants to become permanent residents without leaving the country."
    },
    {
      title: "Alien",
      desc: "The term used to refer to individuals who lack legal residency; for certain acts, clarifying immigration regulations and legal contexts."
    },
    {
      title: "Appeal Letter",
      desc: "An appeal letter is a formal request for the review of a denied visa application, providing reasons and additional information to overturn the decision."
    },
    {
      title: "Asylum",
      desc: "Asylum is protection granted by countries to individuals facing danger or persecution in their home countries, ensuring their safety."
    }
  ],
  B: [
    {
      title: "Background Check",
      desc: "Background checks examine an individual's criminal, financial, and employment history to ensure their credibility and safety."
    },
    {
      title: "Bilateral Agreement",
      desc: "Biometrics in visa applications use unique body features, like fingerprints, for secure and accurate traveler identification."
    },
    {
      title: "Biometrics",
      desc: "Biometrics in visa applications use unique body features, like fingerprints, for secure and accurate traveler identification."
    },
    {
      title: "Bona Fide",
      desc: "Border control is part of the rules and regulations enforced at entry and exit points to regulate travel and goods."
    },
    {
      title: "Border Control",
      desc: "Border control ensures safety and prevents unlawful entry and illegal transportation of goods."
    },
    {
      title: "Business Visa",
      desc: "A visa issued for business-related travel."
    }
  ],
  C: [
    {
      title: "Citizenship",
      desc: "Citizenship legally belongs to a specific country, entitling one to rights such as voting, healthcare, and education."
    },
    {
      title: "Consent Letter",
      desc: "A consent letter in visa applications is a document granting permission for a minor to travel or authorizing someone to act on a person's behalf."
    },
    {
      title: "Consular Officer",
      desc: "A consular officer represents a country's interests abroad, responsible for providing consular services and issuing visas."
    },
    {
      title: "Consular Processing",
      desc: "The visa application process conducted while outside the home country."
    },
    {
      title: "Consulate",
      desc: "A consulate is a diplomatic office that provides services for passport renewal and visa issuance, overseen by a consul."
    },
    {
      title: "Cultural Exchange Visa",
      desc: "A visa for cultural exchange programs."
    },
    {
      title: "Customs Declaration",
      desc: "A requirement for travelers, detailing goods for customs clearance and regulation across borders."
    }
  ]
};

type GlossaryKey = keyof typeof glossaryData;

const GlossarySection = () => {
  return (
    <div className="w-full flex justify-center bg-[#F5F8FA] py-12">
      <div className="w-full max-w-4xl bg-white p-8 rounded-xl shadow-sm">

        {Object.keys(glossaryData).map((letter) => (
          <div key={letter} className="mb-10">
            <h2 className="text-3xl font-bold text-[#0A509F] mb-6">{letter}</h2>

            <div className="space-y-6">
              {(glossaryData[letter as GlossaryKey]).map((item:any, idx:any) => (
                <div key={idx} className="flex gap-4">
                  <TbArrowBadgeRightFilled color="0A509F" size={30} />
                  <div>
                    <h3 className="font-semibold text-lg text-[#23272E]">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-6">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default GlossarySection;
