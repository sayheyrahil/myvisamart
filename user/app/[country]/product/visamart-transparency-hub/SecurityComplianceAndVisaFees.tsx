import React from "react";

const certifications = [
  { src: "/certs/aicpa-soc.png", alt: "AICPA SOC" },
  { src: "/certs/iso-risk.png", alt: "ISO Risk Management" },
  { src: "/certs/iso-27701.png", alt: "ISO 27701" },
  { src: "/certs/gdpr.png", alt: "GDPR" },
  { src: "/certs/iso-27001.png", alt: "ISO 27001" },
  { src: "/certs/iso-9001.png", alt: "ISO 9001" },
];

const visaFees = [
  {
    country: "Iaculis",
    govFee: "$96.43",
    atlysFee: "$96.43",
    diff: "0.00%",
    govLink: "Ipsum://aut Adipiscing elit En No...",
    reason: "Nullam nunc adipisci suspendisse",
  },
  {
    country: "Facilisi",
    govFee: "$96.43",
    atlysFee: "$96.43",
    diff: "Iaculis adipiscing Vel",
    govLink: "Nihit://per Adipiscing elit At Si...",
    reason: "Mollis hunc adipisci consectetur",
  },
  {
    country: "Dolorem",
    govFee: "$96.43",
    atlysFee: "$96.43",
    diff: "Ut labore et dolOre",
    govLink: "Porro://qui Adipiscing elit Mi Eh...",
    reason: "Nullam vita voluptate dignissimos",
  },
  {
    country: "Maximus",
    govFee: "$96.43",
    atlysFee: "$96.43",
    diff: "Ut labore et dolOre",
    govLink: "Neque://ubi Adipiscing elit Ex To...",
    reason: "Noster ipsa curabitur condimentum",
  },
  {
    country: "Maecenas",
    govFee: "$96.43",
    atlysFee: "$96.43",
    diff: "Ullamco voluptates Eos",
    govLink: "Autem://qui Adipiscing elit At Si...",
    reason: "Ornare vita inventore perferendis",
  },
  {
    country: "Officiis",
    govFee: "$96.43",
    atlysFee: "$96.43",
    diff: "Veniam voluptatum Sed",
    govLink: "Lorem://eos Adipiscing elit M E...",
    reason: "Tempus nemo veneratis suspendisse",
  },
  {
    country: "Pulvinar",
    govFee: "$96.43",
    atlysFee: "$96.43",
    diff: "Ut labore et dolOre",
    govLink: "Aenean://per Adipiscing elit Ma...",
    reason: "Cillum hunc malesuada consectetur",
  },
  {
    country: "Pulvinar",
    govFee: "$96.43",
    atlysFee: "$96.43",
    diff: "Aliquam voluptatumPer",
    govLink: "Cillum://via Adipiscing elit At No...",
    reason: "Congue hunc voluptate consectetur",
  },
  {
    country: "Feugiat",
    govFee: "$96.43",
    atlysFee: "$96.43",
    diff: "Ut labore et dolOre",
    govLink: "Etiam://leo Adipiscing elit Eu Et...",
    reason: "Quidem sint inventore consectetur",
  },
  {
    country: "Quisquam",
    govFee: "$96.43",
    atlysFee: "$96.43",
    diff: "Ut labore et dolOre",
    govLink: "Vitae://non Adipiscing elit Si Si...",
    reason: "Cillum quod curabitur lorem ipsum",
  },
];

export default function SecurityComplianceAndVisaFees() {
  return (
    <div className="bg-[#F7FAFC] py-16 px-4 flex flex-col items-center">
      {/* Security & Compliance */}
      <div className="  w-full flex flex-col md:flex-row gap-8 mb-16">
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-black mb-4">
            Our Commitment<br />to Security & Compliance
          </h2>
          <p className="text-gray-500 text-base mb-4  ">
            This section highlights our dedication to maintaining high standards of data security and compliance. Here you'll find our latest certifications, to keep you informed on how we uphold industry best practices.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 items-center justify-start md:justify-end">
          {certifications.map((cert, idx) => (
            <img
              key={idx}
              src={cert.src}
              alt={cert.alt}
              className="w-24 h-24 object-contain"
              style={{ background: "#fff", borderRadius: "50%", border: "1px solid #e5e7eb" }}
            />
          ))}
        </div>
      </div>
      {/* Visa Fees Unlocked */}
      <div className="  w-full flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-2 text-center">
          Visa Fees Unlocked
        </h2>
        <p className="text-gray-500 text-base mb-6 text-center">
          Full Transparency on Government vs. Visamart Costs
        </p>
        <div className="w-full overflow-x-auto">
          <table className="min-w-full bg-white rounded-xl shadow text-sm">
            <thead>
              <tr className="bg-[#F7FAFC] text-[#18181B] font-semibold">
                <th className="py-3 px-4 text-left">Country</th>
                <th className="py-3 px-4 text-left">Govt. Visa Fee</th>
                <th className="py-3 px-4 text-left">Visa Fee on Atlys</th>
                <th className="py-3 px-4 text-left">Difference</th>
                <th className="py-3 px-4 text-left">Government Link</th>
                <th className="py-3 px-4 text-left">Reason Behind Difference</th>
              </tr>
            </thead>
            <tbody>
              {visaFees.map((row, idx) => (
                <tr key={idx} className="border-t border-gray-100">
                  <td className="py-2 px-4">{row.country}</td>
                  <td className="py-2 px-4">{row.govFee}</td>
                  <td className="py-2 px-4">{row.atlysFee}</td>
                  <td className="py-2 px-4">{row.diff}</td>
                  <td className="py-2 px-4 truncate max-w-[140px]" title={row.govLink}>{row.govLink}</td>
                  <td className="py-2 px-4">{row.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-xs text-gray-400 mt-2 w-full text-left">
          <b>Note:</b> The government visa fee has been standardized in USD, with an exchange rate set at $1 = €0.4.
        </div>
      </div>
    </div>
  );
}
