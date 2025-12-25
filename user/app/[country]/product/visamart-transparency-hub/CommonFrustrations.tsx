import React from "react";

const reasons = [
	{
		number: "01",
		title: "Technical Glitches",
		desc: "Technical glitches result in issues being approved with incorrect information or users receiving inaccurate updates on their visa application status.",
	},
	{
		number: "02",
		title: "Delayed Assistance",
		desc: "Delayed responses to helpdesk situations or slow ticket resolution can exacerbate user issues.",
	},
	{
		number: "03",
		title: "Missed Estimated Time of Arrival (ETA)",
		desc: "Delays with arrival times or updates may inconvenience users or disrupt travel plans.",
	},
	{
		number: "04",
		title: "Refund and Cancellation Disputes",
		desc: "Refund requests or cancellations can be slow or disputed, causing user frustration.",
	},
];

export default function CommonFrustrations() {
	return (
		<div className="bg-[#F7FAFC] min-h-[347px] flex flex-col md:flex-row px-4 py-10">
			<div className="w-full md:w-1/2 mb-8 md:mb-0">
				<h2 className="text-xl md:text-2xl font-semibold text-black mb-4">
					Common Reasons behind
					<br />
					Frustration
				</h2>
			</div>
			<div className="flex-1 flex flex-col gap-6">
				{reasons.map((r) => (
					<div
						key={r.number}
						className="bg-[#E0E7EF] rounded-xl p-6 flex flex-col gap-2  "
						style={{ minHeight: 100 }}
					>
						<div className="text-3xl font-bold text-[#B6C3D6] mb-1">
							{r.number}
						</div>
						<div className="font-semibold text-[#18181B]">{r.title}</div>
						<div className="text-gray-500 text-sm">{r.desc}</div>
					</div>
				))}
			</div>
		</div>
	);
}
